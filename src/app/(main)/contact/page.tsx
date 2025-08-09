import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, User, Pencil, Send } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact DreamPixel Technology for inquiries about our web design, SEO, and digital marketing services. Reach out via our form, email, or phone to start your project.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have questions or ready to start your project? Reach out to us using the form below or connect through our contact details. We look forward to hearing from you!
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 text-brand-primary mt-1" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:info@dreampixel.com" className="text-muted-foreground hover:text-primary">info@dreampixel.com</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 text-brand-primary mt-1" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-muted-foreground">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-brand-primary mt-1" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-muted-foreground">123 Digital Street, Tech City, India</p>
            </div>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="relative">
                <Label htmlFor="name" className="sr-only">Name</Label>
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input type="text" id="name" placeholder="Your Name" className="pl-10" />
              </div>
              <div className="relative">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input type="email" id="email" placeholder="Your Email" className="pl-10" />
              </div>
              <div className="relative">
                <Label htmlFor="message" className="sr-only">Message</Label>
                <Pencil className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Textarea id="message" rows={5} placeholder="Your Message" className="pl-10 pt-2" />
              </div>
              <Button type="submit" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}