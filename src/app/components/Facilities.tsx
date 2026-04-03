import { Blocks, BookOpen, Bed, Utensils } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Facilities() {
  const facilities = [
    {
      icon: Blocks,
      title: 'Play & Activity Area',
      description: 'A cozy play space where children can enjoy toys, games, and fun activities while interacting and making friends.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_5jdiho5jdiho5jdi-s37oAGJa5wqdyiouHw66mwD8vgGR0G.png',
      color: 'yellow',
    },
    {
      icon: BookOpen,
      title: 'Homework & Quiet Time',
      description: 'A calm corner where children can complete homework, read, or enjoy quiet activities with guidance when needed.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_9ru6sq9ru6sq9ru6-xYpqoU7NcJkrfY82RLjOCbhcGhH9y7.png',
      color: 'pink',
    },
    {
      icon: Bed,
      title: 'Nap & Rest Area',
      description: 'A comfortable space where children can relax and take their afternoon nap after lunch.',
      image: 'https://images.unsplash.com/photo-1692269725836-fbd72e98883f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjaGlsZHJlbiUyMHNsZWVwaW5nJTIwaW5kaWElMjBzY2hvb2wlMjBuYXB8ZW58MXx8fHwxNzczNTk2NDE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'sky',
    },
    {
      icon: Utensils,
      title: 'Meal & Snack Area',
      description: 'A clean and friendly dining space where children enjoy their lunch and snacks together.',
      image: 'https://images.unsplash.com/photo-1771091052812-aaf64b9bfdee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzY2hvb2wlMjBjaGlsZHJlbiUyMGVhdGluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3MzU5NjQzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'purple',
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-sky-500">Facilities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern, child-friendly facilities designed with safety, comfort, and learning in mind.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className={`absolute top-4 left-4 bg-${facility.color}-400 p-4 rounded-2xl shadow-lg`}>
                    <Icon className="text-white" size={32} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="mt-16 bg-gradient-to-r from-yellow-100 via-pink-100 to-sky-100 p-8 sm:p-12 rounded-3xl">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Additional Safety & Comfort Features
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'CCTV Monitoring',
              'Child-Safe Home Environment',
              'First Aid Availability',
              'Clean & Hygienic Space',
              'Comfortable Indoor Space',
              'Safe Pick-Up & Drop-Off',
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3"
              >
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
