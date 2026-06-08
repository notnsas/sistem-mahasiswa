"use client"

import { useNotification } from "./NotificationContext"

export default function Notification() {
  const { message, type } = useNotification()
  if (!message) return null

  return (
    <div
      className={`fixed top-20 right-6 z-50 max-w-sm rounded-xl px-4 py-3 text-sm font-medium shadow-lg transition-all duration-200
        ${
          type === "success"
            ? "border-l-4 border-tertiary bg-inverse-surface text-inverse-on-surface"
            : "border-l-4 border-error bg-inverse-surface text-inverse-on-surface"
        }`}
      role="alert"
    >
      {message}
    </div>
  )
}
