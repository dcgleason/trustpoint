/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['trustpointconsulting.co'],
  },
  async generateMetadata() {
    return {
      metadataBase: new URL('https://trustpointconsulting.co'),
      alternates: {
        canonical: '/',
      },
    }
  }
}

export default nextConfig
