import { Heart, Phone, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-pink-400" size={32} fill="currentColor" />
              <h3 className="text-2xl font-bold">Love & Care Day Care</h3>
            </div>
            <p className="text-pink-100 mb-4 leading-relaxed">
              Nurturing every child with love and care. Providing a safe, joyful environment where children ages 3-10 can learn, grow, and thrive.
            </p>
            <p className="text-pink-200 italic">
              Founded by Dr. M. Narmatha
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Programs', 'Facilities', 'Admissions', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-pink-100 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-pink-100">
              <li className="flex items-start gap-2">
                <Phone size={18} className="flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:7708425196" className="hover:text-white">7708425196</a>
                  <br />
                  <a href="tel:6379671637" className="hover:text-white">6379671637</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="text-sm">
                  Kattupakkam, Chennai - 600056
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="flex-shrink-0 mt-1" />
                <span className="text-sm">
                  Mon-Sat: 7:00 AM - 7:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-800 mt-8 pt-8 text-center">
          <p className="text-pink-200">
            © {new Date().getFullYear()} Love & Care Day Care. All rights reserved.
          </p>
          <p className="text-pink-300 text-sm mt-2">
            Nurturing the next generation with love, care, and dedication.
          </p>
        </div>
      </div>
    </footer>
  );
}
