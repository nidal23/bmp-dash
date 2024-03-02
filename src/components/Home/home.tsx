import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="px-2 flex justify-center gap-8 items-center">
      <div>
        {/* <p>Nidal Photo</p> */}
        <Image
          src="/../../assets/selfie.jpeg"
          width={250}
          height={140}
          alt="Picture of the author"
          className="border border-none rounded-full object-cover transform rotate-90"
        />
      </div>
      <div className="p-2 w-72">
        <p className="text-violet-300">
          Hey, I am <span className="text-yellow-300">Nidal</span>. I like to{" "}
          <span className="text-blue-500">build stuff</span>, and write about
          them. I believe in{" "}
          <span className="text-green-400">failing fast</span>, and{" "}
          <span className="text-red-500 font-bold italic">growing faster</span>.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
