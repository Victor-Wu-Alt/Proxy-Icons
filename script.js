/*
 * @Author: Victor
 * @Date: 2025-10-12 08:14:38
 * @LastEditTime: 2025-10-12 08:18:53
 */
const fs = require("fs");
const path = require("path");

const assetsDir = path.resolve('./assets');
const jsonFile = path.resolve('./icons.json');
const baseUrl = 'https://raw.githubusercontent.com/Victor-Wu-Alt/Proxy-Icons/main/assets';

function updateIconsJson() {
	const icons = fs.readdirSync(assetsDir)
		.filter(f => f.endsWith('.png'))
		.map(f => ({
			name: path.basename(f, '.png'),
			url: `${baseUrl}/${f}`
		}));

	const data = { name: 'Proxy Icons', icons };
	fs.writeFileSync(jsonFile, JSON.stringify(data, null, 2));
	console.log('✅ icons.json 已更新');
}

updateIconsJson();

// 监听变化
fs.watch(assetsDir, (eventType, filename) => {
	if (filename && filename.endsWith('.png')) {
		console.log(`📁 检测到变化: ${filename}`);
		updateIconsJson();
	}
});
