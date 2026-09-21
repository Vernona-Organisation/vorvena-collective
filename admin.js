"use strict";

const STORAGE = {
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
    loggedIn: "vorvenaAdminLoggedIn",
    account: "vorvenaAdminAccount"
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const defaultData = {

    professionals: [
        {
            id: "PRO-001",
            name: "Elijah Stephen",
            profession: "Frontend Developer",
            email: "elijah@example.com",
            location: "Eket, Nigeria",
            jobs: 8,
            status: "Verified",
            accountStatus: "Active",
            online: true,
            joined: "Sep 2026"
        },
        {
            id: "PRO-002",
            name: "Daniel John",
            profession: "Graphic Designer",
            email: "daniel@example.com",
            location: "Lagos, Nigeria",
            jobs: 5,
            status: "Verified",
            accountStatus: "Active",
            online: false,
            joined: "Sep 2026"
        },
        {
            id: "PRO-003",
            name: "Sarah Williams",
            profession: "UI/UX Designer",
            email: "sarah@example.com",
            location: "Abuja, Nigeria",
            jobs: 3,
            status: "Unverified",
            accountStatus: "Active",
            online: true,
            joined: "Aug 2026"
        },
        {
            id: "PRO-004",
            name: "David Williams",
            profession: "Web Developer",
            email: "david@example.com",
            location: "Port Harcourt, Nigeria",
            jobs: 8,
            status: "Verified",
            accountStatus: "Active",
            online: true,
            joined: "Sep 2026"
        }
    ],

    clients: [
        {
            id: "CLI-001",
            name: "Tech Solutions Ltd",
            email: "client@techsolutions.com",
            location: "Lagos, Nigeria",
            projects: 4,
            status: "Active"
        },
        {
            id: "CLI-002",
            name: "Bright Media",
            email: "hello@brightmedia.com",
            location: "Abuja, Nigeria",
            projects: 2,
            status: "Active"
        },
        {
            id: "CLI-003",
            name: "Nova Business",
            email: "contact@novabusiness.com",
            location: "Port Harcourt, Nigeria",
            projects: 1,
            status: "Active"
        },
        {
            id: "CLI-004",
            name: "GreenEdge Studio",
            email: "contact@greenedge.com",
            location: "Enugu, Nigeria",
            projects: 3,
            status: "Active"
        }
    ],

    applications: [
        {
            id: "APP-001",
            name: "Michael James",
            profession: "Full Stack Developer",
            email: "michael@example.com",
            location: "Port Harcourt, Nigeria",
            experience: "3 Years",
            skills: ["HTML", "CSS", "JavaScript", "Node.js"],
            status: "Pending",
            date: "Sep 18, 2026"
        },
        {
            id: "APP-002",
            name: "Grace Eno",
            profession: "Graphic Designer",
            email: "grace@example.com",
            location: "Calabar, Nigeria",
            experience: "2 Years",
            skills: ["Photoshop", "Illustrator", "Figma"],
            status: "Pending",
            date: "Sep 18, 2026"
        },
        {
            id: "APP-003",
            name: "Brian Okoro",
            profession: "Backend Developer",
            email: "brian@example.com",
            location: "Enugu, Nigeria",
            experience: "4 Years",
            skills: ["Node.js", "Python", "MongoDB"],
            status: "Pending",
            date: "Sep 17, 2026"
        }
    ],

    projects: [
        {
            id: "PRJ-001",
            name: "Business Website",
            client: "Tech Solutions Ltd",
            professional: "Elijah Stephen",
            amount: 150000,
            status: "In Progress",
            date: "Sep 16, 2026"
        },
        {
            id: "PRJ-002",
            name: "Brand Identity Design",
            client: "Bright Media",
            professional: "Daniel John",
            amount: 80000,
            status: "Completed",
            date: "Sep 14, 2026"
        },
        {
            id: "PRJ-003",
            name: "E-commerce Landing Page",
            client: "Nova Business",
            professional: "David Williams",
            amount: 120000,
            status: "Pending",
            date: "Sep 18, 2026"
        },
        {
            id: "PRJ-004",
            name: "Mobile App UI Design",
            client: "GreenEdge Studio",
            professional: "Sarah Williams",
            amount: 95000,
            status: "In Progress",
            date: "Sep 17, 2026"
        }
    ],

    payments: [
        {
            id: "PAY-001",
            project: "Business Website",
            client: "Tech Solutions Ltd",
            professional: "Elijah Stephen",
            amount: 150000,
            status: "Paid",
            date: "Sep 17, 2026"
        },
        {
            id: "PAY-002",
            project: "Brand Identity Design",
            client: "Bright Media",
            professional: "Daniel John",
            amount: 80000,
            status: "Paid",
            date: "Sep 15, 2026"
        },
        {
            id: "PAY-003",
            project: "E-commerce Landing Page",
            client: "Nova Business",
            professional: "David Williams",
            amount: 120000,
            status: "Pending",
            date: "Sep 18, 2026"
        },
        {
            id: "PAY-004",
            project: "Mobile App UI Design",
            client: "GreenEdge Studio",
            professional: "Sarah Williams",
            amount: 95000,
            status: "Paid",
            date: "Sep 18, 2026"
        }
    ],

    payouts: [
        {
            id: "PAYOUT-001",
            project: "Business Website",
            professional: "Elijah Stephen",
            amount: 127500,
            status: "Pending",
            date: "Sep 18, 2026"
        },
        {
            id: "PAYOUT-002",
            project: "Brand Identity Design",
            professional: "Daniel John",
            amount: 68000,
            status: "Paid",
            date: "Sep 16, 2026"
        },
        {
            id: "PAYOUT-003",
            project: "Landing Page",
            professional: "David Williams",
            amount: 102000,
            status: "Pending",
            date: "Sep 18, 2026"
        }
    ],

    messages: [
        {
            id: "MSG-001",
            sender: "Tech Solutions Ltd",
            message: "We need an update on the website project.",
            date: "Sep 18, 2026",
            unread: true
        },
        {
            id: "MSG-002",
            sender: "Elijah Stephen",
            message: "The project is progressing well.",
            date: "Sep 18, 2026",
            unread: false
        },
        {
            id: "MSG-003",
            sender: "Bright Media",
            message: "Can we review the latest brand concepts?",
            date: "Sep 17, 2026",
            unread: true
        }
    ],

    notifications: [
        {
            id: "NOT-001",
            title: "New professional application",
            message: "Michael James submitted an application.",
            date: "Sep 18, 2026",
            read: false
        },
        {
            id: "NOT-002",
            title: "New application activity",
            message: "3 professional applications need attention.",
            date: "Sep 18, 2026",
            read: false
        },
        {
            id: "NOT-003",
            title: "Payment received",
            message: "Tech Solutions Ltd completed a payment.",
            date: "Sep 17, 2026",
            read: true
        }
    ],

    activity: [
        {
            id: "ACT-001",
            title: "Admin dashboard initialized",
            message: "VORVENA admin control center was opened.",
            date: "Sep 18, 2026"
        },
        {
            id: "ACT-002",
            title: "Payment received",
            message: "Payment received from Tech Solutions Ltd.",
            date: "Sep 17, 2026"
        },
        {
            id: "ACT-003",
            title: "Application submitted",
            message: "Michael James submitted a professional application.",
            date: "Sep 18, 2026"
        }
    ]
};


function load(key) {
    try {
        const value = localStorage.getItem(key);

        if (!value) {
            localStorage.setItem(key, JSON.stringify(defaultData[key.replace("vorvena", "").toLowerCase()] || []));
            return JSON.parse(localStorage.getItem(key));
        }

        return JSON.parse(value);
    } catch {
        return [];
    }
}


function save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}


