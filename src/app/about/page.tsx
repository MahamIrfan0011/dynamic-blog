import { FaPenNib, FaLightbulb } from "react-icons/fa";
import Navbar from "../components/Navbar"
export default function About() {
  return (
    <>
    <Navbar/>
    <div className="relative bg-gradient-to-r from-purple-500 to-blue-500 text-white p-10 rounded-lg shadow-lg max-w-4xl mx-auto mt-16">
      {/* Floating Icon */}
      <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-white text-purple-600 p-3 rounded-full shadow-lg">
        <FaPenNib size={30} />
      </div>

      {/* Title with Icon */}
      <h1 className="text-4xl font-extrabold flex items-center justify-center gap-3">
        <FaLightbulb className="text-yellow-400" />
        About Me
      </h1>

      {/* Description */}
      <p className="text-lg mt-6 text-center leading-relaxed">
        Hey there! 👋 I'm a **passionate writer, coder, and tech enthusiast** who loves to explore and share knowledge.
        From **technology trends** to **coding hacks**, I bring insightful content that sparks curiosity and innovation. 🚀✨
      </p>

      {/* Fun Fact Section */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md text-black text-center transform hover:scale-105 transition">
        <p className="font-semibold">🔥 Fun Fact:</p>
        <p className="italic">I drink more coffee than I should while coding! ☕💻</p>
      </div>

      {/* Call to Action Button */}
      <div className="mt-8 text-center">
        <a
          href="/"
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-yellow-500 transition"
        >
          Read My Blogs →
        </a>
      </div>
    </div>
    </>
  );
}
