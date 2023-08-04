import { Header } from 'components'
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
      navigate('/')
    }
  }, [count, navigate])

  return (
    <div>
      <div className="flex flex-col items-center w-full ">
        <h2 className="mb-2 text-3xl font-bold mt-7">page not found!</h2>
        <p>{count}초 뒤 메인 페이지로 이동합니다.</p>
      </div>
    </div>
  )
}

export default Error
