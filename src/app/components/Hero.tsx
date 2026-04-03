import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-yellow-100 via-pink-100 to-sky-100 pt-20 pb-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-40 w-16 h-16 bg-sky-300 rounded-full opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left z-10">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Welcome to
              <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent mt-2">
                Love & Care
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 italic">
              "Nurturing every child with love and care."
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">A safe, joyful place where children grow, learn, and thrive. We provide exceptional care for ages 3-10 with experienced caregiver who treat every child like family.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 text-center"
              >
                Contact Us
              </a>
              <Link
                to="/schedule-visit"
                className="bg-white text-purple-600 border-2 border-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-all transform hover:scale-105"
              >
                Schedule a Visit
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <ImageWithFallback
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_mxnfn7mxnfn7mxnf-pkDFKqgCEqJzsMTe2xockbbXLTvDdf.png"
                alt="Happy children playing at daycare"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-lg">
              <p className="text-3xl font-bold text-pink-500">7AM - 7PM</p>
              <p className="text-sm text-gray-600">Operating Hours</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-yellow-300 px-6 py-4 rounded-2xl shadow-lg transform rotate-6">
              <p className="text-2xl font-bold text-gray-800">Ages 3-10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
