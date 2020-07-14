import { join } from "path"

export async function getData() {
  const result = await fetch('some-url')
  const json = await result.json()
  return json
}