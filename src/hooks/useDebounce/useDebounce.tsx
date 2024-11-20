import { useEffect, useState } from 'react'

export const useDebounce = (
  value: string,
  time: number
): {
  debounceValue: string
} => {
  const [debounceValue, setDounceValue] = useState(value)

  useEffect(() => {
    const handlerTimer = setTimeout(() => {
      setDounceValue(value)
    }, time)

    return () => {
      clearTimeout(handlerTimer)
    }
  }, [value, time])

  return {
    debounceValue,
  }
}
