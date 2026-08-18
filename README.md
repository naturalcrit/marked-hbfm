# marked-underline

Add underline markup to Markdown by repurposing `_Text_`.

With the flag justUnderline set true, it will strip double and triple underline markup and leave it normal rather than

# Usage
<!-- Show most examples of how to use this extension -->

## Default

```js
const marked = require("marked");
const markedUnderline = require("marked-underline");

marked.use(markedUnderline());

const html = marked.parse("This is _underlined_.\nThis is __strong__.");
console.log(html);
// <p>This is <u>underlined</u>.\nThis is <strong>strong</strong>.</p>
```

## justUnderline enabled

```js
const marked = require("marked");
const markedUnderline = require("marked-underline");

marked.use(markedUnderline({justUnderline: true}));

const html = marked.parse("This is _underlined_.\nThis is __normal__.");
console.log(html);
// <p>This is <u>underlined</u>.\nThis is normal.</p>
```
