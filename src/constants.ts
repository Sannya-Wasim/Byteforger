import { ReactComponent as SharedIcon } from "./assets/svgs/SharedIcon.svg";
import { ReactComponent as CaseStudy } from "./assets/svgs/CaseStudy.svg";
import { ReactComponent as DummyImage01 } from "./assets/svgs/DummyImage01.svg";
import { ReactComponent as DummyImage02 } from "./assets/svgs/DummyImage02.svg";
import { ReactComponent as DummyImage03 } from "./assets/svgs/DummyImage03.svg";
import { ReactComponent as ProfileIcon01 } from "./assets/svgs/ProfileIcon01.svg";
import { ReactComponent as ProfileIcon02 } from "./assets/svgs/ProfileIcon02.svg";
import { ReactComponent as ProfileIcon03 } from "./assets/svgs/ProfileIcon03.svg";
import { ReactComponent as Reactjs } from "./assets/svgs/react-2.svg";
import { ReactComponent as Vue } from "./assets/svgs/vue-9.svg";
import { ReactComponent as Angular } from "./assets/svgs/angular-icon-1.svg";
import { ReactComponent as Tailwind } from "./assets/svgs/tailwind-css-2.svg";
import { ReactComponent as Sass } from "./assets/svgs/sass-1.svg";
import { ReactComponent as Nodejs } from "./assets/svgs/nodejs-1.svg";
import { ReactComponent as Express } from "./assets/svgs/expressjs-ar21.svg";
import { ReactComponent as Php } from "./assets/svgs/Group.svg";
import { ReactComponent as Ruby } from "./assets/svgs/rails-1.svg";
import { ReactComponent as Django } from "./assets/svgs/django-community.svg";
import { ReactComponent as Mongo } from "./assets/svgs/mongodb-icon-2.svg";
import { ReactComponent as Sql } from "./assets/svgs/mysql-3.svg";
import { ReactComponent as Postgres } from "./assets/svgs/postgresql.svg";
import { ReactComponent as Firebase } from "./assets/svgs/firebase-1.svg";
import { ReactComponent as Aws } from "./assets/svgs/aws-2.svg";
import { ReactComponent as Microsoft } from "./assets/svgs/microsoft-azure-2.svg";
import { ReactComponent as Browser } from "./assets/svgs/browserstack.svg";
import { ReactComponent as Selenium } from "./assets/svgs/selenium-svgrepo-com.svg";
import { ReactComponent as Docker } from "./assets/svgs/docker-1-logo-svgrepo-com.svg";
import { ReactComponent as Kubernetes } from "./assets/svgs/kubernetes-svgrepo-com.svg";
import { ReactComponent as Jenkins } from "./assets/svgs/jenkins-svgrepo-com.svg";
import { ReactComponent as Github } from "./assets/svgs/github-142-svgrepo-com.svg";
import { ReactComponent as Terraform } from "./assets/svgs/terraform-icon-svgrepo-com.svg";
import { ReactComponent as Google } from "./assets/svgs/google-cloud-1.svg";
import { ReactComponent as UXIcon } from "./assets/svgs/UXIcon.svg";
import { ReactComponent as ExperienceIcon } from "./assets/svgs/ExperienceIcon.svg";
import { ReactComponent as SecurityIcon } from "./assets/svgs/SecurityIcon.svg";
import { ReactComponent as CodeIcon } from "./assets/svgs/CodeIcon.svg";
import { ReactComponent as QualityIcon } from "./assets/svgs/QualityIcon.svg";
import { ReactComponent as SoftwareIcon } from "./assets/svgs/global-solution.svg";
import { ReactComponent as WebIcon } from "./assets/svgs/web.svg";
import { ReactComponent as CloudIcon } from "./assets/svgs/cloud.svg";
import { ReactComponent as GraphIcon } from "./assets/svgs/graph.svg";
import { ReactComponent as DesignIcon } from "./assets/svgs/design.svg";
import { ReactComponent as TestingIcon } from "./assets/svgs/gears.svg";
import { ReactComponent as RapidIcon } from "./assets/svgs/lightning.svg";
import { ReactComponent as SalesIcon } from "./assets/svgs/business.svg";
import CleaningBeeImage from './assets/images/The Cleaning Bee-Profile_Image.jpg'
import QPayImage from './assets/images/QPay_Design.png'
import DrivewaveImage from './assets/images/Drivewave_Design.jpg'

export const links = [
  { id: 1, text: "About Us", section : '/about' },
  { id: 2, text: "Services", section : '#services' },
  { id: 3, text: "Achievements", section : '#achievements' },
  { id: 4, text: "How it works", section : "#methodology" },
];

export const services = [
  {
    title: "Software Development & Modernization",
    image: SoftwareIcon,
    desc: "Unlock your business's potential with custom software tailored to your unique needs. We craft solutions that grow with you, ensuring long-term success and providing modernization services to keep your software performing at its best.",
  },
  {
    title: "Mobile & Web Application Development",
    image: WebIcon,
    desc: "Engage your audience with high-performance mobile and web applications. Our end-to-end development services ensure seamless functionality, aesthetic appeal, and accessibility across all devices.",
  },
  {
    title: "Cloud, Infrastructure, and DevOps",
    image: CloudIcon,
    desc: "Enhance scalability, security, and reliability with cloud infrastructure and DevOps expertise. We streamline your digital environment, optimizing operations to keep your business agile and efficient.",
  },
  {
    title: "AI, Data, and Analytics Solutions",
    image: GraphIcon,
    desc: "Transform data into actionable insights with AI-driven analytics. We help you harness the power of machine learning to make data-driven decisions that propel your business forward.",
  },
  {
    title: "User Experience & Interface Design",
    image: DesignIcon,
    desc: "Create captivating user experiences with intuitive, aesthetically pleasing interfaces. Our design team ensures that every interaction is meaningful, engaging, and aligned with your brand.",
  },
  {
    title: "Quality Assurance & Testing",
    image: TestingIcon,
    desc: "Deliver flawless products with our rigorous testing services. We safeguard quality at every step, ensuring your software performs seamlessly, reliably, and is free of defects.",
  },
  {
    title: "Rapid Application Development",
    image: RapidIcon,
    desc: "Get your applications to market faster without compromising quality. Our agile development approach accelerates the delivery of powerful, ready-to-use applications tailored to meet immediate needs.",
  },
  {
    title: "Salesforce Services",
    image: SalesIcon,
    desc: "Transform your business with end-to-end Salesforce solutions, from customization and integration to support and analytics, ensuring seamless operations and growth.",
  },
];

