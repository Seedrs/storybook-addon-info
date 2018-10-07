import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import marked from 'marked';
import Prism from 'prismjs';

require('prismjs/components/prism-jsx.min');
require('prismjs/components/prism-bash.min');
require('prismjs/components/prism-json.min');

marked.setOptions({
  highlight: (code, _, language) => {
    if (language) {
      return Prism.highlight(code, Prism.languages[language], language);
    } else {
      return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    }
  }
});

const MarkdownBody = styled.div`
  font-family: "proxima-nova", Helvetica, Arial, sans-serif;

  code[class*=language-] {
    white-space: pre-wrap;
    font-size: 100%;
  }
`;

class Markdown extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    Prism.highlightAll();
  }

  componentDidUpdate () {
    Prism.highlightAll();
  }

  render () {
    const { source } = this.props;

    return (
      <MarkdownBody
        className="markdown-body no-whitespace-normalization"
        dangerouslySetInnerHTML={{ __html: marked(source) }}>
      </MarkdownBody>
    );
  }
}

Markdown.propTypes = {
  source: PropTypes.string
};

export default Markdown;
