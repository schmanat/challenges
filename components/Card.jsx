import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReactTooltip from "react-tooltip";
import { FaGithub, FaTrophy } from "react-icons/fa";

const Card = ({ data }) => {
  const { title, github, live_url, challenge_source, challenge_url, image } =
    data;
  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden">
      <Image
        src={image}
        width={500}
        height={500}
        objectFit
        alt={`Screenshot for challenge ${title}`}
      />
      <div className="px-4">
        <h2 className="text-lg text-center">{title}</h2>
        <div className="flex justify-between items-center">
          <Link href={challenge_url}>
            <a className="text-gray-500 link--slide-in hover:text-cyan-600 focus:text-cyan-600 text-xs">
              {challenge_source}
            </a>
          </Link>
          <ul className="flex space-x-4 pr-4 my-6 justify-end">
            <li>
              <Link href={github}>
                <FaGithub
                  data-tip="Source Code"
                  size={15}
                  className="hover:text-cyan-600 hover:cursor-pointer text-gray-700/50 transition-colors duration-150"
                />
              </Link>
            </li>
            <li>
              <Link href={live_url}>
                <FaTrophy
                  data-tip="Live Preview"
                  size={15}
                  className="hover:text-cyan-600 hover:cursor-pointer text-gray-700/50 transition-colors duration-150"
                />
              </Link>
            </li>
          </ul>
        </div>
        <ReactTooltip />
      </div>
    </div>
  );
};

export default Card;
