import Link from "next/link";
import BlogPopup from "@/components/BlogPopup";
import {
  Thermometer,
  AlertTriangle,
  CheckCircle,
  XCircle,
  DollarSign,
  Shield,
} from "lucide-react";

export const metadata = {
  title:
    "Can I Get Rid of Bed Bugs Without Tossing Furniture? | BedBugsBoston.us",
  description:
    "Learn how to eliminate bed bugs in Greater Boston without ditching your furniture. Expert tips, treatment options, and local solutions that work.",
  keywords:
    "get rid of bed bugs without throwing away furniture, bed bug furniture treatment Boston, save mattress from bed bugs, bed bug heat treatment Boston, bed bug exterminator Boston",
  authors: [{ name: "Alex" }],
  publisher: "BedBugsBoston.us",
  alternates: {
    canonical:
      "https://bedbugsboston.us/blog/get-rid-of-bed-bugs-without-throwing-away-furniture",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title:
      "Can I Get Rid of Bed Bugs Without Throwing Away My Furniture?",
    description:
      "Learn how to eliminate bed bugs in Greater Boston without ditching your furniture. Expert tips, treatment options, and local solutions that work.",
    url: "https://bedbugsboston.us/blog/get-rid-of-bed-bugs-without-throwing-away-furniture",
    siteName: "BedBugsBoston.us",
    images: [
      {
        url: "/images/bed-bug-exterminator-boston.webp",
        width: 1200,
        height: 630,
        alt: "Professional bed bug treatment saving furniture in Boston home",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2026-04-13T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Can I Get Rid of Bed Bugs Without Throwing Away My Furniture?",
    description: "Learn how to eliminate bed bugs in Greater Boston without ditching your furniture. Expert tips, treatment options, and local solutions that work.",
    images: ["/images/bed-bug-exterminator-boston.webp"],
  },
};
  alternates: {
    canonical:
      "https://bedbugsboston.us/blog/get-rid-of-bed-bugs-without-throwing-away-furniture",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title:
      "Can I Get Rid of Bed Bugs Without Throwing Away My Furniture?",
    description:
      "Learn how to eliminate bed bugs in Greater Boston without ditching your furniture. Expert tips, treatment options, and local solutions that work.",
    url: "https://bedbugsboston.us/blog/get-rid-of-bed-bugs-without-throwing-away-furniture",
    siteName: "BedBugsBoston.us",
    images: [
      {
        url: "/images/bed-bug-exterminator-boston.webp",
        width: 1200,
        height: 630,
        alt: "Professional bed bug treatment saving furniture in Boston home",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2026-04-13T00:00:00.000Z",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Can I Get Rid of Bed Bugs Without Throwing Away My Furniture?",
  image: "/images/bed-bug-exterminator-boston.webp",
  author: {
    "@type": "Person",
    name: "Alex",
    url: "https://bedbugsboston.us",
  },
  publisher: {
    "@type": "Organization",
    name: "BedBugsBoston.us",
    logo: {
      "@type": "ImageObject",
      url: "https://bedbugsboston.us/logo.png",
    },
  },
  datePublished: "2026-04-13",
  dateModified: "2026-04-13",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://bedbugsboston.us/blog/get-rid-of-bed-bugs-without-throwing-away-furniture",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to completely eliminate bed bugs from furniture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Complete elimination typically takes 2-4 weeks with professional treatment. Steam Heat works in one day but follow-up inspections after two weeks ensure success. Chemical treatments require multiple applications spaced 10-14 days apart to catch newly hatched bugs.",
      },
    },
    {
      "@type": "Question",
      name: "Can bed bugs live inside wooden furniture frames?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bed bugs cannot burrow into solid wood but they hide in cracks, joints, and hardware holes in wooden furniture. They prefer tight spaces close to where people sleep. Regular inspection of joints and hardware helps catch infestations early in wood furniture.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to keep my mattress if it has bed bugs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, mattresses can be saved with proper treatment and encasement. After professional heat or chemical treatment, seal the mattress in a bed bug-proof cover. This traps any remaining bugs inside where they eventually die while protecting you from bites.",
      },
    },
    {
      "@type": "Question",
      name: "How much does professional bed bug treatment cost in Boston?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional bed bug treatment in Greater Boston ranges from $300 to $1500 depending on home size and treatment method. Steam Heat costs more upfront but often requires fewer visits. Chemical treatment costs less initially but needs multiple applications for complete elimination.",
      },
    },
    {
      "@type": "Question",
      name: "What temperature kills bed bugs in furniture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bed bugs die at sustained temperatures above 120°F. Professional Steam Heat raises room temperature to 135-145°F for several hours to ensure all bugs and eggs die. For freezing, items must stay at 0°F for at least four days to kill all life stages effectively.",
      },
    },
  ],
};

