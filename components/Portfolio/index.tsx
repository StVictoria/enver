import clsx from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'
import { ISlide } from '../../interfaces/ISlide'
import { slides } from '../../static/slides'
import s from './styles.module.sass'

const Portfolio: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleChangeCurrentSlide = (slide: number) => setCurrentSlide(slide)

  const renderImage = (image: any, slideClass: string) => (
    <div className={`${s.portfolio_slideItem} ${s[slideClass]}`}>
      <div className={s.portfolio_slideItemImageWrapper}>
        <Image
          src={image}
          alt='portfolio-slide'
          objectFit='contain'
          layout='fill'
          className={s.portfolio_slideItemImage}
          placeholder='blur'
        />
      </div>
    </div>
  )

  const renderSlides = () =>
    slides.map((slide: ISlide) => (
      <div
        className={s.portfolio_slide}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {renderImage(slide.image1, 'slide1')}
        {renderImage(slide.image2, 'slide2')}
        {renderImage(slide.image3, 'slide3')}
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
