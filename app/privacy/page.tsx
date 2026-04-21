import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Rocky Plays',
  description: 'Privacy policy for Rocky Plays mobile applications and games.',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 min-h-screen">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-12 backdrop-blur-sm">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p className="text-lg">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              Thank you for playing our game! This Privacy Policy explains how we collect, use, and protect information in our mobile applications and games designed for children (the "App"). We are committed to protecting our players' privacy and ensuring a safe, fun environment. We comply with the Children's Online Privacy Protection Act (COPPA) and other applicable privacy laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Do Not Collect</h2>
            <p>
              We prioritize the safety and privacy of children. 
              <strong> Our App does not collect any personally identifiable information (PII) from children.</strong> We do not ask for, collect, or store names, email addresses, phone numbers, physical addresses, or any other personal identifiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Information We Collect Automatically</h2>
            <p className="mb-4">
              To provide and improve our services, we may collect non-personal, anonymous data regarding your use of the App, such as:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Device information (e.g., device type, operating system version).</li>
              <li>General usage data (e.g., time spent in the game, levels completed, in-game events) to help us analyze player behavior and improve game mechanics.</li>
              <li>Crash reports to help us fix bugs and improve performance.</li>
            </ul>
            <p className="mt-4">
              This data is strictly aggregated and cannot be used to identify any individual child or adult.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
            <p>
              We do not include third-party ads or in-app purchases in this version of our App, ensuring a safe experience. If we use third-party analytics tools (e.g., Apple Analytics), they are configured to only collect non-identifiable usage data to help us improve the game's stability and performance, in strict compliance with COPPA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Storage and Security</h2>
            <p>
              Any anonymous usage data we collect is stored securely. We take reasonable measures to protect this information from unauthorized access, loss, or disclosure. Since we do not collect personal information, there is no sensitive data at risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date." We encourage parents and guardians to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="mt-4 font-semibold text-white">
              support@rockyplays.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
