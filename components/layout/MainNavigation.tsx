import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #77002e;
  padding: 0 10%;
`

const LogoDiv = styled.div`
  font-size: 2rem;
  color: white;
  font-weight: bold;
`

const MainNavigationUList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: baseline;
`

const MainNavigationOrderedList = styled.li`
  margin-left: 3rem;
`

const HeaderAttribute = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: #fcb8d2;

  &hover,
  &active {
    color: white;
  }
`

function MainNavigation() {
  return (
    <Header>
      <LogoDiv>React Meetups</LogoDiv>
      <nav>
        <MainNavigationUList>
          <MainNavigationOrderedList>
            <Link href="/">All Meetups</Link>
          </MainNavigationOrderedList>
          <MainNavigationOrderedList>
            <Link href="/new-meetup">Add New Meetup</Link>
          </MainNavigationOrderedList>
        </MainNavigationUList>
      </nav>
    </Header>
  )
}

export default MainNavigation
