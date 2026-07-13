"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070&auto=format&fit=crop"
          alt="Green Puspa Community"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-6xl font-bold mb-6"
        >
          Green Puspa
          <span className="block text-2xl md:text-3xl mt-4 font-normal">Kampung Urban Farming RW 06 Utan Kayu Selatan</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 font-light"
        >
          Mewujudkan lingkungan hijau, sehat, dan produktif melalui semangat gotong royong dan inovasi pertanian perkotaan.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/about" className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-white")}>
            Tentang Kami
          </Link>
          <Link href="#programs" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "bg-white/10 text-white border-white hover:bg-white hover:text-black")}>
            Jelajahi Program
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
