import React from 'react'
import { HeaderCnt } from '../assets/styles/HeaderStyle'

export default function Header({ pageTitle='Nome da página' }) {
  return (
    <HeaderCnt>
      <h1>{pageTitle}</h1>
    </HeaderCnt>
  )
}