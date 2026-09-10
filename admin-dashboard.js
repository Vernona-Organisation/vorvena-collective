const adminData = {

    professionalsOnline: 24,

    professionals: [
        {
            name: "David Williams",
            profession: "Web Developer",
            verified: true,
            online: true,
            completedJobs: 8
        },

        {
            name: "Sarah Creative",
            profession: "Graphic Designer",
            verified: true,
            online: true,
            completedJobs: 12
        },

        {
            name: "Michael Adams",
            profession: "Social Media Manager",
            verified: false,
            online: false,
            completedJobs: 4
        }
    ],

    projects: [

        {
            id: "VOR-001",
            title: "Business Website Design",
            client: "Bright Solutions",
            professional: "David Williams",
            price: 150000,
            status: "awaiting_payout",
            professionalShare: 127500,
            vorvenaFee: 22500
        },

        {
            id: "VOR-002",
            title: "Brand Logo Design",
            client: "Sarah Creative",
            professional: "Sarah Creative",
            price: 80000,
            status: "submitted",
            professionalShare: 68000,
            vorvenaFee: 12000
        }

    ]

};


/* =========================================================
   DOM
   ========================================================= */

const body = document.body;

const sidebar = document.getElementById("sidebar");

const menuBtn = document.getElementById("menuBtn");

const themeToggle = document.getElementById("themeToggle");

const settingsThemeBtn =
    document.getElementById("settingsThemeBtn");

const navLinks =
    document.querySelectorAll(".nav-link");

const sections =
    document.querySelectorAll(".section");

const pageTitle =
    document.getElementById("pageTitle");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");


/* =========================================================
   PAGE TITLES
   ========================================================= */

const pageTitles = {

    dashboard: "Admin Dashboard",

    applications: "Professional Applications",

    professionals: "Professional Management",

    clients: "Clients",

    projects: "Projects",

    messages: "Workspace Messages",

    payments: "Payments",

    payouts: "Awaiting Payout",

    notifications: "Notifications",

    activity: "Activity Log",

    settings: "Admin Settings"

};


/* =========================================================
   NAVIGATION
   ========================================================= */

navLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target =
            this.dataset.section;

        showSection(target);

        if (window.innerWidth <= 768) {
            sidebar.classList.remove("open");
        }

    });

});


function showSection(sectionName) {

    navLinks.forEach(link => {

        link.classList.toggle(
            "active",
            link.dataset.section === sectionName
        );

    });


    sections.forEach(section => {

        section.classList.remove(
            "active-section"
        );

    });


    const selectedSection =
        document.getElementById(sectionName);

    if (selectedSection) {

        selectedSection.classList.add(
            "active-section"
        );

    }


    pageTitle.textContent =
        pageTitles[sectionName] ||
        "Admin Dashboard";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   DASHBOARD QUICK LINKS
   ========================================================= */

document.querySelectorAll("[data-target]")
    .forEach(button => {

        button.addEventListener("click", function() {

            showSection(this.dataset.target);

        });

    });


/* =========================================================
   MOBILE SIDEBAR
   ========================================================= */

menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("open");

});


