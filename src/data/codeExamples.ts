// Source for the CodePreview examples, originally hosted as CodePen pens
// (codepen.io/richhauck/pen/<slug>). Several are shared across pages.

export interface CodeExample {
  html: string;
  css?: string;
  js?: string;
}

/* HTML ------------------------------------------------------------------ */

// ExLjYrd
export const headings: CodeExample = {
  html: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`,
};

// jOxPOPY
export const paragraphs: CodeExample = {
  html: `<p>This is an example of a paragraph tag. The paragraph tag itself is a block level element (meaning it forces other HTML elements to indent). You can nest other tags like <em>emphasis</em>, <i>italic</i>, <strong>strong</strong>, or <b>bold</b> (all of which are inline elements, meaning they don't force an indent). You can also include links, like this one to <a href="https://hacc.edu" title="Harrisburg Area Community College">HACC</a>.</p>
<p>This paragraph includes an <br> example of a page break.</p>`,
};

// BaxNBEL
export const lists: CodeExample = {
  html: `<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>
<ol>
  <li>one</li>
  <li>two
    <ol>
      <li>two A</li>
      <li>two B</li>
      <li>two C</li>
    </ol>
  </li>
  <li>three</li>
</ol>`,
};

/* CSS basics ------------------------------------------------------------ */

// yLjYzJe
export const boxModel: CodeExample = {
  html: `<div></div>`,
  css: `div {
  width: 300px;
  height: 300px;
  margin: 100px auto;
  padding: 20px;
  background-color: red;
  border: 5px solid black;
}`,
};

// MWGaEmj
export const absolutePositioning: CodeExample = {
  html: `<div id="holder">
  <div id="square1"></div>
  <div id="square2"></div>
</div>`,
  css: `#holder {
  width: 500px;
  height: 500px;
  background-color: lightgray;
  position: relative;
}
#square1 {
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  left: 0;
  top: 0;
}
#square2 {
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  bottom: 0;
  right: 0;
}`,
};

// ZEqaoPp
export const zIndex: CodeExample = {
  html: `<h1>z-Index Example</h1>
<div id="holder">
  <div id="one"></div>
  <div id="two"></div>
  <div id="three"></div>
</div>`,
  css: `#holder {
  width: 300px;
  height: 300px;
  border: 5px solid #ccc;
  margin: 0 auto;
  position: relative;
}
#holder div {
  width: 100px;
  height: 100px;
  position: absolute;
}
#one {
  z-index: 1;
  top: 50px;
  left: 50px;
  background-color: rgb(255, 0, 0);
}
#two {
  z-index: 2;
  top: 100px;
  left: 100px;
  background-color: rgb(0, 255, 0);
}
#three {
  z-index: 3;
  top: 150px;
  left: 150px;
  background-color: rgb(0, 0, 255);
}`,
};

/* Layout: flex ---------------------------------------------------------- */

// abGvVBQ
export const flexRowsColumns: CodeExample = {
  html: `<div class="row">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>

<div class="row column">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>`,
  css: `body {
  background-color: lightgray;
}
.row {
  display: flex;
  width: 1440px;
  background-color: white;
  margin: 30px auto;
}
.column {
  flex-direction: column;
}
.row > div {
  margin: 10px;
  flex: 1;
  text-align: center;
  background-color: lightblue;
}`,
};

// jOxwEEe
export const flexEqualColumns: CodeExample = {
  html: `<main>
  <div class="equal-columns">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>

  <div class="equal-columns">
    <div>1</div>
    <div>2</div>
  </div>

  <div class="equal-columns">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </div>
</main>`,
  css: `body {
  background-color: lightgray;
}
main {
  width: 1440px;
  background-color: #fff;
  margin: 0 auto;
  padding: 1em;
}
div {
  min-height: 100px;
  border: 1px solid lightgray;
}
.equal-columns {
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
}
.equal-columns:last-child {
  margin-bottom: 0;
}
.equal-columns > div {
  flex-basis: 100%;
  gap: 1em;
}`,
};

// poxdVXg
export const flexGallery: CodeExample = {
  html: `<main>
  <h1>Gallery using CSS Flex</h1>
  <div class="grid">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
  </div>
