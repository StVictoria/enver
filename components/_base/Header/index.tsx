import Link from 'next/link'
import { FC } from 'react'
import Button from '../../_common/Button'
import s from './styles.module.sass'
import Logo from '../../../assets/logo.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { ILink } from '../../../interfaces/ILink'

const nav: ILink[] = [
  { id: 0, title: 'Home', to: '/' },
  { id: 1, title: 'Services', to: '/services' },
  { id: 2, title: 'Our Projects', to: '/our-projects' },
  { id: 3, title: 'About us', to: '/about-us' },
]

const Header: FC = () => {
  const router = useRouter()

  const renderNav = () =>
    nav.map((item: ILink) => (
      <Link
        key={item.id}
        href={item.to}
        className={clsx(s.header_navLink, {
          [s.active]: router.asPath.split('/')[1] === item.to.split('/')[1],
        })}
      >
        {item.title}
      </Link>
    ))

  return (
    <header className={`${s.header} container`}>
      <Image className={s.header_logo} src={Logo} alt='Enver' />
      <nav className={s.header_nav}>{renderNav()}</nav>
      <Button text='Contact Us' size='small' variant='outlined' />
    </header>
  )
}

export default Header
