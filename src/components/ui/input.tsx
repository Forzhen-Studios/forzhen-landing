import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <div className="relative">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "peer file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0  bg-transparent px-3 pt-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          " focus-visible:ring-ring/00 focus-visible:ring-[0px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
      <div
        aria-hidden
        className={cn(
          "absolute left-0 right-0 bottom-0 h-px pointer-events-none transition-all duration-300",
          "bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0)_100%)]",
          "peer-focus:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.9)_50%,rgba(255,255,255,0)_100%)]"
        )}
      ></div>
    </div>
  );
}

export { Input };
