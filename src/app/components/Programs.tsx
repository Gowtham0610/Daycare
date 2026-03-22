import { Clock, Utensils, BookOpen, Play, Sun, Moon } from 'lucide-react';

export function Programs() {
  const programs = [
    {
      title: 'Full-Day Care',
      icon: Sun,
      time: '7:00 AM - 7:00 PM',
      ages: 'Ages 3-10',
      description: 'Comprehensive care throughout the day with structured activities, learning time, and play.',
      features: [
        'Free play and social time with other children',
        'Indoor toys and simple activities',
        'Lunch and afternoon nap time',
        'Evening playtime and homework help',
      ],
      color: 'yellow',
    },
    {
      title: 'Evening Care',
      icon: Moon,
      time: 'After 3:00 PM - 7:00 PM',
      ages: 'Ages 3-10',
      description: 'Perfect for working parents who need care after school hours with homework help and activities.',
      features: [
        'Homework assistance',
        'Recreational activities',
        'Snack time',
        'Safe play environment',
      ],
      color: 'purple',
    },
  ];

  const mealOptions = [
    {
      icon: Utensils,
      title: 'With Food Plan',
      description: 'Includes breakfast, lunch, and healthy snacks',
      items: ['Nutritious breakfast', 'Hot lunch', 'Morning & afternoon snacks'],
      color: 'pink',
    },
    {
      icon: BookOpen,
      title: 'Without Food Plan',
      description: 'Bring your own meals and snacks',
      items: ['Flexible meal options', 'Refrigeration available', 'Microwave access'],
      color: 'sky',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-purple-500">Programs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible care options designed to meet the needs of your family and your child's development.
          </p>
        </div>

        {/* Programs */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2`}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-${program.color}-200 rounded-full mb-6`}>
                  <Icon className={`text-${program.color}-600`} size={40} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {program.title}
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={20} />
                    <span>{program.time}</span>
                  </div>
                  <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {program.ages}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  {program.description}
                </p>
                <ul className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Play className="text-purple-500 flex-shrink-0 mt-1" size={20} fill="currentColor" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Meal Options */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Meal Options
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {mealOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-${option.color}-100 to-${option.color}-50 p-8 rounded-3xl border-2 border-${option.color}-200`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-${option.color}-300 rounded-full`}>
                      <Icon className={`text-${option.color}-700`} size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800">
                      {option.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">
                    {option.description}
                  </p>
                  <ul className="space-y-2">
                    {option.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 bg-${option.color}-500 rounded-full`}></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
