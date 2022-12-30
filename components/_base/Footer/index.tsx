import Image from 'next/image'
import { FC } from 'react'
import s from './styles.module.sass'
import Logo from '../../../assets/logo.svg'
import { ILink } from '../../../interfaces/ILink'
import Link from 'next/link'

const links: ILink[] = [
  { id: 0, title: 'Support', to: '/support' },
  { id: 1, title: 'Privacy Policy', to: '/privacy-policy' },
  { id: 2, title: 'Terms and Conditions', to: '/terms-and-conditions' },
]

const Footer: FC = () => {
  const renderLinks = () =>
    links.map((link: ILink) => (
      <li key={link.id}>
        <Link href={link.to}>{link.title}</Link>
      </li>
    ))

  return (
    <footer className={`${s.footer} container`}>
      <Image className={s.footer_logo} src={Logo} alt='Enver' />
      <ul className={s.footer_links}>{renderLinks()}</ul>
      <p className={s.footer_copyRights}>© 2020 Enver, All Rights Reserved</p>
    </footer>
  )
}

export default Footer
