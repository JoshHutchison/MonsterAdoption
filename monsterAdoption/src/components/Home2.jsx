import { useRef, useState } from "react";
import { useFrame, useThree, Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  ScrollControls,
  Scroll,
  useScroll,
} from "@react-three/drei";

import { useControls } from "leva";

import { BuffaloMan, Earth } from "./Models";
import DragonEarth from "./DragonEarth";
import Nav from "./Nav";
import woman_baby_monster from "../assets/woman-baby-monster.png";
import man_walking_monster from "../assets/man-walking-monster.png";
import monster_frisbee from "../assets/monster-frisbee.png";
import monster_hide_seek from "../assets/monster-hide-seek.png";
import monster_dogs from "../assets/monster-dogs.png";
import boy_wolf from "../assets/boy-wolf.png";
import dragon_flying_girl from "../assets/dragon-flying-girl.png";
import woman_bicycle_monster from "../assets/woman-bicycle-monster.png";
import monster_holding_baby from "../assets/monster-holding-baby.png";
import monster_adopt_us from '../assets/monster-adopt-us.jpg'



export default function Home2() {
  return (
    <>
      <div className="home">
        <Canvas
          shadows={true}
          camera={{
            fov: 45,
            near: 1,
            far: 300,
            position: [-4, 2, 12],
            // position: [ -1, 2, 12 ]
          }}
        >
          <directionalLight
            castShadow
            position={[1, 2, 3]}
            intensity={4.5}
            shadow-normalBias={0.04}
          />
          <ambientLight intensity={1.5} />

          <ScrollControls pages={7} damping={0.5} scroll={scroll}>
            <DragonEarth />
            <Scroll>{/* Canvas contents in here will scroll along */}</Scroll>
            <Scroll html>
              {/* DOM contents in here will scroll along */}
              {/* <div
            style={{
              height: "300vh",
              display: "flex",
              flexDirection: "column",
            }}
          > */}
              <div style={{ height: "200vh" }}>
                <h1 >Monster Adoption Worldwide </h1>
                <h2>Adopt a Monster Today!</h2>
              </div>
              
              <div className="title-img-container">
                <div className="homepage-img-left">
                  <div className="img-div">
                    <img
                      src={woman_baby_monster}
                      alt="Woman with Baby Monster"
                    />
                  </div>
                  <div className="image-text">
                    <p>
                      Happy and endearing monster babies, bringing joy and
                      innocence into homes
                    </p>
                  </div>
                </div>
                <div className="homepage-img-right">
                  <div className="image-text">
                    <p>
                      Monsters encourage exploration, making daily walks a
                      delightful journey
                    </p>
                  </div>
                  <div className="image-text">
                    <p>Monsters are fun to walk</p>
                  </div>
                  <div className="img-div">
                    <img src={man_walking_monster} alt="Man Walking Monster" />
                  </div>
                </div>
                <div className="homepage-img-left">
                  
                  <div className="img-div">
                    <img src={monster_frisbee} alt="Monster Playing Frisbee" />
                  </div>
                  <div className="image-text">
                    <p>
                      Energetic and enthusiastic monsters turn playtime into
                      thrilling frisbee fun
                    </p>
                  </div>
                </div>
                <div className="homepage-img-right">
                  <div className="image-text">
                    <p>
                      Engaging and playful monsters, perfect for endless fun and
                      games
                    </p>
                  </div>
                  <div className="img-div">
                    <img
                      src={monster_hide_seek}
                      alt="Monster Playing Hide and Seek"
                    />
                  </div>
                </div>
                <div className="homepage-img-left">
                  <div className="img-div">
                    <img src={monster_dogs} alt="Monster with Dogs" />
                  </div>
                  <div className="image-text">
                    <p>
                      Monsters are adept at understanding and bonding with other
                      pets, creating a harmonious environment
                    </p>
                  </div>
                </div>
                <div className="homepage-img-right">
                  <div className="image-text">
                    <p>
                      Monsters are loyal companions offering unwavering
                      protection and companionship
                    </p>
                  </div>
                  <div className="img-div">
                    <img src={boy_wolf} alt="Boy and Wolf" />
                  </div>
                </div>
                <div className="homepage-img-left">
                  <div className="img-div">
                    <img
                      src={dragon_flying_girl}
                      alt="Dragon Flying with Girl"
                    />
                  </div>
                  <div className="image-text">
                    <p>
                      Having a monster you can have enchanting aerial adventures with your magical and majestic
                      monster companion
                    </p>
                  </div>
                </div>
                ,
                <div className="homepage-img-right">
                  <div className="image-text">
                    <p>
                      Monsters make exercise enjoyable, fostering a healthy
                      and active lifestyle
                    </p>
                  </div>
                  <div className="img-div">
                    <img
                      src={woman_bicycle_monster}
                      alt="Woman Riding Bicycle with Monster"
                    />
                  </div>
                </div>
                <div className="homepage-img-left">
                  <div className="img-div">
                    <img
                      src={monster_holding_baby}
                      alt="Monster Holding Baby"
                    />
                  </div>
                  <div className="image-text">
                    <p>
                      Gentle and caring monsters, ideal for nurturing and
                      supporting family bonds.
                    </p>
                  </div>
                </div>
              </div>

              <h1>Adopt today!</h1>
              <img className="centered-image" src={monster_adopt_us} alt="" srcset="" style={{ width: "80%", margin:"0 auto"}}/>
              <h1 style={{ height: "100vh" }}></h1>

              <h1 style={{ height: "100vh" }}></h1>
              <p></p>

              {/* </div> */}
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
}
