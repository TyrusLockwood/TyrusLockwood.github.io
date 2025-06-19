<!-- public/__sitemap__/style.xsl -->
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8"/>
  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap</title>
        <style>
          body { font-family: Arial, sans-serif; }
          ul { list-style: none; padding: 0; }
          li { margin-bottom: 8px; }
          .url { color: #1a0dab; text-decoration: none; }
          .lastmod { color: #006621; font-size: 12px; }
        </style>
      </head>
      <body>
        <h1>Sitemap</h1>
        <ul>
          <xsl:for-each select="urlset/url">
            <li>
              <a class="url" href="{loc}"><xsl:value-of select="loc"/></a>
              <div class="lastmod"><xsl:value-of select="lastmod"/></div>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