</main>`,
  css: `body {
  margin: 0;
  padding: 0;
}
main {
  margin: 3em auto;
  max-width: 56em;
}
.grid {
  display: flex;
  flex-wrap: wrap;
}
.grid > div {
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  margin: 10px;
  flex: 1 1 200px;
}`,
};

// NWMGwLa
export const float: CodeExample = {
  html: `<div>
  <img src="https://picsum.photos/300" alt="placeholder">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus fugit recusandae iusto molestiae, facilis deleniti architecto vel repudiandae perferendis sunt maxime culpa, dolor porro quas ullam nihil eum nam fugiat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus fugit recusandae iusto molestiae, facilis deleniti architecto vel repudiandae perferendis sunt maxime culpa, dolor porro quas ullam nihil eum nam fugiat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus fugit recusandae iusto molestiae, facilis deleniti architecto vel repudiandae perferendis sunt maxime culpa, dolor porro quas ullam nihil eum nam fugiat.</p>
  <div class="clearfix"></div>
</div>`,
  css: `body {
  background-color: lightgray;
}
div {
  padding: 1em;
  background-color: #fff;
}
img {
  float: right;
}
.clearfix {
  clear: both;
}`,
};

/* Layout: grid ---------------------------------------------------------- */

// RwyWjGw
export const gridTwoColumn: CodeExample = {
  html: `<h1>Two Column Grid</h1>
<main>
  <header class="grid-header header-bg">
    <div class="inner-header">
      <div class="logo"></div>
      <div class="profile"></div>
    </div>
  </header>
  <article class="col1">col1</article>
  <aside class="col2">col2</aside>
  <footer>Footer</footer>
</main>`,
  css: `:root {
  --white: #fff;
  --boxBg: #ccc;
  --pageBg: #666;
  --basePadding: 20px;
  --baseMargin: 20px;
}
body {
  background-color: var(--pageBg);
  text-align: center;
}
.inner-header {
  background-color: aqua;
}
header, footer, #content, aside {
  padding: var(--basePadding);
}
main {
  padding: var(--basePadding);
  width: 80%;
  margin: 20px auto;
  background-color: var(--white);
  display: grid;
  grid-gap: var(--basePadding);
  grid-template-columns: auto auto 280px;
  grid-template-areas:
    "header header header"
    "col1 col1 col2"
    "footer footer footer";
}
main > * {
  background-color: var(--boxBg);
}
header {
  grid-area: header;
}
footer {
  grid-area: footer;
}
header, footer, article, aside {
  display: flex;
  align-items: center;
  justify-content: center;
}
.col1, .col2 {
  min-height: 200px;
}
.col1 {
  grid-area: col1;
}
.col2 {
  grid-area: col2;
}

.inner-header {
  display: flex;
  justify-content: space-between;
}`,
};

// PoyOegL
export const gridGallery: CodeExample = {
  html: `<main>
  <h1>CSS Grid Example</h1>
  <div class="grid">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
  </div>
</main>`,
  css: `main {
  margin: 3em auto;
  max-width: 56em;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 1em;
}

.grid > div {
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}`,
};

/* UI examples ----------------------------------------------------------- */

// emZKvmY
export const thumbnailHover: CodeExample = {
  html: `<a class="thumb" href="#">
  <img src="https://picsum.photos/300/200" alt="Kitten" />
  <div class="overlay">
    <div>
      <h2>My Title</h2>
      <p>My Description</p>
    </div>
  </div>
</a>`,
  css: `a.thumb {
  display: block;
  text-decoration: none;
  position: relative;
}
a.thumb img {
  position: absolute;
}
.overlay {
  z-index: 1;
  opacity: 0;
  position: absolute;

  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  transition: opacity 0.5s ease-out;
}
a.thumb,
.overlay {
  width: 300px;
  height: 200px;
}
.overlay div {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.overlay h2,
.overlay p {
  margin: 0;
}
a.thumb:hover .overlay {
  opacity: 1;
}`,
};
