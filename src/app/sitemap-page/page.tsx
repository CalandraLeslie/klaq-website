import Link from 'next/link'
import { 
  Home, 
  Radio, 
  Calendar, 
  Users, 
  FileText, 
  Trophy, 
  Music, 
  Mail, 
  Shield, 
  Gavel, 
  Eye, 
  ExternalLink,
  MapPin,
  Mic,
  Heart,
  Building,
  Phone
} from 'lucide-react'

export default function SiteMapPage() {
  const mainPages = [
    { name: 'Home', href: '/', icon: Home, description: 'KLAQ homepage with latest updates' },
    { name: 'Listen Live', href: '/listen', icon: Radio, description: 'Stream KLAQ 95.5 FM live' },
    { name: 'Shows & Schedule', href: '/shows', icon: Calendar, description: 'Daily programming and show times' },
    { name: 'Meet the DJs', href: '/djs', icon: Users, description: 'Your favorite radio hosts' },
    { name: 'News', href: '/news', icon: FileText, description: 'Rock music and local news' },
    { name: 'Events', href: '/events', icon: Calendar, description: 'Upcoming concerts and events' },
    { name: 'Contests', href: '/contest', icon: Trophy, description: 'Win amazing prizes' },
    { name: 'Song Requests', href: '/request', icon: Music, description: 'Request your favorite songs' },
    { name: 'Contact Us', href: '/contact', icon: Mail, description: 'Get in touch with KLAQ' },
  ]

  const newsCategories = [
    { name: 'All News', href: '/news', description: 'Latest rock music and local news' },
    { name: 'Rock News', href: '/news/rock-news', description: 'Music industry news and updates' },
    { name: 'Local News', href: '/news/local', description: 'El Paso community news' },
    { name: 'Station News', href: '/news/station', description: 'KLAQ station updates' },
    { name: 'Concert News', href: '/news/concerts', description: 'Concert announcements and reviews' },
  ]

  const eventCategories = [
    { name: 'All Events', href: '/events', description: 'Complete events calendar' },
    { name: 'Concerts', href: '/events/concerts', description: 'Live music performances' },
    { name: 'Festivals', href: '/events/festivals', description: 'Music festivals and celebrations' },
    { name: 'Station Events', href: '/events/station-events', description: 'KLAQ sponsored events' },
    { name: 'Community Events', href: '/events/community', description: 'Local community gatherings' },
  ]

  const businessPages = [
    { name: 'Advertise with KLAQ', href: '/advertise', icon: Building, description: 'Business advertising solutions' },
    { name: 'Advertising Info', href: '/advertising', icon: ExternalLink, description: 'Additional advertising details' },
  ]

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy', icon: Shield, description: 'How we protect your data' },
    { name: 'Terms of Service', href: '/terms', icon: Gavel, description: 'Website usage terms' },
    { name: 'Contest Rules', href: '/contest-rules', icon: FileText, description: 'Official contest terms' },
    { name: 'Accessibility Statement', href: '/accessibility', icon: Eye, description: 'Website accessibility info' },
    { name: 'EEO Reports', href: '/eeo-reports', icon: FileText, description: 'Equal opportunity employment' },
  ]

  const externalLinks = [
    { name: 'FCC Public File', href: 'https://publicfiles.fcc.gov/fm-profile/klaq', description: 'Official FCC documentation' },
    { name: 'Facebook', href: 'https://www.facebook.com/KLAQRocks', description: 'Follow us on Facebook' },
    { name: 'Twitter', href: 'https://twitter.com/KLAQ', description: 'Follow us on Twitter' },
    { name: 'Instagram', href: 'https://www.instagram.com/klaqofficial', description: 'Follow us on Instagram' },
    { name: 'YouTube', href: 'https://www.youtube.com/user/KLAQOfficial', description: 'Subscribe to our channel' },
  ]

  const contactInfo = [
    { label: 'Request Line', value: '(915) 544-KLAQ', type: 'phone' },
    { label: 'Email', value: 'info@klaq.com', type: 'email' },
    { label: 'Song Requests', value: 'requests@klaq.com', type: 'email' },
    { label: 'Advertising', value: 'advertising@klaq.com', type: 'email' },
    { label: 'Location', value: 'El Paso, Texas', type: 'location' },
    { label: 'Frequency', value: '95.5 FM', type: 'frequency' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-red-900 text-white py-16">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              KLAQ <span className="text-red-400">Site Map</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Complete directory of all KLAQ 95.5 FM website pages and links
            </p>
          </div>
        </div>
      </div>

      <div className="container-responsive py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Main Navigation Pages */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Home className="w-6 h-6 text-red-600 mr-3" />
              Main Pages
            </h2>
            <div className="space-y-4">
              {mainPages.map((page, index) => (
                <Link
                  key={index}
                  href={page.href}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <page.icon className="w-5 h-5 text-red-600 mt-0.5 group-hover:text-red-700" />
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-600">{page.name}</h3>
                    <p className="text-sm text-gray-600">{page.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* News Categories */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FileText className="w-6 h-6 text-red-600 mr-3" />
              News Categories
            </h2>
            <div className="space-y-4">
              {newsCategories.map((category, index) => (
                <Link
                  key={index}
                  href={category.href}
                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-red-600">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Event Categories */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Calendar className="w-6 h-6 text-red-600 mr-3" />
              Event Categories
            </h2>
            <div className="space-y-4">
              {eventCategories.map((category, index) => (
                <Link
                  key={index}
                  href={category.href}
                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-red-600">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Business Pages */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Building className="w-6 h-6 text-red-600 mr-3" />
              Business Services
            </h2>
            <div className="space-y-4">
              {businessPages.map((page, index) => (
                <Link
                  key={index}
                  href={page.href}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <page.icon className="w-5 h-5 text-red-600 mt-0.5 group-hover:text-red-700" />
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-600">{page.name}</h3>
                    <p className="text-sm text-gray-600">{page.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Pages */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Shield className="w-6 h-6 text-red-600 mr-3" />
              Legal & Compliance
            </h2>
            <div className="space-y-4">
              {legalPages.map((page, index) => (
                <Link
                  key={index}
                  href={page.href}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <page.icon className="w-5 h-5 text-red-600 mt-0.5 group-hover:text-red-700" />
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-600">{page.name}</h3>
                    <p className="text-sm text-gray-600">{page.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* External Links */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <ExternalLink className="w-6 h-6 text-red-600 mr-3" />
              External Links
            </h2>
            <div className="space-y-4">
              {externalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-600">{link.name}</h3>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-red-600" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl text-white p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <div key={index} className="text-center">
                <h3 className="font-semibold mb-2">{contact.label}</h3>
                {contact.type === 'phone' ? (
                  <a href={`tel:${contact.value}`} className="text-red-200 hover:text-white">
                    {contact.value}
                  </a>
                ) : contact.type === 'email' ? (
                  <a href={`mailto:${contact.value}`} className="text-red-200 hover:text-white">
                    {contact.value}
                  </a>
                ) : (
                  <span className="text-red-200">{contact.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/listen" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Listen Live
            </Link>
            <Link href="/request" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Request a Song
            </Link>
            <Link href="/contest" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Enter Contest
            </Link>
            <Link href="/contact" className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
