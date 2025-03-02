fetch('ayarlar.json')
  .then((response) => response.json())
  .then((data) => {
    const linksContainer = document.getElementById('links');
    const sites = data.sites;

    const filteredSites = sites.filter((site) => site.link);

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
    console.error('hata:', error);
  });
