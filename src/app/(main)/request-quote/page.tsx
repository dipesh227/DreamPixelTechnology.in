export default function RequestQuotePage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold">Request a Quote</h1>
      <p className="mt-4 text-muted-foreground">
        Ready to transform your digital presence? Tell us about your project, and we'll provide a customized quote tailored to your specific needs and goals.
      </p>
      <div className="mt-8 max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Tell Us About Your Project</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground">Your Name</label>
            <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-input" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground">Your Email</label>
            <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-input" required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground">Phone Number (Optional)</label>
            <input type="tel" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-input" />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-foreground">Interested Service(s)</label>
            <select id="service" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-input">
              <option value="">Select a service</option>
              <option value="web-design-development">Web Design & Development</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="seo-services">SEO Services</option>
              <option value="social-media-marketing">Social Media Marketing</option>
              <option value="content-creation">Content Creation</option>
              <option value="branding-identity">Branding & Identity</option>
              <option value="e-commerce-solutions">E-commerce Solutions</option>
              <option value="mobile-app-development">Mobile App Development</option>
              <option value="ppc-advertising">Pay-Per-Click Advertising (PPC)</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="project-details" className="block text-sm font-medium text-foreground">Project Details</label>
            <textarea id="project-details" rows={6} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-input" placeholder="Describe your project, goals, and any specific requirements."></textarea>
          </div>
          <button type="submit" className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-primary-foreground bg-brand-cyan hover:bg-brand-cyan/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-cyan">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}