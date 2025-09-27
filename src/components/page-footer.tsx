import { MadeWithDyad } from "@/components/made-with-dyad";

export function PageFooter() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} DreamPixel Technology. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
        </div>
        <MadeWithDyad />
      </div>
    </footer>
  );
}