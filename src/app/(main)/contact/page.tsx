export default function ContactPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-4 text-muted-foreground">
        Have questions or ready to start your project? Reach out to us using the form below or connect through our contact details. We look forward to hearing from you!
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">
            <strong>Email:</strong> info@dreampixel.com<br />
            <strong>Phone:</strong> +91 98765 43210<br />
            <strong>Address:</strong> 123 Digital Street, Tech City, India
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          {/* Placeholder for a contact form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
              <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-input" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
              <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-input" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
              <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-input"></textarea>
            </div>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}