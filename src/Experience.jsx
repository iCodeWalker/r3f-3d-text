import {
  Text3D,
  Center,
  useMatcapTexture,
  OrbitControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function Experience() {
  const [matcapTexture] = useMatcapTexture("36220C_C6C391_8C844A_8B7B4C", 256);

  const tempArray = [...Array(100)];
  /* multiple donuts */

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* <mesh scale={1.5}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}

      {/* Centering the text */}
      <Center>
        <Text3D
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
          <meshMatcapMaterial matcap={matcapTexture} />
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
        >
          <torusGeometry args={[1, 0.6, 16, 32]} />
          <meshMatcapMaterial matcap={matcapTexture} />
        </mesh>
      ))}
    </>
  );
}
