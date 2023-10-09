import styled from 'styled-components'
import Image from 'next/image'

const DetailSection = styled.section`
  text-align: center;
`

interface MeetupDetailInterface {
  imgSrc?: string
  title: string
  address?: string
  description?: string
}

function MeetupDetail({
  imgSrc,
  title,
  address,
  description,
}: MeetupDetailInterface) {
  const imageSource = imgSrc as string

  return (
    <DetailSection>
      <Image src={imageSource} alt="a first meet up" width={500} height={500} />
      <h1>{title ?? ''}</h1>
      <address>{address ?? ''}</address>
      <p>{description ?? ''}</p>
    </DetailSection>
  )
}

export default MeetupDetail
