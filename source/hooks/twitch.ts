import React from "react";

import {useTwitch} from "~context/twitch";

import {getUsersFollows} from "~api/twitch";

enum FollowingStatus {
  Unknown = "unknown",
  Checking = "checking",
  Following = "following",
  NotFollowing = "not-following",
  Broadcaster = "broadcaster",
}

const useFollowingStatus = () => {
  const {authorized} = useTwitch();

  const [followingStatus, setFollowingStatus] = React.useState(FollowingStatus.Unknown);

  React.useEffect(() => {
    Twitch.ext.actions.requestIdShare();

    Twitch.ext.actions.onFollow((didFollow: boolean) => {
      if (didFollow) {
        setFollowingStatus(FollowingStatus.Following);
      } else {
        setFollowingStatus(FollowingStatus.NotFollowing);
      }
    });
  }, []);

  React.useEffect(() => {
    if (!authorized) {
      return;
    }

    if (!Twitch.ext.viewer.id) {
      return;
    }

    if (Twitch.ext.viewer.id === authorized.channelId) {
      return setFollowingStatus(FollowingStatus.Broadcaster);
    }

    setFollowingStatus(FollowingStatus.Checking);

    const abortController = new AbortController();

    const request = getUsersFollows({
      fromId: Twitch.ext.viewer.id,
      toId: authorized.channelId,
      options: {
        signal: abortController.signal,
      },
    });

    request.then((data) => {
      if (data.total > 0) {
        setFollowingStatus(FollowingStatus.Following);
      } else {
        setFollowingStatus(FollowingStatus.NotFollowing);
      }
    }).catch(() => {
      setFollowingStatus(FollowingStatus.Unknown);
    });

    return () => {
      abortController.abort();
    };
  }, [authorized]);

  return {
    followingStatus,
    setFollowingStatus,
  };
};

export {
  FollowingStatus,
  useFollowingStatus,
};