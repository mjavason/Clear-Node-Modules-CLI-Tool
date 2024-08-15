#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

// Function to delete node_modules directories
function deleteNodeModules(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
            if (entry.name === 'node_modules') {
                console.log(`Deleting: ${fullPath}`);
                rimraf.sync(fullPath);
            } else {
                deleteNodeModules(fullPath); // Recursively search in subdirectories
            }
        }
    }
}

// Start searching from the current directory
deleteNodeModules(process.cwd());

console.log('All node_modules directories have been deleted.');
