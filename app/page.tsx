"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ArrowRight, Leaf, Droplets, Users, BookOpen, TreePine, Sprout, Fish, Sun } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function SectionFade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0d1f0e]">
        {/* Layered gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a2e0b] via-[#145217] to-[#0d2b1e]" />
          {/* Decorative circles */}
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#2E7D32]/20 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#66BB6A]/10 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#1B5E20]/15 blur-[140px]" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(to right, #4ade80 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        </div>

        {/* Floating leaf icons */}
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-24 left-[8%] text-green-400/20">
          <Leaf className="w-20 h-20" />
        </motion.div>
        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-32 right-[10%] text-emerald-400/20">
          <TreePine className="w-28 h-28" />
        </motion.div>
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-1/3 right-[20%] text-green-300/10">
          <Sprout className="w-16 h-16" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 bg-green-400/10 border border-green-400/30 text-green-300 px-5 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
            <Leaf className="w-4 h-4" />
            Kampung Urban Farming · RW 06 Utan Kayu Selatan
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
          >
            <span className="text-white">Green</span>{" "}
            <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
              Puspa
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Mewujudkan lingkungan hijau, sehat, dan produktif melalui semangat gotong royong dan inovasi pertanian perkotaan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/about" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-green-900/40 hover:shadow-green-500/30 hover:-translate-y-0.5">
              Tentang Kami <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/programs" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5">
              Jelajahi Program
            </Link>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
              <div className="w-1 h-2 bg-white/60 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <SectionFade className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 2017, suffix: "", label: "Tahun Berdiri" },
              { value: 1500, suffix: "+", label: "Lubang Hidroponik" },
              { value: 8, suffix: " RT", label: "Cakupan Area" },
              { value: 100, suffix: "%", label: "Gotong Royong" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center group">
                <div className="inline-flex items-end gap-0.5">
                  <AnimatedCounter value={stat.value} />
                  <span className="font-heading font-bold text-2xl text-primary mb-1">{stat.suffix}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </SectionFade>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="py-28 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Illustration side */}
            <SectionFade>
              <motion.div variants={fadeUp} className="relative">
                {/* Main card */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 p-8 shadow-2xl border border-green-100">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-green-200/40 rounded-full -translate-y-1/4 translate-x-1/4 blur-2xl" />
                  {/* Decorative plant illustration */}
                  <div className="relative z-10 text-center py-8">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-lg mb-6">
                      <TreePine className="w-16 h-16 text-green-600" />
                    </div>
                    <p className="text-green-800 font-semibold text-lg">Sejak 2017</p>
                    <p className="text-green-600 text-sm">Kampung Hijau Produktif</p>
                  </div>
                  {/* Floating badges */}
                  <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-4 py-2.5 shadow-md flex items-center gap-2">
                    <Sprout className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-semibold text-gray-700">1,500+ Lubang Hidroponik</span>
                  </div>
                  <div className="absolute top-6 right-6 bg-green-500 text-white rounded-2xl px-4 py-2.5 shadow-md flex items-center gap-2">
                    <Fish className="w-4 h-4" />
                    <span className="text-sm font-semibold">Akuaponik</span>
                  </div>
                </div>
                {/* Decorative dots */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 grid grid-cols-4 gap-2 opacity-30">
                  {Array.from({length: 16}).map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-green-400" />)}
                </div>
              </motion.div>
            </SectionFade>

            {/* Text side */}
            <SectionFade>
              <motion.div variants={fadeUp} className="space-y-6">
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm bg-primary/10 px-4 py-1.5 rounded-full">
                  <Leaf className="w-4 h-4" /> Tentang Kami
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                  Dari Warga, <br />
                  <span className="text-primary">Untuk Warga</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Berawal di tahun 2017, warga RW 06 Utan Kayu Selatan berinisiatif mengubah lingkungan padat penduduk menjadi kawasan hijau yang produktif. Kini, Green Puspa menjadi contoh sukses bagaimana semangat gotong royong dapat menghadirkan ketahanan pangan.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300 group">
                  Pelajari Lebih Lanjut <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </SectionFade>
          </div>
        </div>
      </section>

      {/* ─── PROGRAM HIGHLIGHTS ─── */}
      <section className="py-28 bg-gradient-to-b from-green-50/50 to-white">
        <div className="container mx-auto px-4">
          <SectionFade className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                <Leaf className="w-4 h-4" /> Program Kami
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">Program Unggulan</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-lg">Inisiatif berfokus pada keberlanjutan dan pemberdayaan masyarakat.</p>
            </motion.div>
          </SectionFade>

          <SectionFade className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf, title: "Hidroponik", desc: "Pemanfaatan ruang sempit untuk budidaya sayuran sehat tanpa tanah.", color: "from-green-400 to-emerald-500", bg: "from-green-50 to-emerald-50" },
              { icon: Fish, title: "Akuaponik", desc: "Sistem terintegrasi budidaya ikan dan tanaman yang saling menguntungkan.", color: "from-teal-400 to-cyan-500", bg: "from-teal-50 to-cyan-50" },
              { icon: BookOpen, title: "Edukasi", desc: "Pusat pembelajaran urban farming bagi masyarakat dan pelajar.", color: "from-amber-400 to-orange-500", bg: "from-amber-50 to-orange-50" },
              { icon: Users, title: "Ketahanan Pangan", desc: "Memenuhi kebutuhan pangan sehat bagi seluruh warga sekitar.", color: "from-violet-400 to-purple-500", bg: "from-violet-50 to-purple-50" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className={`group relative bg-gradient-to-br ${item.bg} rounded-3xl p-7 border border-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </SectionFade>

          <SectionFade className="mt-12 text-center">
            <motion.div variants={fadeUp}>
              <Link href="/programs" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-0.5">
                Lihat Semua Program <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </SectionFade>
        </div>
      </section>

      {/* ─── IMPACT ─── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <SectionFade className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">Dampak Nyata</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-lg">Kontribusi nyata untuk lingkungan dan kesejahteraan warga.</p>
            </motion.div>
          </SectionFade>

          <SectionFade className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TreePine,
                emoji: "🌿",
                title: "Lingkungan Hijau",
                desc: "Gang-gang sempit berubah menjadi koridor hijau menyejukkan, menurunkan suhu mikro, dan memperindah wajah kampung.",
                gradient: "from-green-500 to-emerald-600",
              },
              {
                icon: Sun,
                emoji: "💰",
                title: "Ekonomi Sirkular",
                desc: "Hasil panen dikonsumsi dan dijual, menjadi sumber ekonomi mandiri yang menopang keberlanjutan program.",
                gradient: "from-amber-500 to-orange-600",
              },
              {
                icon: Users,
                emoji: "🤝",
                title: "Kohesi Sosial",
                desc: "Kegiatan rutin gotong royong memperkuat ikatan antarwarga dan membangun rasa kebersamaan yang solid.",
                gradient: "from-violet-500 to-purple-600",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="group relative overflow-hidden rounded-3xl bg-gray-50 hover:bg-white p-8 border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-500">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                <div className={`absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-gradient-to-br ${item.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </SectionFade>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-28 overflow-hidden bg-[#0d1f0e]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2e0b] via-[#145217] to-[#0d2b1e]" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-green-500/10 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[100px]" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <SectionFade>
            <motion.div variants={fadeUp} className="space-y-6 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 text-green-300 font-semibold text-sm bg-green-400/10 border border-green-400/20 px-5 py-2 rounded-full">
                <Leaf className="w-4 h-4" /> Bergabung Bersama Kami
              </span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Mari Mengenal Green Puspa <br />
                <span className="text-green-300">Lebih Dekat</span>
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto">
                Bergabunglah dalam gerakan menghijaukan kota dan menciptakan ketahanan pangan mulai dari pekarangan kita sendiri.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-green-400 hover:bg-green-300 text-green-900 font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-green-900/40">
                  Hubungi Kami <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/gallery" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5">
                  Lihat Galeri
                </Link>
              </div>
            </motion.div>
          </SectionFade>
        </div>
      </section>
    </div>
  );
}
