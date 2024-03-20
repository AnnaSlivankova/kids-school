import { Typography } from '@/components/ui/typography'

import s from './programs.module.scss'
export const Programs = () => {
  return (
    <section className={s.root} id={'programs'}>
      <div className={s.container}>
        <Typography as={'h2'} className={s.title} variant={'h2'}>
          Наши программы
        </Typography>
        <div className={s.programBlock}>
          <div className={s.program}>one</div>
          <div className={s.program}>two</div>
          <div className={s.program}>three</div>
        </div>
      </div>
    </section>
  )
}
