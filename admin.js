const STORAGE_KEYS = {
    professionals: "vorvenaProfessionals",
    clients: "vorvenaClients",
    applications: "vorvenaApplications",
    projects: "vorvenaProjects",
    payments: "vorvenaPayments",
    payouts: "vorvenaPayouts",
    messages: "vorvenaMessages",
    notifications: "vorvenaNotifications",
    activity: "vorvenaActivity",
    theme: "vorvenaAdminTheme",
    adminLoggedIn: "vorvenaAdminLoggedIn"
};


/* =========================================================
   DEFAULT DATA
========================================================= */

const defaultProfessionals = [
    {
        id: 1,
        name: "Elijah Stephen",
        profession: "Frontend Developer",
        email: "elijah@example.com",
        location: "Nigeria",
        jobs: 8,
        status: "Verified",
        online: true
    },
    {
        id: 2,
        name: "Daniel John",
        profession: "Graphic Designer",
        email: "daniel@example.com",
        location: "Lagos, Nigeria",
        jobs: 12,
        status: "Verified",
        online: true
    },
    {
        id: 3,
        name: "Sarah Williams",
        profession: "UI/UX Designer",
        email: "sarah@example.com",
        location: "Abuja, Nigeria",
        jobs: 6,
        status: "Verified",
        online: false
    }
];


const defaultClients = [
    {
        id: 1,
        name: "Tech Solutions Ltd",
        email: "tech@example.com",
        location: "Lagos, Nigeria",
        projects: 4,
        status: "Active"
    },
    {
        id: 2,
        name: "Bright Media",
        email: "bright@example.com",
        location: "Abuja, Nigeria",
        projects: 2,
        status: "Active"
    },
    {
        id: 3,
        name: "Nova Business",
        email: "nova@example.com",
        location: "Port Harcourt, Nigeria",
        projects: 5,
        status: "Active"
    }
];


const defaultApplications = [
    {
        id: 1,
        name: "Michael James",
        profession: "Motion Graphics Designer",
        email: "michael@example.com",
        location: "Lagos, Nigeria",
        date: "2026-09-10",
        status: "Pending"
    },
    {
        id: 2,
        name: "Grace Eno",
        profession: "UI/UX Designer",
        email: "grace@example.com",
        location: "Uyo, Nigeria",
        date: "2026-09-09",
        status: "Pending"
    }
];


const defaultProjects = [
    {
        id: 1,
        title: "Business Website",
        client: "Tech Solutions Ltd",
        professional: "Elijah Stephen",
        budget: 150000,
        status: "Active",
        date: "2026-09-09"
    },
    {
        id: 2,
        title: "Brand Identity Design",
        client: "Bright Media",
        professional: "Daniel John",
        budget: 80000,
        status: "Completed",
        date: "2026-09-08"
    }
];


const defaultPayments = [
    {
        id: 1,
        project: "Business Website",
        client: "Tech Solutions Ltd",
        professional: "Elijah Stephen",
        amount: 150000,
        status: "Paid",
        date: "2026-09-09"
    },
    {
        id: 2,
        project: "Brand Identity Design",
        client: "Bright Media",
        professional: "Daniel John",
        amount: 80000,
        status: "Paid",
        date: "2026-09-08"
    }
];


const defaultPayouts = [
    {
        id: 1,
        project: "Business Website",
        professional: "Elijah Stephen",
        amount: 127500,
        status: "Pending",
        date: "2026-09-09"
    }
];


const defaultMessages = [
    {
        id: 1,
        name: "Tech Solutions Ltd",
        message: "We would like an update on our project.",
        date: "Today",
        unread: true
    },
    {
        id: 2,
        name: "Daniel John",
        message: "I have completed the requested design.",
        date: "Yesterday",
        unread: false
    }
];


const defaultNotifications = [
    {
        id: 1,
        title: "New professional application",
        message: "A new professional has applied to join VORVENA.",
        date: "Today",
        unread: true,
        icon: "fa-user-plus"
    },
    {
        id: 2,
        title: "New project payment",
        message: "A client has completed a project payment.",
        date: "Today",
        unread: true,
        icon: "fa-money-bill"
    }
];


const defaultActivity = [
    {
        id: 1,
        title: "Admin system started",
        description: "VORVENA administration system was loaded.",
        date: "Today",
        icon: "fa-shield-halved"
    },
    {
        id: 2,
        title: "Payment received",
        description: "A project payment was recorded.",
        date: "Today",
        icon: "fa-credit-card"
    }
];


/* =========================================================
   HELPERS
========================================================= */

function getData(key, fallback) {
    try {
        const saved = localStorage.getItem(key);

        if (saved) {
            return JSON.parse(saved);
        }

        localStorage.setItem(key, JSON.stringify(fallback));

        return fallback;
    } catch (error) {
        console.error("Storage error:", error);
        return fallback;
    }
}


function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}


function getElement(id) {
    return document.getElementById(id);
}


function formatMoney(amount) {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    }).format(Number(amount) || 0);
}


function formatNumber(number) {
    return new Intl.NumberFormat("en-NG").format(Number(number) || 0);
}


