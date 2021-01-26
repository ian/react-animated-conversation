"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Conversation_css_1 = __importDefault(require("./Conversation.css"));
function Conversation(props) {
    const { messages } = props;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("ul", { style: Conversation_css_1.default.messages }, messages.map((msg, i) => (react_1.default.createElement("li", { key: i, style: Object.assign({}, Conversation_css_1.default.message, Conversation_css_1.default[msg.direction]) }, msg.body))))));
}
exports.default = Conversation;
//# sourceMappingURL=Conversation.js.map