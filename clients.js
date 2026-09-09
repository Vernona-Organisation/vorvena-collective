document.addEventListener("DOMContentLoaded", () => {

    

    const menuBtn = document.getElementById("menuBtn");
    const mobileNav = document.getElementById("mobileNav");

    const navLinks = document.querySelectorAll(
        ".desktop-nav a, .mobile-nav a"
    );

    if (menuBtn && mobileNav) {

        menuBtn.addEventListener("click", () => {

            const isOpen =
                mobileNav.classList.toggle("show");

            menuBtn.classList.toggle(
                "active",
                isOpen
            );

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen
            );

            menuBtn.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );

        });


        /* Close menu after clicking a link */

        mobileNav.querySelectorAll("a").forEach(link => {

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


        /* Close menu with ESC */

        document.addEventListener("keydown", event => {

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


        /* Close menu when returning to desktop */

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


    /* ================= ACTIVE NAV ================= */

    let currentPage =
        window.location.pathname.split("/").pop();

    if (!currentPage) {
        currentPage = "index.html";
    }

    navLinks.forEach(link => {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });


    /* ================= PROJECT FORM ================= */

    const projectForm =
        document.getElementById("projectForm");

    const formMessage =
        document.getElementById("formMessage");

    const submitButton =
        projectForm
            ? projectForm.querySelector(".submit-btn")
            : null;


    if (projectForm && formMessage) {

        projectForm.addEventListener("submit", async (event) => {

            /* Stop the normal Formspree redirect */

            event.preventDefault();


            /* Make sure the form is valid */

            if (!projectForm.checkValidity()) {

                projectForm.reportValidity();

                return;

            }


            /* Make sure the Formspree endpoint exists */

            const formAction =
                projectForm.getAttribute("action");

            if (
                !formAction ||
                formAction === "YOUR_FORMSPREE_ENDPOINT"
            ) {

                formMessage.textContent =
                    "Something went wrong. Please try again later.";

                formMessage.style.color = "#b00020";

                return;

            }


            /* Disable button while submitting */

            if (submitButton) {

                submitButton.disabled = true;

                submitButton.style.opacity = "0.6";

                submitButton.style.cursor = "not-allowed";

                submitButton.innerHTML =
                    'Sending Request <span>...</span>';

            }


            /* Show sending message */

            formMessage.textContent =
                "Sending your project request...";

            formMessage.style.color = "#555";


            try {

                /* Collect form information */

                const formData =
                    new FormData(projectForm);


                /* Send request to Formspree */

                const response =
                    await fetch(
                        formAction,
                        {
                            method: "POST",
                            body: formData,
                            headers: {
                                "Accept": "application/json"
                            }
                        }
                    );


                /* Check Formspree response */

                if (response.ok) {

                    /* Success */

                    formMessage.innerHTML =
                        "<strong>REQUEST RECEIVED</strong><br>" +
                        "Thank you. Your project request has been successfully " +
                        "submitted to VORVENA. Our team will review your request " +
                        "and get back to you shortly.";

                    formMessage.style.color = "#111";

                    /* Reset the form */

                    projectForm.reset();


                    /* Restore button */

                    if (submitButton) {

                        submitButton.disabled = false;

                        submitButton.style.opacity = "1";

                        submitButton.style.cursor = "pointer";

                        submitButton.innerHTML =
                            'Request Submitted <span>✓</span>';

                    }


                    /* Return button to normal after a few seconds */

                    setTimeout(() => {

                        if (submitButton) {

                            submitButton.innerHTML =
                                'Submit Project Request <span>↗</span>';

                        }

                    }, 4000);


                } else {

                    /* Formspree returned an error */

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
                                    .map(error => error.message)
                                    .join(", ");

                        }

                    } catch (error) {

                        /* Keep default error message */

                    }


                    formMessage.innerHTML =
                        "<strong>SUBMISSION FAILED</strong><br>" +
                        errorMessage;

                    formMessage.style.color = "#b00020";


                    /* Restore button */

                    if (submitButton) {

                        submitButton.disabled = false;

                        submitButton.style.opacity = "1";

                        submitButton.style.cursor = "pointer";

                        submitButton.innerHTML =
                            'Try Again <span>↻</span>';

                    }

                }


            } catch (error) {

                /* Internet/network error */

                formMessage.innerHTML =
                    "<strong>CONNECTION ERROR</strong><br>" +
                    "We couldn't connect to the VORVENA request system. " +
                    "Please check your internet connection and try again.";

                formMessage.style.color = "#b00020";


                /* Restore button */

                if (submitButton) {

                    submitButton.disabled = false;

                    submitButton.style.opacity = "1";

                    submitButton.style.cursor = "pointer";

                    submitButton.innerHTML =
                        'Try Again <span>↻</span>';

                }

            }

        });

    }


    /* ================= SCROLL REVEAL ================= */

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

                            entry.target.classList.add("show");

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