function escapeHTML(value) {
    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function getInitials(name) {
    if (!name) return "V";

    return name
        .split(" ")
        .slice(0, 2)
        .map(word => word.charAt(0))
        .join("")
        .toUpperCase();
}


function statusClass(status) {
    if (!status) return "info";

    const value = status.toLowerCase();

    if (
        value.includes("approved") ||
        value.includes("verified") ||
        value.includes("active") ||
        value.includes("completed") ||
        value.includes("paid")
    ) {
        return "approved";
    }

    if (
        value.includes("pending") ||
        value.includes("review") ||
        value.includes("processing")
    ) {
        return "pending";
    }

    if (
        value.includes("rejected") ||
        value.includes("cancelled") ||
        value.includes("inactive")
    ) {
        return "rejected";
    }

    return "info";
}


/* =========================================================
   DATA
========================================================= */

let professionals = getData(
    STORAGE_KEYS.professionals,
    defaultProfessionals
);

let clients = getData(
    STORAGE_KEYS.clients,
    defaultClients
);

let applications = getData(
    STORAGE_KEYS.applications,
    defaultApplications
);

let projects = getData(
    STORAGE_KEYS.projects,
    defaultProjects
);

let payments = getData(
    STORAGE_KEYS.payments,
    defaultPayments
);

let payouts = getData(
    STORAGE_KEYS.payouts,
    defaultPayouts
);

let messages = getData(
    STORAGE_KEYS.messages,
    defaultMessages
);

let notifications = getData(
    STORAGE_KEYS.notifications,
    defaultNotifications
);

let activity = getData(
    STORAGE_KEYS.activity,
    defaultActivity
);


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeTheme();

    setupSidebar();

    setupNavigation();

    setupSearchAndFilters();

    setupModals();

    setupThemeControls();

    setupNotifications();

    setupReports();

    setupSettings();

    setupLogout();

    renderEverything();

    addActivity(
        "Admin dashboard opened",
        "The unified VORVENA administration system was opened.",
        "fa-gauge-high"
    );

});


/* =========================================================
   RENDER EVERYTHING
========================================================= */

function renderEverything() {

    renderDashboard();

    renderApplications();

    renderProfessionals();

    renderClients();

    renderProjects();

    renderMessages();

    renderPayments();

    renderPayouts();

    renderNotifications();

    renderActivity();

    updateNavigationCounts();

}


/* =========================================================
   SIDEBAR
========================================================= */

function setupSidebar() {

    const menuBtn = getElement("menuBtn");
    const sidebar = getElement("sidebar");
    const overlay = getElement("sidebarOverlay");

    if (!menuBtn || !sidebar) return;


    menuBtn.addEventListener("click", () => {

        sidebar.classList.toggle("open");

        if (overlay) {
            overlay.classList.toggle(
                "show",
                sidebar.classList.contains("open")
            );
        }

    });


    if (overlay) {

        overlay.addEventListener("click", () => {

            sidebar.classList.remove("open");

            overlay.classList.remove("show");

        });

    }


    window.addEventListener("resize", () => {

        if (window.innerWidth > 900) {

            sidebar.classList.remove("open");

            if (overlay) {
                overlay.classList.remove("show");
            }

        }

    });

}


/* =========================================================
   NAVIGATION
========================================================= */

function setupNavigation() {

    const navLinks = document.querySelectorAll(
        ".nav-link[data-section]"
    );

    const pageTitle = getElement("pageTitle");

    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const targetId = link.dataset.section;

            const target = getElement(targetId);

            if (!target) return;


            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");


            if (pageTitle) {
                pageTitle.textContent =
                    link.querySelector("span")?.textContent ||
                    link.textContent.trim();
            }


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });


            closeMobileSidebar();

        });

    });


    setupScrollNavigation();

}


function setupScrollNavigation() {

    const sections = document.querySelectorAll(".section");

    const navLinks = document.querySelectorAll(
        ".nav-link[data-section]"
    );


    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.getBoundingClientRect().top;

            if (sectionTop <= 150) {
                currentSection = section.id;
            }

        });


        if (!currentSection) return;


        navLinks.forEach(link => {

            link.classList.toggle(
                "active",
                link.dataset.section === currentSection
            );

        });


        const activeLink = document.querySelector(
            `.nav-link[data-section="${currentSection}"]`
        );

        const pageTitle = getElement("pageTitle");

        if (activeLink && pageTitle) {

            pageTitle.textContent =
                activeLink.querySelector("span")?.textContent ||
                activeLink.textContent.trim();

        }

    });

}


function closeMobileSidebar() {

    const sidebar = getElement("sidebar");
    const overlay = getElement("sidebarOverlay");

    if (window.innerWidth <= 900) {

        sidebar?.classList.remove("open");

        overlay?.classList.remove("show");

    }

}


/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard() {

    const totalProfessionals =
        getElement("totalProfessionals");

    const onlineProfessionals =
        getElement("onlineProfessionals");

    const pendingApplications =
        getElement("pendingApplications");

    const awaitingPayout =
        getElement("awaitingPayout");


    if (totalProfessionals) {
        totalProfessionals.textContent =
            formatNumber(professionals.length);
    }


    if (onlineProfessionals) {

        const online = professionals.filter(
            person => person.online === true
        ).length;

        onlineProfessionals.textContent =
            formatNumber(online);

    }


    if (pendingApplications) {

        const pending = applications.filter(
            app =>
                app.status?.toLowerCase() === "pending"
        ).length;

        pendingApplications.textContent =
            formatNumber(pending);

    }


    if (awaitingPayout) {

        const pending = payouts
            .filter(
                payout =>
                    payout.status?.toLowerCase() === "pending"
            )
            .reduce(
                (total, payout) =>
                    total + Number(payout.amount || 0),
                0
            );

        awaitingPayout.textContent =
            formatMoney(pending);

    }


    const activeProfessionalsCount =
        getElement("activeProfessionalsCount");

    const verifiedProfessionalsCount =
        getElement("verifiedProfessionalsCount");

    const completedJobsCount =
        getElement("completedJobsCount");

    const activeProjectsCount =
        getElement("activeProjectsCount");


    if (activeProfessionalsCount) {

        activeProfessionalsCount.textContent =
            professionals.filter(
                p =>
                    p.status?.toLowerCase() === "verified" ||
                    p.status?.toLowerCase() === "active"
            ).length;

    }


    if (verifiedProfessionalsCount) {

        verifiedProfessionalsCount.textContent =
            professionals.filter(
                p =>
                    p.status?.toLowerCase() === "verified"
            ).length;

    }


    if (completedJobsCount) {

        completedJobsCount.textContent =
            projects.filter(
                p =>
                    p.status?.toLowerCase() === "completed"
            ).length;

    }


    if (activeProjectsCount) {

        activeProjectsCount.textContent =
            projects.filter(
                p =>
                    p.status?.toLowerCase() === "active"
            ).length;

    }


    renderDashboardPayouts();

    renderRecentProjects();

}


