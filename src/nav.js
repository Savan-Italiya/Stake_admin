import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import EmailIcon from "@mui/icons-material/Email";
import GroupIcon from "@mui/icons-material/Group";
import cards from "./assets/img/card.png"
import { PiUserSquareDuotone } from "react-icons/pi";

const nav = [
  {
    name: "Dashboard",
    to: "/dashboard",
    icon: <InboxIcon />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Users",
    to: "/users",
    icon: <GroupIcon />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Games",
    to: "/games",
    icon: <img src={cards} alt="Not Found" />,
    badge: {
      color: "info",
    },
  },
  {
    name: "Logs",
    to: "/logs",
    icon: <PiUserSquareDuotone size={25}/>,
    badge: {
      color: "info",
    },
  },
];

export default nav;
