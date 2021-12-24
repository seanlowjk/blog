import React from "react";

import { MiscCardInfo } from "./MiscTypes";
import DRY from "../components/posts/DRY";
import Teaching from "../components/posts/Teaching";

export const MiscCardInfos: MiscCardInfo[] = [
  {
    title: "Don't Repeat Yourself (DRY)",
    subtitle:
      "This article talks about some bad practices i did during my internship",
    href: "/misc/dry",
    content: <DRY />,
  },
  {
    title: "My Teaching Career in NUS",
    subtitle:
      "This article talks about my part-time teaching experience in NUS",
    href: "/misc/teaching",
    content: <Teaching />,
  },
];
