
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
    document.title = "How to Find the Best Content Creators in London? | Complete Guide 2024";
    
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
    updateMetaTag('description', 'Discover how to find the best content creators in London. Learn to identify mobile-first vs professional creators, evaluate reach, and find the perfect match for your brand in 2024.');
    updateMetaTag('keywords', 'content creators London, top influencers London, hire content creators UK, best TikTok creators London, UGC creators UK, London video content creators, influencer marketing London');
    updateMetaTag('author', 'Sarah Johnson');
    
    // Open Graph meta tags
    updateMetaTag('og:title', 'How to Find the Best Content Creators in London? Complete Guide 2024', true);
    updateMetaTag('og:description', 'Your complete guide to finding and hiring the best content creators in London. From mobile-first creators to professional videographers - discover what works for your brand.', true);
    updateMetaTag('og:type', 'article', true);
    updateMetaTag('og:url', 'https://yoursite.com/best-content-creators-london', true);
    updateMetaTag('og:image', 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=630&fit=crop', true);
    
    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', 'How to Find the Best Content Creators in London? Complete Guide 2024');
    updateMetaTag('twitter:description', 'Your complete guide to finding and hiring the best content creators in London for maximum brand impact.');
    updateMetaTag('twitter:image', 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=630&fit=crop');
    
    // Article structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Find the Best Content Creators in London? Complete Guide 2024",
      "author": {
        "@type": "Person",
        "name": "Sarah Johnson"
      },
      "datePublished": "2024-06-12",
      "dateModified": "2024-06-12",
      "image": "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=630&fit=crop",
      "description": "Discover how to find the best content creators in London. Learn to identify mobile-first vs professional creators, evaluate reach, and find the perfect match for your brand."
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
            backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1600&h=900&fit=crop')"
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
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>Content Creator Guide</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            How to Find the Best Content Creators in London?
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Your complete guide to discovering, evaluating, and hiring top content creators in London for maximum brand impact and authentic engagement.
          </p>
          
          <div className="flex items-center justify-center gap-3 mt-8">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face" 
              alt="Sarah Johnson, Content Marketing Expert"
              className="w-12 h-12 rounded-full border-2 border-white/30"
            />
            <div className="text-left">
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm opacity-75">Content Marketing Expert</div>
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
              <h2 className="text-3xl font-bold mb-6 text-foreground">Why Finding the Right Content Creator Matters</h2>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                London's creator economy is booming, with thousands of talented content creators across every niche imaginable. But here's the challenge: not every creator is the right fit for your brand. The difference between a successful campaign and a missed opportunity often comes down to understanding the nuances of creator selection.
              </p>
              
              <TipBox 
                title="Success Metric"
                content="Brands that carefully match creator styles to their campaign goals see 3x higher engagement rates compared to those who focus solely on follower count."
              />
              
              <p className="text-lg leading-relaxed mt-6 text-muted-foreground">
                Whether you're a startup looking for authentic user-generated content or an established brand seeking premium visual storytelling, this guide will help you navigate London's diverse creator landscape and find your perfect match.
              </p>
            </section>

            {/* Two Types of Content Creators */}
            <section id="creator-types" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Understanding the Two Main Types of Content Creators</h2>
              
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop" 
                  alt="Content creator using mobile phone to create authentic social media content in London"
                  className="w-full rounded-xl shadow-lg"
                />
                <caption className="text-sm text-muted-foreground mt-2 block text-center italic">
                  The creator landscape spans from mobile-first authenticity to professional production values.
                </caption>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-200">Mobile-First Creators</h3>
                  <p className="text-blue-700 dark:text-blue-300 mb-4">
                    These creators use smartphones (primarily iPhones) and excel at creating authentic, relatable content that feels genuine and unfiltered.
                  </p>
                  <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Best For:</h4>
                  <ul className="space-y-1 text-blue-700 dark:text-blue-300 text-sm">
                    <li>• User-generated content (UGC) campaigns</li>
                    <li>• Authentic product demonstrations</li>
                    <li>• Behind-the-scenes content</li>
                    <li>• Relatable lifestyle content</li>
                    <li>• Quick social media posts</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Professional Creators</h3>
                  <p className="text-purple-700 dark:text-purple-300 mb-4">
                    These creators use high-end cameras, prime lenses, and professional equipment to produce premium visual content with exceptional production value.
                  </p>
                  <h4 className="font-semibold mb-2 text-purple-800 dark:text-purple-200">Best For:</h4>
                  <ul className="space-y-1 text-purple-700 dark:text-purple-300 text-sm">
                    <li>• Premium brand campaigns</li>
                    <li>• Product photography and videography</li>
                    <li>• Cinematic brand storytelling</li>
                    <li>• High-end fashion and lifestyle</li>
                    <li>• Commercial-grade content</li>
                  </ul>
                </div>
              </div>

              <PullQuote 
                quote="The key is matching creator style to campaign intent. Authentic moments require mobile-first creators, while brand prestige calls for professional production."
                author="Marketing Director at London Creative Agency"
              />
            </section>

            {/* Video Content Power */}
            <section id="video-content" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">The Undeniable Power of Video Content</h2>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                In 2024, video isn't just king—it's the entire kingdom. TikTok, Instagram Reels, and YouTube Shorts have fundamentally shifted how audiences consume content, making video skills non-negotiable for successful creators.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 p-8 rounded-xl border border-red-200 dark:border-red-800 my-8">
                <h3 className="text-xl font-semibold mb-4 text-red-800 dark:text-red-200">Video Performance Statistics</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">85%</div>
                    <div className="text-sm text-red-700 dark:text-red-300">Higher engagement on video posts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">12x</div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">More shares than images</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">64%</div>
                    <div className="text-sm text-yellow-700 dark:text-yellow-300">Purchase decisions influenced by video</div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">Platform-Specific Video Strategies</h3>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Different platforms require different video approaches. Top London creators understand these nuances and adapt their content accordingly. When evaluating creators, prioritize those who demonstrate strong video skills across multiple platforms.
              </p>

              <TipBox 
                title="Creator Evaluation Tip"
                content="Look for creators who post video content at least 70% of the time and show consistent engagement across TikTok, Reels, and YouTube Shorts."
              />
            </section>

            {/* Evaluating Creator Reach */}
            <section id="evaluating-reach" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">How to Properly Evaluate a Creator's Real Reach</h2>
              
              <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">⚠️ The Follower Count Trap</h3>
                <p className="text-yellow-700 dark:text-yellow-300">
                  Follower counts can be misleading. Likes can be purchased for as little as £10 per thousand. Instead, focus on metrics that indicate genuine engagement and reach.
                </p>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">Key Metrics to Analyze</h3>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-4 text-left font-semibold">Metric</th>
                      <th className="border border-border p-4 text-left font-semibold">Why It Matters</th>
                      <th className="border border-border p-4 text-left font-semibold">Good Benchmark</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-4 font-medium">Video Views</td>
                      <td className="border border-border p-4">Harder to fake, shows real reach</td>
                      <td className="border border-border p-4 text-green-600">{'>'} 10% of followers</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4 font-medium">Comments Quality</td>
                      <td className="border border-border p-4">Indicates genuine engagement</td>
                      <td className="border border-border p-4 text-green-600">Meaningful responses</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4 font-medium">Story Views</td>
                      <td className="border border-border p-4">Shows active, engaged audience</td>
                      <td className="border border-border p-4 text-green-600">{'>'} 15% of followers</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4 font-medium">Save Rate</td>
                      <td className="border border-border p-4">Content value and memorability</td>
                      <td className="border border-border p-4 text-green-600">{'>'} 5% on posts</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <PullQuote 
                quote="We've seen creators with 50K followers outperform those with 500K simply because their audience was more engaged and relevant to our target market."
                author="Brand Manager at London Fashion Brand"
              />
            </section>

            {/* Different Creator Types */}
            <section id="creator-categories" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Navigating Different Creator Categories in London</h2>
              
              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                London's creator scene is incredibly diverse. Understanding different creator types helps you identify the perfect match for your brand's tone, goals, and target audience.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">🎨 Aesthetic Visual Creators</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Masters of visual storytelling with cohesive feeds and stunning photography.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <strong>Best for:</strong> Fashion, beauty, lifestyle brands
                  </div>
                </div>

                <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">📖 Storytellers</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Compelling narrative creators who excel at emotional connection and brand stories.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <strong>Best for:</strong> Mission-driven brands, personal services
                  </div>
                </div>

                <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">😂 Skit & Humor Creators</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Entertainment-focused creators who make brands memorable through humor and creativity.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <strong>Best for:</strong> Youth brands, entertainment, casual dining
                  </div>
                </div>

                <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">🎓 Educational Influencers</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Knowledge-focused creators who build trust through valuable, informative content.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <strong>Best for:</strong> B2B, tech, financial services, education
                  </div>
                </div>

                <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">🎬 Cinematic Videographers</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    High-production creators who create movie-quality content for premium brands.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <strong>Best for:</strong> Luxury brands, automotive, travel, real estate
                  </div>
                </div>

                <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">🏠 Lifestyle Creators</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Day-in-the-life creators who seamlessly integrate brands into authentic moments.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <strong>Best for:</strong> Consumer goods, food & beverage, wellness
                  </div>
                </div>
              </div>

              <TipBox 
                title="Matching Strategy"
                content="The best creator partnerships happen when the creator's natural content style aligns with your brand values. Force-fitting rarely works well."
              />
            </section>

            {/* AI-Enhanced Creators */}
            <section id="ai-creators" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">The Rise of AI-Enhanced Creators: The Future is Here</h2>
              
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop" 
                  alt="AI technology and content creation tools representing the future of digital marketing"
                  className="w-full rounded-xl shadow-lg"
                />
                <caption className="text-sm text-muted-foreground mt-2 block text-center italic">
                  AI-enhanced creators are revolutionizing content production with unprecedented efficiency and creativity.
                </caption>
              </div>

              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                A new breed of creators is emerging in London—those who skillfully blend human creativity with AI tools to produce content at scale without sacrificing quality. These creators represent the future of content marketing.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">AI Tools Transforming Content Creation</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-800">
                    <h4 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-2">🎬 AI Video Editing</h4>
                    <p className="text-sm text-cyan-700 dark:text-cyan-300">Automated cutting, color correction, and effects that reduce editing time by 80%</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🗣️ Voice Cloning & Translation</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Content localization and multilingual reach without additional recording</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">📅 Smart Scheduling</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">AI-optimized posting times and content distribution across platforms</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">♻️ Content Repurposing</h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300">Transform one piece of content into 10+ formats for different platforms</p>
                  </div>
                </div>
              </div>

              <PullQuote 
                quote="AI-enhanced creators deliver 300% more content variations in half the time, making them incredibly valuable for brands needing consistent, high-volume content."
                author="Head of Digital at London Marketing Agency"
              />

              <h3 className="text-2xl font-semibold mb-4 text-foreground">Why AI-Enhanced Creators Matter for Brands</h3>
              <div className="bg-muted/50 p-6 rounded-xl my-6 border-l-4 border-primary">
                <ul className="space-y-3 text-muted-foreground">
                  <li>• <strong>Scalability:</strong> Can produce content at volumes traditional creators cannot match</li>
                  <li>• <strong>Consistency:</strong> Maintain brand voice and quality across all content</li>
                  <li>• <strong>Adaptability:</strong> Quickly pivot content strategy based on performance data</li>
                  <li>• <strong>Cost Efficiency:</strong> Deliver more content per pound invested</li>
                  <li>• <strong>Innovation:</strong> Stay ahead of trends with cutting-edge content formats</li>
                </ul>
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Finding Your Perfect Creator Match in London</h2>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                The London creator landscape offers incredible opportunities for brands willing to move beyond follower counts and focus on authentic alignment. Whether you need mobile-first authenticity, professional production values, or AI-enhanced scalability, the perfect creator for your brand is out there.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                Remember: the best creator partnerships are built on shared values, audience alignment, and mutual respect for each other's expertise. Take time to research, engage, and build relationships rather than rushing into one-off campaigns.
              </p>

              <TipBox 
                title="Final Success Tip"
                content="Start with micro-campaigns to test creator fit before committing to larger partnerships. This approach minimizes risk while maximizing learning opportunities."
              />

              {/* Call to Action Section */}
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-2xl p-8 md:p-12 my-12 border text-center">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Need Help Finding the Perfect Content Creator Match in London?
                </h3>
                
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Our team specializes in connecting brands with the ideal London creators based on your specific goals, audience, and campaign requirements.
                </p>
                
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 px-8 rounded-lg transition-colors text-lg">
                  Contact Us
                </button>
                
                <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <span>✓ Curated creator database</span>
                  <span>✓ Performance guaranteed</span>
                  <span>✓ Full campaign management</span>
                </div>
              </div>
            </section>

            {/* Author Bio */}
            <AuthorBio />

            {/* Newsletter CTA */}
            <NewsletterCTA />
          </main>
        </div>
      </div>
    </article>
  );
};
