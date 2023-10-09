import { useState, useEffect } from 'react'
import MeetupList from '@/components/meetups/MeetupList'
import { MeetupItemInterface } from '@/helpers/children'

type meetUpType = {
  id: string
  title: string
  image: string
  address: string
}

const DUMMY_MEETUPS: meetUpType[] = [
  {
    id: 'm1',
    title: 'DUMMY',
    image: '/img/sample_town.jpg',
    address: '123, Tokyo, Japan',
  },
  {
    id: 'm2',
    title: 'DUMMY',
    image: '/img/sample_town.jpg',
    address: '123, Tokyo, Japan',
  },
]

function HomePage(props: { meetups: MeetupItemInterface[] }) {
  return <MeetupList meetUps={props.meetups} />
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  }
}

export default HomePage
