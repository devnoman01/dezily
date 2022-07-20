import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
const Satisfied = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setTimeout(setProgress(80), 3000);
  }, []);
  console.log(progress);
  return (
    <div className="bg-[#33D687] px-7 py-12 font-saira flex flex-col items-conter text-white border-b-[#2A334E] border-b-8 w-full lg:w-5/12 lg:absolute top-12 -left-7">
      <div
        class="radial-progress text-[#fff] mb-7 mx-auto text-2xl flex items-center justify-center"
        style={{ "--value": `${80}`, "--size": "7rem", "--thickness": "5px" }}
      >
        <CountUp onChange={(e) => console.log(e)} end={80} />
        <span>%</span>
      </div>
      <p className="text-xl text-center mb-2">Satisfied</p>
      <p className="text-3xl text-center font-meduim">Happy Patients</p>
    </div>
  );
};

export default Satisfied;