document.addEventListener("click", event => {

    if (
        window.innerWidth <= 768 &&
        sidebar.classList.contains("open") &&
        !sidebar.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {

        sidebar.classList.remove("open");

    }

});


/* =========================================================
   DARK / LIGHT THEME
   ========================================================= */

function updateThemeIcon() {

    const icon =
        themeToggle.querySelector("i");

    if (body.classList.contains("dark-theme")) {

        icon.className =
            "fa-solid fa-sun";

        themeToggle.title =
            "Switch to light theme";

    } else {

        icon.className =
            "fa-solid fa-moon";

        themeToggle.title =
            "Switch to dark theme";

    }

}


function toggleTheme() {

    body.classList.toggle("dark-theme");

    const darkMode =
        body.classList.contains("dark-theme");

    localStorage.setItem(
        "vorvenaAdminTheme",
        darkMode ? "dark" : "light"
    );

    updateThemeIcon();

    showToast(
        darkMode
            ? "Dark theme enabled."
            : "Light theme enabled."
    );

}


themeToggle.addEventListener(
    "click",
    toggleTheme
);


settingsThemeBtn.addEventListener(
    "click",
    toggleTheme
);


/* Load saved theme */

const savedTheme =
    localStorage.getItem(
        "vorvenaAdminTheme"
    );


if (savedTheme === "dark") {

    body.classList.add("dark-theme");

}


updateThemeIcon();


/* =========================================================
   DATE
   ========================================================= */

const currentDate =
    document.getElementById("currentDate");


function updateDate() {

    const now = new Date();

    currentDate.textContent =
        now.toLocaleDateString(
            "en-NG",
            {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric"
            }
        );

}


updateDate();


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer;


function showToast(message) {

    toastMessage.textContent =
        message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

}


/* =========================================================
   PROFESSIONAL SEARCH
   ========================================================= */

const professionalSearch =
    document.getElementById(
        "professionalSearch"
    );


const professionalFilter =
    document.getElementById(
        "professionalFilter"
    );


function filterProfessionals() {

    const search =
        professionalSearch.value
            .toLowerCase()
            .trim();

    const filter =
        professionalFilter.value;

    const cards =
        document.querySelectorAll(
            ".professional-card"
        );


    cards.forEach(card => {

        const name =
            card.dataset.name
                .toLowerCase();

        const status =
            card.dataset.status;

        const verified =
            card.dataset.verified === "true";


        const matchesSearch =
            name.includes(search);


        let matchesFilter = true;


        if (filter === "verified") {

            matchesFilter = verified;

        }


        if (filter === "online") {

            matchesFilter =
                status === "online";

        }


        if (filter === "offline") {

            matchesFilter =
                status === "offline";

        }


        if (filter === "suspended") {

            matchesFilter =
                card.dataset.suspended === "true";

        }


        card.style.display =
            matchesSearch && matchesFilter
                ? ""
                : "none";

    });

}


professionalSearch.addEventListener(
    "input",
    filterProfessionals
);


professionalFilter.addEventListener(
    "change",
    filterProfessionals
);


/* =========================================================
   EDIT PROFESSIONAL
   ========================================================= */

const editModal =
    document.getElementById("editModal");

const closeEditModal =
    document.getElementById("closeEditModal");

const cancelEdit =
    document.getElementById("cancelEdit");

const editForm =
    document.getElementById(
        "editProfessionalForm"
    );

const editName =
    document.getElementById("editName");

const editProfession =
    document.getElementById(
        "editProfession"
    );

const editStatus =
    document.getElementById("editStatus");


let selectedProfessionalCard = null;


document.querySelectorAll(".edit-professional")
    .forEach(button => {

        button.addEventListener(
            "click",
            function() {

                selectedProfessionalCard =
                    this.closest(
                        ".professional-card"
                    );


                const name =
                    selectedProfessionalCard
                        .dataset.name;


                const title =
                    selectedProfessionalCard
                        .querySelector(
                            ".professional-title h3"
                        );


                const profession =
                    selectedProfessionalCard
                        .querySelector(
                            ".professional-title > span"
                        );


                editName.value = name;

                editProfession.value =
                    profession.textContent;

                editStatus.value =
                    selectedProfessionalCard
                        .dataset.suspended === "true"
                        ? "suspended"
                        : "active";


                editModal.classList.add(
                    "show"
                );

            }
        );

    });


function closeEdit() {

    editModal.classList.remove(
        "show"
    );

    selectedProfessionalCard = null;

}


closeEditModal.addEventListener(
    "click",
    closeEdit
);


cancelEdit.addEventListener(
    "click",
    closeEdit
);


editModal.addEventListener(
    "click",
    event => {

        if (event.target === editModal) {
            closeEdit();
        }

    }
);


editForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        if (!selectedProfessionalCard) {
            return;
        }


        const name =
            editName.value.trim();


        const profession =
            editProfession.value.trim();


        const status =
            editStatus.value;


        selectedProfessionalCard
            .dataset.name = name;


        selectedProfessionalCard
            .dataset.suspended =
            status === "suspended"
                ? "true"
                : "false";


        const title =
            selectedProfessionalCard
                .querySelector(
                    ".professional-title h3"
                );


        const professionElement =
            selectedProfessionalCard
                .querySelector(
                    ".professional-title > span"
                );


        title.innerHTML =
            name +
            (
                selectedProfessionalCard
                    .dataset.verified === "true"
                    ? `
                        <span class="verified-badge">
                            <i class="fa-solid fa-check"></i>
                        </span>
                    `
                    : ""
            );


        professionElement.textContent =
            profession;


        const statusElement =
            selectedProfessionalCard
                .querySelector(
                    ".professional-status"
                );


        if (status === "suspended") {

            statusElement.className =
                "professional-status offline-status";

            statusElement.innerHTML =
                `
                    <i class="fa-solid fa-circle"></i>
                    Suspended
                `;

        } else {

            const isOnline =
                selectedProfessionalCard
                    .dataset.status === "online";


            statusElement.className =
                isOnline
                    ? "professional-status online-status"
                    : "professional-status offline-status";


            statusElement.innerHTML =
                isOnline
                    ? `
                        <i class="fa-solid fa-circle"></i>
                        Online now
                    `
                    : `
                        <i class="fa-solid fa-circle"></i>
                        Offline
                    `;

        }


        closeEdit();

        showToast(
            `${name}'s profile was updated.`
        );

    }
);