function getProfessionals() {
    return load(STORAGE.professionals);
}

function getClients() {
    return load(STORAGE.clients);
}

function getApplications() {
    return load(STORAGE.applications);
}

function getProjects() {
    return load(STORAGE.projects);
}

function getPayments() {
    return load(STORAGE.payments);
}

function getPayouts() {
    return load(STORAGE.payouts);
}

function getMessages() {
    return load(STORAGE.messages);
}

function getNotifications() {
    return load(STORAGE.notifications);
}

function getActivity() {
    return load(STORAGE.activity);
}


function initializeStorage() {

    const mapping = [
        [STORAGE.professionals, defaultData.professionals],
        [STORAGE.clients, defaultData.clients],
        [STORAGE.applications, defaultData.applications],
        [STORAGE.projects, defaultData.projects],
        [STORAGE.payments, defaultData.payments],
        [STORAGE.payouts, defaultData.payouts],
        [STORAGE.messages, defaultData.messages],
        [STORAGE.notifications, defaultData.notifications],
        [STORAGE.activity, defaultData.activity]
    ];

    mapping.forEach(([key, value]) => {
        if (!localStorage.getItem(key)) {
            save(key, value);
        }
    });

    if (!localStorage.getItem(STORAGE.account)) {
        save(STORAGE.account, {
            phone: "+2348000000000",
            password: "admin123"
        });
    }
}


function formatMoney(amount) {
    return "₦" + Number(amount || 0).toLocaleString("en-NG");
}


function initials(name) {
    return name
        .split(" ")
        .map(word => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
}


function statusClass(status) {

    const value = String(status).toLowerCase();

    if (
        value.includes("paid") ||
        value.includes("completed") ||
        value.includes("verified") ||
        value.includes("active")
    ) {
        return "success";
    }

    if (
        value.includes("pending") ||
        value.includes("progress") ||
        value.includes("unverified")
    ) {
        return "warning";
    }

    if (
        value.includes("suspended") ||
        value.includes("cancelled") ||
        value.includes("rejected")
    ) {
        return "danger";
    }

    return "info";
}


function statusBadge(status) {
    return `<span class="status-badge ${statusClass(status)}">${status}</span>`;
}


function emptyState(message) {
    return `
        <div class="empty-state">
            <i class="fa-regular fa-folder-open"></i>
            <p>${message}</p>
        </div>
    `;
}


function showToast(message, type = "success") {

    const toast = $("#toast");
    const messageBox = $("#toastMessage");

    if (!toast || !messageBox) return;

    const icon = toast.querySelector("i");

    if (icon) {
        icon.className = type === "error"
            ? "fa-solid fa-circle-exclamation"
            : "fa-solid fa-circle-check";
    }

    messageBox.textContent = message;

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}


function addActivity(title, message) {

    const activities = getActivity();

    activities.unshift({
        id: "ACT-" + Date.now(),
        title,
        message,
        date: new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        })
    });

    save(STORAGE.activity, activities.slice(0, 30));

    renderActivity();
}


