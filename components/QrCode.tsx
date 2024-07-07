import React from "react";
import Image from "next/image";
const QrCode = () => {
  return (
    <section className="flex flex-col w-[320px] items-center justify-center drop-shadow-md bg-white rounded-[20px] ">
      <div className="relative flex w-full p-4">
        <Image
          alt="img"
          src={`/image-qr-code.png`}
          width={288}
          height={288}
          className="size-full drop-shadow-md  rounded-lg"
        ></Image>
      </div>
      <div className="flex flex-col gap-4 mb-6 items-center text-center leading-[20px] justify-center w-[90%] px-4 top-2 ">
        <h1 className="font-extrabold text-[#1F314F]  text-xl align-text-top  ">
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
