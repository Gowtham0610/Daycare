import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Calendar, User, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { addVisitSchedule } from '../../lib/supabaseClient';

export function ScheduleVisit() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Supabase
      await addVisitSchedule({
        parent_name: formData.parentName,
        parent_phone: formData.phone,
        child_name: formData.childName,
        child_age: parseInt(formData.childAge),
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        message: formData.message,
      });

      // Show success message and redirect
      alert('Thank you! Your visit has been scheduled. We will contact you shortly to confirm.');
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while scheduling your visit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-sky-50">
      {/* Header */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Schedule a <span className="text-purple-500">Visit</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to show you around! Fill out the form below to schedule your visit to Love and Care Day Care.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Parent Name */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                <User size={20} className="text-purple-500" />
                Parent/Guardian Name *
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            {/* Child Name and Age */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <User size={20} className="text-pink-500" />
                  Child's Name *
                </label>
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Enter child's name"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <Calendar size={20} className="text-sky-500" />
                  Child's Age *
                </label>
                <select
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                >
                  <option value="">Select age</option>
                  {[3, 4, 5, 6, 7, 8, 9, 10].map(age => (
                    <option key={age} value={age}>{age} years old</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <Mail size={20} className="text-purple-500" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <Phone size={20} className="text-pink-500" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="10-digit phone number"
                />
              </div>
            </div>

            {/* Preferred Date and Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <Calendar size={20} className="text-sky-500" />
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  min={today}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <Clock size={20} className="text-yellow-500" />
                  Preferred Time *
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                >
                  <option value="">Select time</option>
                  <option value="7:00 AM - 9:00 AM">7:00 AM - 9:00 AM</option>
                  <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
                  <option value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</option>
                  <option value="1:00 PM - 3:00 PM">1:00 PM - 3:00 PM</option>
                  <option value="3:00 PM - 5:00 PM">3:00 PM - 5:00 PM</option>
                  <option value="5:00 PM - 7:00 PM">5:00 PM - 7:00 PM</option>
                </select>
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                <MessageSquare size={20} className="text-purple-500" />
                Additional Message (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors resize-none"
                placeholder="Any specific questions or requirements?"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Scheduling...' : 'Schedule Visit'}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center text-gray-600">
          <p>
            Questions? Call us at{' '}
            <a href="tel:7708425166" className="text-purple-600 font-semibold hover:underline">
              7708425166
            </a>
            {' '}or{' '}
            <a href="tel:6379671637" className="text-purple-600 font-semibold hover:underline">
              6379671637
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
