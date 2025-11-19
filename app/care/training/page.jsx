"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TrainingPage() {
  const [filter, setFilter] = useState("");

  const guides = [
    {
      id: 1,
      title: "Puppy Obedience 101: Building Trust Early",
      img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHB1cHB5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
      content: `Training your puppy from an early age sets the foundation for lifelong good behavior. 
      Positive reinforcement—rewarding good actions with treats and praise—is the most effective method. 
      Avoid punishment, as it creates fear instead of respect. Focus on short, fun sessions to keep your puppy engaged.`,
    },
    {
      id: 2,
      title: "Correcting Unwanted Barking in Dogs",
      img: "https://images.unsplash.com/photo-1667389904111-7ce08861d6ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZyUyMGJhcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
      content: `Dogs bark to communicate, but excessive barking often means boredom or anxiety. 
      Ensure your dog gets enough exercise, mental stimulation, and attention. 
      Use commands like "quiet" with consistency, and reward silence with treats.`,
    },
    {
      id: 3,
      title: "Understanding Your Cat’s Behavior",
      img: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
      content: `Cats communicate through subtle body language. A twitching tail can mean irritation, 
      while a slow blink is a sign of affection. 
      Understanding these signals can help prevent scratches, improve bonding, and make your cat feel safer at home.`,
    },
  ];

  const filtered = guides.filter((g) =>
    g.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero */}
      <section className="relative w-full h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6"
          alt="Pet Training Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Training & Behavior</h1>
          <p className="text-lg max-w-2xl">
            Build a stronger bond with your pet through positive training,
            patience, and understanding.
          </p>
        </div>
      </section>

      {/* Search */}
      <div className="max-w-4xl mx-auto my-10 px-6">
        <input
          type="text"
          placeholder="Search training guides..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none"
        />
      </div>

      {/* Guides */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {filtered.map((guide) => (
          <div
            key={guide.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={guide.img}
              alt={guide.title}
              width={600}
              height={400}
              className="object-cover h-48 w-full"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {guide.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {guide.content.substring(0, 180)}...
              </p>
              <Link
                href="#"
                className="text-emerald-600 font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Step-by-step Training Section */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Step-by-Step Obedience Training 🐕
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1599397101162-7305f6cf8db1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nJTIwdHJhaW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800"
              alt="Training a dog"
              width={700}
              height={500}
              className="rounded-xl mb-5 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-3">
              Step 1: Establish Commands
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Start with simple commands like “sit,” “stay,” and “come.” Use a
              cheerful tone and reward success immediately with treats.
              Repetition and consistency are key—train at the same time each
              day.
            </p>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1741942732060-cf4b1058fc7f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZyUyMHJld2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800"
              alt="Dog training treats"
              width={700}
              height={500}
              className="rounded-xl mb-5 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-3">
              Step 2: Reward Good Behavior
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Positive reinforcement teaches pets what behavior earns rewards.
              Offer praise and treats for calmness, focus, and obedience. Over
              time, you can reduce treats and maintain good habits through
              affection and play.
            </p>
          </div>
        </div>
      </section>

      {/* Behavior Solutions */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Common Behavior Challenges & Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Chewing Furniture",
              tip: "Redirect your pet’s attention to chew toys, and remove access to items like shoes and cushions.",
              img: "https://images.unsplash.com/photo-1692742999757-11fa13bf3300?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBldCUyMENoZXdpbmclMjBGdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
            },
            {
              title: "Separation Anxiety",
              tip: "Leave your scent near them, play calming music, and practice short departures that gradually increase.",
              img: "https://images.unsplash.com/photo-1623929904298-1cb4d3dc00aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBldCUyMFNlcGFyYXRpb24lMjBBbnhpZXR5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
            },
            {
              title: "Aggressive Behavior",
              tip: "Stay calm, never yell, and consult a trainer. Identify triggers and work slowly to rebuild trust.",
              img: "https://images.unsplash.com/photo-1758543535771-0d080100cf47?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHBldCUyMEFnZ3Jlc3NpdmUlMjBCZWhhdmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={600}
                height={400}
                className="object-cover h-48 w-full"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Did You Know */}
      <section className="bg-emerald-100 mt-20 py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-3">Did You Know? 🐾</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Well-trained pets experience less stress and are more likely to be
            adopted quickly. Training strengthens your pet’s mind, boosts
            confidence, and builds a lifetime of trust.
          </p>
        </div>
      </section>

      {/* Related Reads */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Related Reads
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "How to Introduce a New Pet to Your Home",
              img: "https://images.unsplash.com/photo-1629898539103-dfad2ab7e3bf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5ldyUyMFBldCUyMHRvJTIwWW91ciUyMEhvbWUlMjByYWJiaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
            },
            {
              title: "Games That Improve Pet Intelligence",
              img: "https://images.unsplash.com/photo-1662973544396-2885509b1d90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg4fHxHYW1lcyUyMFRoYXQlMjBJbXByb3ZlJTIwUGV0JTIwSW50ZWxsaWdlbmNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
            },
            {
              title: "The Power of Positive Reinforcement",
              img: "https://images.unsplash.com/photo-1505762929116-cada876eea35?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBhcnJvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={600}
                height={400}
                className="object-cover h-48 w-full"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  Helpful advice and inspiration to guide you through every step
                  of pet parenthood.
                </p>
                <a
                  href="#"
                  className="text-emerald-600 font-medium hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
