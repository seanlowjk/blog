import React from "react";
import { Route } from "react-router";
import BlogPost from "../components/common/BlogPost";
import { MiscPost } from "../utils/MiscConstants";

type MiscRouterProps = {
  miscPostsInfo: MiscPost[];
}

function MiscRouter(props: MiscRouterProps) {
  return (
    <>
    {props.miscPostsInfo.map((info) => (
      <Route
        path={info.href}
        exact={true}
        component={() => 
          <BlogPost 
            baseURL={process.env.REACT_APP_DATA_REPO || ""} 
            location={info.location} 
            homepage={"/blog/#/misc/"}
          />
        }
      />
    ))}
    </>
  )
}

export default MiscRouter;
