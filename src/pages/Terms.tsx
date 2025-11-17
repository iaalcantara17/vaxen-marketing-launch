import { useEffect } from "react";
import { SEO } from "@/components/SEO";
import { FloatingHeader } from "@/components/FloatingHeader";
import { Footer } from "@/components/Footer";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Terms of Service - Vaxen AI Voice Assistants"
        description="Terms of Service for Vaxen, Inc. Review the terms and conditions for using our AI voice assistant platform."
      />
      
      <div className="min-h-screen bg-background">
        <FloatingHeader />
        
        <main className="container mx-auto max-w-4xl px-4 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <p className="text-sm">Last Updated: January 2025</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                Welcome to Vaxen, Inc. ("Vaxen," "we," "us," or "our"). These Terms of Service ("Terms") 
                govern your access to and use of Vaxen's AI voice assistant platform and services, including 
                our AI phone agents, voice technology, and related features (collectively, the "Services").
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree 
                to these Terms, you may not access or use the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
              <p>
                Vaxen provides AI-powered voice assistants and phone agents that enable businesses to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Answer and handle incoming calls 24/7</li>
                <li>Qualify leads and collect customer information</li>
                <li>Schedule appointments and manage calendars</li>
                <li>Provide automated customer support</li>
                <li>Integrate with existing business workflows and systems</li>
              </ul>
              <p>
                Our Services use artificial intelligence and machine learning to provide human-like voice 
                interactions on behalf of your business.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Eligibility and Account Registration</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Eligibility</h3>
              <p>
                You must be at least 18 years old and have the legal capacity to enter into contracts to use 
                our Services. By using the Services, you represent and warrant that you meet these requirements.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Account Registration</h3>
              <p>
                To access certain features of the Services, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your account credentials secure and confidential</li>
                <li>Notify us immediately of any unauthorized access to your account</li>
                <li>Be responsible for all activities that occur under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Use of the Service</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">License Grant</h3>
              <p>
                Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable 
                license to access and use the Services for your internal business purposes.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Acceptable Use</h3>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Services for any illegal or unauthorized purpose</li>
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Transmit spam, viruses, or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
                <li>Remove or modify any proprietary notices or labels</li>
                <li>Use the Services to harass, abuse, or harm others</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Interfere with or disrupt the Services or servers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Customer Data and AI Processing</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Your Data</h3>
              <p>
                You retain all rights to the data, content, and information you provide to or through the 
                Services ("Customer Data"), including call recordings, voice data, and customer information. 
                You grant us a license to use, process, and store Customer Data solely to provide and improve 
                the Services.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">AI Training and Improvement</h3>
              <p>
                We may use anonymized and aggregated Customer Data to train and improve our AI models, voice 
                technology, and Services. We will not use your identifiable Customer Data for these purposes 
                without your explicit consent.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Data Responsibilities</h3>
              <p>You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ensuring you have all necessary rights and consents to provide Customer Data to Vaxen</li>
                <li>Complying with all applicable privacy and data protection laws</li>
                <li>Obtaining required consents for call recording and voice data processing</li>
                <li>Ensuring your use of the Services complies with telemarketing laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Intellectual Property</h3>
              <p>
                The Services, including all software, technology, content, trademarks, and materials, are 
                owned by Vaxen or our licensors and are protected by intellectual property laws. You may not 
                use our intellectual property without our prior written consent.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Customer Content</h3>
              <p>
                You retain ownership of Customer Data. We do not claim ownership of any content you provide, 
                but you grant us the rights necessary to provide the Services as described in these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Payment and Subscriptions</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Fees</h3>
              <p>
                Certain features of the Services may require payment of fees. You agree to pay all applicable 
                fees as described in your subscription plan. Fees are non-refundable except as required by law 
                or as expressly stated in these Terms.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Billing</h3>
              <p>
                By providing payment information, you authorize us to charge the applicable fees to your 
                payment method. You are responsible for maintaining accurate billing information.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Subscription Renewal</h3>
              <p>
                Subscriptions automatically renew unless you cancel before the renewal date. We will charge 
                your payment method for the renewal term.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Third-Party Services</h2>
              <p>
                Our Services may integrate with or rely on third-party services, including telephony providers, 
                cloud infrastructure, and business tools. Your use of third-party services is subject to their 
                respective terms and conditions. We are not responsible for third-party services or their availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Disclaimers</h2>
              <p>
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER 
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS 
                FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p>
                We do not warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Services will be uninterrupted, secure, or error-free</li>
                <li>The results obtained from the Services will be accurate or reliable</li>
                <li>Any errors or defects will be corrected</li>
                <li>The Services will meet your specific requirements</li>
              </ul>
              <p>
                AI technology may produce unexpected or inaccurate results. You are responsible for reviewing 
                and verifying all AI-generated content and interactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, VAXEN AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, 
                AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE 
                DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE 
                LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES.
              </p>
              <p>
                OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL 
                NOT EXCEED THE AMOUNT YOU PAID TO VAXEN IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Vaxen and its affiliates, officers, directors, 
                employees, and agents from and against any claims, liabilities, damages, losses, and expenses, 
                including reasonable attorneys' fees, arising out of or related to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of the Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Your Customer Data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Termination</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Termination by You</h3>
              <p>
                You may terminate your account at any time by contacting us at support@vaxen.ai or through 
                your account settings.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Termination by Us</h3>
              <p>
                We may suspend or terminate your access to the Services at any time, with or without cause or 
                notice, including if you violate these Terms. Upon termination, your right to use the Services 
                will immediately cease.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Effect of Termination</h3>
              <p>
                Upon termination, we may delete your account and Customer Data in accordance with our data 
                retention policies. You may request a copy of your data before termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Governing Law and Jurisdiction</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of 
                Delaware, without regard to its conflict of law provisions. Any disputes arising out of or 
                related to these Terms or the Services shall be subject to the exclusive jurisdiction of the 
                state and federal courts located in Delaware.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">14. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time by posting the revised Terms on our website. Your 
                continued use of the Services after the changes become effective constitutes your acceptance 
                of the revised Terms. We will notify you of material changes via email or through the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">15. Miscellaneous</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Entire Agreement</h3>
              <p>
                These Terms constitute the entire agreement between you and Vaxen regarding the Services and 
                supersede all prior agreements and understandings.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Severability</h3>
              <p>
                If any provision of these Terms is found to be invalid or unenforceable, the remaining 
                provisions will continue to be valid and enforceable.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Waiver</h3>
              <p>
                No waiver of any provision of these Terms shall be deemed a further or continuing waiver of 
                such provision or any other provision.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Assignment</h3>
              <p>
                You may not assign or transfer these Terms or your rights under these Terms without our prior 
                written consent. We may assign these Terms without restriction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">16. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 space-y-1">
                <p>Vaxen, Inc.</p>
                <p>Email: legal@vaxen.ai</p>
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

export default Terms;
