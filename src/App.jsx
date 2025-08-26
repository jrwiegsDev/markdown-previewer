import { useState } from 'react';
import { marked } from 'marked';
import './App.css';
import SyntaxGuide from './components/SyntaxGuide'; // Import the new component

function App() {
  const [markdownText, setMarkdownText] = useState(`# Welcome!
Start typing here...`);
  
  const [copySuccess, setCopySuccess] = useState('');

  const handleTextChange = (event) => {
    setMarkdownText(event.target.value);
  };
  
  const getHtml = () => marked(markdownText);

  const handleCopyHtml = () => {
    navigator.clipboard.writeText(getHtml()).then(() => {
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000); // Message disappears after 2 seconds
    }, () => {
      setCopySuccess('Failed to copy.');
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <div className="header-content">
          <h1>Markdown Previewer</h1>
          <p>Type Markdown text in the left panel to see the live HTML result on the right.</p>
        </div>
        <SyntaxGuide /> {/* Render the new component */}
      </header>
      <main className="app-container">
        <textarea 
          className="editor-pane"
          value={markdownText}
          onChange={handleTextChange}
        />
        <div className="preview-pane-wrapper">
          <div className="preview-header">
            <span>Preview</span>
            <button onClick={handleCopyHtml}>Copy HTML</button>
            {copySuccess && <span className="copy-success">{copySuccess}</span>}
          </div>
          <div 
            className="preview-pane"
            dangerouslySetInnerHTML={{ __html: getHtml() }}
          />
        </div>
      </main>
    </div>
  );
}

export default App;