const fs = require('fs');
const path = require('path');

function renameMP4Files(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) return console.error('Error reading directory:', err);

    for (const file of files) {
      const filePath = path.join(directoryPath, file);

      if (fs.statSync(filePath).isFile() && path.extname(filePath) === '.mp4') {
        const a = file.slice(17);
        const b = a.slice(0, 3);
        const c = a.slice(3);
        const newFileName = b + ' ' + c;
        const newFilePath = path.join(directoryPath, newFileName);

        fs.rename(filePath, newFilePath, err => {
            if (err) console.error(`Error renaming ${file}:`, err);
            else console.log(`Renamed: ${file} to ${newFileName}`);
        });
      }
    }
  });
}

const directoryPath = '/my/path/';

renameMP4Files(directoryPath);
