const fs = require('fs');
const path = require('path');

function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log(`Deleted: ${folderPath}`);
  }
}

try {
  const buildPath = path.join(__dirname, 'build');
  const nodeModulesPath = path.join(__dirname, 'node_modules');

  deleteFolderRecursive(buildPath);
  // Uncomment the line below if you want to remove node_modules (not recommended)
  // deleteFolderRecursive(nodeModulesPath);

  console.log('Cleanup completed');
} catch (error) {
  console.error('Error cleaning directories:', error);
}