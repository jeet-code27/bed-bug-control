"use client";

const NEIGHBORHOODS = [
    "Back Bay", "South End", "Fenway", "Allston/Brighton", "Dorchester",
    "East Boston", "Mission Hill", "Roxbury Crossing", "Kenmore", "Longwood"
];

const MA_CITIES = [
    "Boston", "Cambridge", "Somerville", "Brookline", "Newton", "Needham",
    "Watertown", "Belmont", "Arlington", "Dedham", "West Roxbury", "Roslindale", "Hyde Park"
];

export default function AreasServed() {
    return (
        <section id="areas-served" className="bg-[#f6f2ea] w-full py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col gap-16 text-center">

                <div>
                    <h2 className="text-[#1a1a1a] text-3xl font-semibold mb-8">
                        City of Boston Neighborhood Protection
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {NEIGHBORHOODS.map(hood => (
                            <div key={hood} className="bg-white border border-[#e0e0e0] px-5 py-2.5 rounded-full text-[#3a3a3a] text-[15px] font-medium shadow-sm">
                                {hood}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mx-auto w-full max-w-4xl border-t border-[#dcdcdc]" />

                <div>
                    <h2 className="text-[#1a1a1a] text-3xl font-semibold mb-8">
                        Massachusetts Cities Served
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {MA_CITIES.map(city => (
                            <div key={city} className="bg-white border border-[#e0e0e0] px-5 py-2.5 rounded-full text-[#3a3a3a] text-[15px] font-medium shadow-sm">
                                {city}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
