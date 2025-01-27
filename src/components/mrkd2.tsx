import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {read} from 'to-vfile'
import {unified} from 'unified'
import { useState } from 'react';


async function getFile({filename} => {


    const file = async () =>{ await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(await read('example.md'))
    .then((file) => {
        setHtmlContent(file.toString());
      })
      .catch((error) => {
        console.error('Error processing Markdown:', error);
      })};
      

} )


export default function DropMarkDwn({flnm} => {
    
})