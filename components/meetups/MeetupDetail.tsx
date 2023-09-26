import { Fragment } from 'react'
import Image from 'next/image'

interface MeetupDetailInterface {
  imgSrc?: string
}

function MeetupDetail({ imgSrc }: MeetupDetailInterface) {
  const imageSource = imgSrc as string

  return (
    <Fragment>
      <Image src={imageSource} alt="a first meet up" width={500} height={500} />
      <h1>First Meetup</h1>
    </Fragment>
  )
}

export default MeetupDetail
