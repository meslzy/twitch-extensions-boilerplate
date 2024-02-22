import render from "~app/render";

import {Box} from "@mui/material";

import {useFollowingStatus} from "~/hooks/twitch";

const App = () => {
  const {followingStatus} = useFollowingStatus();

  return (
    <Box alignItems={"center"} display={"flex"} height={"100%"} justifyContent={"center"}>
      Video Component {followingStatus}
    </Box>
  );
};

render(
  <App/>,
);