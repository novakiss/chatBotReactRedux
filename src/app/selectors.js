//selector for step-Reducer
export const stepSelector = state => state.chatBot.state.step;

//selector for message-Reducer
export const messageSelector = state => state.chatBot.state.message;

//selector for fetchData-Reducer
export const fetchDataSelector = state => state.chatBot.state.fetchData;