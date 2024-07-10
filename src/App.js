import React from "react";
import Topbar from "./Component/Navbar/Topbar";
import Filter from "./Component/Category/Filter";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-slate-400 via-slate-100 to-gray-400 min-h-screen">
      <Topbar />
      <div className=" px-2 py-4">
        <Filter />
      </div>
    </div>
  );
};

export default App;
