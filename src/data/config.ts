const config = {
  title: "Ayaan Gazali | Software Engineering Student",
  description: {
    long: "Explore the portfolio of Ayaan Gazali, a Computer Software Engineering student at San José State University and 10x hackathon winner at Microsoft, NVIDIA, AWS, and more. Discover my latest projects including Due Diligence Co-Pilot, Networking Co-Pilot, and Open Source Repo Finder. Let's build something amazing together!",
    short:
      "Discover the portfolio of Ayaan Gazali, a software engineering student and 10x hackathon champion creating innovative AI-powered solutions.",
  },
  keywords: [
    "Ayaan Gazali",
    "portfolio",
    "software engineering student",
    "SJSU",
    "San Jose State University",
    "hackathon winner",
    "Microsoft",
    "NVIDIA",
    "AWS",
    "AI/ML",
    "Python",
    "React",
    "Next.js",
    "FastAPI",
    "Django",
    "fintech",
    "compliance",
    "RAG pipeline",
    "LangChain",
    "PyTorch",
  ],
  author: "Ayaan Gazali",
  email: "ayaangazali.work@gmail.com",
  location: "San Jose, California",
  site: "https://ayaangazali.vercel.app",

  // for github stars button
  githubUsername: "ayaangazali",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/Ayaan_Gazali",
    linkedin: "https://www.linkedin.com/in/ayaangazali",
    instagram: "",
    facebook: "",
    github: "https://github.com/ayaangazali",
  },
};
export { config };
