import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* components */
import { TopImage } from 'components/TopImage';
import { Tools } from 'components/Tools';
import { Projects } from 'components/Projects';

const metaData = {
  title: 'WineCellar webapp',
  description: 'WineCellar webapp',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

export class Home extends Component {
  render() {
    if (!this.metaData) {
      return null;
    }
    return (
      <section>
        <DocumentMeta {...metaData} />
        <TopImage />
        <Tools />
        <Projects />
      </section>
      );
  }
}
