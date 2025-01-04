// Ayarlar JSON'unu yükle
fetch('ayarlar.json')
  .then((response) => response.json())
  .then((data) => {
    const linksContainer = document.getElementById('links');
    const sites = data.sites;

    // Sadece linki belirtilen siteleri filtrele
    const filteredSites = sites.filter((site) => site.link);

    // Siteleri HTML'e ekle
    filteredSites.forEach((site) => {
      const link = document.createElement('a');
      link.href = site.link;
      link.target = '_blank'; // Yeni sekmede aç
      link.classList.add('neon-button');
      link.innerHTML = `<i class="${site.icon}"></i>`;
      linksContainer.appendChild(link);
    });
  })
  .catch((error) => {
    console.error('JSON yüklenirken bir hata oluştu:', error);
  });
