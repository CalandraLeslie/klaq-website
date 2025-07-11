import { Metadata } from 'next';
import { FileText, Download, Calendar, Users, Shield, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'EEO Reports | 95.5 KLAQ',
  description: 'Equal Employment Opportunity reports and compliance information for KLAQ 95.5 FM El Paso.',
  keywords: 'KLAQ, EEO, Equal Employment Opportunity, FCC compliance, diversity reports, employment',
};

interface EEOReport {
  year: string;
  period: string;
  fileUrl: string;
  fileSize: string;
  description: string;
}

const eeoReports: EEOReport[] = [
  {
    year: '2024',
    period: 'Annual Report',
    fileUrl: '/documents/eeo-2024-annual.pdf',
    fileSize: '2.1 MB',
    description: 'EEO Annual Report for broadcast year 2024'
  },
  {
    year: '2023',
    period: 'Annual Report',
    fileUrl: '/documents/eeo-2023-annual.pdf',
    fileSize: '1.9 MB',
    description: 'EEO Annual Report for broadcast year 2023'
  },
  {
    year: '2022',
    period: 'Annual Report',
    fileUrl: '/documents/eeo-2022-annual.pdf',
    fileSize: '2.0 MB',
    description: 'EEO Annual Report for broadcast year 2022'
  },
  {
    year: '2021',
    period: 'Annual Report',
    fileUrl: '/documents/eeo-2021-annual.pdf',
    fileSize: '1.8 MB',
    description: 'EEO Annual Report for broadcast year 2021'
  },
  {
    year: '2020',
    period: 'Annual Report',
    fileUrl: '/documents/eeo-2020-annual.pdf',
    fileSize: '1.7 MB',
    description: 'EEO Annual Report for broadcast year 2020'
  }
];

const outreachActivities = [
  {
    title: 'University of Texas at El Paso Career Fair',
    date: 'March 15, 2024',
    description: 'Participated in UTEP\'s annual career fair to promote broadcasting careers and internship opportunities.'
  },
  {
    title: 'El Paso Community College Media Program',
    date: 'February 8, 2024',
    description: 'Guest speaking engagement about careers in radio broadcasting and media production.'
  },
  {
    title: 'High School Broadcasting Workshop',
    date: 'January 22, 2024',
    description: 'Conducted workshop for local high school students interested in radio and media careers.'
  },
  {
    title: 'Border Radio Festival',
    date: 'November 10, 2023',
    description: 'Sponsored and participated in regional radio industry networking event.'
  },
  {
    title: 'Women in Media El Paso',
    date: 'October 5, 2023',
    description: 'Partnership with local organization promoting women\'s advancement in media careers.'
  },
  {
    title: 'Latino Broadcasting Association Meeting',
    date: 'September 18, 2023',
    description: 'Active participation in LBA events to promote diversity in broadcasting.'
  }
];

export default function EEOReportsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-12 h-12 text-red-500" />
              <span className="text-red-500 font-semibold text-lg">FCC COMPLIANCE</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Equal Employment
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Opportunity Reports
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              KLAQ 95.5 FM is committed to equal employment opportunity and maintaining 
              compliance with all Federal Communications Commission (FCC) requirements 
              for broadcast station employment practices.
            </p>
          </div>
        </div>
      </section>

      {/* EEO Policy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our EEO Policy</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                KLAQ 95.5 FM provides equal employment opportunities to all employees and 
                applicants for employment without regard to race, color, religion, sex, 
                national origin, age, disability, or genetics. We are committed to a work 
                environment that supports, inspires, and respects all individuals.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 text-red-600 mr-3" />
                  Equal Opportunity Commitment
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Recruitment, hiring, and promotion based on qualifications and merit
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Fair compensation and benefits without discrimination
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Professional development opportunities for all employees
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Workplace free from harassment and discrimination
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Reasonable accommodations for qualified individuals with disabilities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Reports Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Annual EEO Reports</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our annual Equal Employment Opportunity reports as filed with the FCC. 
              These reports detail our employment practices and outreach efforts.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {eeoReports.map((report) => (
              <div key={`${report.year}-${report.period}`} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                        <FileText className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{report.year}</h3>
                        <p className="text-sm text-gray-600">{report.period}</p>
                      </div>
                    </div>
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <p className="text-gray-700 mb-4">{report.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{report.fileSize}</span>
                    <a
                      href={report.fileUrl}
                      className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outreach Activities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Outreach Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our ongoing efforts to reach diverse communities and promote equal employment 
              opportunities in broadcasting and media careers.
            </p>
          </div>

          <div className="space-y-6">
            {outreachActivities.map((activity, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{activity.title}</h3>
                      <span className="text-sm text-gray-500 font-medium">{activity.date}</span>
                    </div>
                    <p className="text-gray-700">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Info className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-bold">EEO Contact Information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-800 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4 text-red-400">EEO Officer</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Name:</strong> Sarah Martinez</p>
                  <p><strong>Title:</strong> Human Resources Director</p>
                  <p><strong>Email:</strong> eeo@klaq.com</p>
                  <p><strong>Phone:</strong> (915) 544-9595</p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4 text-red-400">Station Address</h3>
                <div className="space-y-2 text-gray-300">
                  <p>KLAQ 95.5 FM</p>
                  <p>6600 Montana Avenue</p>
                  <p>El Paso, TX 79925</p>
                  <p><strong>Business Hours:</strong> Monday-Friday, 9AM-5PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-800 rounded-xl">
              <p className="text-gray-300 leading-relaxed">
                For employment opportunities, EEO concerns, or questions about our equal 
                employment practices, please contact our EEO Officer. All inquiries will 
                be handled confidentially and in accordance with applicable laws and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
