import clsx from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'
import { ILaptopSlide } from '../../../interfaces/slides'
import { laptopSlides } from '../../../static/slides'
import s from '../styles.module.sass'

const LaptopCarousel: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleChangeCurrentSlide = (slide: number) => setCurrentSlide(slide)

  const renderImage = (image: any, slideClass: string) => (
    <div className={`${s.portfolio_laptopSlideItem} ${s[slideClass]}`}>
      <div className={s.portfolio_laptopSlideItemImageWrapper}>
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
    laptopSlides.map((slide: ILaptopSlide) => (
      <div
        className={s.portfolio_laptopSlide}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {renderImage(slide.image1, 'laptopSlide1')}
        {renderImage(slide.image2, 'laptopSlide2')}
        {renderImage(slide.image3, 'laptopSlide3')}
      </div>
    ))

  const renderCarouselButtons = () =>
    laptopSlides.map((slide: ILaptopSlide) => (
      <button
        className={clsx(s.portfolio_laptopButton, {
          [s.active]: currentSlide === slide.id,
        })}
        onClick={() => handleChangeCurrentSlide(slide.id)}
      />
    ))

  return (
    <div className={s.portfolio_laptopCarousel}>
      <div
        className={s.portfolio_laptopSlides}
        style={{ width: `${laptopSlides.length * 100}%` }}
      >
        {renderSlides()}
      </div>
      <div className={s.portfolio_laptopSliderButtons}>
        {renderCarouselButtons()}
      </div>
    </div>
  )
}

export default LaptopCarousel
