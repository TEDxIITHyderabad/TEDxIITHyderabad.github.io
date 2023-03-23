import { useState, useEffect } from "react"
import styles from "./Countdown.module.css";

const Countdown = () => {
  const [days, setDays] = useState(10)
  const [hours, setHours] = useState(10)
  const [minutes, setMinutes] = useState(10)
  const [seconds, setSeconds] = useState(10)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const countdown = () => {
      const endDate = new Date("April 2, 2023 00:00:00").getTime()
      const today = new Date().getTime()

      const timeDiff = endDate - today

      const seconds = 1000
      const minutes = seconds * 60
      const hours = minutes * 60
      const days = hours * 24

      let timeDays = Math.floor(timeDiff / days)
      let timeHours = Math.floor((timeDiff % days) / hours)
      let timeMinutes = Math.floor((timeDiff % hours) / minutes)
      let timeSeconds = Math.floor((timeDiff % minutes) / seconds)

      timeHours = timeHours < 10 ? "0" + timeHours : timeHours
      timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
      timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds

      setDays(timeDays)
      setHours(timeHours)
      setMinutes(timeMinutes)
      setSeconds(timeSeconds)
      setIsLoading(false)
    }

    setInterval(countdown, 1000)
  }, [])

  return (
    <>
      {isLoading ? (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
        <section className="container">
          <div className={styles.countdown}>
          <div className={styles.countdown_time}>
            <div className={styles.single_countdown}>
              <h3>{days}</h3>
              <span>Days</span>
            </div>
            <div className={styles.single_countdown}>
              <h3>{hours}</h3>
              <span>Hours</span>
            </div>
            <div className={styles.single_countdown}>
              <h3>{minutes}</h3>
              <span>Minutes</span>
            </div>
            <div className={styles.single_countdown}>
              <h3>{seconds}</h3>
              <span>Seconds</span>
            </div>
          </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Countdown
