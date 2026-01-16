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
    class: 'bg-[#1F3056] text-white',
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
      'Plataforma web de orientación vocacional basada en el método CHASIDE. Ayuda a descubrir tu área de estudio ideal según tus intereses y habilidades, con resultados inmediatos y sin registro. Creada desde cero con Astro, React y Tailwind CSS.',
    // link: 'https://vocacionenigma.com',
    link: null,
    github: 'https://github.com/hrdelarosa/vocacion-enigma',
    image: '/projects/enigma.webp',
    tags: [TAGS.ASTRO, TAGS.TAILWIND],
  },
  {
    title: 'Sistema de Gestión para Bomberos',
    description:
      'Plataforma web para la gestión de operaciones y recursos en estaciones de bomberos. Ayuda a administrar servicios, personal, unidades, guardias y estaciones de forma centralizada y eficiente. Creada desde cero con React, TypeScript, Tailwind CSS y una API REST propia.',
    link: null,
    github: 'https://github.com/hrdelarosa/sis-bomberos-react',
    image: '/projects/sgb.webp',
    tags: [TAGS.REACT, TAGS.TAILWIND],
  },
]
