import { ReactNode } from 'react'

import clsx from 'clsx'

import s from './block.module.scss'

export const Block = (props: Props) => {
  const { bgColor, children } = props

  const classNames = clsx(s.root, s[bgColor])

  return <div className={classNames}>{children}</div>
}

type Props = {
  bgColor: 'blue' | 'green' | 'orange' | 'violet'
  children?: ReactNode
}

export const OfferBlock = (props: OfferBlockProps) => {
  const { color, description, icon, title } = props

  const styles = clsx(s.circle, s[`${color}Sm`])

  return (
    <div className={s.offerRoot}>
      <div className={s.icon}>
        {icon}
        {/*<span className={s.circle}></span>*/}
        <span className={styles}></span>
      </div>

      <div className={s.title}>{title}</div>
      <div className={s.description}>{description}</div>
    </div>
  )
}

type OfferBlockProps = {
  color: 'blue' | 'green' | 'orange' | 'violet'
  description: string
  icon: ReactNode
  title: string
}
