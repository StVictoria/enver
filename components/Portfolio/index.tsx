import { FC } from 'react'
import LaptopCarousel from './LaptopCarousel'
import MobileCarousel from './MobileCarousel'
import s from './styles.module.sass'

const Portfolio: FC = () => {
  return (
    <section className='sectionMB'>
      <h2>Our Awesome Portofolio</h2>
      <LaptopCarousel />
      <MobileCarousel />
    </section>
  )
}

export default Portfolio
