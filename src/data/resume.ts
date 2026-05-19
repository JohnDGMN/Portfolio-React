import type {
  ContactItem,
  Education,
  Experience,
  Project,
  SkillGroup,
} from '../types/resume'

export const profile = {
  name: 'John Oliver De Guzman',
  shortName: 'John Oliver',
  initials: 'JD',
  role: 'Full-stack Software Engineer',
  roles: [
    'Full-stack Engineer',
    'Machine Learning',
    'Data Analyst',
    'Cybersecurity',
  ],
  citizenship: 'US Citizen',
  location: 'Washington, DC / Maryland',
  tagline:
    'Building secure, data-driven software at the intersection of engineering, AI, and cybersecurity.',
  summary:
    'Seasoned full-stack software engineer and Computer Science graduate from Capitol Technology University with experience in software development, machine learning, data analysis, and cybersecurity through roles at NASA Jet Propulsion Laboratory and the United States Patent and Trademark Office. Skilled in Python, Java, SQL, React, machine learning tools, and data visualization, with hands-on experience developing secure applications, analyzing large datasets, and delivering technical solutions in collaborative environments.',
  stats: [
    { label: 'years coding', value: '6+' },
    { label: 'languages', value: '5' },
    { label: 'GPA', value: '3.75' },
    { label: 'projects', value: '10+' },
  ],
}

export const contact: ContactItem[] = [
  {
    label: 'Email',
    value: 'johno.deguzman@gmail.com',
    href: 'mailto:johno.deguzman@gmail.com',
    icon: 'mail',
  },
  {
    label: 'Phone',
    value: '(240) 342-9269',
    href: 'tel:+12403429269',
    icon: 'phone',
  },
  {
    label: 'Location',
    value: 'Washington, DC / Maryland',
    href: '#',
    icon: 'pin',
  },
  {
    label: 'GitHub',
    value: 'github.com/JohnDGMN',
    href: 'https://github.com/JohnDGMN',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/john-deguzman',
    href: 'https://www.linkedin.com/in/john-de-guzman-94598a40b/',
    icon: 'linkedin',
  },
]

export const education: Education = {
  school: 'Capitol Technology University',
  degree: 'B.S. in Computer Science',
  location: 'Laurel, MD',
  status: 'Graduated',
  gpa: '3.75',
}

export const experiences: Experience[] = [
  {
    id: 'uspto',
    company: 'United States Patent & Trademark Office',
    shortName: 'USPTO',
    role: 'Patent Examiner — Artificial Intelligence Unit',
    location: 'Alexandria, VA',
    startDate: 'Dec 2025',
    endDate: 'Apr 2026',
    bullets: [
      'Conducted technical research and data analysis on existing publications and prior art to support evidence-based evaluations and informed decision-making throughout the patent review process.',
      'Evaluated complex technical information against established standards and prepared a legal report with findings and recommendations for the client’s patent application.',
      'Collaborated with clients and cross-functional teams to communicate technical insights, clarify project requirements, and deliver analytical support in fast-paced, detail-oriented environments.',
    ],
    tags: ['AI Patents', 'Technical Research', 'Legal Analysis', 'Cross-functional'],
    accent: '#c084fc',
  },
  {
    id: 'jpl',
    company: 'Jet Propulsion Laboratory · NASA',
    shortName: 'NASA JPL',
    role: 'Software Development / Data Science Intern',
    location: 'La Cañada Flintridge, CA',
    startDate: 'May 2023',
    endDate: 'Aug 2023',
    bullets: [
      'Developed a Python-based machine learning data exploration tool using Keras, Plotly, Seaborn, and NumPy to analyze rasterized UAVSAR wildfire and vegetation datasets from NASA JPL.',
      'Applied statistical analysis and foundational machine learning techniques to identify patterns and correlations in environmental data, collaborating with JPL ecology researchers to validate findings and improve analytical accuracy.',
      'Created technical documentation and user guides to support reproducibility, workflow transparency, and future integration of machine learning research and data analysis processes.',
    ],
    tags: ['Python', 'Keras', 'Plotly', 'UAVSAR', 'Ecology'],
    accent: '#7dd3fc',
  },
]

export const projects: Project[] = [
  {
    id: 'cset',
    title: 'Cybersecurity Evaluation Tool',
    subtitle: 'Senior Design Project · DHS / NIST',
    description:
      'Developed and documented a cybersecurity compliance evaluation solution using the Department of Homeland Security’s Cyber Security Evaluation Tool (CSET) by analyzing NIST FIPS frameworks, conducting organizational security posture interviews, and compiling compliance research into formal DHS-aligned documentation.',
    stack: ['CSET', 'NIST', 'FIPS', 'Compliance', 'Risk Assessment'],
    category: 'security',
    highlight: 'DHS-aligned',
  },
  {
    id: 'pwm',
    title: 'Password Manager',
    subtitle: 'Android · Java · SQLite',
    description:
      'Designed and developed a secure password manager application in Android Studio using Java and SQLite with encrypted credential storage, authentication, and database management features.',
    stack: ['Android', 'Java', 'SQLite', 'Encryption', 'Auth'],
    category: 'mobile',
    highlight: 'Encrypted',
  },
  {
    id: 'eda',
    title: 'NBA Championship EDA',
    subtitle: 'Python · Jupyter · ML',
    description:
      'Performed exploratory data analysis in Python through Jupyter Notebook using machine learning models, heat maps, and data visualization techniques to analyze NBA championship datasets and identify key performance metrics.',
    stack: ['Python', 'Jupyter', 'ML', 'Heatmaps', 'Visualization'],
    category: 'data',
    highlight: 'EDA',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'C++'],
  },
  {
    label: 'Frontend',
    items: ['React 18', 'React 19', 'Tailwind CSS', 'Motion', 'Vite'],
  },
  {
    label: 'Backend & Data',
    items: ['Node.js', 'REST APIs', 'PostgreSQL', 'MySQL', 'SQLite', 'Firebase'],
  },
  {
    label: 'Machine Learning',
    items: ['Keras', 'NumPy', 'Plotly', 'Seaborn', 'JupyterLab', 'Google Colab'],
  },
  {
    label: 'Tooling & DevOps',
    items: ['GitHub', 'CI/CD', 'Anaconda', 'Agile · Scrum'],
  },
  {
    label: 'Security',
    items: ['NIST', 'FIPS', 'CSET', 'Risk Assessment'],
  },
]
