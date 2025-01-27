import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['three'],

  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

};
const withMDX = createMDX({
  // Add markdown plugins here, as desired
})
module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    )

    return config
  },
}
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
