/* =========================================================
   PROFESSIONAL DATA
========================================================= */

const professional = {
    id: "PRO-001",
    name: "David Williams",
    profession: "Web Developer",
    status: "approved",
    earnings: 487500
};


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
    {
        id: "VOR-001",
        title: "Business Website Design",
        client: "Bright Solutions",
        amount: 150000,
        status: "In Progress",
        deadline: "September 20, 2026"
    },

    {
        id: "VOR-002",
        title: "Brand Logo Design",
        client: "Sarah Creative",
        amount: 80000,
        status: "Submitted",
        deadline: "September 15, 2026"
    },

    {
        id: "VOR-003",
        title: "Social Media Management",
        client: "Michael Adams",
        amount: 120000,
        status: "Awaiting Start",
        deadline: "September 30, 2026"
    }
];


/* =========================================================
   ELEMENTS
========================================================= */

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const sidebarOverlay = document.getElementById("sidebarOverlay");

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".page-section");

const logoutBtn = document.getElementById("logoutBtn");
const supportBtn = document.getElementById("supportBtn");

const notificationBtn = document.getElementById("notificationBtn");

const viewProjectsBtn = document.getElementById("viewProjectsBtn");
const allProjectsBtn = document.getElementById("allProjectsBtn");

const activeProjectsBtn = document.getElementById("activeProjectsBtn");
const submittedBtn = document.getElementById("submittedBtn");
const profileBtn = document.getElementById("profileBtn");

const earningsBtn = document.getElementById("earningsBtn");
const notificationsBtn = document.getElementById("notificationsBtn");

const editProfileBtn = document.getElementById("editProfileBtn");

const projectButtons = document.querySelectorAll(".project-action");

const modal = document.getElementById("messageModal");
const closeModal = document.getElementById("closeModal");
const modalContinue = document.getElementById("modalContinue");


/* =========================================================
   SIDEBAR
========================================================= */

function openSidebar() {
    sidebar.classList.add("open");
    sidebarOverlay.classList.add("show");
}

function closeSidebarMenu() {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("show");
}

if (menuBtn) {
    menuBtn.addEventListener("click", () => {

        if (sidebar.classList.contains("open")) {
            closeSidebarMenu();
        } else {
            openSidebar();
        }

    });
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", closeSidebarMenu);
}


/* =========================================================
   SECTION NAVIGATION
========================================================= */

function showSection(sectionName) {

    sections.forEach(section => {
        section.classList.remove("active-section");
        section.classList.add("hidden-section");
    });

    const selectedSection = document.getElementById(
        `${sectionName}Section`
    );

    if (selectedSection) {

        selectedSection.classList.remove("hidden-section");
        selectedSection.classList.add("active-section");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.dataset.section === sectionName) {
            link.classList.add("active");
        }

    });

    closeSidebarMenu();
}


/* =========================================================
   SIDEBAR NAV LINKS
========================================================= */

navLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const section = link.dataset.section;

        if (section) {
            showSection(section);
        }

    });

});


/* =========================================================
   DASHBOARD BUTTONS
========================================================= */

if (viewProjectsBtn) {
    viewProjectsBtn.addEventListener("click", () => {
        showSection("projects");
    });
}

if (allProjectsBtn) {
    allProjectsBtn.addEventListener("click", () => {
        showSection("projects");
    });
}

if (activeProjectsBtn) {
    activeProjectsBtn.addEventListener("click", () => {
        showSection("active");
    });
}

if (submittedBtn) {
    submittedBtn.addEventListener("click", () => {
        showSection("submitted");
    });
}

if (profileBtn) {
    profileBtn.addEventListener("click", () => {
        showSection("profile");
    });
}

if (earningsBtn) {
    earningsBtn.addEventListener("click", () => {
        showSection("earnings");
    });
}

if (notificationsBtn) {
    notificationsBtn.addEventListener("click", () => {
        showSection("notifications");
    });
}

if (notificationBtn) {
    notificationBtn.addEventListener("click", () => {
        showSection("notifications");
    });
}


/* =========================================================
   PROJECT BUTTONS
========================================================= */

projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const projectName = button.dataset.project;

        console.log("Opening project:", projectName);

        openProjectModal(projectName);

    });

});


/* =========================================================
   PROJECT MODAL
========================================================= */

function openProjectModal(projectName) {

    if (!modal) return;

    const modalTitle = modal.querySelector("h2");
    const modalText = modal.querySelector("p");

    if (modalTitle) {
        modalTitle.textContent = projectName;
    }

    if (modalText) {
        modalText.textContent =
            "The professional project workspace for this project will be connected here. You will be able to view requirements, communicate with the client, submit work and manage revisions.";
    }

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}

