/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fndaviiwvhrqdxamgoem.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/tables/**",
      },
    ],
  },
};

export default nextConfig;
