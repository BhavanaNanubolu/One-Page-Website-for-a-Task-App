import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
const features = [
  {
    icon: "🗂️",
    title: "Organize Tasks",
    description: "Easily categorize and prioritize your tasks for better productivity.",
  },
  {
    icon: "🔔",
    title: "Reminders",
    description: "Set reminders to never miss a deadline again.",
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    description: "Track your progress and stay motivated with visual analytics.",
  },
];

const reviews = [
  {
    name: "Priya S.",
    quote: "Taskflow has completely changed the way I manage my work. Highly recommended!",
  },
  {
    name: "Alex R.",
    quote: "The reminders and progress tracking keep me on top of everything.",
  },
  {
    name: "Fatima K.",
    quote: "Simple, clean, and powerful. The best productivity app I've used.",
  },
];

const pricing = [
  {
    name: "Free",
    price: "$0",
    features: ["Basic task management", "Reminders", "Community support"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$8/mo",
    features: ["All Free features", "Advanced analytics", "Custom themes"],
    highlight: true,
  },
  {
    name: "Team",
    price: "$20/mo",
    features: ["All Pro features", "Team collaboration", "Priority support"],
    highlight: false,
  },
];


const socialLinks = [
  { icon: <FaTwitter />, label: "Twitter", url: "https://twitter.com/" },
  { icon: <FaFacebookF />, label: "Facebook", url: "https://facebook.com/" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", url: "https://linkedin.com/" },
  { icon: <FaInstagram />, label: "Instagram", url: "https://instagram.com/" },

];


export default function Home() {
  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      {/* Top Section */}
      <header
        style={{
          background: "linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)",
          color: "#fff",
          padding: "2.5rem 1rem 3.5rem 1rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Taskflow</h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
          Organize your work. Achieve your goals. Stress-free.
        </p>
        <button
          style={{
            background: "#fff",
            color: "#6366f1",
            fontWeight: "bold",
            border: "none",
            borderRadius: "9999px",
            padding: "0.75rem 2rem",
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            transition: "background 0.2s, color 0.2s",
          }}
          onClick={() => alert("Get Started!")}
        >
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "2rem" }}>
          Features
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                padding: "2rem 1.5rem",
                width: 280,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: 8 }}>{f.title}</h3>
              <p style={{ color: "#555" }}>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section style={{ background: "#fff", padding: "3rem 1rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "2rem" }}>
          What Our Users Say
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          {reviews.map((r) => (
            <div
              key={r.name}
              style={{
                background: "#f3f4f6",
                borderRadius: 12,
                padding: "1.5rem 1.25rem",
                width: 320,
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                textAlign: "center",
              }}
            >
              <p style={{ fontStyle: "italic", marginBottom: 12 }}>"{r.quote}"</p>
              <div style={{ fontWeight: "bold", color: "#6366f1" }}>{r.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "2rem" }}>
          Pricing
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          {pricing.map((p) => (
            <div
              key={p.name}
              style={{
                background: p.highlight ? "#6366f1" : "#fff",
                color: p.highlight ? "#fff" : "#222",
                borderRadius: 16,
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                padding: "2.5rem 1.5rem",
                width: 260,
                textAlign: "center",
                border: p.highlight ? "2px solid #6366f1" : "1px solid #e5e7eb",
                transform: p.highlight ? "scale(1.05)" : "none",
              }}
            >
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: 8 }}>{p.name}</div>
              <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: 16 }}>{p.price}</div>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 16 }}>
                {p.features.map((f) => (
                  <li key={f} style={{ marginBottom: 8 }}>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                style={{
                  background: p.highlight ? "#fff" : "#6366f1",
                  color: p.highlight ? "#6366f1" : "#fff",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "9999px",
                  padding: "0.5rem 1.5rem",
                  fontSize: "1rem",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  transition: "background 0.2s, color 0.2s",
                }}
                onClick={() => alert(`Selected: ${p.name}`)}
              >
                Choose {p.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#1e293b",
          color: "#fff",
          padding: "2rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: 12 }}>
          Contact us:{" "}
          <a href="mailto:support@taskflow.com" style={{ color: "#60a5fa", textDecoration: "underline" }}>
            support@taskflow.com
          </a>
        </div>
        <div className="social-icons">
  {socialLinks.map((link) => (
    <a
      key={link.label}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      {link.icon}
    </a>
  ))}
</div>

        <div style={{ fontSize: "0.95rem", color: "#cbd5e1" }}>© {new Date().getFullYear()} Taskflow. All rights reserved.</div>
      </footer>
    </div>
  );
}
