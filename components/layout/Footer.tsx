import Link from "next/link";
import { Leaf, MapPin, Mail, TreePine } from "lucide-react";

const footerLinks = {
  pages: [
    { href: "/about", label: "Tentang Kami" },
    { href: "/gallery", label: "Galeri" },
    { href: "/news", label: "Berita" },
    { href: "/contact", label: "Kontak" },
  ],
  info: [
    { href: "/smart-farming", label: "Smart Farming" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-xl font-bold text-white">
                Green <span className="text-green-400">Puspa</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Kampung Urban Farming RW 06 Utan Kayu Selatan. Mewujudkan lingkungan hijau dan produktif melalui gotong royong.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {["FB", "IG", "X"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-green-500/20 border border-white/10 hover:border-green-500/30 flex items-center justify-center text-xs font-bold text-gray-400 hover:text-green-400 transition-all duration-200">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Halaman</h4>
            <ul className="space-y-2.5">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Informasi</h4>
            <ul className="space-y-2.5">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Lokasi</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">RW 06 Utan Kayu Selatan<br />Matraman, Jakarta Timur<br />DKI Jakarta 13120</span>
              </li>
              <li className="flex items-center gap-2.5">
                <TreePine className="w-4 h-4 text-green-400 shrink-0" />
                <span className="text-sm text-gray-400">Sejak 2017</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Green Puspa. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1.5">
            Dibuat dengan <span className="text-green-400">♥</span> oleh Komunitas RW 06
          </p>
        </div>
      </div>
    </footer>
  );
}
