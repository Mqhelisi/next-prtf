"use client"
import React, { useState, useEffect } from 'react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import Image from 'next/image';
import rehypeKatex from 'rehype-katex';
// import remarkMath from 'remark-math'
// import rehypeRaw from 'rehype-raw'
// import { BlockMath, InlineMath } from 'react-katex';

// import html from 'remark-html';
// import markdown from 'remark-parse';
// import math from 'remark-math';
import {unified} from 'unified';
import remarkImages from 'remark-images';
import rehypeStringify from 'rehype-stringify'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'

const MarkdownRenderer = ({ filename }) => {
  const [markdownData, setMarkdownData] = useState('');

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
      {/* <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        components={{
          math: ({ value }) => <BlockMath>{value}</BlockMath>,
          inlineMath: ({ value }) => <InlineMath>{value}</InlineMath>
        }}

      > */}
        {/* {processedContent} */}
      {/* </ReactMarkdown> */}
    </div>
  );
}

export default MarkdownRenderer;