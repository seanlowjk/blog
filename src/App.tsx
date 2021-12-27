import React, { useEffect, useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Modules from "./pages/Modules";
import Header from "./components/Header";
import ModuleReview from "./components/modules/ModuleReview";
import Contact from "./components/contact/Contact";
import { ModuleContents } from "./utils/ModuleContsants";
import Misc from "./pages/Misc";
import MiscRouter from "./routes/MiscRouter";
import { MiscPost, MISC_JSON_DATA_REPO } from "./utils/MiscConstants";

function App() {
  const [miscPostsInfo, setMiscPostsInfo] = useState<MiscPost[]>([]);

  useEffect(() => {
    fetch(MISC_JSON_DATA_REPO)
      .then(res => res.json())
      .then(res => setMiscPostsInfo(res.pages || []))
  }, [])


  return (
    <div>
      {
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Header />
          <Switch>
            <Route path="/" exact={true} render={Main} />
            <Route path="/modules" exact={true} render={Modules} />
            <Route path="/misc" exact={true}>
              <Misc miscPostsInfo={miscPostsInfo} />
            </Route>

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

            <MiscRouter miscPostsInfo={miscPostsInfo} />
          </Switch>
        </HashRouter>
      }
      <Contact />
    </div>
  );
}

export default App;
