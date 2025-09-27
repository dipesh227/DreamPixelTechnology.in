import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Have questions about our training programs or cafe offerings? We'd love to hear from you!
        </p>
        <form className="space-y-6 text-left">
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
            <Textarea id="message" placeholder="Your Message" rows={5} className="mt-2" />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}