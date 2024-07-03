import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Otherservice.css";
const services = [
  {
    id: 1,
    title: "Digital Content Creation",
    image: "/service1.png",
    content: `We believe effective learning tools and technology helps learners achieve greater success. This made GKT offer customized digital learning content, where our seasoned trainers tailor and customize courses to meet the dynamic learning needs of the learners- thus opening the door of innumerable opportunities.\n\nDigital transformation is neither new nor a myth today. It’s the very reality that has been changing the realm of almost every industry including the education and training industry. Being an organization that believes and promotes ‘agility’, we have embraced and implemented digital transformation in our training system.\n\nBlended Learning Space\n\nGone are days when it was easy to find rows of a desk all pointing toward the front of the room. Our trainers comprehend that the classrooms must mimic the workforce and it has significantly encouraged them to prefer to develop collaborative-friendly spaces to facilitate the learning experience.\n\nOur blended learning space allows us to deliver training and learning engrossed with digital content. Matching with our participants’ individual career needs, we take the plunge to create customized content which enables them to benefit from the training, instead of leaving them helpless with rigid learning content.`,
  },
  {
    id: 2,
    title: "Consultancy Services",
    image: "/service2.png",
    content: `We offer tailored consulting services focused on client’s desired outcomes where our team of experts undertakes projects and brings in tangible results. From thoughtful planning to effective execution of the outlined IT strategy, we abide by to maintain excellence and quality of our service.\n\nApplication Engineering\n\nOur strong expertise in domain knowledge, consulting capabilities, and methodologies help organizations to shorten development life cycles for faster project completion.\n\nOur services spans from understanding technical requirements through architecture designing, developing and testing to implementation.\n\nWe offer a variety of development services that cater to various software project requirements comprising of: Enterprise Application Development, Net Application Development, IBM i Application Development.\n\nEnterprise Application Development\n\nEnterprise application development is evolving to become more agile and collaborative where IT works to build to incorporate end user’s needs.\n\nWe inspire innovation by empowering the team\n\nFull Stack Java Development\nStrong Domain Expertise\nSeamless connect to existing applications\nSupport for disruptive innovations\n\nDOT Net Application Development\n\nLatest Microsoft Frameworks and Technologies help us craft excellent product engineering embedded with the perfect touch of digital transformation services.\n\nWe build most reliable & scalable solutions for.\n\nIoT & Embedded Systems\nEnterprise & Web Application Development Services\nBusiness Intelligence & Analytics Solutions\nCloud Solutions & Integration\n\nIBM i APPLICATION DEVELOPMENT\n\nTransform how work gets done on IBM i. We offer solutions for your business every way in and out.\n\nWe deliver flexible & modular applications on IBM i\n\nWe Develop, Maintain and Modernize applications on IBM i\nBuild custom application and manage services on IBM i\nWe integrate IBM i applications well with other platforms\nWe customize ERP’s on Retail and Manufacturing DOMAIN\n\nMobile Application Development\n\nWe develop enterprise grade mobile applications to help Businesses Leverage Mobility Solutions as a Driver to Digital Transformation reformulating the way people and technologies interact with each other.\nWe develop customized mobile applications on iOS and Android with rich user experience for easy adoption to enhance business.\nWe adhere to best practices to accelerate the mobile application development for Android & iOS Apps Development, Cross-platform apps, App Analytics Integration, Maintenance and upgrades.\n\nMobile Application development\n\nBuild and customize your mobile apps for every business process with the team.\n\nOur Experts adopt strategies to accelerate the development and build robust mobile apps\nOur team with diverse skill understands devices, leverage its functionalities to design and develop apps.\n\nWe make development process driven\n\nMobile App Architecture Design\nMobile App Consultation Services\nMobile App Testing\nMobile App Backend Development`,
  },
  {
    id: 3,
    title: "Infrastructure",
    image: "/service3.png",
    content: `We believe an intelligent and smart infrastructure in the contemporary digital world helps businesses adapt to change promptly and powers innovation. Hence, we bring to you world-class Infrastructure services that promises optimize the availability and performance for increased business agility.\n\nExcellence in cloud adoption\n\nOur Expertise on Cloud is designed to support your Journey of Cloud Adoption that drives to digital Transformation Initiatives. We focus on Simple, Sustainable and Scalable Cloud Management Solutions and Services that can be adopted for your enterprise.\n\nCloud Architecting Services\n\nWe devise solutions of your cloud Journey from Architect to Planning, Designing, Migrating and managing your infrastructures on the cloud environment. Our solution adapts to hybrid cloud support to Migration analysis with Commercials forecast and benefit analysis. Our Expert consultant can help you to accelerate your migration process and speed up innovation.\n\nBetter Architecting! Better Solutions!! Better Business!!!\n\nStrategic advice to Public Private and Hybrid Cloud\nCloud Deployment solution on IaaS, PaaS & SaaS\nDesign Optimization & Security.\nIntegration of existing application to cloud\n\nCloud Management Services\n\nOur services deliver key capabilities to maximize the availability, continuous optimization and manage your hybrid infrastructure with a self-service catalogue of options and advanced plan of operations to support and manage the workloads consistently to govern service levels. We integrate cloud into your existing services rapidly with our advanced supporting plan.\n\nWe Streamline Your Cloud Management Operations\n\nCost Optimation & Multi-Cloud Management\nAutomation, Monitoring & Troubleshooting\nCloud Security Monitoring\nBackup & DR Management\n\nCloud Migration Services\n\nWe combine our experience and innovation to transform complex environments into high-performance engines with zero business impact, faster, cost-effective and risk free migration with minimal down time.\n\nOur Migration services\nMigration of Workloads\nOn-Prem to Cloud\nCloud to Cloud\n\nCloud Security Services\n\nWe ensure seamless cloud adoption with built in security, resiliency and availability. We help to establish standards of consistency with defined scope, procedures, monitoring and reporting. We suggest integrating of new application with existing security compatibility.\n\nOur cloud security Services includes\n\nMultiple cloud solutions\nHybrid Environments\nIdentity and Access Management\nMonitoring, Governing threats, data leakage\n\nDigital System Operations\nData Centre and Disaster Solutions\n\nWe bring a holistic approach to data center transformation and disaster solutions. Our proven approach has created successful milestones with our clients\n\nOur exclusive offerings to support evolving business models\n\nBuild Scalable servers\nAgile and Responsive IT services\nDesign, Implementing and Managed Services\nDR Solutions – High Availability and Data Replication site\nMigration and Transformation support\nBackup, Failover testing setup\nMinimal RPO and RTO\n\nSystem Administration on Power UBM and NOC\n\nWe hold the leading System Administration support on IBM Power Systems includes IBM i, IBM p, PowerLinux servers. We provide the best support for Server located remote, located at client site and physical or Logical Partitions.\n\nOur best service approaches are\n\nSystem Management services\nIncident management services\nSecurity solutions over user identity and resources\nStorage Management\nWorkload and Capacity Management\nPerformance Analysis and Management\nNetwork Integration and Analytics\nAudit Support and Security guidance`,
  },
  {
    id: 4,
    title: "Bootcamp",
    image: "/service4.png",
    content: `The idea behind our Boot camps programs is to empower the learners to prepare and accomplish their Certifications exam. By taking up our Boot camps that are been strategically designed by industry experts- learners get access to material and training that they require to master their skills.\n\nOur boot camp programs are one of the features which enable us to stand out in the training sector. The journey from deciding to take Certification to obtain the same is been made simplified with our Boot camps. Working professionals and students often face obstacles while completing their Certifications successfully mostly because of lack of time management.\n\nThe boot camps support the learners to reach their destination with utmost confidence and knowledge- where the trainers put their entire efforts in preparing the learners holistically for the Certification exams. The learners are facilitated with useful learning content and are given the room to interact with the trainers freely so that they can have a clear understanding of the subject matter.\n\nFurther, the trainers impart training using cutting-edge teaching methodologies which lets the learners understand the connection between theory and application. The mode of learning- online/ classroom however can be chosen by the participants as per their convenience. In a nutshell, our boot camps acts like fast track path to Certification success.`,
  },
  {
    id: 5,
    title: "BPO",
    image: "/service5.png",
    content: `Global Knowledge - Business Processing Outsourcing\n\nAt Global Knowledge Technologies, the first step that we take for every project is to identify areas of inefficiency and inadequacy in the current workflow. We do this by root cause analysis supported by our core team brought in to improve the current process. Withdrawal of redundant and time-consuming tasks improves efficiency which further reflect across our standard of Accuracy & Quality. GKT BPO works as an extension to your business, making your Agile ready.\n\nOur Offering\n\nData Processing\n\nOffline Data Entry\nOnline Data Entry\nProduct Listing\nData Conversion\n\nData Solutions\n\nData Mining\nData Integration\nData Enrichment\nData Standardization\n\nSupport Operations\n\nVoice, Email, Chat Support\nTicketing system\nBack Office Support\n\nOur Expertise\n\nFinancial Services\nHealthcare\nTechnology\nRetail\nTravel & Hospitality\nOur Expertise\n\nFinancial Services\nHealthcare\nTechnology\nRetail\nTravel & Hospitality`,
  },
  {
    id: 6,
    title: "Digital Transformation",
    image: "/service6.png",
    content: `The changing landscape of disruptive technologies is redefining how businesses runs today. In order to help you keep up with this change, our highly efficient team converts your business ideas into technologically advanced solutions- enabling you to build cutting-edge business through our offering on emerging technologies i.e. Blockchain, DevOps, Analytics & ML and Business Intelligence.
    BLOCKCHAIN
    Blockchain Services for digital ecosystem to create a secure and transparent solution to solve emerging challenges.
    We offer End to End services on Blockchain to build a real-world business solution.
    Custom Blockchain Development
    Maintenance and Upgrade
    ICO Launch Services
    Hyperledger Consulting
    Supply Chain Blockchain
    Our Blockchain services
    We are one of the best blockchain technology company in the market delivering broad range of Blockchain Solutions that cater to various business requirements.
    Blockchain Development
    Private Blockchain Development
    Blockchain IoT Development
    Blockchain Consulting
    dApps Development
    Smart Contract Development
    Cryptocurrency Wallet Development
    Blockchain Testing
    DevOps
    We adopt a global engineering culture that brings our different technology talent to work closely from all geographical location in each and every phase of software development with highest quality solution to create the most consistent and predictable processes.
    Our experts develop the best DevOps Strategy after understanding the exact requirement of our clients and customize the solution to match your project needs.
    Implementation Process and Approach
    A comprehensive approach with an eye on detail is been strategized by our team which eliminates barriers between development and operations creating a collaborative environment. Our DevOps strategy is best suited for various industrial sectors including banking and financial services, retail, IT and telecommunication, energy and utilities, manufacturing and others.
    Our DevOps Service
    Code review and IT automation
    Build Management, Integration and Automation
    Release Management and Orchestration
    Continuous Deployment
    Test automation and Infrastructure automation
    Application and Infrastructure monitoring and management
    Business Intelligence
    Our Business Intelligence Services help your organization to maintain a competitive advantage in the market by transforming raw data into insightful information enabling stakeholders to make better decision.
    Our BI Service
    We offer business intelligence solutions to enable you with complete insight for all your data-driven business needs.
    Business Intelligence Analytics and Data Warehousing Solutions
    Business Intelligence Testing
    BI Performance Management
    Data Visualization and Analytics Solution
    Analytics & Machine Learning
    From planning to execution our analytics and machine learning solutions helps you to define and drive your transformation journey by creating the business value and helping you make the better decisions.
    We help you unlock value from the data generated through your business to derive meaningful insight that brings a shift to the business success. Our expertise is on building analytics and machine learning capabilities with cutting-edge technologies.
    Our Offerings
    Consulting Services
    Analytics and Machine Learning
    Machine Learning Development
    Advanced Algorithm Development
    Machine Learning Maintenance and Support
    Build cutting edge business solutions by deploying the right kind of technology to build the data ecosystem.`,
  },
];
const Otherservice = () => {
  const [expandedService, setExpandedService] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const handleCardClick = (service) => {
    setExpandedService(service);
  };
  const handleCloseClick = () => {
    setExpandedService(null);
  };
  return (
    <div className="otherservice">
      <div className="os-container">
        <h1 className="heading">Other Services</h1>
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
                onClick={() => handleCardClick(service)}
              />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>
                  {service.content.split("\n")[0]}...{" "}
                  <span className="read-more">Read more</span>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {expandedService && (
        <div className="expanded-service" onClick={handleCloseClick}>
          <div
            className="expanded-service-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={handleCloseClick}>
              Close
            </button>
            <h2 className="expheading">{expandedService.title}</h2>
            <img
              src={expandedService.image}
              alt={expandedService.title}
              className="expanded-service-image"
            />
            <p className="expcontent">{expandedService.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Otherservice;