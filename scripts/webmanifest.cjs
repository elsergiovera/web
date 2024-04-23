const fs = require('fs');
const info = require('../src/data/info.json');

const manifestData = {
  name: info.name || "",
  short_name: info.site_title || "",
  description: info.about || "",
  icons: [
    {
        "src": "/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
    },
    {
        "src": "/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
    }
  ],
  theme_color: "#111111",
  background_color: "#111111",
  display: "standalone"
};

const manifestContent = JSON.stringify(manifestData, null, 2);
fs.writeFileSync('public/site.webmanifest', manifestContent);

console.log('site.webmanifest generated successfully.');