import React, { useEffect, useState } from "react"
import Conversation from "./Conversation"
// import styles from "./AnimatedConversation.css"

function AnimatedConversation(params) {
  const { className, messages } = params
  const [current, setCurrent] = useState(-1)

  const runmessages = (current = 0) => {
    const item = messages[current]
    if (current < messages.length)
      setTimeout(() => {
        const next = current + 1
        setCurrent(next)

        runmessages(next)
      }, item.delay)
  }

  useEffect(runmessages, [])

  return (
    <div
      // style={styles.container}
      className={className}
    >
      {/* <img
        src={require("../assets/iPhoneX.png")}
        alt=""
        style={{ position: "absolute", width: " 100%", top: 0 }}
      /> */}
      {current >= 0 && <Conversation messages={messages.slice(0, current)} />}
    </div>
  )
}

export default AnimatedConversation
