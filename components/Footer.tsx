'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const TikTokIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M15.5 3c.4 2.1 1.9 3.9 4 4.5v2.1c-1.6-.1-3.1-.6-4.5-1.5v6.7c0 3.3-2.6 6-5.9 6.2-1.8.1-3.5-.5-4.8-1.7-1.3-1.2-2-2.8-2-4.6 0-3.3 2.7-6 6-6 .5 0 1 .1 1.5.2v2.4c-.5-.2-1-.3-1.5-.3-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6V3h3.5z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001F3F] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="bg-white/5 p-5 rounded-2xl inline-block backdrop-blur-sm">
              <Image 
                src="/assets/san_marina_logo.png"
                alt="San Marina Education Consultancy" 
                width={96}
                height={96}
                className="h-24 w-auto object-contain bg-white rounded-lg px-3"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              San Marina is the <strong>best education consultancy in Nepal</strong> for study abroad. Top consultancy for Australia, UK, USA, Canada, Japan & Europe with high visa success for genuine applicants.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61578047634707" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-[#0056b3] transition-colors"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/sanmarinaeducation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-[#0056b3] transition-colors"><Instagram size={18} /></a>
              <a href="https://www.linkedin.com/company/san-marina-education-consultancy/?originalSubdomain=np" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-[#0056b3] transition-colors"><Linkedin size={18} /></a>
              <a href="https://www.tiktok.com/@sanmarinaedu" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-[#0056b3] transition-colors"><TikTokIcon size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/about/" prefetch={true} className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/study-abroad/" prefetch={true} className="hover:text-white transition-colors">Study Abroad</Link></li>
              <li><Link href="/services/" prefetch={true} className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/success-stories/" prefetch={true} className="hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link href="/scholarships/" prefetch={true} className="hover:text-white transition-colors">Scholarships</Link></li>
              <li><Link href="/blog/" prefetch={true} className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact/" prefetch={true} className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/career/" prefetch={true} className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="text-lg font-bold mb-6">Destinations</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/study-abroad/uk/" prefetch={true} className="hover:text-white transition-colors">United Kingdom</Link></li>
              <li><Link href="/study-abroad/usa/" prefetch={true} className="hover:text-white transition-colors">USA</Link></li>
              <li><Link href="/study-abroad/can/" prefetch={true} className="hover:text-white transition-colors">Canada</Link></li>
              <li><Link href="/study-abroad/aus/" prefetch={true} className="hover:text-white transition-colors">Australia</Link></li>
              <li><Link href="/study-abroad/nz/" prefetch={true} className="hover:text-white transition-colors">New Zealand</Link></li>
              <li><Link href="/study-abroad/eur/" prefetch={true} className="hover:text-white transition-colors">Europe Hub</Link></li>
              <li><Link href="/study-abroad/eur/germany/" prefetch={true} className="hover:text-white transition-colors">Study in Germany</Link></li>
              <li><Link href="/study-abroad/romania/" prefetch={true} className="hover:text-white transition-colors">Study in Romania</Link></li>
              <li><Link href="/study-abroad/eur/poland/" prefetch={true} className="hover:text-white transition-colors">Study in Poland</Link></li>
              <li><Link href="/study-abroad/eur/estonia/" prefetch={true} className="hover:text-white transition-colors">Estonia</Link></li>
              <li><Link href="/study-abroad/jp/" prefetch={true} className="hover:text-white transition-colors">Japan</Link></li>
              <li><Link href="/study-abroad/kr/" prefetch={true} className="hover:text-white transition-colors">South Korea</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <div className="space-y-6 text-sm text-gray-400">
               <p>Have questions? We are here to help you achieve your study abroad dreams.</p>
               <a href="mailto:info@sanmarina.edu.np" className="flex items-center gap-3 text-white hover:text-[#0056b3] transition-colors group">
                 <div className="bg-white/5 p-2 rounded-lg group-hover:bg-white/10 transition-colors">
                    <Mail size={18} className="text-[#0056b3]" />
                 </div>
                 <span>info@sanmarina.edu.np</span>
               </a>
            </div>
          </div>
        </div>

        {/* Branch Locations */}
        <div className="border-t border-white/10 py-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {/* Head Office */}
             <div className="flex items-start gap-4">
               <div className="bg-white/5 p-3 rounded-lg">
                 <MapPin className="text-[#DC2626]" size={24} />
               </div>
               <div>
                 <h5 className="text-white font-bold text-lg mb-1">Head Office</h5>
                 <p className="text-gray-400 text-sm">Tinkune, Kathmandu</p>
                 <div className="flex items-center gap-2 mt-1 text-[#0056b3] font-semibold">
                   <Phone size={14} />
                   <span>015922004</span>
                 </div>
               </div>
             </div>

             {/* Baneshwor Branch */}
             <div className="flex items-start gap-4">
               <div className="bg-white/5 p-3 rounded-lg">
                 <MapPin className="text-[#DC2626]" size={24} />
               </div>
               <div>
                 <h5 className="text-white font-bold text-lg mb-1">Baneshwor Branch</h5>
                 <p className="text-gray-400 text-sm">Beside Sky Bridge, 5th Floor</p>
                 <div className="flex items-center gap-2 mt-1 text-[#0056b3] font-semibold">
                   <Phone size={14} />
                   <span>015927731</span>
                 </div>
               </div>
             </div>

             {/* Dang Branch */}
             <div className="flex items-start gap-4">
               <div className="bg-white/5 p-3 rounded-lg">
                 <MapPin className="text-[#DC2626]" size={24} />
               </div>
               <div>
                 <h5 className="text-white font-bold text-lg mb-1">Dang Branch</h5>
                 <p className="text-gray-400 text-sm">Ghorahi, Dang</p>
                 <div className="flex items-center gap-2 mt-1 text-[#0056b3] font-semibold">
                   <Phone size={14} />
                   <span>082591130</span>
                 </div>
               </div>
             </div>

             {/* Itahari Branch */}
             <div className="flex items-start gap-4">
               <div className="bg-white/5 p-3 rounded-lg">
                 <MapPin className="text-[#DC2626]" size={24} />
               </div>
               <div>
                 <h5 className="text-white font-bold text-lg mb-1">Itahari Branch</h5>
                 <p className="text-gray-400 text-sm">Itahari, Sunsari</p>
                 <div className="flex items-center gap-2 mt-1 text-[#0056b3] font-semibold">
                   <Phone size={14} />
                   <span>980003731</span>
                 </div>
               </div>
             </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© 2026 San Marina Education Consultancy - Best Education Consultancy in Nepal. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy/" prefetch={false} className="hover:text-white">Privacy Policy</Link>
            <Link href="/privacy-policy/" prefetch={false} className="hover:text-white">Terms of Service</Link>
            <Link href="/privacy-policy/" prefetch={false} className="hover:text-white">Student Consent</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
