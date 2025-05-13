'use client';

import { loader } from '@monaco-editor/react';

// Configure Monaco loader to use CDN workers instead of bundled ones
const monacoConfig = () => {
  loader.config({
    paths: {
      // Use CDN for monaco workers
      vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs',
    },
    'vs/nls': {
      availableLanguages: {
        '*': 'zh-cn',
      },
    },
  });
}

export default monacoConfig;