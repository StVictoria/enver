import { FC, useEffect } from 'react'
import Header from './_base/Header'
import s from './Main.module.sass'
import Footer from './_base/Footer'
import Banner from './Banner'
import WhyEnver from './WhyEnver'
import Services from './Services'
import Portfolio from './Portfolio'
import ContactUs from './ContactUs'

const Main: FC = () => {

  useEffect(() => {
    const services: any = document.getElementById('services')
    console.log(services.getBoundingClientRect())
    console.log(document.body.getBoundingClientRect(),);
    
  }, [])
  return (
    <div className={s.mainWrapper}>
      <Header />
      <main className='container'>
        <Banner />
        <WhyEnver />
        <Services />
        <Portfolio />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}

export default Main
