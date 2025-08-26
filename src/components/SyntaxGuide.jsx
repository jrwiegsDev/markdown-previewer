import React from 'react';

const SyntaxGuide = () => {
  return (
    <div className="syntax-guide">
      <table>
        <thead>
          <tr>
            <th>Style</th>
            <th>Markdown Syntax</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Header</td>
            <td><code># H1 Text</code></td>
          </tr>
          <tr>
            <td>Sub-Header</td>
            <td><code>## H2 Text</code></td>
          </tr>
          <tr>
            <td><strong>Bold</strong></td>
            <td><code>**bold text**</code></td>
          </tr>
           <tr>
            <td><em>Italic</em></td>
            <td><code>*italic text*</code></td>
          </tr>
          <tr>
            <td>List Item</td>
            <td><code>- List item</code></td>
          </tr>
          <tr>
            <td>Link</td>
            <td><code>[link text](https://...)</code></td>
          </tr>
          <tr>
            <td>Code Block</td>
            <td><code>```code```</code></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SyntaxGuide;