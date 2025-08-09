import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FileText, User, Mail, Phone, Briefcase, Pencil, Send } from "lucide-react";

export default function RequestQuotePage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center">
          <FileText className="h-10 w-10 mr-4 text-brand-accent" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Request a Quote</h1>
        </div>
        <p className="mt-4 text-lg text-muted-foreground">
          Ready to transform your digital presence? Tell us about your project, and we'll provide a customized quote tailored to your specific needs and goals.
        </p>
      </div>
      <div className="mt-12 max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg border">
        <h2 className="text-2xl font-semibold mb-8 text-center">Tell Us About Your Project</h2>
        <form className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <Label htmlFor="name" className="sr-only">Your Name</Label>
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input type="text" id="name" placeholder="Your Name" className="pl-10" required />
          </div>

          {/* Email Field */}
          <div className="relative">
            <Label htmlFor="email" className="sr-only">Your Email</Label>
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input type="email" id="email" placeholder="Your Email" className="pl-10" required />
          </div>

          {/* Phone Field */}
          <div className="relative">
            <Label htmlFor="phone" className="sr-only">Phone Number (Optional)</Label>
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input type="tel" id="phone" placeholder="Phone Number (Optional)" className="pl-10" />
          </div>

          {/* Service Select */}
          <div className="relative">
            <Label htmlFor="service" className="sr-only">Interested Service(s)</Label>
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
            <Select>
              <SelectTrigger className="pl-10">
                <SelectValue placeholder="Select an interested service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-design-development">Web Design & Development</SelectItem>
                <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                <SelectItem value="seo-services">SEO Services</SelectItem>
                <SelectItem value="social-media-marketing">Social Media Marketing</SelectItem>
                <SelectItem value="content-creation">Content Creation</SelectItem>
                <SelectItem value="branding-identity">Branding & Identity</SelectItem>
                <SelectItem value="e-commerce-solutions">E-commerce Solutions</SelectItem>
                <SelectItem value="mobile-app-development">Mobile App Development</SelectItem>
                <SelectItem value="ppc-advertising">Pay-Per-Click Advertising (PPC)</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Project Details Textarea */}
          <div className="relative">
            <Label htmlFor="project-details" className="sr-only">Project Details</Label>
            <Pencil className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Textarea id="project-details" rows={6} placeholder="Describe your project, goals, and any specific requirements..." className="pl-10 pt-2" />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full" size="lg">
            <Send className="h-4 w-4 mr-2" />
            Submit Request
          </Button>
        </form>
      </div>
    </div>
  );
}