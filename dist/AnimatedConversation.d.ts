/// <reference types="react" />
export declare enum Direction {
    Inbound = "inbound",
    Outbound = "outbound"
}
declare type Message = {
    body: string;
    delay?: number;
    direction: Direction;
};
declare type Params = {
    className?: string;
    messages: Message[];
};
declare function AnimatedConversation(params: Params): JSX.Element;
export default AnimatedConversation;
