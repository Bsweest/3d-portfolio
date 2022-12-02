import { Text3D } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import ConcertOne from "@/components/Font";

const Letters = ({
  text,
  position,
  rotation,
  fontSize,
  bevel,
  thickness,
  color,
}) => {
  return (
    <RigidBody type="dynamic" position={position} rotation={rotation}>
      <Text3D
        font={ConcertOne}
        size={fontSize}
        bevelEnabled
        bevelSize={bevel}
        bevelThickness={thickness}
      >
        {text}
        <meshStandardMaterial color={color} />
      </Text3D>
    </RigidBody>
  );
};

export default Letters;
