import React from "react";
import ContentDisplay from "../../layouts/content-display";
import { KanbanSquare } from "lucide-react";

const ResumeContent = () => {
  return (
    <ContentDisplay
      className="col-span-2 w-full min-[560px]:col-span-4"
      symbol={<KanbanSquare />}
      name="Experiences"
      description=""
    >
      <div className="grid grid-flow-row auto-rows-max flex-col overflow-hidden rounded-none border border-gray-6 bg-gray-2">
        <div className="collapse collapse-arrow border-base-300 border border-gray-6 bg-gray-2">
          <input type="radio" name="my-accordion-2" checked={undefined} />
          <div className="collapse-title text-md font-medium">
            <div>
              Full Stack Developer , Smart Contract Auditor - Solidity / Web3
            </div>
            <span className="mt-0.5 text-sm text-gray-11 md:mt-1 md:text-base">
              July 2022 - Present
            </span>
          </div>
          <div className="collapse-content">
            <ul className="list-disc px-4">
              <li>
                Audited DeFi protocols using Foundry and Hardhat to search and
                fix vulnerabilities within the system
              </li>
              <li>
                Refactored code by writing and executing test cases to improve
                gas optimizations
              </li>
              <li>
                Click to open this one and close others Click to open this one
                and close others{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse collapse-arrow border-base-300 border border-gray-6 bg-gray-2border border-gray-6 bg-gray-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-md font-medium">
            <div>Deloitte</div>
            <span className="mt-0.5 text-sm text-gray-11 md:mt-1 md:text-base">
              Solution Specialist - Full Stack Developer
            </span>
          </div>
          <div className="collapse-content">
            <ul className="list-disc px-4">
              <li>
                Developed 21 single page applications using Vue.js with
                Typescript from a .NET based legacy web application which is
                utilized by 1000s of users filing for worker’s compensation in
                the state of Pennyslvania
              </li>
              <li>
                Built RESTful Web API’s using ASP.NET used to serve data between
                a Vue.js front-end and SQL back-end which gives clients access
                to the application from any browsers and mobile devices
              </li>
              <li>
                Served as the main developer tasked in triaging, investigating
                and resolving bugs from 5 sprint cycles across 50 applications
                while utilizing debugging tools like Chrome Developer tools and
                Vue.js Dev Tools
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse collapse-arrow border-base-300 border border-gray-6 bg-gray-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-md font-medium">
            <div>Propulsion Technologies International</div>
            <span className="mt-0.5 text-sm text-gray-11 md:mt-1 md:text-base">
              Digital Technology Analyst
            </span>
          </div>
          <div className="collapse-content">
            <ul className="list-disc px-4">
              <li>
                Led the company’s digital transformation by innovating digital
                factory concepts including machine connectivity, data
                visualization, data analysis, and removing data silos which
                reduced the time for managers and engineers to access and
                analyze data from 2 hours to 5 minutes using Power BI
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentDisplay>
  );
};

export default ResumeContent;
