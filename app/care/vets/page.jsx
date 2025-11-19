// app/care/vet-directory/page.jsx
export default function VetDirectoryPage() {
  const vetClinics = [
    {
      name: "The Ark Veterinary Clinic",
      city: "Lagos",
      image:
        "https://content3.jdmagicbox.com/v2/comp/chennai/g7/044pxx44.xx44.090501111247.s5g7/catalogue/ark-veterinary-clinic-thiruvanmiyur-chennai-veterinary-doctors-kkpeg7qdrt.jpg",
      description:
        "Located in Lekki Phase 1, The Ark provides full-service veterinary care including vaccinations, surgeries, dental cleaning, and grooming. They also run a mobile vet service for home visits within Lagos.",
      phone: "+234 806 223 4156",
      address: "14 Admiralty Way, Lekki Phase 1, Lagos",
    },
    {
      name: "VetCare Animal Hospital",
      city: "Abuja",
      image:
        "https://images.ctfassets.net/rt5zmd3ipxai/2MZqrQmsBjjn706OkVelUj/608e7893fa5f14a254da782f649efd27/Clinic-5.jpg",
      description:
        "VetCare Animal Hospital in Wuse 2 is known for its modern facilities and compassionate team. They handle everything from basic vaccinations to orthopedic surgeries, and they also provide pet nutrition advice.",
      phone: "+234 803 872 1199",
      address: "Plot 42 Aminu Kano Crescent, Wuse 2, Abuja",
    },
    {
      name: "Animal Planet Veterinary Services",
      city: "Port Harcourt",
      image:
        "https://img.freepik.com/free-photo/medium-shot-veterinarian-with-stethoscope_23-2149143849.jpg",
      description:
        "A trusted name in pet healthcare in Rivers State. Animal Planet offers diagnostics, grooming, and 24-hour emergency response. Their in-house pharmacy and lab make treatment fast and convenient.",
      phone: "+234 909 522 8890",
      address: "32 Rumuola Road, Port Harcourt, Rivers State",
    },
    {
      name: "Calabar Pet & Wildlife Clinic",
      city: "Calabar",
      image:
        "https://bestcarepetclinic.com/wp-content/uploads/2023/08/363826646_112771545234292_6170063634125038922_n.jpg",
      description:
        "Specializing in domestic pets and exotic animals, this clinic provides comprehensive vet care and advice on wildlife rescue. Known for its friendly approach and animal-first philosophy.",
      phone: "+234 701 223 9014",
      address: "9 Marian Road, Calabar, Cross River",
    },
    {
      name: "HappyPaws Veterinary Centre",
      city: "Ibadan",
      image:
        "https://agronigeria.ng/wp-content/uploads/2025/07/Unlicenced-Vet.jpg",
      description:
        "HappyPaws offers routine vaccinations, grooming, boarding, and pet adoption support. The clinic has a play area for socializing pets and offers educational sessions for new pet owners.",
      phone: "+234 802 778 2340",
      address: "No. 5 Oluyole Estate, Ring Road, Ibadan",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-emerald-700 mb-6">
        🏥 Veterinary Directory in Nigeria
      </h1>
      <p className="text-gray-700 mb-10 leading-relaxed">
        Finding trusted veterinary care is essential for keeping your pet
        healthy. Below is a curated list of reputable clinics, hospitals, and
        animal care centers across Nigeria. Whether you need vaccinations,
        emergency services, or grooming, these clinics provide expert and
        compassionate care for your furry and feathered friends.
      </p>

      <img
        src="https://makawaovet.com/files/2011/05/soft-tissue-surgery.jpg"
        alt="Vet clinic in Nigeria"
        className="rounded-xl shadow-lg mb-12"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {vetClinics.map((clinic, idx) => (
          <div
            key={idx}
            className="border border-emerald-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <img
              src={clinic.image}
              alt={clinic.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-emerald-700 mb-1">
                {clinic.name}
              </h2>
              <p className="text-sm text-gray-500 mb-2">{clinic.city}</p>
              <p className="text-gray-700 mb-3">{clinic.description}</p>
              <p className="text-gray-600 text-sm">
                📍 {clinic.address}
                <br />
                📞 {clinic.phone}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mt-12">
        <h3 className="text-xl font-semibold text-emerald-700 mb-2">
          🩺 Why Regular Vet Visits Matter
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Pets can’t communicate when they’re in pain. Routine check-ups help
          detect hidden illnesses, ensure vaccinations are up-to-date, and keep
          your pet’s nutrition on track. Building a relationship with your vet
          ensures your companion gets the best possible care throughout their
          life.
        </p>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600 text-sm">
          Know a great veterinary clinic we should add? Contact us at{" "}
          <span className="font-medium text-emerald-600">
            support@naijapetplace.com
          </span>
          .
        </p>
      </div>
    </section>
  );
}
