import { FC } from 'react'
import s from './styles.module.sass'

const WhyEnver: FC = () => {
  return (
    <section className={`${s.whyEnver} sectionMB`}>
      <div className={s.whyEnver_titleBlock}>
        <h2 className={s.whyEnver_title}>Why Enver Is The Best Choice?</h2>
        <p className={s.whyEnver_descr}>
          Watch this one minute video so you understand why you should use our
          services!
        </p>
      </div>
      <div className={s.whyEnver_video}>
        <div className={s.whyEnver_playButton} />
      </div>
    </section>
  )
}

export default WhyEnver
