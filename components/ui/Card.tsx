import * as React from 'react'
import styled from 'styled-components'
import { ComponentProps } from '@/helpers/children'

const CardDiv = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`

function Card({ children }: ComponentProps) {
  return <CardDiv>{children}</CardDiv>
}

export default Card
