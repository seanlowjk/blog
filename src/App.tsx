import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Modules from "./pages/Modules";
import Header from "./components/Header";
import ModuleReview from "./components/modules/ModuleReview";
import Contact from "./components/contact/Contact";
import { ModuleContents } from "./utils/ModuleContsants";
import Misc from "./pages/Misc";
import { MiscCardInfos } from "./utils/MiscConstants";
import BlogPost from "./components/common/BlogPost";

function App() {
  return (
    <div>
      {
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Header />
          <Switch>
            <Route path="/" exact={true} render={Main} />
            <Route path="/modules" exact={true} render={Modules} />
            <Route path="/misc" exact={true} render={Misc} />

            {ModuleContents.map((semester) =>
              semester.modules
                .filter((module) => module.content)
                .map((module) => (
                  <Route
                    path={module.content?.link}
                    component={() => (
                      <ModuleReview
                        title={module.title}
                        content={module.content}
                      />
                    )}
                  />
                ))
            )}

            {MiscCardInfos.map((info) => (
              <Route
                path={info.href}
                exact={true}
                component={() => <BlogPost content={info.content} />}
              />
            ))}
          </Switch>
        </HashRouter>
      }
      <Contact />
    </div>
  );
}

export default App;
