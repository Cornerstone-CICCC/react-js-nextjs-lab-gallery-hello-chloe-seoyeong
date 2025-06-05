"use client";
import { useRouter } from "next/navigation";

const CloseButton = () => {
  const router = useRouter();
  const handleClose = () => {
    console.log("clicked");
    router.push("/gallery");
  };
  return <button onClick={handleClose}>Close</button>;
};

export default CloseButton;
