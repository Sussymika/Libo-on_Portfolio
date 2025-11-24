"use client";

import { useEffect, useState } from "react";
import {
  HomeIcon,
  UserIcon,
  LightBulbIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(null);

  const handleInputChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const hasEmptyField = Object.values(formData).some(
      (value) => value.trim() === ""
    );

    if (hasEmptyField) {
      setStatusType("error");
      setStatusMessage("Please fill up all the fields.");
      return;
    }

    setStatusType("success");
    setStatusMessage("Message sent!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const highlightStats = [
    { value: "1", label: "Year experience", detail: "Product & web" },
    { value: "10", label: "projects", detail: "End-to-end builds" },
    { value: "5", label: "Long-term clients", detail: "Startup studios" },
    { value: "80", label: "CSAT / 100", detail: "NPS-style surveys" },
  ];

  const services = [
    {
      title: "Product Strategy",
      description: "Translate business goals into validated product roadmaps.",
      bullets: ["Discovery workshops", "Persona & journey mapping", "Success metrics"],
    },
    {
      title: "UI/UX Design",
      description: "Design systems and prototypes for responsive digital products.",
      bullets: ["Design systems", "Interactive prototyping", "Accessibility reviews"],
    },
    {
      title: "Frontend Engineering",
      description: "Ship performant, maintainable interfaces with modern stacks.",
      bullets: ["React & Next.js", "Tailwind & design tokens", "Automation & QA"],
    },
  ];

  const experienceTimeline = [
    {
      period: "2024 — Present",
      role: "Lead Freelance UI/UX Designer",
      company: "Self-employed",
      detail:
        "Partner with SaaS teams to refactor design systems, run audits, and scale component libraries.",
    },
    {
      period: "2022 — 2024",
      role: "UI/UX Engineer",
      company: "DigiHaus Studio",
      detail:
        "Owned concept-to-launch cycles for fintech dashboards and marketing websites.",
    },
    {
      period: "2020 — 2022",
      role: "Frontend Developer",
      company: "Pixel Forge Labs",
      detail:
        "Specialized in motion-rich landing pages, collaborating closely with brand designers.",
    },
  ];

  const skillGroups = [
    {
      title: "Frontend",
      items: [
        { name: "Next.js", level: 75 },
        { name: "JavaScript", level: 85 },
        { name: "HTML & CSS", level: 85 },
        { name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      title: "Backend & Data",
      items: [
        { name: "Node.js", level: 70 },
        { name: "Firebase", level: 65 },
        { name: "C#", level: 78 },
        { name: "Python", level: 80 },
      ],
    },
    {
      title: "Design & Collaboration",
      items: [
        { name: "Figma", level: 92 },
        { name: "Adobe", level: 80 },
        { name: "Git/GitHub", level: 75 },
      ],
    },
  ];

  const featuredProjects = [
    {
      title: "Manga Oasis",
      description:
        "A mobile manga app that allows users to explore and read a wide variety of manga, featuring captivating stories and an engaging reading experience.",
      image: "/figproject.png",
      tags: ["Product design", "React Native", "Subscriptions"],
      links: [
        { label: "Case Study", url: "#" },
        { label: "Live Demo", url: "#" },
      ],
    },
    {
      title: "Burger Joint",
      description:
        "An ordering website that offers a wide variety of hamburgers and side dishes, providing a smooth and convenient online ordering experience.",
      image: "/burgerjoint2.png",
      tags: ["Web experience", "Next.js", "CMS"],
      links: [
        { label: "GitHub", url: "#" },
        { label: "Launch Site", url: "#" },
      ],
    },
    {
      title: "Subway Surfer",
      description:
        "In this mobile endless runner game, players control a character as they move through subway tracks, avoiding obstacles and trains while gathering coins and power-ups.",
      image: "/subway.webp",
      tags: ["Brand system", "Motion", "Landing page"],
      links: [
        { label: "Style Guide", url: "#" },
        { label: "Live Demo", url: "#" },
      ],
    },
  ];


  const contactDetails = [
    { label: "Email", value: "liboondylan@gmail.com", hint: "Expect a reply in 24h" },
    { label: "Phone", value: "+63 966 642 7246", hint: "Mon – Fri, 9am to 6pm PHT" },
    { label: "Location", value: "Iloilo City, Philippines", hint: "Open to remote" },
  ];
  useEffect(() => {
    if (typeof window !== "undefined" && window.tailwind) {
      window.tailwind.config = {
        theme: {
          extend: {
            colors: {
              neon: {
                pink: "#ff00e6",
                cyan: "#00eaff",
                purple: "#b300ff",
                yellow: "#faff00",
              },
            },
          },
        },
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05060a] text-gray-200 font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,234,255,0.12),_transparent_60%)]" />
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'url(/cyber.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060a]/60 via-[#05060a]/80 to-[#05060a]" />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* 🔥 TOP APP BAR */}
        <nav className="fixed top-0 left-0 w-full h-16 bg-[#05060a]/60 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_60px_rgba(0,0,0,0.45)] z-50 flex items-center justify-between px-6 md:px-12">
          <h1 className="text-2xl font-semibold tracking-[0.2em] text-white">
            DYLAN LIBO-ON
          </h1>

          <div className="hidden md:flex items-center gap-6">
            <ul className="flex space-x-8 text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
              <li>
                <a href="#home" className="flex items-center gap-1 hover:text-white transition-colors">
                  <HomeIcon className="h-5 w-5" /> Home
                </a>
              </li>

              <li>
                <a href="#about" className="flex items-center gap-1 hover:text-white transition-colors">
                  <UserIcon className="h-5 w-5" /> About
                </a>
              </li>

              <li>
                <a href="#skills" className="flex items-center gap-1 hover:text-white transition-colors">
                  <LightBulbIcon className="h-5 w-5" /> Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="flex items-center gap-1 hover:text-white transition-colors">
                  <BriefcaseIcon className="h-5 w-5" /> Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="flex items-center gap-1 hover:text-white transition-colors">
                  <EnvelopeIcon className="h-5 w-5" /> Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

      {/* MAIN CONTENT */}
      <main className="mt-28 w-full px-6 md:px-12 pb-24 space-y-32">

        {/* HOME SECTION / HERO */}
        <section id="home" className="max-w-6xl mx-auto grid gap-12 md:grid-cols-[320px,1fr] items-center">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.35)]">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-400/40 to-purple-500/40 blur-2xl" />
                <img
                  src="/profile1.png"
                  alt="Profile"
                  className="relative w-40 h-40 object-cover rounded-full border border-white/20 shadow-lg"
                />
              </div>
              <div>
                <p className="uppercase tracking-[0.4em] text-xs text-teal-300">
                  UI/UX & FullStack
                </p>
                <h2 className="text-3xl font-semibold mt-2">Dylan Y. Libo-on</h2>
                <p className="text-gray-400 text-sm mt-2">
                 I'm a full-stack web developer with a strong UI/UX focus who is committed to developing significant, user-centered digital experiences.
                </p>
              </div>
              <div className="w-full border-t border-white/10 pt-6 space-y-3 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Email</span>
                  <a href="mailto:libo-ondy@gmail.com" className="text-white hover:text-teal-300 transition-colors">
                    libo-ondylan@gmail.com
                  </a>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Phone</span>
                  <a href="tel:+639234295637" className="text-white hover:text-teal-300 transition-colors">
                    +63 966 642 7246
                  </a>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Social</span>
                  <span className="text-white">Fb · X · IG</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,0,0,0.35)]">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                Digital products that feel intentional, elegant, and fast.
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mt-4">
                I create digital experiences that are simple, quick, and easy to use.  I create websites and applications that are both functional and aesthetically pleasing by combining my knowledge of UI/UX design with my full-stack development abilities.  I concentrate on ensuring that every aspect of the project feels cohesive and functions well for the users from the initial concept to the final product.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-[#05060a] font-semibold"
                >
                  View selected work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full border border-white/20 text-white hover:border-white/50 transition-colors"
                >
                  Book a strategy call
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {highlightStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 p-4 bg-black/30">
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">{stat.label}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <img src="/language.jpg" className="w-full h-32 object-cover rounded-2xl border border-white/10" />
              <img src="/gef.gif" className="w-full h-32 object-cover rounded-2xl border border-white/10" />
              <img src="/website.gif" className="w-full h-32 object-cover rounded-2xl border border-white/10" />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="max-w-6xl mx-auto py-20 space-y-12">
          <div className="text-center space-y-4">
            <p className="uppercase text-sm tracking-[0.35em] text-teal-300">About</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white">Creative technologist with a systems mindset.</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              I'm a full-stack web developer with a strong UI/UX focus who is committed to developing significant, user-centered digital experiences.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 space-y-6 backdrop-blur-xl">
              <p className="text-gray-300 leading-relaxed">
                I’m a UI/UX–driven Full-Stack Web Developer who enjoys creating digital experiences that are both visually appealing and highly functional.  Great products, in my opinion, are the result of striking the ideal balance between clean, scalable code and careful design.  My work focuses on understanding user needs, designing intuitive interfaces, and building reliable applications that feel smooth, consistent, and enjoyable to use.
              </p>
              <div className="grid grid-cols-2 gap-6 text-sm text-gray-400">
                <div>
                  <p className="text-white font-semibold">Focus Areas</p>
                  <ul className="mt-2 space-y-1">
                    <li>Design systems</li>
                    <li>Design ops</li>
                    <li>Frontend architecture</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-semibold">Toolset</p>
                  <ul className="mt-2 space-y-1">
                    <li>Figma & FigJam</li>
                    <li>Adobe CC</li>
                    <li>Notion & Linear</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-gray-400">
                <span className="px-3 py-1 rounded-full border border-white/15">Human-centered</span>
                <span className="px-3 py-1 rounded-full border border-white/15">Systems thinking</span>
                <span className="px-3 py-1 rounded-full border border-white/15">Design engineering</span>
              </div>
            </div>

            <div className="space-y-6">
              {experienceTimeline.map((item) => (
                <div key={item.period} className="p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                  <p className="text-xs uppercase tracking-[0.35em] text-teal-300">{item.period}</p>
                  <h3 className="text-xl font-semibold text-white mt-2">{item.role}</h3>
                  <p className="text-gray-400 text-sm">{item.company}</p>
                  <p className="text-gray-400 mt-3">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="max-w-6xl mx-auto py-10 space-y-10">
          <div className="text-center space-y-3">
            <p className="uppercase text-sm tracking-[0.35em] text-teal-300">Services</p>
            <h2 className="text-4xl font-semibold text-white">Where I provide the most leverage.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl flex flex-col">
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="text-gray-400 mt-4 flex-1">{service.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-300">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <p className="uppercase text-sm tracking-[0.35em] text-teal-300">Skills & Expertise</p>
              <h2 className="text-4xl font-semibold text-white">Deep craft, proven delivery.</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                  <h3 className="text-xl font-semibold text-white mb-5">{group.title}</h3>
                  <div className="space-y-5">
                    {group.items.map((item) => (
                      <div key={item.name}>
                        <div className="flex justify-between text-sm text-gray-300">
                          <span>{item.name}</span>
                          <span>{item.level}%</span>
                        </div>
                        <div className="h-2 mt-2 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <p className="uppercase text-sm tracking-[0.35em] text-teal-300">Projects</p>
              <h2 className="text-4xl font-semibold text-white">Recent Projects</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {featuredProjects.map((project) => (
                <div key={project.title} className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden flex flex-col">
                  <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="text-gray-400 text-sm mt-3 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4 text-xs uppercase tracking-[0.3em] text-gray-400">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 border border-white/15 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-6">
                      {project.links.map((link) => (
                        <a key={link.label} href={link.url} className="text-teal-300 text-sm hover:text-white transition-colors underline-offset-4">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <p className="uppercase text-sm tracking-[0.35em] text-teal-300">Contact</p>
              <h2 className="text-4xl font-semibold text-white">Let’s collaborate on your next launch.</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                For inquiries, please contact me.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-[1fr,1.2fr]">
              <div className="space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.35em] text-teal-300">{detail.label}</p>
                    <p className="text-2xl font-semibold text-white mt-2">{detail.value}</p>
                    <p className="text-gray-400 text-sm mt-1">{detail.hint}</p>
                  </div>
                ))}
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    placeholder="Your Name"
                    className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-teal-300 outline-none"
                  />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    placeholder="Your Email"
                    className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-teal-300 outline-none"
                  />
                </div>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange("subject")}
                  placeholder="Project / Subject"
                  className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-teal-300 outline-none"
                />
                <textarea
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange("message")}
                  placeholder="Tell me about the scope, audience, KPIs..."
                  className="w-full p-3 rounded-2xl bg-black/40 border border-white/10 focus:border-teal-300 outline-none"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-[#05060a] py-3 rounded-full font-semibold tracking-wide">
                  Send Message
                </button>
                {statusMessage && (
                  <p
                    className={`text-center font-semibold ${
                      statusType === "success" ? "text-teal-300" : "text-red-300"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 text-center text-gray-500 border-t border-gray-700">
          © 2025 Libo-on — All Rights Reserved.
        </footer>

      </main>
    </div>
  </div>
);
}
