import { Heart, Shield, Users, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Love & Care',
      description: 'Every child receives individual attention and affection',
      color: 'pink',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Secure environment with trained staff and safety protocols',
      color: 'sky',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced caregivers dedicated to child development',
      color: 'purple',
    },
    {
      icon: Award,
      title: 'Quality Care',
      description: 'Commitment to excellence in early childhood education',
      color: 'yellow',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-pink-500">Love & Care</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Providing exceptional childcare service with a mission to create a safe, nurturing environment where every child can flourish.</p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback
              src="/caregiver-with-children.jpg"
              alt="Smiling caregiver with children"
              className="w-full h-[400px] object-cover rounded-3xl shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Meet Dr. M. Narmatha
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded by Dr. M. Narmatha, Love and Care Day Care is built on the foundation of providing exceptional, loving care to every child. With years of experience in early childhood development and a deep passion for nurturing young minds, Dr. Narmatha has created a space where children feel safe, loved, and encouraged to explore their potential.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our mission is simple yet profound: to provide a safe, nurturing environment where children can grow emotionally, socially, and intellectually. We believe that every child deserves personalized attention and care that helps them build confidence and develop essential life skills.
            </p>
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-2xl">
              <p className="text-lg font-semibold text-gray-800 italic">
                "Our goal is to become an extension of your family, providing the love, care, and support your child needs to thrive."
              </p>
              <p className="text-gray-600 mt-2">- Dr. M. Narmatha, Founder</p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        
      </div>
    </section>
  );
}
