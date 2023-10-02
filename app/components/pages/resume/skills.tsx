import React from "react";
import ContentDisplay from "../../layouts/content-display";
import { Wand2 } from "lucide-react";

const Skills = () => {
  return (
    <ContentDisplay
      className="col-span-2 w-full min-[560px]:col-span-4"
      symbol={<Wand2 />}
      name="Skills"
      description="Tech Stack I usually use"
    >
      <div className="line-clamp-1 text-ellipsis text-sm text-gray-11 px-4 py-4">
        <ul className="list-disc px-4 overflow-auto">
          <li>
            Coding Languages : Solidity, Web3, Typescript, JavaScript (Next.js,
            Vue.js, React.js, Next.js) , Java
          </li>
          <li>
            Tools: Foundry, Metamask, Hardhat, Moralis, IPFS, Fleek, Truffle,
            Mocha, Ethereum, GitHub, Power BI
          </li>
        </ul>
      </div>
    </ContentDisplay>
  );
};

export default Skills;
