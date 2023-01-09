import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import s from './styles.module.sass'

interface IButtonProps {
  text: string
  size?: 'small' | 'large'
  variant?: 'outlined' | 'filled'
  icon?: any
}

const Button: FC<IButtonProps> = ({ text, size, variant, icon }) => {
  return (
    <button
      className={clsx(s.button, {
        [s.small]: size === 'small',
        [s.outlined]: variant === 'outlined',
      })}
    >
      {text}
      {icon && <Image className={s.button_image} src={icon} alt='icon' />}
    </button>
  )
}

export default Button
