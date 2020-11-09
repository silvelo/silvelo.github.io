const SitemapGenerator = require('sitemap-generator');


const generator = SitemapGenerator('https://www.silvelo.com', {
  maxDepth: 5,
  filepath: './sitemap.xml',
  maxEntriesPerFile: 50000,
  stripQuerystring: true,
  lastMod: true,
  priorityMap: [1.0, 0.9],
  changeFreq: 'weekly'
});

generator.on('done', () => {
  // sitemaps se ha creado
  console.log('sitemap creado');

});

generator.start();