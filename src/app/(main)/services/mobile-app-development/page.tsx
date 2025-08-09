import { Smartphone, CheckCircle } from "lucide-react";

export default function MobileAppDevelopmentPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <Smartphone className="h-12 w-12 mx-auto text-brand-blue" />
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
          Mobile App Development
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Bring your ideas to life with intuitive and high-performance mobile applications. We develop custom iOS and Android apps that deliver exceptional user experiences and meet your business objectives.
        </p>
      </div>
      <div className="mt-12 prose dark:prose-invert mx-auto">
        <h2>Our App Development Process</h2>
        <p>
          Our mobile app development process covers everything from concept and design to development, testing, and deployment. We focus on creating engaging interfaces, robust functionalities, and seamless performance across devices.
        </p>
        <h3>Key Services:</h3>
        <ul>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />iOS App Development</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Android App Development</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Cross-Platform App Development (React Native, Flutter)</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />UI/UX Design for Mobile</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />App Testing & Quality Assurance</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />App Store Optimization (ASO)</li>
          <li><CheckCircle className="inline-block h-4 w-4 mr-2 text-success" />Post-Launch Support & Maintenance</li>
        </ul>
        <p>
          Expand your reach and connect with your audience on the go with a custom mobile application tailored to your needs.
        </p>
      </div>
    </div>
  );
}