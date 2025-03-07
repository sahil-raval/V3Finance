import { useState } from "react";
import { ChevronDown, ChevronUp, FileText, User, Lock, Key, CreditCard, Info, Settings } from "lucide-react";

const sections = [
  {
    id: "business-loans",
    title: "Overview",
    icon: FileText,
    description: "At V3Finance, we value your privacy and are committed to ensuring that your personal information is handled with care and transparency. This Privacy Policy explains how we collect, use, share, and protect your data when you engage with us, whether through our website, in person, or over the phone. By using our services, you agree to the practices outlined in this policy.",
  },
  {
    id: "residential-loans",
    title: "Information We Collect",
    icon: User,
    description: (
      <>
        To provide our mortgage brokerage services, we collect the following types of personal information:
        <ul>
          <li><strong>Personal Identification Information:</strong> Full name, address, phone number, email address, date of birth, Social Security Number, driver’s license details, and other identification documents.</li>
          <li><strong>Financial Information:</strong> Income details, employment information, credit history, banking details, mortgage application data, and other financial records necessary to facilitate the mortgage process.</li>
          <li><strong>Property Information:</strong> Details about the property being financed, including purchase price, location, and appraisal details.</li>
          <li><strong>Usage Data:</strong> When you visit our website or use our digital services, we may collect information like your IP address, browser type, and browsing behavior using cookies and similar technologies.</li>
        </ul>
      </>
    ),
  },
  {
    id: "commercial-property-loans",
    title: "How We Use Your Information",
    icon: CreditCard,
    description: "Expand your business premises with flexible financing solutions. Whether you're purchasing, renovating, or building, we have you covered.",
  },
  {
    id: "asset-finance",
    title: "Asset Finance",
    icon: Key,
    description: (
      <>
        We use the personal information we collect to:
        <ul>
          <li>Assist in the mortgage application process and assess eligibility.</li>
          <li>Provide mortgage product recommendations tailored to your financial situation.</li>
          <li>Communicate with you regarding your application, transactions, and services.</li>
          <li>Comply with regulatory and legal requirements, including anti-fraud and anti-money laundering regulations.</li>
          <li>Improve our services, website, and user experience.</li>
          <li>Perform internal data analysis to better understand customer needs and service performance.</li>
        </ul>
      </>
    ),
  },
  {
    id: "private-equity-loan",
    title: "How We Share Your Information",
    icon: Lock,
    description: (
      <>
        We may share your information with:
        <ul>
          <li><strong>Lenders and Financial Institutions:</strong> To provide mortgage options and submit your application for approval.</li>
          <li><strong>Service Providers:</strong> Third-party companies that assist us in processing your data, such as credit reporting agencies, IT service providers, and payment processors.</li>
          <li><strong>Legal and Regulatory Authorities:</strong> Where required by law, regulation, or legal proceedings, or to protect our legal rights.</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity.</li>
        </ul>
        We do not sell or share your personal information with unaffiliated third parties for their marketing purposes.
      </>
    ),
  },
  {
    id: "property-development-loans",
    title: "How We Protect Your Information",
    icon: Settings,
    description: "V3Finance takes the security of your personal information seriously. We employ administrative, technical, and physical safeguards to protect your data against unauthorized access, disclosure, or misuse. These include encryption, secure servers, and restricted access to personal data.",
  },
  {
    id: "smsf-loans",
    title: "Your Rights and Choices",
    icon: Info,
    description: (
      <>
        You have certain rights regarding your personal information, including:
        <ul>
          <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
          <li><strong>Correction:</strong> You can request corrections if your information is inaccurate or incomplete.</li>
          <li><strong>Deletion:</strong> In certain circumstances, you can request that we delete your personal data, subject to legal obligations.</li>
          <li><strong>Marketing Preferences:</strong> You can opt-out of receiving marketing communications from us at any time by following the unsubscribe instructions in our emails or contacting us directly.</li>
        </ul>
      </>
    ),
  },
  {
    id: "smsf-loans",
    title: "Cookies and Tracking Technologies",
    icon: Info,
    description: "We use cookies and similar tracking technologies to enhance your browsing experience and collect usage data. You can adjust your browser settings to refuse cookies, but doing so may limit the functionality of our website.",
  },
  {
    id: "smsf-loans",
    title: "Third-Party Links",
    icon: Info,
    description: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to review the privacy policies of any external websites you visit.",
  },
  {
    id: "smsf-loans",
    title: "Changes to This Privacy Policy",
    icon: Info,
    description: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the revised policy on our website and updating the effective date.",
  },
];

export default function PrivacyPolicy() {
  const [openSection, setOpenSection] = useState(null);

  return (
    <div className="container mx-auto px-4 py-12 dark:bg-gray-900">
      <h2 className="text-4xl mt-12 font-philosopher font-bold text-center text-primary mb-12 dark:text-teal-300">
        Privacy Policy
      </h2>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Main Content */}
        <main className="flex-1 p-6 bg-white dark:bg-gray-800 shadow-lg ml-0 md:ml-6 rounded-lg">
          {sections.map((section, index) => (
            <div key={index} id={`section-${index}`} className="mb-6 border-b pb-4">
              <button
                className="w-full flex justify-between items-center text-lg font-medium text-gray-800 hover:text-secondary-200 dark:text-gray-100"
                onClick={() => setOpenSection(openSection === index ? null : index)}
              >
                <div className="flex items-center">
                  <section.icon className="w-6 h-6 mr-3 text-secondary-100 dark:text-teal-300" />
                  {section.title}
                </div>
                {openSection === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openSection === index && (
                <p className="mt-3 text-gray-600 dark:text-gray-300">{section.description}</p>
              )}
            </div>
          ))}
        </main>
      </div>

      {/* PDF Link */}
      <a
        href="/cg.pdf" // Use the correct path to your PDF
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" // Security feature
        className="text-primary hover:text-secondary-200 dark:text-teal-300 dark:hover:text-teal-400"
      >
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-lg overflow-hidden mb-12 rounded-lg">
          <div className="absolute inset-0">
            <img
              src="/images/img4.jpg"
              className="w-full h-full object-cover opacity-25"
              alt="background"
            />
          </div>
          <div className="relative z-10 text-center px-6 py-10 lg:px-12 lg:py-12">
            <h1 className="text-4xl font-bold text-primary mb-6 dark:text-teal-300">
              Credit Guide
            </h1>
            Click here to view the Credit Guide
          </div>
        </section>
      </a>
    </div>
  );
}
