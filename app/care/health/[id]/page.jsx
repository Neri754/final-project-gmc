import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Improve Your Senior Cat’s Mobility",
    author: "Richard Rowlands",
    date: "October 26, 2024",
    img: "https://images.unsplash.com/photo-1710322928695-c7fb49886cb1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGNhdCUyMGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
    category: "Pet Health",
    desc: "As cats age, they may become less flexible and mobile — but with the right care, your feline friend can stay active and comfortable.",
    content: `
      As cats grow older, their joints may become stiff and their energy levels decline.
      However, with attentive care, your senior cat can continue to live a happy, active life.

      🐾 **Tips to Help:**
      - Provide a soft, warm sleeping area.
      - Encourage light playtime daily.
      - Use ramps or stairs for easier access to high places.
      - Consult your vet about safe supplements for joint health.

      Remember: aging is natural, but slowing down doesn’t have to mean stopping. 
      Keep your cat moving, and they’ll thank you with years of purrs and cuddles.
    `,
  },
  {
    id: 2,
    title: "10 Ways to Keep Your Dog Young Forever!",
    author: "Dr. Debra Primovic - DVM",
    date: "December 30, 2014",
    img: "https://images.unsplash.com/photo-1611173622933-91942d394b04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
    category: "Dog Care",
    desc: "Your dog may age faster than you do, but these lifestyle changes can keep their tail wagging for years to come.",
    content: `
      Dogs thrive on love, structure, and adventure. If you want your pup to stay young at heart, focus on maintaining a balanced routine.

      🐕 **Ways to Keep Them Youthful:**
      - Daily walks and playtime.
      - Balanced nutrition with plenty of lean proteins.
      - Annual vet visits for early detection.
      - Regular grooming and dental hygiene.

      Your love and consistency will be the secret to their eternal puppyhood.
    `,
  },
  {
    id: 3,
    title: "11 Reasons Dogs Need to See a Veterinary Surgeon",
    author: "Dr. Patricia Khuly",
    date: "August 19, 2015",
    img: "https://images.unsplash.com/photo-1700665537650-1bf37979aae0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHx2ZXRlcmluYXJ5JTIwc3VyZ2VvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
    category: "Diseases & Conditions",
    desc: "Some medical conditions require expert surgical attention. Here’s when to consult a board-certified veterinary surgeon.",
    content: `
      General vets handle most care, but complex surgeries need a specialist. 
      A board-certified veterinary surgeon can perform delicate operations that save lives.

      🚑 **Reasons for Referral:**
      - Fractures and orthopedic injuries.
      - Cancer removals or internal surgery.
      - Eye and ear procedures.
      - Complicated dental extractions.

      Trust your vet’s referral — it can make all the difference.
    `,
  },
];

export default async function ArticlePage({ params }) {
  const resolvedParams = await params;
  const articleId = Number(resolvedParams.id);
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return (
      <div className="p-10 text-center text-gray-600">
        ❌ Article not found.
      </div>
    );
  }

  const related = articles.filter((a) => a.id !== articleId);

  return (
    <article className="max-w-5xl mx-auto px-6 py-10">
      <div className="mb-4">
        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
          {article.category}
        </span>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-3">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        ✍️ {article.author} • {article.date}
      </p>

      <Image
        src={article.img}
        alt={article.title}
        width={900}
        height={500}
        className="rounded-xl object-cover mb-8"
      />

      <div
        className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-10"
        dangerouslySetInnerHTML={{
          __html: article.content.replace(/\n/g, "<br/>"),
        }}
      />

      <div className="mb-12">
        <Link
          href="/care/health"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition"
        >
          ← Back to Health & Wellness
        </Link>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-5">
        Related Articles 🐾
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {related.map((r) => (
          <Link key={r.id} href={`/care/health/${r.id}`}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 transition overflow-hidden">
              <img
                src={r.img}
                alt={r.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-emerald-700">
                  {r.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">{r.desc}</p>
                <p className="text-xs text-gray-400 mt-3">
                  By {r.author} • {r.date}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
