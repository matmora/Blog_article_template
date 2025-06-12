
import { useEffect } from "react";
import { Clock, User, Calendar, Tag } from "lucide-react";
import { TableOfContents } from "./TableOfContents";
import { AuthorBio } from "./AuthorBio";
import { PullQuote } from "./PullQuote";
import { TipBox } from "./TipBox";
import { NewsletterCTA } from "./NewsletterCTA";

export const ArticlePage = () => {
  useEffect(() => {
    // Update document title and meta tags for SEO
    document.title = "The Future of Web Development: AI-Powered Tools and Modern Frameworks | TechInsights";
    
    // Create or update meta tags
    const updateMetaTag = (name: string, content: string, property?: string) => {
      let meta = document.querySelector(`meta[${property ? 'property' : 'name'}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // SEO meta tags
    updateMetaTag('description', 'Explore how AI-powered development tools and modern frameworks are revolutionizing web development. Learn about the latest trends, best practices, and future predictions for 2024 and beyond.');
    updateMetaTag('keywords', 'web development, AI tools, modern frameworks, React, Next.js, development trends, 2024');
    updateMetaTag('author', 'Sarah Johnson');
    
    // Open Graph meta tags
    updateMetaTag('og:title', 'The Future of Web Development: AI-Powered Tools and Modern Frameworks', true);
    updateMetaTag('og:description', 'Explore how AI-powered development tools and modern frameworks are revolutionizing web development. Learn about the latest trends, best practices, and future predictions.', true);
    updateMetaTag('og:type', 'article', true);
    updateMetaTag('og:url', 'https://techinsights.com/future-web-development', true);
    updateMetaTag('og:image', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=630&fit=crop', true);
    
    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', 'The Future of Web Development: AI-Powered Tools and Modern Frameworks');
    updateMetaTag('twitter:description', 'Explore how AI-powered development tools and modern frameworks are revolutionizing web development.');
    updateMetaTag('twitter:image', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=630&fit=crop');
    
    // Article structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Future of Web Development: AI-Powered Tools and Modern Frameworks",
      "author": {
        "@type": "Person",
        "name": "Sarah Johnson"
      },
      "datePublished": "2024-06-12",
      "dateModified": "2024-06-12",
      "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=630&fit=crop",
      "description": "Explore how AI-powered development tools and modern frameworks are revolutionizing web development."
    };
    
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&h=900&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center gap-4 mb-6 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>June 12, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>Web Development</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Future of Web Development: AI-Powered Tools and Modern Frameworks
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Explore how artificial intelligence and cutting-edge frameworks are revolutionizing the way we build web applications in 2024 and beyond.
          </p>
          
          <div className="flex items-center justify-center gap-3 mt-8">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face" 
              alt="Sarah Johnson, Senior Full-Stack Developer"
              className="w-12 h-12 rounded-full border-2 border-white/30"
            />
            <div className="text-left">
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm opacity-75">Senior Full-Stack Developer</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Table of Contents - Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <TableOfContents onSectionClick={scrollToSection} />
          </aside>

          {/* Article Content */}
          <main className="lg:col-span-3 prose prose-lg max-w-none">
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Introduction: The Revolution is Here</h2>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                The landscape of web development is undergoing a seismic shift. With the advent of artificial intelligence and increasingly sophisticated frameworks, developers are experiencing unprecedented productivity gains and creative possibilities. This transformation isn't just about writing code faster—it's about fundamentally reimagining how we approach problem-solving in software development.
              </p>
              
              <TipBox 
                title="Key Takeaway"
                content="AI isn't replacing developers; it's amplifying their capabilities and allowing them to focus on higher-level architectural decisions and creative problem-solving."
              />
              
              <p className="text-lg leading-relaxed mt-6 text-muted-foreground">
                In this comprehensive guide, we'll explore the current state of AI-powered development tools, examine how modern frameworks are evolving, and look ahead to what the future holds for web developers worldwide.
              </p>
            </section>

            {/* AI-Powered Development Tools */}
            <section id="ai-tools" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">AI-Powered Development Tools: A New Era</h2>
              
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop" 
                  alt="Developer using AI-powered coding tools on a modern laptop setup"
                  className="w-full rounded-xl shadow-lg"
                />
                <caption className="text-sm text-muted-foreground mt-2 block text-center italic">
                  AI-powered development environments are becoming the new standard for modern software development.
                </caption>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">Code Generation and Completion</h3>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Tools like <a href="https://github.com/features/copilot" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">GitHub Copilot</a>, <a href="https://www.tabnine.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Tabnine</a>, and <a href="https://codeium.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Codeium</a> have transformed the coding experience. These AI assistants can generate entire functions, suggest optimizations, and even help with debugging complex issues.
              </p>

              <PullQuote 
                quote="AI coding assistants have increased my productivity by 40% while reducing the time I spend on repetitive tasks."
                author="Alex Chen, Lead Developer at TechCorp"
              />

              <h3 className="text-2xl font-semibold mb-4 text-foreground">Automated Testing and Quality Assurance</h3>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                AI is revolutionizing how we approach testing. Modern tools can automatically generate test cases, identify edge cases that human developers might miss, and even predict potential bugs before they occur in production environments.
              </p>

              <div className="bg-muted/50 p-6 rounded-xl my-8 border-l-4 border-primary">
                <h4 className="font-semibold mb-3 text-foreground">Popular AI Testing Tools:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Testim:</strong> AI-powered end-to-end testing</li>
                  <li>• <strong>Applitools:</strong> Visual AI testing for UI consistency</li>
                  <li>• <strong>Mabl:</strong> Intelligent test automation platform</li>
                  <li>• <strong>Functionize:</strong> Machine learning-driven test creation</li>
                </ul>
              </div>
            </section>

            {/* Modern Frameworks */}
            <section id="frameworks" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Modern Frameworks Leading the Charge</h2>
              
              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                The framework ecosystem has never been more diverse or powerful. Each framework brings unique strengths to the table, addressing different aspects of modern web development challenges.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">React & Next.js</h3>
                  <p className="text-muted-foreground mb-4">
                    The React ecosystem continues to dominate with Next.js providing an excellent full-stack framework with features like App Router, Server Components, and edge runtime support.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">SSR</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">SSG</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Edge Runtime</span>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Vue.js & Nuxt</h3>
                  <p className="text-muted-foreground mb-4">
                    Vue 3's Composition API and Nuxt 3's hybrid rendering capabilities offer developers an intuitive yet powerful development experience with excellent performance characteristics.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-full text-sm">Composition API</span>
                    <span className="bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-full text-sm">Auto-imports</span>
                    <span className="bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-full text-sm">Hybrid Rendering</span>
                  </div>
                </div>
              </div>

              <TipBox 
                title="Framework Selection Tip"
                content="Choose your framework based on your team's expertise, project requirements, and long-term maintenance considerations rather than just popularity metrics."
              />
            </section>

            {/* Performance Optimization */}
            <section id="performance" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Performance Optimization in the AI Era</h2>
              
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop" 
                alt="Performance monitoring dashboard showing web vitals and optimization metrics"
                className="w-full rounded-xl shadow-lg mb-8"
              />

              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Performance optimization has evolved beyond manual tweaking. AI-driven tools now provide real-time insights and automated optimizations that can significantly improve user experience without extensive manual intervention.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">Core Web Vitals and Beyond</h3>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Google's Core Web Vitals have become the gold standard for measuring user experience. Modern development tools now provide built-in monitoring and optimization suggestions for these metrics.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-4 text-left font-semibold">Metric</th>
                      <th className="border border-border p-4 text-left font-semibold">Good</th>
                      <th className="border border-border p-4 text-left font-semibold">Needs Improvement</th>
                      <th className="border border-border p-4 text-left font-semibold">Poor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-4 font-medium">LCP (Largest Contentful Paint)</td>
                      <td className="border border-border p-4 text-green-600">≤ 2.5s</td>
                      <td className="border border-border p-4 text-yellow-600">2.5s - 4.0s</td>
                      <td className="border border-border p-4 text-red-600">> 4.0s</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4 font-medium">FID (First Input Delay)</td>
                      <td className="border border-border p-4 text-green-600">≤ 100ms</td>
                      <td className="border border-border p-4 text-yellow-600">100ms - 300ms</td>
                      <td className="border border-border p-4 text-red-600">> 300ms</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4 font-medium">CLS (Cumulative Layout Shift)</td>
                      <td className="border border-border p-4 text-green-600">≤ 0.1</td>
                      <td className="border border-border p-4 text-yellow-600">0.1 - 0.25</td>
                      <td className="border border-border p-4 text-red-600">> 0.25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Future Predictions */}
            <section id="future" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Looking Ahead: Predictions for 2025 and Beyond</h2>
              
              <PullQuote 
                quote="The next five years will see AI become as fundamental to development as version control is today."
                author="Dr. Emily Rodriguez, Tech Futurist"
              />

              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                As we look toward the future, several trends are emerging that will shape the next generation of web development tools and practices.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">AI-First Development Environments</h3>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                We're moving toward development environments where AI isn't just an assistant but a core part of the development process. These environments will understand context, predict developer intent, and proactively suggest optimizations.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">Edge Computing Integration</h3>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                The convergence of edge computing and modern frameworks will enable ultra-fast, globally distributed applications that feel instantaneous to users regardless of their location.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl border my-8">
                <h4 className="text-xl font-semibold mb-4 text-foreground">Key Technologies to Watch:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• WebAssembly (WASM) adoption</li>
                    <li>• Progressive Web Apps (PWA) evolution</li>
                    <li>• Micro-frontends architecture</li>
                  </ul>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Serverless-first frameworks</li>
                    <li>• AI-powered design systems</li>
                    <li>• Quantum-resistant security</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Conclusion: Embracing the Future</h2>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                The future of web development is bright, powered by intelligent tools that enhance human creativity rather than replace it. As developers, our role is evolving from code writers to digital architects, designing experiences that seamlessly blend cutting-edge technology with human-centered design.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                The key to success in this new era is maintaining a balance between leveraging AI capabilities and preserving the creative, problem-solving aspects that make development an art as much as a science. By embracing these tools while continuing to develop our fundamental skills, we can create web experiences that are not just technically impressive, but truly transformative for users.
              </p>

              <TipBox 
                title="Action Item"
                content="Start experimenting with AI-powered development tools today. Begin with code completion assistants and gradually explore more advanced AI features as they become available."
              />
            </section>

            {/* Author Bio */}
            <AuthorBio />

            {/* Call to Action */}
            <NewsletterCTA />
          </main>
        </div>
      </div>
    </article>
  );
};
