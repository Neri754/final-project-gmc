"use client";

import { useState } from "react";

export default function FindOtherPetsPage() {
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const pets = [
    {
      id: 1,
      name: "Coco",
      type: "Parrot",
      age: "2 years",
      gender: "Female",
      city: "Lagos",
      image:
        "https://images.unsplash.com/photo-1504579264001-833438f93df2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFBhcnJvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
      status: "Available",
      description:
        "Coco is a talkative African Grey Parrot who loves to mimic human voices and whistle tunes. She’s highly intelligent, enjoys being hand-fed, and loves gentle interaction. Her favorite treat is sunflower seeds.",
    },
    {
      id: 2,
      name: "Bunny",
      type: "Rabbit",
      age: "1 year",
      gender: "Male",
      city: "Abuja",
      image:
        "https://images.unsplash.com/photo-1589952283406-b53a7d1347e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFJhYmJpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
      status: "Available",
      description:
        "Bunny is a soft white rabbit with long ears and a calm temperament. He enjoys chewing on hay, hopping around gardens, and being cuddled. Perfect for families with children or pet lovers who enjoy quiet company.",
    },
    {
      id: 3,
      name: "Spike",
      type: "Turtle",
      age: "8 years",
      gender: "Male",
      city: "Port Harcourt",
      image:
        "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHVydGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
      status: "Adopted",
      description:
        "Spike is a Red-Eared Slider turtle who loves basking in sunlight and swimming in calm water. He was rescued from a local pond and now lives happily with his new owner. We still have other turtles available for adoption.",
    },
    {
      id: 4,
      name: "Goldie",
      type: "Hamster",
      age: "8 months",
      gender: "Female",
      city: "Ibadan",
      image:
        "https://images.unsplash.com/photo-1612267168669-679c961c5b31?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhhbXN0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
      status: "Available",
      description:
        "Goldie is an energetic golden hamster who loves running on her wheel and burrowing in sawdust. She’s small but full of personality, ideal for people living in apartments or small homes.",
    },
    {
      id: 5,
      name: "Blue",
      type: "Macaw",
      age: "3 years",
      gender: "Male",
      city: "Enugu",
      image:
        "https://images.unsplash.com/photo-1510272839903-5112a2e44bc6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE1hY2F3fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
      status: "Available",
      description:
        "Blue is a colorful Blue-and-Yellow Macaw who loves attention and interaction. He can say a few words, mimic laughter, and enjoys daily flying time. His feathers are stunning and well-maintained.",
    },
    {
      id: 6,
      name: "Snow",
      type: "Guinea Pig",
      age: "1.5 years",
      gender: "Female",
      city: "Benin City",
      image:
        "https://images.unsplash.com/photo-1516025455112-e73ad04772e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEd1aW5lYSUyMFBpZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
      status: "Available",
      description:
        "Snow is a fluffy white guinea pig who loves to squeak when she’s happy. She enjoys fresh vegetables, quiet surroundings, and playing with her chew toys. Great for first-time pet owners.",
    },
    {
      id: 7,
      name: "Pebbles",
      type: "Tortoise",
      age: "10 years",
      gender: "Male",
      city: "Jos",
      image:
        "https://images.unsplash.com/photo-1508455858334-95337ba25607?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VG9ydG9pc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
      status: "Available",
      description:
        "Pebbles is a slow but steady friend. He enjoys sunbathing and munching on lettuce leaves. Tortoises are known for their longevity, and Pebbles is no exception — a lifelong companion for nature lovers.",
    },
    {
      id: 8,
      name: "Lilo",
      type: "Ferret",
      age: "2 years",
      gender: "Female",
      city: "Calabar",
      image:
        "https://images.unsplash.com/photo-1551148408-9b3cc5e1add6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RmVycmV0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
      status: "Adopted",
      description:
        "Lilo is a playful ferret who loves exploring tunnels and napping in cozy spots. She’s been adopted by a family with children and spends her days running around playfully. Her siblings are still waiting for adoption!",
    },
    {
      id: 9,
      name: "Zee",
      type: "Hedgehog",
      age: "9 months",
      gender: "Male",
      city: "Kano",
      image:
        "https://images.unsplash.com/photo-1605369179814-cfc635981c03?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhlZGdlaG9nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
      status: "Available",
      description:
        "Zee is a cute hedgehog who loves being held gently and exploring small spaces. He rolls into a tiny ball when startled but quickly warms up to gentle voices. Quiet, low maintenance, and perfect for indoor living.",
    },
    {
      id: 10,
      name: "Ruby",
      type: "Lovebird",
      age: "1 year",
      gender: "Female",
      city: "Abeokuta",
      image:
        "https://images.unsplash.com/photo-1457014749444-4dfbbd2426d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TG92ZWJpcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
      status: "Available",
      description:
        "Ruby is a cheerful lovebird who sings every morning and loves perching near sunlight. She enjoys flying around safely in open spaces and cuddling with her partner bird. Her vibrant colors make her stand out.",
    },
  ];

  const filteredPets = pets.filter(
    (pet) =>
      (locationFilter === "" ||
        pet.city.toLowerCase().includes(locationFilter.toLowerCase())) &&
      (typeFilter === "" ||
        pet.type.toLowerCase().includes(typeFilter.toLowerCase()))
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-emerald-700 mb-4">
        🐾 Find Other Pets for Adoption
      </h1>
      <p className="text-gray-700 mb-10 leading-relaxed">
        From colorful parrots to gentle rabbits and calm turtles, we have a wide
        variety of pets waiting to be adopted across Nigeria. These animals have
        been rescued, treated, and nurtured by our partner shelters to ensure
        they are healthy and ready for loving homes.
      </p>

      <img
        src="https://t3.ftcdn.net/jpg/08/78/21/48/360_F_878214857_LosWt38WtGoSCwFe7ObAvm45hEqF532K.jpg"
        alt="Other pets adoption banner"
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
          placeholder="Filter by type (e.g. Parrot, Rabbit)"
          className="border border-gray-300 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:border-emerald-600"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        />
      </div>

      {/* Pet Cards */}
      {filteredPets.length === 0 ? (
        <p className="text-center text-gray-500 italic">
          No pets match your filters. Try another location or pet type.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPets.map((pet) => (
            <div
              key={pet.id}
              className="border border-emerald-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold text-emerald-700">
                    {pet.name}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      pet.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {pet.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-1">
                  🐾 Type: <span className="font-medium">{pet.type}</span>
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  📍 Location: <span className="font-medium">{pet.city}</span>
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  🎂 Age: <span className="font-medium">{pet.age}</span> | 🚹{" "}
                  Gender: <span className="font-medium">{pet.gender}</span>
                </p>
                <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                  {pet.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Info Section */}
      <div className="mt-16 bg-emerald-50 border border-emerald-200 rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
          💚 Adopting Other Pets
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Not every home is fit for a dog or cat — some people find joy in
          smaller, unique pets like parrots, rabbits, or turtles. These animals
          require special care but offer a rewarding companionship experience.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We provide care guidelines, feeding recommendations, and training tips
          for every adoption. You’ll also receive post-adoption support and
          connections to local vets who specialize in exotic pets.
        </p>
      </div>

      <div className="text-center mt-10 text-gray-600 text-sm">
        🐾 Ready to meet your new companion?{" "}
        <span className="text-emerald-600 font-medium cursor-pointer hover:underline">
          Start the adoption process
        </span>{" "}
        or visit our partner shelters today.
      </div>
    </section>
  );
}
