import { CuboidCollider, RigidBody } from "@react-three/rapier";

const ManualMesh = () => {
  return (
    <RigidBody type="fixed">
      {/* Laplus */}
      <CuboidCollider args={[1.5, 2.5, 1.5]} position={[7, 2.5, 45]} />
      <CuboidCollider args={[1.6, 1.6, 1.6]} position={[7, 1.6, 75]} />
      {/* Turtle */}
      <CuboidCollider args={[1, 3, 1]} position={[-20, 3, 53]} />
      {/* Goal */}
      <CuboidCollider args={[0.2, 2, 0.2]} position={[-58, 2, 4.9]} />
      <CuboidCollider args={[0.2, 2, 0.2]} position={[-58, 2, -4.9]} />
      {/* Torus */}
      <CuboidCollider args={[0.5, 3, 2]} position={[-22, 3, 7]} />
      <CuboidCollider args={[0.5, 3, 2]} position={[-22, 3, 23]} />
    </RigidBody>
  );
};

export default ManualMesh;
