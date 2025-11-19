import Image from "next/image";

const articles = {
  1: {
    title: "Improve Your Senior Cat’s Mobility",
    author: "Richard Rowlands",
    date: "October 26, 2024",
    img: "https://images.unsplash.com/photo-1568640347023-5e00b0b98f13",
    category: "Pet Health",
    content: `
      As your cat ages, you may notice a decrease in mobility, flexibility, and playfulness.
      But aging doesn’t have to mean slowing down completely. Gentle stretching exercises,
      warm sleeping areas, and regular vet checkups can make all the difference.
      
      🐾 **Simple Steps:**
      - Provide soft, supportive bedding.
      - Encourage short daily play sessions.
      - Add joint supplements approved by your vet.
      - Keep litter boxes and food bowls easy to reach.

      Remember, movement is medicine. With the right care, your senior cat can enjoy
      graceful golden years filled with comfort and love.
    `,
  },
  2: {
    title: "10 Ways to Keep Your Dog Young Forever!",
    author: "Dr. Debra Primovic - DVM",
    date: "December 30, 2014",
    img: "https://images.unsplash.com/photo-1619983081563-430f1db3b23b",
    category: "Dog Care",
    content: `
      Dogs age faster than humans, but with the right habits, you can help your furry friend
      feel youthful and energetic for many years.

      🐕 **Tips:**
      - Prioritize a balanced diet.
      - Make time for mental stimulation — puzzles, training games.
      - Visit the vet regularly for early detection of issues.
      - Never underestimate the power of affection and attention.

      A loved dog is a happy, healthy dog.
    `,
  },
  3: {
    title: "11 Reasons Dogs Need to See a Veterinary Surgeon",
    author: "Dr. Patricia Khuly",
    date: "August 19, 2015",
    img: "https://images.unsplash.com/photo-1588776814546-ef5b9a7c3f3b",
    category: "Diseases & Conditions",
    content: `
      Not every medical issue can be handled by a general veterinarian. Sometimes, specialized
      surgical care is essential to ensure your dog’s recovery.

      🚑 **Common Reasons:**
      - Orthopedic injuries
      - Tumor removals
      - Eye or ear surgery
      - Internal organ repairs

      Veterinary surgeons bring advanced skills, equipment, and experience that can
      significantly improve your dog’s chances of a full recovery.
    `,
  },
};

export default function ArticlePage({ params }) {
  const article = articles[params.id];
  if (!article) {
    return (
      <div className="p-10 text-center text-gray-600">Article not found.</div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-10">
      <div className="mb-6">
        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
          {article.category}
        </span>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
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
        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: article.content.replace(/\n/g, "<br/>"),
        }}
      />
    </article>
  );
}