function renderDashboard() {

    const professionals = getProfessionals();
    const applications = getApplications();
    const projects = getProjects();
    const payouts = getPayouts();

    const verified = professionals.filter(
        professional => professional.status === "Verified"
    ).length;

    const online = professionals.filter(
        professional => professional.online && professional.accountStatus === "Active"
    ).length;

    const pendingApplications = applications.filter(
        application => application.status === "Pending"
    ).length;

    const activeProjects = projects.filter(
        project => project.status === "In Progress"
    ).length;

    const completedJobs = projects.filter(
        project => project.status === "Completed"
    ).length;

    const awaitingPayout = payouts
        .filter(payout => payout.status === "Pending")
        .reduce((sum, payout) => sum + Number(payout.amount), 0);

    $("#totalProfessionals").textContent = professionals.length;
    $("#verifiedProfessionalsCount").textContent = verified;
    $("#onlineProfessionals").textContent = online;
    $("#pendingApplications").textContent = pendingApplications;
    $("#activeProjectsCount").textContent = activeProjects;
    $("#completedJobsCount").textContent = completedJobs;
    $("#pendingVerificationCount").textContent = pendingApplications;
    $("#awaitingPayout").textContent = formatMoney(awaitingPayout);

    $("#currentDate").textContent = new Date().toLocaleDateString("en-NG", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const recentProjectsBody = $("#recentProjectsBody");

    recentProjectsBody.innerHTML = projects
        .slice(0, 5)
        .map(project => `
            <tr>
                <td>
                    <strong>${project.name}</strong>
                </td>
                <td>${project.client}</td>
                <td>${project.professional}</td>
                <td class="project-price">${formatMoney(project.amount)}</td>
                <td>${statusBadge(project.status)}</td>
            </tr>
        `)
        .join("");

    $("#dashboardPayoutList").innerHTML = payouts
        .slice(0, 4)
        .map(payout => `
            <div class="mini-payout">
                <div class="mini-payout-top">
                    <div>
                        <strong>${payout.professional}</strong>
                        <span>${payout.project}</span>
                    </div>
                    <strong class="amount">${formatMoney(payout.amount)}</strong>
                </div>
                <div style="margin-top:8px">
                    ${statusBadge(payout.status)}
                </div>
            </div>
        `)
        .join("");
}


function renderApplications() {

    const applications = getApplications();
    const search = ($("#applicationSearch")?.value || "").toLowerCase();

    const filtered = applications.filter(application => {

        const text = `
            ${application.name}
            ${application.profession}
            ${application.email}
            ${application.location}
        `.toLowerCase();

        return text.includes(search);
    });

    const pending = applications.filter(
        application => application.status === "Pending"
    ).length;

    $("#applicationCount").textContent = pending;
    $("#applicationNavCount").textContent = pending;

    if (!filtered.length) {
        $("#applicationsList").innerHTML = emptyState("No applications found.");
        return;
    }

    $("#applicationsList").innerHTML = filtered.map(application => `
        <article class="application-card">

            <div class="card-top">
                <div class="card-person">
                    <div class="card-avatar">${initials(application.name)}</div>

                    <div class="card-person-info">
                        <h4>${application.name}</h4>
                        <span>${application.profession}</span>
                    </div>
                </div>

                ${statusBadge(application.status)}
            </div>

            <div class="card-details">

                <div class="detail-row">
                    <span>Email</span>
                    <strong>${application.email}</strong>
                </div>

                <div class="detail-row">
                    <span>Location</span>
                    <strong>${application.location}</strong>
                </div>

                <div class="detail-row">
                    <span>Experience</span>
                    <strong>${application.experience}</strong>
                </div>

                <div class="detail-row">
                    <span>Applied</span>
                    <strong>${application.date}</strong>
                </div>

                <div class="detail-row">
                    <span>Skills</span>
                    <strong>${application.skills.join(", ")}</strong>
                </div>

            </div>

            <div class="card-actions">

                <button class="action-btn success"
                    data-action="approve-application"
                    data-id="${application.id}">
                    <i class="fa-solid fa-check"></i>
                    Approve
                </button>

                <button class="action-btn danger"
                    data-action="reject-application"
                    data-id="${application.id}">
                    <i class="fa-solid fa-xmark"></i>
                    Reject
                </button>

            </div>

        </article>
    `).join("");
}


function renderProfessionals() {

    const professionals = getProfessionals();

    const search = ($("#professionalSearch")?.value || "").toLowerCase();
    const filter = $("#professionalFilter")?.value || "all";

    const filtered = professionals.filter(professional => {

        const searchText = `
            ${professional.name}
            ${professional.profession}
            ${professional.email}
            ${professional.location}
        `.toLowerCase();

        const matchesSearch = searchText.includes(search);

        let matchesFilter = true;

        if (filter === "online") {
            matchesFilter = professional.online === true;
        }

        if (filter === "verified") {
            matchesFilter = professional.status === "Verified";
        }

        if (filter === "unverified") {
            matchesFilter = professional.status === "Unverified";
        }

        if (filter === "active") {
            matchesFilter = professional.accountStatus === "Active";
        }

        if (filter === "suspended") {
            matchesFilter = professional.accountStatus === "Suspended";
        }

        return matchesSearch && matchesFilter;
    });

    const table = $("#professionalsTable");

    if (!filtered.length) {
        table.innerHTML = `
            <tr>
                <td colspan="7">
                    ${emptyState("No professionals found.")}
                </td>
            </tr>
        `;
        return;
    }

    table.innerHTML = filtered.map(professional => {

        const suspendLabel =
            professional.accountStatus === "Suspended"
                ? "Reactivate"
                : "Suspend";

        const suspendClass =
            professional.accountStatus === "Suspended"
                ? "success"
                : "warning";

        const verifyLabel =
            professional.status === "Verified"
                ? "Unverify"
                : "Verify";

        return `
            <tr>

                <td>
                    <div class="table-name">
                        <div class="table-avatar">
                            ${initials(professional.name)}
                        </div>

                        <div>
                            <strong>${professional.name}</strong>
                            <small>${professional.email}</small>
                        </div>
                    </div>
                </td>

                <td>${professional.profession}</td>

                <td>${professional.location}</td>

                <td>${professional.jobs}</td>

                <td>
                    ${statusBadge(professional.status)}
                    ${professional.online
                        ? `<span class="online-badge"><span class="online-dot"></span> Online</span>`
                        : ""}
                </td>

                <td>
                    ${statusBadge(professional.accountStatus)}
                </td>

                <td>
                    <div class="card-actions">

                        <button class="action-btn"
                            title="Edit"
                            data-action="edit-professional"
                            data-id="${professional.id}">
                            <i class="fa-solid fa-pen"></i>
                        </button>

                        <button class="action-btn ${suspendClass}"
                            title="${suspendLabel}"
                            data-action="toggle-professional"
                            data-id="${professional.id}">
                            <i class="fa-solid fa-ban"></i>
                        </button>

                        <button class="action-btn success"
                            title="${verifyLabel}"
                            data-action="toggle-verification"
                            data-id="${professional.id}">
                            <i class="fa-solid fa-circle-check"></i>
                        </button>

                        <button class="action-btn danger"
                            title="Delete"
                            data-action="delete-professional"
                            data-id="${professional.id}">
                            <i class="fa-solid fa-trash"></i>
                        </button>

                    </div>
                </td>

            </tr>
        `;
    }).join("");
}


function renderClients() {

    const clients = getClients();
    const search = ($("#clientSearch")?.value || "").toLowerCase();

    const filtered = clients.filter(client => {

        const text = `
            ${client.name}
            ${client.email}
            ${client.location}
        `.toLowerCase();

        return text.includes(search);
    });

    if (!filtered.length) {
        $("#clientsList").innerHTML = emptyState("No clients found.");
        return;
    }

    $("#clientsList").innerHTML = filtered.map(client => {

        const suspendLabel =
            client.status === "Suspended"
                ? "Reactivate"
                : "Suspend";

        return `
            <article class="client-card">

                <div class="card-top">

                    <div class="card-person">
                        <div class="card-avatar">
                            ${initials(client.name)}
                        </div>

                        <div class="card-person-info">
                            <h4>${client.name}</h4>
                            <span>${client.email}</span>
                        </div>
                    </div>

                    ${statusBadge(client.status)}

                </div>

                <div class="card-details">

                    <div class="detail-row">
                        <span>Location</span>
                        <strong>${client.location}</strong>
                    </div>

                    <div class="detail-row">
                        <span>Projects</span>
                        <strong>${client.projects}</strong>
                    </div>

                    <div class="detail-row">
                        <span>Client ID</span>
                        <strong>${client.id}</strong>
                    </div>

                </div>

                <div class="card-actions">

                    <button class="action-btn"
                        data-action="edit-client"
                        data-id="${client.id}">
                        <i class="fa-solid fa-pen"></i>
                        Edit
                    </button>

                    <button class="action-btn warning"
                        data-action="toggle-client"
                        data-id="${client.id}">
                        <i class="fa-solid fa-ban"></i>
                        ${suspendLabel}
                    </button>

                    <button class="action-btn danger"
                        data-action="delete-client"
                        data-id="${client.id}">
                        <i class="fa-solid fa-trash"></i>
                        Delete
                    </button>

                </div>

            </article>
        `;
    }).join("");
}


function renderProjects() {

    const projects = getProjects();
    const filter = $("#projectFilter")?.value || "all";

    const filtered = projects.filter(project => {

        if (filter === "all") return true;

        return project.status.toLowerCase() === filter;
    });

    if (!filtered.length) {
        $("#projectsList").innerHTML = emptyState("No projects found.");
        return;
    }

    $("#projectsList").innerHTML = filtered.map(project => `
        <article class="project-card">

            <div class="card-top">

                <div class="card-person">
                    <div class="card-avatar">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>

                    <div class="card-person-info">
                        <h4>${project.name}</h4>
                        <span>${project.id}</span>
                    </div>
                </div>

                ${statusBadge(project.status)}

            </div>

            <div class="card-details">

                <div class="detail-row">
                    <span>Client</span>
                    <strong>${project.client}</strong>
                </div>

                <div class="detail-row">
                    <span>Professional</span>
                    <strong>${project.professional}</strong>
                </div>

                <div class="detail-row">
                    <span>Amount</span>
                    <strong class="project-price">${formatMoney(project.amount)}</strong>
                </div>

                <div class="detail-row">
                    <span>Date</span>
                    <strong>${project.date}</strong>
                </div>

            </div>

        </article>
    `).join("");
}


function renderMessages() {

    const messages = getMessages();

    const unread = messages.filter(message => message.unread).length;

    $("#messageCount").textContent = unread;
    $("#messageNavCount").textContent = unread;

    $("#messagesList").innerHTML = messages.map(message => `
        <article
            class="message-item ${message.unread ? "unread" : ""}"
            data-action="read-message"
            data-id="${message.id}"
        >

            <div class="message-avatar">
                ${initials(message.sender)}
            </div>

            <div class="message-content">

                <div class="message-header">
                    <strong>${message.sender}</strong>
                    <span>${message.date}</span>
                </div>

                <p>${message.message}</p>

            </div>

        </article>
    `).join("");
}


function renderPayments() {

    const payments = getPayments();

    const paidPayments = payments.filter(
        payment => payment.status === "Paid"
    );

    const total = paidPayments.reduce(
        (sum, payment) => sum + Number(payment.amount),
        0
    );

    const revenue = total * 0.15;
    const professional = total * 0.85;

    const pending = payments
        .filter(payment => payment.status === "Pending")
        .reduce((sum, payment) => sum + Number(payment.amount), 0);

    $("#totalPaymentVolume").textContent = formatMoney(total);
    $("#vorvenaRevenue").textContent = formatMoney(revenue);
    $("#professionalEarnings").textContent = formatMoney(professional);
    $("#pendingPaymentAmount").textContent = formatMoney(pending);

    $("#paymentsTableBody").innerHTML = payments.map(payment => `
        <tr>

            <td>
                <strong>${payment.project}</strong>
                <small style="display:block;color:var(--muted);margin-top:3px">
                    ${payment.id}
                </small>
            </td>

            <td>${payment.client}</td>

            <td>${payment.professional}</td>

            <td class="project-price">${formatMoney(payment.amount)}</td>

            <td>${statusBadge(payment.status)}</td>

            <td>${payment.date}</td>

        </tr>
    `).join("");
}


function renderPayouts() {

    const payouts = getPayouts();

    const pending = payouts.filter(
        payout => payout.status === "Pending"
    ).length;

    $("#payoutNavCount").textContent = pending;

    $("#payoutsList").innerHTML = payouts.map(payout => `
        <article class="payout-card">

            <div class="card-top">

                <div class="card-person">
                    <div class="card-avatar">
                        ${initials(payout.professional)}
                    </div>

                    <div class="card-person-info">
                        <h4>${payout.professional}</h4>
                        <span>${payout.project}</span>
                    </div>
                </div>

                ${statusBadge(payout.status)}

            </div>

            <div class="payout-amount">
                ${formatMoney(payout.amount)}
            </div>

            <div class="card-details">

                <div class="detail-row">
                    <span>Payout ID</span>
                    <strong>${payout.id}</strong>
                </div>

                <div class="detail-row">
                    <span>Date</span>
                    <strong>${payout.date}</strong>
                </div>

            </div>

            <div class="card-actions">

                ${
                    payout.status === "Pending"
                    ? `
                        <button class="action-btn success"
                            data-action="process-payout"
                            data-id="${payout.id}">
                            <i class="fa-solid fa-money-bill-transfer"></i>
                            Process Payout
                        </button>
                    `
                    : `
                        <button class="action-btn" disabled>
                            <i class="fa-solid fa-check"></i>
                            Already Paid
                        </button>
                    `
                }

            </div>

        </article>
    `).join("");
}


function renderNotifications() {

    const notifications = getNotifications();

    const unread = notifications.filter(
        notification => !notification.read
    ).length;

    $("#notificationNavCount").textContent = unread;

    const dot = $("#notificationDot");

    if (dot) {
        dot.style.display = unread ? "block" : "none";
    }

    const container = $(".notification-list");

    container.innerHTML = notifications.map(notification => `
        <article class="notification-item ${!notification.read ? "unread" : ""}">

            <div class="notification-icon">
                <i class="fa-solid fa-bell"></i>
            </div>

            <div class="notification-content">

                <strong>${notification.title}</strong>

                <p>${notification.message}</p>

                <span>${notification.date}</span>

            </div>

            ${
                !notification.read
                ? `
                    <button class="action-btn"
                        data-action="read-notification"
                        data-id="${notification.id}">
                        Mark read
                    </button>
                `
                : ""
            }

        </article>
    `).join("");
}


function renderActivity() {

    const activities = getActivity();

    $("#activityLog").innerHTML = activities.map(activity => `
        <article class="activity-item">

            <div class="activity-icon">
                <i class="fa-solid fa-clock-rotate-left"></i>
            </div>

            <div class="activity-content">

                <strong>${activity.title}</strong>

                <p>${activity.message}</p>

                <span>${activity.date}</span>

            </div>

        </article>
    `).join("");
}


function renderAll() {
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
}


function openProfessionalEdit(id) {

    const professional = getProfessionals().find(
        item => item.id === id
    );

    if (!professional) return;

    $("#editId").value = professional.id;
    $("#editName").value = professional.name;
    $("#editProfession").value = professional.profession;
    $("#editEmail").value = professional.email;
    $("#editLocation").value = professional.location;
    $("#editJobs").value = professional.jobs;
    $("#editStatus").value = professional.accountStatus;

    $("#editModal").classList.add("active");
}


function openClientEdit(id) {

    const client = getClients().find(
        item => item.id === id
    );

    if (!client) return;

    $("#editClientId").value = client.id;
    $("#editClientName").value = client.name;
    $("#editClientEmail").value = client.email;
    $("#editClientLocation").value = client.location;
    $("#editClientProjects").value = client.projects;
    $("#editClientStatus").value = client.status;

    $("#clientEditModal").classList.add("active");
}


function openDeleteModal(id, type) {

    let item;

    if (type === "professional") {
        item = getProfessionals().find(person => person.id === id);
    }

    if (type === "client") {
        item = getClients().find(client => client.id === id);
    }

    if (!item) return;

    $("#deleteTargetId").value = id;
    $("#deleteTargetType").value = type;
    $("#deleteTargetName").textContent = item.name;

    $("#deleteModalTitle").textContent =
        type === "professional"
            ? "Delete Professional"
            : "Delete Client";

    $("#deleteModal").classList.add("active");
}


function openSuspendModal(id, type) {

    let item;

    if (type === "professional") {
        item = getProfessionals().find(person => person.id === id);
    }

    if (type === "client") {
        item = getClients().find(client => client.id === id);
    }

    if (!item) return;

    const suspended = item.accountStatus === "Suspended" ||
        item.status === "Suspended";

    $("#suspendTargetId").value = id;
    $("#suspendTargetType").value = type;
    $("#suspendTargetName").textContent = item.name;

    $("#suspendActionText").textContent =
        suspended ? "reactivate " : "suspend ";

    $("#suspendModalTitle").textContent =
        suspended ? "Reactivate Account" : "Suspend Account";

    $("#confirmSuspend").textContent =
        suspended ? "Reactivate" : "Suspend";

    $("#confirmSuspend").className =
        suspended ? "primary-btn" : "warning-btn";

    $("#suspendModal").classList.add("active");
}


function openPayoutModal(id) {

    const payout = getPayouts().find(
        item => item.id === id
    );

    if (!payout) return;

    $("#payoutId").value = payout.id;
    $("#payoutProfessional").textContent = payout.professional;
    $("#payoutAmount").textContent = formatMoney(payout.amount);

    $("#payoutModal").classList.add("active");
}


function closeModals() {
    $$(".modal-overlay").forEach(modal => {
        modal.classList.remove("active");
    });
}


function approveApplication(id) {

    const applications = getApplications();

    const application = applications.find(
        item => item.id === id
    );

    if (!application) return;

    application.status = "Approved";

    save(STORAGE.applications, applications);

    const professionals = getProfessionals();

    const existing = professionals.find(
        professional =>
            professional.email.toLowerCase() === application.email.toLowerCase()
    );

    if (!existing) {

        professionals.push({
            id: "PRO-" + String(Date.now()).slice(-5),
            name: application.name,
            profession: application.profession,
            email: application.email,
            location: application.location,
            jobs: 0,
            status: "Verified",
            accountStatus: "Active",
            online: false,
            joined: new Date().toLocaleDateString("en-NG", {
                month: "short",
                year: "numeric"
            })
        });

        save(STORAGE.professionals, professionals);
    }

    addActivity(
        "Professional application approved",
        `${application.name} was approved and added to the professional community.`
    );

    showToast(`${application.name} approved successfully.`);

    renderAll();
}


function rejectApplication(id) {

    const applications = getApplications();

    const application = applications.find(
        item => item.id === id
    );

    if (!application) return;

    application.status = "Rejected";

    save(STORAGE.applications, applications);

    addActivity(
        "Application rejected",
        `${application.name}'s professional application was rejected.`
    );

    showToast(`${application.name}'s application was rejected.`);

    renderAll();
}


function toggleProfessionalVerification(id) {

    const professionals = getProfessionals();

    const professional = professionals.find(
        item => item.id === id
    );

    if (!professional) return;

    if (professional.status === "Verified") {
        professional.status = "Unverified";

        addActivity(
            "Professional verification removed",
            `${professional.name} was changed to Unverified.`
        );

        showToast(`${professional.name} is now unverified.`);
    } else {
        professional.status = "Verified";

        addActivity(
            "Professional verified",
            `${professional.name} received a verified status.`
        );

        showToast(`${professional.name} is now verified.`);
    }

    save(STORAGE.professionals, professionals);

    renderAll();
}


function toggleProfessionalAccount(id) {

    const professionals = getProfessionals();

    const professional = professionals.find(
        item => item.id === id
    );

    if (!professional) return;

    const wasSuspended = professional.accountStatus === "Suspended";

    professional.accountStatus =
        wasSuspended ? "Active" : "Suspended";

    save(STORAGE.professionals, professionals);

    addActivity(
        wasSuspended
            ? "Professional account reactivated"
            : "Professional account suspended",
        `${professional.name}'s account was ${wasSuspended ? "reactivated" : "suspended"}.`
    );

    showToast(
        `${professional.name} has been ${wasSuspended ? "reactivated" : "suspended"}.`
    );

    renderAll();
}


function toggleClientAccount(id) {

    const clients = getClients();

    const client = clients.find(
        item => item.id === id
    );

    if (!client) return;

    const suspended = client.status === "Suspended";

    client.status = suspended ? "Active" : "Suspended";

    save(STORAGE.clients, clients);

    addActivity(
        suspended
            ? "Client account reactivated"
            : "Client account suspended",
        `${client.name}'s account was ${suspended ? "reactivated" : "suspended"}.`
    );

    showToast(
        `${client.name} has been ${suspended ? "reactivated" : "suspended"}.`
    );

    renderAll();
}


function deleteRecord() {

    const id = $("#deleteTargetId").value;
    const type = $("#deleteTargetType").value;

    if (type === "professional") {

        const professionals = getProfessionals();

        const person = professionals.find(
            professional => professional.id === id
        );

        save(
            STORAGE.professionals,
            professionals.filter(
                professional => professional.id !== id
            )
        );

        addActivity(
            "Professional deleted",
            `${person?.name || "Professional"} was removed from VORVENA.`
        );

        showToast("Professional deleted successfully.");
    }

    if (type === "client") {

        const clients = getClients();

        const client = clients.find(
            item => item.id === id
        );

        save(
            STORAGE.clients,
            clients.filter(item => item.id !== id)
        );

        addActivity(
            "Client deleted",
            `${client?.name || "Client"} was removed from VORVENA.`
        );

        showToast("Client deleted successfully.");
    }

    closeModals();
    renderAll();
}


function confirmSuspendAction() {

    const id = $("#suspendTargetId").value;
    const type = $("#suspendTargetType").value;

    if (type === "professional") {
        toggleProfessionalAccount(id);
    }

    if (type === "client") {
        toggleClientAccount(id);
    }

    closeModals();
}


function processPayout() {

    const id = $("#payoutId").value;

    const payouts = getPayouts();

    const payout = payouts.find(
        item => item.id === id
    );

    if (!payout) return;

    payout.status = "Paid";

    save(STORAGE.payouts, payouts);

    addActivity(
        "Professional payout processed",
        `${formatMoney(payout.amount)} was marked as paid to ${payout.professional}.`
    );

    showToast(
        `${formatMoney(payout.amount)} payout processed successfully.`
    );

    closeModals();
    renderAll();
}


function saveProfessional(event) {

    event.preventDefault();

    const id = $("#editId").value;

    const professionals = getProfessionals();

    const professional = professionals.find(
        item => item.id === id
    );

    if (!professional) return;

    professional.name = $("#editName").value.trim();
    professional.profession = $("#editProfession").value.trim();
    professional.email = $("#editEmail").value.trim();
    professional.location = $("#editLocation").value.trim();
    professional.jobs = Number($("#editJobs").value);
    professional.accountStatus = $("#editStatus").value;

    save(STORAGE.professionals, professionals);

    addActivity(
        "Professional profile updated",
        `${professional.name}'s admin profile information was updated.`
    );

    showToast(`${professional.name} updated successfully.`);

    closeModals();
    renderAll();
}


function saveClient(event) {

    event.preventDefault();

    const id = $("#editClientId").value;

    const clients = getClients();

    const client = clients.find(
        item => item.id === id
    );

    if (!client) return;

    client.name = $("#editClientName").value.trim();
    client.email = $("#editClientEmail").value.trim();
    client.location = $("#editClientLocation").value.trim();
    client.projects = Number($("#editClientProjects").value);
    client.status = $("#editClientStatus").value;

    save(STORAGE.clients, clients);

    addActivity(
        "Client profile updated",
        `${client.name}'s admin profile information was updated.`
    );

    showToast(`${client.name} updated successfully.`);

    closeModals();
    renderAll();
}


function markMessageRead(id) {

    const messages = getMessages();

    const message = messages.find(
        item => item.id === id
    );

    if (!message) return;

    message.unread = false;

    save(STORAGE.messages, messages);

    renderMessages();
}


function markNotificationRead(id) {

    const notifications = getNotifications();

    const notification = notifications.find(
        item => item.id === id
    );

    if (!notification) return;

    notification.read = true;

    save(STORAGE.notifications, notifications);

    renderNotifications();
}


function markAllNotificationsRead() {

    const notifications = getNotifications();

    notifications.forEach(
        notification => notification.read = true
    );

    save(STORAGE.notifications, notifications);

    addActivity(
        "Notifications marked as read",
        "All administrator notifications were marked as read."
    );

    showToast("All notifications marked as read.");

    renderAll();
}


function initializeNavigation() {

    const links = $$(".nav-link");

    links.forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const sectionId = link.dataset.section;
            const section = document.getElementById(sectionId);

            if (!section) return;

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            history.replaceState(null, "", `#${sectionId}`);

            links.forEach(item => item.classList.remove("active"));

            link.classList.add("active");

            $("#pageTitle").textContent =
                link.dataset.title || "Dashboard";

            closeSidebar();
        });
    });


    const sections = $$(".section");

    const observer = new IntersectionObserver(
        entries => {

            const visible = entries
                .filter(entry => entry.isIntersecting)
                .sort((a, b) =>
                    b.intersectionRatio - a.intersectionRatio
                )[0];

            if (!visible) return;

            const current = visible.target.id;

            links.forEach(link => {
                link.classList.toggle(
                    "active",
                    link.dataset.section === current
                );
            });

            const activeLink = links.find(
                link => link.dataset.section === current
            );

            if (activeLink) {
                $("#pageTitle").textContent =
                    activeLink.dataset.title;
            }

        },
        {
            root: null,
            threshold: [0.15, 0.35, 0.6]
        }
    );

    sections.forEach(section => observer.observe(section));


    if (window.location.hash) {

        const id = window.location.hash.substring(1);
        const section = document.getElementById(id);

        if (section) {
            setTimeout(() => {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 200);
        }
    }
}


