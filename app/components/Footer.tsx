import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Best Choice Flooring</h3>
            <p className="text-slate-300">
              Professional flooring solutions for residential and commercial projects.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/gallery" className="text-slate-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p>
               📞 <a href="tel:9712191246">971-313-4721</a>
               </p>
            <p>
               ✉️ <a href="mailto:bestchoiceflooring@gmail.com">bestchoiceflooring@gmail.com</a>
           </p>
            <p className="text-white mt-4 text-slate-300">📍 Serving homes and businesses from Longview, WA all the way to Eugene, OR.</p>
          </div>
        </div>
        <div className="border-t border-slate-600 mt-8 pt-8 text-center text-slate-300">
          <p>&copy; 2024 Best Choice Flooring. All rights reserved.</p>
          <p>CCB# 206444</p>
        </div>
      </div>
    </footer>
  );
} 