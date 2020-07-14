import React from 'react'

enum Colors {
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
  White = 'white'
}

type Props = {
  color: Colors
}

// todo : create prop type from enum
export function Example({ color }: Props) {
  if (color === Colors.White) {
    return (
      <div>White ไง</div>
    )
  }
  return (
    <div>You pick color: {color}</div>
  )
}

export function App() {
  return (
    <Example color={Colors.Blue} />
  )
}