function closeProjectModal() {

    if (!modal) return;

    modal.classList.remove("show");

    document.body.style.overflow = "";
}

if (closeModal) {
    closeModal.addEventListener("click", closeProjectModal);
}

if (modalContinue) {

    modalContinue.addEventListener("click", () => {

        closeProjectModal();

        console.log(
            "Future action: open professional project workspace."
        );

    });

}

if (modal) {

    modal.addEventListener("click", event => {

        if (event.target === modal) {
            closeProjectModal();
        }

    });

}


/* =========================================================
   SUPPORT
========================================================= */

if (supportBtn) {

    supportBtn.addEventListener("click", () => {

        alert(
            "VORVENA Support\n\n" +
            "The support/contact system will be connected when the backend is added."
        );

    });

}


/* =========================================================
   EDIT PROFILE
========================================================= */

if (editProfileBtn) {

    editProfileBtn.addEventListener("click", () => {

        alert(
            "Profile Editing\n\n" +
            "Profile editing will be connected to Supabase when the backend is added."
        );

    });

}


/* =========================================================
   LOGOUT
========================================================= */

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        const confirmLogout = confirm(
            "Are you sure you want to logout?"
        );

        if (!confirmLogout) return;

        /*
            FRONTEND DEMO ONLY

            When Supabase Auth is connected,
            this will become:

            supabase.auth.signOut()
        */

        localStorage.removeItem("vorvenaProfessional");
        localStorage.removeItem("vorvenaProfessionalSession");

        alert("You have been logged out.");

        window.location.href = "login.html";

    });

}


/* =========================================================
   DEMO SESSION
========================================================= */

function createDemoSession() {

    /*
        This creates a temporary frontend session.

        We will remove this when Supabase authentication
        is connected.
    */

    const existingProfessional =
        localStorage.getItem("vorvenaProfessional");

    if (!existingProfessional) {

        localStorage.setItem(
            "vorvenaProfessional",
            JSON.stringify(professional)
        );

    }

}


/* =========================================================
   UPDATE PROJECT COUNTS
========================================================= */

function updateProjectCounts() {

    const activeProjects =
        projects.filter(project =>
            project.status === "In Progress"
        ).length;

    const submittedProjects =
        projects.filter(project =>
            project.status === "Submitted"
        ).length;

    console.log("Active projects:", activeProjects);
    console.log("Submitted projects:", submittedProjects);

}


/* =========================================================
   PAYMENT CALCULATION
========================================================= */

function calculateProfessionalPayout(projectAmount) {

    /*
        VORVENA takes 15%.
        Professional receives 85%.
    */

    const professionalShare =
        projectAmount * 0.85;

    const vorvenaShare =
        projectAmount * 0.15;

    return {
        professional: professionalShare,
        vorvena: vorvenaShare
    };

}


/* =========================================================
   EXAMPLE PAYOUT
========================================================= */

const examplePayout =
    calculateProfessionalPayout(150000);

console.log(
    "Example Professional Payout:",
    examplePayout.professional
);

console.log(
    "Example VORVENA Commission:",
    examplePayout.vorvena
);


/* =========================================================
   FUTURE PROJECT STATUS SYSTEM
========================================================= */

function handleProjectStatus(status) {

    /*
        FUTURE SUPABASE FLOW:

        Hired
           ↓
        In Progress
           ↓
        Submitted for Review
           ↓
        Revision Requested
           ↓
        Updated
           ↓
        Approved
           ↓
        Awaiting Payout
           ↓
        Paid
           ↓
        Completed
    */

    console.log(
        "Project status:",
        status
    );

}


/* =========================================================
   FUTURE ADMIN PAYOUT NOTIFICATION
========================================================= */

function notifyAdminForPayout(project) {

    /*
        IMPORTANT:

        This is NOT active yet because this dashboard
        currently has no backend.

        Once Supabase is connected, when the client approves:

        1. Project status becomes "awaiting_payout"
        2. Admin notification is created
        3. Admin dashboard displays the project
        4. Admin verifies the project
        5. Admin pays the professional 85%
        6. Admin marks payout as completed
        7. Project becomes "completed"
        8. Professional receives notification
    */

    console.log(
        "Future admin payout notification:",
        project
    );

}


/* =========================================================
   RESPONSIVE RESIZE
========================================================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {
        closeSidebarMenu();
    }

});


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    createDemoSession();

    updateProjectCounts();

    handleProjectStatus("In Progress");

    console.log(
        "VORVENA Professional Dashboard loaded successfully."
    );

});