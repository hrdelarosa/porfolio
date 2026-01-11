import AstroIcon from '../components/icons/AstroIcon.astro'
import React from '../components/icons/React.astro'
import Tailwind from '../components/icons/Tailwind.astro'

const TAGS = {
  ASTRO: {
    name: 'Astro',
    class: 'bg-black text-white',
    icon: AstroIcon,
  },
  REACT: {
    name: 'React',
    class: 'bg-[#0f172a] text-white',
    icon: React,
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    class: 'bg-[#003159] text-white',
    icon: Tailwind,
  },
}

export const PROJECTS = [
  {
    title: 'Vocación Enigma',
    description:
      'Plataforma web de orientación vocacional basada en el método CHASIDE. Ayuda a descubrir tu área de estudio ideal según tus intereses y habilidades, con resultados inmediatos y sin registro. Creada desde cero con Next.js, React y Tailwind CSS.',
    link: 'https://vocacionenigma.com',
    github: 'https://github.com/hrdelarosa/vocacion-enigma',
    image: '/projects/enigma.webp',
    tags: [TAGS.ASTRO, TAGS.TAILWIND],
  },
  {
    title: 'Vocación Enigma',
    description:
      'Plataforma web de orientación vocacional basada en el método CHASIDE. Ayuda a descubrir tu área de estudio ideal según tus intereses y habilidades, con resultados inmediatos y sin registro. Creada desde cero con Next.js, React y Tailwind CSS.',
    link: 'https://vocacionenigma.com',
    github: 'https://github.com/hrdelarosa/vocacion-enigma',
    image: '/projects/enigma.webp',
    tags: [TAGS.REACT, TAGS.TAILWIND],
  },
]
