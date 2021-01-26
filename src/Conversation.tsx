import React from "react"
import styles from "./Conversation.css"

export default function Conversation(props) {
  const { messages } = props

  return (
    <>
      <ul style={styles.messages}>
        {messages.map((msg, i) => (
          <li
            key={i}
            style={Object.assign({}, styles.message, styles[msg.direction])}
          >
            {msg.body}
          </li>
        ))}
      </ul>
    </>
  )
}
