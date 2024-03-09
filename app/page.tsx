"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Suspense } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ImagesSlider } from "@/components/ui/images-slider";
import Landing from "@/components/organism/landing";

export default function Home() {

  const images = [
    "https://images.unsplash.com/photo-1590965918603-0dce981d13b8?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1566647387313-9fda80664848?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1608403890696-0f18a2960153?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1610438250910-01cb769c1334?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <ImagesSlider className="min-h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <div className="flex flex-col  bg-transparent">
          <header className="absolute top-3 left-3">
            <Link className="flex items-center gap-2 justify-center" href="#">
              <Suspense>
                <Avatar>
                  <AvatarImage src="/fl.png" />
                  <AvatarFallback>FL</AvatarFallback>
                </Avatar>
              </Suspense>
              <span className="text-white">Future Layoffs</span>
            </Link>
          </header>
          <Landing />
          <span className="absolute bottom-0 left-0 text-white opacity-40 text-xs md:text-sm">
            Beta Version 1.0.0
          </span>
          <span className="hidden md:block absolute bottom-0 right-0 text-white opacity-40 text-sm">
            &copy; {new Date().getFullYear()} Future Layoffs. All Rights
            Reserved.
          </span>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
