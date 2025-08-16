import React from "react";

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  author?: string;
  canonicalUrl?: string;
}

interface MetadataProps {
  metadata: PageMetadata;
  lang: string;
  currentPath: string;
}

export const Metadata: React.FC<MetadataProps> = ({
  metadata,
  lang,
  currentPath,
}) => {
  const {
    title,
    description,
    keywords,
    image,
    type = "website",
    publishedTime,
    author,
    canonicalUrl,
  } = metadata;

  const baseUrl = "https://wenleidai.com"; // Replace with your actual domain
  const fullCanonicalUrl = canonicalUrl || `${baseUrl}${currentPath}`;
  const fullImageUrl = image
    ? `${baseUrl}${image}`
    : `${baseUrl}/images/zhugeliang_aboutme.png`;

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Wenlei Dai" />
      <meta name="robots" content="index, follow" />

      {/* Language and Locale */}
      <meta property="og:locale" content={lang === "fi" ? "fi_FI" : "en_US"} />
      <meta
        property="og:locale:alternate"
        content={lang === "fi" ? "en_US" : "fi_FI"}
      />

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content="Wenlei Dai - Personal Website" />
      <meta property="og:locale" content={lang === "fi" ? "fi_FI" : "en_US"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:creator" content="@wenleidai" />
      <meta name="twitter:site" content="@wenleidai" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />

      {/* Article specific meta tags */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Structured Data - Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Wenlei Dai",
            jobTitle: "Software Engineer",
            description:
              "Experienced software engineer specializing in front-end development with React, TypeScript, and Vue. Professional StarCraft II player with Finnish national championships.",
            url: baseUrl,
            image: fullImageUrl,
            sameAs: [
              "https://github.com/wenleidai",
              "https://linkedin.com/in/wenleidai",
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
            alumniOf: {
              "@type": "Organization",
              name: "Aiforsite",
            },
          }),
        }}
      />

      {/* Structured Data - Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Wenlei Dai - Personal Website",
            description:
              "Personal website of Wenlei Dai, Software Engineer and StarCraft II player",
            url: baseUrl,
            author: {
              "@type": "Person",
              name: "Wenlei Dai",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: `${baseUrl}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  );
};

// Predefined metadata for each page
export const pageMetadata: Record<string, Record<string, PageMetadata>> = {
  en: {
    about: {
      title: "Wenlei Dai - Software Engineer & StarCraft II Player",
      description:
        "Experienced software engineer specializing in React, TypeScript, and Vue development. Professional StarCraft II player with Finnish national championships. Based in Helsinki, Finland.",
      keywords:
        "Wenlei Dai, software engineer, frontend developer, React, TypeScript, Vue, StarCraft II, esports, Helsinki, Finland, Metaplay, Aiforsite, Loihde",
      type: "profile",
      canonicalUrl: "https://wenleidai.com/en",
    },
    showcase: {
      title: "Showcase - Wenlei Dai's Work Portfolio",
      description:
        "Explore Wenlei Dai's professional work portfolio, featuring frontend development projects, React applications, and software engineering achievements.",
      keywords:
        "portfolio, showcase, projects, React, TypeScript, frontend development, software engineering, Wenlei Dai",
      type: "website",
      canonicalUrl: "https://wenleidai.com/en/showcase",
    },
    projects: {
      title: "Projects - Wenlei Dai's Development Work",
      description:
        "Browse through Wenlei Dai's software development projects, including React applications, TypeScript implementations, and innovative web solutions.",
      keywords:
        "projects, software development, React, TypeScript, web applications, Wenlei Dai, portfolio",
      type: "website",
      canonicalUrl: "https://wenleidai.com/en/projects",
    },
    esports: {
      title: "Esports - Wenlei Dai's StarCraft II Career",
      description:
        "Discover Wenlei Dai's professional StarCraft II career, achievements, tournament wins, and esports journey spanning over a decade.",
      keywords:
        "StarCraft II, esports, gaming, tournament, championships, Zerg, Wenlei Dai, professional gamer",
      type: "profile",
      canonicalUrl: "https://wenleidai.com/en/esports",
    },
  },
  fi: {
    about: {
      title: "Wenlei Dai - Ohjelmistosuunnittelija & StarCraft II -pelaaja",
      description:
        "Kokenut ohjelmistosuunnittelija, joka erikoistuu React-, TypeScript- ja Vue-kehitykseen. Ammattimainen StarCraft II -pelaaja suomalaisilla kansallisen tason mestaruuksilla. Asuu Helsingissä, Suomessa.",
      keywords:
        "Wenlei Dai, ohjelmistosuunnittelija, frontend-kehittäjä, React, TypeScript, Vue, StarCraft II, esports, Helsinki, Suomi, Metaplay, Aiforsite, Loihde",
      type: "profile",
      canonicalUrl: "https://wenleidai.com/fi",
    },
    showcase: {
      title: "Esittely - Wenlei Dain työportfolio",
      description:
        "Tutustu Wenlei Dain ammatilliseen työportfolioon, joka sisältää frontend-kehitysprojekteja, React-sovelluksia ja ohjelmistosuunnittelun saavutuksia.",
      keywords:
        "portfolio, esittely, projektit, React, TypeScript, frontend-kehitys, ohjelmistosuunnittelu, Wenlei Dai",
      type: "website",
      canonicalUrl: "https://wenleidai.com/fi/showcase",
    },
    projects: {
      title: "Projektit - Wenlei Dain kehitystyö",
      description:
        "Selaa Wenlei Dain ohjelmistokehitysprojekteja, mukaan lukien React-sovellukset, TypeScript-toteutukset ja innovatiiviset web-ratkaisut.",
      keywords:
        "projektit, ohjelmistokehitys, React, TypeScript, web-sovellukset, Wenlei Dai, portfolio",
      type: "website",
      canonicalUrl: "https://wenleidai.com/fi/projects",
    },
    esports: {
      title: "Esports - Wenlei Dain StarCraft II -ura",
      description:
        "Tutustu Wenlei Dain ammatilliseen StarCraft II -uraan, saavutuksiin, turnausvoittoihin ja esports-matkaan, joka on kestänyt yli vuosikymmenen.",
      keywords:
        "StarCraft II, esports, pelit, turnaus, mestaruudet, Zerg, Wenlei Dai, ammattipelaaja",
      type: "profile",
      canonicalUrl: "https://wenleidai.com/fi/esports",
    },
  },
};
