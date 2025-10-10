"use client";

import {
  Dialog,
  DialogTrigger,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogContent,
} from "@/components/ui/dialog";
import { Bell } from "lucide-react";
import React, { useRef } from "react";
import NotificationForm from "./notification-form";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useAnimationStore from "@/stores/useAnimationStore";

const NotifyButton = () => {
  const buttonRef = useRef(null);
  const exit = useAnimationStore((state: { exit: unknown; }) => state.exit);

  useGSAP(() => {
    if (!buttonRef.current) return;

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 1.3,
        ease: "power3.out",
      }
    );
  }, []);

  useGSAP(() => {
    if (!buttonRef.current || !exit) return; // Check exit is true

    gsap.to(buttonRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.in",
    });
  }, [exit]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          ref={buttonRef}
          className="cursor-pointer relative mt-8 flex items-center justify-center rounded-full bg-neutral-50 w-64 lg:w-full md:w-64 py-3 overflow-hidden group
           hover:bg-neutral-950 hover:text-white duration-500  transition-colors opacity-0"
        >
          <span className="relative z-10 flex items-center space-x-2 text-neutral-950 group-hover:text-white">
            {/* <span>Official Site Coming Soon —</span> */}
            <span>Join the waitlist</span>
            <Bell className="h-5 w-5 transition-transform duration-500 group-hover:rotate-12" />
          </span>
          <span className="absolute inset-0 bg-neutral-950 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 rounded-full"></span>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md bg-gradient-to-br from-[#0a0a0a] to-[#1a0e0a] border border-white/[0.08] p-12 text-2xl text-white lg:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-[3rem]">Sign up</DialogTitle>
          <DialogDescription>
            We&apos;re currently working on our site sign up to get notified
            when it&apos;s finished.
          </DialogDescription>
        </DialogHeader>
        <NotificationForm />
      </DialogContent>
    </Dialog>
  );
};

export default NotifyButton;
