'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowRight,
  Globe,
  Users,
  Award,
  BookOpen,
  Plane,
  FileCheck,
  Quote,
  Compass,
  GraduationCap
} from 'lucide-react';
import ContactFormNative from '@/components/ContactFormNative';

const HomePage: React.FC = () => {
  const searchParams = useSearchParams();
  const showThankYou = searchParams?.get('submitted') === '1';
  const heroDestinations = [
    { name: 'Australia', id: 'aus' },
    { name: 'UK', id: 'uk' },
    { name: 'Canada', id: 'can' },
    { name: 'USA', id: 'usa' },
    { name: 'Europe', id: 'eur' },
    { name: 'New Zealand', id: 'nz' },
    { name: 'Japan', id: 'japan' },
    { name: 'South Korea', id: 'korea' }
  ];

  const destinations = [
    { name: 'Australia', id: 'aus', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=800' },
    { name: 'UK', id: 'uk', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800' },
    { name: 'Canada', id: 'can', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=800' },
    { name: 'USA', id: 'usa', image: '/assets/newyork.jpg' },
  ];

  return (
    <main className="min-h-screen font-sans text-gray-800 bg-gradient-to-b from-white via-blue-50 to-blue-200">
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-6 lg:pt-32 lg:pb-8 overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] -translate-y-1/2"></div>
          <div className="absolute right-1/4 bottom-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[100px] translate-y-1/4"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 max-w-4xl mx-auto">

            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001F3F] leading-tight tracking-tight mb-3">
                Best Education Consultancy in Nepal for Study Abroad 2026
              </h1>
              <p className="text-base md:text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                We&apos;ve assisted over 1,500+ students in their study abroad journey. Free consultation in Kathmandu, Dang & Itahari.
              </p>
            </div>

            <div className="w-full pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 lg:mx-0 lg:px-0">
              <div
                className="flex gap-3 flex-wrap justify-center min-h-[52px]"
              >
                {heroDestinations.map((dest) => {
                  const getLink = (name: string, id: string) => {
                    if (name === 'Japan') return '/study-abroad/jp/';
                    if (name === 'South Korea') return '/study-abroad/kr/';
                    if (id.startsWith('eur/')) return `/study-abroad/${id}/`;
                    return `/study-abroad/${id}/`;
                  };

                  return (
                    <Link
                      key={dest.id}
                      href={getLink(dest.name, dest.id)}
                      className="group flex items-center gap-2 shrink-0 bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#001F3F] hover:text-white hover:border-[#001F3F] transition-all shadow-sm hover:shadow-md"
                    >
                      {dest.name}
                      <div className="w-5 h-5 rounded-full bg-[#001F3F] flex items-center justify-center group-hover:bg-white transition-colors">
                        <ArrowRight size={12} className="text-white group-hover:text-[#001F3F] transition-all" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Hero Image - Visible on ALL devices */}
            <div className="relative w-full max-w-5xl pt-4">
              <div className="relative mx-auto">
                <Image
                  src="/assets/student.png"
                  alt="Nepali students studying abroad with best education consultancy in Nepal"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain max-h-[50vh] md:max-h-[45vh]"
                  priority
                />

                {/* Floating Badge - Left (Hidden on mobile, visible on md+) */}
                <div className="hidden md:block absolute left-0 top-1/3 z-20 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-[180px]">
                  <p className="text-2xl font-black text-[#001F3F]">2+</p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Years of Experience</p>
                  <p className="text-xs text-gray-400 mt-1">Operating in <span className="text-[#001F3F] font-bold">Nepal</span></p>
                </div>

                {/* Floating Badge - Right (Hidden on mobile, visible on md+) */}
                <div className="hidden md:block absolute right-0 top-1/4 z-20 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-[200px] text-right">
                  <p className="text-xl font-black text-[#001F3F]">100+</p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Institution Partners</p>
                  <p className="text-xs text-gray-400 mt-1"><span className="text-[#001F3F] font-bold">100+</span> Courses</p>
                </div>

                {/* Floating Badge - Bottom Center (Responsive) */}
                <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-30">
                  <div className="bg-white/95 backdrop-blur-sm px-3 py-2 md:px-5 md:py-3 rounded-full shadow-lg border border-gray-100 flex items-center gap-2">
                    <Users size={14} className="text-[#001F3F] md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm font-bold text-[#001F3F]">Free Consultation!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY STUDENTS TRUST US */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Why Students Trust Us</h2>
            <p className="text-gray-600 text-lg">We believe in building relationships, not just processing files. Here is what sets us apart.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Student-First Approach</h3>
              <p className="text-gray-600 leading-relaxed">Your goals and budget come first. We only recommend universities that truly match your profile.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-6">
                <FileCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Complete Transparency</h3>
              <p className="text-gray-600 leading-relaxed">No hidden costs or false promises. We keep you informed at every single step of the process.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Proven Expertise</h3>
              <p className="text-gray-600 leading-relaxed">With 2+ years of experience and certified counsellors, we know exactly how to navigate complex visa rules for Australia, UK, USA, Canada & Europe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STUDY DESTINATIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Study Destinations</h2>
              <p className="text-gray-600">Explore opportunities in top educational hubs around the world.</p>
            </div>
            <Link href="/study-abroad/" className="text-blue-700 font-bold hover:underline flex items-center gap-2 mt-4 md:mt-0">
              View All Countries <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <Link key={dest.id} href={`/study-abroad/${dest.id}/`} className="group relative block aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                <div className="absolute inset-0">
                  <Image src={dest.image} alt={`Study in ${dest.name} - Best education consultancy Nepal`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm font-medium opacity-90 mb-1">Study in</p>
                  <h3 className="text-2xl font-bold group-hover:translate-x-1 transition-transform">{dest.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES OFFERED */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#001F3F] mb-4">How We Help You</h2>
            <p className="text-gray-600">Comprehensive support from your first question to your first day on campus. <Link href="/services/" className="text-blue-600 font-semibold hover:underline">All services</Link> · <Link href="/scholarships/" className="text-blue-600 font-semibold hover:underline">Scholarships</Link></p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex gap-6">
              <div className="shrink-0 bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center text-blue-600">
                <Compass size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-2">Career Counselling</h3>
                <p className="text-gray-600">We analyze your academic profile and career aspirations to recommend the best courses and universities for you. <Link href="/services/admission/" className="text-blue-600 font-semibold hover:underline">Admission support</Link> in Kathmandu.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex gap-6">
              <div className="shrink-0 bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center text-blue-600">
                <BookOpen size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-2">Test Preparation</h3>
                <p className="text-gray-600">Expert coaching for IELTS, PTE, and TOEFL with small batch sizes. <Link href="/services/test-prep/" className="text-blue-600 font-semibold hover:underline">IELTS & test prep</Link> in Baneshwor & Itahari.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex gap-6">
              <div className="shrink-0 bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center text-blue-600">
                <FileCheck size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-2">Visa Assistance</h3>
                <p className="text-gray-600">Meticulous documentation review and interview preparation to maximize your visa success chances. <Link href="/services/visa/" className="text-blue-600 font-semibold hover:underline">Visa services</Link>.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex gap-6">
              <div className="shrink-0 bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center text-blue-600">
                <Plane size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-2">Pre-Departure Support</h3>
                <p className="text-gray-600">From flight bookings to accommodation and networking with alumni, we get you ready for life abroad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROOF & OUTCOMES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Real Results, Real Stories</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We take pride in the success of our students. Our outcomes speak for the quality of our guidance and dedication.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <p className="text-4xl font-bold text-blue-600 mb-1">1,500+</p>
                  <p className="text-gray-500 font-medium">Students Placed</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-600 mb-1">High</p>
                  <p className="text-gray-500 font-medium">Visa success for genuine applicants</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-600 mb-1">$2M+</p>
                  <p className="text-gray-500 font-medium">Scholarships Secured</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-600 mb-1">15+</p>
                  <p className="text-gray-500 font-medium">Partner Countries</p>
                </div>
              </div>

              <Link href="/success-stories/" className="text-[#001F3F] font-bold border-b-2 border-[#001F3F] pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
                Read Student Testimonials
              </Link>
            </div>

            <div className="relative">
              <div className="bg-blue-50 p-8 rounded-3xl relative">
                <Quote size={40} className="text-blue-200 absolute top-8 left-8" />
                <div className="relative z-10">
                  <p className="text-xl text-[#001F3F] font-medium leading-relaxed italic mb-6">
                    &quot;San Marina made my dream of studying in Australia a reality. The team was incredibly supportive, handling everything from my university application to my visa documentation. I couldn&apos;t have done it without them.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                      alt="Sumitra Shrestha - San Marina student, Masters in IT University of Sydney"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-[#001F3F]">Sumitra Shrestha</p>
                      <p className="text-sm text-gray-500">Master&apos;s in IT, University of Sydney</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIMPLE STEP-BY-STEP PROCESS */}
      <section className="py-20 bg-[#001F3F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Your Journey Made Simple</h2>
            <p className="text-blue-100/80">Five easy steps to your dream destination.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", title: "Counselling", icon: <Users size={20} /> },
                { step: "02", title: "University Selection", icon: <GraduationCap size={20} /> },
                { step: "03", title: "Application", icon: <FileCheck size={20} /> },
                { step: "04", title: "Visa Processing", icon: <Globe size={20} /> },
                { step: "05", title: "Fly Away", icon: <Plane size={20} /> }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto bg-[#002b55] rounded-full border-2 border-blue-400 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors relative">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION - AEO */}
      <section className="py-20 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="text-3xl font-bold text-[#001F3F] mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">What is the best education consultancy in Nepal for study abroad?</h3>
              <p className="text-gray-600 leading-relaxed">San Marina Education Consultancy is among Nepal&apos;s top study abroad consultants, with 1,500+ students placed in Australia, UK, USA, Canada, Japan, and Europe. Offices in Kathmandu (Tinkune, Baneshwor), Dang, and Itahari offer free consultation.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">How does San Marina help Nepali students study abroad?</h3>
              <p className="text-gray-600 leading-relaxed">San Marina provides career counselling, university selection, visa assistance, IELTS/PTE preparation, and pre-departure support for Australia, UK, USA, Canada, Japan, and Europe. <Link href="/services/" className="text-blue-600 font-semibold hover:underline">View all services</Link>.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">Is the first consultation free?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. San Marina offers a free, no-obligation consultation for students interested in studying abroad. <Link href="/consultation/" className="text-blue-600 font-semibold hover:underline">Book your free consultation</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL-TO-ACTION / CONTACT FORM */}
      <section id="contact" className="py-20 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#001F3F] mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Your dream university is waiting. Let&apos;s build your roadmap together with a free, no-obligation consultation.
            </p>
          </div>

          {showThankYou && (
            <div className="mb-6 max-w-2xl mx-auto p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 font-medium text-center">
              Thank you! We&apos;ll contact you shortly.
            </div>
          )}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-2xl mx-auto">
            <ContactFormNative redirectPath="/" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
