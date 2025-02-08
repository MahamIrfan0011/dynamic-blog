import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/Navbar"

export default function Contact() {
  return (
    <>
    <Navbar/>
    <div className="max-w-2xl mx-auto p-8 mt-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl rounded-lg text-center">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in">📬 Get in Touch</h1>
      <p className="text-lg opacity-90 mb-6">
        Let's connect! Feel free to reach out for any queries or collaborations.
      </p>

      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-center justify-center space-x-4 hover:scale-105 transition-transform duration-200">
          <FaEnvelope className="text-2xl" />
          <a href="mailto:example@email.com" className="text-lg font-semibold hover:underline">
            example@email.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-center space-x-4 hover:scale-105 transition-transform duration-200">
          <FaPhoneAlt className="text-2xl" />
          <a href="tel:+1234567890" className="text-lg font-semibold hover:underline">
            +123 456 7890
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center space-x-4 hover:scale-105 transition-transform duration-200">
          <FaMapMarkerAlt className="text-2xl" />
          <p className="text-lg font-semibold">Karachi, Pakistan</p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-8">
        <a
          href="mailto:example@email.com"
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition transform hover:scale-105"
        >
          Send a Message →
        </a>
      </div>
    </div>
    </>
  );
}

  