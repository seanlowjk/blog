import React from "react";
import { Container, Button } from "react-bootstrap";
import { ModuleContent } from "../../utils/ModuleTypes";
import ModuleGradingOverview from "./subcomponents/ModuleGradingOverview";
import ModuleGeneralText from "./subcomponents/ModuleGeneralText";

type ModuleReviewProps = {
  title: string;
  content: ModuleContent;
};

function ModuleReview(props: ModuleReviewProps) {
  const { title, content } = props;

  return (
    <>
      <div className="ModuleReview">
        <Container className="review-container">
          <h1> {title}</h1>
          <br />

          <h2> Taken</h2>
          <p>{content.taken}</p>

          <h2> Grading Overview</h2>
          <ModuleGradingOverview components={content.components} />

          <ModuleGeneralText
            title={"Brief Overview"}
            paragraphs={content.overview}
          />

          <ModuleGeneralText title={"Workload"} paragraphs={content.workload} />
          <ModuleGeneralText
            title={"Difficulty"}
            paragraphs={content.difficulty}
          />
          <ModuleGeneralText title={"Grade"} paragraphs={content.grade} />
          <Button variant="dark" href="/modules/">
            Back To Module Reviews
          </Button>
        </Container>
      </div>
    </>
  );
}

export default ModuleReview;
