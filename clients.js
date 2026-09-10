document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const mobileNav = document.getElementById("mobileNav");

    const navLinks = document.querySelectorAll(
        ".desktop-nav a, .mobile-nav a"
    );

    function closeMobileMenu() {

        if (!menuBtn || !mobileNav) return;

        mobileNav.classList.remove("show");
        menuBtn.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open menu");
    }


    if (menuBtn && mobileNav) {

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.addEventListener("click", () => {

            const isOpen =
                mobileNav.classList.toggle("show");

            menuBtn.classList.toggle("active", isOpen);

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen
            );

            menuBtn.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );

        });


        mobileNav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                closeMobileMenu();
            });

        });


        document.addEventListener("keydown", event => {

            if (event.key === "Escape") {
                closeMobileMenu();
            }

        });


        window.addEventListener("resize", () => {

            if (window.innerWidth > 768) {
                closeMobileMenu();
            }

        });

    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    let currentPage =
        window.location.pathname.split("/").pop();

    if (!currentPage) {
        currentPage = "index.html";
    }

    navLinks.forEach(link => {

        let linkPage =
            link.getAttribute("href");

        if (!linkPage) return;

        linkPage =
            linkPage.split("/").pop().split("#")[0];

        if (linkPage === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });


    /* =====================================================
       CLIENT LOGIN STATUS
    ===================================================== */

    const isClientLoggedIn =
        sessionStorage.getItem("vorvenaUserLoggedIn") === "true";

    let loggedInUser = null;

    try {

        const storedUser =
            sessionStorage.getItem("vorvenaLoggedInUser");

        if (storedUser) {
            loggedInUser = JSON.parse(storedUser);
        }

    } catch (error) {

        loggedInUser = null;

    }


    /* =====================================================
       SELECTED PROFESSIONAL
    ===================================================== */

    const selectedProfessionalBox =
        document.getElementById("selectedProfessional");

    const selectedProfessionalName =
        document.getElementById("selectedProfessionalName");

    const selectedProfessionalProfession =
        document.getElementById("selectedProfessionalProfession");

    const selectedProfessionalSkills =
        document.getElementById("selectedProfessionalSkills");

    const changeProfessional =
        document.getElementById("changeProfessional");

    let selectedProfessional = null;


    try {

        const storedProfessional =
            sessionStorage.getItem(
                "vorvenaSelectedProfessional"
            );

        if (storedProfessional) {

            selectedProfessional =
                JSON.parse(storedProfessional);

        }

    } catch (error) {

        selectedProfessional = null;

    }


    /* =====================================================
       DISPLAY SELECTED PROFESSIONAL
    ===================================================== */

    function displaySelectedProfessional() {

        if (
            !selectedProfessional ||
            !selectedProfessionalBox
        ) {
            return;
        }


        if (selectedProfessionalName) {

            selectedProfessionalName.textContent =
                selectedProfessional.name || "Professional";

        }


        if (selectedProfessionalProfession) {

            selectedProfessionalProfession.textContent =
                selectedProfessional.profession || "Professional";

        }


        if (selectedProfessionalSkills) {

            selectedProfessionalSkills.textContent =
                selectedProfessional.skills ||
                "Skills available on profile";

        }


        selectedProfessionalBox.classList.add("show");

    }


    displaySelectedProfessional();


    /* =====================================================
       CHANGE PROFESSIONAL
    ===================================================== */



    /* =====================================================
       PROJECT REQUEST FORM
    ===================================================== */

    const projectForm =
        document.getElementById("projectForm");

    const formMessage =
        document.getElementById("formMessage");

    const submitButton =
        projectForm
            ? projectForm.querySelector(".submit-btn")
            : null;


    if (projectForm && formMessage) {

        projectForm.addEventListener(
            "submit",
            async event => {

                event.preventDefault();


                /* -----------------------------------------
                   CHECK LOGIN
                ----------------------------------------- */

                if (!isClientLoggedIn || !loggedInUser) {

                    sessionStorage.setItem(
                        "vorvenaHiringIntent",
                        "true"
                    );


                    formMessage.innerHTML =
                        "<strong>CLIENT LOGIN REQUIRED</strong><br>" +
                        "Please log in or create a client account before submitting a project request.";

                    formMessage.style.color =
                        "#b00020";


                    setTimeout(() => {

                        window.location.href =
                            "login.html";

                    }, 1200);

                    return;

                }


                /* -----------------------------------------
                   CHECK SELECTED PROFESSIONAL
                ----------------------------------------- */

                if (!selectedProfessional) {

                    formMessage.innerHTML =
                        "<strong>SELECT A PROFESSIONAL</strong><br>" +
                        "Please return to the Profiles page and choose the professional you want to hire.";

                    formMessage.style.color =
                        "#b00020";


                    setTimeout(() => {

                        window.location.href =
                            "profiles.html";

                    }, 1200);

                    return;

                }


                /* -----------------------------------------
                   FORM VALIDATION
                ----------------------------------------- */

                if (!projectForm.checkValidity()) {

                    projectForm.reportValidity();

                    return;

                }


                /* -----------------------------------------
                   FORMSPREE ENDPOINT
                ----------------------------------------- */

                const formAction =
                    projectForm.getAttribute("action");

                if (
                    !formAction ||
                    formAction === "YOUR_FORMSPREE_ENDPOINT"
                ) {

                    formMessage.textContent =
                        "Something went wrong. Please try again later.";

                    formMessage.style.color =
                        "#b00020";

                    return;

                }


                /* -----------------------------------------
                   DISABLE SUBMIT BUTTON
                ----------------------------------------- */

                if (submitButton) {

                    submitButton.disabled = true;

                    submitButton.style.opacity = "0.6";

                    submitButton.style.cursor =
                        "not-allowed";

                    submitButton.innerHTML =
                        'Sending Request <span>...</span>';

                }


                formMessage.textContent =
                    "Sending your project request...";

                formMessage.style.color =
                    "#555";


                try {

                    /* -------------------------------------
                       COLLECT FORM DATA
                    ------------------------------------- */

                    const formData =
                        new FormData(projectForm);


                    /* -------------------------------------
                       ADD CLIENT INFORMATION
                    ------------------------------------- */

                    formData.append(
                        "client_name",
                        loggedInUser.fullName ||
                        sessionStorage.getItem(
                            "vorvenaClientName"
                        ) ||
                        ""
                    );


                    formData.append(
                        "client_email",
                        loggedInUser.email ||
                        sessionStorage.getItem(
                            "vorvenaClientEmail"
                        ) ||
                        ""
                    );


                    formData.append(
                        "client_account_type",
                        "client"
                    );


                    /* -------------------------------------
                       ADD SELECTED PROFESSIONAL
                    ------------------------------------- */

                    formData.append(
                        "selected_professional",
                        selectedProfessional.name || ""
                    );


                    formData.append(
                        "professional_profession",
                        selectedProfessional.profession || ""
                    );


                    formData.append(
                        "professional_skills",
                        selectedProfessional.skills || ""
                    );


                    /* -------------------------------------
                       SEND TO FORMSPREE
                    ------------------------------------- */

                    const response =
                        await fetch(
                            formAction,
                            {
                                method: "POST",
                                body: formData,
                                headers: {
                                    "Accept":
                                        "application/json"
                                }
                            }
                        );


                    /* -------------------------------------
                       SUCCESS
                    ------------------------------------- */

                    if (response.ok) {

                        formMessage.innerHTML =
                            "<strong>REQUEST RECEIVED</strong><br>" +
                            "Your request to work with " +
                            (selectedProfessional.name || "the professional") +
                            " has been successfully submitted to VORVENA.";

                        formMessage.style.color =
                            "#111";


                        projectForm.reset();


                        /* ---------------------------------
                           CLEAR HIRING SESSION
                        --------------------------------- */

                        sessionStorage.removeItem(
                            "vorvenaHiringIntent"
                        );

                        sessionStorage.removeItem(
                            "vorvenaSelectedProfessional"
                        );


                        /* ---------------------------------
                           HIDE PROFESSIONAL BOX
                        --------------------------------- */

                        if (selectedProfessionalBox) {

                            selectedProfessionalBox.classList.remove(
                                "show"
                            );

                        }


                        /* ---------------------------------
                           RESTORE BUTTON
                        --------------------------------- */

                        if (submitButton) {

                            submitButton.disabled = false;

                            submitButton.style.opacity =
                                "1";

                            submitButton.style.cursor =
                                "pointer";

                            submitButton.innerHTML =
                                'Request Submitted <span>✓</span>';

                        }


                        setTimeout(() => {

                            if (submitButton) {

                                submitButton.innerHTML =
                                    'Submit Project Request <span>↗</span>';

                            }

                        }, 4000);


                    } else {

                        /* ---------------------------------
                           FORMSPREE ERROR
                        --------------------------------- */

                        let errorMessage =
                            "We couldn't submit your request. Please try again.";


                        try {

                            const data =
                                await response.json();

                            if (
                                data &&
                                data.errors &&
                                data.errors.length
                            ) {

                                errorMessage =
                                    data.errors
                                        .map(
                                            error =>
                                                error.message
                                        )
                                        .join(", ");

                            }

                        } catch (error) {

                            /* Use default error */

                        }


                        formMessage.innerHTML =
                            "<strong>SUBMISSION FAILED</strong><br>" +
                            errorMessage;

                        formMessage.style.color =
                            "#b00020";


                        if (submitButton) {

                            submitButton.disabled = false;

                            submitButton.style.opacity =
                                "1";

                            submitButton.style.cursor =
                                "pointer";

                            submitButton.innerHTML =
                                'Try Again <span>↻</span>';

                        }

                    }


                } catch (error) {

                    /* -------------------------------------
                       NETWORK ERROR
                    ------------------------------------- */

                    formMessage.innerHTML =
                        "<strong>CONNECTION ERROR</strong><br>" +
                        "We couldn't connect to the VORVENA request system. Please check your internet connection and try again.";

                    formMessage.style.color =
                        "#b00020";


                    if (submitButton) {

                        submitButton.disabled = false;

                        submitButton.style.opacity =
                            "1";

                        submitButton.style.cursor =
                            "pointer";

                        submitButton.innerHTML =
                            'Try Again <span>↻</span>';

                    }

                }

            }
        );

    }


    /* =====================================================
       HASH / PROJECT REQUEST
    ===================================================== */

    if (
        window.location.hash === "#project-request"
    ) {

        setTimeout(() => {

            const requestSection =
                document.querySelector(
                    ".request-section"
                );

            if (requestSection) {

                requestSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }, 300);

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".benefit-card, .process-item, .access-box, .payment-box, .global-content"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

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

    } else {

        revealElements.forEach(element => {

            element.classList.add("show");

        });

    }

});