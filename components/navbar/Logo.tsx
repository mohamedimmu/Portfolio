'use client';

import Image from "next/image";
import { useRouter } from "next/navigation"

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      src="/images/logo.svg"
      alt="Mohamed Imran Logo"
      width="52"
      height="52"
      className="cursor-pointer object-fill"
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
