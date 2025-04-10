document.addEventListener('DOMContentLoaded', () => {
    const onArticlePage = window.location.pathname.includes('/articles/');
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
  
    if (!modal || !openModalBtn || !closeModalBtn) return;
  
    openModalBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
  
    closeModalBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') modal.classList.add('hidden');
    });
  
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  });
  