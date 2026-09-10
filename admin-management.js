/* =====================================
   VORVENA ADMIN MANAGEMENT
===================================== */


/* =====================================
   DEMO DATA
===================================== */

let professionals = JSON.parse(
    localStorage.getItem("vorvenaProfessionals")
) || [

    {
        id: 1,
        name: "David Williams",
        profession: "Web Developer",
        email: "david@example.com",
        location: "Lagos, Nigeria",
        online: true,
        verified: true,
        active: true,
        jobs: 8,
        joined: "Aug 12, 2026"
    },

    {
        id: 2,
        name: "Sarah Creative",
        profession: "Graphic Designer",
        email: "sarah@example.com",
        location: "Abuja, Nigeria",
        online: true,
        verified: true,
        active: true,
        jobs: 12,
        joined: "Jul 28, 2026"
    },

    {
        id: 3,
        name: "Michael Adams",
        profession: "UI/UX Designer",
        email: "michael@example.com",
        location: "Port Harcourt, Nigeria",
        online: false,
        verified: false,
        active: true,
        jobs: 5,
        joined: "Aug 30, 2026"
    },

    {
        id: 4,
        name: "Daniel Okoro",
        profession: "Motion Designer",
        email: "daniel@example.com",
        location: "Enugu, Nigeria",
        online: true,
        verified: true,
        active: true,
        jobs: 17,
        joined: "Jun 18, 2026"
    },

    {
        id: 5,
        name: "Grace Johnson",
        profession: "Content Writer",
        email: "grace@example.com",
        location: "Ibadan, Nigeria",
        online: false,
        verified: false,
        active: false,
        jobs: 3,
        joined: "Aug 04, 2026"
    }

];


let applications = JSON.parse(
    localStorage.getItem("vorvenaApplications")
) || [

    {
        id: 101,
        name: "Chris Emmanuel",
        profession: "Frontend Developer",
        email: "chris@example.com",
        location: "Calabar, Nigeria",
        date: "Sept 9, 2026"
    },

    {
        id: 102,
        name: "Linda George",
        profession: "Brand Designer",
        email: "linda@example.com",
        location: "Lagos, Nigeria",
        date: "Sept 8, 2026"
    },

    {
        id: 103,
        name: "Victor James",
        profession: "Video Editor",
        email: "victor@example.com",
        location: "Uyo, Nigeria",
        date: "Sept 7, 2026"
    },

    {
        id: 104,
        name: "Mary Peters",
        profession: "Social Media Manager",
        email: "mary@example.com",
        location: "Abuja, Nigeria",
        date: "Sept 6, 2026"
    }

];


let clients = [

    {
        id: 1,
        name: "Bright Solutions",
        email: "bright@example.com",
        projects: 3,
        spent: 350000,
        joined: "Aug 02, 2026"
    },

    {
        id: 2,
        name: "Sarah Creative Agency",
        email: "sarahagency@example.com",
        projects: 2,
        spent: 180000,
        joined: "Aug 19, 2026"
    },

    {
        id: 3,
        name: "Michael Adams",
        email: "michaelclient@example.com",
        projects: 4,
        spent: 520000,
        joined: "Jul 11, 2026"
    }

];


let projects = [

    {
        id: "VOR-001",
        title: "Business Website Design",
        client: "Bright Solutions",
        professional: "David Williams",
        price: 150000,
        status: "in_progress"
    },

    {
        id: "VOR-002",
        title: "Brand Logo Design",
        client: "Sarah Creative Agency",
        professional: "Sarah Creative",
        price: 80000,
        status: "submitted"
    },

    {
        id: "VOR-003",
        title: "Social Media Management",
        client: "Michael Adams",
        professional: "Michael Adams",
        price: 120000,
        status: "revision_requested"
    },

    {
        id: "VOR-004",
        title: "E-commerce Website",
        client: "Bright Solutions",
        professional: "Daniel Okoro",
        price: 200000,
        status: "awaiting_payout"
    },

    {
        id: "VOR-005",
        title: "Company Branding",
        client: "Michael Adams",
        professional: "Sarah Creative",
        price: 100000,
        status: "completed"
    }

];


