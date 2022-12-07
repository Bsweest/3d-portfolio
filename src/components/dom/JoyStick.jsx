import { Joystick } from "react-joystick-component";
import Image from "next/image";
import { joystickStates, eventHandler } from "@/templates/global/Joystick";

const JoyStick = () => {
  return (
    <div className="absolute top-0 left-0 flex items-end justify-between w-screen h-screen opacity-50 ml-14 -mt-14">
      <Joystick move={onMove} stop={onStop} />
      <div className="flex flex-col mr-24">
        <Image
          alt="enter"
          className="p-2 mb-10 border-2 border-orange-200 rounded-xl"
          src="/img/touches/enter.svg"
          width={60}
          height={60}
          onClick={touchEvent}
        />
        <Image
          alt="sprint"
          className="p-1 mb-0 border-2 border-orange-200 rounded-xl"
          src="/img/touches/boost.svg"
          width={60}
          height={60}
          onTouchStart={onSprint}
          onTouchEnd={releaseSprint}
        />
      </div>
    </div>
  );
};

const touchEvent = () => {
  eventHandler.set((prev) => ++prev);
};

const onMove = ({ x, y }) => {
  const r = Math.atan2(x, y);
  if (r > eight && r <= one) {
    joystickStates.assign({ ...allSet, forward: true, left: true });
  } else if (r > one && r <= two) {
    joystickStates.assign({ ...allSet, forward: true });
  } else if (r > two && r <= three) {
    joystickStates.assign({ ...allSet, forward: true, right: true });
  } else if (r > three && r <= four) {
    joystickStates.assign({ ...allSet, right: true });
  } else if (r > four || r <= five) {
    joystickStates.assign({ ...allSet, backward: true, right: true });
  } else if (r > five && r <= six) {
    joystickStates.assign({ ...allSet, backward: true });
  } else if (r > six && r <= seven) {
    joystickStates.assign({ ...allSet, backward: true, left: true });
  } else if (r > seven && r <= eight) {
    joystickStates.assign({ ...allSet, left: true });
  }
};

const onStop = () => {
  joystickStates.set({ ...allSet, moving: false });
};

const onSprint = () => {
  joystickStates.sprint.set(true);
};
const releaseSprint = () => {
  joystickStates.sprint.set(false);
};

const allSet = {
  forward: false,
  backward: false,
  left: false,
  right: false,
  sprint: false,
  moving: true,
};

const mul = Math.PI / 180;

const one = 22.5 * mul;
const two = 67.5 * mul;
const three = 112.5 * mul;
const four = 157.5 * mul;
const five = -157.5 * mul;
const six = -112.5 * mul;
const seven = -67.5 * mul;
const eight = -22.5 * mul;

export default JoyStick;