function openSidebar() {
    $("#sidebar")?.classList.add("open");
    $("#sidebarOverlay")?.classList.add("active");
}


function closeSidebar() {
    $("#sidebar")?.classList.remove("open");
    $("#sidebarOverlay")?.classList.remove("active");
}


function initializeMobileMenu() {

    $("#menuBtn")?.addEventListener("click", openSidebar);

    $("#sidebarOverlay")?.addEventListener(
        "click",
        closeSidebar
    );
}


function initializeTheme() {

    const savedTheme = localStorage.getItem(STORAGE.theme);

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    updateThemeIcon();

    $("#themeToggle")?.addEventListener(
        "click",
        toggleTheme
    );

    $("#settingsThemeBtn")?.addEventListener(
        "click",
        toggleTheme
    );
}


function toggleTheme() {

    document.body.classList.toggle("dark-theme");

    const dark = document.body.classList.contains("dark-theme");

    localStorage.setItem(
        STORAGE.theme,
        dark ? "dark" : "light"
    );

    updateThemeIcon();

    showToast(
        dark
            ? "Dark mode enabled."
            : "Light mode enabled."
    );
}


function updateThemeIcon() {

    const button = $("#themeToggle");

    if (!button) return;

    const icon = button.querySelector("i");

    if (!icon) return;

    const dark = document.body.classList.contains("dark-theme");

    icon.className = dark
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";
}


