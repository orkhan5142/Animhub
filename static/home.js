// DOM Elements
const modal = document.getElementById('codeModal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modalTitle');
const modalPreview = document.getElementById('modalPreview');
const htmlCode = document.getElementById('htmlCode');
const cssCode = document.getElementById('cssCode');
const jsCode = document.getElementById('jsCode');
const codeTabs = document.querySelectorAll('.code-tab');
const codeContents = document.querySelectorAll('.code-content');
const copyCodeBtn = document.querySelector('.copy-code');
const downloadCodeBtn = document.querySelector('.download-code');
const categoryButtons = document.querySelectorAll('.category');
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navCategoryLinks = document.querySelectorAll('.nav-category-link');

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    setupEventListeners();
});

// Set up all event listeners
function setupEventListeners() {

    // Make entire animation card clickable to open modal
    document.querySelectorAll('.animation-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // If the click is on a button or an explicit link, let their own handlers work.
            if (e.target.closest('button') || e.target.closest('a.view-code')) {
                return;
            }
            // Otherwise, open the modal for the card.
            const animationName = card.querySelector('[data-animation]')?.getAttribute('data-animation');
            if (animationName) {
                openModal(animationName);
            }
        });
    });

    // Event delegation for view code and download buttons inside cards
    document.addEventListener('click', function (e) {
        if (e.target.matches('.view-code') || e.target.closest('.view-code')) {
            e.preventDefault();
            const animationName = (e.target.matches('[data-animation]') ? e.target : e.target.closest('[data-animation]')).getAttribute('data-animation');
            openModal(animationName);
        }
        if (e.target.matches('.download-btn') || e.target.closest('.download-btn')) {
            const animationName = (e.target.matches('[data-animation]') ? e.target : e.target.closest('[data-animation]')).getAttribute('data-animation');
            downloadAnimation(animationName);
        }
    });

    // Close modal
    closeModal.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Code tabs in modal
    codeTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            switchCodeTab(this.getAttribute('data-tab'));
        });
    });

    // Modal buttons
    copyCodeBtn.addEventListener('click', copyCodeToClipboard);
    downloadCodeBtn.addEventListener('click', () => {
        const animationName = modalTitle.getAttribute('data-animation');
        downloadAnimation(animationName);
    });

    // Category filtering buttons (in hero section)
    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.textContent.toLowerCase().trim();
            filterAnimations(category);
        });
    });

    // Search functionality
    searchButton.addEventListener('click', () => searchAnimations(searchInput.value.toLowerCase().trim()));
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchAnimations(searchInput.value.toLowerCase().trim());
        }
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => navLinks.classList.toggle('active'));

    // Mobile navigation category links
    navCategoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.textContent.toLowerCase().trim();
            filterAnimations(category);
            // Close mobile menu after selection
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });
}

// Open the modal with animation details
function openModal(animationName) {
    const animation = animations[animationName];
    if (!animation) return;

    modalTitle.textContent = animation.name;
    modalTitle.setAttribute('data-animation', animationName);
    modalPreview.innerHTML = animation.preview;
    htmlCode.textContent = animation.html;
    cssCode.textContent = animation.css;
    jsCode.textContent = animation.js;

    switchCodeTab('html');
    modal.style.display = 'flex';
}

// Switch between code tabs (HTML, CSS, JS)
function switchCodeTab(tabType) {
    codeTabs.forEach(tab => tab.classList.toggle('active', tab.getAttribute('data-tab') === tabType));
    codeContents.forEach(content => content.style.display = 'none');
    document.getElementById(`${tabType}Code`).style.display = 'block';
}

// Copy code to clipboard
function copyCodeToClipboard() {
    const activeTab = document.querySelector('.code-tab.active').getAttribute('data-tab');
    const codeContent = document.getElementById(`${activeTab}Code`).textContent;
    navigator.clipboard.writeText(codeContent).then(() => {
        const originalText = copyCodeBtn.textContent;
        copyCodeBtn.textContent = 'Copied!';
        setTimeout(() => { copyCodeBtn.textContent = originalText; }, 2000);
    }).catch(err => console.error('Failed to copy code: ', err));
}

// Download animation as a file
function downloadAnimation(animationName) {
    const animation = animations[animationName];
    if (!animation) return;

    alert(`Downloading ${animation.name}... In a real implementation, this would create a ZIP file.`);

    const combinedCode = `<!-- HTML for ${animation.name} -->\n${animation.html}\n\n/* CSS */\n${animation.css}\n\n/* JavaScript */\n${animation.js}`;
    const blob = new Blob([combinedCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${animationName}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

// Filter animations by category (hides other sections)
function filterAnimations(category) {
    // Clear search input when a category is selected
    searchInput.value = '';

    const sections = document.querySelectorAll('.animation-section');
    sections.forEach(section => {
        const sectionCategory = section.id.replace('-section', '');
        if (category === 'all' || category === sectionCategory) {
            section.style.display = 'block';
            // ensure all cards within are visible
             section.querySelectorAll('.animation-card').forEach(card => card.style.display = 'block');
        } else {
            section.style.display = 'none';
        }
    });

    // Update active state on hero category buttons
    categoryButtons.forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase().trim() === category);
    });
}

// Search animations by text
function searchAnimations(searchTerm) {
    // When searching, show all sections and reset category filter to 'All'
    filterAnimations('all');

    document.querySelectorAll('.animation-card').forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase()).join(' ');
        const cardText = title + ' ' + description + ' ' + tags;

        // If search is empty, show all cards, otherwise filter
        const isVisible = searchTerm ? cardText.includes(searchTerm) : true;
        card.style.display = isVisible ? 'block' : 'none';
    });
}