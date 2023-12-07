import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { useControls } from "leva";

export function ModelComponent({ filePath, ...props }) {
  console.log(filePath)
  const model = useGLTF(filePath);

    const animations = useAnimations(model.animations, model.scene)

    const defaultAnimationName = animations.names.length > 0 ? animations.names[0] : ''; // Set the first animation as default, change this logic as needed

    let defaultRunAnimationName = defaultAnimationName;

    animations.names.some(name => {
      if (name.toLowerCase().includes('run')) {
        defaultRunAnimationName = name;
        return true; // Stop looping when 'run' is found
      }
      return false;
    });
    
    const { animationName } = useControls(
      filePath
        .replace("./", "")
        .replace(".", "")
        .replace("glb", "")
        .replace("gltf", ""),
      {animationName: {options: animations.names, value: defaultRunAnimationName,}
    }) 

  useEffect(() => {
    const action = animations.actions[animationName]

    if (action) {
      action
        .reset()
        .fadeIn(0.5)
        .play();

      return () => {
        action.fadeOut(0.5);
      };
    }
  }, [animationName]);

  return <primitive object={model.scene} {...props} />;
}
