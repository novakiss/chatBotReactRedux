import {MESSAGE} from '../constants';
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
        case MESSAGE:
            const messageUserID = action.payload.userMessageID;
            const messageBotID = action.payload.botMessageID;
            const messageUserTime = action.payload.messageUserTime;
            const messageBotTime = action.payload.messageBotTime;
            const messageUser = action.payload.messageUser;
            const messageBot = action.payload.messageBot;
            const changeUserEntity = {messageId: messageUserID, time: messageUserTime, text: messageUser};
            const changeBotEntity = {messageId: messageBotID, time: messageBotTime, text: messageBot};
            return {
                ...state,
                byID: {...state.byID, [messageUserID]: changeUserEntity, [messageBotID]: changeBotEntity},
                chatIDs: [...state.chatIDs, ...[messageUserID], ...[messageBotID]]
            };
        default:
            return state;
    }
}