import Image from "next/image";
import React from "react";
import { format } from "date-fns";

const Hero = () => {

  return (
    <div className="flex flex-col items-center justify-start bg-black text-white z-50 ">
      {data.map((item) => (
        <div key={item.title} className="relative flex flex-col items-start w-full py-4 " >
          <Image
            quality={100}
            src={item.image}
            alt={item.title}
            width={1000}
            height={450}
            className="rounded-lg w-full "
          />
          <div className="absolute flex flex-col items-start justify-center px-4 sm:top-52" >
          <h2 className="text-xl mt-2 sm:text-4xl">{item.title}</h2>
          <p className="mt-1">{item.exerpt}</p>
          <div className="flex items-center mt-2 ">
            <Image
              src={item.author.image}
              alt={item.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="*:ml-2 *:flex *:flex-col *:justify-center ">
            <div>{item.author.name}
              <div className="text-sm text-gray-400">
                {format(new Date(), "MMMM dd, yyyy")}
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;


const data = [
  {
    image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
    title: "Technical SEO with Hygraph",
    exerpt:
      "Get started with your SEO implementation when using a Headless CMS",
    author: {
      name: "Ozodbek Alimjonov",
      image:
        "https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black-thumbnail.png",
    },
  },
  {
    image: "https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h",
    title: "Union Types and Sortable Relations with Hygraph",
    exerpt:
      "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
    author: {
      name: "Ozodbek Alimjonov",
      image:
        "https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black-thumbnail.png",
    },
  },
];
