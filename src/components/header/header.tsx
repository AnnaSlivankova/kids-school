import { useState } from 'react'
import { Link } from 'react-scroll'

import { SideBar } from '@/components/ui/side-bar'
import { Typography } from '@/components/ui/typography'

import s from './header.module.scss'

export const navbarData: NavbarData[] = [
  { path: 'home', title: 'Главная' },
  { path: 'about-us', title: 'О нас' },
  { path: 'programs', title: 'Программы' },
  { path: '', title: 'Комманда' },
  { path: '', title: 'FAQ' },
  { path: '', title: 'Контакты' },
]

export const Header = () => {
  const handleSetActive = () => {}
  const [open, setOpen] = useState(false)

  return (
    <header className={s.root}>
      <div className={s.container}>
        <div>LOGO</div>
        <Typography as={'ul'} className={s.content} variant={'h3'}>
          {navbarData.map((el, index) => (
            <li key={index}>
              <Link
                activeClass={s.active}
                className={s.link}
                duration={500}
                offset={-70}
                onSetActive={handleSetActive}
                smooth
                spy
                to={el.path}
              >
                {el.title}
              </Link>
            </li>
          ))}
        </Typography>
        <button className={s.burgerBtn} onClick={() => setOpen(!open)}>
          menu
        </button>
        {open && <SideBar handleClose={() => setOpen(!open)} isOpen={open} />}
      </div>
    </header>
  )
}

type NavbarData = {
  path: string
  title: string
}
