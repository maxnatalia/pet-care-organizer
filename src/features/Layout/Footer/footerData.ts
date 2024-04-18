import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { styledIcon } from "./styled";

export const socialMedia = [
  {
    name: "GitHub",
    link: `https://github.com/maxnatalia`,
    Icon: styledIcon(AiFillGithub),
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/natalia-mazur-%C5%BCurek-136a35254/",
    Icon: styledIcon(AiFillLinkedin),
  },
];

export const email = "nataliamazur1988@gmail.com";

export const dynamicYear = new Date().getFullYear();
