import { projects } from "@/data";
import Link from "next/link";

export default function Explore() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-emerald-700 mb-8 text-center">
        Explore Pets for Adoption
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((projects) => (
          <div
            key={projects.pet_id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-4 text-center transition-all"
          >
            <img
              src={projects.pet_image}
              alt={projects.pet_name}
              className="w-full h-48 object-cover rounded-xl mb-3"
            />
            <h2 className="text-xl font-bold text-emerald-700">
              {projects.pet_name}
            </h2>
            <p className="text-gray-600">
              {projects.pet_type} • {projects.pet_age}
            </p>
            <p className="text-gray-500 italic mb-3">{projects.pet_location}</p>
            <Link
              href={`/pets/${projects.pet_id}`}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
