import { Debug, Physics } from "@react-three/rapier";
import { CycleRaycast } from "@react-three/drei";
import MyName from "@/components/canvas/furnitures/MyName";
import Persona4Card from "@/components/canvas/furnitures/Persona4Card";
import Ground from "@/components/canvas/Ground";
import Companion from "@/components/canvas/pieces/Companion";
import World from "@/components/canvas/pieces/World";
import ManualMesh from "@/components/canvas/pieces/ManualMesh";
import Neon from "@/components/canvas/furnitures/Neon";
import GoalKeeper from "@/components/canvas/pieces/GoalKeeper";
import Experience from "@/components/canvas/furnitures/BillBoard";
import SpeechBuble from "@/components/dom/SpeechBuble";
import Bowling from "@/components/canvas/furnitures/bowling";
import ZoneStatic from "@/components/canvas/pieces/ClickZone";
import SoccerBall from "@/components/canvas/furnitures/SoccerBall";
import JoyStick from "@/components/dom/JoyStick";
import { useDetectMobile } from "@/templates/global/Joystick";
export default function Page(props) {
  const showJoy = useDetectMobile();

  return (
    <>
      <SpeechBuble />
      {showJoy && <JoyStick />}
    </>
  );
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => {
  return (
    <Physics>
      <World />
      <ManualMesh />
      <Companion />
      <Persona4Card />
      <Bowling />
      <SoccerBall />
      <Ground />
      <MyName base={[5, -5]} />
      <Neon />
      <GoalKeeper />
      <Experience />
      <ZoneStatic />

      <CycleRaycast />

      {/* <Debug /> */}
    </Physics>
  );
};

export async function getStaticProps() {
  return { props: { title: `PHM's Portfolio` } };
}
