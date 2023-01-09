import Image from 'next/image'
import { FC } from 'react'
import { IService } from '../../interfaces/IService'
import { services } from '../../static/services'
import s from './styles.module.sass'

const Services: FC = () => {
  const renderServices = () =>
    services.map((service: IService) => (
      <li key={service.id} className={s.services_service}>
        <Image src={service.icon} alt={service.title} />
        <h3 className={s.services_serviceTitle}>{service.title}</h3>
        <p className={s.services_serviceDescr}>{service.descr}</p>
      </li>
    ))

  return (
    <section id="services" className={`${s.services} sectionMB`}>
      <h2 className={s.services_title}>The Service We Provide For You</h2>
      <ul className={s.services_list}>{renderServices()}</ul>
      <div className={s.services_trianglesIcon}/>
      <div className={s.services_addIcon1}/>
      <div className={s.services_addIcon2}/>
    </section>
  )
}

export default Services
