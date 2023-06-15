import { MantineProvider } from "@mantine/core";

import React from "react";

import theme from "./theme";

const Mantine = ( props: React.PropsWithChildren ) => {
  return (
    <MantineProvider theme={ theme } withGlobalStyles={ true } withNormalizeCSS={ true }>
      { props.children }
    </MantineProvider>
  );
};

export default Mantine;