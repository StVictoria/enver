import { FC } from 'react'
import Header from './_base/Header'
import s from './Main.module.sass'
import Footer from './_base/Footer'
import Banner from './Banner'
import WhyEnver from './WhyEnver'
import Services from './Services'
import Portfolio from './Portfolio'

const Main: FC = () => {
  return (
    <div className={s.mainWrapper}>
      <Header />
      <main className='container'>
        <Banner />
        <WhyEnver />
        <Services />
        <Portfolio />
        <section>Contact Us</section>
      </main>
      <Footer />
    </div>
  )
}

export default Main
