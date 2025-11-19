"use client";
import Image from "next/image";
import Link from "next/link";

export default function HealthWellnessPage() {
  return (
    <div className="bg-emerald-50 min-h-screen py-16 px-6 lg:px-20">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold text-emerald-800 mb-4">
          Pet Health & Wellness
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Keeping your pet healthy isn’t just about vet visits—it’s about
          consistent care, proper nutrition, mental stimulation, and regular
          checkups. Learn how to maintain your pet’s overall well-being for a
          long, joyful life together.
        </p>
      </header>

      {/* Hero Image */}
      <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg mb-20">
        <Image
          src="https://images.unsplash.com/photo-1571707175780-7b9e2c0fa604?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEhlYWx0aHklMjBoYXBweSUyMHBldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800"
          alt="Healthy happy pets"
          fill
          className="object-cover"
        />
      </div>

      {/* Physical Health Section */}
      <section className="bg-white rounded-3xl shadow-lg p-10 mb-20">
        <h2 className="text-3xl font-bold text-emerald-700 mb-6">
          🩺 Physical Health Essentials
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Just like humans, pets need consistent physical care to stay healthy.
          This includes vaccinations, proper nutrition, hydration, regular
          exercise, and routine vet checkups. A well-monitored pet is more
          likely to live a long, happy life.
        </p>

        <ul className="list-disc pl-8 text-gray-700 space-y-2 mb-6">
          <li>Schedule annual vet visits for checkups and vaccines.</li>
          <li>
            Keep track of deworming and flea/tick prevention using a monthly
            reminder.
          </li>
          <li>
            Brush your pet’s coat regularly to prevent matting and skin issues.
          </li>
          <li>
            Maintain a clean living environment to reduce risk of infections.
          </li>
        </ul>

        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-md mb-6">
          <Image
            src="https://images.unsplash.com/photo-1703733570180-60c254b84d38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFZldCUyMGV4YW1pbmluZyUyMHBldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800"
            alt="Vet examining pet"
            fill
            className="object-cover"
          />
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">
          Never ignore early signs of illness such as fatigue, vomiting, loss of
          appetite, or sudden changes in behavior. Early detection and treatment
          can make all the difference.
        </p>
      </section>

      {/* Nutrition Section */}
      <section className="bg-white rounded-3xl shadow-lg p-10 mb-20">
        <h2 className="text-3xl font-bold text-emerald-700 mb-6">
          🍖 Nutrition & Diet
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          A balanced diet is the cornerstone of good pet health. The right food
          provides energy, supports immunity, and enhances coat shine. Always
          choose age-appropriate meals, and consult your vet about any special
          dietary needs.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1593523229237-9df990837260?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFBldCUyMGVhdGluZyUyMGhlYWx0aHklMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800"
              alt="Pet eating healthy food"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1632236568054-12f36ecee2f6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800"
              alt="Healthy dog food"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">
          Avoid feeding pets human food high in salt, fat, or sugar. Clean
          water, quality protein, and portion control are key to maintaining a
          healthy weight and reducing risks of diabetes or heart disease.
        </p>

        <div className="mt-6 text-center">
          <Link
            href="/shop/food"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700"
          >
            Shop Healthy Pet Foods →
          </Link>
        </div>
      </section>

      {/* Mental & Emotional Health */}
      <section className="bg-white rounded-3xl shadow-lg p-10 mb-20">
        <h2 className="text-3xl font-bold text-emerald-700 mb-6">
          🧠 Mental & Emotional Wellness
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Pets experience stress and anxiety too. Mental stimulation through
          play, affection, and training is vital for a happy pet. Lack of
          attention can lead to destructive behavior, depression, or aggression.
        </p>

        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-md mb-6">
          <Image
            src="https://images.unsplash.com/photo-1758543535665-ca0c1c64d9d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEhhcHB5JTIwcGV0cyUyMHBsYXlpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800"
            alt="Happy pets playing"
            fill
            className="object-cover"
          />
        </div>

        <ul className="list-disc pl-8 text-gray-700 space-y-2">
          <li>Engage your pet in daily interactive play or walks.</li>
          <li>Rotate toys weekly to prevent boredom.</li>
          <li>Use calming music or diffusers during stressful times.</li>
          <li>Give your pet safe spaces to relax undisturbed.</li>
        </ul>
      </section>

      {/* Wellness Products */}
      <section className="bg-white rounded-3xl shadow-lg p-10 mb-20">
        <h2 className="text-3xl font-bold text-emerald-700 mb-6">
          🌿 Recommended Wellness Products
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          Explore our top-rated pet wellness products—handpicked to support your
          furry friend’s health from head to paw.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Multivitamin Chews",
              img: "https://images.unsplash.com/photo-1730388843790-f753ecf9ba94?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TXVsdGl2aXRhbWluJTIwQ2hld3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
              desc: "Delicious vitamin-packed chews that support joint and immune health.",
            },
            {
              name: "Organic Paw Balm",
              img: "https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmFsbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
              desc: "Moisturizes dry paws and keeps them soft and protected year-round.",
            },
            {
              name: "Herbal Calming Spray",
              img: "https://images.unsplash.com/photo-1568274515506-f2db7b6b6878?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SGVyYmFsJTIwQ2FsbWluZyUyMFNwcmF5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
              desc: "Naturally soothes anxious pets during travel or fireworks.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-emerald-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="relative w-full h-64">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <Link
                  href="/shop/wellness"
                  className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold text-emerald-800 mb-4">
          Your Pet Deserves the Best Care
        </h2>
        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
          Invest in your pet’s health today—because every tail wag and purr is
          worth it. Regular care, good nutrition, and love are the ultimate
          recipe for wellness.
        </p>
        <Link
          href="/care/nutrition"
          className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600"
        >
          Explore More Wellness Tips →
        </Link>
      </section>
    </div>
  );
}
