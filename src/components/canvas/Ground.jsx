import FloorMaterial from "../materials/FloorMat";
import { Plane } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { extend } from "@react-three/fiber";

extend({ FloorMaterial });

const Ground = () => {
  return (
    <>
      <Plane args={[2, 2]} frustumCulled={false} matrixAutoUpdate={false}>
        <floorMaterial />
      </Plane>
      <RigidBody type="fixed">
        <Plane
          args={[500, 500]}
          position={[0, -0.1, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshBasicMaterial color="white" />
        </Plane>
      </RigidBody>
    </>
  );
};

export default Ground;
