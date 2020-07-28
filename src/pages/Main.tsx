import React from "react";

import About from "../components/About";
import Introduction from "../components/Introduction";

function Main() {
  return (
    <div>
      <Introduction title={"Sean Low"} subtitle={"Welcome to my Blog! "} />
      <About />
    </div>
  );
}

export default Main;
