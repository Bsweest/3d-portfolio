import { Text3D } from "@react-three/drei";
import ConcertOne from "@/components/Font";

const PI = Math.PI;

const Neon = () => {
  return (
    <>
      <Text3D
        font={ConcertOne}
        size={2}
        bevelEnabled
        bevelSize={0.1}
        bevelThickness={0.1}
        position={[-21.5, 8.5, 19.5]}
        rotation={[0, PI / 2, 0]}
      >
        P
        <meshBasicMaterial color="#d72631" />
      </Text3D>
      <Text3D
        font={ConcertOne}
        size={2}
        bevelEnabled
        bevelSize={0.1}
        bevelThickness={0.1}
        position={[-21.5, 8.5, 17.5]}
        rotation={[0, PI / 2, 0]}
      >
        A
        <meshBasicMaterial color="#039fbe" />
      </Text3D>
      <Text3D
        font={ConcertOne}
        size={2}
        bevelEnabled
        bevelSize={0.1}
        bevelThickness={0.1}
        position={[-21.5, 8.5, 15]}
        rotation={[0, PI / 2, 0]}
      >
        R
        <meshBasicMaterial color="#077b8a" />
      </Text3D>
      <Text3D
        font={ConcertOne}
        size={2}
        bevelEnabled
        bevelSize={0.1}
        bevelThickness={0.1}
        position={[-21.5, 8.5, 12.8]}
        rotation={[0, PI / 2, 0]}
      >
        K
        <meshBasicMaterial color="#5c3c92" />
      </Text3D>

      <Text3D
        font={ConcertOne}
        size={0.5}
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0}
        position={[8.3, 6.1, 14.36]}
      >
        Experience
        <meshBasicMaterial color="black" />
      </Text3D>
      <Text3D
        font={ConcertOne}
        size={0.5}
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0}
        position={[-11.6, 6.1, 14.36]}
      >
        Playground
        <meshBasicMaterial color="black" />
      </Text3D>
      <Text3D
        font={ConcertOne}
        size={0.5}
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0}
        position={[0.38, 6.1, 26.5]}
        rotation={[0, PI / 2, 0]}
      >
        ABOUT ME
        <meshBasicMaterial color="black" />
      </Text3D>
    </>
  );
};

export default Neon;
