import { Calendar, Clock, MapPin, ChevronRight, Bell } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import type { Event } from '@/lib/supabase';

export const metadata = {
  title: 'Events & Workshops | San Marina Education Consultancy Nepal',
  description: 'Join our study abroad info sessions, visa workshops, and fairs. Kathmandu, Dang, Itahari.',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/events/',
  },
};

async function getEvents(): Promise<Event[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return [];
  try {
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) return [];
    return data ?? [];
  } catch {
    return [];
  }
}

export const revalidate = 60;

function EventCard({ event }: { event: Event }) {
  return (
    <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
      {event.image_url ? (
        <div className="relative h-52 sm:h-56 bg-gray-100">
          <Image src={event.image_url} alt={event.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" />
        </div>
      ) : (
        <div className="h-2 bg-gradient-to-r from-[#001F3F] to-blue-600" aria-hidden />
      )}

      <div className="p-6 md:p-8">
        <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
          {event.date && (
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#001F3F]" />
              {event.date}
            </span>
          )}
          {event.time && (
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#001F3F]" />
              {event.time}
            </span>
          )}
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-[#001F3F] mb-3">{event.title}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>

        {event.location && (
          <div className="flex items-start gap-2 text-gray-600 text-sm mb-6">
            <MapPin className="w-4 h-4 text-[#001F3F] shrink-0 mt-0.5" />
            {event.location_link ? (
              <a href={event.location_link} target="_blank" rel="noreferrer" className="hover:text-[#001F3F] hover:underline">
                {event.location}
              </a>
            ) : (
              <span>{event.location}</span>
            )}
          </div>
        )}

        {event.event_type === 'upcoming' && event.cta_text && event.cta_link && (
          <Link
            href={event.cta_link}
            className="inline-flex items-center gap-2 bg-[#001F3F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#002244] transition-colors"
          >
            {event.cta_text}
            <ChevronRight className="w-5 h-5" />
          </Link>
        )}
      </div>
    </article>
  );
}

export default async function EventsPage() {
  const events = await getEvents();
  const upcomingEvents = events.filter((e) => e.event_type === 'upcoming');
  const pastEvents = events.filter((e) => e.event_type === 'past');

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-[#001F3F] via-[#002244] to-[#0a1628] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Events & Workshops</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join our info sessions, university visits, and study abroad fairs.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#001F3F] mb-10">Upcoming Events</h2>
          {upcomingEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
              <p className="text-gray-600 mb-8">No upcoming events at the moment. Check back soon!</p>
              <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#001F3F] text-white px-6 py-3 rounded-xl font-semibold">
                Book a Free Consultation Instead <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#001F3F] mb-10">Past Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-[#001F3F] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Bell className="w-12 h-12 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-blue-200 mb-8">Follow us on social media for the latest announcements.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact/" className="bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100">Visit Our Branches</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
