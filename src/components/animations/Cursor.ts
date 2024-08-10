import gsap from 'gsap'

interface DiscoverParams {
  container: string;
  text: string;
}

export const Cursoranime = {
  discover: ({container, text} : DiscoverParams) => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 0.6,
        ease: 'expo.out'
      }
    })
    timeline
      .to(container, {
        scale: 1
      })
      .to(
        text,
        {
          opacity: 1,
          y: 20
        },
        '-=0.4'
      )
  },
  init: ({ container, text }: DiscoverParams) => {
    gsap.set(text, {
      opacity: 0,
      y: -25
    })
    gsap.fromTo(
      container,
      {
        scale: 0,
        ease: 'expo.out',
        duration: 0.6
      },
      {
        scale: 0.05,
        duration: 0.6,
        ease: 'expo.inOut',
        onComplete: () => {
          console.log('eliminar')
        }
      }
    )
  },
  scale: ({ container, text }: DiscoverParams) => {
    gsap.to(container, {
      scale: 1,
      duration: 0.6,
      ease: 'expo.out'
    })
  },
  middle: ({ container, text }: DiscoverParams) => {
    gsap.to(container, {
      scale: 0.5,
      duration: 0.6,
      ease: 'expo.out'
    })
  },
  leave: ({ container, text }: DiscoverParams) => {
    const timeline = gsap.timeline({
      defaults: {
        ease: 'expo.out'
      }
    })

    timeline
      .to(text, {
        opacity: 0,
        y: -20,
        duration: 0.4
      })
      .to(
        container,
        {
          scale: 0.05,
          duration: 0.6
        },
        0
      )
  }
}
