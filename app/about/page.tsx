import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Users } from "lucide-react";

export const metadata = {
  title: "Tentang Kami | Green Puspa",
  description: "Sejarah, visi, dan misi komunitas Green Puspa RW 06 Utan Kayu Selatan.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-10" />
          <Image
            src="https://images.unsplash.com/photo-1592424005826-69168da40125?q=80&w=2070&auto=format&fit=crop"
            alt="Tentang Green Puspa"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Tentang Green Puspa</h1>
          <p className="text-lg md:text-xl font-light">Mengenal lebih dekat komunitas petani kota Utan Kayu Selatan.</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">Awal Mula Perjalanan</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
            <p>
              Program Green Puspa mulai berkembang sekitar tahun 2017. Awalnya, kawasan RW 06 sering terdampak banjir karena berada dekat aliran sungai dan memiliki kondisi lingkungan yang padat. Warga kemudian melakukan berbagai upaya untuk memperbaiki kondisi ini.
            </p>
            <p>
              Melalui inisiatif tokoh penggerak kami, Bapak Zulfikar Kusdarmawan (Opie), warga diajak untuk melakukan penghijauan lingkungan, normalisasi saluran air, hingga pemanfaatan lahan sempit untuk budidaya tanaman produktif.
            </p>
            <p>
              Dari kegiatan gotong royong inilah lahirlah kelompok petani kota <strong>Green Puspa</strong>. Seiring berjalannya waktu, Green Puspa berkembang menjadi model kampung urban farming berbasis masyarakat yang mandiri dan berdaya saing.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="visi" className="py-20 bg-surface-green border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Visi</h3>
                <p className="text-muted-foreground">
                  Menjadi komunitas urban farming yang mandiri, produktif, hijau, sehat, dan berkelanjutan.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Misi</h3>
                <ul className="space-y-3 text-muted-foreground list-disc pl-5">
                  <li>Mengembangkan pertanian perkotaan.</li>
                  <li>Meningkatkan ketahanan pangan masyarakat.</li>
                  <li>Mendorong penghijauan lingkungan.</li>
                  <li>Memanfaatkan teknologi tepat guna.</li>
                  <li>Memberdayakan warga melalui kegiatan produktif.</li>
                  <li>Menjadi pusat edukasi urban farming.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <Users className="h-16 w-16 text-primary mx-auto mb-8 opacity-80" />
          <blockquote className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
            &quot;Dari Warga, Untuk Warga, dan Oleh Warga&quot;
          </blockquote>
          <p className="mt-8 text-lg text-muted-foreground">
            Kami percaya bahwa keberhasilan suatu lingkungan bermula dari partisipasi aktif masyarakatnya. Segala bentuk inisiatif yang kami lakukan adalah hasil dari gotong royong dan kesadaran bersama untuk menciptakan kehidupan yang lebih baik.
          </p>
        </div>
      </section>
    </div>
  );
}
