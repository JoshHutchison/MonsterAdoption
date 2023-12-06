import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { useControls } from "leva";

export function ModelComponent({ filePath, ...props }) {
  const model = useGLTF(filePath);

    const animations = useAnimations(model.animations, model.scene)
    
    const { animationName } = useControls(
      filePath
      .replace("./", "")
      .replace(".", "")
      .replace("glb", "")
      .replace("gltf", ""),{
      animationName: {options: animations.names}
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
