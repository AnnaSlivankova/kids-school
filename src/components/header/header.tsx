import { Link } from 'react-scroll'

import { Typography } from '@/components/ui/typography'

import s from './header.module.scss'

const navbarData: NavbarData[] = [
  { path: 'home', title: 'Главная' },
  { path: 'about-us', title: 'О нас' },
  { path: 'programs', title: 'Программы' },
  { path: '', title: 'Комманда' },
  { path: '', title: 'FAQ' },
  { path: '', title: 'Контакты' },
]

export const Header = () => {
  const handleSetActive = () => {}

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
      </div>
    </header>
  )
}

type NavbarData = {
  path: string
  title: string
}