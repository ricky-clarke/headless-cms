export const INITIAL_STATE = {
    menuOpen: false,
  };
  
  export const GlobalReducer = (state, action) => {
  
      switch (action.type) {
            case "MENUOPEN":
                return {
                ...state,
                menuOpen: action.payload
                };
                return {
                  ...state,
                  settingsModal: action.payload
                };
          default:
            return state;
        }
  
  }