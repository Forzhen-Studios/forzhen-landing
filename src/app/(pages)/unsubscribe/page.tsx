"use client";
import React, { useState, useEffect } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export const Unsubscribe: React.FC = () => {
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const emailParam = params.get("email");
    const token = params.get("token");

    if (emailParam && token) {
      setEmail(emailParam);
      handleUnsubscribe(emailParam, token);
    } else {
      setStatus("error");
    }
  }, []);

  const handleUnsubscribe = async (email: string, token: string) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0e0a] to-[#2d1810] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a0e0a] border border-white/[0.08] p-12">
          <div className="mb-8">
            <div className="text-[13px] font-bold tracking-[2px] text-white uppercase mb-1">
              FORZHEN
            </div>
            <div className="text-[13px] font-bold tracking-[2px] text-white uppercase">
              STUDIOS
            </div>
          </div>

          <div className="border-t border-white/[0.06] pt-8">
            {status === "loading" && (
              <div className="text-center">
                <Loader2 className="w-12 h-12 text-white/40 mx-auto mb-6 animate-spin" />
                <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">
                  Processing...
                </h1>
                <p className="text-white/50 text-sm leading-relaxed">
                  Updating your preferences
                </p>
              </div>
            )}

            {status === "success" && (
              <div className="text-center">
                <CheckCircle2 className="w-12 h-12 text-white/40 mx-auto mb-6" />
                <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">
                  You're unsubscribed
                </h1>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {email && (
                    <>
                      <span className="text-white/50">{email}</span> has been
                      removed from our mailing list.
                    </>
                  )}
                  {!email && "You've been removed from our mailing list."}
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>
                <p className="text-white/40 text-xs leading-relaxed">
                  We're sorry to see you go. If you change your mind, you can
                  always sign up again on our website.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white/40 text-2xl">!</span>
                </div>
                <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">
                  Something went wrong
                </h1>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  We couldn't process your unsubscribe request. The link may be
                  invalid or expired.
                </p>
                <p className="text-white/40 text-xs leading-relaxed">
                  If you continue to receive emails, please contact us at{" "}
                  <a
                    href="mailto:hello@forzhenstudios.com"
                    className="text-white/60 underline"
                  >
                    hello@forzhenstudios.com
                  </a>
                </p>
              </div>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.06]">
            <p className="text-white/25 text-[11px] tracking-wider text-center">
              © 2025 Forzhen Studios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unsubscribe;
