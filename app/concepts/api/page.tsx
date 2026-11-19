import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "What is an API? | Decoded", description: "Understand APIs through a restaurant analogy and a practical HTTP example." };

export default function ApiPage() {
  return <main className="lesson shell">
    <Link href="/" className="back-link">← Back to Decoded</Link>
    <p className="eyebrow">Big concepts. Small explanations.</p>
    <span className="category-pill">Backend · Beginner</span>
    <h1>What is an <span className="coral">API?</span></h1>
    <p className="lesson-lead">The invisible agreement that helps software talk to other software.</p>
    <section className="lesson-summary"><small>✦ THE 30-SECOND EXPLANATION</small><p>An API (Application Programming Interface) defines how software can interact using an agreed set of rules.</p></section>
    <section className="lesson-section"><h2>🍽️ Think of a restaurant</h2><p>You're hungry and want pasta, but you don't need to enter the kitchen. You tell the waiter what you'd like, the kitchen prepares it, and the waiter brings it back.</p>
      <div className="analogy-flow" aria-label="Client requests food through the waiter from the kitchen"><span>🙋<small>You · Client</small></span><b>↔</b><span>🧑‍💼<small>Waiter · Interface</small></span><b>↔</b><span>👩‍🍳<small>Kitchen · Server</small></span></div>
      <p>The analogy illustrates a request and response. More precisely, an API is the defined interface—not necessarily a separate 'waiter' program.</p>
    </section>
    <section className="lesson-section"><h2>🔬 A little deeper</h2><p>Web APIs often use HTTP. A client sends a request to an endpoint and the server responds with a status and, often, some data. Here's a simplified example:</p>
      <pre className="code-example"><code>{`GET /api/weather?city=Seattle HTTP/1.1
Host: api.example.com

HTTP/1.1 200 OK
Content-Type: application/json

{ "city": "Seattle", "temperatureC": 18 }`}</code></pre>
      <p><strong>GET</strong> asks for information, <strong>200 OK</strong> means the request succeeded, and <strong>JSON</strong> represents the response data. This is illustrative, not a live API call. APIs aren't limited to HTTP or the web.</p>
    </section>
    <section className="lesson-summary takeaway"><small>💡 THE BIG TAKEAWAY</small><p>APIs make software interactions predictable by defining what can be requested and how systems communicate.</p></section>
    <Link href="/" className="back-link">← Explore more concepts</Link>
  </main>;
}
