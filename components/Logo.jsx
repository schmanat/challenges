import React from "react";
import Image from "next/image";
import schmanDevLogo from "../public/assets/images/schman-dev-logo.svg";

const Logo = () => {
  return (
    <div className="w-32">
      <Image src={schmanDevLogo} layout="responsive" alt="schman.dev Logo" />
    </div>
  );
};

export default Logo;
