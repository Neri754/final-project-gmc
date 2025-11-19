"use client";
import Image from "next/image";

export default function CommunityPage() {
  return (
    <div className="bg-blend-darken min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1609766640916-c3db6c9df4fc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGFmcmljYW4lMjAlMjBWb2x1bnRlZXIlMjAlMjYlMjBEb25hdGUlMjBwZXRzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800"
          alt="Volunteer and Donate"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-5xl font-bold">Volunteer & Donate</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Every small act of kindness counts. Help us rescue, heal, and
              rehome animals in need across Nigeria.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16 space-y-16">
        {/* Why It Matters */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Your Support Matters
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Across Nigeria, countless dogs and cats are abandoned or mistreated
            every year. Many shelters and rescuers work tirelessly with limited
            resources to save, feed, and treat these animals. By volunteering or
            donating, you become part of a growing movement that gives animals
            the love, care, and homes they deserve.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Image
              src="https://images.unsplash.com/photo-1719312625079-9c795ef2afe8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGFmcmljYW4lMjAlMjBWb2x1bnRlZXIlMjAlMjYlMjBEb25hdGUlMjBwZXRzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800"
              alt="Helping animals"
              width={600}
              height={400}
              className="rounded-2xl shadow-md object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1592275142414-8588d1e87e11?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fFZvbHVudGVlcnMlMjBjYXJpbmclMjBmb3IlMjBkb2dzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800"
              alt="Volunteers caring for dogs"
              width={600}
              height={400}
              className="rounded-2xl shadow-md object-cover"
            />
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Ways You Can Volunteer
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Whether you’re an animal lover, student, or professional, there are
            many ways to lend a hand — your time, skills, and compassion can
            make a huge difference.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pet Care Volunteer",
                desc: "Assist shelters with feeding, cleaning, walking, and socializing pets waiting for adoption.",
                img: "https://images.unsplash.com/photo-1615476404121-5b82e6630e7d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fFZvbHVudGVlcnMlMjBjYXJpbmclMjBmb3IlMjBkb2dzJTIwYWZyaWNhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
              },
              {
                title: "Foster a Pet",
                desc: "Provide temporary homes to pets recovering from injuries or waiting for permanent families.",
                img: "https://images.unsplash.com/photo-1585679888009-e8e013d37e15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fFZvbHVudGVlcnMlMjBjYXJpbmclMjBmb3IlMjBkb2dzJTIwYWZyaWNhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
              },
              {
                title: "Education Advocate",
                desc: "Help educate schools and communities about responsible pet ownership and animal welfare.",
                img: "https://images.unsplash.com/photo-1731072868870-b98fbbc90090?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fEVkdWNhdGlvbiUyMEFkdm9jYXRlJTIwcGV0cyUyMGFuZCUyMGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
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
                <h3 className="font-semibold text-lg text-green-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Donate Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Make a Donation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Donations go directly toward food, medical care, shelter
            maintenance, and rescue operations. Even a small contribution can
            provide a rescued dog with food for a week or fund vaccinations for
            a cat.
          </p>

          <div className="bg-green-50 p-8 rounded-2xl shadow-inner">
            <p className="text-gray-700 mb-4">
              You can donate through our secure online payment system or by bank
              transfer to our official animal welfare partners. Every naira
              makes a difference!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-green-700 mb-2">
                  Account Name:
                </h3>
                <p className="text-gray-800">
                  PawsConnect Animal Rescue Initiative
                </p>

                <h3 className="text-lg font-bold text-green-700 mt-4 mb-2">
                  Bank:
                </h3>
                <p className="text-gray-800">Access Bank</p>

                <h3 className="text-lg font-bold text-green-700 mt-4 mb-2">
                  Account Number:
                </h3>
                <p className="text-gray-800">072 349 5582</p>
              </div>

              <div className="mt-8 sm:mt-0">
                <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition">
                  Donate Now ❤️
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stories */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Real Stories of Hope
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Meet some of the animals whose lives changed because of volunteers
            and donors like you.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              {
                name: "Lucky",
                story:
                  "Found injured in Lagos traffic, Lucky received medical care and now lives happily with his new family in Surulere.",
                img: "https://images.unsplash.com/photo-1588374217144-7258e5846f10?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluanVyZWQlMjBkb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
              },
              {
                name: "Mimi",
                story:
                  "Rescued from neglect, Mimi’s transformation shows the power of love. Today she’s a healthy, playful cat in Abuja.",
                img: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
              },
              {
                name: "Charlie",
                story:
                  "Once abandoned, Charlie now helps kids with autism as a certified therapy dog. His smile says it all.",
                img: "https://images.unsplash.com/photo-1588857925766-7f602c7f2e9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlcmFweSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
              },
            ].map((pet, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
              >
                <Image
                  src={pet.img}
                  alt={pet.name}
                  width={400}
                  height={250}
                  className="rounded-lg mb-3 object-cover"
                />
                <h3 className="font-semibold text-lg text-green-700 mb-2">
                  {pet.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pet.story}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
