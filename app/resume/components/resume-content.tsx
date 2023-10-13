import React from "react";
import ContentDisplay from "../../components/layouts/content-display";
import { KanbanSquare } from "lucide-react";

const ResumeContent = () => {
  return (
    <ContentDisplay
      className="col-span-2 w-full min-[560px]:col-span-4"
      symbol={<KanbanSquare />}
      name="Experiences"
      description=""
    >
      <div className="grid grid-flow-row auto-rows-max flex-col overflow-hidden rounded-none border border-gray-6 bg-gray-2 ">
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" checked={undefined} />
          <div className="collapse-title text-md md:rounded-2xl">
            <div className="flex w-full items-center md:flex-row md:justify-between">
              <div className="font-medium ">
                Full Stack Developer , Smart Contract Security Engineer
              </div>
              <span className="hidden md:block mt-0.5 text-sm text-gray-11 md:mt-1 md:text-small">
                July 2022 - Present
              </span>
            </div>
            <div className="space-x-2 md:hidden">
              <span className="mt-0.5 text-sm text-gray-11 md:mt-1 md:text-small">
                July 2022 - Present
              </span>
            </div>
            <div className="space-x-2 md:flex">
              <span className="mt-0.5 text-sm text-gray-11 md:mt-1 md:text-small">
                Part-time
              </span>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-md font-semibold">
              Smart Contract Auditor - Code4Arena , Shelock DeFi
            </p>
            <ul className="list-disc px-4">
              <li>
                Audited DeFi protocols using Foundry and Hardhat to search and
                fix vulnerabilities within the system
              </li>
              <li>
                Refactored code by writing and executing test cases to improve
                gas optimizations
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse collapse-arrow border-t-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-md">
            <div className="flex w-full items-center md:flex-row md:justify-between">
              <div className="font-medium ">Deloitte</div>
              <span className="mt-0.5 text-sm text-gray-11 md:mt-1 md:text-small hidden md:block">
                November 2020 - July 2022
              </span>
            </div>
            <div className="space-x-2 md:hidden">
              <span className="mt-0.5 text-sm text-gray-11 md:mt-1 md:text-small">
                November 2020 - July 2022
              </span>
            </div>
            <span className="mt-0.5 text-sm text-gray-11 md:mt-1 md:text-small">
              Solution Specialist - Full Stack Developer
            </span>
          </div>

          <div className="collapse-content">
            <ul className="list-disc px-4">
              <li>
                Developed single page applications using Vue.js with Typescript
                from a .NET based legacy web application which is utilized by
                1000s of users filing for worker’s compensation in the state of
                Pennyslvania
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
        <div className="collapse collapse-arrow border-t-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-md">
            <div className="flex w-full items-center md:flex-row md:justify-between">
              <div className="font-medium ">
                Propulsion Technologies Internation
              </div>
              <span className="hidden md:block mt-0.5 text-sm text-gray-11 md:mt-1 md:text-small">
                July 2018 - June 2020
              </span>
            </div>
            <div className="space-x-2 md:hidden">
              <span className="mt-0.5 text-sm text-gray-11 md:mt-1 md:text-small">
                July 2018 - June 2020
              </span>
            </div>
            <span className="mt-0.5 text-sm text-gray-11 md:mt-1 md:text-small">
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
