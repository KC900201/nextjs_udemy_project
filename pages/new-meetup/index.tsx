import NewMeetupForm from '@/components/meetups/NewMeetupForm'

function NewMeetupPage() {
  const onAddMeetupHandler = (enteredMeetupData: any) => {
    console.log(enteredMeetupData)
  }

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
}

export default NewMeetupPage
