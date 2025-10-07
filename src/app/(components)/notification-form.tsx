"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.email("Please enter a valid email address."),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
  company: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const STORAGE_KEY = "notify-form";

const NotificationForm = () => {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      terms: false,
      company: "",
    },
    mode: "onBlur",
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const { name, email } = JSON.parse(saved);
        form.setValue("name", name || "");
        form.setValue("email", email || "");
      } catch {}
    }
  }, [form]);

  useEffect(() => {
    const sub = form.watch((values) => {
      const { name, email } = values as FormValues;
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ name, email }));
    });
    return () => sub.unsubscribe();
  }, [form]);

  const onSubmit = async (values: FormValues) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("ok");
      form.reset({ name: "", email: "", company: "", terms: false });
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      setStatus("error");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <div className="hidden" aria-hidden="true">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  type="text"
                  autoComplete="name"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-Mail</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start justify-center space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value as boolean}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="leading-none">
                <FormDescription className="text-sm font-normal cursor-pointer">
                  I have read and agree to the{" "}
                  <a
                    href="/terms"
                    className="underline hover:text-amber-500 "
                    target="_blank"
                  >
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    className="underline hover:text-amber-500 "
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                  .
                </FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <button
          type="submit"
          className=" w-full border-[1px] border-white text-white hover:bg-white hover:text-black transition-all py-3 px-4 rounded-full font-medium"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {status === "ok" && (
          <p className="text-sm text-green-700">Thanks! You’re on the list.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-700">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </Form>
  );
};

export default NotificationForm;
