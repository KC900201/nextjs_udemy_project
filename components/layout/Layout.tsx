import styled from 'styled-components'
import { ComponentProps } from '@/helpers/children'
import MainNavigation from './MainNavigation'

const MainComponent = styled.main`
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
`

function Layout({ children }: ComponentProps) {
  return (
    <section>
      <MainNavigation />
      <MainComponent>{children}</MainComponent>
    </section>
  )
}

export default Layout
