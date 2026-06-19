'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronDown, Menu, X, Phone, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  // Prefetch all dropdown routes on hover for near-instant navigation
  const prefetchAll = (paths: string[]) => () => paths.forEach((p) => router.prefetch(p));
  const studyAbroadPaths = ['/study-abroad/uk/', '/study-abroad/usa/', '/study-abroad/can/', '/study-abroad/aus/', '/study-abroad/nz/', '/study-abroad/eur/', '/study-abroad/jp/', '/study-abroad/kr/'];
  const scholarshipPaths = ['/scholarships/', '/scholarships/germany-for-nepali-students/', '/scholarships/austria-for-nepali-students/', '/scholarships/norway-for-nepali-students/', '/scholarships/slovakia-for-nepali-students/', '/scholarships/romania-for-nepali-students/', '/scholarships/usa-for-nepali-students/', '/scholarships/italy-for-nepali-students/'];
  const servicePaths = ['/services/', '/services/online-counselling/', '/services/admission/', '/services/visa/', '/services/personality-test/'];
  const testPrepPaths = ['/services/test-prep/', '/services/test-prep/ielts/', '/services/test-prep/german/', '/services/test-prep/japanese/'];
  const resourcePaths = ['/about/', '/events/', '/success-stories/', '/career/', '/blog/', '/consultation/'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
        { 
      name: 'Study Abroad', 
      href: '/study-abroad/',
        dropdown: [
        { name: 'Study in UK', href: '/study-abroad/uk/' },
        { name: 'Study in USA', href: '/study-abroad/usa/' },
        { name: 'Study in Canada', href: '/study-abroad/can/' },
        { name: 'Study in Australia', href: '/study-abroad/aus/' },
        { name: 'Study in New Zealand', href: '/study-abroad/nz/' },
        { name: 'Study in Europe', href: '/study-abroad/eur/' },
        { name: 'Study in Japan', href: '/study-abroad/jp/' },
        { name: 'Study in South Korea', href: '/study-abroad/kr/' }
      ]
    },
    { 
      name: 'Scholarships', 
      href: '/scholarships/',
      dropdown: [
        { name: 'Scholarship in Germany', href: '/scholarships/germany-for-nepali-students/' },
        { name: 'Scholarship in Austria', href: '/scholarships/austria-for-nepali-students/' },
        { name: 'Scholarship in Norway', href: '/scholarships/norway-for-nepali-students/' },
        { name: 'Scholarship in Slovakia', href: '/scholarships/slovakia-for-nepali-students/' },
        { name: 'Scholarship in Romania', href: '/scholarships/romania-for-nepali-students/' },
        { name: 'Scholarship in USA', href: '/scholarships/usa-for-nepali-students/' },
        { name: 'Scholarship in Italy', href: '/scholarships/italy-for-nepali-students/' }
      ]
    },
    { 
      name: 'Services', 
      href: '/services/',
      dropdown: [
        { name: 'Online Meeting', href: '/services/online-counselling/' },
        { name: 'Admission Counselling', href: '/services/admission/' },
        { name: 'Student Visa Services', href: '/services/visa/' },
        { name: 'Personality Assessment', href: '/services/personality-test/' }
      ]
    },
    {
      name: 'Test Preparation',
      href: '/services/test-prep',
      dropdown: [
        { name: 'IELTS Preparation', href: '/services/test-prep/ielts/' },
        { name: 'German Language Preparation', href: '/services/test-prep/german/' },
        { name: 'Japanese Language (JLPT)', href: '/services/test-prep/japanese/' }
      ]
    },
    { 
      name: 'Resources', 
      href: '/blog/',
      dropdown: [
        { name: 'About Us', href: '/about/' },
        { name: 'Events', href: '/events/' },
        { name: 'Success Stories', href: '/success-stories/' },
        { name: 'Career', href: '/career/' }
      ]
    },
    { name: 'Blog', href: '/blog' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      {/* Mobile Contact Strip — icons only, visible below md */}
      <div className="md:hidden bg-[#001F3F] text-white">
        <div className="flex items-center justify-around px-4 py-2">
          <a
            href="tel:+977015922004"
            className="flex items-center gap-1.5 text-white active:opacity-70 transition-opacity"
          >
            <div className="bg-white/10 p-1.5 rounded-full">
              <Phone size={15} className="text-yellow-300" />
            </div>
            <span className="text-[11px] font-bold tracking-wide">Call</span>
          </a>
          <span className="text-white/20 text-lg">|</span>
          <a
            href="mailto:info@sanmarina.edu.np"
            className="flex items-center gap-1.5 text-white active:opacity-70 transition-opacity"
          >
            <div className="bg-white/10 p-1.5 rounded-full">
              <Mail size={15} className="text-yellow-300" />
            </div>
            <span className="text-[11px] font-bold tracking-wide">Email</span>
          </a>
          <span className="text-white/20 text-lg">|</span>
          <a
            href="https://wa.me/9779802372602"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 active:opacity-70 transition-opacity"
          >
            <div className="bg-white/10 p-1.5 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px] text-[#25D366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <span className="text-[11px] font-bold text-[#25D366] tracking-wide">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Top Bar — contact left, socials right — only visible md+ */}
      <div className="hidden md:block bg-[#001F3F] text-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 py-1.5 flex items-center justify-between">
          {/* Left: Email, Phone, WhatsApp */}
          <div className="flex items-center gap-4 lg:gap-5">
            <a
              href="mailto:info@sanmarina.edu.np"
              className="flex items-center gap-1.5 text-[11px] sm:text-xs whitespace-nowrap hover:text-blue-300 transition-colors"
            >
              <Mail size={13} className="flex-shrink-0" />
              <span>info@sanmarina.edu.np</span>
            </a>
            <span className="text-white/30 text-sm flex-shrink-0">|</span>
            <div className="flex items-center gap-1 text-[11px] sm:text-xs whitespace-nowrap">
              <a href="tel:+977015922004" className="flex items-center gap-1 hover:text-blue-300 transition-colors">
                <Phone size={13} className="flex-shrink-0" />
                <span>+977-015922004</span>
              </a>
              <span>,</span>
              <a href="tel:+977015927731" className="hover:text-blue-300 transition-colors ml-1">+977-015927731</a>
            </div>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/profile.php?id=61578047634707" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/sanmarinaeducation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/san-marina-education-consultancy/?originalSubdomain=np" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.tiktok.com/@sanmarinaedu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors" aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.15v-3.44a4.85 4.85 0 01-2.65-.78V6.69h2.65z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className={`relative z-[110] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-center xl:justify-between bg-white transition-all duration-300 ${
        isScrolled ? 'py-1' : 'py-2'
      }`}>
        {/* Logo Section */}
        <div className="flex-shrink-0 mx-auto xl:mx-0">
          <Link href="/" className="block">
            <Image
              src="/assets/san_marina_logo.png"
              alt="San Marina Education Consultancy"
              width={190}
              height={180}
              className="h-[170px] w-[180px] sm:h-[180px] sm:w-[190px] object-contain transition-all"
              priority
            />
          </Link>
        </div>

        <div className="hidden xl:flex flex-1 items-center justify-center px-4">
          <div className="flex items-center space-x-3 2xl:space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href === '/' ? '/' : item.href + '/'}
                  onMouseEnter={item.dropdown ? prefetchAll(
                    item.name === 'Study Abroad' ? studyAbroadPaths :
                    item.name === 'Scholarships' ? scholarshipPaths :
                    item.name === 'Services' ? servicePaths :
                    item.name === 'Test Preparation' ? testPrepPaths :
                    item.name === 'Resources' ? resourcePaths : []
                  ) : undefined}
                  prefetch={!!item.dropdown}
                  className="text-[#001F3F] font-bold font-['Nunito'] tracking-wide hover-underline-animation flex items-center gap-1 py-1.5 text-sm 2xl:text-[16px] whitespace-nowrap"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                </Link>
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 py-2 translate-y-2 group-hover:translate-y-0 z-50">
                    {item.dropdown.map((subItem) => (
                      <Link 
                        key={subItem.name}
                        href={subItem.href}
                        prefetch={true}
                        className="block px-6 py-3 text-sm font-['Nunito'] font-bold text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <Link 
            href="/consultation/"
            prefetch={true}
            className="hidden xl:flex bg-[#0056b3] hover:bg-[#004494] text-white px-5 py-2.5 rounded-md font-bold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 items-center gap-2 whitespace-nowrap"
          >
            <Phone size={16} />
            <span>Book a Free Consultation</span>
          </Link>
        </div>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#001F3F] p-2 xl:hidden"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`fixed top-0 left-0 right-0 bottom-0 bg-white z-[90] transition-transform duration-300 xl:hidden pt-[238px] px-6 overflow-y-auto ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col space-y-6 pb-20">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-gray-100 pb-4">
              {item.dropdown ? (
                <button
                  onClick={() => setExpandedMobileItem(expandedMobileItem === item.name ? null : item.name)}
                  className="w-full flex items-center justify-between text-xl font-bold font-['Nunito'] text-[#001F3F] mb-4 group focus:outline-none"
                >
                  <span>{item.name}</span>
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform duration-300 ${
                      expandedMobileItem === item.name ? 'rotate-180 text-[#0056b3]' : 'text-gray-400'
                    }`} 
                  />
                </button>
              ) : (
                <Link 
                  href={item.href}
                  className="text-xl font-bold font-['Nunito'] text-[#001F3F] block mb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
              
              {item.dropdown && (
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedMobileItem === item.name ? 'max-h-[1000px] opacity-100 mb-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 space-y-1 border-l-2 border-blue-100 ml-1">
                    {item.dropdown.map((subItem) => (
                      <Link 
                        key={subItem.name}
                        href={subItem.href}
                        prefetch={true}
                        className="block text-sm text-gray-600 font-['Nunito'] font-semibold py-2 hover:text-[#0056b3] transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