/* =========================================================
   VERIFY PROFESSIONAL
   ========================================================= */

document.querySelectorAll(
    ".verify-professional"
).forEach(button => {

    button.addEventListener(
        "click",
        function() {

            const card =
                this.closest(
                    ".professional-card"
                );


            const title =
                card.querySelector(
                    ".professional-title h3"
                );


            const name =
                card.dataset.name;


            const currentlyVerified =
                card.dataset.verified === "true";


            card.dataset.verified =
                currentlyVerified
                    ? "false"
                    : "true";


            if (
                card.dataset.verified === "true"
            ) {

                let badge =
                    title.querySelector(
                        ".verified-badge"
                    );


                if (!badge) {

                    badge =
                        document.createElement(
                            "span"
                        );

                    badge.className =
                        "verified-badge";

                    badge.innerHTML =
                        `<i class="fa-solid fa-check"></i>`;

                    title.appendChild(badge);

                }


                this.innerHTML =
                    `
                        <i class="fa-solid fa-badge-check"></i>
                        Verified
                    `;


                showToast(
                    `${name} is now verified.`
                );

            } else {

                const badge =
                    title.querySelector(
                        ".verified-badge"
                    );


                if (badge) {
                    badge.remove();
                }


                this.innerHTML =
                    `
                        <i class="fa-solid fa-badge-check"></i>
                        Verify
                    `;


                showToast(
                    `${name} verification removed.`
                );

            }

        }
    );

});


/* =========================================================
   SUSPEND PROFESSIONAL
   ========================================================= */

document.querySelectorAll(
    ".suspend-professional"
).forEach(button => {

    button.addEventListener(
        "click",
        function() {

            const card =
                this.closest(
                    ".professional-card"
                );


            const name =
                card.dataset.name;


            const isSuspended =
                card.dataset.suspended === "true";


            card.dataset.suspended =
                isSuspended
                    ? "false"
                    : "true";


            if (!isSuspended) {

                this.textContent =
                    "Restore";

                showToast(
                    `${name} has been suspended.`
                );

            } else {

                this.textContent =
                    "Suspend";

                showToast(
                    `${name} has been restored.`
                );

            }

        }
    );

});


/* =========================================================
   DELETE PROFESSIONAL
   ========================================================= */

const deleteModal =
    document.getElementById(
        "deleteModal"
    );

