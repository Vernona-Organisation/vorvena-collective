document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       NAVIGATION ELEMENTS
    ========================================== */

    const menuBtn =
        document.getElementById("menuBtn");

    const mobileNav =
        document.getElementById("mobileNav");

    const navItems =
        document.querySelectorAll(".nav-link");

    const dashboardLinks = [
        document.getElementById("dashboardNavLink"),
        document.getElementById("mobileDashboardNavLink")
    ].filter(Boolean);



    /* =========================================
       DASHBOARD ROLE ROUTING
    ========================================== */

    function setupDashboardLinks() {

        if (!dashboardLinks.length) {
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

            dashboardLinks.forEach((link) => {

                link.hidden = true;

                link.classList.remove(
                    "visible"
                );

                link.href = "#";

            });

            return;
        }


        let user = null;


        try {

            user = JSON.parse(storedUser);

        } catch (error) {

            console.error(
                "Unable to read logged-in user."
            );

            dashboardLinks.forEach((link) => {

                link.hidden = true;

                link.classList.remove(
                    "visible"
                );

                link.href = "#";

            });

            return;
        }


        if (!user || !user.accountType) {

            dashboardLinks.forEach((link) => {

                link.hidden = true;

                link.classList.remove(
                    "visible"
                );

                link.href = "#";

            });

            return;
        }


        let dashboardHref = null;


        /* Client */

        if (
            user.accountType ===
            "client"
        ) {

            dashboardHref =
                "clients-dashboard.html";

        }


        /* Professional */

        if (
            user.accountType ===
            "professional"
        ) {

            dashboardHref =
                "professional-dashboard.html";

        }


        /* Unknown account type */

        if (!dashboardHref) {

            dashboardLinks.forEach((link) => {

                link.hidden = true;

                link.classList.remove(
                    "visible"
                );

                link.href = "#";

            });

            return;
        }


        /* Apply dashboard route */

        dashboardLinks.forEach((link) => {

            link.href =
                dashboardHref;

            link.hidden = false;

            link.classList.add(
                "visible"
            );

        });

    }



    /* =========================================
       CLOSE MOBILE MENU
    ========================================== */

    function closeMobileMenu() {

        if (!menuBtn || !mobileNav) {
            return;
        }


        mobileNav.classList.remove(
            "show"
        );


        menuBtn.classList.remove(
            "active"
        );


        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );


        menuBtn.setAttribute(
            "aria-label",
            "Open menu"
        );

    }



    /* =========================================
       MOBILE MENU
    ========================================== */

    if (menuBtn && mobileNav) {

        menuBtn.addEventListener(
            "click",
            () => {

                const isOpen =
                    mobileNav.classList.toggle(
                        "show"
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


        /* Close when navigation link is clicked */

        navItems.forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    closeMobileMenu();

                }
            );

        });


        /* Close with Escape */

        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeMobileMenu();

                }

            }
        );


        /* Close when returning to desktop */

        window.addEventListener(
            "resize",
            () => {

                if (
                    window.innerWidth >
                    768
                ) {

                    closeMobileMenu();

                }

            }
        );

    }



    /* =========================================
       ACTIVE PAGE
    ========================================== */

    let currentPage =
        window.location.pathname
            .split("/")
            .pop();


    if (!currentPage) {

        currentPage =
            "index.html";

    }


    navItems.forEach((link) => {

        const linkPage =
            link.getAttribute("href");


        if (
            !linkPage ||
            linkPage === "#"
        ) {

            link.classList.remove(
                "active"
            );

            return;
        }


        const cleanLinkPage =
            linkPage.split("#")[0];


        if (
            cleanLinkPage ===
            currentPage
        ) {

            link.classList.add(
                "active"
            );

        } else {

            link.classList.remove(
                "active"
            );

        }

    });



    /* =========================================
       INITIALIZE DASHBOARD
    ========================================== */

    setupDashboardLinks();



    /* =========================================
       CLIENT SESSION
    ========================================== */

    const isClientLoggedIn =
        sessionStorage.getItem(
            "vorvenaUserLoggedIn"
        ) === "true";


    let clientUser = null;


    try {

        clientUser =
            JSON.parse(
                sessionStorage.getItem(
                    "vorvenaLoggedInUser"
                ) || "null"
            );

    } catch (error) {

        clientUser = null;

    }


    /*
       Only use client information
       when the logged-in account
       is a client.
    */

    if (
        !isClientLoggedIn ||
        !clientUser ||
        clientUser.accountType !==
            "client"
    ) {

        clientUser = null;

    }



    /* =========================================
       SELECTED PROFESSIONAL
    ========================================== */

    const selectedProfessionalRaw =
        sessionStorage.getItem(
            "vorvenaSelectedProfessional"
        );


    let selectedProfessional = null;


    if (selectedProfessionalRaw) {

        try {

            selectedProfessional =
                JSON.parse(
                    selectedProfessionalRaw
                );

        } catch (error) {

            selectedProfessional = null;

        }

    }


    const selectedProfessionalBox =
        document.getElementById(
            "selectedProfessionalBox"
        );


    const selectedProfessionalName =
        document.getElementById(
            "selectedProfessionalName"
        );


    const selectedProfessionalDetails =
        document.getElementById(
            "selectedProfessionalDetails"
        );


    const selectedProfessionalInput =
        document.getElementById(
            "selectedProfessional"
        );


    if (
        selectedProfessional &&
        selectedProfessionalBox
    ) {

        selectedProfessionalBox.hidden =
            false;


        if (
            selectedProfessionalName
        ) {

            selectedProfessionalName.textContent =
                selectedProfessional.name ||
                selectedProfessional.fullName ||
                "Selected Professional";

        }


        if (
            selectedProfessionalDetails
        ) {

            const profession =
                selectedProfessional.profession ||
                selectedProfessional.role ||
                selectedProfessional.title ||
                "Professional";


            const location =
                selectedProfessional.location ||
                selectedProfessional.city ||
                "";


            selectedProfessionalDetails.textContent =
                location
                    ? `${profession} • ${location}`
                    : profession;

        }


        if (
            selectedProfessionalInput
        ) {

            selectedProfessionalInput.value =
                JSON.stringify(
                    selectedProfessional
                );

        }

    }



    /* =========================================
       PROJECT REQUEST FORM
    ========================================== */

    const projectForm =
        document.getElementById(
            "projectRequestForm"
        );


    const formMessage =
        document.getElementById(
            "formMessage"
        );


    const submitButton =
        document.getElementById(
            "submitProjectBtn"
        );


    const clientEmailInput =
        document.getElementById(
            "clientEmail"
        );


    const clientNameInput =
        document.getElementById(
            "clientName"
        );


    const projectSubject =
        document.getElementById(
            "projectSubject"
        );



    /* =========================================
       PREFILL CLIENT INFORMATION
    ========================================== */

    if (clientUser) {

        const clientName =
            clientUser.fullName ||
            clientUser.name ||
            "";


        const clientEmail =
            clientUser.email ||
            "";


        if (
            clientNameInput &&
            clientName &&
            !clientNameInput.value
        ) {

            clientNameInput.value =
                clientName;

        }


        if (clientEmailInput) {

            clientEmailInput.value =
                clientEmail;

        }


        if (
            projectSubject &&
            selectedProfessional
        ) {

            const professionalName =
                selectedProfessional.name ||
                selectedProfessional.fullName ||
                "Professional";


            projectSubject.value =
                `VORVENA Project Request - ${professionalName}`;

        }

    }



    /* =========================================
       PROJECT REQUEST SUBMISSION
    ========================================== */

    if (projectForm) {

        projectForm.addEventListener(
            "submit",
            async (event) => {

                event.preventDefault();


                /* -------------------------
                   CLIENT LOGIN REQUIRED
                ------------------------- */

                if (!clientUser) {

                    sessionStorage.setItem(
                        "vorvenaHiringIntent",
                        "true"
                    );


                    if (formMessage) {

                        formMessage.textContent =
                            "Please log in to submit a project request.";

                    }


                    setTimeout(() => {

                        window.location.href =
                            "login.html";

                    }, 1200);

                    return;

                }


                /* -------------------------
                   PROFESSIONAL REQUIRED
                ------------------------- */

                if (!selectedProfessional) {

                    if (formMessage) {

                        formMessage.textContent =
                            "Please select a professional before submitting your project.";

                    }


                    setTimeout(() => {

                        window.location.href =
                            "profiles.html";

                    }, 1200);

                    return;

                }


                /* -------------------------
                   FORM VALIDATION
                ------------------------- */

                if (
                    !projectForm.checkValidity()
                ) {

                    projectForm.reportValidity();

                    return;

                }


                /* -------------------------
                   SUBMITTING
                ------------------------- */

                if (submitButton) {

                    submitButton.disabled =
                        true;

                    submitButton.textContent =
                        "SUBMITTING...";

                }


                if (formMessage) {

                    formMessage.textContent =
                        "Submitting your project request...";

                }


                /* -------------------------
                   CLIENT EMAIL
                ------------------------- */

                if (clientEmailInput) {

                    clientEmailInput.value =
                        clientUser.email || "";

                }


                const formData =
                    new FormData(
                        projectForm
                    );


                formData.append(
                    "clientName",
                    clientUser.fullName ||
                    clientUser.name ||
                    ""
                );


                formData.append(
                    "clientEmail",
                    clientUser.email ||
                    ""
                );


                formData.append(
                    "accountType",
                    "client"
                );


                formData.append(
                    "selectedProfessionalData",
                    JSON.stringify(
                        selectedProfessional
                    )
                );


                /* -------------------------
                   SEND TO FORMSPREE
                ------------------------- */

                try {

                    const response =
                        await fetch(
                            projectForm.action,
                            {
                                method: "POST",

                                body: formData,

                                headers: {
                                    Accept:
                                        "application/json"
                                }
                            }
                        );


                    if (!response.ok) {

                        throw new Error(
                            "Unable to submit request."
                        );

                    }


                    if (formMessage) {

                        formMessage.textContent =
                            "Your project request has been submitted successfully.";

                    }


                    projectForm.reset();


                    if (
                        selectedProfessionalBox
                    ) {

                        selectedProfessionalBox.hidden =
                            true;

                    }


                    sessionStorage.removeItem(
                        "vorvenaHiringIntent"
                    );


                    sessionStorage.removeItem(
                        "vorvenaSelectedProfessional"
                    );


                    if (submitButton) {

                        submitButton.textContent =
                            "REQUEST SUBMITTED";

                    }

                } catch (error) {

                    console.error(
                        "Project request error:",
                        error
                    );


                    if (formMessage) {

                        formMessage.textContent =
                            "Something went wrong. Please try again.";

                    }


                    if (submitButton) {

                        submitButton.disabled =
                            false;

                        submitButton.textContent =
                            "SUBMIT PROJECT REQUEST";

                    }

                }

            }
        );

    }



    /* =========================================
       PROJECT REQUEST HASH
    ========================================== */

    if (
        window.location.hash ===
        "#project-request"
    ) {

        setTimeout(() => {

            const requestSection =
                document.getElementById(
                    "project-request"
                );


            if (requestSection) {

                requestSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }, 200);

    }



    /* =========================================
       REVEAL ANIMATION
    ========================================== */

    const revealElements =
        document.querySelectorAll(
            ".feature-card, " +
            ".process-card, " +
            ".request-info-card, " +
            ".structure-card"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                (
                    entries,
                    observerInstance
                ) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );


                                observerInstance.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            (element) => {

                observer.observe(
                    element
                );

            }
        );

    } else {

        /* Fallback for older browsers */

        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "visible"
                );

            }
        );

    }



    /* =========================================
       PAGE LOADED
    ========================================== */

    console.log(
        "VORVENA Clients page loaded successfully."
    );

});