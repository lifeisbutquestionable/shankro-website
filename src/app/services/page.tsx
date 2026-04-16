import React from 'react';
import Navbar from '@/components/Navbar';

const services = [
  {
    title: "RO Assembly & Installation",
    description: "We source components from trusted brands like Orbino, HiTech, Blueshell and Campure — assembled by hand, calibrated to your water source, installed within 6 hours of confirmation.",
    price: "₹3,000 — ₹7,000 depending on configuration",
    icon: "🛠️"
  },
  {
    title: "Annual Maintenance Contract (AMC)",
    description: "Regular care is cheaper than emergency repair. Our AMC plans keep your RO running clean all year — with scheduled visits, priority support and zero surprises.",
    price: "Starts from ₹1,499/year",
    icon: "📅"
  },
  {
    title: "One-Time Service Visit",
    description: "Not on an AMC? No problem. We'll come, run a full TDS diagnosis, inspect the pre-filter and tank, and fix what needs fixing — honestly.",
    price: "Labour: ₹450 | Full Service: ₹3,500 — ₹6,000",
    icon: "🔧"
  },
  {
    title: "Shifting & Reinstallation",
    description: "Moving homes or offices? Your RO comes with you. We carefully uninstall, transport-ready pack, and reinstall at your new location — fully calibrated.",
    price: "Quoted based on distance and complexity",
    icon: "🚚"
  },
  {
    title: "Commercial & Office RO Solutions",
    description: "Restaurants, bars, offices, clinics — high usage demands high capacity. We assemble and maintain commercial grade units built for 1 litre per hour output and beyond.",
    price: "Custom quotes based on assessment",
    icon: "🏢"
  }
];

export default function Services() {
  return (
    <<divdiv className="min-h-screen bg-gray-50">
      <<NavbarNavbar />
      <<headerheader className="py-16 px-6 text-center bg-white border-b">
        <<hh1 className="text-4xl font-bold text-gray-900">Everything Your RO Will Ever Need</h1>
        <<pp className="text-gray-500 mt-4 text-lg">Under One Roof</p>
      </header>
      
      <<mainmain className="max-w-6xl mx-auto py-16 px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <<divdiv key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <<divdiv className="text-4xl mb-4">{service.icon}</div>
            <<hh2 className="text-xl font-bold mb-3">{service.title}</h2>
            <<pp className="text-gray-600 mb-6 flex-grow">{service.description}</p>
            <<divdiv className="pt-4 border-t font-semibold text-blue-600">{service.price}</div>
          </div>
        ))}
      </main>

      <<sectionsection className="bg-blue-600 text-white py-12 text-center px-6">
        <<divdiv className="max-w-3xl mx-auto">
          <<hh2 className="text-2xl font-bold mb-2">Honest Diagnosis Guarantee</h2>
          <<pp className="text-lg opacity-90">"We check TDS first. We only recommend what your RO actually needs. No upselling. Ever."</p>
        </div>
      </section>
    </div>
  );
}
