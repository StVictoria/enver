import Link from 'next/link'
import { FC, useState } from 'react'
import Button from '../../_common/Button'
import s from './styles.module.sass'
import Logo from '../../../assets/logo.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { ILink } from '../../../interfaces/ILink'
import { nav } from '../../../static/nav'

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      <div className={s.header_contactUsButtonWrapper}>
        <Button text='Contact Us' size='small' variant='outlined' />
      </div>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={clsx(s.header_burger, { [s.open]: isMobileMenuOpen })}
      >
        <div className={s.header_burgerLine1} />
        <div className={s.header_burgerLine2} />
        <div className={s.header_burgerLine3} />
      </button>
    </header>
  )
}

export default Header
