import { FC } from 'react'
import Button from '../_common/Button'
import s from './styles.module.sass'

const ContactUs: FC = () => {
  return (
    <section className={`${s.contactUs} sectionMB`}>
      <h2 className={s.contactUs_title}>
        Contact us for the service you want to use
      </h2>
      <Button text='Contact Us' />
      <div className={s.contactUs_addIcon} />
      <div className={s.contactUs_circlesIcon} />
    </section>
  )
}

export default ContactUs
