import * as React from "react";

const IndexPage = () => {
  return (
    <main>
      <h1>PCDS Sound Design Information</h1>
      <ul>
        <li>
          <a href="https://slides.com/funkfinger/sound-design-1">
            First Days Slides - Sound Design I
          </a>
        </li>
        <li>
          <a href="https://slides.com/funkfinger/sound-design-2">
            First Days Slides - Sound Design II
          </a>
        </li>
      </ul>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>PCDS Sound Design - Course Information</title>;
