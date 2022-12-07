import { Box, Edges, useCursor, useKeyboardControls } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

import { useEffect, useState } from "react";
import narrator from "@/templates/global/Narrator";
import { useDetectMobile, useEventMobile } from "@/templates/global/Joystick";

export default function ZoneStatic() {
  const showBubble = (value) => {
    narrator.assign({ text: value, visible: true });
  };
  const openTab = (value) => {
    window.open(value);
  };

  return (
    <>
      {/* Desk */}
      <ClickZone
        args={[7, 7]}
        pos={[-7, -5]}
        eventID="desk"
        runFun={showBubble}
      >
        Hi, I&apos;m Phan Huy Mạnh, currently studying Software Engineer major
        at University of Technology, Ho Chi Minh City. To pursue a dream of
        someday I will make my own game, I always desire to learn and discovery
        new thing. This little 3D world portfolio is a brief introduction about
        me and what I can do.
      </ClickZone>
      {/* Anime */}
      <ClickZone
        args={[4, 6]}
        pos={[7, 52.5]}
        eventID="anime"
        runFun={showBubble}
      >
        I both love manga and anime culture and despite all the niche things
        coming with it. Yet days are so fast to me right now so I only read
        manga and watch Vtuber regularly. And yes, my favourite series is
        JoJo&apos; Bizarre Adventure, how could you tell?
      </ClickZone>
      {/* Game */}
      <ClickZone
        args={[4, 6]}
        pos={[-7, 52.5]}
        eventID="game"
        runFun={showBubble}
      >
        Game is my passion, although I can&apos;t play it as much as I want when
        I&apos;m becoming older. The game that I spent my whole childhood and
        sometime now is Minecraft, but the game that affects me the most and
        inpire to be better as a developer and a person is Persona 4.
      </ClickZone>
      {/* Coffe */}
      <ClickZone
        args={[4, 4]}
        pos={[-7.5, 70]}
        eventID="coffee"
        runFun={showBubble}
      >
        I always start my day with a coffee, but only two cup a day are allowed,
        no more than that.
      </ClickZone>
      {/* Hiphop */}
      <ClickZone
        args={[6, 6]}
        pos={[-17, 52.5]}
        eventID="hiphop"
        runFun={showBubble}
      >
        {`Shout out to Kendrick Lamar, Eminem, DATMANIAC's song fr🤞\nGotta be one of my favorite genders\nStill trying to learn break dance without breaking my bones.`}
      </ClickZone>

      {/* Facebook, Gmail, Github, LinkedIn */}
      <ClickZone
        args={[3.5, 3.5]}
        pos={[14, 77.5]}
        eventID="fb"
        runFun={openTab}
      >
        https://www.facebook.com/manh.phanhuy.754/
      </ClickZone>
      <ClickZone
        args={[3.5, 3.5]}
        pos={[18.5, 77.5]}
        eventID="gm"
        runFun={openTab}
      >
        https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=phanhuymanh1409@gmail.com
      </ClickZone>
      <ClickZone
        args={[3.5, 3.5]}
        pos={[23, 77.5]}
        eventID="gh"
        runFun={openTab}
      >
        https://github.com/UIT19521828
      </ClickZone>
      <ClickZone
        args={[3.5, 3.5]}
        pos={[27.5, 77.5]}
        eventID="li"
        runFun={openTab}
      >
        https://www.linkedin.com/in/manh-phan-huy-332u24/
      </ClickZone>
    </>
  );
}

const ClickZone = ({ args, pos, eventID, children, runFun }) => {
  const [contract, setContract] = useState(false);
  const isM = useDetectMobile();
  const enterPress = useKeyboardControls((state) => state.event);
  const mobileTouch = useEventMobile();
  const pressed = isM ? mobileTouch : enterPress;

  const goIn = ({ other }) => {
    if (other.rigidBodyObject.name === "Companion") {
      setContract(true);
      narrator.inContract.set(eventID);
    }
  };

  const goOut = () => {
    setContract(false);
    narrator.inContract.set(null);
  };

  useEffect(() => {
    if (pressed) {
      if (narrator.inContract.get() === eventID) runFun(children);
    }
  }, [children, eventID, pressed, runFun]);

  useCursor(contract);

  return (
    <>
      <Box
        args={[args[0], contract ? 0.7 : 0.4, args[1]]}
        position={[pos[0], 0.25, pos[1]]}
        onClick={(e) => (e.stopPropagation(), runFun(children))}
        onPointerOver={(e) => (e.stopPropagation(), setContract(true))}
        onPointerOut={() => setContract(false)}
      >
        <Edges color={contract ? "#FF0000" : "#009b97"} />
        <meshBasicMaterial transparent={true} opacity={0} />
      </Box>
      <RigidBody type="kinematicPosition">
        <CuboidCollider
          args={[args[0] / 2, 1, args[1] / 2]}
          position={[pos[0], 1, pos[1]]}
          sensor
          onIntersectionEnter={goIn}
          onIntersectionExit={goOut}
        />
      </RigidBody>
    </>
  );
};

export { ClickZone };
