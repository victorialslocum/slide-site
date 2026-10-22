/** @type {import('next').NextConfig} */
const nextConfig = {
  // getStaticProps only lists public/slides at build time; keep the decks out of the function bundle
  outputFileTracingExcludes: {
    '*': ['public/**'],
  },
}

module.exports = nextConfig
