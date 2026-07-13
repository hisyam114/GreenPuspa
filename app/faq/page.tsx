import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const metadata = {
  title: "FAQ | Green Puspa",
  description: "Pertanyaan yang sering diajukan seputar Green Puspa.",
};

const faqs = [
  {
    question: "Apa itu Green Puspa?",
    answer: "Green Puspa adalah komunitas urban farming yang berada di RW 06 Utan Kayu Selatan. Kami mengelola lahan sempit di gang-gang perkampungan menjadi area produktif melalui metode hidroponik, akuaponik, dan penghijauan vertikal."
  },
  {
    question: "Apakah Green Puspa terbuka untuk kunjungan umum?",
    answer: "Ya, kami sangat terbuka untuk kunjungan edukasi, studi banding, maupun penelitian. Namun, karena ini merupakan area permukiman warga, kami mohon agar pengunjung menghubungi kami terlebih dahulu untuk mengatur jadwal."
  },
  {
    question: "Bagaimana sistem pengelolaan hidroponik di Green Puspa?",
    answer: "Sistem hidroponik dikelola secara gotong royong oleh warga setempat (swadaya). Jadwal penyemaian, pemindahan bibit, hingga panen dikoordinasikan secara bersama-sama oleh para kader lingkungan RW 06."
  },
  {
    question: "Di mana hasil panen sayuran didistribusikan?",
    answer: "Hasil panen diprioritaskan untuk pemenuhan gizi warga RW 06. Sebagian lainnya dipasarkan ke lingkungan sekitar untuk memutar kas operasional pembelian nutrisi dan bibit selanjutnya."
  },
  {
    question: "Apakah saya bisa belajar bertani hidroponik di sini?",
    answer: "Tentu bisa! Kami secara rutin mengadakan lokakarya dan pelatihan bagi siapa saja yang tertarik. Anda bisa memantau halaman Berita atau menghubungi kami langsung untuk menanyakan jadwal pelatihan terdekat."
  }
];

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-white py-20 px-4 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Tanya Jawab (FAQ)</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Temukan jawaban atas pertanyaan yang paling sering diajukan mengenai Green Puspa.
        </p>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex justify-center mb-12">
            <div className="bg-primary/10 p-4 rounded-full">
              <HelpCircle className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border px-6 rounded-xl shadow-sm">
                <AccordionTrigger className="text-left font-heading text-lg font-semibold hover:no-underline hover:text-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
