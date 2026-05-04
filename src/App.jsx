import {
  BsInstagram,
  BsPhoneFill,
  BsMailbox2,
  BsFacebook,
  BsLinkedin,
} from "react-icons/bs";

import heroImg from "./assets/images/heroimg.jpg";
import printer from "./assets/images/printer.jpg";

import yellow from "./assets/images/tokyo/yellow.jpg";
import pic1 from "./assets/images/tokyo/pic1.jpg";
import pic2 from "./assets/images/tokyo/pic2.jpg";
import pic3 from "./assets/images/tokyo/pic3.jpg";
import pic4 from "./assets/images/tokyo/pic4.jpg";
import pic5 from "./assets/images/tokyo/pic5.jpg";

import red from "./assets/images/Uchiha Raven/red.jpg";
import red1 from "./assets/images/Uchiha Raven/pic1.jpg";
import red2 from "./assets/images/Uchiha Raven/pic2.jpg";
import red3 from "./assets/images/Uchiha Raven/pic3.jpg";
import red4 from "./assets/images/Uchiha Raven/pic4.jpg";
import red5 from "./assets/images/Uchiha Raven/pic5.jpg";

import blue from "./assets/images/future-vision/blue.jpg";
import blue1 from "./assets/images/future-vision/pic1.jpg";
import blue2 from "./assets/images/future-vision/pic2.jpg";
import blue3 from "./assets/images/future-vision/pic3.jpg";
import blue4 from "./assets/images/future-vision/pic4.jpg";
import blue5 from "./assets/images/future-vision/pic5.jpg";

