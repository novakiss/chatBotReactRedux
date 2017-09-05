import {BOTMESSAGE,USERMESSAGE} from '../constants';
/*
 * single-entity:
 * message:{
 * 1: {
 *   messageId: 1,
 *   time: '',
 *   text:  '...'
 * }
 * }*/
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
                messageBot,
            } = action.payload;
            const changeBotEntity = {messageId: botMessageID, time: messageBotTime, text: messageBot};
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
            const changeUserEntity = {messageID: userMessageID , time: messageUserTime , text : messageUser};

            return {
                ...state,
                byID: {...state.byID, [userMessageID] : changeUserEntity },
                chatIDs: [...state.chatIDs, ...[userMessageID]]
            };
        default:
            return state;
    }
}