import React from 'react';
import banner from "../../images/banner.png";

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <p class="py-6">A heart healthy diet is a pattern of 
      food you eat over days,weeks and months.Regular physical 
      activity reduces your risk of having a heart atack or developing heart 
      diseases.Quitting smoking decreases your risk of heart attack and stroke almost 
      straight away.</p>
      <p>Learn more.</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div>
          <label class="label">
            <span class="text-3xl font-bold">ABOUT DEZILY</span>
          </label>
          <div>
            <h1 class="text-5xl font-bold">Healthy & Young</h1>
            <h3 class="text-3xl font-bold">Heart <span class="text-5xl font-bold"> Anaerobic.</span></h3>
          </div>
        </div>
       

      </div>
    </div>
  </div>
            </div>
            <div>
                <img src={banner} className="w-full" alt="" />
            </div>
        </div>
    );
};

export default Banner;