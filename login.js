document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const togglePassword =
        document.getElementById("togglePassword");

    const rememberCheckbox =
        document.getElementById("remember");

    const forgotPassword =
        document.getElementById("forgotPassword");

    const formMessage =
        document.getElementById("formMessage");


    // ==========================================
    // SHOW / HIDE PASSWORD
    // ==========================================

    if (togglePassword && passwordInput) {

        togglePassword.addEventListener("click", () => {

            const isPassword =
                passwordInput.type === "password";

            passwordInput.type =
                isPassword ? "text" : "password";

            togglePassword.textContent =
                isPassword ? "HIDE" : "SHOW";

        });

    }


    // ==========================================
    // REMEMBER EMAIL
    // ==========================================

    const savedEmail =
        localStorage.getItem("vorvenaRememberedEmail");

    if (savedEmail && emailInput) {

        emailInput.value = savedEmail;

        if (rememberCheckbox) {
            rememberCheckbox.checked = true;
        }

    }


    // ==========================================
    // LOGIN FORM
    // ==========================================

    if (loginForm) {

        loginForm.addEventListener("submit", (event) => {

            event.preventDefault();

            clearMessage();

            const email =
                emailInput.value.trim().toLowerCase();

            const password =
                passwordInput.value;


            // ==========================================
            // REQUIRED FIELDS
            // ==========================================

            if (!email || !password) {

                showMessage(
                    "Please enter your email and password.",
                    "error"
                );

                return;
            }


            // ==========================================
            // EMAIL VALIDATION
            // ==========================================

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                showMessage(
                    "Please enter a valid email address.",
                    "error"
                );

                return;
            }


            // ==========================================
            // PASSWORD LENGTH
            // ==========================================

            if (password.length < 8) {

                showMessage(
                    "Password must be at least 8 characters.",
                    "error"
                );

                return;
            }


            // ==========================================
            // GET STORED CLIENT ACCOUNT
            // ==========================================

            const storedAccount =
                localStorage.getItem("vorvenaClientAccount");

            if (!storedAccount) {

                showMessage(
                    "No client account was found. Please create an account first.",
                    "error"
                );

                return;
            }


            let account;

            try {

                account = JSON.parse(storedAccount);

            } catch (error) {

                showMessage(
                    "Your account data could not be read. Please create your account again.",
                    "error"
                );

                return;
            }


            // ==========================================
            // CHECK ACCOUNT TYPE
            // ==========================================

            if (account.accountType !== "client") {

                showMessage(
                    "This account is not registered as a client account.",
                    "error"
                );

                return;
            }


            // ==========================================
            // CHECK EMAIL
            // ==========================================

            if (
                !account.email ||
                account.email.toLowerCase() !== email
            ) {

                showMessage(
                    "Incorrect email or password.",
                    "error"
                );

                return;
            }


            // ==========================================
            // CHECK PASSWORD
            // ==========================================

            if (account.password !== password) {

                showMessage(
                    "Incorrect email or password.",
                    "error"
                );

                return;
            }


            // ==========================================
            // REMEMBER EMAIL
            // ==========================================

            if (
                rememberCheckbox &&
                rememberCheckbox.checked
            ) {

                localStorage.setItem(
                    "vorvenaRememberedEmail",
                    email
                );

            } else {

                localStorage.removeItem(
                    "vorvenaRememberedEmail"
                );

            }


            // ==========================================
            // CREATE ACTIVE LOGIN SESSION
            // ==========================================

            const loggedInUser = {

                id: account.id || "",
                fullName: account.fullName || "",
                email: account.email || "",
                phone: account.phone || "",
                company: account.company || "",
                accountType: "client"

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
            // KEEP CLIENT INFORMATION
            // ==========================================

            sessionStorage.setItem(
                "vorvenaClientName",
                account.fullName || ""
            );

            sessionStorage.setItem(
                "vorvenaClientEmail",
                account.email || ""
            );

            sessionStorage.setItem(
                "vorvenaAccountType",
                "client"
            );


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
            // LOGIN SUCCESS
            // ==========================================

            showMessage(
                "Login successful. Redirecting...",
                "success"
            );


            // ==========================================
            // REDIRECT
            // ==========================================

            setTimeout(() => {

                /*
                 * If the client clicked
                 * "Hire This Professional"
                 * before logging in, send them
                 * directly to the project request page.
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
                 * Normal login without hiring intent.
                 */

                window.location.href =
                    "clients.html";

            }, 700);

        });

    }


    // ==========================================
    // FORGOT PASSWORD
    // ==========================================

    if (forgotPassword) {

        forgotPassword.addEventListener("click", (event) => {

            event.preventDefault();

            const storedAccount =
                localStorage.getItem("vorvenaClientAccount");

            if (!storedAccount) {

                showMessage(
                    "No client account was found. Please create an account first.",
                    "error"
                );

                return;
            }

            showMessage(
                "Password recovery will be connected to VORVENA authentication later.",
                "success"
            );

        });

    }


    // ==========================================
    // MESSAGE
    // ==========================================

    function showMessage(message, type) {

        if (!formMessage) return;

        formMessage.textContent = message;

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