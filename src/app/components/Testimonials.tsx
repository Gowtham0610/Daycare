import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Senthilnathan',
      role: 'Father of 2',
      rating: 5,
      text: "Love and Care Day Care has been a blessing for our family! My children are so happy here, and I can see how much they've grown both academically and socially. Dr. Narmatha truly care about every child.",
      color: 'pink',
    },
    {
      name: 'Suganya',
      role: 'Mother of 2',
      rating: 5,
      text: "Finding a trustworthy daycare was my biggest worry as a working mom. Love and Care exceeded all my expectations. The communication is great, and I always feel my kids are in safe hands.",
      color: 'purple',
    },
    {
      name: 'Balaji Manoharan',
      role: 'Father of 1',
      rating: 5,
      text: "Dr. M. Narmatha has sufficient experience of working with kids and can impart excellent care to them. Good day care taken by the owner.",
      color: 'pink',
    },
    {
      name: 'Ram Kumar',
      role: 'Father of 1',
      rating: 5,
      text: "My child was very shy earlier and rarely spoke, even at home with me or my wife. After joining this daycare, we have seen a remarkable improvement. He is now more confident and communicates much more freely. Special thanks to Dr. M. Narmatha for her dedication and for helping my child overcome his shyness.",
      color: 'purple',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            What <span className="text-purple-500">Parents Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the families who trust us with their most precious ones.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 relative"
            >
              <Quote className={`text-${testimonial.color}-300 absolute top-6 right-6 opacity-50`} size={48} />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400"
                    size={20}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className={`border-l-4 border-${testimonial.color}-400 pl-4`}>
                <p className="font-bold text-gray-800 text-lg">
                  {testimonial.name}
                </p>
                <p className="text-gray-600">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl inline-block">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Join Our Happy Family!
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Experience the Love and Care difference. Schedule a visit today and see why parents trust us with their children.
            </p>
            <Link
              to="/schedule-visit"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 inline-block"
            >
              Schedule a Visit Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
