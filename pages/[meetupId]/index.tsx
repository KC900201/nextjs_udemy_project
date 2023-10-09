import MeetupDetail from '@/components/meetups/MeetupDetail'

function MeetupDetails(props: {
  meetupData: {
    title: string
    imageSource: string
    address: string
    description?: string
  }
}) {
  return (
    <MeetupDetail
      title={props.meetupData.title}
      imgSrc={props.meetupData.imageSource}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  )
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  }
}

export async function getStaticProps(context: any) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId

  return {
    props: {
      meetupData: {
        id: meetupId,
        imageSource: '/img/sample_pic.jpg',
      },
    },
    revalidate: 1,
  }
}

export default MeetupDetails
