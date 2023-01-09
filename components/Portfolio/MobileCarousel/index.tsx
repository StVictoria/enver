import clsx from 'clsx'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { IMobileSlide } from '../../../interfaces/slides'
import { mobileSlides } from '../../../static/slides'
import s from '../styles.module.sass'

const MobileCarousel: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLeftDisabled, setIsLeftDisabled] = useState(false)
  const [isRightDisabled, setIsRightDisabled] = useState(false)

  useEffect(() => {
    if (currentSlide === 0) return setIsLeftDisabled(true)
    if (currentSlide === mobileSlides.length - 1)
      return setIsRightDisabled(true)
    setIsLeftDisabled(false)
    setIsRightDisabled(false)
  }, [currentSlide, mobileSlides.length])

  const handleChangeSlide = (direction: 'right' | 'left') => {
    if (
      (currentSlide === 0 && direction === 'left') ||
      (currentSlide === mobileSlides.length - 1 && direction === 'right')
    )
      return null
    if (direction === 'left') setCurrentSlide(currentSlide - 1)
    if (direction === 'right') setCurrentSlide(currentSlide + 1)
  }

  const renderSlides = () =>
    mobileSlides.map((slide: IMobileSlide) => (
      <div
        key={slide.id}
        className={s.portfolio_mobileSlide}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <Image src={slide.image} placeholder='blur' alt='portfolio-slide' />
      </div>
    ))

  return (
    <div className={s.portfolio_mobileCarousel}>
      <div
        className={s.portfolio_mobileSlider}
        style={{ width: `${mobileSlides.length * 100}%` }}
      >
        {renderSlides()}
      </div>
      <div className={s.portfolio_mobileSliderButtons}>
        <button
          disabled={isLeftDisabled}
          onClick={() => handleChangeSlide('left')}
          className={`${clsx(s.portfolio_mobileSliderButton, {
            [s.disabled]: isLeftDisabled,
          })} ${s.leftButton}`}
        />
        <button
          disabled={isRightDisabled}
          onClick={() => handleChangeSlide('right')}
          className={`${clsx(s.portfolio_mobileSliderButton, {
            [s.disabled]: isRightDisabled,
          })} ${s.rightButton}`}
        />
      </div>
    </div>
  )
}

export default MobileCarousel
