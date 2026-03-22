import { FileText, UserPlus, CheckCircle, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export function Admissions() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const steps = [
    {
      icon: FileText,
      title: 'Submit Inquiry',
      description: 'Fill out our contact form or call us to express your interest.',
      color: 'pink',
    },
    {
      icon: UserPlus,
      title: 'Schedule Visit',
      description: 'Tour our facilities and meet our caring staff in person.',
      color: 'purple',
    },
    {
      icon: CheckCircle,
      title: 'Complete Enrollment',
      description: 'Fill out registration forms and submit required documents.',
      color: 'sky',
    },
  ];

  const faqs = [
    {
      question: 'What are the enrollment fees?',
      answer: 'Our enrollment fees vary based on the program selected (full-day or evening care) and meal options. Please contact us at 7708425166 or 6379671637 for current pricing and any available promotions.',
    },
    {
      question: 'What documents are required for admission?',
      answer: 'You will need to provide: birth certificate or age proof, immunization records, emergency contact information, and any medical information relevant to your child\'s care.',
    },
    {
      question: 'Do you offer trial days?',
      answer: 'Yes! We encourage families to schedule a visit and trial day so your child can experience our environment and you can see our programs in action.',
    },
    {
      question: 'What is your staff-to-child ratio?',
      answer: 'We maintain low staff-to-child ratios to ensure personalized attention. Our ratios meet and exceed state requirements, with more caregivers during peak activity times.',
    },
    {
      question: 'Can I choose between meal plans?',
      answer: 'Absolutely! We offer flexible options - you can choose our comprehensive meal plan (breakfast, lunch, and snacks) or bring your own food. We have refrigeration and microwave facilities available.',
    },
    {
      question: 'What are your holiday closures?',
      answer: 'We follow major national holidays and will notify parents in advance of any closure dates. We operate year-round to support working families.',
    },
  ];

  return (
    <section id="admissions" className="py-20 bg-white">
      
    </section>
  );
}
