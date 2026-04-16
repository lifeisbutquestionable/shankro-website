import React from 'react';
import Navbar from '@/components/Navbar';

export default function Contact() {
  return (
    <<divdiv className="min-h-screen bg-gray-50">
      <<NavbarNavbar />
      <<headerheader className="py-16 px-6 text-center bg-white border-b">
        <<hh1 className="text-4xl font-bold text-gray-900">Let's Get Your Water Right</h1>
        <<pp className="text-gray-500 mt-4 text-lg">Quick booking and honest consultation</p>
      </header>

      <<mainmain className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        {/* Left Column - Quick Contact */}
        <<divdiv className="space-y-8">
          <<divdiv className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <<hh2 className="text-2xl font-bold mb-6">Quick Contact</h2>
            <<divdiv className="space-y-6">
              <<aa href="https://wa.me/your-number" className="flex items-center p-4 rounded-2xl bg-green-50 text-green-700 font-bold hover:bg-green-100 transition">
                <<spanspan className="text-2xl mr-4">💬</span>
                WhatsApp: Click to chat
              </a>
              <<divdiv className="flex items-center p-4 rounded-2xl bg-blue-50 text-blue-700 font-bold">
                <<spanspan className="text-2xl mr-4">📞</span>
                Call Shashank directly
              </div>
              <<divdiv className="flex items-center p-4 rounded-2xl bg-gray-50 text-gray-700 font-medium">
                <<spanspan className="text-2xl mr-4">📍</span>
                Based in Bhopal — serving all of MP
              </div>
              <<divdiv className="flex items-center p-4 rounded-2xl bg-gray-50 text-gray-700 font-medium">
                <<spanspan className="text-2xl mr-4">⏰</span>
                Mon-Sat 8AM-8PM | Sun Emergency
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Booking Form */}
        <<divdiv className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <<hh2 className="text-2xl font-bold mb-6">Book a Service</h2>
          <<formform className="space-y-4">
            <<divdiv className="grid grid-cols-2 gap-4">
              <<inputinput type="text" placeholder="Name" className="p-3 border rounded-xl w-full outline-blue-600" />
              <<inputinput type="text" placeholder="Phone Number" className="p-3 border rounded-xl w-full outline-blue-600" />
            </div>
            <<inputinput type="text" placeholder="City" className="p-3 border rounded-xl w-full outline-blue-600" />
            <<selectselect className="p-3 border rounded-xl w-full outline-blue-600 bg-white">
              <<optionoption>Installation</option>
              <<optionoption>Service Visit</option>
              <<optionoption>AMC</option>
              <<optionoption>Shifting</option>
              <<optionoption>Commercial</option>
            </select>
            <<inputinput type="datetime-local" className="p-3 border rounded-xl w-full outline-blue-600" />
            <<textareatextarea placeholder="Additional notes" className="p-3 border rounded-xl w-full h-32 outline-blue-600"></textarea>
            <<buttonbutton className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition">
              Confirm Booking
            </button>
            <<pp className="text-center text-gray-500 text-sm">We'll confirm within 2 hours</p>
          </form>
        </div>
      </main>
    </div>
  );
}
