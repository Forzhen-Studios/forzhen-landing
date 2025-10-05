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

const NotifyButton = () => {
  const buttonRef = useRef(null);

  useGSAP(() => {
    if (!buttonRef.current) return;

    gsap.from(buttonRef.current, {
      opacity: 0,
      duration: 1,
      delay: 1.23,
      ease: "power3.inOut",
    });
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="cursor-pointer relative mt-8 flex items-center justify-center rounded-full bg-neutral-50 px-6 py-3 overflow-hidden group
           hover:bg-neutral-950 hover:text-white  duration-500  transition-colors"
        >
          <span className="relative z-10 flex items-center space-x-2 text-neutral-950 group-hover:text-white">
            <span>Official Site Coming Soon —</span>
            <span>Notify Me</span>
            <Bell className="h-5 w-5 transition-transform duration-500 group-hover:rotate-12" />
          </span>
          <span className="absolute inset-0 bg-neutral-950 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 rounded-full"></span>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Sign up</DialogTitle>
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
