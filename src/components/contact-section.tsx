import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-3xl text-center animate-in fade-in slide-in-from-bottom-16 duration-700">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Let's Build Something Great Together
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Ready to transform your ideas into digital realities? Contact DreamPixel Technology today for a consultation or any inquiries.
        </p>
        <form className="space-y-6 text-left p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div>
            <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Name</Label>
            <Input id="name" type="text" placeholder="Your Name" className="mt-2" />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
            <Input id="email" type="email" placeholder="Your Email" className="mt-2" />
          </div>
          <div>
            <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
            <Textarea id="message" placeholder="Tell us about your project or inquiry..." rows={5} className="mt-2" />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}