function renderDashboardPayouts() {

    const container =
        getElement("dashboardPayoutList");

    if (!container) return;


    const pending = payouts.filter(
        payout =>
            payout.status?.toLowerCase() === "pending"
    );


    if (!pending.length) {

        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-check"></i>
                <h3>No pending payouts</h3>
                <p>All professional payouts are up to date.</p>
            </div>
        `;

        return;

    }


    container.innerHTML = pending
        .slice(0, 5)
        .map(payout => `
            <div class="dashboard-payout-item">

                <div>
                    <strong>
                        ${escapeHTML(payout.professional)}
                    </strong>

                    <small>
                        ${escapeHTML(payout.project)}
                    </small>
                </div>

                <span class="amount">
                    ${formatMoney(payout.amount)}
                </span>

            </div>
        `)
        .join("");

}


function renderRecentProjects() {

    const body =
        getElement("recentProjectsBody");

    if (!body) return;


    if (!projects.length) {

        body.innerHTML = `
            <tr>
                <td colspan="5">
                    <div class="empty-state">
                        <i class="fa-solid fa-folder-open"></i>
                        <h3>No projects yet</h3>
                    </div>
                </td>
            </tr>
        `;

        return;
    }


    body.innerHTML = projects
        .slice()
        .reverse()
        .slice(0, 6)
        .map(project => `
            <tr>

                <td>
                    <strong>
                        ${escapeHTML(project.title)}
                    </strong>
                </td>

                <td>
                    ${escapeHTML(project.client)}
                </td>

                <td>
                    ${escapeHTML(project.professional)}
                </td>

                <td>
                    ${formatMoney(project.budget)}
                </td>

                <td>
                    <span class="status-badge ${statusClass(project.status)}">
                        ${escapeHTML(project.status)}
                    </span>
                </td>

            </tr>
        `)
        .join("");

}


/* =========================================================
   APPLICATIONS
========================================================= */

function renderApplications() {

    const container =
        getElement("applicationsList");

    const count =
        getElement("applicationCount");


    if (!container) return;


    const pendingApplications =
        applications.filter(
            app =>
                app.status?.toLowerCase() === "pending"
        );


    if (count) {
        count.textContent =
            applications.length;
    }


    if (!applications.length) {

        container.innerHTML = createEmptyState(
            "No applications",
            "There are currently no professional applications.",
            "fa-user-plus"
        );

        return;

    }


    container.innerHTML = applications
        .map(app => `

            <article class="application-card">

                <div class="application-top">

                    <div style="display:flex; gap:11px; align-items:center;">

                        <div class="application-avatar">
                            ${getInitials(app.name)}
                        </div>

                        <div>
                            <h3>
                                ${escapeHTML(app.name)}
                            </h3>

                            <p>
                                ${escapeHTML(app.profession)}
                            </p>
                        </div>

                    </div>

                    <span class="status-badge ${statusClass(app.status)}">
                        ${escapeHTML(app.status)}
                    </span>

                </div>


                <div class="application-details">

                    <div class="application-detail">
                        <span>Email</span>
                        <strong>
                            ${escapeHTML(app.email)}
                        </strong>
                    </div>

                    <div class="application-detail">
                        <span>Location</span>
                        <strong>
                            ${escapeHTML(app.location)}
                        </strong>
                    </div>

                    <div class="application-detail">
                        <span>Applied</span>
                        <strong>
                            ${escapeHTML(app.date)}
                        </strong>
                    </div>

                </div>


                <div class="application-actions">

                    <button
                        class="action-btn success"
                        onclick="approveApplication(${app.id})"
                    >
                        <i class="fa-solid fa-check"></i>
                        Approve
                    </button>

                    <button
                        class="action-btn danger"
                        onclick="rejectApplication(${app.id})"
                    >
                        <i class="fa-solid fa-xmark"></i>
                        Reject
                    </button>

                </div>

            </article>

        `)
        .join("");

}


/* =========================================================
   APPLICATION ACTIONS
========================================================= */

function approveApplication(id) {

    const index =
        applications.findIndex(app => app.id === id);

    if (index === -1) return;


    const application = applications[index];


    professionals.push({
        id: Date.now(),
        name: application.name,
        profession: application.profession,
        email: application.email,
        location: application.location,
        jobs: 0,
        status: "Verified",
        online: false
    });


    applications[index].status = "Approved";


    saveData(
        STORAGE_KEYS.applications,
        applications
    );

    saveData(
        STORAGE_KEYS.professionals,
        professionals
    );


    addNotification(
        "Professional approved",
        `${application.name} has been approved to join VORVENA.`,
        "fa-user-check"
    );


    addActivity(
        "Professional approved",
        `${application.name} was approved.`,
        "fa-user-check"
    );


    renderEverything();

    showToast(
        `${application.name} has been approved.`
    );

}


function rejectApplication(id) {

    const index =
        applications.findIndex(app => app.id === id);

    if (index === -1) return;


    applications[index].status = "Rejected";


    saveData(
        STORAGE_KEYS.applications,
        applications
    );


    addActivity(
        "Application rejected",
        `${applications[index].name}'s application was rejected.`,
        "fa-user-xmark"
    );


    renderEverything();

    showToast("Application rejected.");

}


