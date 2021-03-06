// make sure to install this two dependencies
const fs = require('fs-extra');
const concat = require('concat');

const savePath = "./output";
const buildDir = "./dist/todo-angular-elements-example";

async function concatJS(version) {
  // files to concat
  const files = [
    `${buildDir}/runtime-${version}.js`,
    `${buildDir}/polyfills-${version}.js`,
    `${buildDir}/scripts.js`,
    `${buildDir}/main-${version}.js`
  ];

  // concat files
  await concat(files, `${savePath}/ng-${version}.js`);
}

(async function build() {


  await fs.ensureDir(savePath);
  // await fs.emptyDir(savePath);

  // concat es5 and es6 files
  concatJS("es5") // es5
  concatJS("es2015") // es6

  await fs.copyFile(
    `${buildDir}/styles.css`,
    `${savePath}/styles.css`
  );
})();
