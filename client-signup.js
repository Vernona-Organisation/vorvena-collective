document.addEventListener("DOMContentLoaded", () => {

    const form =
        document.getElementById("clientSignupForm");

    const fullName =
        document.getElementById("fullName");

    const email =
        document.getElementById("email");

    const phone =
        document.getElementById("phone");

    const company =
        document.getElementById("company");

    const password =
        document.getElementById("password");

    const confirmPassword =
        document.getElementById("confirmPassword");

    const showPassword =
        document.getElementById("showPassword");

    const showConfirmPassword =
        document.getElementById("showConfirmPassword");

    const terms =
        document.getElementById("terms");

    const privacy =
        document.getElementById("privacy");

    const formMessage =
        document.getElementById("formMessage");

    const submitButton =
        document.querySelector(".submit-btn");


    // ==========================================
    // SHOW / HIDE PASSWORD
    // ==========================================

    if (showPassword && password) {

        showPassword.addEventListener("click", () => {

            if (password.type === "password") {

                password.type = "text";
                showPassword.textContent = "Hide";

            } else {

                password.type = "password";
                showPassword.textContent = "Show";

            }

        });

    }


    // ==========================================
    // SHOW / HIDE CONFIRM PASSWORD
    // ==========================================

    if (showConfirmPassword && confirmPassword) {

        showConfirmPassword.addEventListener("click", () => {

            if (confirmPassword.type === "password") {

                confirmPassword.type = "text";
                showConfirmPassword.textContent = "Hide";

            } else {

                confirmPassword.type = "password";
                showConfirmPassword.textContent = "Show";

            }

        });

    }


    // ==========================================
    // SIGNUP FORM
    // ==========================================

    if (form) {

        form.addEventListener("submit", (event) => {

            event.preventDefault();

            clearMessage();


            // ==========================================
            // GET VALUES
            // ==========================================

            const nameValue =
                fullName.value.trim();

            const emailValue =
                email.value.trim().toLowerCase();

            const phoneValue =
                phone.value.trim();

            const companyValue =
                company.value.trim();

            const passwordValue =
                password.value;

            const confirmPasswordValue =
                confirmPassword.value;


            // ==========================================
            // REQUIRED FIELDS
            // ==========================================

            if (
                !nameValue ||
                !emailValue ||
                !passwordValue ||
                !confirmPasswordValue
            ) {

                showMessage(
                    "Please complete all required fields.",
                    "error"
                );

                return;
            }


            // ==========================================
            // NAME VALIDATION
            // ==========================================

            if (nameValue.length < 2) {

                showMessage(
                    "Please enter your full name.",
                    "error"
                );

                return;
            }


            // ==========================================
            // EMAIL VALIDATION
            // ==========================================

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(emailValue)) {

                showMessage(
                    "Please enter a valid email address.",
                    "error"
                );

                return;
            }


            // ==========================================
            // PASSWORD LENGTH
            // ==========================================

            if (passwordValue.length < 8) {

                showMessage(
                    "Password must be at least 8 characters.",
                    "error"
                );

                return;
            }


            // ==========================================
            // PASSWORD MATCH
            // ==========================================

            if (
                passwordValue !==
                confirmPasswordValue
            ) {

                showMessage(
                    "Passwords do not match.",
                    "error"
                );

                return;
            }


            // ==========================================
            // TERMS
            // ==========================================

            if (!terms.checked) {

                showMessage(
                    "Please agree to the Terms & Conditions.",
                    "error"
                );

                return;
            }


            // ==========================================
            // PRIVACY
            // ==========================================

            if (!privacy.checked) {

                showMessage(
                    "Please agree to the Privacy Policy.",
                    "error"
                );

                return;
            }


            // ==========================================
            // CHECK EXISTING ACCOUNT
            // ==========================================

            const existingAccount =
                localStorage.getItem(
                    "vorvenaClientAccount"
                );

            if (existingAccount) {

                try {

                    const account =
                        JSON.parse(existingAccount);

                    if (
                        account.email &&
                        account.email.toLowerCase() ===
                        emailValue
                    ) {

                        showMessage(
                            "A client account with this email already exists. Please login instead.",
                            "error"
                        );

                        return;
                    }

                } catch (error) {

                    // If old/corrupted data exists,
                    // allow the new account to replace it.

                }

            }


            // ==========================================
            // LOADING STATE
            // ==========================================

            if (submitButton) {

                submitButton.disabled = true;

                submitButton.style.opacity = "0.6";

                submitButton.style.cursor = "wait";

                const buttonText =
                    submitButton.querySelector("span");

                if (buttonText) {

                    buttonText.textContent =
                        "CREATING ACCOUNT...";

                }

            }


            // ==========================================
            // CREATE CLIENT ACCOUNT
            // ==========================================

            setTimeout(() => {

                const clientAccount = {

                    id:
                        "client-" +
                        Date.now(),

                    fullName:
                        nameValue,

                    email:
                        emailValue,

                    phone:
                        phoneValue,

                    company:
                        companyValue,

                    password:
                        passwordValue,

                    accountType:
                        "client",

                    createdAt:
                        new Date().toISOString()

                };


                // ==========================================
                // SAVE ACCOUNT
                // ==========================================

                localStorage.setItem(
                    "vorvenaClientAccount",
                    JSON.stringify(clientAccount)
                );


                // ==========================================
                // CREATE LOGIN SESSION
                // ==========================================

                const loggedInUser = {

                    id:
                        clientAccount.id,

                    fullName:
                        clientAccount.fullName,

                    email:
                        clientAccount.email,

                    phone:
                        clientAccount.phone,

                    company:
                        clientAccount.company,

                    accountType:
                        "client"

                };


                sessionStorage.setItem(
                    "vorvenaLoggedInUser",
                    JSON.stringify(loggedInUser)
                );

                sessionStorage.setItem(
                    "vorvenaUserLoggedIn",
                    "true"
                );


                // ==========================================
                // SAVE CLIENT INFORMATION
                // ==========================================

                sessionStorage.setItem(
                    "vorvenaClientName",
                    nameValue
                );

                sessionStorage.setItem(
                    "vorvenaClientEmail",
                    emailValue
                );

                sessionStorage.setItem(
                    "vorvenaAccountType",
                    "client"
                );


                // ==========================================
                // SUCCESS MESSAGE
                // ==========================================

                showMessage(
                    "Account created successfully. Redirecting...",
                    "success"
                );


                if (submitButton) {

                    const buttonText =
                        submitButton.querySelector("span");

                    if (buttonText) {

                        buttonText.textContent =
                            "ACCOUNT CREATED";

                    }

                    submitButton.style.opacity = "1";

                    submitButton.style.cursor =
                        "default";

                }


                // ==========================================
                // CHECK HIRING INTENT
                // ==========================================

                const hiringIntent =
                    sessionStorage.getItem(
                        "vorvenaHiringIntent"
                    );

                const selectedProfessional =
                    sessionStorage.getItem(
                        "vorvenaSelectedProfessional"
                    );


                // ==========================================
                // REDIRECT
                // ==========================================

                setTimeout(() => {

                    /*
                     * If the client came here because
                     * they wanted to hire someone,
                     * keep that professional selected.
                     */

                    if (
                        hiringIntent === "true" &&
                        selectedProfessional
                    ) {

                        window.location.href =
                            "clients.html#project-request";

                        return;
                    }


                    /*
                     * Normal signup.
                     */

                    window.location.href =
                        "clients.html";

                }, 800);


            }, 700);

        });

    }


    // ==========================================
    // MESSAGE FUNCTIONS
    // ==========================================

    function showMessage(message, type) {

        if (!formMessage) return;

        formMessage.textContent =
            message;

        formMessage.className =
            `form-message ${type}`;

    }


    function clearMessage() {

        if (!formMessage) return;

        formMessage.textContent = "";

        formMessage.className =
            "form-message";

    }

});