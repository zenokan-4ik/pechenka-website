import React from 'react';

export const navigateToRoute = (path) => {
  window.location.href = `${window.location.origin}${window.location.pathname}#${path}`;
};

export const get_html = (text = '', textStyle) => {
  const re = /\[(#.*?)\]\{(.*?)\}/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = re.exec(text)) !== null) {
    // Push preceding non-colored text and handle newlines
    if (match.index > lastIndex) {
      const plainText = text.substring(lastIndex, match.index);
      const lines = plainText.split('\n');
      
      lines.forEach((line, i) => {
        if (line) {
          parts.push(
            <React.Fragment key={key++}>
              {line}
            </React.Fragment>
          );
        }
        if (i < lines.length - 1) {
          parts.push(<br key={key++} />);
        }
      });
    }

    // Extract color and content from the match
    const color = match[1];
    const content = match[2];

    // Handle newlines in colored content
    const coloredLines = content.split('\n');
    
    coloredLines.forEach((line, i) => {
      if (line) {
        parts.push(
          <span key={key++} style={{ color }}>
            {line}
          </span>
        );
      }
      if (i < coloredLines.length - 1) {
        parts.push(<br key={key++} />);
      }
    });

    lastIndex = match.index + match[0].length;
  }

  // Push any remaining non-colored text and handle newlines
  if (lastIndex < text.length) {
    const plainText = text.substring(lastIndex);
    const lines = plainText.split('\n');
    
    lines.forEach((line, i) => {
      if (line) {
        parts.push(
          <React.Fragment key={key++}>
            {line}
          </React.Fragment>
        );
      }
      if (i < lines.length - 1) {
        parts.push(<br key={key++} />);
      }
    });
  }

  return <p className={textStyle}>{parts}</p>;
};