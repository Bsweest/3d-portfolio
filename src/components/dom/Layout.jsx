import { forwardRef, useRef } from "react";
import { mergeRefs } from "react-merge-refs";

const Layout = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef();

  return (
    <div
      ref={mergeRefs([ref, localRef])}
      className="relative z-10 w-screen h-screen overflow-hidden bg-zinc-900 dom text-gray-50"
    >
      {children}
    </div>
  );
});
Layout.displayName = "Layout";

export default Layout;