let messages = [

    {
        sender: "David Williams",
        project: "Business Website Design",
        message: "I have uploaded the latest homepage design for review.",
        time: "8 mins ago"
    },

    {
        sender: "Bright Solutions",
        project: "Business Website Design",
        message: "Please make the navigation slightly smaller.",
        time: "22 mins ago"
    },

    {
        sender: "Sarah Creative",
        project: "Brand Logo Design",
        message: "The revised logo files have been submitted.",
        time: "41 mins ago"
    },

    {
        sender: "Michael Adams",
        project: "Social Media Management",
        message: "I have requested a small revision from the client.",
        time: "1 hr ago"
    }

];


let deleteProfessionalId = null;


/* =====================================
   SAVE DATA
===================================== */

function saveProfessionals() {

    localStorage.setItem(
        "vorvenaProfessionals",
        JSON.stringify(professionals)
    );

}


function saveApplications() {

    localStorage.setItem(
        "vorvenaApplications",
        JSON.stringify(applications)
    );

}


/* =====================================
   INITIALIZE
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadTheme();

    renderProfessionals();

    renderApplications();

    renderClients();

    renderProjects();

    renderPayouts();

    renderMessages();

    updateStats();

    setupEvents();

});


/* =====================================
   THEME
===================================== */

function loadTheme() {

    const savedTheme =
        localStorage.getItem("vorvenaAdminTheme");

    const toggle =
        document.getElementById("themeToggle");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        toggle.textContent = "☀";

    } else {

        toggle.textContent = "☾";

    }

}


function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    const dark =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "vorvenaAdminTheme",
        dark ? "dark" : "light"
    );

    document.getElementById("themeToggle").textContent =
        dark ? "☀" : "☾";

}


/* =====================================
   SIDEBAR
===================================== */

function toggleSidebar() {

    document
        .getElementById("sidebar")
        .classList.toggle("open");

}


/* =====================================
   PROFESSIONALS
===================================== */

function renderProfessionals() {

    const table =
        document.getElementById("professionalsTable");

    const search =
        document
            .getElementById("professionalSearch")
            .value
            .toLowerCase();

    const filter =
        document.getElementById("professionalFilter").value;


    let filtered = professionals.filter(person => {

        const matchesSearch =
            person.name.toLowerCase().includes(search) ||
            person.profession.toLowerCase().includes(search) ||
            person.email.toLowerCase().includes(search);


        let matchesFilter = true;


        if (filter === "online") {
            matchesFilter = person.online;
        }

        if (filter === "verified") {
            matchesFilter = person.verified;
        }

        if (filter === "unverified") {
            matchesFilter = !person.verified;
        }

        if (filter === "active") {
            matchesFilter = person.active;
        }

        if (filter === "suspended") {
            matchesFilter = !person.active;
        }


        return matchesSearch && matchesFilter;

    });


    if (!filtered.length) {

        table.innerHTML = `
            <tr>
                <td colspan="7">
                    <div class="empty-state">
                        No professionals found.
                    </div>
                </td>
            </tr>
        `;

        return;

    }


    table.innerHTML = filtered.map(person => {

        const initials =
            getInitials(person.name);


        return `

            <tr>

                <td>

                    <div class="person-cell">

                        <div class="person-avatar">
                            ${initials}
                        </div>

                        <div>

                            <span class="person-name">
                                ${escapeHTML(person.name)}
                            </span>

                            <span class="person-email">
                                ${escapeHTML(person.email)}
                            </span>

                        </div>

                    </div>

                </td>


                <td>

                    <div class="profession-cell">
                        ${escapeHTML(person.profession)}
                    </div>

                    <span class="location">
                        ${escapeHTML(person.location)}
                    </span>

                </td>


                <td>

                    <span class="status-badge ${person.online ? "online" : "offline"}">

                        ${person.online ? "● Online" : "○ Offline"}

                    </span>

                    <br>

                    <span class="status-badge ${person.active ? "active" : "suspended"}"
                          style="margin-top:5px;">

                        ${person.active ? "Active" : "Suspended"}

                    </span>

                </td>


                <td>

                    <span class="verification-badge ${person.verified ? "verified" : "unverified"}">

                        ${person.verified ? "✓ Verified" : "Unverified"}

                    </span>

                </td>


                <td>

                    <span class="job-count">
                        ${person.jobs}
                    </span>

                    <small> successful</small>

                </td>


                <td>
                    ${escapeHTML(person.joined)}
                </td>


                <td>

                    <div class="action-buttons">

                        <button
                            class="action-btn"
                            title="Edit"
                            onclick="openEditModal(${person.id})">
                            ✎
                        </button>


                        <button
                            class="action-btn verify"
                            title="${person.verified ? "Remove verification" : "Verify"}"
                            onclick="toggleVerification(${person.id})">

                            ${person.verified ? "✓" : "★"}

                        </button>


                        <button
                            class="action-btn"
                            title="${person.active ? "Suspend" : "Activate"}"
                            onclick="toggleActive(${person.id})">

                            ${person.active ? "Ⅱ" : "▶"}

                        </button>


                        <button
                            class="action-btn danger"
                            title="Delete"
                            onclick="openDeleteModal(${person.id})">

                            ×

                        </button>

                    </div>

                </td>

            </tr>

        `;

    }).join("");

}


