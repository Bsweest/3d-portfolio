import { useSelector } from "@legendapp/state/react";
import { useKeyboardControls } from "@react-three/drei";
import { useEffect } from "react";
import narrator from "@/templates/global/Narrator";
import { joystickStates, useDetectMobile } from "@/templates/global/Joystick";

const SpeechBuble = () => {
  const visible = useSelector(() => narrator.visible.get());
  const isM = useDetectMobile();

  const movingPC = useKeyboardControls(
    (event) => event.forward || event.backward || event.left || event.right
  );
  const movingM = useSelector(() => joystickStates.moving.get());
  const moving = isM ? movingM : movingPC;

  useEffect(() => {
    if (moving && visible) narrator.visible.set(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moving]);

  return (
    <div
      className={`absolute top-0 left-0 flex items-end justify-end w-screen h-screen ${
        visible ? "visible" : "invisible"
      }`}
    >
      <div
        className={
          "flex justify-end w-64 h-32 mb-40 -mr-8" +
          ["w-96", "h-64", "mb-12", "-mr-10"].map((s) => " lg:" + s)
        }
      >
        <div className="speech_bubble">
          <p className="text-center text-white whitespace-pre-wrap">
            {narrator.text}
          </p>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/marie.png"
        alt="marie"
        className="w-48 h-48 lg:w-64 lg:h-64 lg:mr-8"
      />
    </div>
  );
};

export default SpeechBuble;
