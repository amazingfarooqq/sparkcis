"use client";

import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { submitContactForm, FormData } from "./actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

export default function ContactPagee() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      form.reset();
    },
  });

  async function onSubmit(data: FormData) {
    mutation.mutate(data);
  }

  return (
    <>
      <div className=" ">
        <div className="flex flex-col items-center py-10">
          <Link href="/" className="flex items-center gap-4 p-4">
            <Image src="/profile.png" alt="Profile" width={50} height={50} className="rounded-full border border-gray-400" />
            <div className="flex flex-col">
              <strong className="text-slate-900 font-semibold dark:text-slate-200">
                Farooq Dad
              </strong>
              <div className="flex gap-2 items-center text-slate-500 font-medium dark:text-slate-400 -my-1">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                available for hire
              </div>
            </div>
          </Link>
        </div>
        <div aria-hidden="true" className=" inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"> </div>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-6xl font-bold tracking-tight text-gray-900 ">
            Lets talk
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          Fill out the form below and I'll be in touch ASAP!
          </p>
        </div>
        <div className="py-10 flex items-center justify-center mx-2">
          <div className="relative   ">
            <div className="absolute inset-0 bg-primary rounded-lg transform -rotate-6 scale-100 z-0  hidden md:block"></div>
            <div className="relative px-10 py-10 text-white bg-gray-800 border border-gray-600 rounded-lg shadow-xl overflow-hidden z-10  ">

              <div className="relative">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto mt-16 w-[78vw] md:w-[58vw]  xl:w-[600px] sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 w-full">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="sm:col-span-2">
                            <FormLabel>First name</FormLabel>
                            <FormControl>
                              <Input {...field} className="border border-gray-500"/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem className="sm:col-span-2">
                            <FormLabel>Last name</FormLabel>
                            <FormControl>
                              <Input {...field} className="border border-gray-500"/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="sm:col-span-2">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input {...field} type="email" className="border border-gray-500" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem className="sm:col-span-2">
                            <FormLabel>Phone number</FormLabel>
                            <FormControl>
                              <Input {...field} className="border border-gray-500"/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem className="sm:col-span-2">
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <Input {...field} className="border border-gray-500"/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="sm:col-span-2">
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea {...field} className="border border-gray-500"/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {mutation.isError && (
                      <Alert variant="destructive" className="mt-10">
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{mutation.error.message}</AlertDescription>
                      </Alert>
                    )}

                    {mutation.isSuccess && (
                      <Alert className="mt-10">
                        <AlertTitle>Success</AlertTitle>
                        <AlertDescription>Your message has been sent successfully!</AlertDescription>
                      </Alert>
                    )}

                    <div className="mt-10">
                      <Button type="submit" className="w-full" disabled={mutation.isPending}>
                        {mutation.isPending ? "Submitting..." : "Let's talk"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      <div className="h-[700px] bg-gray-900  -mt-36 md:-mt-48 lg:-mt-[500px]"></div>

      </div>
    </>
  );
}