/* =========================================================
   PROFESSIONALS
========================================================= */

function renderProfessionals(search = "", filter = "all") {

    const table =
        getElement("professionalsTable");

    if (!table) return;


    let filtered = [...professionals];


    if (search) {

        const query =
            search.toLowerCase();

        filtered = filtered.filter(person =>

            person.name?.toLowerCase().includes(query) ||

            person.profession?.toLowerCase().includes(query) ||

            person.email?.toLowerCase().includes(query) ||

            person.location?.toLowerCase().includes(query)

        );

    }


    if (filter !== "all") {

        filtered = filtered.filter(
            person =>
                person.status?.toLowerCase() ===
                filter.toLowerCase()
        );

    }


    if (!filtered.length) {

        table.innerHTML = `
            <tr>
                <td colspan="7">
                    <div class="empty-state">
                        <i class="fa-solid fa-users"></i>
                        <h3>No professionals found</h3>
                        <p>Try changing your search or filter.</p>
                    </div>
                </td>
            </tr>
        `;

        return;

    }


    table.innerHTML = filtered
        .map(person => `

            <tr>

                <td>
                    <div style="display:flex;align-items:center;gap:9px;">

                        <div class="person-avatar">
                            ${getInitials(person.name)}
                        </div>

                        <strong>
                            ${escapeHTML(person.name)}
                        </strong>

                    </div>
                </td>

                <td>
                    ${escapeHTML(person.profession)}
                </td>

                <td>
                    ${escapeHTML(person.email)}
                </td>

                <td>
                    ${escapeHTML(person.location)}
                </td>

                <td>
                    ${formatNumber(person.jobs)}
                </td>

                <td>
                    <span class="status-badge ${statusClass(person.status)}">
                        ${escapeHTML(person.status)}
                    </span>
                </td>

                <td>

                    <div style="display:flex;gap:5px;">

                        <button
                            class="action-btn"
                            onclick="openEditModal(${person.id})"
                            title="Edit"
                        >
                            <i class="fa-solid fa-pen"></i>
                        </button>

                        <button
                            class="action-btn danger"
                            onclick="openDeleteModal(${person.id})"
                            title="Delete"
                        >
                            <i class="fa-solid fa-trash"></i>
                        </button>

                    </div>

                </td>

            </tr>

        `)
        .join("");

}


/* =========================================================
   CLIENTS
========================================================= */

function renderClients(search = "") {

    const container =
        getElement("clientsList");

    if (!container) return;


    let filtered = [...clients];


    if (search) {

        const query =
            search.toLowerCase();

        filtered = filtered.filter(client =>

            client.name?.toLowerCase().includes(query) ||

            client.email?.toLowerCase().includes(query) ||

            client.location?.toLowerCase().includes(query)

        );

    }


    if (!filtered.length) {

        container.innerHTML = createEmptyState(
            "No clients found",
            "Try changing your search.",
            "fa-building"
        );

        return;

    }


    container.innerHTML = filtered
        .map(client => `

            <article class="client-card">

                <div class="client-top">

                    <div style="display:flex;gap:11px;align-items:center;">

                        <div class="client-avatar">
                            ${getInitials(client.name)}
                        </div>

                        <div>
                            <h3>
                                ${escapeHTML(client.name)}
                            </h3>

                            <p>
                                ${escapeHTML(client.location)}
                            </p>
                        </div>

                    </div>

                    <span class="status-badge ${statusClass(client.status)}">
                        ${escapeHTML(client.status)}
                    </span>

                </div>


                <div class="client-details">

                    <div class="client-detail">
                        <span>Email</span>
                        <strong>
                            ${escapeHTML(client.email)}
                        </strong>
                    </div>

                    <div class="client-detail">
                        <span>Projects</span>
                        <strong>
                            ${formatNumber(client.projects)}
                        </strong>
                    </div>

                </div>


                <div class="client-actions">

                    <button
                        class="action-btn primary"
                        onclick="viewClient(${client.id})"
                    >
                        <i class="fa-solid fa-eye"></i>
                        View Client
                    </button>

                </div>

            </article>

        `)
        .join("");

}


function viewClient(id) {

    const client =
        clients.find(item => item.id === id);

    if (!client) return;


    showToast(
        `${client.name} — ${client.email}`
    );

}


/* =========================================================
   PROJECTS
========================================================= */

