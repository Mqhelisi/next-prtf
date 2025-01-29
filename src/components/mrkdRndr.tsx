"use client"
import React, { useState, useEffect } from 'react';

import rehypeKatex from 'rehype-katex';

import {unified} from 'unified';
import remarkImages from 'remark-images';
import rehypeStringify from 'rehype-stringify'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'

const MarkdownRenderer = ({ filename }) => {
  const [markdownData, setMarkdownData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/blgpsts/${filename}.md`);
        const text = await res.text();
        const processedContent = await unified()
        .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(remarkImages)
    .use(rehypeStringify)
    .process(text).then((vals) => {
  
      setMarkdownData(vals.value)
    });
        // setMarkdownData(processedContent);
      } catch (error) {
        console.error(`Error loading ${filename}.md:`, error);
      }
    };

    fetchData();
  }, [filename]);

  
//   const contentHtml = processedContent.toString();
  return (
    <div className="text-2xl font-serif"
    dangerouslySetInnerHTML={{ __html: markdownData }}
    >

    </div>
  );
}

export default MarkdownRenderer;
