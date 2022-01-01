import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

type BlogPostProps = {
  baseURL: string; 
  location: string; 
};

function BlogPost(props: BlogPostProps) {
  const { baseURL, location } = props;
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch(`${baseURL}${location}`)
      .then(res => res.text())
      .then(res => setContent(res || ""))
  })

  return (
    <div className="Blog">
      <Container className="blog-container">
        <Card className="blog-content">
          <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
          <Button variant="dark" href="/blog/#/misc/">
            Back To Posts
          </Button>
        </Card>
      </Container>
    </div>
  );
}

export default BlogPost;
