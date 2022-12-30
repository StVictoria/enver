import { FC } from 'react'
import s from './styles.module.sass'

const Portfolio: FC = () => {
  return (
    <section className='sectionMB'>
      <h2>Our Awesome Portofolio</h2>
      <div className={s.slider}>SLIDER</div>
    </section>
  )
}

export default Portfolio
