"use client";
import {ShoppingCart} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import React from "react";
import {Separator} from "./ui/separator";
import {formatPrice} from "@/lib/utils";
import {buttonVariants} from "./ui/button";
import Link from "next/link";
import Image from "next/image";

function Cart() {
  const itemCount = 0;
  const fee = 9;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6 ">
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              {/* TODO : cart logic */}{" "}
            </div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 pr-6">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span className="">Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span className="">{formatPrice(fee)}</span>
                </div>
              </div>
              <SheetFooter className="space-y-4 pr-6">
                <SheetTrigger asChild>
                  <Link
                    href="/checkout"
                    className={buttonVariants({className: "w-full"})}
                  >
                    Continue to checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div
              aria-hidden="true"
              className="relative mb-4 w-60 h-60 text-muted-foreground"
            >
              <Image src="/hippo-empty-cart.png" fill alt="Empty card"></Image>
            </div>
            <div className="text-xl font-semibold">Your Cart is Empty</div>
            <SheetTrigger asChild>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                  className: "text-sm text-muted-foreground",
                })}
              >
                Add Items to your cart checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default Cart;
