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
    byID :{},
    chatIDs : [],
};

export default function message  (state =initialState, action) {
    switch (action.type){
        case MESSAGE:
            const messageUserID = action.payload.userID;
            const messageBotID = action.payload.botID;
            const messageUserTime = action.payload.messageUserTime;
            const messageBotTime = action.payload.messageBotTime;
            const messageUser = action.payload.messageUser;
            const messageBot = action.payload.messageBot;
            const entityUserByID = state.byId[messageUserID];
            const entityBotByID = state.byId[messageBotID];
            const changeUserEntity = {...entityUserByID,messageId : messageUserID, time : messageUserTime, text : messageUser};
            const changeBotEntity = {...entityBotByID,messageId : messageBotID, time : messageBotTime, text : messageBot};
            return {...state, byID: {...state.byId, [messageUserID] : changeUserEntity}, [messageBotID] : changeBotEntity , allIDs: [...state.chatIDs,...[messageUserID],...[messageBotID]]};
        default:
            return state;
    }
}