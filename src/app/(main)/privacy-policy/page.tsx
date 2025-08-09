import { Shield, Database, Server, Lock } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto prose dark:prose-invert">
        <h1 className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-brand-primary" />
          Privacy Policy
        </h1>
        <p>
          At DreamPixel Technology, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you use our website and services.
        </p>
        <h2 className="flex items-center gap-3">
          <Database className="h-6 w-6 text-brand-secondary" />
          Information We Collect
        </h2>
        <p>
          We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us. This may include your name, email address, and other contact details. We also collect usage data, including IP addresses, browser types, and pages visited, to improve our services.
        </p>
        <h2 className="flex items-center gap-3">
          <Server className="h-6 w-6 text-brand-secondary" />
          How We Use Your Information
        </h2>
        <p>
          Your information is used to provide, maintain, and improve our services, process transactions, send you updates, and respond to your inquiries. We may also use it for marketing purposes, but you can opt out at any time.
        </p>
        <h2 className="flex items-center gap-3">
          <Lock className="h-6 w-6 text-brand-secondary" />
          Data Security
        </h2>
        <p>
          We implement robust security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>
        <p>
          For any questions regarding this policy, please contact us.
        </p>
      </div>
    </div>
  );
}