import styled from 'styled-components'
import MeetupItem from './MeetupItem'
import { MeetupItemInterface } from '@/helpers/children'

const MeetupOrderedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

function MeetupList({ meetUps }: { meetUps: MeetupItemInterface[] }) {
  ;<MeetupOrderedList>
    {meetUps.map((meetup) => (
      <MeetupItem
        key={meetup.id}
        address={meetup.address}
        src={meetup.image}
        title={meetup.title}
      />
    ))}
  </MeetupOrderedList>
}

export default MeetupList
