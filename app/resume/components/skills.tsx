import React from "react";
import ContentDisplay from "@components/layouts/content-display";
import { Wand2 } from "lucide-react";

const Skills = () => {
  return (
    <ContentDisplay
      className="col-span-2 w-full min-[560px]:col-span-4"
      symbol={<Wand2 />}
      name="Skills"
      description="Tech Stack I use"
    >
      <div className="text-sm text-gray-11 px-4 py-4">
        <ul className="list-disc px-4 overflow-auto">
          <li>
            Coding Languages : Solidity, JavaScript, Typescript (Next.js,
            Vue.js, React.js) , Java
          </li>
          <li>
            Tools: Foundry, Metamask, Hardhat, Moralis, IPFS, Fleek, Truffle,
            Tailwind CSS, Supabase, PostGreSql, MongoDB, Vercel, Mocha, GitHub,
            Power BI
          </li>
        </ul>
      </div>
    </ContentDisplay>
  );
};

export default Skills;