function initializeSearchAndFilters() {

    $("#applicationSearch")?.addEventListener(
        "input",
        renderApplications
    );

    $("#professionalSearch")?.addEventListener(
        "input",
        renderProfessionals
    );

    $("#professionalFilter")?.addEventListener(
        "change",
        renderProfessionals
    );

    $("#clientSearch")?.addEventListener(
        "input",
        renderClients
    );

    $("#projectFilter")?.addEventListener(
        "change",
        renderProjects
    );
}


function initializeModalEvents() {

    $("#closeEditModal")?.addEventListener(
        "click",
        closeModals
    );

    $("#cancelEdit")?.addEventListener(
        "click",
        closeModals
    );

    $("#closeClientEditModal")?.addEventListener(
        "click",
        closeModals
    );

    $("#cancelClientEdit")?.addEventListener(
        "click",
        closeModals
    );

    $("#closePayoutModal")?.addEventListener(
        "click",
        closeModals
    );

    $("#cancelPayout")?.addEventListener(
        "click",
        closeModals
    );

    $("#cancelDelete")?.addEventListener(
        "click",
        closeModals
    );

    $("#cancelSuspend")?.addEventListener(
        "click",
        closeModals
    );

    $("#confirmDelete")?.addEventListener(
        "click",
        deleteRecord
    );

    $("#confirmSuspend")?.addEventListener(
        "click",
        confirmSuspendAction
    );

    $("#confirmPayout")?.addEventListener(
        "click",
        processPayout
    );

    $("#editProfessionalForm")?.addEventListener(
        "submit",
        saveProfessional
    );

    $("#clientEditForm")?.addEventListener(
        "submit",
        saveClient
    );

    $$(".modal-overlay").forEach(modal => {

        modal.addEventListener("click", event => {

            if (event.target === modal) {
                closeModals();
            }

        });
    });
}


