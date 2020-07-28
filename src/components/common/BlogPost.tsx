import React from "react";
import { Container } from "react-bootstrap";

type BlogPostProps = {
  content: JSX.Element;
};

function BlogPost(props: BlogPostProps) {
  const { content } = props;

  return (
    <div className="Blog">
      <Container className="blog-container">{content}</Container>
    </div>
  );
}

export default BlogPost;
