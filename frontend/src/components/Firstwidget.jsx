import React, { useState } from "react";
import { HelpCircle } from "lucide-react";

const tabs = ["About Me", "Experiences", "Recommended"];

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <div className="relative bg-[#373E44] max-h-72 w-[650px] rounded-3xl shadow-lg p-6 flex flex-col gap-6">
      
      <div className="absolute top-4 left-4 group z-10">
        <HelpCircle className="w-8 h-8 text-[#969696]" />
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
          Click on tabs to view content
        </div>
      </div>

      
      <div className="flex bg-[#191B1F] rounded-2xl p-1 ml-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              relative flex-1 py-3 px-4 rounded-2xl text-center font-medium text-gray-400 overflow-hidden
              transition-colors duration-300
              ${
                activeTab === tab
                  ? "bg-[#373E44] text-white"
                  : "hover:text-white"
              }
              group
            `}
          >
            {tab}
           
            {activeTab !== tab && (
              <span
                className="
                absolute top-0 left-0 w-full h-full
                bg-gradient-to-r from-white/10 via-white/40 to-white/10
                transform -translate-x-full
                group-hover:translate-x-0
                transition-transform duration-[1000ms] ease-in-out
                pointer-events-none
              "
              ></span>
            )}
          </button>
        ))}
      </div>

    
      <div className="overflow-y-auto h-48 text-[#969696] text-xl p-6 custom-scrollbar">
        {activeTab === "About Me" && (
          <>
            <p>
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now.
            </p>
            <br />
            <p>
              I was born and raised in Albany, NY & have been living in Santa
              Carla for the past 10 years with my wife Tiffany and my 4-year-old
              twin daughters—Emma and Ella. Both of them are just starting
              school, so my calendar is usually blocked between 9–10 AM.
            </p>
          </>
        )}
        {activeTab === "Experiences" && <p>Experiences content here...</p>}
        {activeTab === "Recommended" && <p>Recommended content here...</p>}
      </div>

      
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #6B7280;
            border-radius: 9999px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: #4B5563;
          }
        `}
      </style>
    </div>
  );
}