function renderProjects(filter = "all") {

    const container =
        getElement("projectsList");

    if (!container) return;


    let filtered = [...projects];


    if (filter !== "all") {

        filtered = filtered.filter(
            project =>
                project.status?.toLowerCase() ===
                filter.toLowerCase()
        );

    }


    if (!filtered.length) {

        container.innerHTML = createEmptyState(
            "No projects found",
            "There are no projects matching this filter.",
            "fa-folder-open"
        );

        return;

    }


    container.innerHTML = filtered
        .map(project => `

            <article class="project-card">

                <div class="project-top">

                    <div>
                        <h3>
                            ${escapeHTML(project.title)}
                        </h3>

                        <p>
                            ${escapeHTML(project.client)}
                        </p>
                    </div>

                    <span class="status-badge ${statusClass(project.status)}">
                        ${escapeHTML(project.status)}
                    </span>

                </div>


                <div class="project-details">

                    <div class="project-detail">
                        <span>Professional</span>
                        <strong>
                            ${escapeHTML(project.professional)}
                        </strong>
                    </div>

                    <div class="project-detail">
                        <span>Budget</span>
                        <strong>
                            ${formatMoney(project.budget)}
                        </strong>
                    </div>

                    <div class="project-detail">
                        <span>Date</span>
                        <strong>
                            ${escapeHTML(project.date)}
                        </strong>
                    </div>

                </div>


                <div class="project-actions">

                    <button
                        class="action-btn primary"
                        onclick="viewProject(${project.id})"
                    >
                        <i class="fa-solid fa-eye"></i>
                        View
                    </button>

                </div>

            </article>

        `)
        .join("");

}


function viewProject(id) {

    const project =
        projects.find(item => item.id === id);

    if (!project) return;


    showToast(
        `${project.title} — ${formatMoney(project.budget)}`
    );

}


/* =========================================================
   MESSAGES
========================================================= */

function renderMessages() {

    const container =
        getElement("messagesList");

    if (!container) return;


    if (!messages.length) {

        container.innerHTML = createEmptyState(
            "No messages",
            "Your admin inbox is currently empty.",
            "fa-envelope"
        );

        return;

    }


    container.innerHTML = messages
        .map(message => `

            <div class="message-item">

                <div class="message-avatar">
                    ${getInitials(message.name)}
                </div>

                <div class="message-content">

                    <div class="message-header">

                        <strong>
                            ${escapeHTML(message.name)}
                        </strong>

                        <small>
                            ${escapeHTML(message.date)}
                        </small>

                    </div>

                    <p>
                        ${escapeHTML(message.message)}
                    </p>

                </div>

                ${
                    message.unread
                        ? `
                            <span class="status-badge info">
                                New
                            </span>
                          `
                        : ""
                }

            </div>

        `)
        .join("");

}


/* =========================================================
   PAYMENTS
========================================================= */

function renderPayments() {

    const table =
        getElement("paymentsTableBody");

    const totalPaymentVolume =
        getElement("totalPaymentVolume");

    const vorvenaRevenue =
        getElement("vorvenaRevenue");

    const professionalEarnings =
        getElement("professionalEarnings");

    const pendingPaymentAmount =
        getElement("pendingPaymentAmount");


    const totalVolume = payments.reduce(
        (total, payment) =>
            total + Number(payment.amount || 0),
        0
    );


    const revenue =
        totalVolume * 0.15;

    const professionalMoney =
        totalVolume * 0.85;

    const pending = payments
        .filter(
            payment =>
                payment.status?.toLowerCase() === "pending"
        )
        .reduce(
            (total, payment) =>
                total + Number(payment.amount || 0),
            0
        );


    if (totalPaymentVolume) {
        totalPaymentVolume.textContent =
            formatMoney(totalVolume);
    }

    if (vorvenaRevenue) {
        vorvenaRevenue.textContent =
            formatMoney(revenue);
    }

    if (professionalEarnings) {
        professionalEarnings.textContent =
            formatMoney(professionalMoney);
    }

    if (pendingPaymentAmount) {
        pendingPaymentAmount.textContent =
            formatMoney(pending);
    }


    if (!table) return;


    if (!payments.length) {

        table.innerHTML = `
            <tr>
                <td colspan="7">
                    <div class="empty-state">
                        <i class="fa-solid fa-credit-card"></i>
                        <h3>No payments</h3>
                    </div>
                </td>
            </tr>
        `;

        return;

    }


    table.innerHTML = payments
        .map(payment => `

            <tr>

                <td>
                    ${escapeHTML(payment.project)}
                </td>

                <td>
                    ${escapeHTML(payment.client)}
                </td>

                <td>
                    ${escapeHTML(payment.professional)}
                </td>

                <td>
                    ${formatMoney(payment.amount)}
                </td>

                <td>
                    ${formatMoney(payment.amount * 0.15)}
                </td>

                <td>
                    ${formatMoney(payment.amount * 0.85)}
                </td>

                <td>
                    <span class="status-badge ${statusClass(payment.status)}">
                        ${escapeHTML(payment.status)}
                    </span>
                </td>

            </tr>

        `)
        .join("");

}


/* =========================================================
   PAYOUTS
========================================================= */

function renderPayouts() {

    const container =
        getElement("payoutsList");

    if (!container) return;


    if (!payouts.length) {

        container.innerHTML = createEmptyState(
            "No payouts",
            "There are currently no professional payouts.",
            "fa-money-bill-transfer"
        );

        return;

    }


    container.innerHTML = payouts
        .map(payout => `

            <article class="payout-card">

                <div class="payout-top">

                    <div>
                        <h3>
                            ${escapeHTML(payout.professional)}
                        </h3>

                        <p>
                            ${escapeHTML(payout.project)}
                        </p>
                    </div>

                    <span class="status-badge ${statusClass(payout.status)}">
                        ${escapeHTML(payout.status)}
                    </span>

                </div>


                <div class="payout-details">

                    <div class="payout-detail">
                        <span>Payout amount</span>
                        <strong>
                            ${formatMoney(payout.amount)}
                        </strong>
                    </div>

                    <div class="payout-detail">
                        <span>Date</span>
                        <strong>
                            ${escapeHTML(payout.date)}
                        </strong>
                    </div>

                </div>


                <div class="payout-actions">

                    ${
                        payout.status?.toLowerCase() === "pending"
                            ? `
                                <button
                                    class="action-btn primary"
                                    onclick="openPayoutModal(${payout.id})"
                                >
                                    <i class="fa-solid fa-money-bill-transfer"></i>
                                    Process Payout
                                </button>
                              `
                            : `
                                <button
                                    class="action-btn"
                                    disabled
                                >
                                    <i class="fa-solid fa-check"></i>
                                    Processed
                                </button>
                              `
                    }

                </div>

            </article>

        `)
        .join("");

}


