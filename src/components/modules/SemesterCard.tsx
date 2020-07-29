import React from "react";
import { Card, Button } from "react-bootstrap";
import { ModuleItem } from "../../utils/ModuleTypes";

type SemesterCardProps = {
  module: ModuleItem;
};

function SemesterCard(props: SemesterCardProps) {
  const { module } = props;

  return (
    <>
      <Card border="dark" className="semester-card">
        <Card.Body>
          <h5>{module.title}</h5>
          <h6>{module.type}</h6>
          {module.isGradeFree && <h6> CS / CU</h6>}
          {module.isSUable && <h6>S/U Option Available</h6>}
          {!module.isSUable && !module.isGradeFree && (
            <h6>S/U Option Not Available</h6>
          )}
          <Button variant="dark" href={`/#${module.content?.link}`}>
            Link
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default SemesterCard;
