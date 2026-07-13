import { Calendar, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Linimasa | Green Puspa",
  description: "Perjalanan sejarah dan perkembangan komunitas Green Puspa dari tahun ke tahun.",
};

const timelineEvents = [
  {
    year: "2017",
    title: "Program Dimulai",
    description: "Inisiatif urban farming berbasis komunitas pertama kali dicanangkan untuk merespon permasalahan banjir dan lingkungan padat di RW 06.",
  },
  {
    year: "2018",
    title: "Perluasan Penghijauan",
    description: "Gerakan penghijauan gang mulai masif dilakukan. Warga bergotong royong menata pot tanaman dan membersihkan saluran air.",
  },
  {
    year: "2019",
    title: "Pengembangan Hidroponik",
    description: "Instalasi hidroponik mulai diperkenalkan dan dipasang di sepanjang gang, menjadikannya ikon baru RW 06 Utan Kayu Selatan.",
  },
  {
    year: "2020",
    title: "Ketahanan Pangan Warga",
    description: "Di masa pandemi, hasil panen dari hidroponik dan akuaponik memberikan manfaat langsung bagi ketahanan pangan warga setempat.",
  },
  {
    year: "2021",
    title: "Ekspansi Program",
    description: "Jumlah lubang tanam hidroponik terus bertambah seiring tingginya antusiasme warga untuk ikut mengelola.",
  },
  {
    year: "2022",
    title: "Penerapan Smart Farming",
    description: "Pengenalan teknologi pertanian pintar (smart farming) sederhana untuk membantu monitoring nutrisi dan kualitas air pada instalasi komunitas.",
  },
  {
    year: "2023",
    title: "Pusat Studi Banding",
    description: "Green Puspa menerima banyak kunjungan dari komunitas lain, institusi pemerintah, dan mahasiswa sebagai percontohan sukses urban farming.",
  },
  {
    year: "2024+",
    title: "Inovasi Berkelanjutan",
    description: "Terus mengembangkan inovasi keberlanjutan, ekonomi sirkular, dan memperkuat edukasi lingkungan bagi generasi muda.",
  },
];

export default function TimelinePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-white py-20 px-4 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Linimasa Perjalanan</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Merekam jejak langkah komunitas Green Puspa dalam menghijaukan lingkungan sejak 2017.
        </p>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative border-l-4 border-primary/20 ml-6 md:ml-0 md:pl-0">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className="mb-12 relative flex items-center md:justify-between w-full">
                {/* Timeline dot */}
                <div className="absolute left-[-32px] md:left-1/2 md:-translate-x-1/2 bg-primary rounded-full w-12 h-12 flex items-center justify-center border-4 border-background shadow-sm">
                  <Calendar className="h-5 w-5 text-white" />
                </div>

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:text-right md:pr-12" : "md:ml-auto md:pl-12"}`}>
                  <div className="bg-card border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="font-bold text-primary text-xl mb-2 block">{event.year}</span>
                    <h3 className="font-heading text-2xl font-bold mb-3">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
