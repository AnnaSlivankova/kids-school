import { FC } from 'react'
import { Link } from 'react-scroll'

import { navbarData } from '@/components/header'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './side-bar.module.scss'

export const SideBar: FC<PropsType> = ({ handleClose, isOpen }) => {
  const classNames = clsx(s.root, isOpen && s.open)

  return (
    <>
      {isOpen && <div className={s.background} onClick={handleClose} />}

      <aside className={classNames}>
        <nav className={s.nav}>
          <button className={s.close} onClick={handleClose}>
            close
          </button>

          <Typography as={'ul'}>
            {navbarData.map((el, index) => {
              return (
                <li key={index}>
                  <Link activeClass={s.active} duration={500} offset={-70} smooth spy to={el.path}>
                    {el.title}
                  </Link>
                </li>
              )
            })}
          </Typography>
        </nav>
      </aside>
    </>
  )
}

type PropsType = {
  handleClose: () => void
  isOpen: boolean
}
