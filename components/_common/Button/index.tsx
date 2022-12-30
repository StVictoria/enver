import clsx from 'clsx'
import { FC } from 'react'
import s from './styles.module.sass'

interface IButtonProps {
  text: string
  size?: 'small' | 'large'
  variant?: 'outlined' | 'filled'
}

const Button: FC<IButtonProps> = ({ text, size, variant }) => {
  return (
    <button
      className={clsx(s.button, {
        [s.small]: size === 'small',
        [s.outlined]: variant === 'outlined',
      })}
    >
      {text}
    </button>
  )
}

export default Button
