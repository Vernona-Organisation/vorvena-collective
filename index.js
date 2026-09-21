document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");
    const navItems = document.querySelectorAll(".nav-link");

    const dashboardLink =
        document.getElementById("dashboardNavLink");


    /* =========================================
       DASHBOARD ROLE ROUTING
    ========================================= */

    function setupDashboardLink() {

        if (!dashboardLink) {
            return;
        }

        const loggedIn =
            sessionStorage.getItem(
                "vorvenaUserLoggedIn"
            ) === "true";

        const storedUser =
            sessionStorage.getItem(
                "vorvenaLoggedInUser"
            );


        /* Logged out */

        if (!loggedIn || !storedUser) {

            dashboardLink.classList.remove("visible");
            dashboardLink.href = "#";

            return;
        }


        let user = null;

        try {

            user = JSON.parse(storedUser);

        } catch (error) {

            console.error(
                "Unable to read logged-in user."
            );

            dashboardLink.classList.remove("visible");
            dashboardLink.href = "#";

            return;
        }


        if (!user || !user.accountType) {

            dashboardLink.classList.remove("visible");
            dashboardLink.href = "#";

            return;
        }


        /* Client */

        if (user.accountType === "client") {

            dashboardLink.href =
                "clients-dashboard.html";

            dashboardLink.classList.add("visible");

            return;
        }


        /* Professional */

        if (user.accountType === "professional") {

            dashboardLink.href =
                "professional-dashboard.html";

            dashboardLink.classList.add("visible");

            return;
        }


        /* Unknown account type */

        dashboardLink.classList.remove("visible");
        dashboardLink.href = "#";
    }


    /* =========================================
       MOBILE MENU
    ========================================= */

    function closeMobileMenu() {

        if (!menuBtn || !navLinks) {
            return;
        }

        navLinks.classList.remove("open");

        menuBtn.classList.remove("active");

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

        menuBtn.setAttribute(
            "aria-label",
            "Open menu"
        );
    }


    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            const isOpen =
                navLinks.classList.toggle("open");

            menuBtn.classList.toggle(
                "active",
                isOpen
            );

            menuBtn.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuBtn.setAttribute(
                "aria-label",
                isOpen
                    ? "Close menu"
                    : "Open menu"
            );
        });


        navItems.forEach((link) => {

            link.addEventListener(
                "click",
                () => {
                    closeMobileMenu();
                }
            );

        });


        document.addEventListener(
            "keydown",
            (event) => {

                if (event.key === "Escape") {
                    closeMobileMenu();
                }

            }
        );


        window.addEventListener(
            "resize",
            () => {

                if (window.innerWidth > 768) {
                    closeMobileMenu();
                }

            }
        );
    }


    /* =========================================
       ACTIVE PAGE
    ========================================= */

    let currentPage =
        window.location.pathname
            .split("/")
            .pop();


    if (!currentPage) {
        currentPage = "index.html";
    }


    navItems.forEach((link) => {

        const linkPage =
            link.getAttribute("href");


        if (
            linkPage &&
            linkPage !== "#" &&
            linkPage === currentPage
        ) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });


    /* =========================================
       INITIALIZE DASHBOARD
    ========================================= */

    setupDashboardLink();

});