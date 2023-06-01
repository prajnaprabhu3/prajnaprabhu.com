"use client";

import React from "react";
import { useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
import { MdPlayArrow } from "react-icons/md";

import { company } from "@/../data/experience";

function Experience() {
  const [activeCompany, setActiveCompany] = useState("ABC");
  return (
    <div className="pt-10">
      <div className="flex-col justify-center items-center  md:flex-row flex md:items-start md:justify-start  gap-x-10">
        {/* company button  */}
        <div className="flex-row text-sm md:flex-col md:text-lg flex">
          {company.map((company, id) => (
            <button
              key={id}
              onClick={() => setActiveCompany(company.title)}
              className={`py-2 px-10 text-md font-medium md:rounded-r-md border-l-2 ${
                activeCompany == company.title
                  ? "bg-[#292A2C] border-[#FE9FA1]"
                  : "bg-[#141516] border-[#3F3F3F]"
              }`}
            >
              {company.title}
            </button>
          ))}
        </div>

        {/* company details  */}
        <div className="mt-8 w-full  md:mt-2  lg:mt-0">
          {company.map(
            (company, id) =>
              activeCompany === company.title && (
                <div key={id} className="flex flex-col  gap-y-3">
                  <div>
                    <h2 className="font-semibold text-lg">
                      {company.designation}
                    </h2>
                    <p className="text-sm text-zinc-500 py-1">
                      {company.timeline}
                    </p>
                  </div>

                  <div className="flex flex-col gap-y-2">
                    {company.details.map((detail, id) => (
                      <p
                        key={id}
                        className="flex items-baseline gap-x-1 text-sm"
                      >
                        <span>
                          <MdPlayArrow />
                        </span>
                        <p>{detail}</p>
                      </p>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Experience;
