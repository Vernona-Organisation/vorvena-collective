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
const payoutSettingsBtn = document.getElementById("payoutSettingsBtn");

const earningsBtn = document.getElementById("earningsBtn");
const notificationsBtn = document.getElementById("notificationsBtn");

const editProfileBtn = document.getElementById("editProfileBtn");

const projectButtons = document.querySelectorAll(".project-action");

const modal = document.getElementById("messageModal");
const closeModal = document.getElementById("closeModal");
const modalContinue = document.getElementById("modalContinue");

const payoutForm = document.getElementById("payoutForm");
const cancelPayoutBtn = document.getElementById("cancelPayoutBtn");


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

if (payoutSettingsBtn) {
    payoutSettingsBtn.addEventListener("click", () => {
        showSection("payout-settings");
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
            "Profile editing will be connected to the VORVENA backend when the backend is added."
        );

    });

}


/* =========================================================
   PAYOUT SETTINGS
========================================================= */

/*
    FRONTEND DEMO ONLY

    These payout details are stored temporarily in localStorage.

    IMPORTANT:
    Real banking information must NOT be handled this way
    in the production version.

    When the backend is connected:

    Professional
        ↓
    Secure backend
        ↓
    Payment provider / Paystack
        ↓
    Verified payout
*/

function loadPayoutDetails() {

    const savedDetails =
        localStorage.getItem("vorvenaPayoutDetails");

    if (!savedDetails || !payoutForm) return;

    try {

        const payoutDetails =
            JSON.parse(savedDetails);

        const country =
            document.getElementById("payoutCountry");

        const currency =
            document.getElementById("payoutCurrency");

        const accountHolder =
            document.getElementById("accountHolder");

        const bankName =
            document.getElementById("bankName");

        const accountNumber =
            document.getElementById("accountNumber");


        if (country) {
            country.value = payoutDetails.country || "";
        }

        if (currency) {
            currency.value = payoutDetails.currency || "";
        }

        if (accountHolder) {
            accountHolder.value =
                payoutDetails.accountHolder || "";
        }

        if (bankName) {
            bankName.value =
                payoutDetails.bankName || "";
        }

        if (accountNumber) {
            accountNumber.value =
                payoutDetails.accountNumber || "";
        }

    } catch (error) {

        console.error(
            "Unable to load payout details:",
            error
        );

    }

}


if (payoutForm) {

    payoutForm.addEventListener("submit", event => {

        event.preventDefault();

        const payoutDetails = {

            country:
                document.getElementById("payoutCountry").value,

            currency:
                document.getElementById("payoutCurrency").value,

            accountHolder:
                document.getElementById("accountHolder").value.trim(),

            bankName:
                document.getElementById("bankName").value.trim(),

            accountNumber:
                document.getElementById("accountNumber").value.trim()

        };


        if (
            !payoutDetails.country ||
            !payoutDetails.currency ||
            !payoutDetails.accountHolder ||
            !payoutDetails.bankName ||
            !payoutDetails.accountNumber
        ) {

            alert(
                "Please complete all payout fields."
            );

            return;
        }


        /*
            FRONTEND DEMO STORAGE ONLY.

            This will later be replaced by a secure
            backend request.
        */

        localStorage.setItem(
            "vorvenaPayoutDetails",
            JSON.stringify(payoutDetails)
        );


        alert(
            "Payout details saved successfully.\n\n" +
            "Real Paystack payout connection will be added when the backend is connected."
        );

        console.log(
            "Demo payout details saved:",
            payoutDetails
        );

    });

}


/* =========================================================
   CANCEL PAYOUT SETTINGS
========================================================= */

if (cancelPayoutBtn) {

    cancelPayoutBtn.addEventListener("click", () => {

        showSection("dashboard");

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

        localStorage.removeItem(
            "vorvenaProfessional"
        );

        localStorage.removeItem(
            "vorvenaProfessionalSession"
        );

        alert(
            "You have been logged out."
        );

        window.location.href = "login.html";

    });

}


/* =========================================================
   DEMO SESSION
========================================================= */

function createDemoSession() {

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

    console.log(
        "Active projects:",
        activeProjects
    );

    console.log(
        "Submitted projects:",
        submittedProjects
    );

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
        FUTURE BACKEND FLOW:

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
        FUTURE BACKEND FLOW:

        1. Client approves project
        2. Project becomes "awaiting_payout"
        3. Admin notification is created
        4. Admin verifies project
        5. Backend releases professional payout
        6. Professional receives 85%
        7. VORVENA retains 15%
        8. Project becomes "completed"
        9. Professional receives notification
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

    loadPayoutDetails();

    updateProjectCounts();

    handleProjectStatus("In Progress");

    console.log(
        "VORVENA Professional Dashboard loaded successfully."
    );

});
