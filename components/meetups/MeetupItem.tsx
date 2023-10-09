import { useRouter } from 'next/router'
import styled from 'styled-components'
import Image from 'next/image'
import Card from '../ui/Card'

const ImageSection = styled.section`
  width: 100%;
  height: 20rem;
  overflow: hidden;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;

  img {
    width: 100%;
    object-fit: cover;
  }
`

const ContentSection = styled.section`
  text-align: center;
  padding: 1rem;

  h3 {
    font-size: 1.25rem;
    color #2c292b;
  }
`

const ActionSection = styled.section`
  padding: 1.5rem;
  text-align: center;
`

const ActionButton = styled.button`
  font: inherit;
  cursor: pointer;
  color: #77002e;
  border: 1px solid #77002e;
  background-color: transparent;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;

  &:hover,
  &:active {
    background-color: #ffe2ed;
  }
`

function MeetupItem({
  id,
  src,
  title,
  address,
}: {
  id?: string
  src: string
  title: string
  address: string
}) {
  const router = useRouter()

  const showDetailsHandler = () => {
    router.push('/' + id)
  }

  return (
    <li style={{ margin: '1rem 0' }}>
      <Card>
        <ImageSection>
          <Image priority src={src} width={50} height={50} alt={title} />
        </ImageSection>
        <ContentSection>
          <h3>{title}</h3>
          <address>{address}</address>
        </ContentSection>
        <ActionSection>
          <ActionButton onClick={showDetailsHandler}>Show Details</ActionButton>
        </ActionSection>
      </Card>
    </li>
  )
}

export default MeetupItem
