import { FC } from 'react'
import Button from '../_common/Button'
import s from './styles.module.sass'
import arrowTop from '../../assets/arrowTop.svg'

const Banner: FC = () => {
  return (
    <section className={`${s.banner} sectionMB`}>
      <div className={s.banner_info}>
        <h1 className={s.banner_title}>Build Your Awesome Platform</h1>
        <p className={s.banner_descr}>
          Enver studio is a digital studio that offers several services such as
          UI/UX Design to developers, we will provide the best service for those
          of you who use our services.
        </p>
        <Button text='Our Services' icon={arrowTop} />
      </div>
      <div className={s.banner_imageWrapper}>
        <div className={s.banner_image} />
        <div className={s.banner_brokenLinesIcon} />
        <div className={s.banner_trianglesIcon} />
        <div className={s.banner_circlesIcon} />
        <div className={s.banner_addIcon} />
      </div>
    </section>
  )
}

export default Banner
