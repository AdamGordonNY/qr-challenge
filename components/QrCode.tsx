import React from "react";
import Image from "next/image";
const QrCode = () => {
  return (
    <section className="flex flex-col w-[320px] items-center justify-center drop-shadow-lg bg-white rounded-lg ">
      <div className="relative flex w-full p-4">
        <Image
          alt="img"
          src={`/image-qr-code.png`}
          width={288}
          height={288}
          className="size-full drop-shadow-md  rounded-md"
        ></Image>
      </div>
      <div className="flex flex-col gap-4 p-4 items-center justify-center w-[90%]">
        <h1 className="font-bold text-[#1F314F] text-center text-xl  ">
          Improve your front-end skills by building projects.
        </h1>
        <span className="text-center text-[#7D889E] text-sm">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </span>
      </div>
    </section>
  );
};

export default QrCode;
