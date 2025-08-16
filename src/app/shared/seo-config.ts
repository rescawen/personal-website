// SEO Configuration for Wenlei Dai's Personal Website
export const seoConfig = {
  // Basic site information
  site: {
    name: "Wenlei Dai - Personal Website",
    description:
      "Personal website of Wenlei Dai, Software Engineer and StarCraft II player",
    url: "https://wenleidai.com",
    language: "en",
    defaultLanguage: "en",
    supportedLanguages: ["en", "fi"],
  },

  // Social media profiles
  social: {
    twitter: {
      handle: "@wenleidai",
      site: "@wenleidai",
      cardType: "summary_large_image",
    },
    linkedin: "https://www.linkedin.com/in/wenlei-dai-52484316b/",
    github: "https://github.com/rescawen",
    x: "https://x.com/ZhuGeLiangSc2",
  },

  // Default Open Graph settings
  openGraph: {
    type: "website",
    siteName: "Wenlei Dai - Personal Website",
    image: {
      url: "/images/zhugeliang_aboutme.png",
      width: 1200,
      height: 630,
      alt: "Wenlei Dai - Software Engineer & StarCraft II Player",
    },
  },

  // Default meta tags
  meta: {
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow",
    author: "Wenlei Dai",
    themeColor: "#ffffff",
    msapplicationTileColor: "#ffffff",
  },

  // Structured data schemas
  schemas: {
    person: {
      "@type": "Person",
      name: "Wenlei Dai",
      jobTitle: "Software Engineer",
      description:
        "Experienced software engineer specializing in front-end development with React, TypeScript, and Vue. Professional StarCraft II player with Finnish national championships.",
      url: "https://wenleidai.com",
      image: "/images/zhugeliang_aboutme.png",
      sameAs: [
        "https://github.com/rescawen",
        "https://linkedin.com/in/wenlei-dai-52484316b/",
        "https://x.com/ZhuGeLiangSc2",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Metaplay",
      },
      knowsAbout: [
        "React",
        "TypeScript",
        "Vue.js",
        "Frontend Development",
        "Web Technologies",
        "StarCraft II",
        "Esports",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Helsinki",
        addressCountry: "FI",
      },
      alumniOf: [
        {
          "@type": "Organization",
          name: "Aiforsite",
        },
        {
          "@type": "Organization",
          name: "Loihde",
        },
      ],
    },

    website: {
      "@type": "WebSite",
      name: "Wenlei Dai - Personal Website",
      description:
        "Personal website of Wenlei Dai, Software Engineer and StarCraft II player",
      url: "https://wenleidai.com",
      author: {
        "@type": "Person",
        name: "Wenlei Dai",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://wenleidai.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },

    organization: {
      "@type": "Organization",
      name: "Wenlei Dai",
      url: "https://wenleidai.com",
      logo: "/images/zhugeliang_aboutme.png",
      sameAs: [
        "https://github.com/rescawen",
        "https://linkedin.com/in/wenlei-dai-52484316b/",
        "https://x.com/ZhuGeLiangSc2",
      ],
    },
  },

  // Page-specific configurations
  pages: {
    about: {
      priority: 1.0,
      changefreq: "monthly",
      keywords: [
        "Wenlei Dai",
        "software engineer",
        "frontend developer",
        "React",
        "TypeScript",
        "Vue",
        "StarCraft II",
        "esports",
        "Helsinki",
        "Finland",
      ],
    },
    showcase: {
      priority: 0.8,
      changefreq: "monthly",
      keywords: [
        "portfolio",
        "showcase",
        "projects",
        "React",
        "TypeScript",
        "frontend development",
        "software engineering",
      ],
    },
    projects: {
      priority: 0.8,
      changefreq: "monthly",
      keywords: [
        "projects",
        "software development",
        "React",
        "TypeScript",
        "web applications",
        "portfolio",
      ],
    },
    esports: {
      priority: 0.8,
      changefreq: "monthly",
      keywords: [
        "StarCraft II",
        "esports",
        "gaming",
        "tournament",
        "championships",
        "Zerg",
        "professional gamer",
      ],
    },
  },

  // Performance and optimization settings
  performance: {
    imageOptimization: true,
    lazyLoading: true,
    preloadCriticalResources: true,
    minifyHTML: true,
    compressCSS: true,
    compressJS: true,
  },

  // Analytics and tracking (add your actual tracking IDs)
  analytics: {
    googleAnalytics: "", // Add your GA4 measurement ID
    googleTagManager: "", // Add your GTM container ID
    googleSearchConsole: "", // Add your Search Console verification code
  },

  // Security headers
  security: {
    contentSecurityPolicy:
      "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
    xFrameOptions: "DENY",
    xContentTypeOptions: "nosniff",
    referrerPolicy: "strict-origin-when-cross-origin",
    permissionsPolicy: "camera=(), microphone=(), geolocation=()",
  },
};

// Helper function to generate meta tags
export const generateMetaTags = (page: string, lang: string = "en") => {
  const config = seoConfig;
  const pageConfig = config.pages[page as keyof typeof config.pages];

  return {
    title: `${pageConfig?.keywords?.[0] || "Wenlei Dai"} - ${config.site.name}`,
    description: pageConfig?.keywords?.join(", ") || config.site.description,
    keywords: pageConfig?.keywords?.join(", "),
    priority: pageConfig?.priority || 0.5,
    changefreq: pageConfig?.changefreq || "monthly",
  };
};

// Helper function to generate structured data
export const generateStructuredData = (
  type: keyof typeof seoConfig.schemas
) => {
  return seoConfig.schemas[type];
};
