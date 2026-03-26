import Hero from "@/components/Hero";
import UrgentProblem from "@/components/UrgentProblem";
// import ThreeStepProcess from "@/components/ThreeStepProcess";
import QuoteSection from "@/components/QuoteSection";
import ReviewsSlider from "@/components/ReviewsSlider";
import PeaceOfMind from "@/components/PeaceOfMind";
import TreatmentTypes from "@/components/TreatmentTypes";
import InfestationReasons from "@/components/InfestationReasons";
import IndustriesReached from "@/components/IndustriesReached";
import FAQSection from "@/components/FAQSection";
import TopCities from "@/components/TopCities";
import AreasServed from "@/components/AreasServed";

export const metadata = {
  title: "Bed Bug Exterminator Boston MA | Free Inspection",
  description: "Need bed bugs gone fast in Boston? We eliminate bed bugs in one treatment using heat + canine detection. Same-day service in Back Bay, South End, Cambridge & all Greater Boston. Fill out the form for a free inspection 24/7.",
  alternates: {
    canonical: "https://bedbugsboston.us/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Bed Bug Exterminator Boston MA | Free Inspection",
    description: "Need bed bugs gone fast in Boston? We eliminate bed bugs in one treatment. Same-day service in Back Bay, South End, Cambridge & all Greater Boston. Get a free inspection 24/7.",
    url: "https://bedbugsboston.us/",
    siteName: "BedBugsBoston.us",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Bed bug exterminator serving Boston MA",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BedBugsBoston.us",
  "description": "Free bed bug exterminator referral service connecting Boston homeowners and businesses with licensed pest control professionals.",
  "url": "https://bedbugsboston.us",
  "logo": "https://bedbugsboston.us/images/logo.png",
  "image": "https://bedbugsboston.us/images/banner.jpg",
  "email": "worcesterpestcontrol@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "867 Boylston St Floor 5 PMB 275",
    "addressLocality": "Boston",
    "addressRegion": "MA",
    "postalCode": "02116",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.3489,
    "longitude": -71.0827
  },
  "areaServed": [
    { "@type": "City", "name": "Boston" },
    { "@type": "City", "name": "Cambridge" },
    { "@type": "City", "name": "Somerville" },
    { "@type": "City", "name": "Brookline" },
    { "@type": "City", "name": "Quincy" },
    { "@type": "City", "name": "Newton" },
    { "@type": "City", "name": "Waltham" }
  ],
  "serviceType": "Bed Bug Extermination Referral",
  "priceRange": "Free Inspection",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://bedbugsboston.us"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "128",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah M."
      },
      "datePublished": "2025-10-12",
      "reviewBody": "They came out exactly when they promised and eliminated our bed bug problem completely. Highly recommended in the Boston area.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      }
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does bed bug extermination cost in Boston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contact us for a free inspection. Bed bug treatment costs vary depending on the number of rooms treated, and the type of service done, depending on the activity level."
      }
    },
    {
      "@type": "Question",
      "name": "Who is the best bed bug exterminator in Boston 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There are few companies who provide these services: a) Biological Solution with a 90 day residual. b) Steam Heat Solution. c) Standalone Chemical Treatment. Companies who have these can meet your needs depending on activity levels and budget."
      }
    },
    {
      "@type": "Question",
      "name": "Does Steam Heat Treatment really kill bed bugs in one day in Boston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Gold Standard for Infestations — we vacuum infested areas first and then provide the steam heat treatment solution. The steam heat is raised to 212 degrees and targeted to certain areas to kill the bed bugs, nymphs and eggs. We pair it with a chemical solution and/or biological solution for a 90-day residual, and a free inspection."
      }
    },
    {
      "@type": "Question",
      "name": "Where are bed bugs worst in Boston right now?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "According to Boston Public Health data (2024), the neighborhoods with highest bed bug activity are: Allston/Brighton (college rentals), South End (high-density apartments), Back Bay (Airbnb units), Fenway (student housing), Dorchester (multi-family homes), and East Boston (triple-deckers)."
      }
    },
    {
      "@type": "Question",
      "name": "Can bed bugs live in Boston apartments with no pets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Bed bugs feed on human blood, not pets. They hide in mattresses, box springs, bed frames, couches, baseboards, electrical outlets, and even picture frames. Boston's triple-deckers and brownstones with shared walls make it easy for bed bugs to travel between units."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if I have bed bugs in my Boston apartment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Look for these 5 signs: 1) Red, itchy welts in lines or clusters. 2) Tiny blood spots on sheets. 3) Dark brown/black fecal stains on mattress seams. 4) Shed skins. 5) Live bugs – apple seed-sized, reddish-brown. If you see even ONE sign, contact us for a FREE inspection."
      }
    },
    {
      "@type": "Question",
      "name": "How fast can you come to Boston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a free inspection within 48 hours of filling out this form."
      }
    },
    {
      "@type": "Question",
      "name": "Is one steam heat treatment enough for Boston row houses and triple-deckers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — our heat treatment system is specifically designed for Boston's classic architecture. We treat triple-deckers, brownstones, and row houses daily. Our equipment can treat all three floors on the same day."
      }
    },
    {
      "@type": "Question",
      "name": "Are your bed bug treatments safe for babies and pregnant women in Boston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our steam heat treatment can be used with ZERO chemicals — just temperature and our biological solution for a 90-day residual. It's 100% safe for infants, pregnant women, elderly residents, and pets."
      }
    },
    {
      "@type": "Question",
      "name": "How long do I have to stay out of my Boston apartment after treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For heat treatment: 8–10 hours total. We start early (usually 7–8 AM), and you can return by dinner time the same day. No waiting period after. For any chemical follow-up spot treatments (rare), we ask for 4 hours."
      }
    },
    {
      "@type": "Question",
      "name": "Do bed bugs travel between apartments in Boston brownstones?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — this is extremely common in Boston's connected housing. Bed bugs travel through wall voids, electrical conduits, pipes, and even baseboards between units. Many Boston property managers now require building-wide heat treatments to prevent reinfestation."
      }
    },
    {
      "@type": "Question",
      "name": "Can you treat just one room or do you have to do the whole apartment in Boston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We strongly recommend whole-apartment treatment. Bed bugs travel — if they're in your bedroom, they're likely also in your living room furniture, closets, and baseboards. Treating just one room pushes them into untreated areas, and they'll return in 3–4 weeks."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <UrgentProblem />
      {/* <ThreeStepProcess /> */}
      <TreatmentTypes />
      <InfestationReasons />
      <QuoteSection />
      <IndustriesReached />
      <TopCities />
      <AreasServed />
      <FAQSection />
      <ReviewsSlider />
      <PeaceOfMind />
    </>
  );
}

