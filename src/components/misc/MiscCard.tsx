import React from "react";
import { Card, Button } from "react-bootstrap";

type MiscCardProps = {
  title: string;
  subtitle: string;
  href: string;
};

function MiscCard(props: MiscCardProps) {
  const { title, subtitle, href } = props;

  return (
    <>
      <Card border="dark" className="misc-card">
        <Card.Body>
          <h5> {title}</h5>
          <p> {subtitle}</p>
          <Button variant="dark" href={`/#${href}`}>
            Link
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default MiscCard;
