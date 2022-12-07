import * as React from "react";
import { useProgress } from "@react-three/drei";
import Image from "next/image";

const dataInterpolation = (p) => `Loading ${p.toFixed(2)}%`;

export default function CustomLoader() {
  const { active, progress } = useProgress();
  const progressRef = React.useRef(0);
  const rafRef = React.useRef(0);
  const progressSpanRef = React.useRef();
  const [shown, setShown] = React.useState(true);

  React.useEffect(() => {
    let t;
    if (active !== shown) t = setTimeout(() => setShown(active), 300);
    return () => clearTimeout(t);
  }, [shown, active]);

  const updateProgress = React.useCallback(() => {
    if (!progressSpanRef.current) return;
    progressRef.current += (progress - progressRef.current) / 2;
    if (progressRef.current > 0.95 * progress || progress === 100)
      progressRef.current = progress;
    progressSpanRef.current.innerText = dataInterpolation(progressRef.current);
    if (progressRef.current < progress)
      rafRef.current = requestAnimationFrame(updateProgress);
  }, [progress, progressSpanRef]);

  React.useEffect(() => {
    updateProgress();
    return () => cancelAnimationFrame(rafRef.current);
  }, [updateProgress]);

  return shown ? (
    <div
      className="absolute top-0 left-0 z-20 flex flex-col items-center justify-center w-full h-full bg-zinc-900 loader"
      style={{ opacity: active ? 1 : 0 }}
    >
      <Image
        className="-mt-32"
        alt="logo"
        src="/img/logo.svg"
        width={200}
        height={200}
      />

      <div className="w-4/5 my-10 mb-4 bg-gray-200 rounded-full sm:w-1/2 h-2.5 dark:bg-gray-700">
        <div
          className="bg-indigo-600 rounded-full h-2.5 dark:bg-indigo-500 bar"
          style={{ width: `${progress}%` }}
        />
      </div>

      <span ref={progressSpanRef} className="font-bold text-white" />
    </div>
  ) : null;
}
