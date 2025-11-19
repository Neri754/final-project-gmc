"use client";

import { useState } from "react";

export default function FindCatsPage() {
  const [locationFilter, setLocationFilter] = useState("");
  const [breedFilter, setBreedFilter] = useState("");

  const cats = [
    {
      id: 1,
      name: "Mimi",
      breed: "Siamese",
      age: "2 years",
      gender: "Female",
      city: "Lagos",
      image:
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=1600&q=80",
      status: "Available",
      description:
        "Mimi is a graceful Siamese with bright blue eyes and a curious spirit. She loves warm laps, chasing ribbons, and softly meowing for attention. Perfect for cat lovers who enjoy affectionate companionship.",
    },
    {
      id: 2,
      name: "Shadow",
      breed: "British Shorthair",
      age: "3 years",
      gender: "Male",
      city: "Abuja",
      image:
        "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=1600&q=80",
      status: "Adopted",
      description:
        "Shadow is calm, intelligent, and loves quiet corners. He’s house-trained, independent, and very low maintenance. Adopted by a kind family in Maitama but his siblings are still waiting for homes!",
    },
    {
      id: 3,
      name: "Luna",
      breed: "Persian",
      age: "1 year",
      gender: "Female",
      city: "Port Harcourt",
      image:
        "https://images.unsplash.com/photo-1665851486292-4da23410c539?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFBlcnNpYW4lMjBjYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
      status: "Available",
      description:
        "Luna has a soft fluffy coat and loves to be brushed. She’s playful, gentle, and gets along well with children. She’s fully vaccinated and ready for adoption from our PH rescue center.",
    },
    {
      id: 4,
      name: "Tigger",
      breed: "Tabby",
      age: "4 years",
      gender: "Male",
      city: "Ibadan",
      image:
        "https://images.unsplash.com/photo-1625060241508-22488e1e9264?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VGFiYnklMjBjYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
      status: "Available",
      description:
        "Tigger is adventurous and fun-loving. He loves exploring shelves, chasing light reflections, and curling up in boxes. Ideal for homes that enjoy active, playful cats.",
    },
    {
      id: 5,
      name: "Nala",
      breed: "Maine Coon",
      age: "5 years",
      gender: "Female",
      city: "Enugu",
      image:
        "https://images.unsplash.com/photo-1614381016538-5f80a0852fea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWFpbmUlMjBDb29uJTIwY2F0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
      status: "Adopted",
      description:
        "Nala is a gentle giant — fluffy, patient, and loving. She’s been adopted by a cat café in Enugu and now spends her days being adored by visitors.",
    },
  ];

  const filteredCats = cats.filter(
    (cat) =>
      (locationFilter === "" ||
        cat.city.toLowerCase().includes(locationFilter.toLowerCase())) &&
      (breedFilter === "" ||
        cat.breed.toLowerCase().includes(breedFilter.toLowerCase()))
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-emerald-700 mb-4">
        🐱 Find Cats for Adoption
      </h1>
      <p className="text-gray-700 mb-10 leading-relaxed">
        Looking to add a soft purring friend to your home? These beautiful cats
        across Nigeria are waiting for their forever families. Each one has been
        rescued, vaccinated, and given medical clearance for adoption.
      </p>

      <img
        src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800"
        alt="Cats waiting for adoption"
        className="rounded-2xl shadow-lg mb-10"
      />

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Filter by location (e.g. Lagos, Abuja)"
          className="border border-gray-300 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:border-emerald-600"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by breed (e.g. Persian, Tabby)"
          className="border border-gray-300 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:border-emerald-600"
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
        />
      </div>

      {/* Cat Cards */}
      {filteredCats.length === 0 ? (
        <p className="text-center text-gray-500 italic">
          No cats match your filters. Try a different city or breed.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCats.map((cat) => (
            <div
              key={cat.id}
              className="border border-emerald-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold text-emerald-700">
                    {cat.name}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      cat.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {cat.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-1">
                  🐾 Breed: <span className="font-medium">{cat.breed}</span>
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  📍 Location: <span className="font-medium">{cat.city}</span>
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  🎂 Age: <span className="font-medium">{cat.age}</span> | 🚹{" "}
                  Gender: <span className="font-medium">{cat.gender}</span>
                </p>
                <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Adoption Info Section */}
      <div className="mt-16 bg-emerald-50 border border-emerald-200 rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
          💚 Thinking About Adopting a Cat?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Cats make wonderful companions — calm, intelligent, and full of
          personality. Whether you’re looking for a lap cat or a curious
          explorer, there’s a perfect feline waiting for you.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Every adoption includes vaccination, spaying/neutering, and a wellness
          check. We also provide post-adoption support and connect you with
          nearby vet clinics for follow-up care.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Choosing adoption saves lives — not just of the cat you bring home,
          but of another one who will take their place in a rescue shelter.
        </p>
      </div>

      <div className="text-center mt-10 text-gray-600 text-sm">
        🐱 Ready to bring a cat home?{" "}
        <span className="text-emerald-600 font-medium cursor-pointer hover:underline">
          Fill out the adoption request form
        </span>{" "}
        or visit one of our partner shelters in your city.
      </div>
    </section>
  );
}
