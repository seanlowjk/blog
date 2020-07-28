import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
      <Header />
      {
        <BrowserRouter>
          <Switch>
            <Route path="/blog" exact={true} render={Main} />
            <Route path="/blog/modules" exact={true} render={Modules} />
            <Route path="/blog/misc" exact={true} render={Misc} />

            {ModuleContents.map((semester) =>
              semester.modules
                .filter((module) => module.content)
                .map((module) => (
                  <Route
                    path={module.content?.link}
                    exact={true}
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
        </BrowserRouter>
      }
      <Contact />
    </div>
  );
}

export default App;
