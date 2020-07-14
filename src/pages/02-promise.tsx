import React, { useEffect, useState } from 'react'
// import { getData } from '../js/api'

const api = (id: string) => new Promise<string>((resolve, reject) => {});

// todo : create custom hook that set response from api to state and return the state
function useData(id) {
  const [data, setData] = useState()
  useEffect(() => {
    (async function() {
      setData(await api(id))
    })()
  }, [id])
}

// what if api dont have type?