function initializeActionDelegation() {

    document.addEventListener("click", event => {

        const button = event.target.closest("[data-action]");

        if (!button) return;

        const action = button.dataset.action;
        const id = button.dataset.id;

        if (action === "approve-application") {
            approveApplication(id);
        }

        if (action === "reject-application") {
            rejectApplication(id);
        }

        if (action === "edit-professional") {
            openProfessionalEdit(id);
        }

        if (action === "toggle-professional") {
            openSuspendModal(id, "professional");
        }

        if (action === "toggle-verification") {
            toggleProfessionalVerification(id);
        }

        if (action === "delete-professional") {
            openDeleteModal(id, "professional");
        }

        if (action === "edit-client") {
            openClientEdit(id);
        }

        if (action === "toggle-client") {
            openSuspendModal(id, "client");
        }

        if (action === "delete-client") {
            openDeleteModal(id, "client");
        }

        if (action === "process-payout") {
            openPayoutModal(id);
        }

        if (action === "read-message") {
            markMessageRead(id);
        }

        if (action === "read-notification") {
            markNotificationRead(id);
        }
    });
}


function initializeNotifications() {

    $("#notificationBtn")?.addEventListener("click", () => {

        const section = $("#notifications");

        section?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        history.replaceState(
            null,
            "",
            "#notifications"
        );
    });

    $("#markNotificationsRead")?.addEventListener(
        "click",
        markAllNotificationsRead
    );
}


