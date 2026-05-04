export default function App() {
  const portfolioItems = [
    {
      title: "Brand Identity",
      category: "Branding",
      image: "/placeholder-1.jpg"
    },
    {
      title: "Packaging Design",
      category: "Packaging",
      image: "/placeholder-2.jpg"
    },
    {
      title: "Social Campaign",
      category: "Social Media",
      image: "/placeholder-3.jpg"
    },
    {
      title: "Print Collateral",
      category: "Printing",
      image: "/placeholder-4.jpg"
    },
    {
      title: "Poster Design",
      category: "Advertising",
      image: "/placeholder-5.jpg"
    },
    {
      title: "Editorial Layout",
      category: "Magazine",
      image: "/placeholder-6.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f6f1] text-[#111111] font-sans">
      {/* Navbar */}
      <header className="w-full px-6 md:px-14 py-6 flex items-center justify-between border-b border-black/10 sticky top-0 bg-[#f8f6f1]/90 backdrop-blur z-50">
        <h1 className="text-xl md:text-2xl font-bold tracking-tight">Studiofolio</h1>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#work" className="hover:opacity-60 transition">Work</a>
          <a href="#about" className="hover:opacity-60 transition">About</a>
          <a href="#contact" className="hover:opacity-60 transition">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-14 pt-16 pb-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <p className="uppercase text-xs tracking-[0.3em] text-black/50 mb-4">Graphic Designer • Print Studio</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-6">
              Bold Visuals <br />
              for Modern Brands
            </h1>
            <p className="text-base md:text-lg text-black/60 max-w-xl leading-relaxed mb-8">
              A minimal portfolio template for graphic designers and printing studios. Clean layouts, strong typography, and image-first presentation.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:scale-105 transition">
                View Work
              </button>
              <button className="px-6 py-3 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
                Get in Touch
              </button>
            </div>
          </div>

          <div>
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-white border border-black/10">
              <img src="/hero-placeholder.jpg" alt="Hero" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="px-6 md:px-14 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="uppercase text-xs tracking-[0.3em] text-black/50 mb-3">Selected Work</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Portfolio</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] rounded-[1.8rem] overflow-hidden bg-white border border-black/10 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-black/50">{item.category}</p>
                  </div>
                  <span className="text-xl">↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-14 py-20 border-t border-black/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase text-xs tracking-[0.3em] text-black/50 mb-3">About</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Designing identities <br />
              that leave impact.
            </h2>
            <p className="text-black/60 leading-relaxed text-lg max-w-xl">
              This template is built for designers who want a premium and modern portfolio presence. Add your own branding, project visuals, and print work to make it fully yours.
            </p>
          </div>

          <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-white border border-black/10">
            <img src="/about-placeholder.jpg" alt="About" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-14 py-20 border-t border-black/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase text-xs tracking-[0.3em] text-black/50 mb-3">Contact</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Let’s build something <br /> beautiful.
          </h2>
          <p className="text-black/60 text-lg mb-8 max-w-2xl mx-auto">
            Replace this section with your own email, WhatsApp, or business details and start showcasing your work professionally.
          </p>
          <button className="px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:scale-105 transition">
            Contact Now
          </button>
        </div>
      </section>
    </div>
  );
}
