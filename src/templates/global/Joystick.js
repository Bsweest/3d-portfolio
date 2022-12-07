import { observable } from "@legendapp/state";
import { useSelector } from "@legendapp/state/react";

const joystickStates = observable({
  forward: false,
  backward: false,
  left: false,
  right: false,
  sprint: false,
  moving: false,
});

const eventHandler = observable(0);

const useEventMobile = () => {
  return useSelector(() => eventHandler.get());
};

const isMobile = observable(false);

const useDetectMobile = () => {
  return useSelector(() => isMobile.get());
};

export {
  joystickStates,
  isMobile,
  useDetectMobile,
  eventHandler,
  useEventMobile,
};
