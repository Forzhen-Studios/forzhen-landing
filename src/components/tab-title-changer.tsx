"use client";

import { useEffect, useRef } from "react";
const titles = [
  "🥺 Come back, we miss you!",
  "🚀 We're launching soon, stay tuned!",
  "💡 Got ideas? We'd love to hear them!",
  "🎮 Game development in progress!",
  "🌐 Building a better web experience!",
  "📧 Join our waitlist for updates!",
  "🔥 Exciting things are coming!",
  "🎉 Thanks for visiting Forzhen Studios!",
  "💻 Crafting code with passion!",
];

export default function TabTitleChanger() {
  const originalTitleRef = useRef<string | null>(null);

  useEffect(() => {
    originalTitleRef.current = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        const randomTitle = titles[Math.floor(Math.random() * titles.length)];
        document.title = randomTitle;
      } else {
        if (originalTitleRef.current) {
          document.title = originalTitleRef.current;
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (originalTitleRef.current) {
        document.title = originalTitleRef.current;
      }
    };
  }, []);

  return null;
}
