// import Link from "next/link";

// export default function Home() {
//   return (
//     <section
//       style={{ backgroundImage: "url('/images/happyCat.jpg')" }}
//       className="text-center h-[40rem] bg-cover bg-center bg-no-repeat"
//     >
//       <div className="pt-30 pr-[27rem]">
//         <h1 className="text-5xl font-extrabold text-emerald-700 mb-4">
//           Find Your Next Best Friend 🐶🐱
//         </h1>
//         <p className="text-lg text-gray-500 font-bold max-w-2xl mx-auto mb-8">
//           Welcome to <strong>NaijaPetPlace.</strong> Nigeria’s community for
//           adopting and rehoming loving pets. Browse adorable companions or post
//           a pet for adoption.
//         </p>

//         <div className="space-x-4">
//           <Link
//             href="/explore"
//             className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700"
//           >
//             Explore Pets
//           </Link>
//           <Link
//             href="/add"
//             className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500"
//           >
//             Post a Pet
//           </Link>
//         </div>

//         <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h3 className="text-3xl font-bold text-emerald-700">+500</h3>
//             <p className="text-gray-500">Adoptions Completed</p>
//           </div>
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h3 className="text-3xl font-bold text-emerald-700">36 States</h3>
//             <p className="text-gray-500">Across Nigeria</p>
//           </div>
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h3 className="text-3xl font-bold text-emerald-700">100%</h3>
//             <p className="text-gray-500">Love Guaranteed ❤️</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import { PawPrint, Heart, Store, Dog, Cat, ShoppingBag } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-amber-500 py-20 px-6 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-emerald-800 mb-6 leading-tight">
            Find Your Perfect Pet in Nigeria 🐾
          </h1>
          <p className="text-lg text-gray-700 mb-10">
            Welcome to <strong>Naija Pet Place</strong> — your trusted platform
            for pet adoption, care, and shopping. Whether you’re looking to
            adopt, care, or spoil your furry friend, we’re here to make every
            moment joyful and rewarding.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/adopt"
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700"
            >
              Adopt a Pet
            </Link>
            <Link
              href="/shop/food"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600"
            >
              Shop Pet Supplies
            </Link>
          </div>
        </div>

        <div className="relative w-full h-[450px] mt-16 rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/images/allDogs.jpg"
            alt="Happy pets in Nigeria"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-emerald-800 mb-6">
            We’re Building a Happier Pet Community in Nigeria
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Naija Pet Place connects loving families with pets in need of homes.
            Beyond adoption, we provide grooming tips, training guides, and
            health advice to ensure your companion thrives. Our marketplace also
            supports Nigerian pet stores, giving you easy access to premium
            food, accessories, and veterinary services — all in one place.
          </p>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-amber-300 py-20 px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-emerald-800 mb-12">
          Explore Our Categories
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Adopt a Pet",
              desc: "Find dogs, cats, and other loving pets ready for adoption.",
              icon: <Heart className="w-10 h-10 text-orange-500" />,
              link: "/adopt",
              img: "/images/diffPets.jpg",
            },
            {
              title: "Pet Care Guides",
              desc: "Learn everything about grooming, training, and health.",
              icon: <PawPrint className="w-10 h-10 text-emerald-600" />,
              link: "/care/health",
              img: "/images/petCare.webp",
            },
            {
              title: "Shop Pet Supplies",
              desc: "Get top-quality pet foods, toys, and accessories delivered to you.",
              icon: <Store className="w-10 h-10 text-emerald-600" />,
              link: "/shop/food",
              img: "/images/petShop.jpg",
            },
          ].map((cat, i) => (
            <Link
              key={i}
              href={cat.link}
              className="bg-white shadow-md rounded-3xl overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="relative w-full h-60">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">{cat.icon}</div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                  {cat.title}
                </h3>
                <p className="text-gray-600">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Pets */}
      <section className="bg-white py-20 px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-emerald-800 mb-12">
          Meet Our Adorable Friends 🐶🐱
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Max the Labrador",
              img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
              desc: "A friendly and loyal companion, perfect for families.",
            },
            {
              name: "Cleo the Persian Cat",
              img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80&w=800",
              desc: "Soft, elegant, and affectionate. Cleo loves attention!",
            },
            {
              name: "Rocky the German Shepherd",
              img: "https://images.unsplash.com/photo-1662939092439-67d3d9d733b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdlcm1hbiUyMHNoZXBoZXJkJTIwZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
              desc: "Strong, intelligent, and great for protection and love.",
            },
            {
              name: "Luna the Kitten",
              img: "https://images.unsplash.com/photo-1603314585442-ee3b3c16fbcf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpdHRlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
              desc: "Playful and full of curiosity. A heart-melting companion.",
            },
          ].map((pet, i) => (
            <div
              key={i}
              className="bg-emerald-50 rounded-3xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative w-full h-60">
                <Image
                  src={pet.img}
                  alt={pet.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-emerald-700">
                  {pet.name}
                </h3>
                <p className="text-gray-600 text-sm">{pet.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Stores */}
      <section className="bg-amber-300 py-20 px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-emerald-800 mb-12">
          Our Partner Pet Stores
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Pawfect Mart",
              location: "Lekki, Lagos",
              img: "/images/pawMart.JPG",
            },
            {
              name: "Happy Paws Abuja",
              location: "Wuse II, Abuja",
              img: "/images/PawMartAbj.jpg",
            },
            {
              name: "TailWag Stores",
              location: "Port Harcourt, Rivers",
              img: "/images/happytails.jpg",
            },
          ].map((store, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-lg"
            >
              <div className="relative w-full h-56">
                <Image
                  src={store.img}
                  alt={store.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-emerald-700">
                  {store.name}
                </h3>
                <p className="text-gray-600">{store.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-emerald-800 mb-12">
          What Our Users Say ❤️
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Chinonso, Lagos",
              quote:
                "Naija Pet Place made adopting my dog so easy! I found Max in just two days and he’s brought so much joy to my home.",
            },
            {
              name: "Fatima, Abuja",
              quote:
                "The shop section is amazing — I ordered food and toys for my cat and they arrived the next day. Highly recommend!",
            },
            {
              name: "Emeka, Port Harcourt",
              quote:
                "Finally, a Nigerian platform that truly cares about pets! Their grooming and vet directory helped me find the best care.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-emerald-50 p-6 rounded-2xl shadow text-center"
            >
              <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
              <h4 className="text-emerald-700 font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-emerald-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Connected 🐾</h2>
        <p className="mb-8 text-lg">
          Subscribe to get updates on new pets, pet care tips, and exclusive
          deals.
        </p>
        <form className="flex justify-center gap-4 max-w-xl mx-auto px-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-2/3 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
