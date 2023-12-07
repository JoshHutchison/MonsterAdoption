import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useRefs from "react-use-refs";
import { Canvas } from "@react-three/fiber";
import {
  View,
  Preload,
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import axios from "axios";
import { ModelComponent } from "./ModelComponent";

const PetPage = () => {
  const { id } = useParams();

  const [pet, setPet] = useState(null);

  const [ref, view] = useRefs();

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        console.log(id);
        const response = await axios.get(`http://localhost:8000/pets/${id}`);
        console.log("call", response.data);

        setPet(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPetDetails();
  }, [id]);

  // Render pet details once fetched
  return (
    <div ref={ref} className="container">
      {pet ? (
        <>
          <div className="card petpage">
            <div className="img-box">
                <div>
                    <h2>{pet.name}</h2>
                    <div ref={view} className="view" />
                </div>
                <div>
                    <p>Species: {pet.species}</p>
                    <p>Breed: {pet.breed}</p>
                    <p>Age: {pet.age}</p>
                    <p>Description: {pet.description}</p>
                    <p>Adoption Status: {pet.adoption_status}</p>
                </div>
            </div>
            <Link to={`/Adoption/${pet.id}`}>
              <button className="adopt-button">Adopt Now</button>
            </Link>
          </div>
          <Canvas eventSource={ref} className="canvas" shadows={true}>
            <View track={view}>
              <Common color="lightblue" />
              <ModelComponent
                scale={pet.model_state.scale * 1.2}
                position={pet.model_state.position}
                rotation={pet.model_state.rotation}
                filePath={pet.model_filename}
              />
              <OrbitControls makeDefault />
            </View>
          </Canvas>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const Common = ({ color }) => (
  <>

    <PerspectiveCamera makeDefault fov={40} position={[-4, 2, 6]} />

    <directionalLight
      castShadow
      position={[1, 2, 3]}
      intensity={4.5}
      shadow-normalBias={0.04}
    />
    <ambientLight intensity={1.5} />
  </>
);

export default PetPage;
