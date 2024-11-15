import React from "react";
import Title from "../Components/Title";
import NewsletterBox from "../Components/NewsletterBox";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            atque dolore et doloribus nisi, aut veritatis amet molestiae commodi
            iusto soluta nobis corrupti quo eaque expedita autem quam optio
            nulla!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cum
            quae laborum pariatur excepturi modi, eos mollitia nostrum ullam
            deleniti natus eaque vitae voluptatum recusandae repudiandae, ab
            dolore sequi? Quod.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            tempora praesentium iusto inventore qui, totam, possimus consequatur
            sit numquam aspernatur, exercitationem sequi consequuntur
            reprehenderit velit obcaecati eligendi alias. Reiciendis, ipsam!
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-xol gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-xol gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-xol gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
