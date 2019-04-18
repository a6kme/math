/**
 * Thanks to Matei Radu (@matt__block) for the code
 * Originally published at https://github.com/matt-block/react-native-in-app-browser/blob/master/scripts/postpack.ts
 * under MIT licence
 */

const fs = require('fs-extra');
const tar = require('tar');

// Read development version of package.json.
const packageJson = JSON.parse(fs.readFileSync('package.json').toString());

// Package tar file name
const packageTarName = `a6kme-math-${packageJson.version}.tgz`;

// Extract package made by `yarn pack`.
tar.extract({
  file: packageTarName,
  sync: true
});

// Remove unnecessary entries and reformat.
delete packageJson.scripts;
delete packageJson.devDependencies;
const simplifiedPackageJson = JSON.stringify(packageJson, null, 2);

// Update the extracted version of package.json with simplified one.
fs.writeFileSync('package/package.json', simplifiedPackageJson, {
  encoding: 'utf-8'
});

// Recreate package archive.
tar.create(
  {
    gzip: true,
    sync: true,
    file: packageTarName
  },
  ['package/']
);

// Cleanup.
fs.removeSync('package');
