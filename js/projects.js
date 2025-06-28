document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilters = document.querySelectorAll('.category-filter');
    const techFilters = document.querySelectorAll('.tech-filter');
    const projectItems = document.querySelectorAll('.project-item');
    const noResults = document.getElementById('noResults');
    
    let currentCategory = 'all';
    let currentTech = 'all';
    let searchTerm = '';

    function filterProjects() {
        let visibleCount = 0;
        
        projectItems.forEach(item => {
            const category = item.dataset.category;
            const tech = item.dataset.tech;
            const title = item.querySelector('.card-title').textContent.toLowerCase();
            const description = item.querySelector('.card-text').textContent.toLowerCase();
            
            const matchesCategory = currentCategory === 'all' || category === currentCategory;
            const matchesTech = currentTech === 'all' || tech === currentTech;
            const matchesSearch = searchTerm === '' || 
                                title.includes(searchTerm.toLowerCase()) || 
                                description.includes(searchTerm.toLowerCase());
            
            if (matchesCategory && matchesTech && matchesSearch) {
                item.style.display = 'block';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });
        
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchTerm = this.value;
            filterProjects();
        });
    }

    categoryFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            categoryFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            filterProjects();
        });
    });

    techFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            techFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            currentTech = this.dataset.tech;
            filterProjects();
        });
    });
});
