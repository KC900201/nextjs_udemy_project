import * as React from 'react'

export interface ComponentProps {
  children: React.ReactNode
}

export interface MeetupItemInterface {
  id: string
  image: string,
  title: string,
  address: string,
}