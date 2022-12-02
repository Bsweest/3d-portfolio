import { useGLTF } from "@react-three/drei";
import { MeshCollider, RigidBody } from "@react-three/rapier";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const positions = [
  //first
  [-57, 1, 15.5],
  //second
  [-58, 1, 16],
  [-58, 1, 15],
  //third
  [-59, 1, 16.5],
  [-59, 1, 15.5],
  [-59, 1, 14.5],
  //fourth
  [-60, 1, 15],
  [-60, 1, 16],
  [-60, 1, 14],
  [-60, 1, 17],
];

const BPin = ({ pressed }) => {
  const { nodes, materials } = useGLTF("/models/bowling_pin.glb");

  const [show, setShow] = useState(true);

  pressed.onChange(() => {
    setShow(false);
  });

  useEffect(() => {
    if (!show) setShow(true);
  }, [show]);

  return (
    show &&
    positions.map((item, index) => (
      <RenderItem
        key={index}
        position={item}
        nodes={nodes}
        materials={materials}
        pressed={pressed}
      />
    ))
  );
};

const RenderItem = ({ position, nodes, materials, pressed }) => {
  const api = useRef();

  return (
    <RigidBody type="dynamic" ref={api} position={position}>
      <group dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube290.geometry}
          material={materials.White}
        />
        <MeshCollider type={false}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube290_1.geometry}
            material={materials.Red}
          />
        </MeshCollider>
      </group>
    </RigidBody>
  );
};

export default BPin;
