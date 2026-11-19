"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Category = "Backend" | "Databases" | "Networking" | "System Design";
type Concept = { title: string; category: Category; summary: string; icon: string; slug?: string; bg: string };

const categories: { name: Category; icon: string; summary: string; bg: string }[] = [
  { name: "Backend", icon: "⚙️", summary: "Behind the scenes", bg: "lavender" },
  { name: "Databases", icon: "🗃️", summary: "Where data lives", bg: "mint" },
  { name: "Networking", icon: "🌐", summary: "How things connect", bg: "sky" },
  { name: "System Design", icon: "🧩", summary: "Big-picture thinking", bg: "peach" },
];

const concepts: Concept[] = [
  { title: "What is an API?", category: "Backend", summary: "How applications communicate using an agreed interface.", icon: "📨", slug: "api", bg: "lavender" },
  { title: "What is Caching?", category: "System Design", summary: "Why apps remember things so you don't have to wait.", icon: "⚡", bg: "peach" },
  { title: "What is a Database?", category: "Databases", summary: "Where your application's information lives.", icon: "🗄️", bg: "mint" },
  { title: "What is HTTP?", category: "Networking", summary: "The rules behind requests and responses on the web.", icon: "🌍", bg: "sky" },
  { title: "What is DNS?", category: "Networking", summary: "How domain names connect to internet services.", icon: "📖", bg: "lavender" },
  { title: "What is Load Balancing?", category: "System Design", summary: "How busy services share incoming traffic.", icon: "⚖️", bg: "peach" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const filtered = useMemo(() => concepts.filter((concept) => {
    const matchCategory = activeCategory === "All" || concept.category === activeCategory;
    const searchable = [concept.title, concept.summary, concept.category].join(" ").toLowerCase();
    return matchCategory && searchable.includes(query.trim().toLowerCase());
  }), [query, activeCategory]);

  function chooseCategory(category: Category | "All") {
    setActiveCategory(category);
    document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <header className="site-header shell">
        <a href="#top" className="brand" aria-label="Decoded home"><span className="brand-icon">d.</span> decoded<span className="coral">.</span></a>
        <nav aria-label="Main navigation"><a href="#categories">Categories</a><a href="#explore">Explore concepts</a><a href="#about">About</a></nav>
      </header>
      <main id="top">
        <section className="hero">
          <div className="shell hero-grid">
            <div>
              <p className="eyebrow">Big concepts. Small explanations.</p>
              <h1>Complex tech.<br /><span className="coral">Simply explained.</span></h1>
              <p className="hero-description">Ever felt lost in technical jargon? You're in the right place. Explore complex concepts through everyday analogies, delightful visuals, and explanations that actually click.</p>
              <form className="search-box" onSubmit={(event) => { event.preventDefault(); document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" }); }}>
                <label className="sr-only" htmlFor="hero-search">Search concepts</label>
                <span aria-hidden="true">⌕</span>
                <input id="hero-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="What would you like to understand?" />
                <button type="submit">Explore →</button>
              </form>
              <p className="suggestions">Try: APIs, databases, caching, or HTTP</p>
            </div>
            <div className="hero-art" aria-label="Illustration of a little code window and an idea lightbulb" role="img">
              <div className="orbit"></div>
              <div className="code-window"><div className="window-bar"><i></i><i></i><i></i></div><div className="code-lines"><span>function</span> learn() {"{"}<br />&nbsp; <em>return</em> &quot;aha!&quot;;<br />{"}"}</div></div>
              <span className="bulb">💡</span><span className="aha">✦ it clicked!</span>
            </div>
          </div>
        </section>
        <section id="categories" className="shell section">
          <div className="section-title"><div><h2>Pick a rabbit hole 🐇</h2><p>Find something interesting. We'll make it make sense.</p></div><a href="#explore">See all concepts →</a></div>
          <div className="category-grid">{categories.map((category) => (
            <button key={category.name} type="button" onClick={() => chooseCategory(category.name)} className="category-card">
              <span className={`category-icon ${category.bg}`}>{category.icon}</span><strong>{category.name}</strong><small>{category.summary} ↗</small>
            </button>
          ))}</div>
        </section>
        <section className="featured" id="explore"><div className="shell section">
          <div className="section-title"><div><h2>Start with a little curiosity</h2><p>Bite-sized explanations for curious minds.</p></div><span className="count">{filtered.length} concepts</span></div>
          <div className="filters" role="group" aria-label="Filter concepts by category">
            {(["All", ...categories.map((category) => category.name)] as (Category | "All")[]).map((category) =>
              <button key={category} type="button" aria-pressed={activeCategory === category} className={activeCategory === category ? "filter active" : "filter"} onClick={() => setActiveCategory(category)}>{category}</button>
            )}
          </div>
          {filtered.length ? <div className="concept-grid">{filtered.map((concept) => (
            <article className="concept-card" key={concept.title}>
              <div className={`concept-visual ${concept.bg}`} aria-hidden="true">{concept.icon}</div>
              <div className="concept-content"><span className="category-pill">{concept.category}</span><h3>{concept.title}</h3><p>{concept.summary}</p></div>
              <div className="concept-footer">{concept.slug ? <Link href={`/concepts/${concept.slug}`}>Let's decode it ↗</Link> : <span>Lesson coming soon</span>}</div>
            </article>
          ))}</div> : <p className="empty">No matching concepts yet. Try a different keyword or category.</p>}
        </div></section>
        <section id="about" className="shell about"><p className="eyebrow">Curiosity meets clarity</p><h2>Tech doesn't have to be intimidating.</h2><p>Decoded is a growing collection of plain-English explanations, built while learning in public. Start with an analogy, then explore the engineering behind it.</p></section>
      </main>
      <footer className="site-footer shell"><strong>decoded.</strong><span>Complexity, made clear. ✳</span></footer>
    </>
  );
}
