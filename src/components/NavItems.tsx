"use client";
import {PRODUCT_CATEGORIES} from "@/config";
import React, {useEffect, useRef, useState} from "react";
import NavItem from "./NavItem";
import {useOnClickOutside} from "@/hooks/use-on-click-outside";

function NavItems() {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };
    document.addEventListener("keydown", (e) => handler(e));

    return () => {
      document.removeEventListener("keydown", (e) => handler(e));
    };
  });

  useOnClickOutside(navRef, () => setActiveIndex(null));
  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === index) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        };
        const isOpen = index === activeIndex;

        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            key={index}
            isOpen={isOpen}
            isAnyOpen={activeIndex !== null}
          />
        );
      })}
    </div>
  );
}

export default NavItems;
