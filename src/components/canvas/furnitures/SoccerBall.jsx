import { ClickZone } from "../pieces/ClickZone";
import { Text, useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import { useEffect } from "react";

const SoccerBall = () => {
  const { nodes, materials } = useGLTF("/models/soccerball.glb");
  const rig = useRef();

  const runFun = () => {
    rig.current.setLinvel({ x: 0, y: 0, z: 0 });
    rig.current.setAngvel({ x: 0, y: 0, z: 0 });
    rig.current.setRotation({ x: 0, y: 0, z: 0 });
    rig.current.setTranslation({ x: -38, y: 0, z: 0 });
  };

  return (
    <>
      <RigidBody
        ref={rig}
        name="SoccerBall"
        type="dynamic"
        colliders="ball"
        position={[-38, 0, 0]}
      >
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Poly_Football_0.geometry}
            material={materials.White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Poly_Football_0_1.geometry}
            material={materials.Black}
          />
        </group>
      </RigidBody>

      <ClickZone
        args={[5, 5]}
        pos={[-33, 0]}
        eventID="soccer"
        runFun={runFun}
      />

      <Goal />
    </>
  );
};

const Goal = () => {
  const [show, setShow] = useState(true);
  const [intersect, setIntersect] = useState(0);

  const goIn = ({ other }) => {
    if (other.rigidBodyObject.name === "SoccerBall") {
      setIntersect((prev) => ++prev);
    }
  };

  useEffect(() => {
    setShow(true);

    const handler = setTimeout(() => {
      setShow(false);
    }, 1600);

    return () => clearTimeout(handler);
  }, [intersect]);

  return (
    <>
      <RigidBody type="fixed" position={[-59, 1.8, 0]}>
        <CuboidCollider
          sensor
          args={[4.7, 1.8, 1]}
          rotation={[0, -Math.PI / 2, 0]}
          onIntersectionEnter={goIn}
        />
      </RigidBody>

      {show && (
        <Text
          position={[-58, 1.7, 0]}
          rotation={[0, Math.PI / 2, 0]}
          fontSize={2}
          color="#F3BAA5"
        >
          Goal!
        </Text>
      )}
    </>
  );
};

export default SoccerBall;