/* =========================================================
   NOTIFICATIONS
========================================================= */

function renderNotifications() {

    const container =
        document.querySelector(".notification-list");

    if (!container) return;


    if (!notifications.length) {

        container.innerHTML = createEmptyState(
            "No notifications",
            "You're all caught up.",
            "fa-bell"
        );

        return;

    }


    container.innerHTML = notifications
        .map(notification => `

            <div class="notification-item ${
                notification.unread ? "unread" : ""
            }">

                <div class="notification-icon">

                    <i class="fa-solid ${
                        escapeHTML(
                            notification.icon ||
                            "fa-bell"
                        )
                    }"></i>

                </div>

                <div class="notification-content">

                    <strong>
                        ${escapeHTML(notification.title)}
                    </strong>

                    <p>
                        ${escapeHTML(notification.message)}
                    </p>

                    <small>
                        ${escapeHTML(notification.date)}
                    </small>

                </div>

            </div>

        `)
        .join("");

}


/* =========================================================
   ACTIVITY
========================================================= */

function renderActivity() {

    const container =
        getElement("activityLog");

    if (!container) return;


    if (!activity.length) {

        container.innerHTML = createEmptyState(
            "No activity",
            "Admin activity will appear here.",
            "fa-clock-rotate-left"
        );

        return;

    }


    container.innerHTML = activity
        .slice()
        .reverse()
        .map(item => `

            <div class="activity-item">

                <div class="activity-icon">

                    <i class="fa-solid ${
                        escapeHTML(
                            item.icon ||
                            "fa-circle"
                        )
                    }"></i>

                </div>

                <div class="activity-content">

                    <strong>
                        ${escapeHTML(item.title)}
                    </strong>

                    <p>
                        ${escapeHTML(item.description)}
                    </p>

                    <small>
                        ${escapeHTML(item.date)}
                    </small>

                </div>

            </div>

        `)
        .join("");

}


/* =========================================================
   ADD ACTIVITY
========================================================= */

function addActivity(title, description, icon) {

    const item = {
        id: Date.now(),
        title,
        description,
        date: new Date().toLocaleString("en-NG"),
        icon
    };


    activity.push(item);


    if (activity.length > 100) {
        activity = activity.slice(-100);
    }


    saveData(
        STORAGE_KEYS.activity,
        activity
    );


    renderActivity();

}


/* =========================================================
   ADD NOTIFICATION
========================================================= */

function addNotification(title, message, icon) {

    const notification = {
        id: Date.now(),
        title,
        message,
        date: new Date().toLocaleString("en-NG"),
        unread: true,
        icon
    };


    notifications.push(notification);


    if (notifications.length > 50) {
        notifications = notifications.slice(-50);
    }


    saveData(
        STORAGE_KEYS.notifications,
        notifications
    );


    renderNotifications();

    updateNavigationCounts();

}


/* =========================================================
   NAVIGATION COUNTS
========================================================= */

function updateNavigationCounts() {

    const applicationNavCount =
        getElement("applicationNavCount");

    const messageNavCount =
        getElement("messageNavCount");

    const payoutNavCount =
        getElement("payoutNavCount");

    const notificationNavCount =
        getElement("notificationNavCount");


    if (applicationNavCount) {

        applicationNavCount.textContent =
            applications.filter(
                app =>
                    app.status?.toLowerCase() === "pending"
            ).length;

    }


    if (messageNavCount) {

        messageNavCount.textContent =
            messages.filter(
                message => message.unread
            ).length;

    }


    if (payoutNavCount) {

        payoutNavCount.textContent =
            payouts.filter(
                payout =>
                    payout.status?.toLowerCase() === "pending"
            ).length;

    }


    if (notificationNavCount) {

        notificationNavCount.textContent =
            notifications.filter(
                notification =>
                    notification.unread
            ).length;

    }

}


/* =========================================================
   SEARCH + FILTERS
========================================================= */

function setupSearchAndFilters() {

    const applicationSearch =
        getElement("applicationSearch");

    const professionalSearch =
        getElement("professionalSearch");

    const professionalFilter =
        getElement("professionalFilter");

    const clientSearch =
        getElement("clientSearch");

    const projectFilter =
        getElement("projectFilter");


    applicationSearch?.addEventListener(
        "input",
        () => {

            const query =
                applicationSearch.value.toLowerCase();

            const cards =
                document.querySelectorAll(
                    ".application-card"
                );

            cards.forEach(card => {

                card.style.display =
                    card.textContent
                        .toLowerCase()
                        .includes(query)
                        ? ""
                        : "none";

            });

        }
    );


    professionalSearch?.addEventListener(
        "input",
        () => {

            renderProfessionals(
                professionalSearch.value,
                professionalFilter?.value || "all"
            );

        }
    );


    professionalFilter?.addEventListener(
        "change",
        () => {

            renderProfessionals(
                professionalSearch?.value || "",
                professionalFilter.value
            );

        }
    );


    clientSearch?.addEventListener(
        "input",
        () => {

            renderClients(
                clientSearch.value
            );

        }
    );


    projectFilter?.addEventListener(
        "change",
        () => {

            renderProjects(
                projectFilter.value
            );

        }
    );

}


