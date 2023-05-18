"use client";

import React from "react";
import { useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
import { MdPlayArrow } from "react-icons/md";

import { company } from "@/../data/experience";

function Experience() {
  const [activeCompany, setActiveCompany] = useState("Linear");
  return (
    <div>
      <div className="flex items-center gap-x-10 py-10">
        {/* company button  */}
        <div className="flex flex-col">
          {company.map((company, id) => (
            <button
              key={id}
              onClick={() => setActiveCompany(company.title)}
              className={`py-2 px-10 text-md font-medium rounded-r-md border-l-2 ${
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
        <div>
          {company.map(
            (company, id) =>
              activeCompany === company.title && (
                <div key={id} className="flex flex-col  gap-y-3">
                  <div>
                    <h2 className="font-semibold">{company.designation}</h2>
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
          {/* {company.map(
            (company) =>
              activeCompany === company.title && (
                <div
                  key={company.id}
                  className="flex flex-col lg:flex-row   mt-4 md:mt-6"
                >
                  <p className="text-[#565353] mx-2 lg:my-auto md:mx-8 text-base md:text-xl">
                    {company.details}
                  </p>
                  <div
                    className={`rounded-md my-4 md:my-6 ${
                      activeCompany === "Blockchain"
                        ? "h-20 md:h-24"
                        : "h-10 md:h-12"
                    }`}
                    id={company.style_id}
                  ></div>
                </div>
              )
          )} */}
        </div>
      </div>
    </div>
  );
}

export default Experience;