/* =====================================
   EDIT PROFESSIONAL
===================================== */

function openEditModal(id) {

    const person =
        professionals.find(item => item.id === id);

    if (!person) return;


    document.getElementById("editId").value =
        person.id;

    document.getElementById("editName").value =
        person.name;

    document.getElementById("editProfession").value =
        person.profession;

    document.getElementById("editEmail").value =
        person.email;

    document.getElementById("editLocation").value =
        person.location;

    document.getElementById("editJobs").value =
        person.jobs;


    document
        .getElementById("editModal")
        .classList.add("show");

}


function closeEditModal() {

    document
        .getElementById("editModal")
        .classList.remove("show");

}


function saveProfessional(event) {

    event.preventDefault();


    const id =
        Number(document.getElementById("editId").value);


    const person =
        professionals.find(item => item.id === id);


    if (!person) return;


    person.name =
        document.getElementById("editName").value.trim();

    person.profession =
        document.getElementById("editProfession").value.trim();

    person.email =
        document.getElementById("editEmail").value.trim();

    person.location =
        document.getElementById("editLocation").value.trim();

    person.jobs =
        Number(document.getElementById("editJobs").value);


    saveProfessionals();

    renderProfessionals();

    updateStats();

    closeEditModal();

    showToast("Professional details updated.");

}


/* =====================================
   VERIFY
===================================== */

function toggleVerification(id) {

    const person =
        professionals.find(item => item.id === id);

    if (!person) return;


    person.verified =
        !person.verified;


    saveProfessionals();

    renderProfessionals();

    showToast(
        person.verified
            ? `${person.name} is now verified.`
            : `${person.name}'s verified badge was removed.`
    );

}


/* =====================================
   ACTIVATE / SUSPEND
===================================== */

function toggleActive(id) {

    const person =
        professionals.find(item => item.id === id);

    if (!person) return;


    person.active =
        !person.active;


    saveProfessionals();

    renderProfessionals();

    updateStats();


    showToast(
        person.active
            ? `${person.name} has been activated.`
            : `${person.name} has been suspended.`
    );

}


/* =====================================
   DELETE
===================================== */

function openDeleteModal(id) {

    deleteProfessionalId = id;

    document
        .getElementById("deleteModal")
        .classList.add("show");

}


function closeDeleteModal() {

    deleteProfessionalId = null;

    document
        .getElementById("deleteModal")
        .classList.remove("show");

}


function deleteProfessional() {

    if (!deleteProfessionalId) return;


    const person =
        professionals.find(
            item => item.id === deleteProfessionalId
        );


    professionals =
        professionals.filter(
            item => item.id !== deleteProfessionalId
        );


    saveProfessionals();

    renderProfessionals();

    updateStats();

    closeDeleteModal();


    if (person) {

        showToast(
            `${person.name} was removed from the community.`
        );

    }

}


