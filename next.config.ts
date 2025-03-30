import { createSecureHeaders } from 'next-secure-headers';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  headers: async () => [
    {
      source: '/(.*)',
      headers: createSecureHeaders({
        // HSTS Preload: https://hstspreload.org/
        forceHTTPSRedirect: [
          true,
          { maxAge: 63072000, includeSubDomains: true, preload: true },
        ],
      }),
    },
  ],
};

export default nextConfig;
