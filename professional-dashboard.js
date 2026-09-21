/* =========================================================
   VORVENA PROFESSIONAL DASHBOARD
   FRONTEND AUTH + ROLE ROUTING
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       AUTHENTICATION / ROLE CHECK
    ====================================================== */

    const loggedIn =
        sessionStorage.getItem("vorvenaUserLoggedIn");

    const storedUser =
        sessionStorage.getItem("vorvenaLoggedInUser");


    if (loggedIn !== "true" || !storedUser) {

        window.location.href = "login.html";

        return;
    }


    let currentUser = null;


    try {

        currentUser = JSON.parse(storedUser);

    } catch (error) {

        console.error(
            "Unable to read VORVENA login session."
        );

        sessionStorage.clear();

        window.location.href = "login.html";

        return;
    }


    /* =====================================================
       ROLE ROUTING
    ====================================================== */

    if (
        !currentUser ||
        !currentUser.accountType
    ) {

        sessionStorage.clear();

        window.location.href = "login.html";

        return;
    }


    if (currentUser.accountType === "client") {

        window.location.href =
            "clients-dashboard.html";

        return;
    }


    if (currentUser.accountType !== "professional") {

        sessionStorage.clear();

        window.location.href = "login.html";

        return;
    }


    /* =====================================================
       PROFESSIONAL DATA
    ====================================================== */

    const professional = {

        id:
            currentUser.id ||
            "PRO-001",

        name:
            currentUser.fullName ||
            currentUser.name ||
            "David Williams",

        profession:
            currentUser.profession ||
            "Web Developer",

        status:
            "approved",

        earnings:
            487500

    };


    /* =====================================================
       PROJECT DATA
    ====================================================== */

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


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const publicMenuBtn =
        document.getElementById("publicMenuBtn");

    const publicNavLinks =
        document.getElementById("publicNavLinks");

    const dashboardNavLink =
        document.getElementById("dashboardNavLink");


    const sidebar =
        document.getElementById("sidebar");

    const menuBtn =
        document.getElementById("menuBtn");

    const sidebarOverlay =
        document.getElementById("sidebarOverlay");


    const navLinks =
        document.querySelectorAll(".nav-link");

    const sections =
        document.querySelectorAll(".page-section");


    const logoutBtn =
        document.getElementById("logoutBtn");

    const supportBtn =
        document.getElementById("supportBtn");

    const notificationBtn =
        document.getElementById("notificationBtn");


    const viewProjectsBtn =
        document.getElementById("viewProjectsBtn");

    const allProjectsBtn =
        document.getElementById("allProjectsBtn");


    const activeProjectsBtn =
        document.getElementById("activeProjectsBtn");

    const submittedBtn =
        document.getElementById("submittedBtn");

    const profileBtn =
        document.getElementById("profileBtn");

    const payoutSettingsBtn =
        document.getElementById("payoutSettingsBtn");


    const earningsBtn =
        document.getElementById("earningsBtn");

    const notificationsBtn =
        document.getElementById("notificationsBtn");


    const editProfileBtn =
        document.getElementById("editProfileBtn");


    const projectButtons =
        document.querySelectorAll(".project-action");


    const modal =
        document.getElementById("messageModal");

    const closeModal =
        document.getElementById("closeModal");

    const modalContinue =
        document.getElementById("modalContinue");


    const payoutForm =
        document.getElementById("payoutForm");

    const cancelPayoutBtn =
        document.getElementById("cancelPayoutBtn");


    /* =====================================================
       PUBLIC NAVBAR
    ====================================================== */

    function setupPublicNavbar() {

        if (!dashboardNavLink) return;


        /*
            Professional users stay on the professional
            dashboard.
        */

        dashboardNavLink.href =
            "professional-dashboard.html";


        /*
            Mark Dashboard active.
        */

        dashboardNavLink.classList.add("active");


        /*
            Mobile public navbar.
        */

        if (
            publicMenuBtn &&
            publicNavLinks
        ) {

            publicMenuBtn.addEventListener(
                "click",
                () => {

                    const isOpen =
                        publicNavLinks.classList.toggle(
                            "open"
                        );

                    publicMenuBtn.classList.toggle(
                        "active",
                        isOpen
                    );

                    publicMenuBtn.setAttribute(
                        "aria-expanded",
                        String(isOpen)
                    );

                    publicMenuBtn.setAttribute(
                        "aria-label",
                        isOpen
                            ? "Close menu"
                            : "Open menu"
                    );

                }
            );


            publicNavLinks
                .querySelectorAll("a")
                .forEach(link => {

                    link.addEventListener(
                        "click",
                        () => {

                            publicNavLinks.classList.remove(
                                "open"
                            );

                            publicMenuBtn.classList.remove(
                                "active"
                            );

                            publicMenuBtn.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                            publicMenuBtn.setAttribute(
                                "aria-label",
                                "Open menu"
                            );

                        }
                    );

                });


            document.addEventListener(
                "keydown",
                event => {

                    if (event.key === "Escape") {

                        publicNavLinks.classList.remove(
                            "open"
                        );

                        publicMenuBtn.classList.remove(
                            "active"
                        );

                        publicMenuBtn.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }
            );


            window.addEventListener(
                "resize",
                () => {

                    if (
                        window.innerWidth > 768
                    ) {

                        publicNavLinks.classList.remove(
                            "open"
                        );

                        publicMenuBtn.classList.remove(
                            "active"
                        );

                        publicMenuBtn.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }
            );

        }

    }


    setupPublicNavbar();


    /* =====================================================
       UPDATE PROFESSIONAL INFORMATION
    ====================================================== */

    function getInitials(name) {

        if (!name) return "DW";


        return name
            .trim()
            .split(/\s+/)
            .slice(0, 2)
            .map(part => part.charAt(0).toUpperCase())
            .join("");

    }


    function getFirstName(name) {

        if (!name) return "David";

        return name
            .trim()
            .split(/\s+/)[0];

    }


    const professionalName =
        professional.name;

    const professionalProfession =
        professional.profession;

    const professionalInitials =
        getInitials(professionalName);

    const professionalFirstName =
        getFirstName(professionalName);


    const sidebarName =
        document.getElementById(
            "sidebarProfessionalName"
        );

    const sidebarProfession =
        document.getElementById(
            "sidebarProfessionalProfession"
        );

    const topName =
        document.getElementById(
            "topProfessionalName"
        );

    const topProfession =
        document.getElementById(
            "topProfessionalProfession"
        );

    const welcomeName =
        document.getElementById(
            "welcomeProfessionalName"
        );


    if (sidebarName) {
        sidebarName.textContent =
            professionalName;
    }

    if (sidebarProfession) {
        sidebarProfession.textContent =
            professionalProfession;
    }

    if (topName) {
        topName.textContent =
            professionalName;
    }

    if (topProfession) {
        topProfession.textContent =
            professionalProfession;
    }

    if (welcomeName) {
        welcomeName.textContent =
            professionalFirstName;
    }


    document
        .querySelectorAll(
            ".profile-avatar, .top-avatar, .profile-large-avatar"
        )
        .forEach(avatar => {

            avatar.textContent =
                professionalInitials;

        });


    /* =====================================================
       SIDEBAR
    ====================================================== */

    function openSidebar() {

        if (!sidebar) return;

        sidebar.classList.add("open");

        if (sidebarOverlay) {
            sidebarOverlay.classList.add("show");
        }

    }


    function closeSidebarMenu() {

        if (!sidebar) return;

        sidebar.classList.remove("open");

        if (sidebarOverlay) {
            sidebarOverlay.classList.remove("show");
        }

    }


    if (menuBtn) {

        menuBtn.addEventListener(
            "click",
            () => {

                if (
                    sidebar.classList.contains(
                        "open"
                    )
                ) {

                    closeSidebarMenu();

                } else {

                    openSidebar();

                }

            }
        );

    }


    if (sidebarOverlay) {

        sidebarOverlay.addEventListener(
            "click",
            closeSidebarMenu
        );

    }


    /* =====================================================
       SECTION NAVIGATION
    ====================================================== */

    function showSection(sectionName) {

        sections.forEach(section => {

            section.classList.remove(
                "active-section"
            );

            section.classList.add(
                "hidden-section"
            );

        });


        const selectedSection =
            document.getElementById(
                `${sectionName}Section`
            );


        if (selectedSection) {

            selectedSection.classList.remove(
                "hidden-section"
            );

            selectedSection.classList.add(
                "active-section"
            );


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }


        navLinks.forEach(link => {

            link.classList.remove("active");


            if (
                link.dataset.section ===
                sectionName
            ) {

                link.classList.add("active");

            }

        });


        closeSidebarMenu();

    }


    /* =====================================================
       SIDEBAR NAV LINKS
    ====================================================== */

    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();


                const section =
                    link.dataset.section;


                if (section) {

                    showSection(section);

                }

            }
        );

    });


    /* =====================================================
       DASHBOARD BUTTONS
    ====================================================== */

    if (viewProjectsBtn) {

        viewProjectsBtn.addEventListener(
            "click",
            () => {

                showSection("projects");

            }
        );

    }


    if (allProjectsBtn) {

        allProjectsBtn.addEventListener(
            "click",
            () => {

                showSection("projects");

            }
        );

    }


    if (activeProjectsBtn) {

        activeProjectsBtn.addEventListener(
            "click",
            () => {

                showSection("active");

            }
        );

    }


    if (submittedBtn) {

        submittedBtn.addEventListener(
            "click",
            () => {

                showSection("submitted");

            }
        );

    }


    if (profileBtn) {

        profileBtn.addEventListener(
            "click",
            () => {

                showSection("profile");

            }
        );

    }


    if (payoutSettingsBtn) {

        payoutSettingsBtn.addEventListener(
            "click",
            () => {

                showSection("payout-settings");

            }
        );

    }


    if (earningsBtn) {

        earningsBtn.addEventListener(
            "click",
            () => {

                showSection("earnings");

            }
        );

    }


    if (notificationsBtn) {

        notificationsBtn.addEventListener(
            "click",
            () => {

                showSection("notifications");

            }
        );

    }


    if (notificationBtn) {

        notificationBtn.addEventListener(
            "click",
            () => {

                showSection("notifications");

            }
        );

    }


    /* =====================================================
       PROJECT BUTTONS
    ====================================================== */

    projectButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const projectName =
                    button.dataset.project;


                console.log(
                    "Opening project:",
                    projectName
                );


                openProjectModal(
                    projectName
                );

            }
        );

    });


    /* =====================================================
       PROJECT MODAL
    ====================================================== */

    function openProjectModal(
        projectName
    ) {

        if (!modal) return;


        const modalTitle =
            modal.querySelector("h2");

        const modalText =
            modal.querySelector("p");


        if (modalTitle) {

            modalTitle.textContent =
                projectName;

        }


        if (modalText) {

            modalText.textContent =
                "The professional project workspace for this project will be connected here. You will be able to view requirements, communicate with the client, submit work and manage revisions.";

        }


        modal.classList.add("show");

        document.body.style.overflow =
            "hidden";

    }


    function closeProjectModal() {

        if (!modal) return;


        modal.classList.remove("show");

        document.body.style.overflow =
            "";

    }


    if (closeModal) {

        closeModal.addEventListener(
            "click",
            closeProjectModal
        );

    }


    if (modalContinue) {

        modalContinue.addEventListener(
            "click",
            () => {

                closeProjectModal();

                console.log(
                    "Future action: open professional project workspace."
                );

            }
        );

    }


    if (modal) {

        modal.addEventListener(
            "click",
            event => {

                if (
                    event.target === modal
                ) {

                    closeProjectModal();

                }

            }
        );

    }


    /* =====================================================
       SUPPORT
    ====================================================== */

    if (supportBtn) {

        supportBtn.addEventListener(
            "click",
            () => {

                alert(
                    "VORVENA Support\n\n" +
                    "The support/contact system will be connected when the backend is added."
                );

            }
        );

    }


    /* =====================================================
       EDIT PROFILE
    ====================================================== */

    if (editProfileBtn) {

        editProfileBtn.addEventListener(
            "click",
            () => {

                alert(
                    "Profile Editing\n\n" +
                    "Profile editing will be connected to the VORVENA backend when the backend is added."
                );

            }
        );

    }


    /* =====================================================
       PAYOUT SETTINGS
    ====================================================== */

    function loadPayoutDetails() {

        const savedDetails =
            localStorage.getItem(
                "vorvenaPayoutDetails"
            );


        if (
            !savedDetails ||
            !payoutForm
        ) {

            return;
        }


        try {

            const payoutDetails =
                JSON.parse(
                    savedDetails
                );


            const country =
                document.getElementById(
                    "payoutCountry"
                );

            const currency =
                document.getElementById(
                    "payoutCurrency"
                );

            const accountHolder =
                document.getElementById(
                    "accountHolder"
                );

            const bankName =
                document.getElementById(
                    "bankName"
                );

            const accountNumber =
                document.getElementById(
                    "accountNumber"
                );


            if (country) {
                country.value =
                    payoutDetails.country || "";
            }

            if (currency) {
                currency.value =
                    payoutDetails.currency || "";
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

        payoutForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const payoutDetails = {

                    country:
                        document.getElementById(
                            "payoutCountry"
                        ).value,

                    currency:
                        document.getElementById(
                            "payoutCurrency"
                        ).value,

                    accountHolder:
                        document.getElementById(
                            "accountHolder"
                        ).value.trim(),

                    bankName:
                        document.getElementById(
                            "bankName"
                        ).value.trim(),

                    accountNumber:
                        document.getElementById(
                            "accountNumber"
                        ).value.trim()

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

                    This is temporary for the frontend.
                    It should not be treated as secure
                    banking storage for production.
                */

                localStorage.setItem(
                    "vorvenaPayoutDetails",
                    JSON.stringify(
                        payoutDetails
                    )
                );


                alert(
                    "Payout details saved successfully.\n\n" +
                    "Real payout processing will be connected when the backend is added."
                );


                console.log(
                    "Demo payout details saved."
                );

            }
        );

    }


    /* =====================================================
       CANCEL PAYOUT SETTINGS
    ====================================================== */

    if (cancelPayoutBtn) {

        cancelPayoutBtn.addEventListener(
            "click",
            () => {

                showSection("dashboard");

            }
        );

    }


    /* =====================================================
       LOGOUT
    ====================================================== */

    if (logoutBtn) {

        logoutBtn.addEventListener(
            "click",
            () => {

                const confirmLogout =
                    confirm(
                        "Are you sure you want to logout?"
                    );


                if (!confirmLogout) return;


                /*
                    Clear frontend session only.
                */

                sessionStorage.removeItem(
                    "vorvenaLoggedInUser"
                );

                sessionStorage.removeItem(
                    "vorvenaUserLoggedIn"
                );

                sessionStorage.removeItem(
                    "vorvenaClientName"
                );

                sessionStorage.removeItem(
                    "vorvenaClientEmail"
                );

                sessionStorage.removeItem(
                    "vorvenaAccountType"
                );

                sessionStorage.removeItem(
                    "vorvenaHiringIntent"
                );

                sessionStorage.removeItem(
                    "vorvenaSelectedProfessional"
                );


                localStorage.removeItem(
                    "vorvenaProfessionalSession"
                );


                alert(
                    "You have been logged out."
                );


                window.location.href =
                    "login.html";

            }
        );

    }


    /* =====================================================
       PROJECT COUNTS
    ====================================================== */

    function updateProjectCounts() {

        const activeProjects =
            projects.filter(
                project =>
                    project.status ===
                    "In Progress"
            ).length;


        const submittedProjects =
            projects.filter(
                project =>
                    project.status ===
                    "Submitted"
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


    /* =====================================================
       PAYMENT CALCULATION
    ====================================================== */

    function calculateProfessionalPayout(
        projectAmount
    ) {

        const professionalShare =
            projectAmount * 0.85;

        const vorvenaShare =
            projectAmount * 0.15;


        return {

            professional:
                professionalShare,

            vorvena:
                vorvenaShare

        };

    }


    const examplePayout =
        calculateProfessionalPayout(
            150000
        );


    console.log(
        "Example Professional Payout:",
        examplePayout.professional
    );


    console.log(
        "Example VORVENA Commission:",
        examplePayout.vorvena
    );


    /* =====================================================
       FUTURE PROJECT STATUS
    ====================================================== */

    function handleProjectStatus(
        status
    ) {

        console.log(
            "Project status:",
            status
        );

    }


    /* =====================================================
       FUTURE ADMIN PAYOUT NOTIFICATION
    ====================================================== */

    function notifyAdminForPayout(
        project
    ) {

        console.log(
            "Future admin payout notification:",
            project
        );

    }


    /* =====================================================
       RESPONSIVE SIDEBAR
    ====================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 768
            ) {

                closeSidebarMenu();

            }

        }
    );


    /* =====================================================
       SESSION RECHECK
    ====================================================== */

    window.addEventListener(
        "pageshow",
        () => {

            const activeSession =
                sessionStorage.getItem(
                    "vorvenaUserLoggedIn"
                );

            const activeUser =
                sessionStorage.getItem(
                    "vorvenaLoggedInUser"
                );


            if (
                activeSession !== "true" ||
                !activeUser
            ) {

                window.location.href =
                    "login.html";

            }

        }
    );


    /* =====================================================
       INITIALIZE
    ====================================================== */

    loadPayoutDetails();

    updateProjectCounts();

    handleProjectStatus(
        "In Progress"
    );


    console.log(
        "VORVENA Professional Dashboard loaded successfully."
    );

});