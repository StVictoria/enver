import { FC } from 'react'
import Header from './_base/Header'
import s from './styles.module.sass'

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
      <footer>Footer</footer>
    </div>
  )
}

export default Main
