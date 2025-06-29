"use client";

import { data } from "./privacyPolicyContent";

export default function Page() {
  return (
    <div className="w-full bg-[#121212] text-white">
      {/* Header Section */}
      <section className="w-full flex flex-col items-center justify-center bg-[#00718233] 
      py-8 px-4 text-center">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Privacy Policy
        </h1>
        <p className="text-[#CFCFCF] text-base sm:text-lg">
          <span className="font-medium text-white">Effective Date:</span>{" "}
          {data.effectiveDate}
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-9 space-y-12">
        {/* Description */}
        <p className="text-[#C0C0C0] font-medium text-base sm:text-lg leading-7">
          At Marketing Wisdom {`("we," "our," or "us")`}, we are committed to
          safeguarding your privacy. This Privacy Policy describes how we
          collect, use, store, share, and protect your personal information when
          you visit our website{" "}
          <a
            href="https://www.marketingwisdom.in "
            className="underline text-[#007182]"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.marketingwisdom.in
          </a>{" "}
          or all of its domains and pages of the website to engage with our
          services.
        </p>
        <p>
          By accessing or using our Website, you consent to the practices
          outlined in this policy.
        </p>

        {/* Definitions Section */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl underline font-semibold text-[#007182] text-center">
            Definitions
          </h2>
          <p className="text-[#CFCFCF] font-medium text-base sm:text-lg leading-7">
            {data.definitions.description}
          </p>

          <ul className="mt-6 space-y-4 list-disc list-inside text-lg marker:text-xl ">
            {data.definitions.terms.map((term, index) => (
              <li key={index}>
                <span className="text-[#CFCFCF] font-medium text-base sm:text-lg leading-7">
                  {term.title}
                  {": "}
                </span>
                <span className="text-[#CFCFCF] font-medium text-base sm:text-lg leading-7">
                  {term.description}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* What Information We Collect Section */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl underline font-semibold text-[#007182]">
            1. What Information We Collect
          </h2>

          <p className="text-[#C0C0C0] font-medium text-base sm:text-lg leading-7">
            We may collect the following types of information depending on how
            you interact with our site.
          </p>

          {/* A. Personal Info */}
          <div className="space-y-2 pt-4">
            <h3 className="text-lg sm:text-xl font-medium text-[#007182]">
              A. Personal Information You Provide Directly
            </h3>
            <p className="text-[#CFCFCF] text-base font-medium sm:text-lg leading-7">
              When you contact us, sign up for our newsletter, download content,
              request a service, or make a payment, we may ask you to provide:
            </p>
            <ul className="list-disc list-inside marker:text-[#CFCFCF] text-[#CFCFCF] text-base sm:text-lg space-y-1 pl-4 font-medium">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Job Title</li>
              <li>Company Name</li>
              <li>Mailing or Billing Address</li>
              <li>Monthly or Annual Budget (for service inquiries)</li>
              <li>Payment Details (handled by secure third-party gateways)</li>
            </ul>
            <p className="text-[#CFCFCF] text-base sm:text-lg leading-7 font-medium">
              You provide this data voluntarily, and we only collect what is
              necessary to fulfill your request.
            </p>
          </div>

          {/* B. Automatically Collected Info */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-medium text-[#007182]">
              B. Information We Collect Automatically
            </h3>
            <p className="text-[#CFCFCF] text-base font-medium sm:text-lg leading-7">
              When you browse our website, we automatically collect certain data
              to improve user experience and understand visitor behavior. This
              includes:
            </p>
            <ul className="list-disc list-inside marker:text-[#CFCFCF] text-[#CFCFCF] text-base sm:text-lg space-y-1 pl-4 font-medium">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type (mobile/desktop)</li>
              <li>Pages visited and time spent on each</li>
              <li>Referring website or URL</li>
              <li>General geographic location</li>
            </ul>
            <p className="text-[#CFCFCF] text-base sm:text-lg leading-7">
              Cookies and similar technologies (explained below)
            </p>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold underline text-[#007182]">
            2. How We Use Your Information
          </h2>

          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            We use the data we collect for the following purposes:
          </p>

          <ul className="list-disc list-inside marker:text-[#CFCFCF] text-[#CFCFCF]
           text-base sm:text-lg space-y-2 pl-4 font-medium">
            <li>
              <span className="font-semibold text-[#C0C0C0]">
                To deliver our services:
              </span>{" "}
              Including service access, user communication, and support.
            </li>
            <li>
              <span className="font-semibold text-[#C0C0C0]">
                To process payments:
              </span>{" "}
              For subscriptions or purchases made through the Website or other
              approved channels.
            </li>
            <li>
              <span className="font-semibold text-[#C0C0C0]">
                To personalize user experience:
              </span>{" "}
              We may tailor our content, recommendations, or offers based on
              your interests.
            </li>
            <li>
              <span className="font-semibold text-[#C0C0C0]">
                To improve our Website:
              </span>{" "}
              Through analytics and user feedback, we enhance usability and
              functionality.
            </li>
            <li>
              <span className="font-semibold text-[#C0C0C0]">
                To send marketing communications:
              </span>{" "}
              If you opt-in, we may send updates, blog digests, or promotional
              content. You can unsubscribe at any time.
            </li>
            <li>
              <span className="font-semibold text-[#C0C0C0]">
                To manage affiliate relationships:
              </span>{" "}
              We track clicks and purchases made through our affiliate links,
              which may result in commission earnings.
            </li>
          </ul>
        </section>

        {/* Cookies and Tracking Technologies */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold underline text-[#007182]">
            3. Cookies and Tracking Technologies
          </h2>

          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            We use cookies and similar tracking technologies to enhance your
            browsing experience.
          </p>

          <h3 className="text-lg sm:text-xl font-medium text-[#007182] pt-2">
            Types of Cookies We Use:
          </h3>
          <ul className="list-disc list-inside marker:text-[#CFCFCF] text-[#CFCFCF] text-base sm:text-lg space-y-2 pl-4 font-medium">
            <li>
              <span className="text-[#C0C0C0] font-semibold">
                Essential Cookies:
              </span>{" "}
              Required for basic functionality like page navigation and login.
            </li>
            <li>
              <span className="text-[#C0C0C0] font-semibold">
                Analytics Cookies:
              </span>{" "}
              Help us analyze how visitors interact with our Website (e.g.,
              Google Analytics).
            </li>
            <li>
              <span className="text-[#C0C0C0] font-semibold">
                Preference Cookies:
              </span>{" "}
              Store your settings and preferences for future visits.
            </li>
            <li>
              <span className="text-[#C0C0C0] font-semibold">
                Affiliate Cookies:
              </span>{" "}
              Used to track clicks and purchases via affiliate links for
              commission tracking.
            </li>
          </ul>

          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            You can choose to disable cookies through your browser settings.
            However, some features of the site may not work properly without
            them.
          </p>

          <h3 className="text-lg sm:text-xl font-medium text-[#007182] pt-2">
            Your Cookie Preferences
          </h3>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            If you wish to remove or block cookies, you can do so through your
            browser&apos;s settings. Keep in mind that certain site features may not
            function correctly if cookies are disabled, including the ability to
            save preferences or stay logged in.
          </p>
            {/* ..... */}
          <ul className="list-disc list-inside marker:text-[#CFCFCF] text-[#CFCFCF] text-base sm:text-lg space-y-2 pl-4 font-medium">
            <li>
              Google Chrome –{" "}
              <a
                href="https://support.google.com/accounts/answer/32050"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#C0C0C0]"
              >
                support.google.com/accounts/answer/32050
              </a>
            </li>
            <li>
              Microsoft Internet Explorer –{" "}
              <a
                href="https://support.microsoft.com/kb/278835"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#C0C0C0]"
              >
                support.microsoft.com/kb/278835
              </a>
            </li>
            <li>
              Mozilla Firefox –{" "}
              <a
                href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#C0C0C0]"
              >
                support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
              </a>
            </li>
            <li>
              Apple Safari –{" "}
              <a
                href="https://support.apple.com/kb/PH21411?locale=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#C0C0C0]"
              >
                support.apple.com/kb/PH21411?locale=en_US
              </a>
            </li>
          </ul>

          <h3 className="text-lg sm:text-xl font-medium text-[#007182] pt-2">
            More About Cookies
          </h3>
          <ul className="list-disc list-inside marker:text-[#CFCFCF] text-[#CFCFCF] text-base sm:text-lg space-y-2 pl-4 font-medium">
            <li>
              All About Cookies –{" "}
              <a
                href="https://www.allaboutcookies.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#C0C0C0]"
              >
                www.allaboutcookies.org
              </a>
            </li>
            <li>
              Network Advertising Initiative –{" "}
              <a
                href="https://www.networkadvertising.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#C0C0C0]"
              >
                www.networkadvertising.org
              </a>
            </li>
          </ul>
        </section>

        {/* Affiliate Disclosure */}
        <section className="space-y-4 pt-5">
          <h2 className="text-2xl sm:text-3xl font-bold underline text-[#007182]">
            4. Affiliate Disclosure
          </h2>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            Our website contains affiliate links to third-party products or
            services. If you click these links and make a purchase, we may earn
            a commission at no additional cost to you.
          </p>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            We only recommend tools or services we believe are genuinely
            valuable. However, we are not responsible for the privacy policies
            or practices of these third-party websites. Please review their
            privacy policies before providing any information or completing a
            transaction.
          </p>
        </section>

        {/* Third-Party Service Providers */}
        <section className="space-y-4 pt-5">
          <h2 className="text-2xl sm:text-3xl font-bold underline text-[#007182]">
            5. Third-Party Service Providers
          </h2>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            To operate efficiently, we work with trusted third-party vendors who
            assist with:
          </p>
          <ul className="list-disc list-inside marker:text-[#CFCFCF] text-[#CFCFCF] text-base sm:text-lg space-y-2 pl-4 font-medium">
            <li>Website hosting and maintenance</li>
            <li>Payment processing</li>
            <li>Data analytics (e.g., Google Analytics)</li>
            <li>Email marketing</li>
            <li>Customer support</li>
          </ul>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            These service providers have access to your information only to
            perform tasks on our behalf and are bound by confidentiality
            agreements. They are not permitted to use your data for any other
            purpose.
          </p>
        </section>

        {/* Data Sharing and Disclosure */}
        <section className="space-y-6 pt-5">
          <h2 className="text-2xl sm:text-3xl font-bold underline text-[#007182]">
            6. Data Sharing and Disclosure
          </h2>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            We do not sell or rent your personal data. However, we may share
            your information under the following conditions:
          </p>
          <ul className="list-disc list-inside marker:text-[#CFCFCF] text-[#CFCFCF] text-base sm:text-lg space-y-2 pl-4 font-medium">
            <li>
              With service providers to fulfill our services and maintain our
              Website.
            </li>
            <li>
              With affiliated companies that are part of our corporate group.
            </li>
            <li>
              As part of a business transfer, such as a merger or acquisition.
            </li>
            <li>
              When required by law, regulation, court order, or to respond to
              legal process.
            </li>
            <li>
              To protect rights and safety, including investigating potential
              violations of our terms or harmful activity.
            </li>
          </ul>
        </section>

        {/* Data Storage and Retention */}
        <section className="space-y-6 pt-5">
          <h2 className="text-2xl sm:text-3xl font-bold underline text-[#007182]">
            7. Data Storage and Retention
          </h2>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            We retain your personal information only for as long as necessary to
            fulfill the purposes outlined in this policy or as required by
            applicable laws.
          </p>
          <ul className="list-disc list-inside marker:text-[#CFCFCF] text-[#CFCFCF] text-base sm:text-lg space-y-2 pl-4 font-medium">
            <li>
              <span className="text-[#C0C0C0] font-semibold">
                Personal data:
              </span>{" "}
              Retained as long as you are a user or subscriber.
            </li>
            <li>
              <span className="text-[#C0C0C0] font-semibold">Usage data:</span>{" "}
              Kept for a limited period for performance improvement or security
              analysis.
            </li>
          </ul>
          <p className="text-[#C0C0C0] text-base sm:text-2xl leading-7">
            Once your data is no longer needed, it will be securely deleted or
            anonymized.
          </p>
        </section>

        {/* Data Security */}
        <section className="space-y-4 pt-5">
          <h2 className="text-2xl sm:text-3xl font-bold underline text-[#007182]">
            8. Data Security
          </h2>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            We take security seriously and use appropriate technical and
            organizational measures to protect your data from unauthorized
            access, loss, or misuse. However, no method of transmission over the
            Internet is 100% secure. While we do our best, we cannot guarantee
            absolute protection.
          </p>
        </section>

        {/* Analytics */}
        <section className="space-y-4 pt-5">
          <h2 className="text-2xl sm:text-3xl font-bold underline text-[#007182]">
            9. Analytics
          </h2>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            We may use external analytics services to help us understand how
            users interact with our platform.
          </p>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            <span className="font-semibold">Google Analytics:</span> This is a
            tool provided by Google that helps track website traffic and usage
            patterns. Information collected through Google Analytics may be used
            to monitor user activity and improve our services. Google may also
            use the collected data to personalize ads within its network.
          </p>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            If you prefer to prevent Google Analytics from tracking your
            activity, you can install the Google Analytics Opt-Out Browser
            Add-on. This add-on blocks Google Analytics scripts from collecting
            your data.
          </p>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            To learn more about how Google handles user data, visit:{" "}
            <a
              href="https://policies.google.com/privacy?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#007182]"
            >
              https://policies.google.com/privacy?hl=en
            </a>
          </p>
        </section>

        {/* Your Rights and Choices */}
        <section className="space-y-4 pt-5">
          <h2 className="text-2xl sm:text-3xl font-bold underline text-[#007182]">
            10. Your Rights and Choices
          </h2>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            Depending on your location, you may have the following rights:
          </p>
          <ul className="list-disc list-inside marker:text-[#CFCFCF] text-[#CFCFCF] text-base sm:text-lg space-y-2 pl-4 font-medium">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of incorrect or outdated data</li>
            <li>
              Request deletion of your data (unless we are legally required to
              retain it)
            </li>
            <li>
              Object to or restrict processing of your data in certain cases
            </li>
            <li>Withdraw consent to receive marketing communications</li>
          </ul>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            You can exercise any of these rights by contacting us at{" "}
            <a
              href="mailto:tarun@marketingwisdom.me"
              className="underline text-[#C0C0C0]"
            >
              tarun@marketingwisdom.me
            </a>
            .
          </p>
        </section>

        {/* Children’s Privacy */}
        <section className="space-y-4 pt-5">
          <h2 className="text-2xl sm:text-3xl font-bold underline text-[#007182]">
            11. Children&apos;s Privacy
          </h2>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            Our services are not directed toward children under the age of 13.
            We do not knowingly collect personal information from anyone under
            13. If we become aware that a child has submitted personal data, we
            will delete it immediately.
          </p>
        </section>

        {/* Do Not Track (DNT) Signals */}
        <section className="space-y-4 pt-5">
          <h2 className="text-2xl sm:text-3xl font-bold underline text-[#007182]">
            12. Do Not Track (DNT) Signals
          </h2>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            Some browsers allow users to send a &quot;Do Not Track&quot; signal.
            Currently, our Website does not respond to these signals. We may
            update this policy if we begin to support DNT in the future.
          </p>
        </section>

        {/* International Data Transfers */}
        <section className="space-y-4 pt-5">
          <h2 className="text-2xl sm:text-3xl font-bold underline text-[#007182]">
            13. International Data Transfers
          </h2>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            Our operations are based in India, but we may work with third-party
            tools or services outside India. By using our Website, you consent
            to the transfer, storage, and processing of your data across
            international borders, including countries with different data
            protection laws.
          </p>
        </section>

        {/* Governing Law */}
        <section className="space-y-4 pt-5">
          <h2 className="text-2xl sm:text-3xl font-bold underline text-[#007182]">
            14. Governing Law
          </h2>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            This Privacy Policy and any disputes related to it shall be governed
            and interpreted in accordance with the laws of India, without regard
            to its conflict of law principles.
          </p>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            By using our Website and services, you agree that any legal
            proceedings arising out of or relating to this Privacy Policy shall
            be subject to India.
          </p>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            If you access our Website from outside India, you are responsible
            for compliance with any local laws applicable in your region.
          </p>
        </section>

        {/* Changes to This Privacy Policy */}
        <section className="space-y-4 pt-5">
          <h2 className="text-2xl sm:text-3xl font-bold underline text-[#007182]">
            15. Changes to This Privacy Policy
          </h2>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            We may update this Privacy Policy from time to time. When we do, the
            revised version will be posted here with the &quot;Last Updated&quot; date
            changed accordingly.
          </p>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            We encourage you to check this page periodically to stay informed of
            how we protect your information.
          </p>
        </section>

        {/* Contact Us */}
        <section className="space-y-4 pt-5 pb-16">
          <h2 className="text-2xl sm:text-3xl font-bold underline text-[#007182]">
            16. Contact Us
          </h2>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or how your information is handled, feel free to
            reach out to us at:
          </p>
          <p className="text-[#C0C0C0] text-base sm:text-lg leading-7">
            Email:{" "}
            <a
              href="mailto:tarun@marketingwisdom.me"
              className="underline text-[#C0C0C0]"
            >
              tarun@marketingwisdom.me
            </a>
          </p>
        </section>
      </section>
    </div>
  );
}
