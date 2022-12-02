import { Plane, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const GoalKeeper = () => {
  const keeper = useRef();
  const texture = useTexture("/img/pictures/keeper.png");
  let direction = 1;

  useFrame(() => {
    if (!keeper) return;
    const newPos = keeper.current.translation();
    if (newPos.z > 4 && direction === 1) direction = -1;
    if (newPos.z < -4 && direction === -1) direction = 1;

    newPos.z += direction * 0.05;
    keeper.current.setNextKinematicTranslation(newPos);
  });

  return (
    <RigidBody ref={keeper} type="kinematicPosition">
      <Plane
        position={[-57, 1.5, 0]}
        args={[2.4, 3.6]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <meshBasicMaterial map={texture} />
      </Plane>
    </RigidBody>
  );
};

export default GoalKeeper;
