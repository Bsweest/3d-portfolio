import { Plane, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Persona4Card = () => {
  const card = useRef();

  const [front, back] = useTexture([
    "/img/pictures/YuNarukami.png",
    "/img/pictures/cardback.png",
  ]);

  useFrame(() => {
    if (!card.current) return;
    card.current.rotation.y += 0.009;
  });

  return (
    <mesh ref={card} position={[-7, 4, 60]} rotation={[0, 0, Math.PI / 6]}>
      <Plane args={[4, 6]}>
        <meshLambertMaterial map={front} />
      </Plane>
      <Plane args={[4, 6]}>
        <meshLambertMaterial map={back} side={1} />
      </Plane>
    </mesh>
  );
};

export default Persona4Card;
