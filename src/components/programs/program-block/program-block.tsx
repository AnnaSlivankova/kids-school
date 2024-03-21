import { Typography } from '@/components/ui/typography'

import s from './program-block.module.scss'

export const ProgramBlock = (props: Props) => {
  const { description, pic, teacher, title } = props

  return (
    <div className={s.root}>
      <div className={s.imgContainer}>
        <img alt={'program-picture'} className={s.img} src={pic} />
      </div>
      <Typography className={s.title} variant={'h3'}>
        {title}
      </Typography>
      <Typography className={s.description}>{description}</Typography>
      <Typography className={s.teacher}>
        Teacher:<Typography className={s.teacherName}>{teacher}</Typography>
      </Typography>
    </div>
  )
}

type Props = {
  description: string
  pic: string
  teacher: string
  title: string
}
