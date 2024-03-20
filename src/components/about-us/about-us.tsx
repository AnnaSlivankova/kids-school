import pic from '@/assets/imgs/two.jpg'
import { Typography } from '@/components/ui/typography'

import s from './about-us.module.scss'

export const AboutUs = () => {
  return (
    <section className={s.root} id={'about-us'} style={{ marginTop: '30px' }}>
      <div className={s.container}>
        <div className={s.titleHeader}>
          <Typography as={'h2'} variant={'h2'}>
            Несколько слов о нас
          </Typography>
          <Typography>
            Мы стремимся предоставить родителям и их детям широкий спектр услуг по уходу за детьми,
            а также повысить навыки и базовые знания ваших детей.
          </Typography>
        </div>

        <div className={s.block}>
          <div className={s.leftContainer}>
            <img alt={'pictures'} className={s.image} src={pic} />
          </div>

          <div className={s.rightContainer}>
            <Typography>
              Наша миссия в LOGO - обеспечить превосходный уровень дошкольного образования, детского
              сада, программ до и после школы и летнего лагеря для семей, живущих в большом районе.
              Здесь вы найдете исключительных учителей, учебные программы и учебную среду, которая
              побуждает детей учиться, играть и исследовать в безопасной, здоровой и воспитывающей
              среде, способствующей развитию творческого мышления.
            </Typography>

            <div>
              <div className={s.progressBarContainer}>
                <Typography as={'p'}>Preschool Education</Typography>
                <Typography as={'span'}>75%</Typography>
              </div>
              <div className={s.progressBar}>
                <div className={s.liner}></div>
              </div>
            </div>

            <div>
              <div className={s.progressBarContainer}>
                <Typography as={'p'}>Summer Programs</Typography>
                <Typography as={'span'}>50%</Typography>
              </div>
              <div className={s.progressBar}>
                <div className={s.liner}></div>
              </div>
            </div>

            <button style={{ marginTop: '20px' }}>Learn more</button>
          </div>
        </div>
      </div>
    </section>
  )
}
