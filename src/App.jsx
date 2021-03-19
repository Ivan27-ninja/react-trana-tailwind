import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import cls from "classnames";

import { Sidebar, Navbar } from "components";
import { Dashboard } from "views";
import { useAppSettings } from "context";

function App() {
  const { sidebarCollapsed } = useAppSettings();

  return (
    <div className="bg-white">
      <Sidebar classes={{ collapsed: "w-12", expanded: "w-64" }} />
      <div
        className={cls(
          "relative bg-transparent",
          sidebarCollapsed ? "md:ml-12" : "md:ml-64",
          "ml-0"
        )}
      >
        <Navbar classes={{ collapsed: "ml-12", expanded: "ml-64" }} />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
