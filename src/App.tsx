import React, { useState, ChangeEvent } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; 

const App: React.FC = () => {
  const initialMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '"""' && lastLine == '"""') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

  const [markdown, setMarkdown] = useState<string>(initialMarkdown);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="app">
      <h2 className="title">Markdown Previewer</h2>
      <div className="container">
        <textarea
          id="editor"
          className="form-control"
          value={markdown}
          onChange={handleChange}
        />
        <div id="preview" className="preview">
       <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          
        </div>
      </div>
    </div>
  );
};

export default App;
