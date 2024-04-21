import { TbHome, TbPaw } from "react-icons/tb";
import { MdAddCircle, MdEvent } from "react-icons/md";
import { styledIcon } from "./styled";

export const navigationList = [
  {
    name: "Home",
    link: "/",
    title: "Go Home",
    Icon: styledIcon(TbHome),
  },
  {
    name: "My Pets",
    link: "/pets",
    title: "Go to pets list",
    Icon: styledIcon(TbPaw),
  },
  {
    name: "Events",
    link: "/events",
    title: "Go to events list",
    Icon: styledIcon(MdEvent),
  },
  {
    name: "Add Pet",
    link: "/petForm",
    title: "Go to form",
    Icon: styledIcon(MdAddCircle),
  },
  {
    name: "Add Event",
    link: "/eventForm",
    title: "Go to form",
    Icon: styledIcon(MdAddCircle),
  },
];
