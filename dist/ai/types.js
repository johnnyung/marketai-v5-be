export var AIProvider;
(function (AIProvider) {
    AIProvider["OPENAI"] = "openai";
    AIProvider["ANTHROPIC"] = "anthropic";
    AIProvider["GEMINI"] = "gemini";
    AIProvider["DEEPSEEK"] = "deepseek";
    AIProvider["NONE"] = "none";
})(AIProvider || (AIProvider = {}));
