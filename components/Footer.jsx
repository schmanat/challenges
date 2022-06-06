import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";
import VercelIcon from "../public/assets/images/brands/vercel.svg";
import NextJSIcon from "../public/assets/images/brands/nextdotjs.svg";
import TailwindCSSIcon from "../public/assets/images/brands/tailwindcss.svg";
import ReactJSIcon from "../public/assets/images/brands/react.svg";

const techStack = [
  {
    id: 1,
    title: "Vercel",
    logo: VercelIcon,
    url: "https://vercel.com",
  },
  {
    id: 2,
    title: "NextJS",
    logo: NextJSIcon,
    url: "https://nextjs.com",
  },
  {
    id: 3,
    title: "TailwindCSS",
    logo: TailwindCSSIcon,
    url: "https://tailwindcss.com",
  },
  {
    id: 4,
    title: "ReactJS",
    logo: ReactJSIcon,
    url: "https://reactjs.org",
  },
];

const TechStackList = ({ id, title, logo, url }) => (
  <Link href={url}>
    <div className="flex space-x-4 items-center cursor-pointer ">
      <Image src={logo} className="w-8" alt={`${title} logo`} />

      <a className="link--slide-in focus:text-cyan-600 hover:text-cyan-600">
        {title}
      </a>
    </div>
  </Link>
);

const Footer = () => {
  return (
    <footer className="bg-white py-8 md:py-20 drop-shadow-lg px-4">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col md:flex-row justify-between space-y-8 sm:space-y-0">
        <div className="w-full sm:w-1/2">
          <h3 className="font-normal text-xl mb-4">Bio</h3>
          <p className="text-gray-400">
            Now I`m working over 15 years as an System Administrator, but i also
            love the tech stack of web developing. To improve my skills i
            decided to take some free time to participate some challenges.
          </p>
        </div>
        <div>
          <h3 className="font-normal text-xl mb-4">Tech Stack</h3>
          <div className="space-y-2">
            {techStack.map(({ id, title, logo, url }) => (
              <TechStackList key={id} title={title} logo={logo} url={url} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-normal text-xl mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="https://react-icons.github.io/react-icons/">
                <a className="link--slide-in hover:text-cyan-600">
                  React Icons
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://simpleicons.org/">
                <a className="link--slide-in hover:text-cyan-600">
                  Simple Icons
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto w-full flex items-center border-t border-gray-200 justify-center pt-8 mt-8">
        <div>
          <Logo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
