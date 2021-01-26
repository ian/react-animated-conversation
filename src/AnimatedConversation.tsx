import React, { useEffect, useState } from "react"
import Conversation from "./Conversation"
import styles from "./AnimatedConversation.css"

export enum Direction {
  inbound = "inbound",
  outbound = "outbound",
}

type Message = {
  body: string
  delay?: number
  direction: Direction
}

type Params = {
  className?: string
  messages: Message[]
}

function AnimatedConversation(params: Params) {
  const { className, messages } = params
  const [current, setCurrent] = useState(-1)

  const run = (current = 0) => {
    const item = messages[current]
    if (current < messages.length)
      setTimeout(() => {
        const next = current + 1
        setCurrent(next)
        run(next)
      }, item.delay)
  }

  useEffect(run, [])

  return (
    <div style={styles.container} className={className}>
      <img
        src={require("./assets/iPhoneX.png")}
        alt=""
        style={{ position: "absolute", width: " 100%", top: 0 }}
      />
      {current >= 0 && <Conversation messages={messages.slice(0, current)} />}
    </div>
  )
}

export default AnimatedConversation
