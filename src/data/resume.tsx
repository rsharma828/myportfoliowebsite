import { Icons } from "@/components/icons";

export const DATA = {
  name: "Rupesh sharma",
  initials: "RS",
  url: "https://rupeshsharma.vercel.app",
  location: "Dhanbad , Jharkhand",
  locationLink: "https://www.google.com/maps/place/dhanbad",
  description:
    "Aspiring software developer and passionate web developer. I love building projects and helping others. Very active on Twitter.",
  summary:
    "I’m Rupesh Sharma, an aspiring software developer and currently [student at NIT Agartala, specializing in Electronics and Instrumentation](/#education). I enjoy developing websites and am currently working on myPlacements a platform designed to simplify on-campus placements for both colleges and recruiters.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Node.js",
    "MongoDB",
    "Postgresql",
    "Docker",
    "Kubernetes",
    "Tailwind",
    "C++",
  ],
  contact: {
    email: "rksharmagmo@gmail.com",
    tel: "+91-9973370694",
    social: {
      GitHub: {
        url: "https://github.com/rsharma828",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/rksharmagmo/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/SharmaGinweb",
        icon: Icons.x,
      },
      Youtube: {
        url: "https://www.youtube.com/@rupeshsharma133",
        icon: Icons.youtube,
      },
    },
  },

  work: [
    {
  "company": "KaleHQ",
  "href": "https://www.kalehq.com/",
  "badges": [],
  "location": "",
  "title": "Product Engineer",
  "logoUrl": "/kalehq.jpeg",
  "start": "December 2024",
  "end": "Present",
  "description": "Building and optimizing backend infrastructure, developing scalable backend solutions, and integrating AI-driven capabilities into the platform to enhance functionality and performance."
}
  ],
  education: [
    {
      school: "National Institute of Technology, Agartala",
      href: "https://www.nita.ac.in/",
      degree: "Bachelor of Technology in Electronics and Instrumentation",
      logoUrl: "/nita.jpeg",
      start: "August 2021",
      end: "Present",
      gpa: "8.61",
    },
    {
      school: "Rajkamal Saraswati Vidyamandir",
      href: "https://rsvm.in/",
      degree: "Senior Secondary Certificate",
      logoUrl: "/rajkamal.jpeg",
      start: "April 2018",
      end: "March 2020",
      percentage: "95.6",
    },
    {
      school: "Kendriya Vidyalaya",
      href: "https://gomoh.kvs.ac.in/",
      degree: "Higher Secondary Certificate",
      logoUrl: "/kv.jpeg",
      start: "July 2018",
      end: "March 2020",
      percentage: "88.6",
    },
  ],
  projects: [
    // {
    //   title: "Chat Collect",
    //   href: "https://chatcollect.com",
    //   dates: "Jan 2024 - Feb 2024",
    //   active: true,
    //   description:
    //     "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    // },
    {
      title: "DocQuify",
      href: "https://docquify.vercel.app/",
      dates: "Aug 2024 - Sep 2024",
      active: true,
      description:
        "I created DocQuify, a SaaS platform that enables users to upload PDFs and ask questions based on document content. It utilizes OpenAI API and Pinecone for real-time context-based querying, with secure authentication through Clerk for Google and GitHub logins, and document storage on AWS S3. This platform streamlines document analysis, offering an efficient and scalable solution for extracting valuable information from large texts.",
      technologies: [
        "NextJS",
        "Typescript",
        "Clerk",
        "Tailwind CSS",
        "Stripe",
        "React",
        "NodeJs",
        "ExpressJs",
        "OpenAI",
        "Vector DB",
        "AWS S3",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://docquify.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rsharma828/DocQuify",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://utfs.io/f/dRTv2GuJ9j8O4kigkUPMNhj1uwPVJbvsnYIa2zriKO5Emode",
    },
    {
      title: "Pay-Up",
      href: "https://github.com/rsharma828/payUp-webapp",
      dates: "Aug 2024",
      active: true,
      description:
        "I developed PayUp, a peer-to-peer money transfer application that enables users to send and receive funds easily. The app is built with Node.js for the backend and React for the frontend, using PostgreSQL for secure data management. It features JWT for user authentication, allowing seamless bank withdrawals and processing webhooks for incoming transfers, delivering a fast and secure transaction experience.",
      technologies: [
        "NextJS",
        "React",
        "NodeJs",
        "ExpressJs",
        "PostgreSQL",
        "Prisma",
        "JWT",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/rsharma828/payUp-webapp",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: " https://github.com/rsharma828/payUp-webapp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://utfs.io/f/dRTv2GuJ9j8Oypr6ufYXs9DY7OAReJyaPlUkFuvIH2KCMcxT",
      video: "",
    },
    {
      title: "Kolab",
      href: "https://kolab-at.vercel.app/",
      dates: "Sep 2023",
      active: true,
      description:
        "I built Kolab, a collaborative platform that facilitates real-time teamwork and project management. It supports shared document editing, task management, and cloud integration, all while ensuring smooth collaboration.",
      technologies: ["Next.JS", "Node.Js", "LiveBlocks", "Clerk"],
      links: [
        {
          type: "Website",
          href: "https://kolab-at.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rsharma828/Kolab",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://utfs.io/f/dRTv2GuJ9j8OfHiWM6z9CrN1MR6XtzQyEbB34iKouWqTgZkP",
    },
    {
      title: "Medium",
      href: "https://github.com/rsharma828/medium-blog-app",
      dates: "June 2024",
      active: true,
      description:
        "I developed a blogging website using React for the frontend and Cloudflare Workers for a serverless backend. The project employs JWT for secure user authentication and PostgreSQL for data storage, enabling users to create, edit, and manage blog posts efficiently. This modern tech stack ensures a seamless and secure user experience while optimizing performance.",
      technologies: [
        "React",
        "NodeJs",
        "Hono",
        "PostgreSQL",
        "Cloudflare worker",
        "JWT",
        "Prisma",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/rsharma828/medium-blog-app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rsharma828/medium-blog-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://utfs.io/f/dRTv2GuJ9j8OWJtpZPKzcMKeBdRiY1t567Noy09rjfLVsPF2",
      video: "",
    },
    {
      title: "MyHoliday-Homes",
      href: "",
      dates: "May 2024",
      active: true,
      description:
        "I created MyHoliday Homes, a hotel booking application that allows users to effortlessly search and book accommodations. Built with React for the frontend and Node.js for the backend, the app uses MongoDB for data storage. It features user authentication with JWT, real-time availability checks, and payment integration, providing a seamless experience for travelers looking to plan their holidays.",
      technologies: [
        "TypeScript",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
        "React",
        "NodeJs",
        "ExpressJs",
        "Zod",
      ],
      links: [
        {
          type: "Website",
          href: "https://myholiday-homes-1.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rsharma828/myHoliday-homes",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://utfs.io/f/dRTv2GuJ9j8Od0kwn0uJ9j8OrCbW5NmDwxp6ZS3QcnLhHYzA",
    },
  ],
} as const;

// hackathons: [
// {
//   title: "Hack Western 5",
//   dates: "November 23rd - 25th, 2018",
//   location: "London, Ontario",
//   description:
//     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
//   image:
//     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
//   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
//   links: [],
// },
//     {
//       title: "Hack The North",
//       dates: "September 14th - 16th, 2018",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed a mobile application which delivers university campus wide events in real time to all students.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
//       links: [],
//     },
//   ],
// } as const;
