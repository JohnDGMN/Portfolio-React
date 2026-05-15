export type Experience = {
  id: string
  company: string
  shortName: string
  role: string
  location: string
  startDate: string
  endDate: string
  bullets: string[]
  tags: string[]
  accent: string
}

export type Education = {
  school: string
  degree: string
  location: string
  status: string
  gpa: string
}

export type Project = {
  id: string
  title: string
  subtitle: string
  description: string
  stack: string[]
  category: 'security' | 'mobile' | 'data'
  highlight: string
}

export type SkillGroup = {
  label: string
  items: string[]
}

export type ContactItem = {
  label: string
  value: string
  href: string
  icon: 'mail' | 'phone' | 'pin' | 'github' | 'linkedin'
}