/* =====================================
   APPLICATIONS
===================================== */

function renderApplications() {

    const container =
        document.getElementById("applicationsList");


    document.getElementById("applicationCount").textContent =
        `${applications.length} pending`;


    if (!applications.length) {

        container.innerHTML = `
            <div class="empty-state">
                No pending applications.
            </div>
        `;

        return;

    }


    container.innerHTML =
        applications.map(application => `

            <div class="application-card">

                <div class="application-top">

                    <div class="person-avatar">
                        ${getInitials(application.name)}
                    </div>

                    <div>

                        <h4>
                            ${escapeHTML(application.name)}
                        </h4>

                        <small>
                            ${escapeHTML(application.profession)}
                        </small>

                    </div>

                </div>


                <div class="application-details">

                    <p>
                        <strong>Email:</strong>
                        ${escapeHTML(application.email)}
                    </p>

                    <p>
                        <strong>Location:</strong>
                        ${escapeHTML(application.location)}
                    </p>

                    <p>
                        <strong>Applied:</strong>
                        ${escapeHTML(application.date)}
                    </p>

                </div>


                <div class="application-actions">

                    <button
                        class="approve-btn"
                        onclick="approveApplication(${application.id})">

                        Approve

                    </button>

                    <button
                        class="reject-btn"
                        onclick="rejectApplication(${application.id})">

                        Reject

                    </button>

                </div>

            </div>

        `).join("");

}


function approveApplication(id) {

    const application =
        applications.find(item => item.id === id);

    if (!application) return;


    const newProfessional = {

        id: Date.now(),

        name: application.name,

        profession: application.profession,

        email: application.email,

        location: application.location,

        online: false,

        verified: false,

        active: true,

        jobs: 0,

        joined: "Sept 10, 2026"

    };


    professionals.push(newProfessional);


    applications =
        applications.filter(
            item => item.id !== id
        );


    saveProfessionals();

    saveApplications();

    renderProfessionals();

    renderApplications();

    updateStats();


    showToast(
        `${application.name} has been approved.`
    );

}


function rejectApplication(id) {

    const application =
        applications.find(item => item.id === id);

    if (!application) return;


    applications =
        applications.filter(
            item => item.id !== id
        );


    saveApplications();

    renderApplications();

    updateStats();


    showToast(
        `${application.name}'s application was rejected.`
    );

}


/* =====================================
   CLIENTS
===================================== */

function renderClients() {

    const container =
        document.getElementById("clientsList");


    const search =
        document
            .getElementById("clientSearch")
            .value
            .toLowerCase();


    const filtered =
        clients.filter(client =>
            client.name.toLowerCase().includes(search) ||
            client.email.toLowerCase().includes(search)
        );


    if (!filtered.length) {

        container.innerHTML = `
            <div class="empty-state">
                No clients found.
            </div>
        `;

        return;

    }


    container.innerHTML =
        filtered.map(client => `

            <div class="client-card">

                <div class="client-top">

                    <div class="client-avatar">
                        ${getInitials(client.name)}
                    </div>

                    <div>

                        <h4>
                            ${escapeHTML(client.name)}
                        </h4>

                        <small>
                            ${escapeHTML(client.email)}
                        </small>

                    </div>

                </div>


                <div class="client-info">

                    <div class="info-item">

                        <span>Projects</span>

                        <strong>
                            ${client.projects}
                        </strong>

                    </div>


                    <div class="info-item">

                        <span>Total Spent</span>

                        <strong>
                            ${formatMoney(client.spent)}
                        </strong>

                    </div>


                    <div class="info-item">

                        <span>Joined</span>

                        <strong>
                            ${client.joined}
                        </strong>

                    </div>


                    <div class="info-item">

                        <span>Status</span>

                        <strong>
                            Active
                        </strong>

                    </div>

                </div>

            </div>

        `).join("");

}


/* =====================================
   PROJECTS
===================================== */

