import React from 'react'
import { MainCnt } from '../assets/styles/MainStyle'

export default function Main({ children }) {
  return (
    <MainCnt>
      {children}
    </MainCnt>
  )
}
