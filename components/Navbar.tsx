'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';

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
      isScrolled ? 'bg-white shadow-md py-1' : 'bg-white py-2'
    }`}>
      <div className="relative z-[110] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-center xl:justify-between bg-white">
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

      <div className={`fixed top-0 left-0 right-0 bottom-0 bg-white z-[90] transition-transform duration-300 xl:hidden pt-[200px] px-6 overflow-y-auto ${
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
