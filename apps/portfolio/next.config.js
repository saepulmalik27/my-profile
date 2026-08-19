/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js blocks cross-origin dev asset requests by default (anti
  // DNS-rebinding protection) — only localhost/127.0.0.1 are allowed
  // unless the Host is explicitly listed here. Needed to develop against
  // a custom local hostname like local.inspigo.id.
  allowedDevOrigins: ['local.inspigo.id'],
};

export default nextConfig;
