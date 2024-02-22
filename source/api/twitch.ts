import axios, {AxiosRequestConfig} from "axios";

const client = axios.create({
  baseURL: "https://api.twitch.tv/helix",
});

const setAuthorization = (helixToken: string, clientId: string) => {
  client.defaults.headers.common["Authorization"] = `Extension ${helixToken}`;
  client.defaults.headers.common["client-id"] = clientId;
};

interface UsersFollowsRequest {
  toId: string;
  fromId: string;
  options?: AxiosRequestConfig;
}

const getUsersFollows = async (request: UsersFollowsRequest) => {
  const {data} = await client.get("users/follows", {
    ...request.options,
    params: {
      to_id: request.toId,
      from_id: request.fromId,
    },
  });

  return data;
};

export {
  setAuthorization,
};

export {
  getUsersFollows,
};