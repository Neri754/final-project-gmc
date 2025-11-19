"use client";
import Image from "next/image";

export default function AdoptionPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1525253013412-55c1a69a5738?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBldCUyMEFkb3B0aW9uJTIwUHJvY2Vzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800"
          alt="Adoption process banner"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-5xl font-bold">Pet Adoption Process</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Adopting a pet is more than bringing home an animal — it’s about
              giving love, care, and a forever family to a loyal companion.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16 space-y-16">
        {/* Section 1 */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Adopt Instead of Buy?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Every year, thousands of homeless pets roam Nigerian cities,
            abandoned or neglected. By adopting, you’re saving a life, reducing
            street animal populations, and making space in shelters for more
            rescues. Adoption is a powerful act of kindness — one that brings
            joy to both you and your new furry friend.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Image
              src="https://images.unsplash.com/photo-1753685727276-29380e4bdc0d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc5fHxBZG9wdGVkJTIwcGV0JTIwd2l0aCUyMGFmcmljYW4lMjBvd25lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800"
              alt="Adopted pet with owner"
              width={600}
              height={400}
              className="rounded-2xl shadow-md object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1647233506263-83cdd9f98c8b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxIYXBweSUyMGFkb3B0ZWQlMjBwZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800"
              alt="Happy adopted pet"
              width={600}
              height={400}
              className="rounded-2xl shadow-md object-cover"
            />
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Step-by-Step Adoption Process
          </h2>

          <div className="space-y-10">
            {[
              {
                step: "1. Browse Available Pets",
                desc: "Start by exploring our online listings to find pets currently up for adoption. Filter by breed, age, size, and temperament to find one that suits your lifestyle.",
                img: "https://images.unsplash.com/photo-1573435567032-ff5982925350?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGRpZmZlcmVudCUyMHBldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
              },
              {
                step: "2. Submit an Application",
                desc: "Once you’ve found a pet you love, fill out an adoption application. This helps us understand your home environment, experience, and expectations to ensure the perfect match.",
                img: "https://images.unsplash.com/photo-1611700885802-4ea038105709?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBldCUyMG93bmVyJTIwYW5kJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
              },
              {
                step: "3. Meet and Greet",
                desc: "Schedule a meeting with your chosen pet at a verified shelter or foster home. This stage allows you to bond, observe behavior, and ensure compatibility before finalizing the adoption.",
                img: "https://images.unsplash.com/photo-1598050380294-2f6a8d469282?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBldHMlMjBmb3N0ZXIlMjBob21lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
              },
              {
                step: "4. Home Check & Approval",
                desc: "A representative may conduct a brief home visit or virtual check to confirm your living conditions are safe for your new companion.",
                img: "https://images.unsplash.com/photo-1718885433034-908d5bca08cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fEhvbWUlMjBDaGVjayUyMHBldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
              },
              {
                step: "5. Finalize Adoption",
                desc: "After approval, you’ll complete the paperwork and pay a small adoption fee (used for vaccinations and care). Then — congratulations! — your new family member comes home.",
                img: "https://images.unsplash.com/photo-1657672733246-9c942ace6195?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdyaXRpbmclMjB3aXRoJTIwcGV0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 grid md:grid-cols-2 gap-8 items-center"
              >
                <Image
                  src={item.img}
                  alt={item.step}
                  width={500}
                  height={350}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-2xl text-green-700 mb-3">
                    {item.step}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            What to Expect After Adoption
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Adjustment takes time. Most adopted pets need a few days or weeks to
            adapt to their new surroundings. Offer love, patience, and structure
            — set routines for feeding, walking, and playtime. Remember to visit
            a vet for health checks and vaccinations within the first week.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "Visit a Vet",
                desc: "Schedule an immediate vet visit for a wellness check and vaccination update.",
                img: "https://images.unsplash.com/photo-1700665537604-412e89a285c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmV0ZXJpbmFyaWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
              },
              {
                title: "Establish Routines",
                desc: "Consistency builds confidence — keep regular feeding, walking, and bedtime schedules.",
                img: "https://images.unsplash.com/photo-1593523229237-9df990837260?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFiaXQlMjBlYXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
              },
              {
                title: "Show Love & Patience",
                desc: "Every pet has a story. Give them space, time, and love to feel safe again.",
                img: "https://images.unsplash.com/photo-1596278852720-141ba859bbbf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA4fHxwZXRzJTIwYW5kJTIwb3duZXIlMjBwbGF5aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="rounded-lg mb-3 object-cover"
                />
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-yellow-50 p-8 rounded-2xl shadow-inner">
          <h2 className="text-2xl font-bold text-yellow-800 mb-3">
            🐶 Important Tip
          </h2>
          <p className="text-yellow-700">
            Always adopt from verified shelters or NGOs such as SPCA Lagos,
            PawsConnect Nigeria, or local animal rescue groups. Avoid online pet
            scams — legitimate adoption agencies never request large advance
            payments.
          </p>
        </section>
      </div>
    </div>
  );
}
