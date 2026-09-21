document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE NAVIGATION
    ========================= */

    const menuBtn = document.getElementById("menuBtn");
    const mobileNav = document.getElementById("mobileNav");

    if (menuBtn && mobileNav) {

        menuBtn.addEventListener("click", () => {

            const isOpen = mobileNav.classList.toggle("show");

            menuBtn.classList.toggle("active", isOpen);

            menuBtn.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuBtn.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );

        });


        mobileNav.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                mobileNav.classList.remove("show");

                menuBtn.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            });

        });


        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                mobileNav.classList.remove("show");

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

        });


        window.addEventListener("resize", () => {

            if (window.innerWidth > 768) {

                mobileNav.classList.remove("show");

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

        });

    }


    /* =========================
       ROLE-BASED DASHBOARD
    ========================= */

    const dashboardLinks = [
        document.getElementById("dashboardNavLink"),
        document.getElementById("mobileDashboardNavLink")
    ].filter(Boolean);


    const loggedIn =
        sessionStorage.getItem("vorvenaUserLoggedIn") === "true";


    let user = null;

    try {

        user = JSON.parse(
            sessionStorage.getItem("vorvenaLoggedInUser") || "null"
        );

    } catch (error) {

        user = null;

    }


    let dashboardHref = null;


    if (
        loggedIn &&
        user &&
        user.accountType === "client"
    ) {

        dashboardHref = "clients-dashboard.html";

    }


    if (
        loggedIn &&
        user &&
        user.accountType === "professional"
    ) {

        dashboardHref = "professional-dashboard.html";

    }


    dashboardLinks.forEach((link) => {

        if (dashboardHref) {

            link.href = dashboardHref;

            link.hidden = false;

        } else {

            link.hidden = true;

        }

    });


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    let currentPage =
        window.location.pathname
            .split("/")
            .pop();


    if (!currentPage) {
        currentPage = "index.html";
    }


    document
        .querySelectorAll(
            ".desktop-nav a, .mobile-nav a"
        )
        .forEach((link) => {

            const href = link.getAttribute("href");

            if (
                href &&
                !href.startsWith("#") &&
                !href.startsWith("http")
            ) {

                const cleanHref =
                    href.split("#")[0];

                if (
                    cleanHref === currentPage &&
                    cleanHref !== "clients.html"
                ) {

                    link.classList.add("active");

                }

            }

        });


    /* =========================
       CLIENT SESSION
    ========================= */

    const isClientLoggedIn =
        sessionStorage.getItem("vorvenaUserLoggedIn") === "true";


    let clientUser = null;

    try {

        clientUser = JSON.parse(
            sessionStorage.getItem(
                "vorvenaLoggedInUser"
            ) || "null"
        );

    } catch (error) {

        clientUser = null;

    }


    /*
       Only use client information
       when the logged-in account is a client.
    */

    if (
        !isClientLoggedIn ||
        !clientUser ||
        clientUser.accountType !== "client"
    ) {

        clientUser = null;

    }


    /* =========================
       SELECTED PROFESSIONAL
    ========================= */

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

        selectedProfessionalBox.hidden = false;


        if (selectedProfessionalName) {

            selectedProfessionalName.textContent =
                selectedProfessional.name ||
                selectedProfessional.fullName ||
                "Selected Professional";

        }


        if (selectedProfessionalDetails) {

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


        if (selectedProfessionalInput) {

            selectedProfessionalInput.value =
                JSON.stringify(
                    selectedProfessional
                );

        }

    }


    /* =========================
       PROJECT REQUEST FORM
    ========================= */

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


    /*
       If the client is logged in,
       prefill the known client information.
    */

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


    if (projectForm) {

        projectForm.addEventListener(
            "submit",
            async (event) => {

                event.preventDefault();


                /*
                   A project request requires
                   a logged-in client.
                */

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


                /*
                   A selected professional is required
                   when the request comes from a
                   professional profile.
                */

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


                if (!projectForm.checkValidity()) {

                    projectForm.reportValidity();

                    return;

                }


                if (submitButton) {

                    submitButton.disabled = true;

                    submitButton.textContent =
                        "SUBMITTING...";

                }


                if (formMessage) {

                    formMessage.textContent =
                        "Submitting your project request...";

                }


                /*
                   Keep client session information
                   attached to the request.
                */

                if (clientEmailInput) {

                    clientEmailInput.value =
                        clientUser.email || "";

                }


                const formData =
                    new FormData(projectForm);


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


                    if (selectedProfessionalBox) {

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

                    console.error(error);


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


    /* =========================
       PROJECT REQUEST HASH
    ========================= */

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


    /* =========================
       REVEAL ANIMATION
    ========================= */

    const revealElements =
        document.querySelectorAll(
            ".feature-card, .process-card, .request-info-card, .structure-card"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observerInstance.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach((element) => {

            observer.observe(element);

        });

    }


    console.log(
        "VORVENA Clients page loaded successfully."
    );

});