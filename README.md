# react-animated-conversation

We had a need for a phone-like SMS conversation on one of our projects.

Supports:

- Fully customizable conversation
- Inbound / outbound bubbles
- Delay ms
- Typescript compatible

## Installation

`yarn add react-animated-conversation`

or

`npm i -s react-animated-conversation`

## Usage

```

import AnimatedConversation from 'react-animated-conversation'

function MyComponent() {

  return <>
    <AnimatedConversation messages={MESSAGES} />
  </>
}

const MESSAGES = [
  {
    body:
      "Hey, have you checked out react-animated-conversation??",
    direction: "inbound",
    delay: 0,
  },
  {
    body: "No, what's that?",
    direction: "inbound",
    delay: 3000,
  },
  { body: "Well, it makes generating these animated conversations easier.", direction: "outbound", delay: 3000 },
  {
    body:
      "Really? How's it work?",
    direction: "inbound",
    delay: 3000,
  },
  { body: "Well, you just add this library and then you send it a messages Array", direction: "outbound", delay: 3000 },
  {
    body:
      "Wow, that's a ton easier than doing the HTML/CSS/JS yourself.",
    direction: "inbound",
    delay: 3000,
  },
  { body: "92130", direction: "outbound", delay: 3000 },
  {
    body:
      "Absolutely.",
    direction: "inbound",
    delay: 3000,
  },
]

```
