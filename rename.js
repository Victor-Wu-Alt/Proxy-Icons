/*
 * @Author: Victor
 * @Date: 2025-10-12 08:57:54
 * @LastEditTime: 2025-10-12 08:57:54
 */
const fs = require("fs");
const path = require("path");

const dir = './assets'; // 修改成你的目录路径（相对或绝对都行）

fs.readdirSync(dir).forEach(file => {
  const match = file.match(/^\d{3}-(.+\.png)$/);
  if (match) {
    const newName = match[1];
    const oldPath = path.join(dir, file);
    const newPath = path.join(dir, newName);
    fs.renameSync(oldPath, newPath);
    console.log(`✅ ${file} → ${newName}`);
  }
});

console.log('🎉 All files renamed successfully!');
