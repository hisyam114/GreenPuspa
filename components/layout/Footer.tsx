import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Green Puspa</h3>
            <p className="text-sm opacity-90 mb-4">
              Kampung Urban Farming RW 06 Utan Kayu Selatan. Mewujudkan lingkungan hijau, sehat, dan produktif melalui semangat gotong royong.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Tentang</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/about">Sejarah</Link></li>
              <li><Link href="/about#visi">Visi & Misi</Link></li>
              <li><Link href="/timeline">Linimasa</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Program</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/programs">Hidroponik</Link></li>
              <li><Link href="/programs">Akuaponik</Link></li>
              <li><Link href="/smart-farming">Smart Urban Farming</Link></li>
              <li><Link href="/gallery">Galeri Kegiatan</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>RW 06 Utan Kayu Selatan</li>
              <li>Matraman, Jakarta Timur</li>
              <li>DKI Jakarta, 13120</li>
              <li className="mt-4 flex gap-4 text-xs font-semibold">
                <Link href="#" aria-label="Facebook">FB</Link>
                <Link href="#" aria-label="Instagram">IG</Link>
                <Link href="#" aria-label="Twitter">X</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Green Puspa. Hak Cipta Dilindungi.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy">Kebijakan Privasi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
