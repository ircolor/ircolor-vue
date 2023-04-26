const fs = require('fs')
const crypto = require('crypto')
const path = require('path')
// Regular expression to match glyph elements
const glyphRegex = /<glyph.*\/>/g
const pathrED = /d="(.*)"/g
const namerex = /glyph-name="(.*)" d/g
// Read file contents

const theeeeeList = ['call-received4', 'call-minus4']
const fileContents = fs.readFileSync('iconsax.svg', 'utf-8')
const glyphs = fileContents.match(glyphRegex).filter((item) => {
  if (item.match(namerex)) {
    const name = item.match(namerex)[0].split('"')[1]
    return theeeeeList.includes(name)
  }
  return false
})

let list = []

for (let i = 0; i < glyphs.length; i++) {
  const name = glyphs[i].match(namerex)[0].split('"')[1]
  const path = glyphs[i].match(pathrED)[0].split('"')[1]
  const data = {
    uid: crypto.createHash('md5').update(name).digest('hex'),
    css: name,
    code: 1000 + i,
    src: 'custom_icons',
    selected: true,
    svg: {
      path: path,
      width: 1000
    },
    search: [name]
  }
  list.push(data)
}
let config = {
  name: 'ircolorsicons',
  css_prefix_text: 'icon-',
  css_use_suffix: false,
  hinting: true,
  units_per_em: 1000,
  ascent: 850,
  glyphs: list
}

fs.writeFile('config.json', JSON.stringify(config), 'utf8', () => {
  console.log('done')
})

const sessionFilePath = path.join(__dirname, '.fontello-session')
const distFolderPath = path.join(__dirname, 'dist')

// Remove .fontello-session file if it exists
if (fs.existsSync(sessionFilePath)) {
  fs.unlinkSync(sessionFilePath)
  console.log('.fontello-session file deleted')
}

// Remove dist folder if it exists
if (fs.existsSync(distFolderPath)) {
  fs.rmdirSync(distFolderPath, { recursive: true })
  console.log('dist folder deleted')
}
