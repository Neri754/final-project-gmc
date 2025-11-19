// app/care/grooming/page.jsx
export default function GroomingPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-emerald-700 mb-6">
        Pet Grooming Made Easy: Complete Care Guide
      </h1>

      <p className="text-gray-700 mb-8 leading-relaxed">
        Grooming isn’t just about making your pet look cute — it’s an important
        part of their health and happiness. Regular grooming keeps their skin
        clean, coat shiny, and helps you detect health issues early. Whether
        you’re a new pet parent or a longtime animal lover, this guide will help
        you master the basics of home grooming in Nigeria’s warm climate.
      </p>

      <img
        src="https://images.unsplash.com/photo-1733210872526-863e2f16cf39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGRvZyUyMGdyb29taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800"
        alt="Happy dog being groomed"
        className="rounded-xl shadow-lg mb-10"
      />

      {/* Bathing Section */}
      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold text-emerald-600 mb-3">
            🛁 Bathing Tips for Every Pet
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Most dogs need a bath every 3–4 weeks, while cats generally groom
            themselves and may only need occasional cleaning. Always use
            <span className="font-medium"> pet-safe shampoos</span> — never
            human soap or detergent, as they can dry out their skin. For pets in
            humid regions like Lagos or Port Harcourt, ensure they are dried
            completely to prevent fungus or skin infections.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Brush your pet before a bath to remove tangles.</li>
            <li>
              Use lukewarm water and avoid spraying directly in their ears or
              eyes.
            </li>
            <li>Rinse thoroughly — leftover shampoo can cause itching.</li>
            <li>Dry with a clean towel or low-heat hair dryer.</li>
          </ul>

          <img
            src="https://images.unsplash.com/photo-1755259779830-1a7487d14204?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fERvZyUyMGJlaW5nJTIwYmF0aGVkfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800"
            alt="Dog being bathed"
            className="rounded-xl shadow-lg mt-6"
          />
        </div>

        {/* Brushing Section */}
        <div>
          <h2 className="text-2xl font-semibold text-emerald-600 mb-3">
            ✂️ Brushing & Coat Care
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Brushing removes dirt, prevents mats, and spreads natural oils that
            keep the coat shiny. The type of brush you use depends on your pet’s
            fur:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>
              <span className="font-medium">Short-haired pets:</span> Use a soft
              bristle brush weekly.
            </li>
            <li>
              <span className="font-medium">Long-haired breeds:</span> Use a
              slicker brush or comb daily to prevent tangles.
            </li>
            <li>
              <span className="font-medium">Cats:</span> Brush gently in the
              direction of their fur — it helps reduce shedding and hairballs.
            </li>
          </ul>
          <p className="text-gray-700 mt-3">
            Regular brushing also strengthens your bond and gives you a chance
            to check for ticks, wounds, or dry spots on the skin.
          </p>

          <img
            src="https://images.unsplash.com/photo-1611173622933-91942d394b04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJydXNoaW5nJTIwYSUyMGRvZydzJTIwZnVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800"
            alt="Brushing a dog's fur"
            className="rounded-xl shadow-lg mt-6"
          />
        </div>

        {/* Nail Care Section */}
        <div>
          <h2 className="text-2xl font-semibold text-emerald-600 mb-3">
            🐾 Nail & Paw Care
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Long nails can make walking painful for pets and even cause
            long-term joint issues. If you hear their nails clicking on the
            floor, it’s time for a trim. Use a pet nail clipper — not human ones
            — and be careful not to cut too close to the pink area (the quick),
            which contains nerves and blood vessels.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Trim nails every 3–4 weeks.</li>
            <li>
              Clean between paw pads after walks — dirt and thorns can hide
              there.
            </li>
            <li>
              Apply a small amount of paw balm if pads are dry or cracked.
            </li>
          </ul>

          <img
            src="https://images.unsplash.com/photo-1615759027239-3db0a8c2c0e3?auto=format&fit=crop&w=1600&q=80"
            alt="Trimming pet nails"
            className="rounded-xl shadow-lg mt-6"
          />
        </div>

        {/* Ear & Eye Care Section */}
        <div>
          <h2 className="text-2xl font-semibold text-emerald-600 mb-3">
            👂 Ear & Eye Cleaning
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Check your pet’s ears weekly for dirt, wax buildup, or redness.
            Gently clean using a cotton pad with vet-approved ear cleaner —
            never insert anything deep inside. For eyes, wipe gently with a damp
            cloth to remove tear stains or dust.
          </p>

          <img
            src="https://images.unsplash.com/photo-1568953530595-c748c83e0429?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2xlYW5pbmclMjBkb2cncyUyMGVhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800"
            alt="Cleaning dog's ears"
            className="rounded-xl shadow-lg mt-6"
          />
        </div>

        {/* Oral Hygiene Section */}
        <div>
          <h2 className="text-2xl font-semibold text-emerald-600 mb-3">
            🦷 Oral Hygiene
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Dental care is often overlooked, but it’s vital. Brush your pet’s
            teeth a few times a week with a pet-friendly toothpaste (never human
            toothpaste). You can also provide dental treats to reduce plaque and
            bad breath.
          </p>

          <img
            src="https://images.unsplash.com/photo-1750279785897-ba67fd35dde1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QnJ1c2hpbmclMjBwZXQlMjB0ZWV0aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800"
            alt="Brushing pet teeth"
            className="rounded-xl shadow-lg mt-6"
          />
        </div>

        {/* Professional Grooming Section */}
        <div>
          <h2 className="text-2xl font-semibold text-emerald-600 mb-3">
            💈 When to Visit a Professional Groomer
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If your pet has matted fur, skin irritation, or needs a
            breed-specific haircut, consider visiting a certified groomer. Many
            Nigerian cities now have mobile pet groomers who come to your home.
            Professional grooming every 6–8 weeks keeps your pet comfortable and
            stylish.
          </p>

          <img
            src="https://images.unsplash.com/photo-1625279138836-e7311d5c863a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UHJvZmVzc2lvbmFsJTIwcGV0JTIwZ3Jvb21pbmclMjBzYWxvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800"
            alt="Professional pet grooming salon"
            className="rounded-xl shadow-lg mt-6"
          />
        </div>

        {/* Final Tip Section */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mt-10">
          <h3 className="text-xl font-semibold text-emerald-700 mb-2">
            💚 Tip from NaijaPetPlace
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Grooming isn’t just about hygiene — it’s bonding time. Talk to your
            pet during brushing, give small treats after each session, and make
            grooming something they look forward to. A clean, well-groomed pet
            is a happy pet — and a happy pet makes a happier home.
          </p>
        </div>
      </div>
    </section>
  );
}
