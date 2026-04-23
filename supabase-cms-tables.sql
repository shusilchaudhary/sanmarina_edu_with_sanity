-- ============================================================
-- San Marina CMS Tables — Run this in Supabase SQL Editor
-- Go to: https://supabase.com → Your Project → SQL Editor
-- ============================================================

-- 1. TEAM MEMBERS TABLE
CREATE TABLE IF NOT EXISTS team_members (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  role text NOT NULL,
  image_url text DEFAULT '',
  branch text NOT NULL DEFAULT 'head-office',
  sort_order integer DEFAULT 0,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Seed all existing team members
INSERT INTO team_members (name, role, image_url, branch, sort_order) VALUES
-- Head Office (Tinkune)
('Sandip Baraili', 'Chief Operating Officer', '/assets/Sandip_baraili.jpeg', 'head-office', 1),
('Sanjay Shrestha', 'Manager', '/assets/sanjay_001.png', 'head-office', 2),
('Nita Ghimire', 'Admin', '/assets/nita_miss_01.png', 'head-office', 3),
('Sujana Shrestha', 'Counsellor', '/assets/sujana_miss_03.png', 'head-office', 4),
('Shreejana Basnet', 'Reception', '/assets/srijana_miss_03.png', 'head-office', 5),
('Sujata Gautam', 'Reception', '/assets/sujata_gautam_01.png', 'head-office', 6),
-- Baneshwor Branch
('Yubraj Khanal', 'Counsellor', '/assets/yubraj_khanal_01.png', 'baneshwor', 1),
('Sangeeta Jaishi', 'Receptionist & Content Creator', '/assets/sangeeta.png', 'baneshwor', 2),
('Shusil Chaudhary', 'Digital Marketing Officer', '/assets/shusil.png', 'baneshwor', 3),
-- Dang Branch
('Shalik', 'Managing Director', '/assets/shalik_02.png', 'dang', 1),
('Laxmi Budhathoki', 'Japanese Language Teacher & Counsellor', '/assets/laxmi_budhathoki.png', 'dang', 2),
-- Itahari Branch
('Nabin Chaudhary', 'Itahari Branch Manager', '/assets/nabin.png', 'itahari', 1),
('Puskar', 'Europe Counsellor', '/assets/puskar.png', 'itahari', 2),
('Neharika', 'Front Desk Officer', '/assets/neharika.png', 'itahari', 3),
('Balika Dhakal', 'Counsellor', '/assets/balika_01.png', 'itahari', 4);


-- 2. SITE SETTINGS TABLE (key-value store)
CREATE TABLE IF NOT EXISTS site_settings (
  key text PRIMARY KEY,
  value text NOT NULL DEFAULT '',
  label text NOT NULL DEFAULT '',
  updated_at timestamptz DEFAULT now()
);

-- Seed all site settings
INSERT INTO site_settings (key, value, label) VALUES
('phone_main',         '+9779802372602',                                         'Main Phone / WhatsApp'),
('phone_head_office',  '015922004',                                              'Head Office Phone'),
('phone_baneshwor',    '015927731',                                              'Baneshwor Branch Phone'),
('phone_dang',         '082591130',                                              'Dang Branch Phone'),
('phone_itahari',      '980003731',                                              'Itahari Branch Phone'),
('address_head_office','Tinkune, Kathmandu',                                     'Head Office Address'),
('address_baneshwor',  'Beside Sky Bridge, 5th Floor',                           'Baneshwor Address'),
('address_dang',       'Ghorahi, Dang',                                          'Dang Branch Address'),
('address_itahari',    'Itahari, Sunsari',                                       'Itahari Branch Address'),
('email_main',         'info@sanmarina.edu.np',                                  'Main Email'),
('stat_students',      '1,500+',                                                 'Students Placed (Stat)'),
('stat_universities',  '100+',                                                   'Partner Universities (Stat)'),
('stat_branches',      '4',                                                      'Branches Count (Stat)'),
('stat_experience',    '2+',                                                     'Years of Experience (Stat)'),
('facebook_url',       'https://www.facebook.com/profile.php?id=61578047634707', 'Facebook Page URL'),
('instagram_url',      'https://www.instagram.com/sanmarinaeducation',           'Instagram URL'),
('linkedin_url',       'https://www.linkedin.com/company/san-marina-education-consultancy/', 'LinkedIn URL'),
('whatsapp_number',    '9779802372602',                                          'WhatsApp Number (no + sign)');


-- 3. TESTIMONIALS TABLE
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  destination text NOT NULL,
  date_label text DEFAULT '',
  quote text NOT NULL,
  active boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Seed testimonials from success stories page
INSERT INTO testimonials (name, destination, date_label, quote, sort_order) VALUES
('Suman Thapa',    'Australia', 'January 2026',   'San Marina made my dream of studying in Australia a reality. The team was incredibly supportive, handling everything from my university application to visa documentation.', 1),
('Anisha Gurung',  'Japan',     'December 2025',  'Got admission to a Japanese language school with MEXT scholarship guidance. The Japanese classes were very helpful.', 2),
('Bikash Shrestha','UK',        'November 2025',  'My UK visa was granted within 24 hours of biometric. Thank you San Marina team!', 3),
('Priya Sharma',   'Australia', 'October 2025',   'Best consultancy in Nepal! Got my Australia student visa approved. The team, especially Sandip sir, guided me through every step.', 4),
('Rajesh Kumar',   'Canada',    'September 2025', 'Smooth process from DLI selection to study permit. Highly professional and transparent.', 5),
('Sita Maharjan',  'Germany',   'August 2025',    'German language preparation at Itahari branch was excellent. Now studying in Berlin!', 6),
('Amit Poudel',    'USA',       'July 2025',      'F1 visa success! San Marina helped with I-20, SEVIS, and interview preparation.', 7),
('Kritika Bhandari','UK',       'June 2025',      'Free IELTS classes at Baneshwor helped me achieve my target band. Grateful for the support.', 8),
('Nabin Adhikari', 'Japan',     'May 2025',       'JLPT N5 preparation and COE guidance—everything was handled professionally.', 9);


-- Enable Row Level Security (optional but recommended)
-- ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
