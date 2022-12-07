import {
  PerspectiveCamera,
  useAnimations,
  useGLTF,
  useKeyboardControls,
} from "@react-three/drei";
import { useEffect, useRef } from "react";

import { useSelector } from "@legendapp/state/react";
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, MeshCollider, RigidBody } from "@react-three/rapier";
import { joystickStates, useDetectMobile } from "@/templates/global/Joystick";

export default function Companion() {
  const rigBody = useRef();
  const modelRef = useRef();
  const collider = useRef();
  const isM = useDetectMobile();

  const [, get] = useKeyboardControls();
  const movingPC = useKeyboardControls(
    (event) => event.forward || event.backward || event.left || event.right
  );
  const movingM = useSelector(() => joystickStates.moving.get());
  const moving = isM ? movingM : movingPC;

  const controlM = useSelector(() => joystickStates.get());

  const { nodes, materials, animations } = useGLTF("/models/companion.glb");
  const { actions } = useAnimations(animations, modelRef);

  useEffect(() => {
    if (moving) {
      actions.Idle.stop();
      actions.Running.play();
    } else {
      actions.Running.stop();
      actions.Idle.play();
    }
  }, [actions, moving]);

  useFrame(() => {
    const { forward, backward, left, right, sprint } = isM ? controlM : get();

    const front = (sprint ? 22 : 12) * (Number(backward) - Number(forward));
    const side = (sprint ? 22 : 12) * (Number(right) - Number(left));

    rigBody.current.setLinvel({ x: side, y: 0, z: front });

    if (front || right) {
      const deg = Math.atan2(side, front);
      modelRef.current.rotation.y = deg;
    }
  });

  return (
    <group>
      <RigidBody
        name="Companion"
        ref={rigBody}
        type="dynamic"
        position={[0, 1, 0]}
        enabledRotations={[false, false, false]}
      >
        <CuboidCollider name="Companion" ref={collider} args={[0.7, 1, 0.7]} />

        <MeshCollider type={false}>
          <PerspectiveCamera makeDefault position={[14, 14, 14]} />

          <group name="Companion" ref={modelRef} dispose={null}>
            <primitive object={nodes.Bone} />
            <skinnedMesh
              name="Armor"
              geometry={nodes.Armor.geometry}
              material={materials.AO}
              skeleton={nodes.Armor.skeleton}
            />
            <skinnedMesh
              name="BackPanel"
              geometry={nodes.BackPanel.geometry}
              material={materials.Face}
              skeleton={nodes.BackPanel.skeleton}
            />
            <skinnedMesh
              name="EnergyBall"
              geometry={nodes.EnergyBall.geometry}
              material={materials.AO}
              skeleton={nodes.EnergyBall.skeleton}
            />
            <skinnedMesh
              name="FrontGlass"
              geometry={nodes.FrontGlass.geometry}
              material={moving ? materials.Excited : materials.Face}
              skeleton={nodes.FrontGlass.skeleton}
            />
            <skinnedMesh
              name="SideStripes"
              geometry={nodes.SideStripes.geometry}
              material={materials.Albedo}
              skeleton={nodes.SideStripes.skeleton}
            />
            <skinnedMesh
              name="Wing"
              geometry={nodes.Wing.geometry}
              material={materials.Albedo}
              skeleton={nodes.Wing.skeleton}
            />
          </group>
        </MeshCollider>
      </RigidBody>
    </group>
  );
}
