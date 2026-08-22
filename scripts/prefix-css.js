const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

const cssPath = path.join(__dirname, '..', 'styles.css');
const css = fs.readFileSync(cssPath, 'utf8');

postcss([
  autoprefixer({
    overrideBrowserslist: ['> 0.2%', 'last 4 versions', 'Firefox ESR', 'not dead', 'iOS >= 12', 'Safari >= 12']
  })
])
.process(css, { from: cssPath, to: cssPath })
.then(result => {
  fs.writeFileSync(cssPath, result.css);
  console.log('✅ Autoprefixer: styles.css successfully compiled and vendor-prefixed.');
})
.catch(err => {
  console.error('❌ Autoprefixer Error:', err);
  process.exit(1);
});
