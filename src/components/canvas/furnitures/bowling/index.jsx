import BPin from "./BPin";
import BBall from "./BBall";
import { ClickZone } from "../../pieces/ClickZone";
import { useObservable } from "@legendapp/state/react";

const Bowling = () => {
  const pressed = useObservable(0);

  const runFun = () => {
    pressed.set((prev) => ++prev);
  };

  return (
    <>
      <BBall pressed={pressed} />
      <BPin pressed={pressed} />

      <ClickZone
        args={[5, 5]}
        pos={[-33, 15.5]}
        eventID="bowling"
        runFun={runFun}
      />
    </>
  );
};

export default Bowling;
