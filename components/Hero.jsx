import React from "react";
import { CountUp } from "use-count-up";

const Hero = () => {
  return (
    <section className="my-10 mx-4">
      <div className="max-w-screen-xl mx-auto p-4 md:p-20 bg-gradient-to-tl from-teal-300 to-cyan-600 rounded-2xl">
        <h1 className="text-4xl font-bold text-white">
          <span className="underline underline-offset-4">Hi!</span> I´m Manuel
        </h1>
        <p className="md:w-1/2 lg:w-1/3 text-xl py-8 lg:py-12 font-normal">
          On this site you will see all my challenges which I have completed.
          Just scroll down to see the results.
        </p>
      </div>
    </section>
  );
};

export default Hero;
