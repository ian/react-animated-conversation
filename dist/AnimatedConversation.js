"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Conversation_1 = __importDefault(require("./Conversation"));
const AnimatedConversation_css_1 = __importDefault(require("./AnimatedConversation.css"));
var Direction;
(function (Direction) {
    Direction["inbound"] = "inbound";
    Direction["outbound"] = "outbound";
})(Direction || (Direction = {}));
function AnimatedConversation(params) {
    const { className, messages } = params;
    const [current, setCurrent] = react_1.useState(-1);
    const runmessages = (current = 0) => {
        const item = messages[current];
        if (current < messages.length)
            setTimeout(() => {
                const next = current + 1;
                setCurrent(next);
                runmessages(next);
            }, item.delay);
    };
    react_1.useEffect(runmessages, []);
    console.log("__dirname", __dirname);
    return (react_1.default.createElement("div", { style: AnimatedConversation_css_1.default.container, className: className },
        react_1.default.createElement("img", { src: require("./assets/iPhoneX.png"), alt: "", style: { position: "absolute", width: " 100%", top: 0 } }),
        current >= 0 && react_1.default.createElement(Conversation_1.default, { messages: messages.slice(0, current) })));
}
exports.default = AnimatedConversation;
//# sourceMappingURL=AnimatedConversation.js.map