function renderProjects() {

    const container =
        document.getElementById("projectsList");


    const filter =
        document.getElementById("projectFilter").value;


    const filtered =
        filter === "all"
            ? projects
            : projects.filter(
                project => project.status === filter
            );


    if (!filtered.length) {

        container.innerHTML = `
            <div class="empty-state">
                No projects found.
            </div>
        `;

        return;

    }


    container.innerHTML =
        filtered.map(project => `

            <div class="project-card">

                <div class="project-top">

                    <div>

                        <h4>
                            ${escapeHTML(project.title)}
                        </h4>

                        <span class="project-id">
                            ${project.id}
                        </span>

                    </div>

                    ${projectStatusBadge(project.status)}

                </div>


                <div class="project-meta">

                    <div>

                        <span>Client</span>

                        <strong>
                            ${escapeHTML(project.client)}
                        </strong>

                    </div>


                    <div>

                        <span>Professional</span>

                        <strong>
                            ${escapeHTML(project.professional)}
                        </strong>

                    </div>


                    <div>

                        <span>Project Price</span>

                        <strong>
                            ${formatMoney(project.price)}
                        </strong>

                    </div>

                </div>

            </div>

        `).join("");

}


function projectStatusBadge(status) {

    const names = {

        in_progress: "In Progress",

        submitted: "Submitted",

        revision_requested: "Revision Requested",

        awaiting_payout: "Awaiting Payout",

        completed: "Completed"

    };


    let className = "offline";


    if (status === "in_progress") {
        className = "online";
    }

    if (status === "awaiting_payout") {
        className = "active";
    }

    if (status === "completed") {
        className = "active";
    }

    if (status === "revision_requested") {
        className = "suspended";
    }


    return `

        <span class="status-badge ${className}">
            ${names[status] || status}
        </span>

    `;

}


/* =====================================
   PAYOUTS
===================================== */

function renderPayouts() {

    const container =
        document.getElementById("payoutsList");


    const awaiting =
        projects.filter(
            project => project.status === "awaiting_payout"
        );


    if (!awaiting.length) {

        container.innerHTML = `
            <div class="empty-state">
                No projects are currently awaiting payout.
            </div>
        `;

        return;

    }


    container.innerHTML =
        awaiting.map(project => {

            const professionalShare =
                project.price * 0.85;

            const vorvenaFee =
                project.price * 0.15;


            return `

                <div class="payout-card">

                    <h4>
                        ${escapeHTML(project.title)}
                    </h4>

                    <small>
                        ${escapeHTML(project.professional)}
                        · ${project.id}
                    </small>


                    <div class="payout-amount">
                        ${formatMoney(project.price)}
                    </div>


                    <div class="payout-breakdown">

                        <div class="payout-row professional">

                            <span>
                                Professional — 85%
                            </span>

                            <strong>
                                ${formatMoney(professionalShare)}
                            </strong>

                        </div>


                        <div class="payout-row vorvena">

                            <span>
                                VORVENA — 15%
                            </span>

                            <strong>
                                ${formatMoney(vorvenaFee)}
                            </strong>

                        </div>

                    </div>


                    <button
                        class="pay-btn"
                        onclick="markPayoutPaid('${project.id}')">

                        Mark Professional Paid

                    </button>

                </div>

            `;

        }).join("");

}


function markPayoutPaid(projectId) {

    const project =
        projects.find(
            item => item.id === projectId
        );


    if (!project) return;


    project.status = "completed";


    const professional =
        professionals.find(
            person =>
                person.name === project.professional
        );


    if (professional) {

        professional.jobs += 1;

        saveProfessionals();

    }


    renderPayouts();

    renderProjects();

    renderProfessionals();

    updateStats();


    showToast(
        `Payout completed. ${project.professional} received 85%.`
    );

}


/* =====================================
   MESSAGES
===================================== */

