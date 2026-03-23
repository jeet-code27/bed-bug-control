import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Pest Control & Bed Bug Blog | BedBugsBoston.us",
  description: "Read the latest updates, tips, and professional advice on bed bug extermination, prevention, and pest control in the Greater Boston area.",
  publisher: "BedBugsBoston.us",
  alternates: {
    canonical: "https://bedbugsboston.us/blog",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Pest Control & Bed Bug Blog | BedBugsBoston.us",
    description: "Read the latest updates, tips, and professional advice on bed bug extermination, prevention, and pest control in the Greater Boston area.",
    url: "https://bedbugsboston.us/blog",
    siteName: "BedBugsBoston.us",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Boston skyline",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const POSTS = [
  {
    slug: "bed-bug-treatment-boston-ma",
    title: "Fast, Professional Bed Bug Treatment in Boston and Surrounding Areas",
    excerpt: "If you’re dealing with bed bugs in your Boston home or apartment, you need immediate, expert help. Bed bugs spread fast, hide deep, and are nearly impossible to eliminate without professional treatment.",
    image: "/images/bed-bug-exterminator-boston.webp",
    date: "March 24, 2026",
    readTime: "4 min read",
    author: "Boston Pest Experts"
  },
  {
    slug: "bed-bugs-in-boston-hidden-infestation",
    title: "Bed Bugs in Boston: The Hidden Infestation Impacting Beantown and Beyond",
    excerpt: "If you’ve ever woken up in your Back Bay apartment with mysterious bites or noticed tiny rust-colored stains on your sheets, you’re not alone. Bed bugs have quietly become one of the most persistent urban problems across Boston.",
    image: "/images/boston-skyline.webp",
    date: "March 23, 2026",
    readTime: "5 min read",
    author: "Boston Pest Experts"
  }
];

export default function BlogListing() {
  return (
    <main className="bg-[#f8faf8] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#111] mb-6">
            Pest Control <span className="text-[#0a802c]">Insights & News</span>
          </h1>
          <p className="text-lg text-gray-600">
            Expert advice, local news, and comprehensive guides to protecting your Boston home from bed bugs and other pests.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0a802c]">
                    Local News
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-medium mb-4">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#111] leading-snug mb-3 group-hover:text-[#0a802c] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-[#0a802c] font-semibold text-sm">
                    Read Article 
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