export default function BlogPost() {
  return (
    <>
      <BlogPopup />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-white min-h-screen pt-32 pb-24">
        {/* Article Header */}
        <header className="max-w-6xl mx-auto px-6 lg:px-16 text-center mb-12">
          <div className="flex items-center justify-center gap-3 text-sm text-[#0a802c] font-bold tracking-wide uppercase mb-6">
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <span className="text-gray-300">•</span>
            <span>Furniture &amp; Treatment Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#111] leading-[1.1] mb-8 max-w-5xl mx-auto">
            Can I Get Rid of Bed Bugs Without Throwing Away My Furniture?
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0a802c]/10 flex items-center justify-center text-[#0a802c] font-bold">
                BP
              </div>
              <div className="text-left">
                <p className="font-bold text-[#111]">Alex</p>
                <p>April 13, 2026</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
            <p className="font-medium">14 Min Read</p>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-6 lg:px-16 mb-16">
          <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl bg-[#0a802c]/10 flex items-center justify-center">
            <div className="text-center px-8">
              <div className="w-20 h-20 rounded-full bg-[#0a802c]/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-[#0a802c]" />
              </div>
              <p className="text-[#0a802c] font-bold text-xl">
                Save Your Furniture — Beat the Bugs
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Professional Bed Bug Treatment · Greater Boston Area
              </p>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="max-w-4xl mx-auto px-6 lg:px-16 pb-16">

          {/* Section: You Don't Have to Ditch Your Stuff */}
          <h2 className="text-3xl lg:text-4xl font-black text-[#111] mt-4 mb-6">
            You Don&apos;t Have to Ditch Your Stuff to Beat Bed Bugs
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Let&apos;s be real. Finding bed bugs in your Somerville triple-decker or Cambridge apartment is a nightmare. Your first thought might be hauling everything to the curb. But hold up.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            You don&apos;t need to trash your furniture to get rid of bed bugs. That&apos;s actually throwing money away. Most furniture can be treated and saved with the right approach.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Boston winters are brutal enough without spending cash on new couches. The good news? Professional treatment and some DIY effort can save your belongings and your wallet.
          </p>

          {/* Quick CTA strip */}
          <div className="my-10 flex items-center gap-4 bg-[#f0faf4] border border-[#0a802c]/20 rounded-2xl px-6 py-5">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0a802c]/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#0a802c]" />
            </div>
            <div>
              <p className="font-bold text-[#111] text-base">
                Worried about your furniture? Don&apos;t throw it out yet.
              </p>
              <Link
                href="/#contact"
                className="text-[#0a802c] text-sm font-semibold hover:underline"
              >
                Get a free inspection quote →
              </Link>
            </div>
          </div>

          {/* Understanding What You're Dealing With */}
          <h2 className="text-3xl lg:text-4xl font-black text-[#111] mt-16 mb-6">
            Understanding What You&apos;re Dealing With
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Bed bugs are tough customers. These tiny reddish-brown pests are about the size of an apple seed. They hide in cracks, crevices, and fabric folds during the day.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            According to the National Pest Management Association, bed bug cases in urban areas like Boston increased by 47% from 2020 to 2023. The Greater Boston area ranks among the top 20 cities for infestations nationwide. Learn more about{" "}
            <Link
              href="/blog/why-boston-is-a-hotbed-for-bed-bugs"
              className="text-[#0a802c] font-medium hover:underline"
            >
              why Boston is a hotbed for bed bugs
            </Link>
            .
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            These bugs don&apos;t discriminate. They show up in luxury Back Bay condos and Allston student housing alike. They hitchhike on luggage, backpacks, and secondhand furniture.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            The key is catching them early. The longer you wait, the harder they are to eliminate. Read our guide on{" "}
            <Link
              href="/blog/bed-bugs-in-boston-hidden-infestation"
              className="text-[#0a802c] font-medium hover:underline"
            >
              Boston&apos;s hidden bed bug infestation
            </Link>{" "}
            to understand the full scope of the problem.
          </p>

          {/* Why Throwing Away Furniture Doesn't Always Work */}
          <h2 className="text-3xl lg:text-4xl font-black text-[#111] mt-16 mb-6">
            Why Throwing Away Furniture Doesn&apos;t Always Work
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Many people think tossing the bed frame or couch solves everything. Wrong.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Bed bugs don&apos;t just live in one piece of furniture. They spread to baseboards, outlets, picture frames, and carpets. Getting rid of your bed might remove some bugs, but others stay behind.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Plus, discarded furniture on the street becomes someone else&apos;s problem. Responsible disposal means preventing spread to neighbors.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Furniture replacement costs add up fast. A decent mattress runs $800 to $2000. Bed frames cost another $300 to $1000. Sofas? Even more.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Professional treatment costs less than replacing everything.
          </p>

          {/* Callout box */}
          <div className="my-10 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl flex gap-4">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-800 text-base mb-1">
                Don&apos;t Put Infested Furniture on the Street
              </p>
              <p className="text-amber-700 text-sm leading-relaxed">
                Leaving infested furniture on the curb spreads bed bugs to neighbors. If you must dispose of items, wrap them completely in plastic and mark them clearly as &quot;BED BUGS&quot; before disposal.
              </p>
            </div>
          </div>

          {/* What Actually Works */}
          <h2 className="text-3xl lg:text-4xl font-black text-[#111] mt-16 mb-6">
            What Actually Works for Getting Rid of Bed Bugs
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            <strong className="text-[#111]">Steam Heat is your best friend.</strong> Bed bugs die at temperatures above 120°F. Professional Steam Heat raises room temperature to 135–145°F for several hours.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            This kills bugs at all life stages including eggs. No chemicals needed. Safe for most furniture materials.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Chemical treatments work too but require multiple applications. Professionals use EPA-approved pesticides that are safe when applied correctly.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Steam cleaning reaches into cracks and seams where bugs hide. The steam must reach 160–180°F to be effective.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Freezing works for smaller items. Bed bugs die at 0°F after four days. Boston winters help here. Bag items and leave them outside during deep freezes.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            For a detailed overview of all professional options, see our full guide on{" "}
            <Link
              href="/blog/bed-bug-treatment-boston-ma"
              className="text-[#0a802c] font-medium hover:underline"
            >
              bed bug treatment in Boston MA
            </Link>
            .
          </p>

          {/* How to Treat Different Types of Furniture */}
          <h2 className="text-3xl lg:text-4xl font-black text-[#111] mt-16 mb-6">
            How to Treat Different Types of Furniture
          </h2>

          <h3 className="text-2xl font-bold text-[#111] mt-10 mb-4">
            Mattresses and Box Springs
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Don&apos;t toss them automatically. Encase them in bed bug-proof covers after treatment. These covers trap any remaining bugs inside where they starve.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Quality encasements cost $50 to $150. Much cheaper than new mattresses.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Vacuum all seams and tufts thoroughly first. Dispose of the vacuum bag immediately in a sealed plastic bag.
          </p>

          <h3 className="text-2xl font-bold text-[#111] mt-10 mb-4">
            Couches and Upholstered Furniture
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            These can be saved with professional treatment. Technicians use specialized tools to inject steam or chemicals into cushions and frames.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Remove cushions and vacuum all surfaces. Check under stapled fabric on the bottom. Bugs love hiding there.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            For minor infestations, thorough vacuuming plus targeted pesticide application works.
          </p>

          <h3 className="text-2xl font-bold text-[#111] mt-10 mb-4">
            Wooden Furniture
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Wood furniture is actually easier to treat. Bugs can&apos;t burrow into solid wood. They only hide in joints and cracks.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Inspect carefully with a flashlight. Look for tiny dark spots (bug droppings) and shed skins.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Wipe down with rubbing alcohol. Seal any cracks with wood filler after treatment.
          </p>

          <h3 className="text-2xl font-bold text-[#111] mt-10 mb-4">
            Metal Frames and Plastic Items
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            These are the easiest to save. Bugs have few hiding spots. Thorough cleaning usually does the trick.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Wipe everything down with hot soapy water or rubbing alcohol. Let items sit in the sun on a hot day if possible.
          </p>

          {/* Furniture types comparison cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
            {[
              {
                icon: <CheckCircle className="w-5 h-5 text-[#0a802c]" />,
                title: "Easiest to Save",
                items: ["Metal frames", "Plastic items", "Solid wood furniture", "Wooden dressers"],
                bg: "bg-[#f0faf4]",
                border: "border-[#0a802c]/20",
              },
              {
                icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
                title: "Needs Professional Treatment",
                items: ["Mattresses & box springs", "Upholstered couches", "Fabric headboards", "Padded chairs"],
                bg: "bg-amber-50",
                border: "border-amber-200",
              },
            ].map(({ icon, title, items, bg, border }) => (
              <div key={title} className={`p-6 rounded-2xl border ${bg} ${border}`}>
                <div className="flex items-center gap-2 mb-4">
                  {icon}
                  <p className="font-bold text-[#111]">{title}</p>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-gray-700 text-sm flex gap-2 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Professional Help in Greater Boston */}
          <h2 className="text-3xl lg:text-4xl font-black text-[#111] mt-16 mb-6">
            Professional Help in the Greater Boston Area
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            When DIY isn&apos;t cutting it, call the pros. Trying to handle a serious infestation yourself usually makes things worse.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            For comprehensive pest control services throughout the Greater Boston area,{" "}
            <a
              href="https://pestcontrolboston.us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a802c] font-medium hover:underline"
            >
              pestcontrolboston.us
            </a>{" "}
            offers experienced technicians who understand local housing stock. They know the challenges of treating three-deckers, brownstones, and apartment buildings common in our neighborhoods.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            If you&apos;re specifically dealing with bed bugs,{" "}
            <Link
              href="/"
              className="text-[#0a802c] font-medium hover:underline"
            >
              bedbugsboston.us
            </Link>{" "}
            specializes in these particular pests. They use Steam Heat, chemical options, and inspection services tailored to Boston-area homes. Check our page on{" "}
            <Link
              href="/blog/bed-bug-treatment-boston-ma"
              className="text-[#0a802c] font-medium hover:underline"
            >
              professional bed bug treatment options
            </Link>{" "}
            to learn more.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Professional services typically cost $300 to $1500 depending on infestation severity and treatment method. Still cheaper than furniture replacement.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Look for companies offering guarantees and follow-up inspections. Reputable providers stand behind their work.
          </p>

          {/* DIY Steps That Actually Help */}
          <h2 className="text-3xl lg:text-4xl font-black text-[#111] mt-16 mb-6">
            DIY Steps That Actually Help
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            You can&apos;t eliminate bed bugs with DIY alone in most cases. But these steps support professional treatment.
          </p>

          <div className="space-y-5 mb-10">
            {[
              {
                icon: <Thermometer className="w-5 h-5 text-[#0a802c]" />,
                title: "Wash Everything on High Heat",
                text: "Wash all bedding, curtains, and clothing in hot water. Dry on high heat for at least 30 minutes. Heat kills bugs and eggs.",
              },
              {
                icon: <Shield className="w-5 h-5 text-[#0a802c]" />,
                title: "Vacuum Thoroughly Every Day",
                text: "Vacuum thoroughly every day during treatment. Focus on mattress seams, baseboards, and furniture cracks. Seal and dispose of vacuum bags outside immediately.",
              },
              {
                icon: <CheckCircle className="w-5 h-5 text-[#0a802c]" />,
                title: "Reduce Clutter",
                text: "Fewer hiding spots mean easier treatment. Store items in sealed plastic bins during treatment.",
              },
              {
                icon: <DollarSign className="w-5 h-5 text-[#0a802c]" />,
                title: "Use Interceptor Traps",
                text: "Use interceptor traps under bed legs. These cups catch bugs trying to climb up. They help monitor whether treatment worked.",
              },
              {
                icon: <AlertTriangle className="w-5 h-5 text-[#0a802c]" />,
                title: "Be Patient",
                text: "Complete elimination takes 2-3 weeks minimum, often longer. Follow all professional recommendations exactly.",
              },
            ].map(({ icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#0a802c]/10 flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <p className="font-bold text-[#111] mb-1">{title}</p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Common Mistakes */}
          <h2 className="text-3xl lg:text-4xl font-black text-[#111] mt-16 mb-6">
            Common Mistakes People Make
          </h2>

          <div className="space-y-4 mb-10">
            {[
              {
                mistake: "Sleeping in Another Room",
                detail: "Sleeping in another room spreads the problem. Bugs follow their food source (you). They'll expand to new areas.",
              },
              {
                mistake: "Using Bug Bombs or Foggers",
                detail: "Using bug bombs or foggers pushes bugs deeper into walls. They hide until it's safe to come out. Professional pest controllers don't recommend these products.",
              },
              {
                mistake: "Skipping Follow-Up Treatments",
                detail: "Skipping follow-up treatments lets survivors rebuild populations. One pregnant female can restart an infestation.",
              },
              {
                mistake: "Not Preparing Properly",
                detail: "Not preparing properly before professional treatment wastes money. Follow all prep instructions about washing, bagging, and moving items.",
              },
            ].map(({ mistake, detail }) => (
              <div key={mistake} className="flex gap-4 items-start p-5 bg-red-50 rounded-2xl border border-red-100">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  <strong className="text-[#111]">{mistake}:</strong> {detail}
                </p>
              </div>
            ))}
          </div>

          {/* Cost Comparison */}
          <h2 className="text-3xl lg:text-4xl font-black text-[#111] mt-16 mb-6">
            How Much Does It Really Cost to Save Your Furniture?
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Treatment costs vary but break down like this in the Boston area:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {/* Treatment Costs */}
            <div className="p-6 bg-[#f0faf4] border border-[#0a802c]/20 rounded-2xl">
              <p className="font-black text-[#0a802c] text-lg mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Treatment Costs
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  ["Steam Heat (1-bedroom)", "$800–$1,500"],
                  ["Chemical treatment (1 bedroom)", "$300–$600"],
                  ["Steam cleaning service", "$200–$400"],
                  ["Mattress encasements (per bed)", "$50–$150"],
                  ["Professional inspection", "$100–$300"],
                ].map(([item, cost]) => (
                  <li key={item} className="flex justify-between items-center border-b border-[#0a802c]/10 pb-2 last:border-0 last:pb-0">
                    <span>{item}</span>
                    <span className="font-bold text-[#0a802c]">{cost}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Replacement Costs */}
            <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
              <p className="font-black text-red-600 text-lg mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Replacement Costs
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  ["New mattress and box spring", "$1,000–$2,500"],
                  ["New bed frame", "$300–$1,000"],
                  ["New couch", "$800–$3,000"],
                  ["New dresser", "$400–$1,200"],
                ].map(([item, cost]) => (
                  <li key={item} className="flex justify-between items-center border-b border-red-100 pb-2 last:border-0 last:pb-0">
                    <span>{item}</span>
                    <span className="font-bold text-red-600">{cost}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            The math makes sense. Treatment is cheaper.
          </p>

          {/* Signs Your Furniture Can Be Saved */}
          <h2 className="text-3xl lg:text-4xl font-black text-[#111] mt-16 mb-6">
            Signs Your Furniture Can Be Saved
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Most furniture survives treatment just fine. Save your stuff if:
          </p>
          <div className="space-y-3 mb-8">
            {[
              "The structure is sound with no major damage",
              "You caught the infestation relatively early",
              "You're willing to follow treatment protocols",
              "Professionals say it's treatable",
            ].map((item) => (
              <div key={item} className="flex gap-3 items-center">
                <CheckCircle className="w-5 h-5 text-[#0a802c] flex-shrink-0" />
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Consider replacement only if:
          </p>
          <div className="space-y-3 mb-10">
            {[
              "Furniture is severely damaged or very old",
              "Multiple treatments have failed",
              "Professionals recommend replacement",
              "Items have major tears where bugs penetrate deep inside",
            ].map((item) => (
              <div key={item} className="flex gap-3 items-center">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>

          {/* Preventing Future Infestations */}
          <h2 className="text-3xl lg:text-4xl font-black text-[#111] mt-16 mb-6">
            Preventing Future Infestations
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Once you&apos;ve eliminated bed bugs, keep them gone.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Inspect secondhand furniture carefully before bringing it home. Check all seams and joints. This is especially important for Airbnb hosts and short-term rental owners — read our guide on{" "}
            <Link
              href="/blog/airbnb-bed-bug-control-boston"
              className="text-[#0a802c] font-medium hover:underline"
            >
              bed bug control for Airbnb in Boston
            </Link>
            .
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Use mattress and box spring covers permanently. They prevent new infestations from establishing.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Vacuum regularly, especially in bedrooms. Weekly cleaning catches problems early.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            When traveling, inspect hotel rooms before unpacking. Keep luggage on metal racks, not beds or floors. Learn the risks with our{" "}
            <a
              href="https://pestcontrolboston.us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a802c] font-medium hover:underline"
            >
              Greater Boston pest control experts
            </a>
            .
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Wash travel clothes in hot water immediately when returning home.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            If you use public transit, being aware of potential exposure is also important. Check our guide on{" "}
            <Link
              href="/blog/bed-bugs-on-the-mbta-boston-t-prevention"
              className="text-[#0a802c] font-medium hover:underline"
            >
              bed bugs on the MBTA Boston T
            </Link>{" "}
            for commuter tips.
          </p>

          {/* The Bottom Line */}
          <h2 className="text-3xl lg:text-4xl font-black text-[#111] mt-16 mb-6">
            The Bottom Line for Boston Residents
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            You can get rid of bed bugs without throwing away furniture in most cases. Professional treatment combined with proper preparation saves your belongings and money.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Don&apos;t let panic lead to wasteful decisions. Get a professional inspection first. Understand what you&apos;re dealing with before hauling stuff to the curb.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Yes, bed bugs are stressful. But they&apos;re treatable. Thousands of Boston-area residents have successfully eliminated them while keeping their furniture.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            The key is acting quickly, choosing the right treatment method, and working with experienced professionals who understand local conditions.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6 font-bold text-[#111]">
            Your couch from Jordan&apos;s Furniture can be saved. That family heirloom dresser doesn&apos;t need to go. With proper treatment, you&apos;ll sleep soundly again without breaking the bank on replacements.
          </p>

          {/* FAQ Section */}
          <div className="mt-16 bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
            <h2 className="text-3xl font-black text-[#111] mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#111] mb-3">
                  How long does it take to completely eliminate bed bugs from furniture?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Complete elimination typically takes 2–4 weeks with professional treatment. Steam Heat works in one day but follow-up inspections after two weeks ensure success. Chemical treatments require multiple applications spaced 10–14 days apart to catch newly hatched bugs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111] mb-3">
                  Can bed bugs live inside wooden furniture frames?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Bed bugs cannot burrow into solid wood but they hide in cracks, joints, and hardware holes in wooden furniture. They prefer tight spaces close to where people sleep. Regular inspection of joints and hardware helps catch infestations early in wood furniture.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111] mb-3">
                  Is it safe to keep my mattress if it has bed bugs?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, mattresses can be saved with proper treatment and encasement. After professional heat or chemical treatment, seal the mattress in a bed bug-proof cover. This traps any remaining bugs inside where they eventually die while protecting you from bites.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111] mb-3">
                  How much does professional bed bug treatment cost in Boston?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Professional bed bug treatment in Greater Boston ranges from $300 to $1500 depending on home size and treatment method. Steam Heat costs more upfront but often requires fewer visits. Chemical treatment costs less initially but needs multiple applications for complete elimination.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111] mb-3">
                  What temperature kills bed bugs in furniture?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Bed bugs die at sustained temperatures above 120°F. Professional Steam Heat raises room temperature to 135–145°F for several hours to ensure all bugs and eggs die. For freezing, items must stay at 0°F for at least four days to kill all life stages effectively.
                </p>
              </div>
            </div>
          </div>

          {/* Internal Linking / CTA */}
          <div className="mt-16 p-10 bg-[#0a802c]/5 border border-[#0a802c]/20 rounded-3xl text-center shadow-sm">
            <h3 className="text-3xl font-black text-[#111] mt-0 mb-4">
              Ready to Save Your Furniture?
            </h3>
            <p className="mb-8 text-gray-700 text-lg max-w-2xl mx-auto">
              Don&apos;t throw it out. Boston&apos;s bed bug specialists offer fast inspections and effective treatment options that save your belongings and your wallet.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-10 py-4 bg-[#0a802c] text-white font-bold text-lg rounded-xl hover:bg-[#086a24] transition-all duration-300 shadow-lg hover:shadow-[#0a802c]/30 hover:-translate-y-1"
            >
              Get a Free Inspection Quote
            </Link>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <Link
                href="/blog/bed-bug-treatment-boston-ma"
                className="hover:text-[#0a802c] hover:underline transition-colors"
              >
                → Bed Bug Treatment Boston MA
              </Link>
              <Link
                href="/blog/why-boston-is-a-hotbed-for-bed-bugs"
                className="hover:text-[#0a802c] hover:underline transition-colors"
              >
                → Why Boston Has a Bed Bug Problem
              </Link>
              <Link
                href="/blog/bed-bugs-in-boston-hidden-infestation"
                className="hover:text-[#0a802c] hover:underline transition-colors"
              >
                → Boston&apos;s Hidden Infestation
              </Link>
              <Link
                href="/blog/airbnb-bed-bug-control-boston"
                className="hover:text-[#0a802c] hover:underline transition-colors"
              >
                → Airbnb Bed Bug Guide
              </Link>
              <Link
                href="/blog/bed-bugs-on-the-mbta-boston-t-prevention"
                className="hover:text-[#0a802c] hover:underline transition-colors"
              >
                → MBTA Commuter Prevention
              </Link>
              <Link
                href="/blog"
                className="hover:text-[#0a802c] hover:underline transition-colors"
              >
                → All Blog Posts
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