function renderMessages() {

    const container =
        document.getElementById("messagesList");


    container.innerHTML =
        messages.map(message => `

            <div class="message-item">

                <div class="message-avatar">
                    ${getInitials(message.sender)}
                </div>


                <div class="message-content">

                    <strong>
                        ${escapeHTML(message.sender)}
                    </strong>

                    <small>
                        ${escapeHTML(message.project)}
                    </small>

                    <p>
                        ${escapeHTML(message.message)}
                    </p>

                </div>


                <span class="message-time">
                    ${escapeHTML(message.time)}
                </span>

            </div>

        `).join("");

}


/* =====================================
   STATS
===================================== */

function updateStats() {

    const total =
        professionals.length;


    const online =
        professionals.filter(
            person => person.online && person.active
        ).length;


    const awaiting =
        projects.filter(
            project => project.status === "awaiting_payout"
        ).length;


    document.getElementById(
        "totalProfessionals"
    ).textContent = total;


    document.getElementById(
        "onlineProfessionals"
    ).textContent = online;


    document.getElementById(
        "pendingApplications"
    ).textContent = applications.length;


    document.getElementById(
        "awaitingPayout"
    ).textContent = awaiting;

}


/* =====================================
   EVENTS
===================================== */

function setupEvents() {

    document
        .getElementById("themeToggle")
        .addEventListener(
            "click",
            toggleTheme
        );


    document
        .getElementById("menuBtn")
        .addEventListener(
            "click",
            toggleSidebar
        );


    document
        .getElementById("professionalSearch")
        .addEventListener(
            "input",
            renderProfessionals
        );


    document
        .getElementById("professionalFilter")
        .addEventListener(
            "change",
            renderProfessionals
        );


    document
        .getElementById("clientSearch")
        .addEventListener(
            "input",
            renderClients
        );


    document
        .getElementById("projectFilter")
        .addEventListener(
            "change",
            renderProjects
        );


    document
        .getElementById("editProfessionalForm")
        .addEventListener(
            "submit",
            saveProfessional
        );


    document
        .getElementById("confirmDelete")
        .addEventListener(
            "click",
            deleteProfessional
        );


    document
        .getElementById("logoutBtn")
        .addEventListener(
            "click",
            () => {

                const confirmLogout =
                    confirm("Logout from VORVENA Admin?");

                if (confirmLogout) {

                    window.location.href =
                        "login.html";

                }

            }
        );


    document
        .querySelectorAll(".sidebar-nav a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    if (
                        window.innerWidth <= 900
                    ) {

                        document
                            .getElementById("sidebar")
                            .classList.remove("open");

                    }

                }
            );

        });

}


/* =====================================
   UTILITIES
===================================== */

function getInitials(name) {

    return name
        .split(" ")
        .map(word => word[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

}


function formatMoney(amount) {

    return "₦" +
        Number(amount).toLocaleString(
            "en-NG"
        );

}


function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =====================================
   TOAST
===================================== */

function showToast(message) {

    const existing =
        document.querySelector(".admin-toast");

    if (existing) {
        existing.remove();
    }


    const toast =
        document.createElement("div");

    toast.className = "admin-toast";

    toast.textContent = message;


    Object.assign(
        toast.style,
        {
            position: "fixed",
            right: "25px",
            bottom: "25px",
            zIndex: "5000",
            background: "#080808",
            color: "#fff",
            padding: "14px 18px",
            fontSize: "11px",
            fontWeight: "700",
            borderLeft: "3px solid #e50914",
            boxShadow: "0 10px 30px rgba(0,0,0,.25)"
        }
    );


    document.body.appendChild(toast);


    setTimeout(() => {

        toast.remove();

    }, 3000);

}


function showDemoMessage() {

    showToast(
        "Reports management will connect to Supabase later."
    );

}


/* =====================================
   CLOSE MODALS ON BACKDROP
===================================== */

document.addEventListener("click", event => {

    if (
        event.target ===
        document.getElementById("editModal")
    ) {

        closeEditModal();

    }


    if (
        event.target ===
        document.getElementById("deleteModal")
    ) {

        closeDeleteModal();

    }

});


/* =====================================
   ESC KEY
===================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeEditModal();

        closeDeleteModal();

    }

});