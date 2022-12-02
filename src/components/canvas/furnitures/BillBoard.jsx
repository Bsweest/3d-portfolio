import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { Plane, useGLTF, useTexture } from "@react-three/drei";

const PI = Math.PI;

const Experience = () => {
  return (
    <>
      <BillBoard position={[25, 0, 7]} content="CSharp" />
      <BillBoard position={[50, 0, 7]} content="Javascript" />
      <BillBoard position={[75, 0, 7]} content="Java" />
      <BillBoard position={[100, 0, 7]} content="Database" />
      <BillBoard position={[50, 0, 30]} content="Blender" />
    </>
  );
};

const BillBoard = ({ position, content }) => {
  const { nodes, materials } = useGLTF("/models/billboard.glb");
  const map = `/img/billboards/${content}.jpg`;
  const description = `/img/billboards/des-${content}.jpg`;
  const [texture, des] = useTexture([map, description]);
  return (
    <>
      <RigidBody type="fixed">
        <CuboidCollider
          position={[position[0] + 3.3, 3.5, position[2] - 1]}
          args={[5, 3.5, 2]}
          rotation={[0, (PI * 20) / 180, 0]}
        />
      </RigidBody>

      <group
        dispose={null}
        position={position}
        scale={[1.2, 1.2, 1.2]}
        rotation={[0, -PI / 2.5, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BillBoard.geometry}
          material={materials.White}
          position={[0, 0.6, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Map.geometry}
            material={nodes.Map.material}
            position={[0, 3.1, -2.94]}
            scale={[0, 1, 1]}
          >
            <meshBasicMaterial map={texture} />
          </mesh>
        </mesh>
      </group>

      <Plane
        args={[10, 10]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[position[0] + 15, 0, position[2]]}
      >
        <meshBasicMaterial
          alphaMap={des}
          transparent={true}
          depthWrite={false}
        />
      </Plane>
    </>
  );
};

export default Experience;
