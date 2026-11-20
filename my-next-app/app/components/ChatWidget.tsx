"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

const WEBHOOK_URL =
  "https://n8n.srv2166015.hstgr.cloud/webhook/72b0e419-dd41-4370-8805-04807f051462/chat";

export default function ChatWidget() {
  useEffect(() => {
    const chat = createChat({
      webhookUrl: WEBHOOK_URL,
      mode: "window",
      showWelcomeScreen: false,
      initialMessages: [
        "Hi there! ☕ Welcome to Brew & Co.",
        "Ask me about our menu, hours, or reservations.",
      ],
      i18n: {
        en: {
          title: "Brew & Co",
          subtitle: "We're here to help.",
          footer: "",
          getStarted: "New conversation",
          inputPlaceholder: "Type your question…",
          closeButtonTooltip: "Close",
        },
      },
    });

    return () => {
      chat.unmount();
    };
  }, []);

  return null;
}
