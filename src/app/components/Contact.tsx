import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Get in <span className="text-purple-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Reach out to schedule a visit or ask any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-3xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-pink-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600 leading-relaxed">No.5, Gowrison Garden,<br />Goparasanallur Main Road, MAC Nagar,<br />Kattupakkam, Chennai - 600056</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Phone className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                    <a href="tel:7708425196" className="text-gray-600 hover:text-purple-600 block">
                      7708425196
                    </a>
                    <a href="tel:6379671637" className="text-gray-600 hover:text-purple-600 block">
                      6379671637
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                    <Clock className="text-sky-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Operating Hours</h4>
                    <p className="text-gray-600">Monday - Friday</p>
                    <p className="text-gray-600 font-semibold">7:00 AM - 7:00 PM</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">WhatsApp</h4>
                    <a href="https://wa.me/917708425196" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 block">
                      +91 7708 425 196
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="space-y-4">
              <a
                href="https://wa.me/917708425196"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold text-center hover:shadow-xl transition-all transform hover:scale-105"
              >
                Chat on WhatsApp
              </a>
              <a
                href="tel:7708425196"
                className="block w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold text-center hover:shadow-xl transition-all transform hover:scale-105"
              >
                Call Now to Enroll
              </a>
              <Link
                to="/schedule-visit"
                className="block w-full bg-white text-purple-600 border-2 border-purple-500 px-8 py-4 rounded-full text-lg font-semibold text-center hover:bg-purple-50 transition-all"
              >
                Schedule a Visit
              </Link>
            </div>
          </div>

          {/* Google Map */}
          <div>
            <div className="bg-white p-4 rounded-3xl shadow-lg h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=No.5+Gowrison+Garden+Goparasanallur+Main+Road+MAC+Nagar+Kattupakkam+Chennai+600056&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1.5rem', minHeight: '480px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Love and Care Day Care Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white p-8 rounded-3xl shadow-lg text-center">
          <p className="text-gray-700 text-lg">
            <span className="font-bold text-purple-600">Visit us today!</span> We welcome families to tour our facility and meet our wonderful team. 
            Walk-ins are welcome during operating hours, or call ahead to ensure we can give you our full attention.
          </p>
        </div>
      </div>
    </section>
  );
}
