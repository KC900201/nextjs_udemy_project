import React, { useRef } from 'react'
import styled from 'styled-components'

import Card from '../ui/Card'

const MeetUpForm = styled.form`
  padding: 1rem;
`

const ControlSection = styled.section`
  margin-bottom: 0.5rem;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    display: block;
    font: inherit;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0.25rem;
    width: 100%;
  }
`

const ActionSection = styled.section`
  margin-top: 1rem;
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: #77002e;
    color: white;
    padding: 0.5rem 1.5rem;
    border: 1px solid #7702e;
    border-radius: 4px;
    font-weight: bold;
  }

  &button:hover,
  &button:active {
    background-color: #a50e48;
    border-color: #a50e48;
  }
`

interface FormInterface {
  onAddMeetup: (meetupData: any) => void
}

function NewMeetupForm({ onAddMeetup }: FormInterface) {
  const titleInputRef = useRef('')
  const imageInputRef = useRef('')
  const addressInputRef = useRef('')
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null)

  function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault()

    const enteredTitle = titleInputRef?.current?.valueOf()
    const enteredImage = imageInputRef?.current?.valueOf()
    const enteredAddress = addressInputRef?.current?.valueOf()
    const enteredDescription = descriptionInputRef?.current?.valueOf()

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    }

    onAddMeetup(meetupData)
  }

  return (
    <Card>
      <MeetUpForm onSubmit={submitHandler}>
        <ControlSection>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </ControlSection>
        <ControlSection>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </ControlSection>
        <ControlSection>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </ControlSection>
        <ControlSection>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </ControlSection>
        <ActionSection>
          <button>Add Meetup</button>
        </ActionSection>
      </MeetUpForm>
    </Card>
  )
}

export default NewMeetupForm
