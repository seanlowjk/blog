import React from "react";

type ModuleGeneralTextProps = {
  title: string;
  paragraphs: string[];
};

function ModuleGeneralText(props: ModuleGeneralTextProps) {
  const { title, paragraphs } = props;

  return (
    <>
      <h2>{title}</h2>
      {paragraphs.map((content) => (
        <p>{content}</p>
      ))}
    </>
  );
}

export default ModuleGeneralText;
