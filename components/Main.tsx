import { FC } from 'react'
import Header from './_base/Header'
import s from './Main.module.sass'
import Footer from './_base/Footer'

const Main: FC = () => {
  return (
    <div className={s.mainWrapper}>
      <Header />
      <main className='container'>
        <section>Banner</section>

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
