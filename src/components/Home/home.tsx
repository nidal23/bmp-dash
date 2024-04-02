import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="px-2 flex justify-center gap-8 items-center">
      <div className="-rotate-90">
        <Image
          src="/assets/selfie.jpeg"
          width={250}
          height={140}
          alt="Picture of the author"
          className="border border-none rounded-full object-cover transform rotate-90"
        />
      </div>
      <div className="p-2 w-72">
        <p className="text-white">
          Hey, I am <span className="text-yellow-300">Nidal</span>. Welcome to my portfolio, I have kept it short and accurate, you can find my projects <Link href={'/projects'} className=" text-blue-300">here</Link> and my blogs <Link href={'/blogs'} className="text-red-300">over-here</Link>.
        </p>
      </div>
      <div>
        <p>
          
        </p>
      </div>
    </div>
  );
};

export default HomePage;
