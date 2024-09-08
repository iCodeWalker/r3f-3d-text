import {
  Text3D,
  Center,
  useMatcapTexture,
  OrbitControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useEffect, useState } from "react";

// three.js
import * as THREE from "three";

// ##### For restricting multiple geometry creation using native three.js ####
const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32);
const material = new THREE.MeshMatcapMaterial();

export default function Experience() {
  // ##### For restricting multiple geometry creation using r3f
  //   const [torusGeometry, setTorusGeometry] = useState();
  //   const [material, setMaterial] = useState();

  const [matcapTexture] = useMatcapTexture("36220C_C6C391_8C844A_8B7B4C", 256);

  const tempArray = [...Array(100)];
  /* multiple donuts */

  // ##### For restricting multiple geometry creation using native three.js ####
  // Since we only want to appy texture for once, we can use useEffect hook: ### For native three.js ###
  useEffect(() => {
    // When using three js with r3f we face some issues with encoding and lighting, as r3f implicitly does all this in three.js we have to do it manually.

    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* ##### For restricting multiple geometry creation using r3f ##### START */}

      {/* passing a function to ref attribute is similar to setting the value of torusGeometry state equal to the
      <torusGeometry args={[1, 0.6, 16, 32]} />  or calling setTorusGeometry(<torusGeometry args={[1, 0.6, 16, 32]}) */}
      {/* <torusGeometry ref={setTorusGeometry} args={[1, 0.6, 16, 32]} /> */}

      {/* bringing material outside the loop */}
      {/* <meshMatcapMaterial ref={setMaterial} matcap={matcapTexture} /> */}

      {/* ##### For restricting multiple geometry creation using r3f ##### END */}

      {/* <mesh scale={1.5}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}

      {/* Centering the text */}
      <Center>
        <Text3D
          material={material}
          font="./fonts/helvetiker_regular.typeface.json"
          size={0.76}
          height={0.2}
          curveSegments={12}
          bevelEnabled={true}
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={6}
        >
          Hello world
          {/* <meshNormalMaterial /> */}
          {/* use matcap material */}
          {/* <meshMatcapMaterial matcap={matcapTexture} /> */}
        </Text3D>
      </Center>

      {/* Single Donuts */}
      {/* <mesh>
        <torusGeometry args={[1, 0.6, 16, 32]} />
        <meshMatcapMaterial matcap={matcapTexture} />
      </mesh> */}

      {/* Multiple Donuts */}
      {[...Array(100)].map((value, index) => (
        <mesh
          key={index}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          geometry={torusGeometry}
          material={material}
        >
          {/* <torusGeometry args={[1, 0.6, 16, 32]} />
          <meshMatcapMaterial matcap={matcapTexture} /> */}
        </mesh>
      ))}
    </>
  );
}
