import Head from 'next/head'

/**
 * SEO Utility Component
 * Provides customizable meta tags for better SEO
 * 
 * @param {object} props - SEO configuration object
 */
export default function SEO({
  title = "Manirabona Patience - Software Engineer",
  description = "Software Engineer specializing in full-stack development, automation, and creating innovative tools. Building extraordinary solutions with creativity and code.",
  image = "/img/og-image.jpg",
  url = "https://patiencemanzen.vercel.app",
  type = "website",
  twitterCard = "summary_large_image",
  keywords = "software engineer, full-stack developer, web development, automation, portfolio, React, Next.js",
  author = "Manirabona Patience"
}) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Manirabona Patience Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@patiencemanzen" />
      
      {/* Structured Data for Person */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Manirabona Patience",
            "jobTitle": "Software Engineer",
            "url": url,
            "image": image,
            "description": description,
            "sameAs": [
              "https://www.linkedin.com/in/manirabona-patience",
              "https://github.com/patiencemanzen"
            ],
            "knowsAbout": [
              "Software Engineering",
              "Web Development",
              "Full-stack Development",
              "JavaScript",
              "React",
              "Next.js",
              "Node.js"
            ]
          })
        }}
      />
    </Head>
  )
}