const closeDeleteModal =
    document.getElementById(
        "closeDeleteModal"
    );

const cancelDelete =
    document.getElementById(
        "cancelDelete"
    );

const confirmDelete =
    document.getElementById(
        "confirmDelete"
    );


let professionalToDelete = null;


document.querySelectorAll(
    ".delete-professional"
).forEach(button => {

    button.addEventListener(
        "click",
        function() {

            professionalToDelete =
                this.closest(
                    ".professional-card"
                );


            deleteModal.classList.add(
                "show"
            );

        }
    );

});


function closeDelete() {

    deleteModal.classList.remove(
        "show"
    );

    professionalToDelete = null;

}


closeDeleteModal.addEventListener(
    "click",
    closeDelete
);


cancelDelete.addEventListener(
    "click",
    closeDelete
);


deleteModal.addEventListener(
    "click",
    event => {

        if (event.target === deleteModal) {
            closeDelete();
        }

    }
);


confirmDelete.addEventListener(
    "click",
    () => {

        if (!professionalToDelete) {
            return;
        }


        const name =
            professionalToDelete.dataset.name;


        professionalToDelete.remove();


        closeDelete();


        showToast(
            `${name} was removed from the community.`
        );

    }
);


/* =========================================================
   PAYOUT MODAL
   ========================================================= */

const payoutModal =
    document.getElementById(
        "payoutModal"
    );

const closePayoutModal =
    document.getElementById(
        "closePayoutModal"
    );

const cancelPayout =
    document.getElementById(
        "cancelPayout"
    );

const confirmPayout =
    document.getElementById(
        "confirmPayout"
    );

const payoutProjectName =
    document.getElementById(
        "payoutProjectName"
    );


document.querySelectorAll(
    ".payout-btn"
).forEach(button => {

    button.addEventListener(
        "click",
        function() {

            payoutProjectName.textContent =
                this.dataset.project;

            payoutModal.classList.add(
                "show"
            );

        }
    );

});


function closePayout() {

    payoutModal.classList.remove(
        "show"
    );

}


closePayoutModal.addEventListener(
    "click",
    closePayout
);


cancelPayout.addEventListener(
    "click",
    closePayout
);


payoutModal.addEventListener(
    "click",
    event => {

        if (event.target === payoutModal) {
            closePayout();
        }

    }
);


confirmPayout.addEventListener(
    "click",
    () => {

        const project =
            payoutProjectName.textContent;


        closePayout();


        showToast(
            `${project} marked as paid. Professional receives 85%.`
        );


        /*
            FUTURE SUPABASE:

            UPDATE projects
            SET status = 'paid'

            INSERT INTO payouts

            INSERT INTO admin_activity

            UPDATE professional:
            completed_jobs = completed_jobs + 1

            INSERT notification for professional

            INSERT notification for admin
        */

    }
);


/* =========================================================
   APPLICATION APPROVAL
   ========================================================= */

document.querySelectorAll(
    ".approve-application"
).forEach(button => {

    button.addEventListener(
        "click",
        function() {

            const row =
                this.closest(
                    ".application-row"
                );


            const name =
                row.querySelector(
                    ".person-info strong"
                ).textContent;


            const status =
                row.querySelector(
                    ".status"
                );


            status.className =
                "status active";


            status.textContent =
                "Approved";


            this.remove();


            const rejectButton =
                row.querySelector(
                    ".reject-application"
                );


            if (rejectButton) {
                rejectButton.remove();
            }


            showToast(
                `${name} has been approved for VORVENA.`
            );

        }
    );

});


/* =========================================================
   APPLICATION REJECTION
   ========================================================= */

document.querySelectorAll(
    ".reject-application"
).forEach(button => {

    button.addEventListener(
        "click",
        function() {

            const row =
                this.closest(
                    ".application-row"
                );


            const name =
                row.querySelector(
                    ".person-info strong"
                ).textContent;


            row.remove();


            showToast(
                `${name}'s application was rejected.`
            );

        }
    );

});


