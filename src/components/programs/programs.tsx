import { ProgramBlock } from '@/components/programs/program-block'
import { Typography } from '@/components/ui/typography'

import s from './programs.module.scss'

import five from '../../assets/imgs/five.jpg'
import four from '../../assets/imgs/four.jpg'
import three from '../../assets/imgs/three.jpg'

const programsData: ProgramsData[] = [
  {
    description:
      'В рамках этих программ дети и подростки получают обширный опыт и занятия искусством.',
    pic: three,
    teacher: 'Stephen Rose',
    title: 'Программы по искусству',
  },
  {
    description:
      'Цель этих программ - подготовить вашего ребенка к лучшему изучению иностранного языка.',
    pic: four,
    teacher: 'Catherine White',
    title: 'Программы по иностранным языкам',
  },
  {
    description: 'В основе этих программ лежат соревнования и занятия по движению.',
    pic: five,
    teacher: 'Stephen Rose',
    title: 'Спортивные программы',
  },
]

export const Programs = () => {
  return (
    <section className={s.root} id={'programs'}>
      <div className={s.container}>
        <Typography as={'h2'} className={s.title} variant={'h2'}>
          Наши программы
        </Typography>
        <div className={s.programBlock}>
          {programsData.map((el, index) => {
            return (
              <ProgramBlock
                description={el.description}
                key={index}
                pic={el.pic}
                teacher={el.teacher}
                title={el.title}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

type ProgramsData = {
  description: string
  pic: string
  teacher: string
  title: string
}
