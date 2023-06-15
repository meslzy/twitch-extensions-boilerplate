import { createRoot } from "react-dom/client";

import { Text } from "@mantine/core";

import Mantine from "~common/styles/mantine";

const app = createRoot(document.getElementById("app")!);

app.render((
  <Mantine>
    <Text>Panel</Text>
  </Mantine>
));