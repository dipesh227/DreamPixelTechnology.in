export default function CareersPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold">Careers / Join Our Team</h1>
      <p className="mt-4 text-muted-foreground">
        Are you passionate about digital innovation and eager to make an impact? Join DreamPixel Technology and be part of a dynamic team that's shaping the future of digital presence. We offer a collaborative environment, opportunities for growth, and exciting projects.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Current Openings</h2>
      <div className="space-y-4">
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Senior Web Developer</h3>
          <p className="text-muted-foreground text-sm">We're looking for an experienced web developer with expertise in Next.js and modern web technologies.</p>
          <p className="text-muted-foreground text-sm mt-2">Location: Remote / Hybrid</p>
          <a href="#" className="text-primary hover:underline mt-4 inline-block">Apply Now</a>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Digital Marketing Specialist</h3>
          <p className="text-muted-foreground text-sm">Join our marketing team to develop and execute innovative digital campaigns.</p>
          <p className="text-muted-foreground text-sm mt-2">Location: On-site, Tech City</p>
          <a href="#" className="text-primary hover:underline mt-4 inline-block">Apply Now</a>
        </div>
      </div>
      <p className="mt-8 text-muted-foreground">
        Don't see a role that fits? Send us your resume at careers@dreampixel.com. We're always looking for talented individuals!
      </p>
    </div>
  );
}