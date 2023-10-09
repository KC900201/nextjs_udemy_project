import { Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import NewMeetupForm from '@/components/meetups/NewMeetupForm'

function NewMeetupPage() {
  const router = useRouter()

  const onAddMeetupHandler = (enteredMeetupData: any) => {
    console.log(enteredMeetupData)
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities"
        />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </Fragment>
  )
}

export default NewMeetupPage
