export default function handler(req, res) {
    res.setHeader("Content-Type", "text/xml");
    res.write(`
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://www.arungovindhasamy.life/</loc>
            <lastmod>2025-02-14</lastmod>
            <priority>1.0</priority>
        </url>
        <url>
            <loc>https://www.arungovindhasamy.life/services</loc>
            <lastmod>2025-02-14</lastmod>
            <priority>0.8</priority>
        </url>
        <url>
            <loc>https://www.arungovindhasamy.life/contact</loc>
            <lastmod>2025-02-14</lastmod>
            <priority>0.8</priority>
        </url>
        <url>
            <loc>https://www.arungovindhasamy.life/portfolio</loc>
            <lastmod>2025-02-14</lastmod>
            <priority>0.8</priority>
        </url>
    </urlset>
    `);
    res.end();
}