/* =========================================================
   MODALS
========================================================= */

let selectedProfessionalId = null;
let selectedPayoutId = null;


function setupModals() {

    getElement("closeEditModal")
        ?.addEventListener(
            "click",
            closeEditModal
        );

    getElement("cancelEdit")
        ?.addEventListener(
            "click",
            closeEditModal
        );


    getElement("closeDeleteModal")
        ?.addEventListener(
            "click",
            closeDeleteModal
        );

    getElement("cancelDelete")
        ?.addEventListener(
            "click",
            closeDeleteModal
        );


    getElement("closePayoutModal")
        ?.addEventListener(
            "click",
            closePayoutModal
        );

    getElement("cancelPayout")
        ?.addEventListener(
            "click",
            closePayoutModal
        );


    getElement("confirmDelete")
        ?.addEventListener(
            "click",
            confirmDelete
        );


    getElement("confirmPayout")
        ?.addEventListener(
            "click",
            confirmPayout
        );


    getElement("editProfessionalForm")
        ?.addEventListener(
            "submit",
            saveProfessionalEdit
        );


    document.querySelectorAll(".modal-overlay")
        .forEach(modal => {

            modal.addEventListener(
                "click",
                event => {

                    if (event.target === modal) {
                        modal.classList.remove("active");
                    }

                }
            );

        });


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                document.querySelectorAll(
                    ".modal-overlay.active"
                ).forEach(modal => {
                    modal.classList.remove("active");
                });

            }

        }
    );

}


/* =========================================================
   EDIT PROFESSIONAL
========================================================= */

function openEditModal(id) {

    const professional =
        professionals.find(
            person => person.id === id
        );

    if (!professional) return;


    selectedProfessionalId = id;


    getElement("editId").value =
        professional.id;

    getElement("editName").value =
        professional.name || "";

    getElement("editProfession").value =
        professional.profession || "";

    getElement("editEmail").value =
        professional.email || "";

    getElement("editLocation").value =
        professional.location || "";

    getElement("editJobs").value =
        professional.jobs || 0;

    getElement("editStatus").value =
        professional.status || "Verified";


    getElement("editModal")
        ?.classList.add("active");

}


function closeEditModal() {

    getElement("editModal")
        ?.classList.remove("active");

    selectedProfessionalId = null;

}


function saveProfessionalEdit(event) {

    event.preventDefault();


    if (selectedProfessionalId === null) return;


    const professional =
        professionals.find(
            person =>
                person.id === selectedProfessionalId
        );

    if (!professional) return;


    professional.name =
        getElement("editName").value.trim();

    professional.profession =
        getElement("editProfession").value.trim();

    professional.email =
        getElement("editEmail").value.trim();

    professional.location =
        getElement("editLocation").value.trim();

    professional.jobs =
        Number(getElement("editJobs").value) || 0;

    professional.status =
        getElement("editStatus").value;


    saveData(
        STORAGE_KEYS.professionals,
        professionals
    );


    addActivity(
        "Professional updated",
        `${professional.name}'s profile was updated.`,
        "fa-user-pen"
    );


    renderEverything();

    closeEditModal();

    showToast("Professional updated successfully.");

}


/* =========================================================
   DELETE PROFESSIONAL
========================================================= */

function openDeleteModal(id) {

    selectedProfessionalId = id;

    getElement("deleteModal")
        ?.classList.add("active");

}


function closeDeleteModal() {

    getElement("deleteModal")
        ?.classList.remove("active");

    selectedProfessionalId = null;

}


function confirmDelete() {

    if (selectedProfessionalId === null) return;


    const professional =
        professionals.find(
            person =>
                person.id === selectedProfessionalId
        );


    if (!professional) return;


    professionals =
        professionals.filter(
            person =>
                person.id !== selectedProfessionalId
        );


    saveData(
        STORAGE_KEYS.professionals,
        professionals
    );


    addActivity(
        "Professional deleted",
        `${professional.name} was removed from the professional directory.`,
        "fa-user-minus"
    );


    renderEverything();

    closeDeleteModal();

    showToast("Professional deleted.");

}


/* =========================================================
   PAYOUT MODAL
========================================================= */

function openPayoutModal(id) {

    const payout =
        payouts.find(
            item => item.id === id
        );

    if (!payout) return;


    selectedPayoutId = id;


    const projectName =
        getElement("payoutProjectName");

    if (projectName) {

        projectName.textContent =
            `${payout.project} — ${formatMoney(payout.amount)}`;

    }


    getElement("payoutModal")
        ?.classList.add("active");

}


function closePayoutModal() {

    getElement("payoutModal")
        ?.classList.remove("active");

    selectedPayoutId = null;

}


function confirmPayout() {

    if (selectedPayoutId === null) return;


    const payout =
        payouts.find(
            item =>
                item.id === selectedPayoutId
        );

    if (!payout) return;


    payout.status = "Paid";


    saveData(
        STORAGE_KEYS.payouts,
        payouts
    );


    addActivity(
        "Professional payout processed",
        `${payout.professional} received ${formatMoney(payout.amount)}.`,
        "fa-money-bill-transfer"
    );


    addNotification(
        "Payout processed",
        `Payout for ${payout.professional} has been processed.`,
        "fa-money-bill-transfer"
    );


    renderEverything();

    closePayoutModal();

    showToast("Payout processed successfully.");

}


/* =========================================================
   THEME
========================================================= */

function initializeTheme() {

    const savedTheme =
        localStorage.getItem(
            STORAGE_KEYS.theme
        );


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-theme"
        );

    } else {

        document.body.classList.remove(
            "dark-theme"
        );

    }


    updateThemeIcon();

}


