import { useEffect } from 'react'
import css from 'styled-jsx/css'
import { motion, useViewportScroll, useSpring, useMotionValue } from 'framer-motion'
import { MdClose } from 'react-icons/md'


interface Props {
  onCloseClick: Function
}

export const ScrollFAB = ({ onCloseClick }: Props) => {
  const scrollPosition = useMotionValue(0)
  const { scrollYProgress } = useViewportScroll()
  const pathLength = useSpring(scrollPosition, { stiffness: 400, damping: 90 })

  useEffect(() => {
    function handleScrollState() {
      try {
        const position = window.scrollY
        const card = document.querySelector('.card-expanded') as HTMLElement
        const cardHeight = card.clientHeight
        const offset = card.offsetTop
        const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        const scrollPercentage = (100 * (position - offset + viewportHeight)) / cardHeight
        const newScrollPosition = scrollPercentage > 0 ? scrollPercentage / 100 : 0
        // Update framer MotionValue
        scrollPosition.set(newScrollPosition)
      } catch(e) {
        console.error(e)
      }
    }
    
    window.addEventListener('scroll', handleScrollState, { passive: true })
    return () => window.removeEventListener('scroll', handleScrollState)
  }, [scrollYProgress])

  return (
    <div className="fab-container" onClick={() => onCloseClick('')}>
      <MdClose 
        size="20"
        style={{ position: 'absolute', left: 15, top: 15, color: '#FFF' }}  
      />
      <svg viewBox="0 0 60 60">
        <motion.path
          fill="none"
          strokeWidth="3"
          stroke="white"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            position: 'absolute',
            left: 10,
            pathLength,
            rotate: 90,
            translateX: 10,
            translateY: 10,
            scaleX: -1
          }}
        />
      </svg>
      <style jsx>{styles}</style> 
    </div>
  )
}

const styles = css`
  .fab-container {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #393939;
    border-radius: 50%;
    box-shadow: 0 3px 10px 0 rgba(0,0,0,0.3);
    cursor: pointer;
    z-index: 1;
  }
`

export default ScrollFAB