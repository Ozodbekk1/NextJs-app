import Image from "next/image";
import Button from '@mui/material/Button'
import { Divider } from "@mui/material";
import { Fragment } from "react";
// import Button from '@mui/material/Button'

const Sidebar = () => {
  return (
    <>
    <div className="flex mb-1 px-2 justify-center md:justify-start">
      <div className="flex flex-col gap-4 w-xl border-2 border-gray-800 rounded-lg p-1">
        <h1 className="text-2xl text-start">Latest Blog</h1>
        {data.map((item) => (
          <Fragment key={item.title}>
          <div
            className="flex flex-col md:flex-row items-center gap-2 p-4 rounded-lg "
          >
            <Image
              quality={100}
              width={200}
              height={200}
              src={item.image}
              alt={item.title}
              className="rounded-lg"
            />
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-xl">{item.title}</h2>
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
                </div>
              </div>
            </div>
          </div>
          <hr />
          <Divider />
          </Fragment>
        ))}
        <div className=" rounded-lg border-2 border-gray-800 p-2 w-inherit">
          <div className="flex flex-col items-start gap-2 p-4 rounded-lg ">
            <h1 className="text-2xl text-start">Category</h1>
            <Button variant="text" >
              Home
            </Button>
            <Button variant="text" >
              Category
            </Button>
            <Button variant="text" >
              Blogs
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Sidebar;

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
