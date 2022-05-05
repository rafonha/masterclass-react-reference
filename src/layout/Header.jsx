import React from 'react'
import { HeaderCnt, HeaderImg } from '../assets/styles/HeaderStyle'

export default function Header({ pageTitle='Nome da página', flag }) {
  return (
    <HeaderCnt>
      <h1>{pageTitle}</h1>
      <HeaderImg src={flag} alt="" />
    </HeaderCnt>
  )
}