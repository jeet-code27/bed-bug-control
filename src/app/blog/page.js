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
        url: "/images/banner.webp",
        width: 1200,
        height: 630,
        alt: "Boston skyline",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const FEATURED_POST = {
  slug: "does-summer-heat-kill-bed-bugs-in-boston",
  title: "Bed Bugs in Boston Area: Does Summer Heat Kill Them?",
  excerpt: "Every summer, Boston residents ask the same question: does the heat take care of bed bugs? The short answer: not even close. Learn why summer actually makes infestations worse — and what treatment actually works.",
  image: "/images/bed-bug-banner-5.webp",
  date: "April 29, 2026",
  readTime: "8 min read",
  author: "Alex",
};

const POSTS = [
  {
    slug: "how-did-i-get-bed-bugs-in-boston",
    title: "How Did I Get Bed Bugs? 7 Ways They Enter Boston Homes",
    excerpt: "Discover how bed bugs enter clean Boston homes through travel, furniture, and guests. Learn prevention tips and find professional help to eliminate infestations.",
    image: "/images/boston-dense-housing.webp",
    date: "April 20, 2026",
    readTime: "10 min read",
    author: "Alex"
  },
  {
    slug: "get-rid-of-bed-bugs-without-throwing-away-furniture",
    title: "Can I Get Rid of Bed Bugs Without Throwing Away My Furniture?",
    excerpt: "Finding bed bugs in your Somerville triple-decker or Cambridge apartment is a nightmare. But you don't need to trash your furniture. Learn how professional treatment and smart DIY steps save your belongings and your wallet.",
    image: "/images/bed-bug-furniture-save-boston.webp",
    date: "April 13, 2026",
    readTime: "14 min read",
    author: "Alex"
  },
  {
    slug: "bed-bugs-on-the-mbta-boston-t-prevention",
    title: "Bed Bugs on the T: Can You Bring Pests Home from the Boston Commuter Rail?",
    excerpt: "You grab your coffee at North Station and squeeze into a packed Red Line car. But could you be bringing bed bugs home from your daily commute? Learn how Boston MBTA riders can protect themselves.",
    image: "/images/boston-train-bed-bugs.webp",
    date: "April 3, 2026",
    readTime: "12 min read",
    author: "Alex"
  },
  {
    slug: "airbnb-bed-bug-control-boston",
    title: "A Real Guide to Pest Control and Bed Bug Control for Airbnb Owners in Greater Boston",
    excerpt: "Running an Airbnb in the Greater Boston area is solid money — unless bed bugs destroy your listing overnight. This guide covers prevention, guest incident response, costs, and the best professional services for short-term rental hosts.",
    image: "/images/airbnb-bed-bug-boston.webp",
    date: "March 31, 2026",
    readTime: "8 min read",
    author: "Alex"
  },
  {
    slug: "why-boston-is-a-hotbed-for-bed-bugs",
    title: "Why Is Boston a Hotbed for Bed Bugs? Hotel Prevention Guide",
    excerpt: "Boston ranks among the top 20 bed bug infested cities. Learn why bed bugs thrive in Boston and how hotels, Airbnbs, and inns can protect themselves.",
    image: "/images/boston-hotel-bed-bug.webp",
    date: "March 26, 2026",
    readTime: "6 min read",
    author: "Alex"
  },
  {
    slug: "bed-bug-treatment-boston-ma",
    title: "Fast, Professional Bed Bug Treatment in Boston and Surrounding Areas",
    excerpt: "If you're dealing with bed bugs in your Boston home or apartment, you need immediate, expert help. Bed bugs spread fast, hide deep, and are nearly impossible to eliminate without professional treatment.",
    image: "/images/bed-bug-exterminator-boston.webp",
    date: "March 24, 2026",
    readTime: "4 min read",
    author: "Alex"
  },
  {
    slug: "bed-bugs-in-boston-hidden-infestation",
    title: "Bed Bugs in Boston: The Hidden Infestation Impacting Beantown and Beyond",
    excerpt: "If you've ever woken up in your Back Bay apartment with mysterious bites or noticed tiny rust-colored stains on your sheets, you're not alone. Bed bugs have quietly become one of the most persistent urban problems across Boston.",
    image: "/images/boston-skyline.webp",
    date: "March 23, 2026",
    readTime: "5 min read",
    author: "Alex"
  }
];

