// Ruta: src/data/portfolioData.js

export const portfolioData = {
  bbva: {
    id: 'bbva',
    title: 'BBVA Insurance Sales Platform',
    subtitle: 'Digital Insurance Sales Solution',
    logo: '/img/bbva.jpg',
    mainImage: '/img/bbva.jpg',
    overview:
      'Comprehensive digital platform designed to streamline the insurance sales process for BBVA Mexico. The system enables bank advisors to efficiently quote, compare, and sell various insurance products including life, auto, home, and business insurance. Built with a focus on user experience and operational efficiency, the platform integrates seamlessly with BBVA\'s existing banking infrastructure while providing real-time policy management and customer data synchronization.',
    features: [
      'Real-time insurance quotation engine with multiple product comparison',
      'Integrated customer verification and KYC (Know Your Customer) validation',
      'Digital signature integration for paperless policy activation',
      'Automated policy generation and distribution system',
      'Multi-channel support (web, tablet, mobile) for branch and remote operations',
      'Advanced analytics dashboard for sales performance tracking',
      'Secure payment gateway integration with BBVA\'s banking system',
      'Customer portal for policy management and claims submission'
    ],
    technologies: [
      'PHP',
      'Laravel',
      'MySQL',
      'JavaScript',
      'RESTful APIs',
      'Bootstrap',
      'JWT Authentication'
    ],
    role:
      'As a Development Analyst, I was responsible for analyzing business requirements from BBVA stakeholders, designing and implementing key backend modules for policy management, developing RESTful APIs for mobile and web integration, optimizing database queries for high-volume transactions, and collaborating with the QA team to ensure system reliability and security compliance with banking regulations.',
    achievements: [
      'Reduced policy issuance time from 45 minutes to under 10 minutes',
      'Improved system response time by 40% through database optimization',
      'Successfully processed over 50,000 insurance policies in the first year',
      'Achieved 99.8% system uptime during critical sales periods',
      'Implemented security measures that passed rigorous banking audits'
    ]
  },

  banorte: {
    id: 'banorte',
    title: 'Banorte Insurance Management System',
    subtitle: 'Enterprise Insurance Solutions Platform',
    logo: '/img/banorte.png',
    mainImage: '/img/banorte.png',
    overview:
      'Enterprise-level insurance management platform developed for Grupo Financiero Banorte. The system handles the complete lifecycle of insurance products from quotation to claims processing, serving both retail and corporate clients.',
    features: [
      'Multi-product insurance quotation and underwriting system',
      'Integrated claims management workflow with document processing',
      'Automated policy renewal and premium calculation engine',
      'Customer relationship management (CRM) integration',
      'Real-time policy status tracking and notifications',
      'Commission calculation and agent performance reporting',
      'Compliance reporting for regulatory requirements',
      'Business intelligence dashboard with customizable reports'
    ],
    technologies: [
      'PHP',
      'Laravel',
      'MySQL',
      'JavaScript',
      'Vue.js',
      'Redis',
      'Git',
      'Docker'
    ],
    role:
      'As a Development Analyst, I developed critical backend services for policy management and claims processing, designed scalable database architectures, and implemented business logic for complex insurance calculations.',
    achievements: [
      'Reduced claims processing time by 60%',
      'Improved system performance by 50% using caching strategies',
      'Migrated legacy data for over 200,000 active policies'
    ]
  },

  gnp: {
    id: 'gnp',
    title: 'GNP Insurance Operations Platform',
    subtitle: 'Insurance Policy and Operations Management System',
    logo: '/img/gnp.jpg',
    mainImage: '/img/gnp.jpg',
    overview:
      'Enterprise platform developed to support insurance operations for GNP Seguros, one of the leading insurance companies in Mexico. The system streamlines policy issuance, endorsements, renewals, claims, and document workflows.',
    features: [
      'Policy issuance and endorsement management',
      'Automated renewal workflows',
      'Claims registration and tracking',
      'Document generation and storage',
      'Notification and email automation',
      'Integration with third-party insurance services',
      'Role-based access control',
      'Advanced reporting and analytics dashboard'
    ],
    technologies: [
      'PHP',
      'Zend Framework',
      'Laravel',
      'MySQL',
      'JavaScript',
      'jQuery',
      'HTML',
      'CSS',
      'Bootstrap',
      'REST APIs',
      'Git'
    ],
    role:
      'As a Full Stack Specialist, I contributed to the development and maintenance of internal insurance platforms for GNP Seguros. My responsibilities included implementing backend business logic, developing user interfaces, optimizing SQL queries and stored procedures, integrating APIs, and delivering new features to support policy administration and operational workflows.',
    achievements: [
      'Automated key insurance workflows to reduce manual effort',
      'Optimized stored procedures and SQL queries to improve performance',
      'Developed reusable modules that accelerated feature delivery',
      'Integrated third-party services for policy and claims processing',
      'Maintained and enhanced enterprise applications used by internal teams'
    ]
  },

  nestle: {
    id: 'nestle',
    title: 'Nestlé Logistics and Operations Platform',
    subtitle: 'Custom Enterprise Software Solution',
    logo: '/img/nestle.jpg',
    mainImage: '/img/nestle.jpg',
    overview:
      'Custom software platform developed to support logistics and operational workflows for Nestlé, including a dedicated module for the creation and management of shipping guides. The system centralized data management, process automation, and operational reporting to improve efficiency and visibility.',
    features: [
      'Shipment tracking and monitoring',
      'Inventory synchronization',
      'Operational dashboards',
      'Automated notifications',
      'Custom reporting'
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript'],
    role:
      'Developed and maintained tailored modules to automate logistics and operational processes, optimizing data flows and improving reporting capabilities. Additionally, led the development of new modules and implementations, including a specific guide tracking system for real-time shipment monitoring and an automated alerting system to notify stakeholders of critical operational events.',
    achievements: [
      'Reduced manual processes through automation',
      'Improved visibility across operational workflows'
    ]
  },

  tous: {
    id: 'tous',
    title: 'Tous Retail Operations Platform',
    subtitle: 'Custom Enterprise Software Solution',
    logo: '/img/tous.jpg',
    mainImage: '/img/tous.jpg',
    overview:
      'Custom platform built to support operational and reporting needs for Tous, enabling streamlined management of internal processes and business data.',
    features: [
      'Sales reporting',
      'Operational dashboards',
      'Data synchronization',
      'Custom business rules'
    ],
    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
    role:
      'Implemented custom modules and optimized backend logic to support retail operations and reporting requirements.',
    achievements: [
      'Delivered tailored features aligned with business needs',
      'Improved operational efficiency'
    ]
  },

  cuidado: {
    id: 'cuidado',
    title: 'Cuidado con el Perro Operations Platform',
    subtitle: 'Retail Process Automation System',
    logo: '/img/cuidado.jpg',
    mainImage: '/img/cuidado.jpg',
    overview:
      'Progressive Web App (PWA) developed for one of Mexico\'s leading retail brands, designed to optimize inventory management through barcode scanning of clothing items. The system allows store staff to scan garment codes directly from their devices, storing and synchronizing the data in real time with the server to achieve a significantly more efficient and accurate inventory control process.',
    features: [
      'Process automation',
      'Operational tracking',
      'Custom dashboards',
      'Data integration'
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript'],
    role:
      'Built and maintained enterprise features to streamline operations and improve data visibility.',
    achievements: [
      'Automated repetitive tasks',
      'Enhanced reporting accuracy'
    ]
  },

  ghandi: {
    id: 'ghandi',
    title: 'Gandhi Operations Platform',
    subtitle: 'Business Process Management System',
    logo: '/img/ghandi.jpg',
    mainImage: '/img/ghandi.jpg',
    overview:
      'Business platform developed to support operational workflows and reporting requirements for Gandhi.',
    features: [
      'Operational dashboards',
      'Custom reporting',
      'Data management',
      'Workflow automation'
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript'],
    role:
      'Developed and maintained custom software modules to support internal business processes.',
    achievements: [
      'Improved process efficiency',
      'Delivered scalable custom solutions'
    ]
  }
};