function setupThemeControls() {

    getElement("themeToggle")
        ?.addEventListener(
            "click",
            toggleTheme
        );


    getElement("settingsThemeBtn")
        ?.addEventListener(
            "click",
            toggleTheme
        );

}


function toggleTheme() {

    document.body.classList.toggle(
        "dark-theme"
    );


    const isDark =
        document.body.classList.contains(
            "dark-theme"
        );


    localStorage.setItem(
        STORAGE_KEYS.theme,
        isDark ? "dark" : "light"
    );


    updateThemeIcon();

    showToast(
        isDark
            ? "Dark mode enabled."
            : "Light mode enabled."
    );

}


function updateThemeIcon() {

    const themeToggle =
        getElement("themeToggle");

    if (!themeToggle) return;


    const icon =
        themeToggle.querySelector("i");

    if (!icon) return;


    const isDark =
        document.body.classList.contains(
            "dark-theme"
        );


    icon.className =
        isDark
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon";

}


/* =========================================================
   NOTIFICATION CONTROLS
========================================================= */

function setupNotifications() {

    const notificationBtn =
        getElement("notificationBtn");

    const markRead =
        getElement("markNotificationsRead");


    notificationBtn?.addEventListener(
        "click",
        () => {

            const section =
                getElement("notifications");

            section?.scrollIntoView({
                behavior: "smooth"
            });

        }
    );


    markRead?.addEventListener(
        "click",
        markAllNotificationsRead
    );

}


function markAllNotificationsRead() {

    notifications =
        notifications.map(
            notification => ({
                ...notification,
                unread: false
            })
        );


    saveData(
        STORAGE_KEYS.notifications,
        notifications
    );


    renderNotifications();

    updateNavigationCounts();

    updateNotificationDot();

    showToast(
        "All notifications marked as read."
    );

}


function updateNotificationDot() {

    const dot =
        getElement("notificationDot");

    if (!dot) return;


    const unread =
        notifications.some(
            notification =>
                notification.unread
        );


    dot.style.display =
        unread ? "block" : "none";

}


/* =========================================================
   REPORTS
========================================================= */

function setupReports() {

    document.querySelectorAll(
        ".report-btn[data-report]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const report =
                    button.dataset.report;

                generateReport(report);

            }
        );

    });

}


function generateReport(type) {

    let message = "";


    switch (type) {

        case "professionals":
            message =
                `Professionals: ${professionals.length}`;
            break;

        case "clients":
            message =
                `Clients: ${clients.length}`;
            break;

        case "projects":
            message =
                `Projects: ${projects.length}`;
            break;

        case "payments":

            const total =
                payments.reduce(
                    (sum, payment) =>
                        sum + Number(payment.amount || 0),
                    0
                );

            message =
                `Payment volume: ${formatMoney(total)}`;

            break;

        default:
            message =
                "Report generated successfully.";

    }


    addActivity(
        "Report generated",
        message,
        "fa-chart-column"
    );


    showToast(message);

}


/* =========================================================
   SETTINGS
========================================================= */

function setupSettings() {

    updateNotificationDot();

    const commission =
        document.querySelector(
            ".commission-display"
        );

    if (commission) {

        commission.innerHTML = `
            <div class="commission-box">

                <strong>15%</strong>

                <span>
                    VORVENA Commission
                </span>

            </div>

            <div class="commission-box">

                <strong>85%</strong>

                <span>
                    Professional Earnings
                </span>

            </div>
        `;

    }

}


/* =========================================================
   LOGOUT
========================================================= */

function setupLogout() {

    const logoutBtn =
        getElement("logoutBtn");

    logoutBtn?.addEventListener(
        "click",
        () => {

            const confirmed =
                confirm(
                    "Are you sure you want to log out of the admin system?"
                );


            if (!confirmed) return;


            localStorage.removeItem(
                STORAGE_KEYS.adminLoggedIn
            );


            addActivity(
                "Admin logged out",
                "The administrator logged out of the VORVENA system.",
                "fa-right-from-bracket"
            );


            showToast(
                "Logging out..."
            );


            setTimeout(() => {

                /*
                 * Change this path later if your
                 * admin login page has another name.
                 */

                window.location.href =
                    "admin-login.html";

            }, 900);

        }
    );

}


/* =========================================================
   TOAST
========================================================= */

let toastTimeout;


function showToast(message) {

    const toast =
        getElement("toast");

    const toastMessage =
        getElement("toastMessage");


    if (!toast || !toastMessage) return;


    toastMessage.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(toastTimeout);


    toastTimeout =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

}


/* =========================================================
   EMPTY STATE
========================================================= */

function createEmptyState(
    title,
    message,
    icon = "fa-folder-open"
) {

    return `
        <div class="empty-state">

            <i class="fa-solid ${icon}"></i>

            <h3>
                ${escapeHTML(title)}
            </h3>

            <p>
                ${escapeHTML(message)}
            </p>

        </div>
    `;

}


/* =========================================================
   GLOBAL FUNCTIONS
   Needed because buttons are created dynamically
========================================================= */

window.approveApplication =
    approveApplication;

window.rejectApplication =
    rejectApplication;

window.openEditModal =
    openEditModal;

window.openDeleteModal =
    openDeleteModal;

window.openPayoutModal =
    openPayoutModal;

window.viewClient =
    viewClient;

window.viewProject =
    viewProject;


/* =========================================================
   INITIAL NOTIFICATION DOT
========================================================= */

setTimeout(() => {
    updateNotificationDot();
}, 100);