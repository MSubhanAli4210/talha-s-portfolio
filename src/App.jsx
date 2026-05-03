export default function App() {
  const services = [
    "Brand Identity Design",
    "Logo & Packaging",
    "Social Media Creatives",
    "Brochures & Flyers",
    "Business Cards & Stationery",
    "Offset & Digital Printing",
    "Large Format Printing",
    "Custom Merchandise"
  ];

  const projects = [
    {
      title: "Modern Brand Identity",
      category: "Branding",
      description: "Complete visual identity system including logo, stationery, and brand guidelines for a premium business client."
    },
    {
      title: "Product Packaging Design",
      category: "Packaging",
      description: "Eye-catching packaging designed for shelf impact and printed with premium finishing."
    },
    {
      title: "Corporate Print Suite",
      category: "Printing",
      description: "Business cards, brochures, and presentation folders printed with premium quality stock."
    },
    {
      title: "Social Media Campaign",
      category: "Digital Design",
      description: "High-converting social media creatives designed for marketing campaigns and promotions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8f2] via-[#fdf4ff] to-[#eef7ff] text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="px-6 md:px-16 py-20 bg-gradient-to-br from-[#fff1e6] via-[#fce7f3] to-[#e0f2fe]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-600 mb-4">Creative Studio & Print House</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
              Design That Speaks. <br />
              Print That Lasts.
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We craft impactful graphic designs and deliver premium-quality printing solutions for businesses that want to stand out.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white font-medium shadow-lg hover:scale-105 transition">
                View Portfolio
              </button>
              <button className="px-6 py-3 rounded-2xl border border-fuchsia-200 bg-white/80 font-medium hover:bg-white transition">
                Get a Quote
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-gradient-to-br from-fuchsia-600 to-pink-500 text-white p-6 shadow-xl">
              <h3 className="text-3xl font-bold">250+</h3>
              <p className="text-sm text-pink-100 mt-2">Projects Delivered</p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-cyan-100 to-sky-200 p-6 shadow-xl border border-cyan-200">
              <h3 className="text-3xl font-bold text-sky-900">100+</h3>
              <p className="text-sm text-sky-700 mt-2">Happy Clients</p>
            </div>
            <div className="rounded-3xl bg-white/80 backdrop-blur p-6 shadow-xl border border-white col-span-2">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">Creative Design + Professional Printing</h3>
              <p className="text-gray-600 text-sm">From concept to print, we handle the full creative process with precision and style.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-orange-500 mb-3">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/80 backdrop-blur border border-white shadow-md hover:shadow-xl hover:-translate-y-1 transition">
                <h3 className="font-semibold text-lg text-gray-800">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-6 md:px-16 py-20 bg-gradient-to-r from-[#fff7ed] via-[#fdf2f8] to-[#eff6ff]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-600 mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold">Selected Work</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="bg-white/90 backdrop-blur p-6 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition border border-white">
                <p className="text-sm text-orange-500 mb-2">{project.category}</p>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-600 mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Creative Partner for Design & Print</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We are a creative design and printing company focused on helping brands build a strong visual presence. From logo design to premium print production, we combine creativity with technical precision.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you need marketing materials, packaging, signage, or social media creatives, we turn your ideas into powerful visuals.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#111827] to-[#7c3aed] text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
            <ul className="space-y-3 text-purple-100">
              <li>• Creative & Custom Designs</li>
              <li>• High Quality Printing Materials</li>
              <li>• Fast Turnaround Time</li>
              <li>• Affordable Pricing</li>
              <li>• End-to-End Design Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 md:px-16 py-20 bg-gradient-to-r from-fuchsia-700 via-purple-700 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-pink-200 mb-3">Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let’s Build Something Great</h2>
          <p className="text-pink-100 mb-8 text-lg">
            Need stunning visuals or premium print solutions? Let’s bring your brand to life.
          </p>
          <button className="px-8 py-3 rounded-2xl bg-white text-fuchsia-700 font-semibold hover:scale-105 transition shadow-xl">
            Contact Now
          </button>
        </div>
      </section>
    </div>
  );
}