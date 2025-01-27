"use client"
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
// import MarkdwnRenderer from '@/components/mrkdn1';
import MarkdownRenderer from '@/components/mrkdRndr';
// import '../katex.min.css';



export default function Page(){

    return (
        <div className="flex flex-col h-full"> 
          {/* Top Row: 15% of page height */}
          <div className="flex-grow-0 h-1/6 bg-gray-600"> 
            {/* One column spanning full width */}

            <div className="w-full p-4"> 
              {/* Content for top row */}
            </div>
          </div>
    
          {/* Bottom Row: 85% of page height */}
          <div className="flex h-5/6 flex-row">
            {/* First column: 15% of row width */}

            <div className="w-1/6 bg-gray-400 p-4"> 
              {/* Content for first column */}
            </div>
    
            {/* Second column: 85% of row width */}
            <div className="w-5/6 bg-gray-900 p-4 "> 
              {/* Content for second column */}
              <h1>Blog Posts</h1>
              {/* <MarkdwnRenderer filename={'upmth'} /> */}

              <MarkdownRenderer filename={'upmth'} />
            </div>
          </div>
        </div>
      );
}