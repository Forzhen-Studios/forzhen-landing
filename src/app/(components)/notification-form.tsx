"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  // Honeypot: should remain empty
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
      company: "",
    },
    mode: "onBlur",
  });

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
      form.reset({ name: "", email: "", company: "" });
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      setStatus("error");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="enter your name"
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
        <button
          type="submit"
          className="rounded-md bg-neutral-900 px-4 py-2 text-white disabled:opacity-60"
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
