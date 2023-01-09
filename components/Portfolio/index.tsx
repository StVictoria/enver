import clsx from 'clsx'
import { FC, useState } from 'react'
import { ISlide } from '../../interfaces/ISlide'
import { slides } from '../../static/slides'
import s from './styles.module.sass'

const Portfolio: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleChangeCurrentSlide = (slide: number) => setCurrentSlide(slide)

  const renderSlides = () =>
    slides.map((slide: ISlide) => (
      <div
        className={s.portfolio_slide}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        <div>SLIDE {slide.id}</div>
        <div>SLIDE {slide.id}</div>
        <div>SLIDE {slide.id}</div>
      </div>
    ))

  const renderCarouselButtons = () =>
    slides.map((slide: ISlide) => (
      <button
        className={clsx(s.carousel_button, {
          [s.active]: currentSlide === slide.id,
        })}
        onClick={() => handleChangeCurrentSlide(slide.id)}
      />
    ))

  return (
    <section className='sectionMB'>
      <h2>Our Awesome Portofolio</h2>
      <div className={s.portfolio_carousel}>
        <div
          className={s.portfolio_slides}
          style={{ width: `${slides.length * 100}%` }}
        >
          {renderSlides()}
        </div>
        <div className={s.portfolio_sliderButtons}>
          {renderCarouselButtons()}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
