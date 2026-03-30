"use client";
import { useState } from "react";
import styles from "./BrandCollab.module.css";
import { IconFootball, IconBook, IconCamera } from "@/components/Icons/Icons";

export default function BrandCollab() {
  const [form, setForm] = useState({ name: "", brand: "", message: "", budget: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire up to email service (Resend / Formspree)
    setSent(true);
  }

  return (
    <section className={styles.section} id="collab">
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.title}>let&apos;s work<br />together</h2>
          <svg viewBox="0 0 200 12" className={styles.underline}>
            <path d="M2,8 Q40,2 80,8 Q120,14 160,5 Q180,2 198,7"
              stroke="var(--accent)" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>

          <p className={styles.subtitle}>
            I collaborate with brands that feel real — no forced content, just honest partnerships.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>100K+</span>
              <span className={styles.statLabel}>Instagram followers</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <IconFootball size={22} />
                <IconBook size={22} />
                <IconCamera size={22} />
              </span>
              <span className={styles.statLabel}>Football, Books, Life</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>Nivia +</span>
              <span className={styles.statLabel}>Past collaborations</span>
            </div>
          </div>

          {/* Doodle note */}
          <div className={styles.note}>
            <svg viewBox="0 0 16 16" className={styles.notePin}>
              <circle cx="8" cy="8" r="7" fill="var(--accent)" stroke="var(--ink)" strokeWidth="1.5" />
            </svg>
            <p>I only take on collabs I genuinely believe in.</p>
          </div>
        </div>

        <div className={styles.right}>
          {sent ? (
            <div className={styles.success}>
              <span className={styles.successIcon}>✏️</span>
              <h3>got it!</h3>
              <p>I&apos;ll get back to you soon. Thanks for reaching out.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="name">your name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="brand">brand / company</label>
                <input
                  id="brand"
                  name="brand"
                  type="text"
                  placeholder="e.g. Nivia Sports"
                  value={form.brand}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="budget">budget range</label>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  required
                >
                  <option value="">select a range</option>
                  <option value="under-10k">Under ₹10,000</option>
                  <option value="10k-30k">₹10,000 – ₹30,000</option>
                  <option value="30k-1l">₹30,000 – ₹1,00,000</option>
                  <option value="above-1l">Above ₹1,00,000</option>
                  <option value="open">Open to discuss</option>
                </select>
              </div>
              <div className={styles.field}>
                <label htmlFor="message">what do you have in mind?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about the collab, deliverables, timeline..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className={styles.submit}>
                send it over →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
