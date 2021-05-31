import { AEREOLINEAS } from "./types";

const initialState = {
  aereolinea: {},
};

export function aereolineaReducer(state = initialState, action) {
  switch (action.type) {
    case AEREOLINEAS:
      return {
        ...state,
        aereolinea: action.payload,
      };
    default:
      return state;
  }
}
