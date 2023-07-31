import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  const [count, setCount] = useState(3)

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000)

    return () => {
      clearInterval(countdownInterval)
    }
  }, [])

  useEffect(() => {
    if (count === 0) {
      navigate(-1)
    }
  }, [count, navigate])

  return (
    <div>
      <h2>page not found!</h2>
      <p>{count}초 뒤 이전 페이지로 이동합니다.</p>
    </div>
  )
}

export default Error
