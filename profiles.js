document.addEventListener("DOMContentLoaded", () => {

    const menuBtn =
        document.getElementById("menuBtn");

    const navLinks =
        document.getElementById("navLinks");

    const navItems =
        document.querySelectorAll(".nav-link");

    const dashboardLink =
        document.getElementById("dashboardNavLink");


    const searchInput =
        document.getElementById("searchInput");

    const professionFilter =
        document.getElementById("professionFilter");

    const profileCards =
        document.querySelectorAll(".profile-card");

    const hireButtons =
        document.querySelectorAll(".hire-btn");


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

            dashboardLink.classList.remove(
                "visible"
            );

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

            dashboardLink.classList.remove(
                "visible"
            );

            dashboardLink.href = "#";

            return;
        }


        if (!user || !user.accountType) {

            dashboardLink.classList.remove(
                "visible"
            );

            dashboardLink.href = "#";

            return;
        }


        /* Client */

        if (user.accountType === "client") {

            dashboardLink.href =
                "clients-dashboard.html";

            dashboardLink.classList.add(
                "visible"
            );

            return;
        }


        /* Professional */

        if (
            user.accountType ===
            "professional"
        ) {

            dashboardLink.href =
                "professional-dashboard.html";

            dashboardLink.classList.add(
                "visible"
            );

            return;
        }


        /* Unknown account type */

        dashboardLink.classList.remove(
            "visible"
        );

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

        menuBtn.addEventListener(
            "click",
            () => {

                const isOpen =
                    navLinks.classList.toggle(
                        "open"
                    );

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

            }
        );


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


    /* =========================================
       SEARCH + FILTER
    ========================================= */

    function filterProfiles() {

        const searchValue =
            searchInput
                ? searchInput.value
                    .toLowerCase()
                    .trim()
                : "";


        const professionValue =
            professionFilter
                ? professionFilter.value
                    .toLowerCase()
                : "all";


        let visibleProfiles = 0;


        profileCards.forEach(card => {

            const name =
                (
                    card.dataset.name ||
                    ""
                ).toLowerCase();


            const profession =
                (
                    card.dataset.profession ||
                    ""
                ).toLowerCase();


            const skills =
                (
                    card.dataset.skills ||
                    ""
                ).toLowerCase();


            const matchesSearch =
                name.includes(searchValue) ||
                profession.includes(searchValue) ||
                skills.includes(searchValue);


            const matchesProfession =
                professionValue === "all" ||
                profession === professionValue;


            if (
                matchesSearch &&
                matchesProfession
            ) {

                card.style.display = "";

                visibleProfiles++;

            } else {

                card.style.display = "none";

            }

        });


        /* =========================
           EMPTY STATE
        ========================= */

        const emptyState =
            document.getElementById(
                "emptyState"
            );


        if (emptyState) {

            emptyState.style.display =
                visibleProfiles === 0
                    ? "block"
                    : "none";

        }

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterProfiles
        );

    }


    if (professionFilter) {

        professionFilter.addEventListener(
            "change",
            filterProfiles
        );

    }


    /* =========================================
       HIRE PROFESSIONAL
    ========================================= */

    hireButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const card =
                    button.closest(
                        ".profile-card"
                    );


                if (!card) return;


                const professional = {

                    id:
                        card.dataset.id ||
                        "",

                    name:
                        card.dataset.name ||
                        "",

                    profession:
                        card.dataset.profession ||
                        "",

                    skills:
                        card.dataset.skills ||
                        "",

                    profile:
                        card.dataset.profile ||
                        ""

                };


                sessionStorage.setItem(
                    "vorvenaSelectedProfessional",
                    JSON.stringify(
                        professional
                    )
                );


                sessionStorage.setItem(
                    "vorvenaHiringIntent",
                    "true"
                );


                window.location.href =
                    "login.html";

            }
        );

    });


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements =
        document.querySelectorAll(
            ".profile-card"
        );


    if (
        revealElements.length > 0 &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            element.classList.add("reveal");

            observer.observe(element);

        });

    }


    /* =========================================
       INITIAL FILTER
    ========================================= */

    filterProfiles();

});