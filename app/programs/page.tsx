import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Droplets, BookOpen, Heart } from "lucide-react";

export const metadata = {
  title: "Program Kami | Green Puspa",
  description: "Program unggulan Green Puspa: Hidroponik, Akuaponik, Edukasi Lingkungan, dan Penghijauan Lingkungan.",
};

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-primary text-white py-20 px-4 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Program Unggulan</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Berbagai inisiatif yang kami kembangkan untuk mewujudkan lingkungan yang produktif, mandiri, dan berkelanjutan.
        </p>
      </section>

      {/* Hydroponics Section */}
      <section id="hidroponik" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                <Leaf className="text-primary h-8 w-8" /> Hidroponik
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Program hidroponik merupakan inisiatif utama Green Puspa yang mengoptimalkan pemanfaatan ruang sempit di gang-gang perkampungan. Lebih dari 1500 lubang tanam hidroponik telah terpasang dan dikelola secara kolektif oleh warga.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <span className="font-bold text-2xl text-primary">Sayuran Segar</span>
                    <span className="text-sm text-muted-foreground">Selada, Pakcoy, Kangkung</span>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <span className="font-bold text-2xl text-primary">Skala Komunitas</span>
                    <span className="text-sm text-muted-foreground">Rak vertikal di sepanjang gang</span>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="md:w-1/2 w-full h-[400px] relative rounded-2xl overflow-hidden shadow-xl">
              <Image src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=2000&auto=format&fit=crop" alt="Hidroponik Green Puspa" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Aquaponics Section */}
      <section id="akuaponik" className="py-24 bg-surface-green border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                <Droplets className="text-secondary h-8 w-8" /> Akuaponik
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Sistem akuaponik kami menggabungkan budidaya ikan dengan penanaman sayuran. Air dari kolam ikan yang kaya nutrisi dialirkan ke media tanam sayuran, dan sayuran menyaring air tersebut kembali ke kolam dalam sebuah ekosistem tertutup.
              </p>
              <ul className="space-y-3 text-muted-foreground list-disc pl-5">
                <li>Efisiensi penggunaan air yang sangat tinggi</li>
                <li>Sumber protein (ikan) dan vitamin (sayur) terpadu</li>
                <li>Tidak membutuhkan pupuk kimia sintetis</li>
              </ul>
            </div>
            <div className="md:w-1/2 w-full h-[400px] relative rounded-2xl overflow-hidden shadow-xl">
              <Image src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=2000&auto=format&fit=crop" alt="Akuaponik Ekosistem" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Greening */}
      <section id="penghijauan" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                <Heart className="text-primary h-8 w-8" /> Penghijauan Lingkungan
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Berkat program penghijauan dan <em>vertical garden</em>, kualitas udara serta keindahan lingkungan RW 06 meningkat drastis. Kegiatan penataan lingkungan menjadi rutinitas warga yang memperkuat kohesi sosial.
              </p>
              <div className="bg-primary/10 p-6 rounded-xl text-primary font-medium">
                "Mengubah gang sempit menjadi koridor hijau yang asri dan menyejukkan."
              </div>
            </div>
            <div className="md:w-1/2 w-full h-[400px] relative rounded-2xl overflow-hidden shadow-xl">
              <Image src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop" alt="Penghijauan Gang" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Community Education */}
      <section id="edukasi" className="py-24 bg-surface-green border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 flex items-center justify-center gap-3">
            <BookOpen className="text-secondary h-8 w-8" /> Edukasi Lingkungan
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Sebagai pionir urban farming, Green Puspa secara rutin mengadakan pelatihan, studi banding, dan menerima kunjungan edukasi. Kami membagikan pengalaman seputar instalasi hidroponik, akuaponik, hingga pengelolaan komunitas untuk menyebarkan semangat pertanian perkotaan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=800&auto=format&fit=crop" alt="Pelatihan Warga" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=800&auto=format&fit=crop" alt="Kunjungan Komunitas" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" alt="Belajar Hidroponik" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
