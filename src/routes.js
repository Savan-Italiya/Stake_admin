import { element } from "prop-types";
import React from "react";
// import { useParams } from "react-router-dom";

const LandingBanner = React.lazy(() => import("./views/lendingpage/index"));
const Users = React.lazy(() => import("./views/users"));
const Games = React.lazy(() => import("./views/games/index"));
const GameMenu = React.lazy(() => import("./views/games/GameMenu"));
// const Crash = React.lazy(() => import("./views/GameDetail/Games"));
const Logs = React.lazy(() => import("./views/logs"));
const User = React.lazy(() => import("./views/users/usersHistory"));
const userDistribution = React.lazy(() => import("./views/users/userDistribution"))

// const { gameName, gameId } = useParams();

const routes = [
  { path: "/dashboard", name: "Home", element: LandingBanner },
  { path: "/users", name: "Users", element: Users },
  { path: "/users/:userName/:userId", name: "User", element: User },
  { path: "/games", name: "Games", element: Games },
  { path: "/games/:gameName/:gameId", name: "GameMenu", element: GameMenu },
  { path: "/logs", name: "Logs", element: Logs },
  {
    path: "/userDistribution",
    name: "User Distribution",
    element: userDistribution,
  },
];

export default routes;
