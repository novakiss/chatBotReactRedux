import {BOT_MESSAGE, USER_MESSAGE} from '../constants';

const initialState = {
    byID: {},
    chatIDs: [],
};

export default function message(state = initialState, action) {
    switch (action.type) {
        case BOT_MESSAGE:
            const {
                botMessageID,
                messageBotTime,
                question,
                questionType,
                noQuestion
            } = action.payload;
            const changeBotEntity = {
                messageID: botMessageID,
                time: messageBotTime,
                text: question,
                questionType: questionType,
                noQuestion: noQuestion,
                type: 'bot'
            };
            return {
                ...state,
                byID: {...state.byID, [botMessageID]: changeBotEntity},
                chatIDs: [...state.chatIDs, ...[botMessageID]]
            };
        case USER_MESSAGE:
            const {
                userMessageID,
                messageUserTime,
                messageUser
            } = action.payload;
            const changeUserEntity = {messageID: userMessageID, time: messageUserTime, text: messageUser, type: 'user'};

            return {
                ...state,
                byID: {...state.byID, [userMessageID]: changeUserEntity},
                chatIDs: [...state.chatIDs, ...[userMessageID]]
            };
        default:
            return state;
    }
}