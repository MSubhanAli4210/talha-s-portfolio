import yellow from "./assets/images/yellow.jpg";

export default function App() {
  const portfolioItems = [
    { title: "Brand Identity", category: "Branding", image: yellow },
    { title: "Packaging Design", category: "Packaging", image: "/placeholder-2.jpg" },
    { title: "Social Campaign", category: "Social Media", image: "/placeholder-3.jpg" },
    { title: "Print Collateral", category: "Printing", image: "/placeholder-4.jpg" },
    { title: "Poster Design", category: "Advertising", image: "/placeholder-5.jpg" },
    { title: "Editorial Layout", category: "Magazine", image: "/placeholder-6.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#111111] font-sans">
      {/* Navbar */}
      <header className="w-full px-6 md:px-14 py-6 flex items-center justify-between sticky top-0 z-50 bg-[#f4f1ea]/90 backdrop-blur border-b border-black/10">
        <h1 className="text-xl md:text-2xl font-bold tracking-tight">Talha Studio</h1>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wide">
          <a href="#work" className="hover:opacity-60 transition">Work</a>
          <a href="#about" className="hover:opacity-60 transition">About</a>
          <a href="#contact" className="hover:opacity-60 transition">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-14 pt-14 pb-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <p className="uppercase text-xs tracking-[0.35em] text-black/40 mb-5">Graphic Designer • Printing Studio</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.92] tracking-tight mb-6 max-w-3xl">
              Creative <br />
              Design Portfolio
            </h1>
            <p className="text-base md:text-lg text-black/60 leading-relaxed max-w-xl mb-8">
              A modern visual portfolio crafted for designers who create bold branding, premium print work, and striking visuals.
            </p>
            <button className="px-7 py-3 bg-black text-white rounded-full text-sm font-medium hover:scale-105 transition">
              View Projects
            </button>
          </div>

          <div className="overflow-hidden border border-black/10 bg-white">
            <img src={yellow} alt="Hero" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Featured Statement */}
      <section className="px-6 md:px-14 py-8">
        <div className="max-w-7xl mx-auto border-y border-black/10 py-10">
          <p className="text-2xl md:text-4xl font-semibold tracking-tight max-w-4xl leading-tight">
            Building timeless visual identities through bold layouts, strategic design, and premium print experiences.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="px-6 md:px-14 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="uppercase text-xs tracking-[0.35em] text-black/40 mb-3">Selected Work</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {portfolioItems.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="rounded-[1.6rem] overflow-hidden bg-white border border-black/10 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition duration-500"
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
                    <p className="text-sm text-black/45 mt-1">{item.category}</p>
                  </div>
                  <span className="text-xl leading-none">↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-14 py-20 border-t border-black/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-[2rem] overflow-hidden border border-black/10 bg-white">
            <img src="/about-placeholder.jpg" alt="About" className="w-full h-full object-cover" />
          </div>

          <div>
            <p className="uppercase text-xs tracking-[0.35em] text-black/40 mb-3">About</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[0.95]">
              Design with purpose. <br /> Print with impact.
            </h2>
            <p className="text-black/60 leading-relaxed text-lg max-w-xl">
              A clean and modern portfolio template inspired by high-end Behance presentation styles. Built to showcase your work with bold typography, structured spacing, and large visual focus.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-14 py-20 border-t border-black/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase text-xs tracking-[0.35em] text-black/40 mb-3">Contact</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[0.95]">
            Let’s create <br /> something iconic.
          </h2>
          <p className="text-black/60 text-lg mb-8 max-w-2xl mx-auto">
            Add your own WhatsApp, email, social links, and project inquiries here.
          </p>
          <button className="px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:scale-105 transition">
            Start a Project
          </button>
        </div>
      </section>
    </div>
  );
}