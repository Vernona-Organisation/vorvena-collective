/* =========================================
   VORVENA CLIENT DASHBOARD
   FRONTEND-ONLY AUTH / SESSION
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =========================================
       AUTHENTICATION CHECK
    ========================================= */

    const loggedIn =
        sessionStorage.getItem(
            "vorvenaUserLoggedIn"
        );

    const storedUser =
        sessionStorage.getItem(
            "vorvenaLoggedInUser"
        );


    if (
        loggedIn !== "true" ||
        !storedUser
    ) {
        window.location.href = "login.html";
        return;
    }


    let client = null;

    try {

        client = JSON.parse(storedUser);

    } catch (error) {

        console.error(
            "Unable to read logged-in client."
        );

        sessionStorage.clear();

        window.location.href = "login.html";

        return;
    }


    /* Only clients can access this dashboard */

    if (
        !client ||
        !client.accountType ||
        client.accountType !== "client"
    ) {

        sessionStorage.clear();

        window.location.href = "login.html";

        return;
    }


    /* =========================================
       CLIENT INFORMATION
    ========================================= */

    const fullName =
        client.fullName ||
        client.name ||
        "Client";

    const firstName =
        fullName.trim().split(/\s+/)[0] ||
        "Client";


    const initials =
        fullName
            .trim()
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map(
                name =>
                    name.charAt(0).toUpperCase()
            )
            .join("") || "CL";


    const clientName =
        document.getElementById("clientName");

    const topClientName =
        document.getElementById("topClientName");

    const welcomeName =
        document.getElementById("welcomeName");

    const clientAvatar =
        document.getElementById("clientAvatar");

    const topClientAvatar =
        document.getElementById("topClientAvatar");


    if (clientName) {
        clientName.textContent = fullName;
    }

    if (topClientName) {
        topClientName.textContent = fullName;
    }

    if (welcomeName) {
        welcomeName.textContent = firstName;
    }

    if (clientAvatar) {
        clientAvatar.textContent = initials;
    }

    if (topClientAvatar) {
        topClientAvatar.textContent = initials;
    }


    /* =========================================
       PROJECT DATA
    ========================================= */

    const projects = [
        {
            name: "Business Website Design",
            professional: "David Williams",
            budget: 150000,
            due: "Sept 20",
            status: "In Progress"
        },
        {
            name: "Brand Logo Design",
            professional: "Sarah Creative",
            budget: 80000,
            due: "Sept 15",
            status: "Review"
        },
        {
            name: "Social Media Management",
            professional: "Michael Adams",
            budget: 120000,
            due: "Sept 30",
            status: "In Progress"
        }
    ];


    /* =========================================
       PROJECT STATS
    ========================================= */

    const activeProjects =
        projects.filter(
            project =>
                project.status === "In Progress"
        ).length;


    const activeProjectsElement =
        document.getElementById(
            "activeProjects"
        );

    if (activeProjectsElement) {
        activeProjectsElement.textContent =
            activeProjects;
    }


    /*
     * Keep the existing dashboard defaults
     * for completed/pending until real project
     * data is connected.
     */

    const completedProjectsElement =
        document.getElementById(
            "completedProjects"
        );

    const pendingProjectsElement =
        document.getElementById(
            "pendingProjects"
        );


    if (
        completedProjectsElement &&
        !completedProjectsElement.textContent.trim()
    ) {
        completedProjectsElement.textContent = "4";
    }

    if (
        pendingProjectsElement &&
        !pendingProjectsElement.textContent.trim()
    ) {
        pendingProjectsElement.textContent = "1";
    }


    /* =========================================
       SIDEBAR
    ========================================= */

    const sidebar =
        document.getElementById("sidebar");

    const menuBtn =
        document.getElementById("menuBtn");

    const closeSidebar =
        document.getElementById("closeSidebar");

    const sidebarOverlay =
        document.getElementById(
            "sidebarOverlay"
        );


    function openSidebar() {

        if (!sidebar) {
            return;
        }

        sidebar.classList.add("open");

        if (menuBtn) {
            menuBtn.setAttribute(
                "aria-expanded",
                "true"
            );
        }
    }


    function closeSidebarMenu() {

        if (!sidebar) {
            return;
        }

        sidebar.classList.remove("open");

        if (menuBtn) {
            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    }


    if (menuBtn) {

        menuBtn.addEventListener(
            "click",
            () => {

                if (
                    sidebar &&
                    sidebar.classList.contains("open")
                ) {
                    closeSidebarMenu();
                } else {
                    openSidebar();
                }

            }
        );
    }


    if (closeSidebar) {

        closeSidebar.addEventListener(
            "click",
            closeSidebarMenu
        );
    }


    if (sidebarOverlay) {

        sidebarOverlay.addEventListener(
            "click",
            closeSidebarMenu
        );
    }


    /* Close mobile sidebar after navigation */

    const sidebarLinks =
        document.querySelectorAll(
            ".sidebar-link"
        );


    sidebarLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                if (window.innerWidth <= 1100) {
                    closeSidebarMenu();
                }

            }
        );

    });


    /* =========================================
       NOTIFICATIONS
    ========================================= */

    const notificationBtn =
        document.getElementById(
            "notificationBtn"
        );


    if (notificationBtn) {

        notificationBtn.addEventListener(
            "click",
            () => {

                alert(
                    "You have 3 recent notifications."
                );

            }
        );
    }


    /* =========================================
       SUPPORT
    ========================================= */

    const supportBtn =
        document.getElementById(
            "supportBtn"
        );


    if (supportBtn) {

        supportBtn.addEventListener(
            "click",
            () => {

                alert(
                    "VORVENA Support will be connected here."
                );

            }
        );
    }


    /* =========================================
       LOGOUT
    ========================================= */

    const logoutBtn =
        document.getElementById(
            "logoutBtn"
        );


    if (logoutBtn) {

        logoutBtn.addEventListener(
            "click",
            () => {

                const confirmed =
                    confirm(
                        "Are you sure you want to log out?"
                    );


                if (!confirmed) {
                    return;
                }


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


                window.location.href =
                    "login.html";
            }
        );
    }


    /* =========================================
       PROJECT WORKSPACE
    ========================================= */

    const projectModal =
        document.getElementById(
            "projectModal"
        );

    const modalBackdrop =
        document.getElementById(
            "modalBackdrop"
        );

    const modalClose =
        document.getElementById(
            "modalClose"
        );

    const modalAction =
        document.getElementById(
            "modalAction"
        );

    const modalProjectTitle =
        document.getElementById(
            "modalProjectTitle"
        );


    function openProjectModal(projectName) {

        if (!projectModal) {
            return;
        }

        if (modalProjectTitle) {
            modalProjectTitle.textContent =
                projectName;
        }

        projectModal.classList.add("show");

        projectModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";
    }


    function closeProjectModal() {

        if (!projectModal) {
            return;
        }

        projectModal.classList.remove("show");

        projectModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow =
            "";
    }


    const projectItems =
        document.querySelectorAll(
            ".project-item"
        );


    projectItems.forEach(item => {

        item.addEventListener(
            "click",
            () => {

                const projectName =
                    item.dataset.project ||
                    "Project Workspace";

                openProjectModal(
                    projectName
                );

            }
        );

    });


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeProjectModal
        );
    }


    if (modalBackdrop) {

        modalBackdrop.addEventListener(
            "click",
            closeProjectModal
        );
    }


    if (modalAction) {

        modalAction.addEventListener(
            "click",
            closeProjectModal
        );
    }


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {
                closeProjectModal();
            }

        }
    );


    /* =========================================
       RESPONSIVE SIDEBAR RESET
    ========================================= */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 1100
            ) {
                closeSidebarMenu();
            }

        }
    );


    /* =========================================
       PAGE VISIBILITY AUTH CHECK
    ========================================= */

    window.addEventListener(
        "pageshow",
        () => {

            const currentLoggedIn =
                sessionStorage.getItem(
                    "vorvenaUserLoggedIn"
                );

            const currentUser =
                sessionStorage.getItem(
                    "vorvenaLoggedInUser"
                );


            if (
                currentLoggedIn !== "true" ||
                !currentUser
            ) {

                window.location.href =
                    "login.html";

            }

        }
    );


    /* =========================================
       CLEANUP OLD COMMUNITY LINKS
    ========================================= */

    const pageLinks =
        document.querySelectorAll(
            'a[href="community.html"]'
        );


    pageLinks.forEach(link => {

        const text =
            link.textContent
                .trim()
                .toLowerCase();


        if (
            text.includes(
                "find a professional"
            ) ||
            text.includes(
                "find professionals"
            )
        ) {
            link.href = "profiles.html";
        }

    });


    console.log(
        "VORVENA Client Dashboard loaded successfully."
    );

});