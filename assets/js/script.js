tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#002952',
                danger: '#CF0000',
                heading: '#242424',
                body: '#585858',
                grey: '#F4F7F9',
                grey2: '#EAECEF',
                darkBlue: '#002952',
                black: '#111111',
                muted: '#8A94A4'
            },
        },
    },
};

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const sidebarTextElements = document.querySelectorAll('.sidebar-text'); // All text elements in sidebar

    sidebar.classList.toggle('sidebar-hidden');
    sidebar.classList.toggle('sidebar-visible');

    mainContent.classList.toggle('main-content-expanded');
    mainContent.classList.toggle('main-content-collapsed');

    // Hide or show text depending on the sidebar state
    sidebarTextElements.forEach(text => {
        text.classList.toggle('hide-text');
    });
}

function changeTab(tabName) {
    // Remove the 'active' class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Add 'active' class to the clicked tab
    document.getElementById(`tab-${tabName}`).classList.add('active');

    // Hide all tab content sections
    document.querySelectorAll('.tab-content').forEach(tabContent => {
        tabContent.classList.add('hidden');
    });

    // Show the content of the clicked tab
    document.getElementById(tabName).classList.remove('hidden');

    window.history.pushState({}, "", `${window.location.pathname}?page=${tabName}`);
}

const page = window.location.search.split('page=')[1]
if (page) {
    setTimeout(() => {
        changeTab(page)
    }, 1)
}

function toggleSubTabs(subTabId) {
    document.getElementById(subTabId).classList.toggle('hidden');
} 