function ProjectDetail({ project }) {
  return (
    <section className="px-6 md:px-14 py-20 border-t border-[#3a312b]/10">
      <div className="max-w-7xl mx-auto md:flex md:gap-8">
        <div className="max-w-4xl mb-10 md:max-w-[48%]">
          <p className="uppercase text-xs tracking-[0.35em] text-[#a34848] mb-3">
            {project.category}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5 text-[#181512]">
            {project.title}
          </h2>
          <p className="text-lg text-[#5b4f47] leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {project.gallery.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[#3a312b]/10 bg-[#fffdfa] shadow-[0_4px_20px_rgba(58,49,43,0.04)]"
            >
              <img
                src={img}
                alt={`${project.title} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const portfolioItems = [
    {
      title: "Akira Genesis: Neo-Tokyo Streetwear ",
      category: "DTF printing",
      image: yellow,
      description: (
        <>
          Akira Genesis is a cyberpunk-driven streetwear design project inspired
          by the visual intensity of Neo-Tokyo culture. The concept explores the
          fusion of futuristic aesthetics with raw urban textures, using bold
          typography, Japanese elements, and high-contrast compositions.
          <br />
          <br />
          The process begins with concept exploration and sketch iterations,
          followed by structured layout development and typography systems. A
          strong emphasis was placed on halftone detailing, knockout techniques,
          and precise color separation to ensure optimal results for DTF
          printing.
          <br />
          <br />
          The final artwork is engineered to be fully print-ready, maintaining
          clarity, depth, and consistency across apparel and merchandise
          applications. This project showcases a complete pipeline—from ideation
          to production—focused on high-impact wearable design.
        </>
      ),
      gallery: [pic1, pic3, pic2, pic4, pic5],
    },
    {
      title: "Uchiha Raven: Crimson Identity ",
      category: "DTF printing",
      image: red,
      description: (
        <>
          Uchiha Raven is a character-driven identity project inspired by themes
          of sacrifice, intellect, and mysticism. The design merges
          anime-inspired visuals with a modern graphic approach, utilizing bold
          red-black contrasts, dynamic composition, and symbolic elements such
          as ravens and circular forms.
          <br />
          <br />
          The workflow covers concept development, character exploration, and
          composition testing, followed by a structured typography and design
          system. Halftone shading and clean line work were carefully optimized
          for high-quality DTF printing.
          <br />
          <br />
          Color separation and knockout techniques were applied to ensure
          precision and consistency across different materials. The final output
          includes a cohesive visual system adaptable to posters, apparel, and
          merchandise, delivering a strong and recognizable identity.
        </>
      ),
      gallery: [red1, red2, red3, red4, red5],
    },
    {
      title: "Fracture Voices: Emotional Distortion Print",
      category: "DTF printing",
      image: blue,
      description: (
        <>
          Fracture Voices is a conceptual design project that visualizes
          emotional fragmentation and inner conflict through distorted
          portraiture and layered typography. The visual direction combines
          glitch aesthetics, fracture patterns, and expressive halftone textures
          to create a striking and immersive composition.
          <br />
          <br />
          The design process includes detailed sketch iterations, dither pattern
          exploration, and gradual refinement of depth and structure. Special
          attention was given to maintaining balance between artistic expression
          and technical precision required for DTF printing.
          <br />
          <br />
          Through controlled color separation and knockout layering, the final
          design preserves intricate details while remaining production-ready.
          The project extends across multiple applications, including posters
          and apparel, demonstrating versatility in both digital and physical
          formats.
        </>
      ),
      gallery: [blue1, blue2, blue3, blue4, blue5],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f2ea] text-[#181512] font-sans">
      {/* Navbar */}
      <header className="w-full px-6 md:px-14 py-6 flex items-center justify-between sticky top-0 z-50 bg-[#f7f2ea]/90 backdrop-blur border-b border-[#3a312b]/10">
        <h1 className="text-xl md:text-2xl font-bold tracking-tight">
          Talha's Studio
        </h1>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wide">
          <a href="#work" className="hover:opacity-60 transition">
            Work
          </a>
          <a href="#about" className="hover:opacity-60 transition">
            About
          </a>
          <a href="#contact" className="hover:opacity-60 transition">
            Contact
          </a>
        </nav>
      </header>

      {/* Profile Intro Section */}
      <section id="contact"  className="px-6 md:px-14 py-16 bg-[#fdfaf5] border-b border-[#3a312b]/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
          <div className="relative overflow-hidden rounded-2xl bg-[#ece6dd] shadow-[0_8px_30px_rgba(58,49,43,0.08)]">
            <img
              src={heroImg}
              alt="Talha Moiz"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#181512]">
              Hello, I'm Talha Moiz!
            </h2>
            <p className="text-lg text-[#4d433c] leading-relaxed mb-6">
              Creative T-shirt designer with 4+ years of hands-on experience in
              the printing industry. Specialized in producing high-quality,
              print-ready artwork using halftone, color separation, and knockout
              techniques. Proven track record of delivering designs optimized
              for DTF printing. Founder of KINAT STUDIO, a growing online
              printing brand serving diverse clients.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#3a312b]/10">
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="p-2 bg-[#201916] text-[#f8f4ee] rounded-md">
                  <BsPhoneFill />
                </span>
                +92-316-7212006
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="p-2 bg-[#201916] text-[#f8f4ee] rounded-md">
                  <BsInstagram />
                </span>
                <a
                  href="https://www.instagram.com/kinat_studio.pk?igsh=MWhtenZxdGZrbWo1cQ=="
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="p-2 bg-[#201916] text-[#f8f4ee] rounded-md">
                  <BsFacebook />
                </span>
                <a
                  href="https://www.facebook.com/share/14aNVBgEE1K/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="p-2 bg-[#201916] text-[#f8f4ee] rounded-md">
                  <BsLinkedin />
                </span>
                <a
                  href="https://www.linkedin.com/in/talha-moeez-146ba4351?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="p-2 bg-[#201916] text-[#f8f4ee] rounded-md">
                  <BsMailbox2 />
                </span>
                <a href="mailto:tmoaiz1@gmail.com">Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="px-6 md:px-14 pt-14 pb-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <p className="uppercase text-xs tracking-[0.35em] text-[#a34848] mb-5">
              Printing Studio
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.92] tracking-tight mb-6 max-w-3xl text-[#181512]">
              Creative <br />
              Designs and Prints
            </h1>
            <p className="text-base md:text-lg text-[#5b4f47] leading-relaxed max-w-xl mb-8">
              A modern printing studio portfolio built to showcase premium DTF artwork, bold apparel graphics, and high-quality print solutions crafted for brands that demand strong visual impact.
            </p>
            <button className="px-7 py-3 bg-[#201916] text-[#f8f4ee] rounded-full text-sm font-medium hover:scale-105 transition">
              <a href="#work">View Projects</a>
            </button>
          </div>

          <div className="overflow-hidden border border-[#3a312b]/10 bg-[#fffdfa] shadow-[0_8px_30px_rgba(58,49,43,0.06)]">
            <img
              src={yellow}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Statement */}
      <section className="px-6 md:px-14 py-8">
        <div className="max-w-7xl mx-auto border-y border-[#3a312b]/10 py-10">
          <p className="text-2xl md:text-4xl font-semibold tracking-tight max-w-4xl leading-tight text-[#181512]">
            Building timeless visual identities through bold layouts, strategic
            design, and premium print experiences.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="px-6 md:px-14 py-14">
        <p className="uppercase text-xs tracking-[0.35em] text-[#a34848] mb-3">
          Selected Work
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#181512]">
          Projects
        </h2>

        {portfolioItems.map((project, index) => (
          <ProjectDetail key={index} project={project} />
        ))}
      </section>

      {/* About */}
      <section
        id="about"
        className="px-6 md:px-14 py-20 border-t border-[#3a312b]/10"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-4xl">
            <img
              src={printer}
              alt="About"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="uppercase text-xs tracking-[0.35em] text-[#a34848] mb-3">
              About
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[0.95] text-[#181512]">
              Design with purpose. <br /> Print with impact.
            </h2>
            <p className="text-[#5b4f47] leading-relaxed text-lg max-w-xl">
              Specializised in DTF printing services for brands, I offer expert halftoning and color knockout solutions for high-quality t-shirt designs. My expertise ensures vibrant, print-ready designs that elevate your brand's streetwear identity. From concept to print, I deliver premium, cohesive collections with attention to detail and color consistency. Let's bring your vision to life with precision and style
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 md:px-14 py-20 border-t border-[#3a312b]/10"
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase text-xs tracking-[0.35em] text-[#a34848] mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[0.95] text-[#181512]">
            Let’s create <br /> something iconic.
          </h2>
          <p className="text-[#5b4f47] text-lg mb-8 max-w-2xl mx-auto">
            Add your own WhatsApp, email, social links, and project inquiries
            here.
          </p>
          <button className="px-8 py-3 bg-[#201916] text-[#f8f4ee] rounded-full text-sm font-medium hover:scale-105 transition">
            <a href="#contact">Start a Project</a>
          </button>
        </div>
      </section>
    </div>
  );
}