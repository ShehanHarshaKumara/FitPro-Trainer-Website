import { Link } from "react-router";
import { Dumbbell, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl">
                FitPro<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-white/60">
              Transform your body, transform your life. Professional training for real results.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/60 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/programs" className="text-white/60 hover:text-primary transition-colors">Programs</Link></li>
              <li><Link to="/pricing" className="text-white/60 hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/gallery" className="text-white/60 hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/testimonials" className="text-white/60 hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@fitpro.com</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Fitness St, Gym City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40">
          <p>&copy; 2026 FitPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
