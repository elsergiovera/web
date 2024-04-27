const fs = require('fs');
const info = require('../src/data/info.json');
const manifest_path = "public/site.webmanifest"
const { name, site_title, about } = info;

if (info) {  
  const manifest = {
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

  if (fs.existsSync(manifest_path))
    console.info("Manifest already exists. Updating...\n")
  
  if (name === "" || site_title === "" || about === "")
    console.warn("Not all details were found. Manifest may be incomplete:\n", manifest)

  const manifest_content = JSON.stringify(manifest, null, 2);
  fs.writeFileSync(manifest_path, manifest_content);
  
  console.log('Manifest was generated successfully.');
  process.exit(0)
} else {
  console.error("No info.json was found.")
  process.exit(1)
}