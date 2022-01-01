import React, { useEffect, useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Modules from "./pages/Modules";
import Header from "./components/Header";
import Contact from "./components/contact/Contact";
import Misc from "./pages/Misc";
import MiscRouter from "./routes/MiscRouter";
import { MiscPost, MISC_JSON_DATA_REPO, MODULES_JSON_DATA_REPO } from "./utils/MiscConstants";
import { SemesterItem } from "./utils/ModuleTypes";
import BlogPost from "./components/common/BlogPost";

type PropsData = {
  miscPostsInfo: MiscPost[], 
  semesterInfo: SemesterItem[]
};

function App() {
  const [data, setData] = useState<PropsData>({
    miscPostsInfo: [], 
    semesterInfo: []
  });

  useEffect(() => {
    const fetchData = async() => {
      const miscPostsResp = await fetch(MISC_JSON_DATA_REPO)
        .then(res => res.json())
        .then(res => res.pages || []);

      const modulesResp = await fetch(MODULES_JSON_DATA_REPO)
        .then(res => res.json())
        .then(res => res.pages);

      setData({ miscPostsInfo: miscPostsResp, semesterInfo: modulesResp });
    }

    fetchData();
  }, [])


  return (
    <div>
      {
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Header />
          <Switch>
            <Route path="/" exact={true} render={Main} />
            <Route path="/modules" exact={true}>
              <Modules semesters={data.semesterInfo} />
            </Route>
            <Route path="/misc" exact={true}>
              <Misc miscPostsInfo={data.miscPostsInfo} />
            </Route>

            {data.semesterInfo.map((semester) =>
              semester.modules
                .map((module) => (
                  <Route
                    path={module.link}
                    component={() => (
                      <BlogPost
                        baseURL={process.env.REACT_APP_DATA_REPO || ""}
                        location={module.content}
                        homepage={"/blog/#/modules/"}
                      />
                    )}
                  />
                ))
            )}

            <MiscRouter miscPostsInfo={data.miscPostsInfo} />
          </Switch>
        </HashRouter>
      }
      <Contact />
    </div>
  );
}

export default App;
