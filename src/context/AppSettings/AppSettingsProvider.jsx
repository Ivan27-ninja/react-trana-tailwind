import {
  SIDEBAR_COLLAPSE,
  SIDEBAR_COLLAPSE_TOGGLE,
  SIDEBAR_EXPAND,
} from "constants/actionTypes";
import React, { useCallback, useReducer } from "react";
import reducer from "./AppSettingsReducer";

const initialState = {
  sidebarCollapsed: false,
};

export const AppSettingsContext = React.createContext(initialState);

export default function AppSettingsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSidebarCollapse = useCallback(() => {
    dispatch({ type: SIDEBAR_COLLAPSE_TOGGLE });
  }, []);

  const setSidebarCollapse = useCallback((isCollapsed) => {
    if (isCollapsed) {
      dispatch({ type: SIDEBAR_COLLAPSE });
    } else {
      dispatch({ type: SIDEBAR_EXPAND });
    }
  }, []);

  return (
    <AppSettingsContext.Provider
      value={{ ...state, toggleSidebarCollapse, setSidebarCollapse }}
    >
      {children}
    </AppSettingsContext.Provider>
  );
}
