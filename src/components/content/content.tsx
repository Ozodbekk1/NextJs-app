import Image from "next/image";
import { format } from "date-fns";

const Content = () => {
  return (
    <div className="flex justify-center flex-col w-full h-max md:w-2xl md:flex-row bg-stone-900 rounded-lg p-2 mb-1">
      <div>
        {data.map((item) => (
          <div
            key={item.title}
            className="relative flex-col md:flex-col items-center gap-2 p-2 rounded-lg "
          >
            <Image
              quality={100}
              width={700}
              height={200}
              src={item.image}
              alt={item.title}
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="flex flex-col items-start justify-center pt-2">
              <h2 className="text-xl">{item.title}</h2>
              <p className="text-gray-400">{item.exerpt}</p>
              <div className="flex items-center">
                <Image
                  quality={100}
                  width={40}
                  height={40}
                  src={item.author.image}
                  alt={item.author.name}
                  className="rounded-full w-10 h-10"
                />
                <div className="ml-2 flex flex-col justify-center">
                  <span>{item.author.name}</span>
                  <div className="text-sm text-gray-400">
                    {format(new Date(), "MMMM dd, yyyy")}
                    </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Content

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
