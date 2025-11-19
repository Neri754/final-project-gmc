"use client";

import { useState } from "react";

export default function FindDogsPage() {
  const [locationFilter, setLocationFilter] = useState("");
  const [breedFilter, setBreedFilter] = useState("");

  const dogs = [
    {
      id: 1,
      name: "Buddy",
      breed: "Labrador Retriever",
      age: "2 years",
      gender: "Male",
      city: "Lagos",
      image:
        "https://images.unsplash.com/photo-1554456854-55a089fd4cb2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGFicmFkb3IlMjBSZXRyaWV2ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
      status: "Available",
      description:
        "Buddy is a playful and affectionate Labrador who loves water and long walks. He’s well-behaved, house-trained, and great with kids. Perfect for active families in Lagos looking for a loyal companion.",
    },
    {
      id: 2,
      name: "Bella",
      breed: "German Shepherd",
      age: "3 years",
      gender: "Female",
      city: "Abuja",
      image:
        "https://images.unsplash.com/photo-1621951714307-0f9b8070a9b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8R2VybWFuJTIwU2hlcGhlcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
      status: "Adopted",
      description:
        "Bella is a beautiful, intelligent Shepherd with excellent obedience training. She’s protective yet gentle and would make a great guard and family dog. Recently adopted by a family in Wuse.",
    },
    {
      id: 3,
      name: "Rocky",
      breed: "Rottweiler",
      age: "4 years",
      gender: "Male",
      city: "Port Harcourt",
      image:
        "https://images.unsplash.com/photo-1665333354010-050f08f35907?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Um90dHdlaWxlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
      status: "Available",
      description:
        "Rocky is a confident, strong Rottweiler with a calm personality. He’s loyal, alert, and perfect for homes looking for a protective yet loving companion. Great around adults and well-socialized with other dogs.",
    },
    {
      id: 4,
      name: "Chichi",
      breed: "Poodle",
      age: "1 year",
      gender: "Female",
      city: "Ibadan",
      image:
        "https://images.unsplash.com/photo-1605244863941-3a3ed921c60d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UG9vZGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
      status: "Available",
      description:
        "Chichi is a sweet little poodle with soft fur and a curious nature. She’s gentle, hypoallergenic, and loves cuddles. Ideal for apartments and families with children or elderly members.",
    },
    {
      id: 5,
      name: "Toby",
      breed: "Bulldog",
      age: "5 years",
      gender: "Male",
      city: "Calabar",
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QnVsbGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
      status: "Adopted",
      description:
        "Toby is a calm and chunky Bulldog with a big heart. He loves naps and belly rubs. Recently adopted by a loving home in Calabar after 6 months of care and training.",
    },
  ];

  const filteredDogs = dogs.filter(
    (dog) =>
      (locationFilter === "" ||
        dog.city.toLowerCase().includes(locationFilter.toLowerCase())) &&
      (breedFilter === "" ||
        dog.breed.toLowerCase().includes(breedFilter.toLowerCase()))
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-emerald-700 mb-4">
        🐶 Find Dogs for Adoption
      </h1>
      <p className="text-gray-700 mb-10 leading-relaxed">
        Thousands of dogs across Nigeria are looking for their forever homes.
        Use the filters below to explore adorable companions by location or
        breed. Every dog listed here has been rescued, vaccinated, and assessed
        by certified animal shelters and rescue centers.
      </p>

      <img
        src="https://images.unsplash.com/photo-1621951825147-bcf82eed6249?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fERvZ3MlMjB3YWl0aW5nJTIwZm9yJTIwYWRvcHRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800"
        alt="Dogs waiting for adoption"
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
          placeholder="Filter by breed (e.g. Labrador, Poodle)"
          className="border border-gray-300 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:border-emerald-600"
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
        />
      </div>

      {/* Dog Cards */}
      {filteredDogs.length === 0 ? (
        <p className="text-center text-gray-500 italic">
          No dogs match your filters. Try adjusting your search.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredDogs.map((dog) => (
            <div
              key={dog.id}
              className="border border-emerald-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
            >
              <img
                src={dog.image}
                alt={dog.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold text-emerald-700">
                    {dog.name}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      dog.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {dog.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-1">
                  🐾 Breed: <span className="font-medium">{dog.breed}</span>
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  📍 Location: <span className="font-medium">{dog.city}</span>
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  🎂 Age: <span className="font-medium">{dog.age}</span> | 🚹
                  Gender: <span className="font-medium">{dog.gender}</span>
                </p>
                <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                  {dog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Adoption Info Section */}
      <div className="mt-16 bg-emerald-50 border border-emerald-200 rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
          💚 How to Adopt
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          To adopt a dog, reach out to our partner shelters through our adoption
          request form. You’ll be asked to provide your location, home type, and
          prior pet experience. After approval, a home visit or virtual check
          will be scheduled to ensure your environment is pet-safe.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Adopting through NaijaPetPlace means you’re giving a dog a new chance
          at life — every adoption includes vaccination records, a basic health
          check, and post-adoption guidance from our team.
        </p>
      </div>

      <div className="text-center mt-10 text-gray-600 text-sm">
        🐾 Want to list a dog for adoption?{" "}
        <span className="text-emerald-600 font-medium cursor-pointer hover:underline">
          Contact us here
        </span>
        .
      </div>
    </section>
  );
}
