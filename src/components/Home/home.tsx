import React from "react";
import Image from "next/image";
import Link from "next/link";
import { experienceList } from "../helper/experienceList";
import { SquareArrowOutUpRight } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex justify-around items-center w-full">
      <div className="w-fit flex justify-center gap-8 p-16 items-center border-l-4 border-b-4 border-r-4 border-customYellow rounded-sm">
        <div className="-rotate-90">
          <Image
            src="/static/selfie.jpeg"
            width={200}
            height={120}
            alt="Picture of the author"
            className="border border-none rounded-full object-cover transform rotate-90"
          />
        </div>
        <div className="p-2 w-96">
          <p className="text-white font-semibold">
            Hey there! 👋 I am <span className="text-yellow-300">Nidal</span>. Welcome to
            my portfolio, I have kept it short and accurate, you can find my
            projects{" "}
            <Link href={"/projects"} className=" text-blue-300">
              here
            </Link>{" "}
            and my blogs{" "}
            <Link href={"/blogs"} className="text-red-300">
              over-here
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="w-fit flex flex-col items-center justify-center p-16 border-l-4 border-t-4 border-r-4 border-customYellow rounded-sm">
        <p className="text-customYellow font-bold">Career so far: </p>
        <div className="w-96 flex flex-col gap-4 h-full rounded-lg p-4">
          {experienceList.map((item) => (
            <Link
              href={`/career/${item.id}`}
              className=" border flex font-semibold text-white border-customYellow border-b-4 border-l-4 p-2 justify-around items-center text-center rounded-lg hover:cursor-pointer hover:bg-customYellow hover:text-customBlue"
              key={item.id}
            >
              <div>
                <span>{item.companyName}</span>
                <span className="text-xs underline font-mono font-extralight">
                  ({formatDate(item.startDate)} - {formatEndDate(item.endDate)})
                </span>
              </div>
              <SquareArrowOutUpRight size={16}/>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// Utility functions to format date
const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString("en-US", options);
};

const formatEndDate = (endDate: Date | string) => {
  if (endDate === 'current') {
      return 'Present';
  } else {
      return formatDate(new Date(endDate));
  }
};

export default HomePage;
