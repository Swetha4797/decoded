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
    <section className="lesson-section">
      <h2>🧭 Common ways to design APIs</h2>
      <p>API is an umbrella term, not a single technology. Here are three common ways software exposes functionality.</p>
      <div className="api-example-grid">
        <div className="api-example-card"><span className="category-pill">REST</span><h3>Resources and HTTP</h3><p>REST-style APIs organize operations around resources such as users or orders, often using HTTP methods like GET and POST.</p><pre className="code-example"><code>{`GET /users/42`}</code></pre><p>Example: A profile page requests information about user 42.</p></div>
        <div className="api-example-card"><span className="category-pill">GraphQL</span><h3>Ask for the fields you need</h3><p>GraphQL lets clients describe the exact data they want using a schema-defined query language.</p><pre className="code-example"><code>{`query { user(id: "42") { name } }`}</code></pre><p>Example: A profile page requests only the user's name.</p></div>
        <div className="api-example-card"><span className="category-pill">gRPC</span><h3>Call a remote procedure</h3><p>gRPC defines service methods and message formats, commonly with Protocol Buffers. It is often used between backend services.</p><pre className="code-example"><code>{`UserService.GetUser({ id: 42 })`}</code></pre><p>Example: An internal service requests a user record.</p></div>
      </div>
      <p>These are examples of different API approaches. Not every HTTP endpoint is automatically RESTful, and a single system can expose more than one API style.</p>
    </section>
    <section className="lesson-section">
      <h2>🤖 What changes with AI and LLM APIs?</h2>
      <p>AI APIs aren't automatically a new alternative to REST, GraphQL, or gRPC. They typically expose <strong>different capabilities</strong>, and may still communicate over HTTP.</p>
      <div className="api-example-grid">
        <div className="api-example-card"><span className="category-pill">Model inference</span><h3>Generate a response</h3><p>An application sends text or other input to an AI model and gets generated content back.</p><p><strong>Example:</strong> A study app requests a short explanation of caching.</p></div>
        <div className="api-example-card"><span className="category-pill">Embeddings</span><h3>Search by meaning</h3><p>An embedding API converts content to numerical vectors for tasks such as semantic search.</p><p><strong>Example:</strong> Searching “why is my website slow?” finds articles about latency.</p></div>
        <div className="api-example-card"><span className="category-pill">Tool calling</span><h3>Connect models to tools</h3><p>The model can request a function call with structured arguments. Your application or a connected tool executes it and can return a result.</p><p><strong>Example:</strong> An assistant requests the latest order status from a store's API.</p></div>
        <div className="api-example-card"><span className="category-pill">Streaming</span><h3>Show output as it arrives</h3><p>Some model APIs can stream chunks of generated output rather than waiting for a complete response.</p><p><strong>Example:</strong> A chat interface displays a response progressively.</p></div>
      </div>
      <p>One useful distinction: <strong>tool calling</strong> is a capability or workflow, and <strong>streaming</strong> is a response-delivery pattern. Neither is a new API protocol by itself.</p>
    </section>
    <section className="lesson-summary takeaway"><small>💡 THE BIG TAKEAWAY</small><p>APIs make software interactions predictable by defining what can be requested and how systems communicate.</p></section>
    <Link href="/" className="back-link">← Explore more concepts</Link>
  </main>;
}
