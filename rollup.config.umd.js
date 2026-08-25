export default [
  {
    input: 'src/index.js',
    output: {
      name: 'hbfm',
      file: 'lib/index.umd.js',
      format: 'umd',
      exports: 'named'
    },
    external: ['lodash', 'marked', 'marked-extended-tables', 'marked-definition-lists', 'marked-alignment-paragraphs', 'marked-nonbreaking-spaces', 'marked-subsuper-text', 'marked-variables', 'marked-smartypants-lite', 'marked-gfm-heading-id', 'marked-emoji', 'marked-diagrams-markdeep']
  },
  {
    input: 'src/index.js',
    output: {
      file: 'lib/index.cjs',
      format: 'cjs'
    },
    external: ['lodash', 'marked', 'marked-extended-tables', 'marked-definition-lists', 'marked-alignment-paragraphs', 'marked-nonbreaking-spaces', 'marked-subsuper-text', 'marked-variables', 'marked-smartypants-lite', 'marked-gfm-heading-id', 'marked-emoji', 'marked-diagrams-markdeep']
  }
];
