document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       NAVIGATION
    ========================================= */

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


        if (user.accountType === "client") {

            dashboardLink.href =
                "clients-dashboard.html";

            dashboardLink.classList.add("visible");

            return;
        }


        if (user.accountType === "professional") {

            dashboardLink.href =
                "professional-dashboard.html";

            dashboardLink.classList.add("visible");

            return;
        }


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


    setupDashboardLink();


    /* =========================================
       COUNTRY DATA
    ========================================= */

    const countries = [
        ["Afghanistan", "+93", "🇦🇫"],
        ["Albania", "+355", "🇦🇱"],
        ["Algeria", "+213", "🇩🇿"],
        ["Andorra", "+376", "🇦🇩"],
        ["Angola", "+244", "🇦🇴"],
        ["Antigua and Barbuda", "+1", "🇦🇬"],
        ["Argentina", "+54", "🇦🇷"],
        ["Armenia", "+374", "🇦🇲"],
        ["Australia", "+61", "🇦🇺"],
        ["Austria", "+43", "🇦🇹"],
        ["Azerbaijan", "+994", "🇦🇿"],
        ["Bahamas", "+1", "🇧🇸"],
        ["Bahrain", "+973", "🇧🇭"],
        ["Bangladesh", "+880", "🇧🇩"],
        ["Barbados", "+1", "🇧🇧"],
        ["Belarus", "+375", "🇧🇾"],
        ["Belgium", "+32", "🇧🇪"],
        ["Belize", "+501", "🇧🇿"],
        ["Benin", "+229", "🇧🇯"],
        ["Bhutan", "+975", "🇧🇹"],
        ["Bolivia", "+591", "🇧🇴"],
        ["Bosnia and Herzegovina", "+387", "🇧🇦"],
        ["Botswana", "+267", "🇧🇼"],
        ["Brazil", "+55", "🇧🇷"],
        ["Brunei", "+673", "🇧🇳"],
        ["Bulgaria", "+359", "🇧🇬"],
        ["Burkina Faso", "+226", "🇧🇫"],
        ["Burundi", "+257", "🇧🇮"],
        ["Cambodia", "+855", "🇰🇭"],
        ["Cameroon", "+237", "🇨🇲"],
        ["Canada", "+1", "🇨🇦"],
        ["Cape Verde", "+238", "🇨🇻"],
        ["Central African Republic", "+236", "🇨🇫"],
        ["Chad", "+235", "🇹🇩"],
        ["Chile", "+56", "🇨🇱"],
        ["China", "+86", "🇨🇳"],
        ["Colombia", "+57", "🇨🇴"],
        ["Comoros", "+269", "🇰🇲"],
        ["Congo", "+242", "🇨🇬"],
        ["Costa Rica", "+506", "🇨🇷"],
        ["Croatia", "+385", "🇭🇷"],
        ["Cuba", "+53", "🇨🇺"],
        ["Cyprus", "+357", "🇨🇾"],
        ["Czech Republic", "+420", "🇨🇿"],
        ["Denmark", "+45", "🇩🇰"],
        ["Djibouti", "+253", "🇩🇯"],
        ["Dominica", "+1", "🇩🇲"],
        ["Dominican Republic", "+1", "🇩🇴"],
        ["Ecuador", "+593", "🇪🇨"],
        ["Egypt", "+20", "🇪🇬"],
        ["El Salvador", "+503", "🇸🇻"],
        ["Equatorial Guinea", "+240", "🇬🇶"],
        ["Eritrea", "+291", "🇪🇷"],
        ["Estonia", "+372", "🇪🇪"],
        ["Eswatini", "+268", "🇸🇿"],
        ["Ethiopia", "+251", "🇪🇹"],
        ["Fiji", "+679", "🇫🇯"],
        ["Finland", "+358", "🇫🇮"],
        ["France", "+33", "🇫🇷"],
        ["Gabon", "+241", "🇬🇦"],
        ["Gambia", "+220", "🇬🇲"],
        ["Georgia", "+995", "🇬🇪"],
        ["Germany", "+49", "🇩🇪"],
        ["Ghana", "+233", "🇬🇭"],
        ["Greece", "+30", "🇬🇷"],
        ["Grenada", "+1", "🇬🇩"],
        ["Guatemala", "+502", "🇬🇹"],
        ["Guinea", "+224", "🇬🇳"],
        ["Guinea-Bissau", "+245", "🇬🇼"],
        ["Guyana", "+592", "🇬🇾"],
        ["Haiti", "+509", "🇭🇹"],
        ["Honduras", "+504", "🇭🇳"],
        ["Hungary", "+36", "🇭🇺"],
        ["Iceland", "+354", "🇮🇸"],
        ["India", "+91", "🇮🇳"],
        ["Indonesia", "+62", "🇮🇩"],
        ["Iran", "+98", "🇮🇷"],
        ["Iraq", "+964", "🇮🇶"],
        ["Ireland", "+353", "🇮🇪"],
        ["Israel", "+972", "🇮🇱"],
        ["Italy", "+39", "🇮🇹"],
        ["Jamaica", "+1", "🇯🇲"],
        ["Japan", "+81", "🇯🇵"],
        ["Jordan", "+962", "🇯🇴"],
        ["Kazakhstan", "+7", "🇰🇿"],
        ["Kenya", "+254", "🇰🇪"],
        ["Kiribati", "+686", "🇰🇮"],
        ["Kuwait", "+965", "🇰🇼"],
        ["Kyrgyzstan", "+996", "🇰🇬"],
        ["Laos", "+856", "🇱🇦"],
        ["Latvia", "+371", "🇱🇻"],
        ["Lebanon", "+961", "🇱🇧"],
        ["Lesotho", "+266", "🇱🇸"],
        ["Liberia", "+231", "🇱🇷"],
        ["Libya", "+218", "🇱🇾"],
        ["Liechtenstein", "+423", "🇱🇮"],
        ["Lithuania", "+370", "🇱🇹"],
        ["Luxembourg", "+352", "🇱🇺"],
        ["Madagascar", "+261", "🇲🇬"],
        ["Malawi", "+265", "🇲🇼"],
        ["Malaysia", "+60", "🇲🇾"],
        ["Maldives", "+960", "🇲🇻"],
        ["Mali", "+223", "🇲🇱"],
        ["Malta", "+356", "🇲🇹"],
        ["Marshall Islands", "+692", "🇲🇭"],
        ["Mauritania", "+222", "🇲🇷"],
        ["Mauritius", "+230", "🇲🇺"],
        ["Mexico", "+52", "🇲🇽"],
        ["Micronesia", "+691", "🇫🇲"],
        ["Moldova", "+373", "🇲🇩"],
        ["Monaco", "+377", "🇲🇨"],
        ["Mongolia", "+976", "🇲🇳"],
        ["Montenegro", "+382", "🇲🇪"],
        ["Morocco", "+212", "🇲🇦"],
        ["Mozambique", "+258", "🇲🇿"],
        ["Myanmar", "+95", "🇲🇲"],
        ["Namibia", "+264", "🇳🇦"],
        ["Nauru", "+674", "🇳🇷"],
        ["Nepal", "+977", "🇳🇵"],
        ["Netherlands", "+31", "🇳🇱"],
        ["New Zealand", "+64", "🇳🇿"],
        ["Nicaragua", "+505", "🇳🇮"],
        ["Niger", "+227", "🇳🇪"],
        ["Nigeria", "+234", "🇳🇬"],
        ["North Korea", "+850", "🇰🇵"],
        ["North Macedonia", "+389", "🇲🇰"],
        ["Norway", "+47", "🇳🇴"],
        ["Oman", "+968", "🇴🇲"],
        ["Pakistan", "+92", "🇵🇰"],
        ["Palau", "+680", "🇵🇼"],
        ["Palestine", "+970", "🇵🇸"],
        ["Panama", "+507", "🇵🇦"],
        ["Papua New Guinea", "+675", "🇵🇬"],
        ["Paraguay", "+595", "🇵🇾"],
        ["Peru", "+51", "🇵🇪"],
        ["Philippines", "+63", "🇵🇭"],
        ["Poland", "+48", "🇵🇱"],
        ["Portugal", "+351", "🇵🇹"],
        ["Qatar", "+974", "🇶🇦"],
        ["Romania", "+40", "🇷🇴"],
        ["Russia", "+7", "🇷🇺"],
        ["Rwanda", "+250", "🇷🇼"],
        ["Saint Kitts and Nevis", "+1", "🇰🇳"],
        ["Saint Lucia", "+1", "🇱🇨"],
        ["Saint Vincent and the Grenadines", "+1", "🇻🇨"],
        ["Samoa", "+685", "🇼🇸"],
        ["San Marino", "+378", "🇸🇲"],
        ["Sao Tome and Principe", "+239", "🇸🇹"],
        ["Saudi Arabia", "+966", "🇸🇦"],
        ["Senegal", "+221", "🇸🇳"],
        ["Serbia", "+381", "🇷🇸"],
        ["Seychelles", "+248", "🇸🇨"],
        ["Sierra Leone", "+232", "🇸🇱"],
        ["Singapore", "+65", "🇸🇬"],
        ["Slovakia", "+421", "🇸🇰"],
        ["Slovenia", "+386", "🇸🇮"],
        ["Solomon Islands", "+677", "🇸🇧"],
        ["Somalia", "+252", "🇸🇴"],
        ["South Africa", "+27", "🇿🇦"],
        ["South Korea", "+82", "🇰🇷"],
        ["South Sudan", "+211", "🇸🇸"],
        ["Spain", "+34", "🇪🇸"],
        ["Sri Lanka", "+94", "🇱🇰"],
        ["Sudan", "+249", "🇸🇩"],
        ["Suriname", "+597", "🇸🇷"],
        ["Sweden", "+46", "🇸🇪"],
        ["Switzerland", "+41", "🇨🇭"],
        ["Syria", "+963", "🇸🇾"],
        ["Taiwan", "+886", "🇹🇼"],
        ["Tajikistan", "+992", "🇹🇯"],
        ["Tanzania", "+255", "🇹🇿"],
        ["Thailand", "+66", "🇹🇭"],
        ["Togo", "+228", "🇹🇬"],
        ["Tonga", "+676", "🇹🇴"],
        ["Trinidad and Tobago", "+1", "🇹🇹"],
        ["Tunisia", "+216", "🇹🇳"],
        ["Turkey", "+90", "🇹🇷"],
        ["Turkmenistan", "+993", "🇹🇲"],
        ["Tuvalu", "+688", "🇹🇻"],
        ["Uganda", "+256", "🇺🇬"],
        ["Ukraine", "+380", "🇺🇦"],
        ["United Arab Emirates", "+971", "🇦🇪"],
        ["United Kingdom", "+44", "🇬🇧"],
        ["United States", "+1", "🇺🇸"],
        ["Uruguay", "+598", "🇺🇾"],
        ["Uzbekistan", "+998", "🇺🇿"],
        ["Vanuatu", "+678", "🇻🇺"],
        ["Vatican City", "+39", "🇻🇦"],
        ["Venezuela", "+58", "🇻🇪"],
        ["Vietnam", "+84", "🇻🇳"],
        ["Yemen", "+967", "🇾🇪"],
        ["Zambia", "+260", "🇿🇲"],
        ["Zimbabwe", "+263", "🇿🇼"]
    ];


    /* =========================================
       COUNTRY SELECT
    ========================================= */

    const countrySelect =
        document.getElementById("country");

    const phoneCode =
        document.getElementById("phoneCode");

    const selectedFlag =
        document.getElementById("selectedFlag");

    const phoneInput =
        document.getElementById("phone");


    if (countrySelect) {

        countries.forEach(
            ([name, code, flag]) => {

                const option =
                    document.createElement("option");

                option.value = name;

                option.textContent =
                    `${flag} ${name}`;

                option.dataset.code = code;
                option.dataset.flag = flag;

                countrySelect.appendChild(option);
            }
        );

        countrySelect.value = "Nigeria";
    }


    function updatePhoneCode() {

        if (
            !countrySelect ||
            !phoneCode ||
            !selectedFlag
        ) {
            return;
        }

        const selectedOption =
            countrySelect.options[
                countrySelect.selectedIndex
            ];


        if (
            !selectedOption ||
            !selectedOption.dataset.code
        ) {

            phoneCode.textContent = "+234";
            selectedFlag.textContent = "🇳🇬";

            return;
        }


        phoneCode.textContent =
            selectedOption.dataset.code;

        selectedFlag.textContent =
            selectedOption.dataset.flag;
    }


    if (countrySelect) {

        countrySelect.addEventListener(
            "change",
            updatePhoneCode
        );

        updatePhoneCode();
    }


    /* =========================================
       PHONE INPUT
    ========================================= */

    if (phoneInput) {

        phoneInput.addEventListener(
            "input",
            () => {

                phoneInput.value =
                    phoneInput.value.replace(
                        /\D/g,
                        ""
                    );

            }
        );
    }


    /* =========================================
       PROFILE PHOTO
    ========================================= */

    const profilePicture =
        document.getElementById(
            "profilePicture"
        );

    const imagePreview =
        document.getElementById(
            "imagePreview"
        );


    function resetImagePreview() {

        if (!imagePreview) {
            return;
        }

        imagePreview.innerHTML =
            "<span>+</span>";
    }


    if (
        profilePicture &&
        imagePreview
    ) {

        profilePicture.addEventListener(
            "change",
            () => {

                const file =
                    profilePicture.files[0];


                if (!file) {

                    resetImagePreview();

                    return;
                }


                const allowedTypes = [
                    "image/png",
                    "image/jpeg",
                    "image/webp"
                ];


                if (
                    !allowedTypes.includes(
                        file.type
                    )
                ) {

                    resetImagePreview();

                    profilePicture.value = "";

                    showMessage(
                        "Please select a PNG, JPG or WEBP image.",
                        "error"
                    );

                    return;
                }


                const reader =
                    new FileReader();


                reader.onload =
                    (event) => {

                        imagePreview.innerHTML = `
                            <img
                                src="${event.target.result}"
                                alt="Profile preview">
                        `;

                    };


                reader.readAsDataURL(file);

            }
        );
    }


    /* =========================================
       CV
    ========================================= */

    const cvInput =
        document.getElementById("cv");

    const cvName =
        document.getElementById("cvName");


    if (cvInput && cvName) {

        cvInput.addEventListener(
            "change",
            () => {

                const file =
                    cvInput.files[0];


                if (!file) {

                    cvName.textContent =
                        "CHOOSE YOUR CV";

                    return;
                }


                cvName.textContent =
                    file.name;

            }
        );
    }


    /* =========================================
       FORM
    ========================================= */

    const joinForm =
        document.getElementById("joinForm");

    const formMessage =
        document.getElementById("formMessage");


    function showMessage(
        message,
        type = ""
    ) {

        if (!formMessage) {
            return;
        }

        formMessage.textContent =
            message;

        formMessage.className =
            "form-message show";


        if (type) {
            formMessage.classList.add(type);
        }


        formMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }


    function clearMessage() {

        if (!formMessage) {
            return;
        }

        formMessage.textContent = "";

        formMessage.className =
            "form-message";
    }


    function getFullPhoneNumber() {

        if (
            !countrySelect ||
            !phoneInput
        ) {
            return "";
        }


        const selectedOption =
            countrySelect.options[
                countrySelect.selectedIndex
            ];


        const code =
            selectedOption?.dataset.code ||
            "+234";


        const number =
            phoneInput.value.replace(
                /\D/g,
                ""
            );


        return `${code}${number}`;
    }


    if (joinForm) {

        joinForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                clearMessage();


                /* =================================
                   REQUIRED FIELDS
                ================================= */

                if (!joinForm.checkValidity()) {

                    joinForm.reportValidity();

                    showMessage(
                        "Please complete all required fields before submitting your application.",
                        "error"
                    );

                    return;
                }


                /* =================================
                   PASSWORD
                ================================= */

                const password =
                    document.getElementById(
                        "password"
                    ).value;


                const confirmPassword =
                    document.getElementById(
                        "confirmPassword"
                    ).value;


                if (password.length < 8) {

                    showMessage(
                        "Your password must contain at least 8 characters.",
                        "error"
                    );

                    return;
                }


                if (
                    password !==
                    confirmPassword
                ) {

                    showMessage(
                        "Your passwords do not match.",
                        "error"
                    );

                    return;
                }


                /* =================================
                   PHONE
                ================================= */

                const phoneNumber =
                    getFullPhoneNumber();


                if (phoneNumber.length < 8) {

                    showMessage(
                        "Please enter a valid phone number.",
                        "error"
                    );

                    return;
                }


                /* =================================
                   FILES
                ================================= */

                const profileFile =
                    profilePicture?.files[0];

                const cvFile =
                    cvInput?.files[0];


                if (!profileFile) {

                    showMessage(
                        "Please upload your profile photo.",
                        "error"
                    );

                    return;
                }


                if (!cvFile) {

                    showMessage(
                        "Please upload your CV or resume.",
                        "error"
                    );

                    return;
                }


                /* =================================
                   PORTFOLIO
                ================================= */

                const portfolio =
                    document
                        .getElementById("portfolio")
                        .value
                        .trim();


                try {

                    new URL(portfolio);

                } catch {

                    showMessage(
                        "Please enter a valid portfolio URL.",
                        "error"
                    );

                    return;
                }


                /* =================================
                   ADDITIONAL LINK
                ================================= */

                const additionalLink =
                    document
                        .getElementById(
                            "additionalLink"
                        )
                        .value
                        .trim();


                if (additionalLink) {

                    try {

                        new URL(
                            additionalLink
                        );

                    } catch {

                        showMessage(
                            "Please enter a valid additional link or leave it empty.",
                            "error"
                        );

                        return;
                    }
                }


                /* =================================
                   SUBMIT BUTTON
                ================================= */

                const submitButton =
                    joinForm.querySelector(
                        ".submit-btn"
                    );


                if (submitButton) {

                    submitButton.disabled = true;
                    submitButton.style.opacity = "0.65";
                    submitButton.style.cursor = "wait";

                }


                /* =================================
                   APPLICATION DATA
                ================================= */

                const applicationData = {

                    firstName:
                        document
                            .getElementById(
                                "firstName"
                            )
                            .value
                            .trim(),

                    lastName:
                        document
                            .getElementById(
                                "lastName"
                            )
                            .value
                            .trim(),

                    email:
                        document
                            .getElementById(
                                "email"
                            )
                            .value
                            .trim(),

                    phone:
                        phoneNumber,

                    country:
                        countrySelect.value,

                    city:
                        document
                            .getElementById(
                                "city"
                            )
                            .value
                            .trim(),

                    profession:
                        document
                            .getElementById(
                                "profession"
                            )
                            .value,

                    experience:
                        document
                            .getElementById(
                                "experience"
                            )
                            .value,

                    skills:
                        document
                            .getElementById(
                                "skills"
                            )
                            .value
                            .trim(),

                    bio:
                        document
                            .getElementById(
                                "bio"
                            )
                            .value
                            .trim(),

                    portfolio,

                    additionalLink,

                    profilePhotoName:
                        profileFile.name,

                    cvName:
                        cvFile.name,

                    verificationStatus:
                        "not_started",

                    accountStatus:
                        "pending_verification"
                };


                console.log(
                    "VORVENA professional application:",
                    applicationData
                );


                /* =================================
                   BACKEND CONNECTION POINT
                =================================

                   The real backend should receive:

                   firstName
                   lastName
                   email
                   phone
                   country
                   city
                   profilePicture
                   profession
                   experience
                   skills
                   bio
                   portfolio
                   additionalLink
                   cv
                   password

                   IMPORTANT:
                   Passwords must be securely hashed
                   on the backend.

                   Do not store passwords in
                   localStorage or sessionStorage.
                */


                setTimeout(
                    () => {

                        showMessage(
                            "Your professional account application has been received. After your account is created, sign in to complete your profession-specific verification assessment.",
                            "success"
                        );


                        if (submitButton) {

                            submitButton.disabled =
                                false;

                            submitButton.style.opacity =
                                "1";

                            submitButton.style.cursor =
                                "pointer";
                        }

                    },
                    700
                );

            }
        );
    }

});