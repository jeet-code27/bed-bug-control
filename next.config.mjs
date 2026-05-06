/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.bedbugsboston.us",
          },
        ],
        destination: "https://bedbugsboston.us/:path*",
        permanent: true, // 301 redirect — SEO safe
      },
    ];
  },
};

export default nextConfig;