export const case_studies = [
  {
    title: "DriveWave - Smarter Communication on Roads",
    image: DrivewaveImage,
    desc: 'DriveWave revolutionizes road communication with its Bluetooth-enabled app and LED display system. Drivers can instantly share messages like "Keep Distance" or "Pothole Ahead" on a rear-mounted LED screen, ensuring real-time updates and improved safety. Designed for ease and minimal distraction, DriveWave keeps drivers connected and informed for a safer driving experience.',
  },
  {
    title: "The Cleaning Bee - Acleaning services app!",
    image: CleaningBeeImage,
    desc: "The Cleaning Bee app transforms home cleaning with easy booking for professional maid services. Prioritizing user convenience, it offers options for one-time or recurring cleanings, thorough vetting for trusted professionals, and real-time updates. With seamless scheduling and tracking, The Cleaning Bee ensures a spotless home with minimal effort.",
  },
  {
    title: "QPay - QR code your payments in a stitch!",
    image: QPayImage,
    desc: "QPay is a cutting-edge mobile app that simplifies payments through QR code scanning. With a quick scan, users can securely and instantly complete transactions anytime, anywhere. Designed for convenience and efficiency, QPay eliminates the hassle of traditional payment methods, offering a seamless way to manage your payments with just a single tap.",
  },
];

export const approaches = [
  {
    title: "UX Driven Engineering",
    image: UXIcon,
    desc: "We prioritize UX-driven engineering, where every development decision centers around user experience. By aligning design and engineering, we ensure smooth, user-friendly applications that meet both functionality and aesthetic requirements.",
  },
  {
    title: "Developing Shared Understanding",
    image: SharedIcon,
    desc: "Our collaborative approach emphasizes a shared understanding across teams. Through design workshops, regular updates, and transparent communication, we align on project goals, fostering synergy between designers, developers, and stakeholders.",
  },
  {
    title: "Proven Experience and Expertise",
    image: ExperienceIcon,
    desc: "With years of industry experience, our team brings specialized expertise in various domains. We leverage this knowledge to deliver solutions that meet complex requirements and exceed client expectations, ensuring successful outcomes.",
  },
  {
    title: "Security & Intellectual Property (IP)",
    image: SecurityIcon,
    desc: "We prioritize security and IP protection by implementing strict protocols. Our processes ensure data integrity, confidentiality, and adherence to best practices, providing clients with peace of mind regarding sensitive information and proprietary assets.",
  },
  {
    title: "Code Reviews",
    image: CodeIcon,
    desc: "Our code review process emphasizes clean, maintainable, and efficient code. Regular peer reviews help us identify issues early, fostering best practices and ensuring high-quality, performance-driven applications for end users.",
  },
  {
    title: "Quality Assurance & Testing",
    image: QualityIcon,
    desc: "Comprehensive quality assurance and testing validate that each application functions as intended. Rigorous testing procedures identify and resolve issues, guaranteeing stability, reliability, and an optimal user experience across devices and platforms.",
  },
];

export const ways = [
  {
    title: "Build the right team to scale",
    image: DummyImage01,
    desc: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).",
    quote:
      '"Byteforger is quick to identify larger problems with the software, so we decided to expand our scope to build new modules."',
    profileIcon: ProfileIcon01,
    profileName: "Jeewa Makram",
    profileTitle: "CEO",
  },
  {
    title: "Enhance Team Collaboration",
    image: DummyImage03,
    desc: "Effective teamwork drives success. We foster strong collaboration through clear communication and alignment, making sure everyone is moving toward shared objectives seamlessly.",
    quote:
      '"Working with Byteforger improved our team’s collaboration, helping us achieve milestones faster and more cohesively."',
    profileIcon: ProfileIcon02,
    profileName: "Alex Park",
    profileTitle: "Project Manager",
  },
  {
    title: "Streamline Your Development Process",
    image: DummyImage02,
    desc: "Optimizing processes is crucial for growth. We work alongside your team to ensure efficiency, scalability, and smooth operations that support both short-term and long-term goals.",
    quote:
      '"Byteforger helped us streamline our processes, resulting in faster delivery times and enhanced project management."',
    profileIcon: ProfileIcon03,
    profileName: "Lena Cruz",
    profileTitle: "CTO",
  },
];


export const icons = [
  { name: "Frontend", items: [Reactjs, Vue, Angular, Tailwind, Sass] },
  { name: "Backend", items: [Nodejs, Express, Php, Ruby, Django] },
  { name: "Database", items: [Mongo, Sql, Postgres, Firebase] },
  { name: "Cloud Testing", items: [Aws, Google, Microsoft, Browser, Selenium] },
  { name: "DevOps", items: [Docker, Kubernetes, Jenkins, Github, Terraform] },
];
