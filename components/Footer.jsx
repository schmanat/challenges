import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

const TechStackList = ({ title, logo, url }) => (
  <Link href={url} passHref>
    <a className="inline-flex space-x-4 items-center cursor-pointer link--slide-in focus:text-cyan-600 hover:text-cyan-600">
      <Image src={logo} width={"16px"} height={"16px"} alt={`${title} logo`} />

      <span className="">{title}</span>
    </a>
  </Link>
);

const Footer = ({ techstack }) => {
  return (
    <footer className="bg-white py-8 md:py-20 drop-shadow-lg px-4">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col md:flex-row justify-between space-y-8 sm:space-y-0">
        <div className="w-full sm:w-1/2">
          <h3 className="font-normal text-xl mb-4">Bio</h3>
          <p className="text-gray-600">
            Now I`m working over 15 years as an System Administrator, but i also
            love the tech stack of web developing. To improve my skills i
            decided to take some free time to participate some challenges.
          </p>
        </div>
        <div>
          <h3 className="font-normal text-xl mb-4">Tech Stack</h3>
          <div className="space-y-2">
            {techstack.map(({ id, title, logo, url }) => (
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
