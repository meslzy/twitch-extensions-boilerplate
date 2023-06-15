import type { MantineThemeOverride, Tuple, DefaultMantineColor } from "@mantine/core";

type Colors = DefaultMantineColor | "primary";

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<Colors, Tuple<string, 10>>;
  }
}

const theme: MantineThemeOverride = {
  colorScheme: "dark",
  primaryColor: "primary",
  loader: "oval",
  colors: {
    primary: [
      "#580000",
      "#580000",
      "#580000",
      "#580000",
      "#580000",
      "#580000",
      "#580000",
      "#580000",
      "#580000",
      "#580000",
    ],
  },
  fontFamily: "inherit",
  globalStyles: ( theme ) => {
    return {
      "*, *::before, *::after": {
        boxSizing: "border-box",
        userSelect: "none",
        margin: 0,
        padding: 0,
      },
      body: {
        backgroundColor: theme.black,
        position: "relative",
        height: "100vh",
      },
    };
  },
};

export default theme;