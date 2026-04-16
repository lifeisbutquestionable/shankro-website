import React from 'react';
import Navbar from '@/components/Navbar';

export default function Reviews() {
  return (
    <<divdiv className="min-h-screen bg-gray-50">
      <<NavbarNavbar />
      <<headerheader className="py-16 px-6 text-center bg-white border-b">
        <<hh1 className="text-4xl font-bold text-gray-900">300+ Families and Businesses Trust ShankRO</h1>
        <<pp className="text-gray-500 mt-4 text-lg">Honest service, every single time.</p>
      </header>

      <<mainmain className="max-w-6xl mx-auto py-16 px-6">
        {/* Video Placeholder */}
        <<divdiv className="mb-20 aspect-video max-w-3xl mx-auto bg-gray-200 rounded-3xl flex items-center justify-center text-gray-500 shadow-inner">
          <<divdiv className="text-center">
            <<spanspan className="text-5xl mb-4 block">▶️</span>
            <<pp className="font-medium">Shashank's Intro Video</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <<divdiv className="grid md:grid-cols-3 gap-8 mb-20">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <<divdiv key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <<divdiv className="flex text-yellow-400 mb-4">★★★★★</div>
              <<pp className="text-gray-600 italic mb-6">"Best RO service in Bhopal. They actually checked the TDS before suggesting a full service. Very honest and professional."</p>
              <<divdiv className="font-bold text-gray-900">— Happy Client {i}</div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <<divdiv className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center mb-20">
          {[
            { label: "Experience", value: "6+ Years", icon: "⏳" },
            { label: "Clients Served", value: "300+", icon: "👥" },
            { label: "Installation", value: "6-Hour", icon: "⚡" },
            { label: "Coverage", value: "All MP", icon: "📍" },
            { label: "Experts in", value: "Multi-brand", icon: "🛠️" },
          ].map((stat, idx) => (
            <<divdiv key={idx} className="bg-blue-50 p-6 rounded-2xl">
              <<divdiv className="text-2xl mb-2">{stat.icon}</div>
              <<divdiv className="text-xl font-bold text-blue-700">{stat.value}</div>
              <<divdiv className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <<divdiv className="max-w-3xl mx-auto text-center bg-blue-600 text-white py-12 rounded-3xl shadow-xl">
          <<hh2 className="text-3xl font-bold mb-4">Our Core Principle</h2>
          <<pp className="text-2xl italic opacity-90">"ShankRO is built on one principle — if your water isn't clean, our job isn't done."</p>
        </div>
      </main>
    </div>
  );
}
