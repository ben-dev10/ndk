import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@_ndk/ui"],
};

export default withMDX(nextConfig);
