import React from "react";
import ReactDOM from "react-dom/client";

import TwitchProvider from "~context/twitch";

import MuiProvider from "./styles/mui";

const render = (node: React.ReactNode) => {
  const app = document.getElementById("app");

  return ReactDOM.createRoot(app).render((
    <React.StrictMode>
      <MuiProvider>
        <TwitchProvider>
          {node}
        </TwitchProvider>
      </MuiProvider>
    </React.StrictMode>
  ));
};

export default render;