/**
 * SEO Configuration for Vaxen
 * Centralized SEO metadata and structured data for easy updates
 */

export const seoConfig = {
  // Basic Meta Information
  title: "Vaxen – AI Voice Assistants for Business | 24/7 Call Answering & Lead Capture",
  description: "Never miss a lead again. Vaxen's AI voice assistants answer calls 24/7, qualify leads, and book appointments automatically. Human-like AI phone agents that scale your business.",
  
  // Site Information
  siteUrl: "https://www.vaxen.ai",
  siteName: "Vaxen",
  
  // Social Media
  social: {
    linkedIn: "https://www.linkedin.com/company/vaxen-ai",
  },
  
  // Open Graph / Social Preview
  ogImage: "https://www.vaxen.ai/og-image.png", // Placeholder - replace with actual image URL
  
  // Target Keywords (for reference - use naturally in content)
  targetKeywords: [
    "AI voice assistant for business",
    "AI phone agent",
    "AI call answering service",
    "24/7 virtual receptionist",
    "AI appointment booking",
    "AI phone answering for small business"
  ],
};

/**
 * JSON-LD Structured Data
 * Helps search engines understand Vaxen's business and services
 */

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vaxen",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/favicon.png`,
  "sameAs": [
    seoConfig.social.linkedIn
  ],
  "description": "AI voice assistant platform providing 24/7 call answering, lead qualification, and appointment booking for businesses."
};

// Service/SoftwareApplication Schema
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Vaxen AI Voice Assistant",
  "applicationCategory": "BusinessApplication",
  "description": "AI-powered phone agent platform that handles customer calls 24/7, qualifies leads, books appointments, and provides multilingual support for businesses of all sizes.",
  "operatingSystem": "Web-based",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "provider": {
    "@type": "Organization",
    "name": "Vaxen",
    "url": seoConfig.siteUrl
  },
  "featureList": [
    "24/7 AI call answering",
    "Lead qualification",
    "Appointment booking and reminders",
    "Multilingual support",
    "Zero hold time",
    "Human-like conversations"
  ]
};

// WebSite Schema with SearchAction
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": seoConfig.siteName,
  "url": seoConfig.siteUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${seoConfig.siteUrl}/?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};
