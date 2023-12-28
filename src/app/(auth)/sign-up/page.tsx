"use client";
import {Button, buttonVariants} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Icons} from "@/constants/Icons";
import {cn} from "@/lib/utils";
import {ArrowRight} from "lucide-react";
import Link from "next/link";
import React from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
  AuthCredientialsValidator,
  TAuthCredientialsValidator,
} from "@/lib/validators/account-credentials-validators";

function page() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<TAuthCredientialsValidator>({
    resolver: zodResolver(AuthCredientialsValidator),
  });

  const onSubmit = ({email, password}: TAuthCredientialsValidator) => {
    // Send data to the server
  };

  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto w-full flex flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20 " />
            <h1 className="text-2xl font-bold">Create an account</h1>
            <Link
              className={buttonVariants({
                variant: "link",
              })}
              href="sign-in"
            >
              Already have an account?
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email")}
                    className={cn({"focus-visible:ring-red-500": errors.email})}
                    placeholder="example@example.com"
                    id="email"
                    type="email"
                  />
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register("password")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                    placeholder="Type a strong password please"
                    id="password"
                    type="password"
                  />
                  <Button> Sign Up</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
