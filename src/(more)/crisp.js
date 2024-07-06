"use client"
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
import { MY_CRISP_WEBSITE_ID } from "@/app/ConfigApp";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure(`${MY_CRISP_WEBSITE_ID}`);
  });

  return null;
}

export default CrispChat;