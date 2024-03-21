import { ReactNode } from 'react'

import { Block, OfferBlock } from '@/components/home/block'
import { Typography } from '@/components/ui/typography'
import {
  Baby,
  BadgeCheck,
  Book,
  GraduationCap,
  Palette,
  PersonStanding,
  Shield,
  Sun,
} from 'lucide-react'

import s from './home.module.scss'

import pic from '../../assets/imgs/one.png'

const infoData: InfoData[] = [
  {
    color: 'green',
    description:
      'Наша программа специального образования предлагает качественное обучение детям с ограниченными возможностями и задержками в развитии.',
    icon: <Book size={40} />,
    title: 'Специальное образование',
  },
  {
    color: 'blue',
    description:
      'В LOGO мы предлагаем полный день дошкольных занятий, основанных на игровом подходе, для детей от двух до пяти лет.',
    icon: <Sun size={40} />,
    title: 'Полный день',
  },
  {
    color: 'orange',
    description:
      'Наша команда состоит из опытных и творческих преподавателей, которые посвящают себя успешному обучению ваших детей.',
    icon: <BadgeCheck size={40} />,
    title: 'Квалифицированные преподаватели',
  },
  {
    btn: <button>Узнать больше</button>,
    color: 'violet',
    description: 'Обеспечение качественного образования в творческой атмосфере',
    title: 'Лучшее дошкольное учреждение',
  },
]

export const Home = () => {
  return (
    <div className={s.root} id={'home'}>
      <div className={s.imageContainer} style={{ position: 'relative' }}>
        <div className={s.titleBlock}>
          <Typography as={'h1'} className={s.titleMain}>
            Идеальный учебный центр
          </Typography>
          <Typography as={'span'} className={s.titleSecondary}>
            для ваших детей
          </Typography>
          <button className={s.btn}>Learn more</button>
        </div>
        <img alt={'pictures'} className={s.image} src={pic} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
        {infoData.map((el, index) => {
          return (
            <Block bgColor={el.color} key={index}>
              <div style={{ maxWidth: '300px' }}>
                <div>{el.icon}</div>
                <div style={{ fontSize: 'var(--font-size-l)' }}>{el.title}</div>
                <div
                  style={{
                    fontSize: 'var(--font-size-m)',
                    fontWeight: 'var(--font-weight-regular)',
                  }}
                >
                  {el.description}
                </div>
                {el.btn}
              </div>
            </Block>
          )
        })}
      </div>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: '1200px',
        }}
      >
        <div
          style={{
            marginTop: '20px',
            maxWidth: '740px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '2rem', fontWeight: 'var(--font-weight-bold)' }}>
            Что мы предлагаем
          </div>
          <div
            style={{
              fontSize: 'var(--font-size-m)',
              fontWeight: 'var(--font-weight-regular)',
            }}
          >
            В нашем образовательном центре мы предоставляем множество преимуществ и выгод для
            успешного обучения ваших детей, при этом позволяя им оставаться полноценно активными,
            творческими и здоровыми.
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
          {offerData.map((el, index) => {
            return (
              <OfferBlock
                color={el.color}
                description={el.description}
                icon={el.icon}
                key={index}
                title={el.title}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

type InfoData = {
  btn?: ReactNode
  color: 'blue' | 'green' | 'orange' | 'violet'
  description: string
  icon?: ReactNode
  title: string
}

const offerData: OfferData[] = [
  {
    color: 'blue',
    description: 'Мы предлагаем первоклассную защиту и безопасность для ваших детей в LOGO.',
    icon: <Shield size={40} />,
    title: 'Безопасность превыше всего',
  },
  {
    color: 'orange',
    description:
      'Во всех классах нашего центра обучается не более 6 человек, независимо от программы обучения.',
    icon: <PersonStanding size={40} />,
    title: 'Небольшой размер класса',
  },
  {
    color: 'violet',
    description:
      'Мы нанимаем только самых опытных и сертифицированных преподавателей для ваших детей.',
    icon: <GraduationCap size={40} />,
    title: 'Сертифицированные преподаватели',
  },
  {
    color: 'orange',
    description:
      'Удовлетворение образовательных потребностей младенцев посредством качественного ухода за ними.',
    icon: <Baby size={40} />,
    title: 'Уход за младенцами',
  },
  {
    color: 'violet',
    description:
      'Наша учебная программа была разработана для развития творческих способностей у всех студентов LOGO.',
    icon: <Palette size={40} />,
    title: 'Творческие уроки',
  },
  {
    color: 'blue',
    description: 'Лучшие условия для того, чтобы ваш ребенок получил уникальный опыт обучения.',
    icon: <Sun size={40} />,
    title: 'Счастливая среда',
  },
]

type OfferData = {
  color: 'blue' | 'green' | 'orange' | 'violet'
  description: string
  icon: ReactNode
  title: string
}