export default function BlogListing() {
  return (
    <main className="bg-[#f8faf8] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#111] mb-6">
            Pest Control <span className="text-[#0a802c]">Insights & News</span>
          </h1>
          <p className="text-lg text-gray-600">
            Expert advice, local news, and comprehensive guides to protecting your Boston home from bed bugs and other pests.
          </p>
        </div>

        {/* SEO Intro Text Block */}
        <div className="max-w-4xl mx-auto mb-16 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-black text-[#111] mb-4">Boston&apos;s Most Trusted Bed Bug Resource</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bed bugs are one of the fastest-growing pest problems across Greater Boston and all of Massachusetts. From Back Bay brownstones to Somerville triple-deckers, no neighborhood is immune. Our blog is dedicated to giving Boston homeowners, renters, landlords, and property managers the real, practical information they need to identify, prevent, and eliminate bed bug infestations — without the guesswork.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Each article is written with the specific challenges of New England housing in mind. Boston&apos;s older building stock, dense urban neighborhoods, active college population, and heavy tourism all create unique conditions that make bed bug prevention more complicated — and more critical — than in many other cities. Whether you live in a luxury condo in the Seaport or a multi-family home in Dorchester, our guides cover the situations real Bostonians face every day.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Browse our latest articles below. If you suspect an active infestation, do not wait — <Link href="/#contact" className="text-[#0a802c] font-semibold hover:underline">fill out our free inspection form</Link> and get connected with a licensed Boston-area professional within 48 hours.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-[3px] uppercase text-[#0a802c] mb-4">Featured Article</p>
          <Link href={`/blog/${FEATURED_POST.slug}`} className="group block">
            <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-full w-full overflow-hidden min-h-[280px]">
                <Image
                  src={FEATURED_POST.image}
                  alt={FEATURED_POST.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute top-4 left-4 bg-[#0a802c] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Featured
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-gray-400 font-medium mb-4">
                  <span>{FEATURED_POST.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>{FEATURED_POST.readTime}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-black text-[#111] leading-snug mb-4 group-hover:text-[#0a802c] transition-colors">
                  {FEATURED_POST.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {FEATURED_POST.excerpt}
                </p>
                <div className="flex items-center text-[#0a802c] font-semibold text-sm">
                  Read Full Article
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </article>
          </Link>
        </div>

        {/* Blog Grid */}
        <p className="text-xs font-bold tracking-[3px] uppercase text-gray-400 mb-6">More Articles</p>
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

        {/* SEO Text Section — Raises text-to-HTML ratio */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm mb-8">
            <h2 className="text-2xl font-black text-[#111] mb-6">Understanding Bed Bugs in the Greater Boston Area</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Boston consistently ranks among the top cities in the United States for bed bug infestations, according to annual reports from national pest control associations. The combination of a dense urban population, heavy international travel through Logan Airport, a large student population across dozens of colleges and universities, and a thriving short-term rental market makes Greater Boston one of the most active bed bug markets in the country.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bed bugs are not a sign of an unclean home. They are opportunistic hitchhikers that travel on luggage, clothing, used furniture, and even public transit. Once inside a Boston apartment or home, they reproduce quickly — a single female bed bug can lay up to 500 eggs in her lifetime. Without professional treatment, a small infestation can become a building-wide problem within weeks.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The good news is that modern pest control technology has made bed bug elimination faster, safer, and more effective than ever before. Steam heat treatment, biological solutions like Aprehend, and targeted chemical programs can eliminate infestations at every life stage — including eggs — in a single visit in most cases.
            </p>

            <h3 className="text-xl font-bold text-[#111] mb-4">Signs You May Have Bed Bugs</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start gap-2"><span className="text-[#0a802c] font-bold mt-1">•</span> Red, itchy welts on your skin — often in a line or cluster — that appear overnight</li>
              <li className="flex items-start gap-2"><span className="text-[#0a802c] font-bold mt-1">•</span> Tiny rust-colored or dark brown stains on your mattress seams, sheets, or pillowcases</li>
              <li className="flex items-start gap-2"><span className="text-[#0a802c] font-bold mt-1">•</span> Small white eggs or shed skins in mattress folds, behind headboards, or along baseboards</li>
              <li className="flex items-start gap-2"><span className="text-[#0a802c] font-bold mt-1">•</span> A faint, sweet musty odor in heavily infested rooms</li>
              <li className="flex items-start gap-2"><span className="text-[#0a802c] font-bold mt-1">•</span> Live bugs — apple seed-sized, flat, and reddish-brown — near the bed frame or furniture seams</li>
            </ul>

            <h3 className="text-xl font-bold text-[#111] mb-4">Why Professional Treatment Is Always Recommended</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Over-the-counter bed bug sprays and DIY heat methods rarely eliminate a full infestation. Bed bugs are highly resilient and have developed resistance to many common pesticide compounds. More importantly, they hide deep inside wall voids, electrical outlets, mattress interiors, and furniture frames — places consumer products simply cannot reach effectively.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Professional exterminators use commercial-grade equipment and proven protocols that ensure complete elimination. Many Boston-area professionals also offer follow-up inspections to confirm the infestation is fully resolved. <Link href="/#contact" className="text-[#0a802c] font-semibold hover:underline">Contact us for a free inspection today.</Link>
            </p>
          </div>

          <div className="bg-[#0a802c]/5 border border-[#0a802c]/20 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-black text-[#111] mb-3">Get a Free Bed Bug Inspection in Boston</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Serving Back Bay, South End, Cambridge, Somerville, Brookline, Quincy, Newton, Waltham, and all of Greater Boston. Available 7 days a week, including same-day response for urgent cases.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-[#0a802c] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#086a24] transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              Fill Out the Form — It&apos;s Free
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
