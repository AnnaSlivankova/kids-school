import { AboutUs } from '@/components/about-us'
import { Header } from '@/components/header'
import { Home } from '@/components/home'
import { Programs } from '@/components/programs'

export const Layout = () => {
  return (
    <>
      <Header />
      <Home />
      <AboutUs />
      <Programs />
    </>
  )
}
