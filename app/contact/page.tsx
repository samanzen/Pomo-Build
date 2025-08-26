"use client";

import { useState } from 'react';

const services = [
  "Major Renovations", "Kitchen & Bath Remodeling", "Basement Finishing",
  "Decks & Exteriors", "Commercial Improvements", "Handyman Services",
];

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', services: [] as string[], otherService: '', message: '',
  });

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const currentServices = prev.services;
      if (checked) {
        return { ...prev, services: [...currentServices, value] };
      } else {
        return { ...prev, services: currentServices.filter(service => service !== value) };
      }
    });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-[#1F2937] py-16 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl" data-aos="fade-up">Get In Touch</h1>
        <p className="mt-4 text-lg text-gray-300" data-aos="fade-up" data-aos-delay="100">
          Ready to start your next project? We're here to help.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16 items-start">
          <div className="border border-gray-200 rounded-lg p-8 flex flex-col" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center text-[#1F2937]">Project Inquiry Form</h2>
            <div className="mt-8"><div className="flex justify-between mb-1"><span className="text-base font-medium text-[#1F2937]">Step {currentStep} of 3</span><span className="text-sm font-medium text-[#1F2937]">{Math.round((currentStep / 3) * 100)}%</span></div><div className="w-full bg-gray-200 rounded-full h-2.5"><div className="bg-[#D97706] h-2.5 rounded-full transition-all duration-500" style={{ width: `${(currentStep / 3) * 100}%` }}></div></div></div>
            <form action="https://formspree.io/f/xgvzlydr" method="POST" className="mt-8 space-y-6 flex-grow flex flex-col">
              <div className="flex-grow">
                {currentStep === 1 && (
                  <div data-aos="fade-in" className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">Your Contact Information</h3>
                    <div><label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label><input type="text" id="name" name="name" value={formData.name} onChange={handleInput} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" /></div>
                    <div><label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label><input type="email" id="email" name="email" value={formData.email} onChange={handleInput} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" /></div>
                    <div><label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label><input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInput} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" /></div>
                  </div>
                )}
                {currentStep === 2 && (
                  <div data-aos="fade-in" className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">What services are you interested in?</h3>
                    <div className="space-y-4">
                      {services.map(service => (
                        <label key={service} className="flex items-center space-x-3"><input type="checkbox" name="services" value={service} onChange={handleServiceChange} className="h-4 w-4 rounded border-gray-300 text-[#D97706] focus:ring-[#D97706]" /><span>{service}</span></label>
                      ))}
                      <label className="flex items-center space-x-3"><input type="checkbox" name="services" value="Other" onChange={handleServiceChange} className="h-4 w-4 rounded border-gray-300 text-[#D97706] focus:ring-[#D97706]" /><span>Other</span></label>
                    </div>
                    {formData.services.includes('Other') && (
                      <div className="mt-4"><label htmlFor="otherService" className="block text-sm font-medium text-gray-700">If other, please specify</label><input type="text" id="otherService" name="otherService" value={formData.otherService} onChange={handleInput} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" /></div>
                    )}
                  </div>
                )}
                {currentStep === 3 && (
                  <div data-aos="fade-in">
                    <h3 className="text-xl font-semibold text-gray-800">Tell us about your project</h3>
                    <div><label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label><textarea id="message" name="message" value={formData.message} onChange={handleInput} required rows={8} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea></div>
                  </div>
                )}
              </div>
              <div className="mt-auto pt-6">
                {currentStep === 1 && <div className="flex justify-end"><button type="button" onClick={nextStep} className="rounded-md bg-[#1F2937] py-2 px-6 text-base font-bold text-white hover:bg-gray-700">Next →</button></div>}
                {currentStep === 2 && <div className="flex justify-between"><button type="button" onClick={prevStep} className="rounded-md bg-gray-300 py-2 px-6 text-base font-bold text-gray-800 hover:bg-gray-400">← Back</button><button type="button" onClick={nextStep} className="rounded-md bg-[#1F2937] py-2 px-6 text-base font-bold text-white hover:bg-gray-700">Next →</button></div>}
                {currentStep === 3 && 
                  <div className="flex justify-between">
                    <button type="button" onClick={prevStep} className="rounded-md bg-gray-300 py-2 px-6 text-base font-bold text-gray-800 hover:bg-gray-400">← Back</button>
                    {/* THIS IS THE CORRECTED BUTTON */}
                    <button type="submit" className="bg-[#D97706] text-white font-bold text-lg py-3 px-8 rounded-md transition-all duration-300 hover:bg-amber-600 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-amber-500/50">
                      Submit Inquiry
                    </button>
                  </div>
                }
              </div>
              <input type="hidden" name="selected_services" value={formData.services.join(', ')} />
              {formData.services.includes('Other') && <input type="hidden" name="other_service_details" value={formData.otherService} />}
            </form>
          </div>
          <div className="border border-gray-200 rounded-lg p-8" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-3xl font-bold text-[#1F2937]">Contact Details</h2>
            <div className="mt-8 space-y-4 text-gray-600"><p><strong>Address:</strong> 1924 Clarke St, Port Moody, BC V3H 1X9</p><p><strong>Phone:</strong> (604) 500-2003</p><p><strong>Email:</strong> contact@pomobuild.com</p><p><strong>Hours:</strong> Mon – Sat: 8am – 6pm</p></div>
            <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg shadow-lg"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d333432.4638791345!2d-122.86884595000001!3d49.23960545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43f55dce88b1a187%3A0xaaa51629ca4acee6!2sPomo%20Build!5e0!3m2!1sen!2sca!4v1754508326972!5m2!1sen!2sca" className="w-full h-full" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
          </div>
        </div>
      </div>
    </div>
  );
}