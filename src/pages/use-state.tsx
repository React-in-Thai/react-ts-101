import React, { useState, useEffect } from 'react';

export function Example1() {
  // primitive types are fine
  const [bool, setBool] = useState(false)
  const [count, setCount] = useState(0)

  const [boolOrNum, setBoolOrNum] = useState() // need to be boolean | number

  return (
    <div>
      <p>Ex 1 : Primitives</p>
      <button onClick={() => setBool(true)}>Toggle</button>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}

// interface Item {
//   id: string
//   name: string
// }

export function Example2() {
  const [data, setData] = useState([])

  // const parseData = () => {
  //   const newData = data.filter(item => item.id)
  // }

  return (
    data.map((item, i) => (
      <div>
        Item {i} is {item.id}
      </div>
    ))
  )
}


interface User {
  id: number
  name: string
}
function api(): Promise<User> {
  return Promise.resolve({
    id: 1,
    name: 'John'
  })
}

export function Example3() {
  // use union type with null for initial state
  const [data, setData] = useState<User | null>(null)
  useEffect(() => {
    // tip: JavaScript Immediately-invoked Function Expressions (IIFE)
    (async function() {
      setData(await api())
    })()
  }, [])
  if (data === null) {
    return <div>Loading...</div>
  }
  return (
    <div>
      Name: {data.name}
    </div>
  )
}