/* =========================================================
   PROJECT VIEW BUTTONS
   ========================================================= */

document.querySelectorAll(
    ".view-project"
).forEach(button => {

    button.addEventListener(
        "click",
        () => {

            showToast(
                "Project workspace will open here after Supabase integration."
            );

        }
    );

});


/* =========================================================
   SUPPORT
   ========================================================= */

document.getElementById(
    "supportBtn"
).addEventListener(
    "click",
    () => {

        showToast(
            "Admin support panel will be connected later."
        );

    }
);


/* =========================================================
   NOTIFICATION
   ========================================================= */

document.getElementById(
    "notificationBtn"
).addEventListener(
    "click",
    () => {

        showSection("notifications");

    }
);


/* =========================================================
   LOGOUT
   ========================================================= */

document.getElementById(
    "logoutBtn"
).addEventListener(
    "click",
    () => {

        const confirmLogout =
            confirm(
                "Are you sure you want to logout?"
            );


        if (!confirmLogout) {
            return;
        }


        localStorage.removeItem(
            "vorvenaAdmin"
        );


        window.location.href =
            "login.html";

    }
);


/* =========================================================
   PROFESSIONAL ONLINE COUNT DEMO
   ========================================================= */

function updateOnlineCount() {

    /*
        FRONTEND DEMO

        Later Supabase will calculate this
        from the professionals' online status.

        Example:

        SELECT COUNT(*)
        FROM profiles
        WHERE role = 'professional'
        AND online = true
    */


    const onlineCount =
        adminData.professionalsOnline;


    const dashboardCount =
        document.getElementById(
            "onlineProfessionals"
        );


    const professionalCount =
        document.getElementById(
            "professionalOnlineCount"
        );


    if (dashboardCount) {
        dashboardCount.textContent =
            onlineCount;
    }


    if (professionalCount) {
        professionalCount.textContent =
            onlineCount;
    }

}


updateOnlineCount();


/* =========================================================
   SIMULATE LIVE ACTIVITY
   ========================================================= */

let onlineChangeTimer;


function simulateOnlineActivity() {

    /*
        This is only for frontend demonstration.

        When Supabase is connected,
        this will be replaced by realtime
        online-status data.
    */


    clearTimeout(onlineChangeTimer);


    onlineChangeTimer =
        setTimeout(() => {

            const change =
                Math.random() > 0.5
                    ? 1
                    : -1;


            adminData.professionalsOnline =
                Math.max(
                    0,
                    adminData.professionalsOnline +
                    change
                );


            updateOnlineCount();


            simulateOnlineActivity();

        }, 30000);

}


simulateOnlineActivity();


/* =========================================================
   COMPLETED JOB DEMO
   ========================================================= */

function markProjectCompleted(
    professionalName
) {

    const cards =
        document.querySelectorAll(
            ".professional-card"
        );


    cards.forEach(card => {

        if (
            card.dataset.name !==
            professionalName
        ) {
            return;
        }


        const jobCount =
            card.querySelector(
                ".completed-job-count"
            );


        if (!jobCount) {
            return;
        }


        const current =
            parseInt(
                jobCount.textContent
            ) || 0;


        jobCount.textContent =
            current + 1;


        showToast(
            `${professionalName}'s completed jobs increased to ${current + 1}.`
        );

    });

}


/*
    Example future flow:

    Client clicks APPROVE WORK

            ↓

    project.status =
    "awaiting_payout"

            ↓

    Admin receives notification

            ↓

    Admin verifies payout

            ↓

    Professional gets 85%

            ↓

    VORVENA keeps 15%

            ↓

    project.status =
    "completed"

            ↓

    completed_jobs + 1
*/


/* =========================================================
   INITIALIZE
   ========================================================= */

console.log(
    "VORVENA Admin Dashboard initialized."
);

console.log(
    "Professional online:",
    adminData.professionalsOnline
);

console.log(
    "Projects:",
    adminData.projects
);