const galleryItems = [
  // Nature
  { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60', category: 'nature' },
  { src: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=400&q=60', category: 'nature' },
  { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=60', category: 'nature' },
  { src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=60', category: 'nature' },
  //{ src: 'https://images.unsplash.com/photo-1601758123927-196d5be2fa04?auto=format&fit=crop&w=400&q=60', category: 'nature' },

  // City
  { src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=60', category: 'city' },
  { src: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=400&q=60', category: 'city' },
  //{ src: 'https://images.unsplash.com/photo-1589395937772-cd4f8975c1e9?auto=format&fit=crop&w=400&q=60', category: 'city' },
  { src: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=400&q=60', category: 'city' },

  // Animals
  { src: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=60', category: 'animals' },
  { src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=400&q=60', category: 'animals' },
  { src: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=400&q=60', category: 'animals' },
  { src: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=400&q=60', category: 'animals' },
  { src: 'https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&w=400&q=60', category: 'animals' }
];

const gallery = document.getElementById('gallery');
const buttons = document.querySelectorAll('.filter-buttons button');
const searchInput = document.getElementById('searchInput');

function renderGallery(filter) {
  gallery.innerHTML = '';

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item =>
        item.category.toLowerCase().includes(filter.toLowerCase())
      );

  if (filteredItems.length === 0) {
    gallery.innerHTML = '<p>No images found for this filter.</p>';
    return;
  }

  filteredItems.forEach(item => {
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('gallery-item');
    imgDiv.innerHTML = `<img src="${item.src}" alt="${item.category}" />`;
    gallery.appendChild(imgDiv);
  });
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    searchInput.value = ''; 
    renderGallery(button.dataset.filter);
  });
});

searchInput.addEventListener('input', () => {
  buttons.forEach(btn => btn.classList.remove('active'));
  renderGallery(searchInput.value);
});


renderGallery('all');
