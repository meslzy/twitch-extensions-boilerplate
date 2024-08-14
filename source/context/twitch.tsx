import React from "react";

import {Box, CircularProgress} from "@mui/material";

import {setAuthorization} from "~api/twitch";

interface Configuration {
  global: {
    version: string;
    content: string
  };
  developer: {
    version: string;
    content: string
  };
  broadcaster: {
    version: string;
    content: string
  };
}

interface TwitchContext {
  authorized: Twitch.ext.Authorized | null;
  configuration: Configuration | null;
}

const twitchContext = React.createContext<TwitchContext>(null as any);

const TwitchProvider = (props: React.PropsWithChildren) => {
  const [authorized, setAuthorized] = React.useState<Twitch.ext.Authorized | null>(null);

  const [configuration, setConfiguration] = React.useState<Configuration | null>(null);

  React.useEffect(() => {
    Twitch.ext.onAuthorized((authorized) => {
      setAuthorization(authorized.helixToken, authorized.clientId);
      setAuthorized(authorized);
    });

    Twitch.ext.configuration.onChanged(() => {
      setConfiguration({
        global: Twitch.ext.configuration.global,
        developer: Twitch.ext.configuration.developer,
        broadcaster: Twitch.ext.configuration.broadcaster,
      });
    });
  }, []);

  const context: TwitchContext = {
    authorized,
    configuration,
  };

  if (!authorized) {
    return (
      <Box alignItems={"center"} display={"flex"} height={"100%"} justifyContent={"center"}>
        <CircularProgress/>
      </Box>
    );
  }

  return (
    <twitchContext.Provider value={context}>
      {props.children}
    </twitchContext.Provider>
  );
};

const useTwitch = () => {
  const context = React.useContext(twitchContext);

  if (!context) {
    throw new Error("useTwitch must be used within a TwitchProvider");
  }

  return context;
};

export type {
  TwitchContext,
};

export {
  useTwitch,
};

export default TwitchProvider;
