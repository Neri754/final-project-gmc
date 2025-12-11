"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HealthWellness() {
  const [search, setSearch] = useState("");

  const articles = [
    {
      id: 1,
      title: "How to Help Your Cat Stay Active Indoors",
      img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D",
      content: `Indoor cats need stimulation to prevent boredom and obesity. Try rotating toys, adding cat trees, or creating 
      window perches so your cat can watch the outdoors safely. Daily play sessions of at least 15 minutes will help 
      maintain both physical and mental fitness.`,
    },
    {
      id: 2,
      title: "Keeping Your Dog’s Coat Shiny and Healthy",
      img: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
      content: `A shiny coat isn’t just about beauty—it’s a reflection of your dog’s internal health.
        Grooming regularly helps distribute natural oils that protect the skin and keep fur glossy.
        Ensure your dog’s diet includes omega-3 fatty acids from fish oil, and avoid over-bathing, which can dry out the skin.`,
    },
    {
      id: 3,
      title: "Essential Vet Visits for Every Pet Owner",
      img: "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmV0ZXJpbmFyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
      content: `Routine veterinary checkups detect problems before they become serious. Pets should see a vet at least once a year, 
      and twice a year for senior animals. Vaccinations, dental exams, and weight monitoring are key to preventing common diseases.`,
    },
  ];

  const filtered = articles.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1556228453-efd0d0c5a69e"
          alt="Pet Health Hero"
          fill
          className="object-cover"
        />
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1753685722861-e57bf709b71f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhlYWx0aCUyMGFuZCUyMHdlbGxuZXNzJTIwcGV0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800')",
          }}
          className="absolute bg-blend-darken rounded-lg object-cover inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-3">Health & Wellness</h1>
          <p className="text-lg max-w-2xl">
            Everything you need to keep your furry friends happy, healthy, and
            thriving.
          </p>
        </div>
      </section>

      {/* Search */}
      <div className="max-w-4xl mx-auto my-10 px-6">
        <input
          type="text"
          placeholder="Search health tips..."
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Articles Section */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {filtered.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={article.img}
              alt={article.title}
              width={600}
              height={400}
              className="object-cover h-48 w-full"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {article.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {article.content.substring(0, 180)}...
              </p>
              <Link
                href={`/care/health/${article.id}`}
                className="text-emerald-600 font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Wellness Tips */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Wellness Essentials for Every Pet 🐾
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1717616729494-10c4c47c1e23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBldHMlMjBFeGVyY2lzZSUyMCUyNiUyMFBsYXl0aW1lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800"
              alt="Dog wellness"
              width={700}
              height={500}
              className="rounded-xl mb-5 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-3">Exercise & Playtime</h3>
            <p className="text-gray-700 leading-relaxed">
              Daily activity keeps pets fit, improves mood, and strengthens your
              bond. Dogs benefit from long walks and fetch, while cats enjoy
              laser toys and climbing towers. Playtime also helps reduce anxiety
              and behavioral problems.
            </p>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1608408891486-f5cade977d19?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0cyUyME51dHJpdGlvbiUyMCUyNiUyMFByZXZlbnRpdmUlMjBDYXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800"
              alt="Vet care"
              width={700}
              height={500}
              className="rounded-xl mb-5 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-3">
              Nutrition & Preventive Care
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Balanced nutrition is key to good health. Choose food made from
              quality ingredients, rich in proteins and vitamins. Routine vet
              visits, vaccinations, and parasite prevention keep your pet
              healthy for years to come.
            </p>
          </div>
        </div>
      </section>

      {/* Did You Know */}
      <section className="bg-emerald-100 mt-20 py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-3">Did You Know? 🐶🐱</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Pets who receive regular veterinary care live an average of{" "}
            <strong>3 years longer</strong>
            than those who don’t. Preventive care saves lives and lowers medical
            costs over time.
          </p>
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Related Reads
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "5 Warning Signs Your Pet Needs a Vet",
              img: "https://images.unsplash.com/photo-1663043501785-05d17c625253?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxyYWJiaXQlMjBhbmQlMjB2ZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
            },
            {
              title: "Natural Remedies for Pet Anxiety",
              img: "https://images.unsplash.com/photo-1568572933382-74d440642117",
            },
            {
              title: "Creating a Calm Space for Recovery",
              img: "https://images.unsplash.com/photo-1504968430878-8b4dc34be661?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBldCUyMHJlY292ZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
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
                  Explore detailed insights from expert veterinarians on
                  maintaining your pet’s holistic wellbeing.
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
