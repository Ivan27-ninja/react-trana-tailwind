import {
  SIDEBAR_COLLAPSE,
  SIDEBAR_EXPAND,
  SIDEBAR_COLLAPSE_TOGGLE,
} from "constants/actionTypes";

export default function reducer(state, action) {
  switch (action.type) {
    case SIDEBAR_COLLAPSE:
      return {
        ...state,
        sidebarCollapsed: true,
      };
    case SIDEBAR_EXPAND:
      return {
        ...state,
        sidebarCollapsed: false,
      };
    case SIDEBAR_COLLAPSE_TOGGLE:
      return {
        ...state,
        sidebarCollapsed: !state.sidebarCollapsed,
      };
    default:
      return state;
  }
}
