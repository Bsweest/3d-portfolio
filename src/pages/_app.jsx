import "@/styles/index.css";
import { enableLegendStateReact } from "@legendapp/state/react";
import dynamic from "next/dynamic";
import { useMemo, useRef } from "react";
import { KeyboardControls } from "@react-three/drei";
import { useEffect } from "react";
import Layout from "@/components/dom/Layout";
import Header from "@/config";
import { isMobile, joystickStates } from "@/templates/global/Joystick";

const Scene = dynamic(() => import("@/components/canvas/Scene"), { ssr: true });

enableLegendStateReact();

export default function App({
  Component,
  pageProps = { title: `PHM's Portfolio` },
}) {
  const ref = useRef();

  useEffect(() => {
    const x = /Mobi/i.test(window.navigator.userAgent);
    isMobile.set(x);
    console.log("x", x);
  }, []);

  const map = useMemo(
    () => [
      { name: "forward", keys: ["ArrowUp", "w", "W"] },
      { name: "backward", keys: ["ArrowDown", "s", "S"] },
      { name: "left", keys: ["ArrowLeft", "a", "A"] },
      { name: "right", keys: ["ArrowRight", "d", "D"] },
      { name: "sprint", keys: ["Shift"] },
      { name: "event", keys: ["Enter"] },
    ],
    []
  );

  return (
    <>
      <Header title={pageProps.title} />
      <KeyboardControls map={map}>
        <Layout ref={ref}>
          {Component?.canvas && (
            <Scene
              className="pointer-events-none"
              eventSource={ref}
              eventPrefix="client"
            >
              {Component.canvas(pageProps)}
            </Scene>
          )}

          <Component {...pageProps} />
        </Layout>
      </KeyboardControls>
    </>
  );
}