function initializeReports() {

    $$(".report-btn").forEach(button => {

        button.addEventListener("click", () => {

            const type = button.dataset.report;

            const names = {
                community: "Community report",
                financial: "Financial report",
                projects: "Projects report"
            };

            addActivity(
                "Report generated",
                `${names[type]} was generated from the admin dashboard.`
            );

            showToast(`${names[type]} generated successfully.`);
        });
    });
}


function initializeSupport() {

    $("#supportBtn")?.addEventListener("click", () => {

        showToast(
            "Admin support center is ready for backend integration."
        );
    });
}


function initializeLogout() {

    $("#logoutBtn")?.addEventListener("click", () => {

        const confirmed = window.confirm(
            "Are you sure you want to logout from the VORVENA Admin Center?"
        );

        if (!confirmed) return;

        localStorage.setItem(
            STORAGE.loggedIn,
            "false"
        );

        addActivity(
            "Admin logout",
            "Administrator logged out of the dashboard."
        );

        showToast("Admin session ended.");
    });
}


function initializeSecurity() {

    $("#openSecurityBtn")?.addEventListener(
        "click",
        () => {
            $("#securityModal")?.classList.add("active");
        }
    );

    $("#closeSecurityModal")?.addEventListener(
        "click",
        closeModals
    );

    $("#cancelSecurity")?.addEventListener(
        "click",
        closeModals
    );


    $$(".password-toggle").forEach(button => {

        button.addEventListener("click", () => {

            const target = document.getElementById(
                button.dataset.target
            );

            if (!target) return;

            const icon = button.querySelector("i");

            if (target.type === "password") {

                target.type = "text";

                icon.className =
                    "fa-solid fa-eye-slash";

            } else {

                target.type = "password";

                icon.className =
                    "fa-solid fa-eye";
            }
        });
    });


    $("#securityForm")?.addEventListener(
        "submit",
        saveSecurity
    );
}


