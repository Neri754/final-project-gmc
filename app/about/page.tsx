export default function About() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-emerald-700 mb-4">
        About NaijaPets
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        NaijaPets was created to connect pet lovers across Nigeria and promote
        adoption over buying. Our goal is to help every pet find a safe and
        loving home.
      </p>
      <div className="bg-emerald-50 rounded-xl p-6 shadow">
        <h2 className="text-2xl font-semibold text-emerald-800 mb-2">
          Our Mission
        </h2>
        <ul className="text-left list-disc list-inside text-gray-700 space-y-1">
          <li>Support animal shelters and rescuers</li>
          <li>Reduce stray animals in Nigerian cities</li>
          <li>Educate pet owners about care and responsibility</li>
        </ul>
      </div>
    </div>
  );
}
