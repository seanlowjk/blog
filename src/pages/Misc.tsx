import React from "react";
import { Card } from "react-bootstrap";
import MiscCard from "../components/misc/MiscCard";
import Introduction from "../components/Introduction";
import { MiscPost} from "../utils/MiscConstants";

type MiscRouterProps = {
  miscPostsInfo: MiscPost[];
}

function Misc(props: MiscRouterProps) {
  return (
    <div className="Misc">
      <Introduction
        title={"Other Posts"}
        subtitle={"Sharing Knowledge is Great! :D"}
      />
      <div>
        <Card className="misc-container">
          <Card.Body className="misc-cards">
            {props.miscPostsInfo.map((info) => (
              <MiscCard
                title={info.title}
                subtitle={info.subtitle}
                href={info.href}
              />
            ))}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Misc;
