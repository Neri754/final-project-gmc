"use client";

import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

export default function AccessoriesPage() {
  const { addToCart } = useCart();
  const router = useRouter();

  const accessories = [
    {
      id: 1,
      name: "Comfort Collar",
      price: 6500,
      image:
        "https://images.unsplash.com/photo-1705351738440-8bfa1fa5d54b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENvbWZvcnQlMjBDb2xsYXIlMjBmb3IlMjBkb2dzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
      description:
        "Durable and comfortable adjustable collar made from soft nylon. Perfect for all dog breeds, available in multiple colors.",
    },
    {
      id: 2,
      name: "Chew Toy Set",
      price: 5000,
      image:
        "https://images.unsplash.com/photo-1635536360947-886f9a65e647?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hldyUyMFRveSUyMFNldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
      description:
        "A pack of 3 chew toys designed to keep your pet’s teeth clean and reduce boredom. Great for puppies and small breeds.",
    },
    {
      id: 3,
      name: "Pet Bed (Medium)",
      price: 12000,
      image:
        "https://images.unsplash.com/photo-1504968430878-8b4dc34be661?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBldCUyMEJlZCUyMChNZWRpdW0pfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
      description:
        "Soft, cozy pet bed made from hypoallergenic materials. Easy to wash and perfect for cats or small dogs.",
    },
    {
      id: 4,
      name: "Feeding Bowl Duo",
      price: 4500,
      image:
        "https://images.unsplash.com/photo-1603512277021-0f124888c487?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZlZWRpbmclMjBCb3dsJTIwRHVvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
      description:
        "Twin stainless steel feeding bowls with a non-slip base. Ideal for food and water, designed for daily use.",
    },
    {
      id: 5,
      name: "Interactive Cat Teaser",
      price: 3800,
      image:
        "https://images.unsplash.com/photo-1646758489059-cddff648a193?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SW50ZXJhY3RpdmUlMjBDYXQlMjBUZWFzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
      description:
        "Feathered teaser wand that stimulates your cat’s instincts to chase, jump, and play. Hours of fun guaranteed!",
    },
    {
      id: 6,
      name: "Pet Leash (Reflective)",
      price: 7000,
      image:
        "https://images.unsplash.com/photo-1622231357459-87de204ff656?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFBldCUyMExlYXNoJTIwKFJlZmxlY3RpdmUpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
      description:
        "Heavy-duty reflective leash for safe nighttime walks. Designed for durability and comfort for both pet and owner.",
    },
    {
      id: 7,
      name: "Cat Tunnel Toy",
      price: 8500,
      image:
        "https://images.unsplash.com/photo-1603649222500-d801d0b47a62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhdCUyMFR1bm5lbCUyMFRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
      description:
        "Foldable tunnel toy with peek holes for endless feline fun. Encourages exercise and reduces stress for indoor cats.",
    },
    {
      id: 8,
      name: "Pet Grooming Brush",
      price: 5500,
      image:
        "https://images.unsplash.com/photo-1606730739660-79cc1ff11f9b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UGV0JTIwR3Jvb21pbmclMjBCcnVzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
      description:
        "Gentle detangling brush with soft bristles that remove loose hair while massaging your pet’s skin. Perfect for all coat types.",
    },
  ];

  const handleBuyNow = (item) => {
    addToCart(item);
    router.push("/checkout");
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">
        🐾 Toys & Accessories
      </h1>
      <p className="text-gray-600 mb-10 leading-relaxed">
        Explore a collection of premium toys and accessories crafted to make
        your pet’s life more fun, comfortable, and safe. Whether you’re shopping
        for playful chew toys, stylish collars, or cozy beds, you’ll find
        everything here to pamper your furry friend.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {accessories.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
          >
            <div className="relative w-full h-56 mb-4">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-500 mt-1 flex-grow">
              {item.description}
            </p>
            <p className="text-emerald-600 font-bold mt-3">
              ₦{item.price.toLocaleString()}
            </p>
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => addToCart(item)}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg text-sm"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(item)}
                className="flex-1 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-2 rounded-lg text-sm"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-3">
          Why Shop With Us?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          At Naija Pet Finder, we understand the bond you share with your pet.
          That’s why we only stock high-quality, vet-approved accessories and
          toys that ensure your furry friends are safe, happy, and entertained.
          Shop with confidence and give your pets the comfort they deserve.
        </p>
      </div>
    </div>
  );
}
