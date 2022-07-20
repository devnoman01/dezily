import React from "react";
import img from "../../images/about/about.png";
import Satisfied from "./Satisfied";
import TableRow from "./TableRow";
import Treatment from "./Treatment";
// const primary = '#33D687';
// const secondary = '#2A334E';

const transplante = {
  name: "Heart Transplante",
  description: "Heart symptoms call us for immediate",
  icon: "icon here",
};
const sergery = {
  name: "Heart Sergery",
  description: "Heart is get replaced with healthier",
  icon: "icon here",
};

const About = () => {
  return (
    <section className="p-3 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-3">
      <div className="w-full relative">
        <figure className="mb-5">
          <img className="w-full" src={img} alt="about" />
        </figure>
        <Satisfied />
      </div>
      <div>
        <p className={`text-[#33D687] font-bold mb-4`}>ABOUT Dezily</p>
        <h2 className="font-saira text-[2.5rem] text-[#2A334E] font-semibold leading-tight mb-4">
          Heart Surgery Specialist Expert Doctors
        </h2>
        <p className="text-[#8d8d8d] mb-4">
          Chest pain is the most common warning sign of a heart attack. But
          there can be other symptoms, too, like lightheadedness of breath.
        </p>
        <div className="my-10 grid grid-cols-1 lg:grid-cols-2">
          <Treatment treatment={transplante} />
          <Treatment treatment={sergery} />
        </div>
        <hr className="my-5" />
        <table className="my-5">
          <TableRow>
            Breathing difficulties can be caused by many different conditions.
          </TableRow>
          <TableRow>
            Breathing difficulty may be health issue needs medical attention.
          </TableRow>
          <TableRow>
            You should discuss any breathing concerns with your doctor.
          </TableRow>
        </table>

        <div className="my-10 grid grid-cols-3 gap-3 w-2/3">
          <button className="btn bg-[#2A334E] hover:bg-[#33D687] border-none rounded-none col-span-2 font-saira normal-case">
            Get Appointment
          </button>
          <button className="btn bg-[#33D687] border-none rounded-none font-saira normal-case">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
