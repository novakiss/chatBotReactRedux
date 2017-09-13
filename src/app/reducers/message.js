import {BOTMESSAGE, USERMESSAGE} from '../constants';

const initialState = {
    byID: {},
    chatIDs: [],
};

export default function message(state = initialState, action) {
    switch (action.type) {
        case BOTMESSAGE:
            const {
                botMessageID,
                messageBotTime,
                question,
                noQuestion,
                medicineID,
                questionId,
                count
            } = action.payload;
            const changeBotEntity = {
                messageID: botMessageID,
                time: messageBotTime,
                text: question,
                questionId: questionId,
                noQuestion: noQuestion,
                medicine: medicineID,
                count : count,
                type: 'bot'
            };
            return {
                ...state,
                byID: {...state.byID, [botMessageID]: changeBotEntity},
                chatIDs: [...state.chatIDs, ...[botMessageID]]
            };
        case USERMESSAGE:
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