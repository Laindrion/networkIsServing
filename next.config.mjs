import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
  // Your normal Next.js config options can go here, for example:
  reactStrictMode: true,
};

export default withSentryConfig(nextConfig, {
  org: "oh-wow-thats-pizza",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  tunnelRoute: "/monitoring",
  disableLogger: true,
  automaticVercelMonitors: true,
});
