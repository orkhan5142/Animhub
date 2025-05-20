

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
        const viewCodeLinks = document.querySelectorAll('.view-code');
        const copyCodeBtn = document.querySelector('.copy-code');
        const downloadCodeBtn = document.querySelector('.download-code');
        const categoryButtons = document.querySelectorAll('.category');
        const searchInput = document.querySelector('.search-bar input');
        const searchButton = document.querySelector('.search-bar button');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const downloadButtons = document.querySelectorAll('.download-btn');

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Set up event listeners
            setupEventListeners();
        });

        // Set up all event listeners
        function setupEventListeners() {
            
            // View Code button clicks
            viewCodeLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const animationName = this.getAttribute('data-animation');
                    openModal(animationName);
                });
            });
            
            // Download buttons
            downloadButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const animationName = this.getAttribute('data-animation');
                    downloadAnimation(animationName);
                });
            });
            
            // Close modal
            closeModal.addEventListener('click', function() {
                modal.style.display = 'none';
            });
            
            // Close modal when clicking outside
            window.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
            
            // Code tabs
            codeTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const tabType = this.getAttribute('data-tab');
                    switchCodeTab(tabType);
                });
            });
            
            // Copy code button
            copyCodeBtn.addEventListener('click', function() {
                copyCodeToClipboard();
            });
            
            // Download code button in modal
            downloadCodeBtn.addEventListener('click', function() {
                const animationName = modalTitle.getAttribute('data-animation');
                downloadAnimation(animationName);
            });
            
            // Category filtering
            categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.textContent.toLowerCase().trim();
        filterAnimations(category);

        // Update active state
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
            
            // Search functionality
            searchButton.addEventListener('click', function() {
                const searchTerm = searchInput.value.toLowerCase().trim();
                searchAnimations(searchTerm);
            });
            
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    const searchTerm = searchInput.value.toLowerCase().trim();
                    searchAnimations(searchTerm);
                }
            });
            
            // Mobile menu toggle
            mobileMenuBtn.addEventListener('click', function() {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
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
            
            // Reset to HTML tab
            switchCodeTab('html');
            
            // Show modal
            modal.style.display = 'flex';
        }

        // Switch between code tabs (HTML, CSS, JS)
        function switchCodeTab(tabType) {
            // Update tab active state
            codeTabs.forEach(tab => {
                if (tab.getAttribute('data-tab') === tabType) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
            
            // Show the selected code content
            codeContents.forEach(content => {
                content.style.display = 'none';
            });
            
            document.getElementById(`${tabType}Code`).style.display = 'block';
        }

        // Copy code to clipboard
        function copyCodeToClipboard() {
            const activeTab = document.querySelector('.code-tab.active').getAttribute('data-tab');
            const codeContent = document.getElementById(`${activeTab}Code`).textContent;
            
            navigator.clipboard.writeText(codeContent)
                .then(() => {
                    // Show temporary copied message
                    const originalText = copyCodeBtn.textContent;
                    copyCodeBtn.textContent = 'Copied!';
                    setTimeout(() => {
                        copyCodeBtn.textContent = originalText;
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy code: ', err);
                    alert('Failed to copy code. Please try again.');
                });
        }

        // Download animation as a ZIP file
        function downloadAnimation(animationName) {
            const animation = animations[animationName];
            
            if (!animation) return;
            
            // In a real implementation, you would create a ZIP file with the code files
            // Since we can't create real ZIP files in this demo, show an alert
            alert(`Downloading ${animation.name}... In a real implementation, this would create a ZIP file with HTML, CSS, and JS files.`);
            
            // Example of how to create a downloadable text file (as an alternative to ZIP)
            const combinedCode = `<!-- HTML -->
        ${animation.html}

        /* CSS */
        ${animation.css}

        /* JavaScript */
        ${animation.js}`;
            
            const blob = new Blob([combinedCode], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${animationName}-animation.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        // Filter animations by category
        function filterAnimations(category) {
    const cards = document.querySelectorAll('.animation-card');
    let sectionId;

    // Determine the section ID to scroll to based on the category
    switch (category.toLowerCase()) {
        case 'all':
            sectionId = 'loader-section'; // Scroll to the first section or top
            cards.forEach(card => {
                card.style.opacity = '1';
                card.style.pointerEvents = 'auto';
            });
            break;
        case 'loading':
            sectionId = 'loader-section';
            break;
        case 'hover':
            sectionId = 'hover-section';
            break;
        case 'text':
            sectionId = 'text-section';
            break;
        case 'button':
            sectionId = 'button-section';
            break;
        case 'background':
            sectionId = 'background-section';
            break;
        case 'scroll':
            sectionId = 'scroll-section';
            break;
        default:
            sectionId = null;
    }

    // Filter animations (skip for 'all')
    

    // Scroll to the section if it exists
    if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}


        // Search animations by text
        function searchAnimations(searchTerm) {
            if (!searchTerm) {
                // If search is empty, show all
                document.querySelectorAll('.animation-card').forEach(card => {
                    card.style.display = 'block';
                });
                return;
            }
            
            document.querySelectorAll('.animation-card').forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                // Check if search term is in title, description or tags
                
            });
        }

        // Add responsiveness for window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navLinks.style.display = 'flex';
            } else {
                navLinks.style.display = 'none';
            }
        });

        // Function to add a new animation to the grid
       
        // Function to handle user submissions (for the "Submit Animation" feature)
        function handleAnimationSubmit(event) {
            event.preventDefault();
            
            // In a real implementation, you would get values from a form
            // For demo purposes, we'll create a sample submission
            
            
            // Add the new animation to the grid
           
            
            // Show confirmation message
            alert("Animation submitted successfully!");
            
            // Reset form (in a real implementation)
            // document.getElementById('submitForm').reset();
        }

        // Advanced features that could be added
        // These are placeholders for functionalities you might want to implement

        // Animation editor (for customizing animations)
        function initAnimationEditor() {
            // This would be a more complex implementation
            console.log("Animation editor initialized");
            // Would include color pickers, size adjusters, timing controls, etc.
        }

        // Animation import from URL
        function importAnimationFromURL(url) {
            // This would fetch animation code from an external URL
            console.log(`Importing animation from ${url}`);
            // Would need to handle CORS, security, etc.
        }

        // User accounts and favorites
        function saveAnimationToFavorites(animationId, userId) {
            // This would save an animation to a user's favorites
            console.log(`Saving animation ${animationId} to favorites for user ${userId}`);
            // Would need a backend implementation
        }

        // Animation versioning
        function getAnimationVersions(animationId) {
            // This would retrieve different versions of an animation
            console.log(`Getting versions for animation ${animationId}`);
            // Would need a database of versions
        }

        // Initialize any additional features
        // initAnimationEditor();

        // Example of creating a custom animation programmatically
        // This would typically be triggered by a user action in a real app
        
        

        // Uncomment to add the custom animation when the page loads
         
         // Replace the individual button event listeners with these:

// For view code buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('view-code')) {
        e.preventDefault();
        const animationName = e.target.getAttribute('data-animation');
        openModal(animationName);
    }
});

// For download buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('download-btn')) {
        const animationName = e.target.getAttribute('data-animation');
        downloadAnimation(animationName);
    }
});