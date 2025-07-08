import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Radio, MapPin, Phone, Mail, Play, Users, Calendar, Award, FileText, Shield, Eye, Gavel, ExternalLink } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/KLAQRocks', icon: Facebook },
  { name: 'Twitter', href: 'https://twitter.com/KLAQ', icon: Twitter },
  { name: 'Instagram', href: 'https://www.instagram.com/klaqofficial', icon: Instagram },
  { name: 'YouTube', href: 'https://www.youtube.com/user/KLAQOfficial', icon: Youtube },
];

const quickLinks = [
  { name: 'Listen Live', href: '/listen', icon: Play, description: 'Stream KLAQ 24/7' },
  { name: 'Shows & Schedule', href: '/shows', icon: Calendar, description: 'Daily programming' },
  { name: 'Meet the DJs', href: '/djs', icon: Users, description: 'Your favorite hosts' },
  { name: 'Contests & Events', href: '/contests', icon: Award, description: 'Win big prizes' },
  { name: 'Music News', href: '/news', icon: FileText, description: 'Latest rock updates' },
  { name: 'Request a Song', href: '/request', icon: Radio, description: 'Hear your favorites' },
  { name: 'Advertise With Us', href: '/advertise', icon: ExternalLink, description: 'Business solutions' },
  { name: 'Contact Us', href: '/contact', icon: Mail, description: 'Get in touch' },
];

const legalLinks = [
  { 
    name: 'Privacy Policy', 
    href: '/privacy', 
    icon: Shield, 
    description: 'How we protect your data',
    external: false 
  },
  { 
    name: 'Terms of Service', 
    href: '/terms', 
    icon: Gavel, 
    description: 'Usage agreements',
    external: false 
  },
  { 
    name: 'Contest Rules', 
    href: '/contest-rules', 
    icon: FileText, 
    description: 'Official contest terms',
    external: false 
  },
  { 
    name: 'FCC Applications', 
    href: 'https://publicfiles.fcc.gov/fm-profile/klaq', 
    icon: ExternalLink, 
    description: 'Public inspection file',
    external: true 
  },
  { 
    name: 'Accessibility Statement', 
    href: '/accessibility', 
    icon: Eye, 
    description: 'Website accessibility info',
    external: false 
  },
  { 
    name: 'EEO Reports', 
    href: '/eeo-reports', 
    icon: FileText, 
    description: 'Equal opportunity employment',
    external: false 
  },
  { 
    name: 'Public File', 
    href: 'https://publicfiles.fcc.gov/fm-profile/klaq', 
    icon: ExternalLink, 
    description: 'FCC public inspection file',
    external: true 
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-responsive py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Station Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <Radio className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">95.5 KLAQ</h3>
                <p className="text-gray-400">El Paso's Best Rock</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your home for the best rock music in El Paso. Tune in for live shows, 
              local news, contests, and the music that rocks your world.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>El Paso, Texas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-red-500" />
                <span>Request Line: (915) 544-KLAQ</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-red-500" />
                <span>info@klaq.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-red-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-start space-x-3 text-gray-300 hover:text-red-400 transition-all duration-200 nav-focus-visible"
                    >
                      <Icon className="w-4 h-4 mt-0.5 text-red-500 group-hover:text-red-400 transition-colors" />
                      <div>
                        <span className="font-medium block">{link.name}</span>
                        <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                          {link.description}
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-red-400">Legal & Compliance</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => {
                const Icon = link.icon;
                const LinkComponent = link.external ? 'a' : Link;
                const linkProps = link.external 
                  ? { 
                      href: link.href, 
                      target: '_blank', 
                      rel: 'noopener noreferrer',
                      className: "group flex items-start space-x-3 text-gray-300 hover:text-red-400 transition-all duration-200 nav-focus-visible"
                    }
                  : { 
                      href: link.href,
                      className: "group flex items-start space-x-3 text-gray-300 hover:text-red-400 transition-all duration-200 nav-focus-visible"
                    };
                
                return (
                  <li key={link.name}>
                    <LinkComponent {...linkProps}>
                      <Icon className="w-4 h-4 mt-0.5 text-red-500 group-hover:text-red-400 transition-colors" />
                      <div className="flex-1">
                        <div className="flex items-center space-x-1">
                          <span className="font-medium">{link.name}</span>
                          {link.external && (
                            <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-gray-400" />
                          )}
                        </div>
                        <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors block">
                          {link.description}
                        </span>
                      </div>
                    </LinkComponent>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors duration-200 focus-visible group"
                    aria-label={`Follow us on ${item.name}`}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
            
            <div className="text-left lg:text-right text-gray-400 text-sm">
              <p className="font-medium">&copy; {currentYear} 95.5 KLAQ. All rights reserved.</p>
              <p className="mt-1">Townsquare Media, Inc. • Licensed by the FCC</p>
              <p className="mt-1 text-xs">
                Broadcasting from El Paso, Texas • Facility ID: 10836
              </p>
            </div>
          </div>
          
          {/* Legal Disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center lg:text-left max-w-4xl">
              <strong>KLAQ 95.5 FM</strong> is a registered trademark of Townsquare Media, Inc. 
              This website and its content are protected by copyright and other intellectual property laws. 
              Contest rules, terms of service, and privacy policies are subject to change without notice. 
              Please listen responsibly and follow all applicable laws when participating in contests or promotions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