function saveSecurity(event) {

    event.preventDefault();

    const currentPassword =
        $("#currentAdminPassword").value;

    const newPhone =
        $("#newAdminPhone").value.trim();

    const newPassword =
        $("#newAdminPassword").value;

    const confirmPassword =
        $("#confirmAdminPassword").value;

    const account =
        JSON.parse(
            localStorage.getItem(STORAGE.account)
        );

    if (currentPassword !== account.password) {

        showToast(
            "Current admin password is incorrect.",
            "error"
        );

        return;
    }

    if (
        newPassword &&
        newPassword !== confirmPassword
    ) {

        showToast(
            "New passwords do not match.",
            "error"
        );

        return;
    }

    if (newPhone) {
        account.phone = newPhone;
    }

    if (newPassword) {
        account.password = newPassword;
    }

    save(STORAGE.account, account);

    addActivity(
        "Admin security updated",
        "Administrator security settings were updated."
    );

    showToast("Admin security settings saved.");

    $("#securityForm").reset();

    closeModals();
}


document.addEventListener("DOMContentLoaded", () => {

    initializeStorage();

    initializeTheme();

    initializeNavigation();

    initializeMobileMenu();

    initializeSearchAndFilters();

    initializeModalEvents();

    initializeActionDelegation();

    initializeNotifications();

    initializeReports();

    initializeSupport();

    initializeLogout();

    initializeSecurity();

    renderAll();

});