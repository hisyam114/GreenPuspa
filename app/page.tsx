"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ArrowRight, Leaf, Droplets, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
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
            <Link href="/about" className={buttonVariants({ size: "lg", className: "bg-primary hover:bg-primary/90 text-white" })}>
              Tentang Kami
            </Link>
            <Link href="/programs" className={buttonVariants({ size: "lg", variant: "outline", className: "bg-white/10 text-white border-white hover:bg-white hover:text-black" })}>
              Jelajahi Program
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-surface-green border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <AnimatedCounter value={2017} />
              <p className="mt-2 text-muted-foreground font-medium">Program Dimulai</p>
            </div>
            <div className="flex flex-col items-center">
              <AnimatedCounter value={1500} suffix="+" />
              <p className="mt-2 text-muted-foreground font-medium">Lubang Hidroponik</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-heading font-bold text-4xl md:text-5xl text-primary">RW 06</span>
              <p className="mt-2 text-muted-foreground font-medium">Lokasi Komunitas</p>
            </div>
            <div className="flex flex-col items-center">
              <AnimatedCounter value={100} suffix="%" />
              <p className="mt-2 text-muted-foreground font-medium">Gotong Royong Warga</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1592424005826-69168da40125?q=80&w=2070&auto=format&fit=crop"
                alt="Warga Green Puspa"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">Dari Warga, Untuk Warga, dan Oleh Warga</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Berawal di tahun 2017, warga RW 06 Utan Kayu Selatan berinisiatif mengubah lingkungan padat penduduk menjadi kawasan hijau yang produktif. Kini, Green Puspa menjadi contoh sukses bagaimana semangat gotong royong dapat menghadirkan ketahanan pangan dan lingkungan yang lebih sehat.
              </p>
              <Link href="/about" className={buttonVariants({ variant: "outline", className: "group" })}>
                Pelajari Lebih Lanjut <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Program Unggulan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Inisiatif kami berfokus pada keberlanjutan dan pemberdayaan masyarakat.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Hidroponik</CardTitle>
                <CardDescription>Pemanfaatan ruang sempit untuk budidaya sayuran sehat.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center mb-4">
                  <Droplets className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Akuaponik</CardTitle>
                <CardDescription>Sistem terintegrasi budidaya ikan dan tanaman produktif.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Edukasi Lingkungan</CardTitle>
                <CardDescription>Pusat pembelajaran urban farming bagi masyarakat luas.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Ketahanan Pangan</CardTitle>
                <CardDescription>Memenuhi kebutuhan pangan sehat bagi warga sekitar.</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Link href="/programs" className={buttonVariants()}>Lihat Semua Program</Link>
          </div>
        </div>
      </section>

      {/* Community Impact Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Dampak Sosial & Lingkungan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary/5 p-8 rounded-2xl">
              <h3 className="font-heading text-2xl font-semibold mb-4 text-primary">Lingkungan Hijau</h3>
              <p className="text-muted-foreground">Menghidupkan kembali gang-gang sempit menjadi koridor hijau yang menyejukkan, menurunkan suhu mikro, dan memperindah wajah kampung.</p>
            </div>
            <div className="bg-secondary/10 p-8 rounded-2xl">
              <h3 className="font-heading text-2xl font-semibold mb-4 text-secondary-foreground">Ekonomi Sirkular</h3>
              <p className="text-muted-foreground">Hasil panen tidak hanya dikonsumsi sendiri, tetapi juga menjadi sumber ekonomi mandiri komunitas untuk keberlanjutan program.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Mari Mengenal Green Puspa Lebih Dekat</h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Bergabunglah dalam gerakan menghijaukan kota dan menciptakan ketahanan pangan mulai dari pekarangan kita sendiri.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className={buttonVariants({ size: "lg", variant: "secondary", className: "bg-white text-primary hover:bg-gray-100" })}>
              Hubungi Kami
            </Link>
            <Link href="/gallery" className={buttonVariants({ size: "lg", variant: "outline", className: "border-white text-white hover:bg-white/10" })}>
              Lihat Galeri
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
