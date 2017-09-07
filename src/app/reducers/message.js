import {BOTMESSAGE, USERMESSAGE} from '../constants';

const initialState = {
    byID: {
        0: {
            messageID: 0,
            time : 0,
            text: 'QuestionInput?',
            type : 'bot'
        }
    },
    chatIDs: [0],
};

export default function message(state = initialState, action) {
    switch (action.type) {
        case BOTMESSAGE:
            const {
                botMessageID,
                messageBotTime,
                messageBot,
            } = action.payload;
            const changeBotEntity = {messageID: botMessageID, time: messageBotTime, text: messageBot,type :'bot'};
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
            const changeUserEntity = {messageID: userMessageID, time: messageUserTime, text: messageUser,type:'user'};

            return {
                ...state,
                byID: {...state.byID, [userMessageID]: changeUserEntity},
                chatIDs: [...state.chatIDs, ...[userMessageID]]
            };
        default:
            return state;
    }
}