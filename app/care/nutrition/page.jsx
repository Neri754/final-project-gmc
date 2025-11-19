"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NutritionPage() {
  const [filter, setFilter] = useState("");
  const articles = [
    {
      id: "food-1",
      title: "Choosing the Right Commercial Food",
      img: "https://images.unsplash.com/photo-1665935518967-079ecc08cc40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBldCUyMENvbW1lcmNpYWwlMjBGb29kfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
      excerpt:
        "Learn how to read pet food labels, understand AAFCO statements, and pick a brand that fits your pet's life stage.",
    },
    {
      id: "food-2",
      title: "Balanced Homemade Diets — What You Need to Know",
      img: "https://images.unsplash.com/photo-1626869309330-c8bd97af5d9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBldHMlMjBCYWxhbmNlZCUyMEhvbWVtYWRlJTIwRGlldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
      excerpt:
        "If you prepare your pet's food at home, this guide explains how to keep it nutritionally complete and safe.",
    },
    {
      id: "food-3",
      title: "Supplements: Helpful or Hype?",
      img: "https://media.istockphoto.com/id/1056488670/photo/elevated-view-of-various-pills-bowls-with-dog-food-and-balls-on-white-surface.webp?a=1&b=1&s=612x612&w=0&k=20&c=nnsZBUL06VlZbVxMFS4bVkZa9uFjlH9Rso41J1yHy9E=",
      excerpt:
        "Which supplements actually help pets, which are unnecessary, and when to consult your vet.",
    },
  ];

  const filtered = articles.filter((a) =>
    a.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* HERO */}
      <section className="relative w-full h-[56vh]">
        <Image
          src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8"
          alt="Pet Nutrition Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent flex items-center">
          <div className="max-w-5xl px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Nutrition & Diet — Feed for Life 🍖🌿
            </h1>
            <p className="text-lg text-gray-100 max-w-2xl leading-relaxed">
              Science-backed feeding plans, label decoding, meal ideas for
              puppies, kittens, adults and seniors — everything you need to
              choose the best diet for your pet.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="/adopt"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-lg font-semibold"
              >
                Browse Adoptable Pets
              </Link>
              <a
                href="#meal-plans"
                className="inline-block bg-white/90 hover:bg-white text-emerald-700 px-5 py-3 rounded-lg font-semibold"
              >
                See Sample Meal Plans
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Nutrition Matters
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nutrition is the single most important factor in your pet’s
              long-term health. A balanced diet fuels growth, repairs tissue,
              supports the immune system, and keeps skin, coat and teeth
              healthy. Poor nutrition leads to obesity, skin problems, digestive
              issues and shortened lifespan.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
              Key nutrients explained
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                <strong>Protein:</strong> Builds muscles, enzymes and immune
                cells. Look for named animal proteins (chicken, beef, fish).
              </li>
              <li>
                <strong>Fats:</strong> Provide concentrated energy and essential
                fatty acids (omega-3/6) for skin and brain health.
              </li>
              <li>
                <strong>Carbohydrates:</strong> Energy source — whole grains,
                sweet potatoes, and legumes are better than simple starches.
              </li>
              <li>
                <strong>Vitamins & Minerals:</strong> Micronutrients that
                support all bodily functions — from bone health to vision.
              </li>
            </ul>
          </div>

          <aside className="bg-white rounded-xl shadow-md p-5">
            <h4 className="text-lg font-semibold text-emerald-700 mb-3">
              Quick Tips
            </h4>
            <ul className="text-gray-700 space-y-2">
              <li>✓ Feed by life stage: puppy/kitten, adult, senior.</li>
              <li>✓ Avoid sudden diet changes — switch over 7–10 days.</li>
              <li>✓ Measure meals to prevent overfeeding.</li>
              <li>✓ Always provide fresh water.</li>
            </ul>
            <div className="mt-6">
              <h5 className="text-sm text-gray-500 uppercase tracking-wide">
                Need help?
              </h5>
              <Link
                href="/care/vets"
                className="text-emerald-600 font-medium hover:underline"
              >
                Find a vet near you →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* COMMERCIAL VS HOMEMADE */}
      <section className="max-w-6xl mx-auto px-6 mt-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Commercial Food vs Homemade Diets
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-3">
              Commercial Food (Kibble & Canned)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Commercial diets are convenient and are formulated to meet
              nutritional guidelines when made by reputable brands. Look for an
              AAFCO statement (or equivalent) that certifies the food is
              complete and balanced for your pet’s life stage.
            </p>
            <ol className="list-decimal pl-5 text-gray-700 space-y-2">
              <li>Choose named protein sources (chicken, lamb, fish).</li>
              <li>
                Avoid vague labels like "meat by-products" without specifics.
              </li>
              <li>
                Check calorie density — active dogs may need more calories.
              </li>
            </ol>
            <div className="mt-5">
              <img
                src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fFBldCUyMGZvb2QlMjBib3dsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800"
                alt="Pet food bowl"
                className="w-full rounded-lg object-cover h-44"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-3">Homemade Diets</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Homemade meals can be healthy and tailored to sensitive pets — but
              they're easily unbalanced. Work with a veterinary nutritionist to
              ensure recipes include proper calcium, vitamins and amino acids.
            </p>
            <p className="text-gray-700">
              Common mistakes: too much liver, incorrect calcium-to-phosphorus
              ratio, and missing trace minerals. Supplementation is often
              required.
            </p>
            <div className="mt-5">
              <img
                src="https://media.istockphoto.com/id/1440469836/photo/concept-of-organic-pet-food-on-white-textured-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=IwLuH2Sg-avlTShG04lSB3xoN78-s3YRByiJ-OiIWw0="
                alt="Home cooked pet food"
                className="w-full rounded-lg object-cover h-44"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEEDING GUIDELINES */}
      <section id="meal-plans" className="max-w-6xl mx-auto px-6 mt-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Feeding Guidelines & Sample Meal Plans
        </h2>

        <p className="text-gray-700 mb-6">
          These sample plans are general — always tailor portions to breed,
          activity level, and veterinary guidance.
        </p>

        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-3">Puppy (8–24 weeks)</h3>
            <p className="text-gray-700 mb-3">
              Puppies grow quickly and need nutrient-dense food. Feed 3–4 small
              meals per day.
            </p>
            <table className="w-full text-sm text-gray-700 border-collapse">
              <thead>
                <tr className="text-left">
                  <th className="py-2">Age</th>
                  <th className="py-2">Meals / day</th>
                  <th className="py-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-2">8–12 weeks</td>
                  <td className="py-2">4</td>
                  <td className="py-2">High-calorie puppy formula</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2">3–6 months</td>
                  <td className="py-2">3</td>
                  <td className="py-2">Increase portion as activity grows</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2">6–12 months</td>
                  <td className="py-2">2–3</td>
                  <td className="py-2">
                    Transition to adult food based on breed size
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-3">
              Adult Dog — Sample Day
            </h3>
            <ul className="list-disc pl-5 text-gray-700 mb-3">
              <li>
                Breakfast: 1–2 cups high-quality kibble (adjust for
                size/activity)
              </li>
              <li>Lunch (optional): small snack or training treats</li>
              <li>
                Dinner: 1–2 cups kibble or a mix of kibble + cooked meat + veg
              </li>
              <li>Treats: Keep treats to &lt;10% of daily calories</li>
            </ul>
            <p className="text-gray-600">
              Always weigh your pet and adjust portions monthly.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-3">
              Senior Pets — Adjusting for Age
            </h3>
            <p className="text-gray-700 mb-3">
              Senior pets often need fewer calories but more joint-supporting
              nutrients. Consider diets lower in calories, higher in fiber, and
              with added glucosamine.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Checklist for Seniors</h4>
                <ul className="list-disc pl-5 text-gray-700 mt-2">
                  <li>Weight monitoring every month</li>
                  <li>Consider wet food for easier chewing</li>
                  <li>Joint supplements after vet approval</li>
                  <li>Frequent vet checkups (every 6 months)</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Senior Meal Idea</h4>
                <p className="text-gray-700">
                  Mix canned formula with a spoon of cooked fish, steamed
                  pumpkin, and a veterinarian-recommended supplement. Serve
                  slightly warm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIAL DIETS */}
      <section className="max-w-6xl mx-auto px-6 mt-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Special Diets & Food Sensitivities
        </h2>
        <p className="text-gray-700 mb-6">
          Food allergies and intolerances are common. Symptoms include itchy
          skin, chronic ear infections, and digestive upset. An elimination diet
          under vet supervision can identify triggers.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg mb-2">Grain-Free</h4>
            <p className="text-gray-700">
              Not always necessary — many pets do well on grain-inclusive diets.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg mb-2">Limited Ingredient</h4>
            <p className="text-gray-700">
              Useful for diagnosing allergies — fewer ingredients make triggers
              easier to spot.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg mb-2">
              Hypoallergenic (Prescription)
            </h4>
            <p className="text-gray-700">
              Prescription diets can be life-changing for pets with severe
              allergies.
            </p>
          </div>
        </div>
      </section>

      {/* READING LABELS */}
      <section className="max-w-6xl mx-auto px-6 mt-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          How to Read a Pet Food Label
        </h2>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <ol className="list-decimal pl-5 text-gray-700 space-y-4">
            <li>
              <strong>Ingredient List:</strong> Ingredients are listed by
              weight. The first few ingredients are the most important. Look for
              named proteins.
            </li>
            <li>
              <strong>Guaranteed Analysis:</strong> Shows minimum protein and
              fat and maximum fiber and moisture.
            </li>
            <li>
              <strong>Feeding Guidelines:</strong> Use as a starting point —
              adjust by weight.
            </li>
            <li>
              <strong>AAFCO Statement:</strong> Confirms the food is complete
              and balanced for a life stage (puppy, adult, all life stages).
            </li>
          </ol>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1666400958481-0acbb85419b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGV0JTIwZm9vZCUyMGxhYmVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800"
              alt="Pet food label"
              className="rounded-lg object-cover h-48 w-full"
            />
            <div>
              <h4 className="text-lg font-semibold mb-2">Practical example</h4>
              <p className="text-gray-700">
                If chicken meal appears before corn, the food likely has more
                animal protein. Beware of vague terms like "meat meal" without
                specifying the source.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPLEMENTS */}
      <section className="max-w-6xl mx-auto px-6 mt-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Supplements: When and Which
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h4 className="font-semibold">Omega-3 (Fish Oil)</h4>
            <p className="text-gray-700">
              Supports skin, coat and anti-inflammatory health. Recommended for
              many pets.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h4 className="font-semibold">Probiotics</h4>
            <p className="text-gray-700">
              Helpful after antibiotic courses or for chronic GI issues.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h4 className="font-semibold">Joint Support (Glucosamine)</h4>
            <p className="text-gray-700">
              Helpful for senior dogs — ask your vet for dosages based on
              weight.
            </p>
          </div>
        </div>

        <p className="text-gray-600 mt-4">
          Always consult your veterinarian before adding supplements — some can
          interact with medications or be harmful if overdosed.
        </p>
      </section>

      {/* SAMPLE RECIPES */}
      <section className="max-w-6xl mx-auto px-6 mt-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Easy Balanced Recipe (Consult Vet First)
        </h2>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">
            Chicken, Sweet Potato & Greens (for medium dogs)
          </h3>
          <ol className="list-decimal pl-5 text-gray-700 space-y-2">
            <li>400g cooked chicken (boneless)</li>
            <li>200g cooked sweet potato (mashed)</li>
            <li>100g steamed spinach or kale (chopped)</li>
            <li>1 tsp fish oil (omega-3)</li>
            <li>1/4 tsp iodized salt (only if advised by vet)</li>
          </ol>
          <p className="text-gray-600 mt-3">
            Mix and portion according to your dog’s caloric needs. This recipe
            is a starting point — consult a nutritionist to ensure completeness.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 mt-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="font-semibold text-gray-800 cursor-pointer">
              How often should I feed my dog?
            </summary>
            <p className="text-gray-700 mt-2">
              Puppies: 3–4x daily; Adults: 2x daily; Seniors: 1–2x depending on
              appetite and health.
            </p>
          </details>

          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="font-semibold text-gray-800 cursor-pointer">
              Is raw feeding safe?
            </summary>
            <p className="text-gray-700 mt-2">
              Raw diets have pros and cons. They can carry bacterial risks
              (salmonella) and may be unbalanced. If you choose raw feeding,
              work with a nutritionist and practice strict food safety.
            </p>
          </details>

          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="font-semibold text-gray-800 cursor-pointer">
              Can cats eat dog food?
            </summary>
            <p className="text-gray-700 mt-2">
              No — cats have specific needs (taurine, arachidonic acid) that
              most dog foods lack.
            </p>
          </details>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <section className="max-w-6xl mx-auto px-6 mt-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Related Guides & Recipes
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((a) => (
            <div
              key={a.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={a.img}
                alt={a.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">
                  {a.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{a.excerpt}</p>
                <Link
                  href={`/care/nutrition#${a.id}`}
                  className="text-emerald-600 mt-3 inline-block hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 mt-16 mb-24 text-center">
        <div className="bg-emerald-600 text-white rounded-xl p-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to upgrade your pet's diet?
          </h3>
          <p className="text-gray-100 max-w-2xl mx-auto mb-6">
            Book a nutrition consult with a local vet or nutritionist today —
            and give them a diet made for life.
          </p>
          <Link
            href="/care/vets"
            className="inline-block bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-white/90"
          >
            Find a Vet Near You
          </Link>
        </div>
      </section>
    </div>
  );
}
