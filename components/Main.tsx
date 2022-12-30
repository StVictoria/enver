import { FC } from 'react'
import Header from './_base/Header'
import s from './Main.module.sass'
import Footer from './_base/Footer'
import Banner from './Banner'

const Main: FC = () => {
  return (
    <div className={s.mainWrapper}>
      <Header />
      <main className='container'>
        <Banner />

        <section>WhyEnver</section>

        <section>Service</section>

        <section>Portfolio</section>

        <section>Contact Us</section>
      </main>
      <Footer />
    </div>
  )
}

export default Main
