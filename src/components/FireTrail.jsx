"use client";
import useScript from "@/utils/useScript";
import { useRouter } from "next/router";
export default function FireTrail() {
  const router = useRouter();
  const { url } = router.query;
  useScript(url);
  return (
    <>
      <canvas
        id="canvas"
        className={`w-[100vw] h-[100vh] block fixed top-0 left-0 bg-black z-9999`}
      />
    </>
  );
}
