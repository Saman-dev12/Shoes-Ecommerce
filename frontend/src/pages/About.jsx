// about.jsx
import React from "react";

const About = () => {
  return (
    <div className="bg-slate-800 py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          About JUTAAA
        </h1>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="md:w-1/2 p-6 order-2 md:order-1">
            <p className="text-xl leading-relaxed mb-4 text-white">
              Welcome to the world of Jutaaa, where style meets comfort and
              every step tells a story. Founded with a passion for footwear and
              a commitment to delivering exceptional quality, we take pride in
              being your trusted destination for the latest trends and timeless
              classics.
            </p>
            <p className="text-xl leading-relaxed mb-4 text-white">
              Jutaaa was born out of a love for shoes and a desire to offer a
              unique shopping experience. Since our inception, we've been
              dedicated to curating a diverse collection of shoes that not only
              elevate your style but also reflect your individuality.
            </p>
            <p className="text-xl leading-relaxed text-white">
              What sets us apart is our passion for fashion, commitment to
              quality, and a customer-centric approach. Your satisfaction is at
              the heart of what we do. Our customer support team is here to
              assist you, answer your queries, and ensure a smooth shopping
              experience.
            </p>
          </div>
          <div className="md:w-1/2 p-4 order-1 md:order-2 hover:scale-105 transition-all">
            <img
              src="/logo.png" // Replace with your image path
              alt="About Us"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
