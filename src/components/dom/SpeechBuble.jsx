import { useSelector } from "@legendapp/state/react";
import { useKeyboardControls } from "@react-three/drei";
import { useEffect } from "react";
import narrator from "@/templates/global/Narrator";

const SpeechBuble = () => {
  const visible = useSelector(() => narrator.visible.get());

  const moving = useKeyboardControls(
    (event) => event.forward || event.backward || event.left || event.right
  );

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
      <div className="flex justify-end h-64 mb-12 -mr-10 w-96">
        <div className="speech_bubble">
          <p className="text-center text-white whitespace-pre-wrap">
            {narrator.text}
          </p>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/marie.png" alt="marie" className="w-64 h-64 mr-8" />
    </div>
  );
};

export default SpeechBuble;
