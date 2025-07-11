import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin, Clock, Users, Music, Star, Tent, Utensils, Car } from 'lucide-react'

export const metadata: Metadata = {
  title: 'KLAQ Rocks the Park 2025 | El Paso\'s Premier Rock Festival',
  description: 'Join KLAQ for our annual outdoor rock festival at Ascarate Park. Free admission, multiple stages, food trucks, and El Paso\'s best rock experience.',
  keywords: 'KLAQ Rocks the Park, El Paso rock festival, Ascarate Park, free concert, outdoor music festival',
  openGraph: {
    title: 'KLAQ Rocks the Park 2025 | El Paso\'s Premier Rock Festival',
    description: 'Join KLAQ for our annual outdoor rock festival with free admission and top rock acts.',
    type: 'website',
    url: 'https://klaq.com/events/klaq-rocks-park',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function KLAQRocksTheParkPage() {
  const lineup2025 = [
    {
      stage: "Main Stage",
      acts: [
        { name: "Pearl Jam", time: "8:30 PM - 10:30 PM", type: "Headliner" },
        { name: "Foo Fighters", time: "6:30 PM - 8:00 PM", type: "Co-Headliner" },
        { name: "The Black Keys", time: "5:00 PM - 6:00 PM", type: "Support" },
        { name: "Local Heroes El Paso", time: "3:30 PM - 4:30 PM", type: "Local" }
      ]
    },
    {
      stage: "Rock Stage",
      acts: [
        { name: "Green Day", time: "9:00 PM - 10:30 PM", type: "Headliner" },
        { name: "Weezer", time: "7:30 PM - 8:30 PM", type: "Support" },
        { name: "The Strokes", time: "6:00 PM - 7:00 PM", type: "Support" },
        { name: "Desert Wolves", time: "4:30 PM - 5:30 PM", type: "Local" }
      ]
    },
    {
      stage: "Alternative Stage", 
      acts: [
        { name: "Arctic Monkeys", time: "8:00 PM - 9:30 PM", type: "Headliner" },
        { name: "Cage the Elephant", time: "6:30 PM - 7:30 PM", type: "Support" },
        { name: "Tame Impala", time: "5:00 PM - 6:00 PM", type: "Support" },
        { name: "Borderland Sound", time: "3:30 PM - 4:30 PM", type: "Local" }
      ]
    }
  ]

  const festivalInfo = {
    date: "September 14, 2025",
    time: "Gates open at 3:00 PM",
    location: "Ascarate Park",
    address: "6900 Delta Dr, El Paso, TX 79905",
    admission: "FREE with RSVP",
    parking: "Free on-site parking available",
    ageLimit: "All ages welcome"
  }

  const amenities = [
    {
      name: "Food Trucks",
      icon: Utensils,
      description: "Over 20 local food trucks offering everything from BBQ to vegan options",
      details: ["Local favorites", "Vegetarian options", "Kids meals", "Dessert trucks"]
    },
    {
      name: "Free Parking",
      icon: Car, 
      description: "Ample free parking with easy access to the festival grounds",
      details: ["Multiple lots", "Accessible parking", "Shuttle service", "Bike racks"]
    },
    {
      name: "Family Zone",
      icon: Users,
      description: "Dedicated family area with activities for kids and comfortable seating",
      details: ["Kids activities", "Face painting", "Balloon artists", "Family restrooms"]
    },
    {
      name: "VIP Experience",
      icon: Star,
      description: "Upgrade to VIP for exclusive viewing areas and enhanced amenities",
      details: ["Premium viewing", "Dedicated bar", "Meet & greets", "Exclusive merch"]
    }
  ]

  const schedule = [
    { time: "2:00 PM", activity: "Gates Open & Setup" },
    { time: "3:00 PM", activity: "Festival Begins - Food Trucks Open" },
    { time: "3:30 PM", activity: "Local Acts Begin" },
    { time: "5:00 PM", activity: "Main Stage Programming Starts" },
    { time: "6:00 PM", activity: "All Stages Active" },
    { time: "8:00 PM", activity: "Headliner Performances Begin" },
    { time: "10:30 PM", activity: "Main Stage Finale" },
    { time: "11:00 PM", activity: "Festival Ends" }
  ]

  const pastYears = [
    {
      year: "2024",
      headliners: ["Metallica", "Red Hot Chili Peppers", "Tool"],
      attendance: "15,000+",
      highlights: ["Perfect weather", "Record attendance", "Amazing performances"]
    },
    {
      year: "2023", 
      headliners: ["Foo Fighters", "The Killers", "Imagine Dragons"],
      attendance: "12,000+",
      highlights: ["Surprise guests", "Epic drum battle", "Community spirit"]
    },
    {
      year: "2022",
      headliners: ["Pearl Jam", "Alice in Chains", "Soundgarden"],
      attendance: "10,000+", 
      highlights: ["Grunge reunion", "Charity fundraising", "Local band showcase"]
    }
  ]

  const guidelines = [
    "NO outside food or beverages (water bottles allowed)",
    "NO chairs or blankets (limited seating available)",
    "NO pets (service animals welcome)",
    "NO professional cameras or recording equipment",
    "NO illegal substances or glass containers",
    "Security check required at entrance",
    "Small bags and purses subject to search",
    "Festival wristbands required for re-entry"
  ]

  return (
    <div className="page-container bg-white">
      {/* Hero Section */}
      <section className="page-hero bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 text-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 border border-white/30 rounded-full px-6 py-3 mb-8">
              <Music className="w-5 h-5" />
              <span className="font-medium text-lg">Annual Festival</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
              KLAQ Rocks <span className="text-yellow-300">the Park</span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-orange-100 mt-6 max-w-3xl mx-auto mb-8 leading-relaxed">
              El Paso's premier FREE outdoor rock festival returns to Ascarate Park with three stages, 
              top rock acts, and the biggest party of the year!
            </p>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-12 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-yellow-300" />
                  <span className="font-medium">{festivalInfo.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-yellow-300" />
                  <span className="font-medium">{festivalInfo.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-yellow-300" />
                  <span className="font-medium">Ascarate Park</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span className="font-medium">FREE Admission</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-lg transition-colors duration-200">
                RSVP for Free
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-bold text-lg transition-colors duration-200">
                View Lineup
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lineup Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">2025 Lineup</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Three stages of non-stop rock featuring headliners, rising stars, and the best local talent El Paso has to offer
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {lineup2025.map((stage, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 text-center">
                  <h3 className="text-2xl font-bold">{stage.stage}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {stage.acts.map((act, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-bold text-gray-900">{act.name}</h4>
                        <p className="text-sm text-gray-600">{act.time}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        act.type === 'Headliner' ? 'bg-red-100 text-red-800' :
                        act.type === 'Co-Headliner' ? 'bg-orange-100 text-orange-800' :
                        act.type === 'Support' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {act.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Info & Amenities */}
      <section className="py-20 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Festival Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know for the perfect festival experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Essential Info */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Essential Details</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Date & Time</p>
                    <p className="text-gray-600">{festivalInfo.date} • {festivalInfo.time}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">{festivalInfo.location}</p>
                    <p className="text-sm text-gray-500">{festivalInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Admission</p>
                    <p className="text-gray-600">{festivalInfo.admission}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Car className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Parking</p>
                    <p className="text-gray-600">{festivalInfo.parking}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Age Limit</p>
                    <p className="text-gray-600">{festivalInfo.ageLimit}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Daily Schedule</h3>
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-white rounded-lg">
                    <div className="w-20 text-red-600 font-bold text-sm">{item.time}</div>
                    <div className="text-gray-700">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Festival Amenities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We've got everything covered to make your festival experience comfortable and memorable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {amenities.map((amenity, index) => {
              const IconComponent = amenity.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{amenity.name}</h3>
                  </div>
                  <p className="text-gray-600 text-base mb-4 leading-relaxed">{amenity.description}</p>
                  <div className="space-y-2">
                    {amenity.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Past Years */}
      <section className="py-20 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Festival History</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Look back at some of our most memorable KLAQ Rocks the Park festivals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastYears.map((year, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <h3 className="text-3xl font-bold text-red-600 mb-4">{year.year}</h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Headliners</p>
                  <div className="space-y-1">
                    {year.headliners.map((headliner, idx) => (
                      <p key={idx} className="font-medium text-gray-900">{headliner}</p>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">Attendance</p>
                  <p className="text-xl font-bold text-gray-900">{year.attendance}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Highlights</p>
                  <div className="space-y-1">
                    {year.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-20 bg-red-50">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Festival Guidelines</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Please review these important guidelines to ensure everyone has a safe and enjoyable experience
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{guideline}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-responsive text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Rock the Park?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            RSVP now for free admission to El Paso's biggest rock celebration. Don't miss out on this unforgettable experience!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors duration-200">
              RSVP for Free
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors duration-200">
              Get Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}