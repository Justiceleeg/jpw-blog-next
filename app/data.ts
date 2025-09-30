import { StaticImageData } from 'next/image'
import paintsweeperImg from '../public/images/paintsweeper.png'
import zineplaceImg from '../public/images/early-zineplace.png'

type Project = {
  name: string
  description: string
  link: string
  image: StaticImageData
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Zineplace',
    description: 'A zine platform to share and discover indie ideas and art.',
    link: 'https://www.zineplace.com/',
    image: zineplaceImg,
    id: 'project1',
  },
  {
    name: 'Paintsweeper',
    description:
      'A artful clone of the classic Minesweeper game built with Godot.',
    link: 'https://oakaso.itch.io/paintsweeper',
    image: paintsweeperImg,
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Zineplace',
    title: 'Founder',
    start: 'Aug 2025',
    end: 'Present',
    link: 'https://www.zineplace.com',
    id: 'work1',
  },
  {
    company: 'Festival Beach Food Forest',
    title: 'Volunteer & Fundraising Co-Coordinator',
    start: 'Jul 2024',
    end: 'Sept 2025',
    link: 'https://festivalbeach.org',
    id: 'work2',
  },
  {
    company: 'Army Futures Command',
    title: 'Software Engineer',
    start: 'Aug 2023',
    end: 'Oct 2023',
    link: 'https://www.army.mil/futures',
    id: 'work3',
  },
  {
    company: 'Tomorrow Health',
    title: 'Software Engineer',
    start: 'Oct 2021',
    end: 'Feb 2023',
    link: 'https://home.tomorrowhealth.com',
    id: 'work4',
  },
  {
    company: 'Google',
    title: 'Software Engineer',
    start: 'Apr 2021',
    end: 'Jul 2021',
    link: 'https://www.google.com',
    id: 'work5',
  },
  {
    company: 'Leafly',
    title: 'Software Engineer',
    start: 'Aug 2019',
    end: 'Mar 2021',
    link: 'https://www.leafly.com',
    id: 'work6',
  },
  {
    company: 'Spreetail',
    title: 'Software Engineer',
    start: 'Apr 2019',
    end: 'Jul 2019',
    link: 'https://www.spreetail.com',
    id: 'work7',
  },
  {
    company: 'The Home Depot',
    title: 'Software Engineer',
    start: 'Oct 2017',
    end: 'Mar 2019',
    link: 'https://www.homedepot.com',
    id: 'work8',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'A New Portfolio Post',
    description: 'Why I rebuilt my portfolio with Next.js and Tailwind CSS',
    link: '/blog/a-new-portfolio-post',
    uid: 'blog-1',
  },
  {
    title: 'Devlog 1: Zineplace',
    description:
      'The impetus and thoughts surrounding Zineplace, a platform to share and discover zines.',
    link: '/blog/devlog-1-zineplace',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from a year of volunteering',
    description:
      'On volunteering at Festival Beach Food Forest and what I learned about community.',
    link: '/blog/what-i-learned-from-a-year-of-volunteering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Justiceleeg',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/justiceperezwhite',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/justicepwhite',
  },
  {
    label: 'Itch.io',
    link: 'https://oakaso.itch.io',
  },
]

export const EMAIL = 'justicepwhite@gmail.com'
