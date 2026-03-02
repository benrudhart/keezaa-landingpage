import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tools.applemediaservices.com",
      },
    ],
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) =>
        typeof rule === "object" &&
        rule !== null &&
        "test" in rule &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg")
    );

    if (
      !fileLoaderRule ||
      typeof fileLoaderRule !== "object" ||
      fileLoaderRule === null
    ) {
      return config;
    }

    config.module.rules.push(
      {
        ...(fileLoaderRule as Record<string, unknown>),
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: (fileLoaderRule as { issuer?: unknown }).issuer,
        resourceQuery: {
          not: [
            ...(((fileLoaderRule as { resourceQuery?: { not?: RegExp[] } })
              .resourceQuery?.not ?? [])),
            /url/,
          ],
        },
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              typescript: true,
              svgoConfig: {
                plugins: [
                  {
                    name: "removeAttrs",
                    params: {
                      attrs: "(class)",
                    },
                  },
                ],
              },
            },
          },
        ],
      }
    );

    (fileLoaderRule as { exclude?: RegExp }).exclude = /\.svg$/i;

    return config;
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              typescript: true,
              svgoConfig: {
                plugins: [
                  {
                    name: "removeAttrs",
                    params: {
                      attrs: "(class)",
                    },
                  },
                ],
              },
            },
          },
        ],
        as: "*.js",
      },
    },
  },
  devIndicators: false,
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      "remark-frontmatter",
      ["remark-mdx-frontmatter", { name: "metadata" }],
    ],
  },
});

export default withMDX(nextConfig);
