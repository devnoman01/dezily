import React from 'react';
import img from '../../images/about/about.png';
const primary = '#33D687';
const secondary = '#2A334E';
const About = () => {
    return (
        <section className='p-3 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-3'>
            <div className='w-full'>
                <figure >
                    <img className='w-full' src={img} alt="about" />
                </figure>
            </div>
            <div>
                <p className={`text-[#33D687] font-bold mb-4`}>ABOUT Dezily</p>
                <h2 className='font-saira text-[2.5rem] text-[#2A334E] font-semibold leading-tight mb-4'>Heart Surgery Specialist Expert Doctors
                </h2>
                <p className='text-[#8d8d8d] mb-4'>Chest pain is the most common warning sign of a heart attack. But there can be other symptoms, too, like lightheadedness of breath.
                </p>
                <div>
                    <div>
                        <div>icon here</div>
                        <div>
                            <h4>Heart Transplante</h4>
                            <p>Heart symptoms call us for immediate</p>
                        </div>
                    </div>

                </div>
                <hr />
                <ul>
                    <li>
                        icon
                        <span>Breathing difficulties can be caused by many different conditions.
                        </span>
                    </li>
                </ul>

                <div>
                    <button>
                        Get Appointment
                    </button>
                    <button>
                        Contact us
                    </button>

                </div>
            </div>
        </section>
    );
};

export default About;