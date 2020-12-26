import mapKeys from 'lodash-es/mapKeys';
import omit from 'lodash-es/omit';
import { Action, Types } from './Types';

export default function appReducer(state: Object = {}, action: Action) {
    switch (action.type) {
        case Types.FETCH_PLAYERS:
            return { ...state, ...mapKeys(action.payload, 'id') };
        case Types.FETCH_PLAYER:
            return { ...state, [action.payload.id]: action.payload };
        case Types.CREATE_PLAYER:
            return { ...state, [action.payload.id]: action.payload };
        case Types.EDIT_PLAYER:
            return { ...state, [action.payload.id]: action.payload };
        case Types.DELETE_PLAYER:
            return omit(state, action.payload);
        case Types.CLEAR_PLAYERS_DATA:
            return {};
        default:
            return state;
    }
}
