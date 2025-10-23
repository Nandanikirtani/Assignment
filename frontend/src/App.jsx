import React, { useState } from "react";
import ProfileTabs from "./components/Firstwidget.jsx";
import GalleryWidget from "./components/Secondwidget.jsx";

function App() {
  return (
    <div className="flex min-h-screen bg-[#1A1B1F] text-gray-300 p-6">
      {/* Left half empty */}
      <div className="hidden lg:block lg:w-1/2"></div>

      {/* Right widgets */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-6">
        <ProfileTabs />
        <div className="w-1/2 h-[4px] bg-gray-600 rounded-full opacity-80 "></div>
        <GalleryWidget />
        <div className="w-1/2 h-[4px] bg-gray-600 rounded-full opacity-80 "></div>
      </div>
    </div>
  );
}

export default App;
