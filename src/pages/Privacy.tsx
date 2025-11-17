import { useEffect } from "react";
import { SEO } from "@/components/SEO";
import { FloatingHeader } from "@/components/FloatingHeader";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Privacy Policy - Vaxen AI Voice Assistants"
        description="Privacy Policy for Vaxen, Inc. Learn how we collect, use, and protect your data when using our AI voice assistant platform."
      />
      
      <div className="min-h-screen bg-background">
        <FloatingHeader />
        
        <main className="container mx-auto max-w-4xl px-4 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <p className="text-sm">Last Updated: January 2025</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
              <p>
                This Privacy Policy describes how Vaxen, Inc. ("Vaxen," "we," "us," or "our") collects, uses, 
                and discloses information about you when you use our AI voice assistant platform and services 
                (collectively, the "Services"). By using the Services, you agree to the collection and use of 
                information in accordance with this Privacy Policy.
              </p>
              <p>
                Vaxen provides AI voice assistants and AI phone agents that handle calls, answer questions, 
                qualify leads, and book appointments for businesses. Our Services enable businesses to integrate 
                AI-powered voice technology into their call workflows.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Personal Data</h3>
              <p>
                When you create an account or use our Services, we may collect personal information such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Business information (company name, industry, business size)</li>
                <li>Account credentials and authentication information</li>
                <li>Payment and billing information</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Usage Data</h3>
              <p>
                We automatically collect information about how you interact with our Services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage patterns and feature engagement</li>
                <li>Performance data and error logs</li>
                <li>Session data and timestamps</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Communications Data</h3>
              <p>
                When you use our AI voice assistants, we may collect and process:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Call recordings and transcripts</li>
                <li>Voice data and audio files</li>
                <li>Communication metadata (call duration, timestamps, phone numbers)</li>
                <li>Customer interaction data and conversation flows</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Cookies and Tracking Technologies</h3>
              <p>
                We use cookies and similar tracking technologies to track activity on our Services and store 
                certain information. You can instruct your browser to refuse all cookies or to indicate when 
                a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our AI voice assistant Services</li>
                <li>Process transactions and manage your account</li>
                <li>Train and improve our AI models and voice technology</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations and enforce our terms and policies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Sharing and Disclosure</h2>
              <p>We may share your information in the following circumstances:</p>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Service Providers</h3>
              <p>
                We may share your information with third-party service providers who perform services on our 
                behalf, such as cloud hosting, payment processing, data analysis, customer support, and 
                telecommunications services.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Business Transfers</h3>
              <p>
                If we are involved in a merger, acquisition, or sale of assets, your information may be 
                transferred as part of that transaction. We will provide notice before your information 
                becomes subject to a different privacy policy.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Legal Requirements</h3>
              <p>
                We may disclose your information if required to do so by law or in response to valid requests 
                by public authorities (e.g., a court or government agency).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention</h2>
              <p>
                We retain your information for as long as necessary to provide you with our Services and to 
                comply with legal obligations. Call recordings and voice data are typically retained for 
                [specify retention period] unless you request deletion or as required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights and Choices</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Access and Correction</h3>
              <p>
                You may access and update your account information at any time by logging into your account 
                or contacting us at privacy@vaxen.ai.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Data Deletion</h3>
              <p>
                You have the right to request deletion of your personal information. Please note that we may 
                retain certain information as required by law or for legitimate business purposes.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Marketing Communications</h3>
              <p>
                You may opt out of receiving promotional emails by following the unsubscribe instructions in 
                those emails. You may continue to receive transactional or administrative messages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">GDPR Compliance (EEA Users)</h2>
              <p>
                If you are located in the European Economic Area (EEA), you have certain rights under the 
                General Data Protection Regulation (GDPR), including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at privacy@vaxen.ai.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">CCPA/CPRA Rights (California Users)</h2>
              <p>
                If you are a California resident, the California Consumer Privacy Act (CCPA) and California 
                Privacy Rights Act (CPRA) provide you with specific rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to know what personal information is collected, used, shared, or sold</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of the sale or sharing of personal information</li>
                <li>Right to correct inaccurate personal information</li>
                <li>Right to limit use and disclosure of sensitive personal information</li>
                <li>Right to non-discrimination for exercising your rights</li>
              </ul>
              <p className="mt-4">
                To submit a request, please contact us at privacy@vaxen.ai or call us at [phone number].
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of 
                residence. These countries may have data protection laws different from those in your country. 
                We take appropriate safeguards to ensure your data is protected in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
              <p>
                Our Services are not intended for individuals under the age of 18. We do not knowingly collect 
                personal information from children. If you believe we have collected information from a child, 
                please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last Updated" date. You are 
                advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 space-y-1">
                <p>Vaxen, Inc.</p>
                <p>Email: privacy@vaxen.ai</p>
                <p>Support: support@vaxen.ai</p>
                <p>Website: www.vaxen.ai</p>
              </div>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
