import React from "react";

import { MiscCardInfo } from "./MiscTypes";
import DRY from "../components/posts/DRY";

export const MiscCardInfos: MiscCardInfo[] = [
  {
    title: "Don't Repeat Yourself (DRY)",
    subtitle:
      "This article talks about some bad practices i did during my internship",
    href: "/misc/dry",
    content: <DRY />,
  },
];
