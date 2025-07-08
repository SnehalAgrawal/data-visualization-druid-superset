const fs = require("fs");
const countries = ["IN", "US", "CA", "DE"];
const pages = ["/home", "/about", "/contact", "/pricing"];
const data = [];

for (let i = 0; i < 500; i++) {
  data.push({
    timestamp: new Date(Date.now() - Math.random() * 86400000).toISOString(),
    user_id: "u" + Math.floor(Math.random() * 1000),
    page: pages[Math.floor(Math.random() * pages.length)],
    country: countries[Math.floor(Math.random() * countries.length)],
  });
}

fs.writeFileSync("clickstream.json", JSON.stringify(data, null, 2));
