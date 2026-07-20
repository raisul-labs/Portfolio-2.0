'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export const LocalTime = () => {
  const t = useTranslations('contactSection')
  const [localTime, setLocalTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      setLocalTime(
        new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Dhaka',
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date())
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="font-mono text-xs text-grayText1 dark:text-grayText2">
      {t('poland')} {localTime}
    </span>
  )
}