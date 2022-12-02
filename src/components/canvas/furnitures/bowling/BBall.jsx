import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const BBall = ({ pressed }) => {
  const { nodes, materials } = useGLTF("/models/bowling_ball.glb");
  const rig = useRef();

  pressed.onChange(() => {
    rig.current.setLinvel({ x: 0, y: 0, z: 0 });
    rig.current.setAngvel({ x: 0, y: 0, z: 0 });
    rig.current.setRotation({ x: 0, y: 0, z: 0 });
    rig.current.setTranslation({ x: -38, y: 0, z: 15.5 });
  });

  return (
    <RigidBody
      ref={rig}
      type="dynamic"
      colliders="ball"
      position={[-38, 0, 15.5]}
    >
      <group dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shadePurple001.geometry}
          material={nodes.shadePurple001.material}
        >
          <meshLambertMaterial color="#00D100" />
        </mesh>
      </group>
    </RigidBody>
  );
};
export default BBall;
