
document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const mobileNav = document.getElementById("mobileNav");
    const navLinks = document.querySelectorAll(".desktop-nav a, .mobile-nav a");

    const countrySelect = document.getElementById("country");
    const phoneCode = document.getElementById("phoneCode");
    const selectedFlag = document.getElementById("selectedFlag");
    const phone = document.getElementById("phone");

    const countries = [
        ["Afghanistan", "🇦🇫", "+93"],
        ["Albania", "🇦🇱", "+355"],
        ["Algeria", "🇩🇿", "+213"],
        ["Andorra", "🇦🇩", "+376"],
        ["Angola", "🇦🇴", "+244"],
        ["Antigua and Barbuda", "🇦🇬", "+1"],
        ["Argentina", "🇦🇷", "+54"],
        ["Armenia", "🇦🇲", "+374"],
        ["Australia", "🇦🇺", "+61"],
        ["Austria", "🇦🇹", "+43"],
        ["Azerbaijan", "🇦🇿", "+994"],

        ["Bahamas", "🇧🇸", "+1"],
        ["Bahrain", "🇧🇭", "+973"],
        ["Bangladesh", "🇧🇩", "+880"],
        ["Barbados", "🇧🇧", "+1"],
        ["Belarus", "🇧🇾", "+375"],
        ["Belgium", "🇧🇪", "+32"],
        ["Belize", "🇧🇿", "+501"],
        ["Benin", "🇧🇯", "+229"],
        ["Bhutan", "🇧🇹", "+975"],
        ["Bolivia", "🇧🇴", "+591"],
        ["Bosnia and Herzegovina", "🇧🇦", "+387"],
        ["Botswana", "🇧🇼", "+267"],
        ["Brazil", "🇧🇷", "+55"],
        ["Brunei", "🇧🇳", "+673"],
        ["Bulgaria", "🇧🇬", "+359"],
        ["Burkina Faso", "🇧🇫", "+226"],
        ["Burundi", "🇧🇮", "+257"],

        ["Cabo Verde", "🇨🇻", "+238"],
        ["Cambodia", "🇰🇭", "+855"],
        ["Cameroon", "🇨🇲", "+237"],
        ["Canada", "🇨🇦", "+1"],
        ["Central African Republic", "🇨🇫", "+236"],
        ["Chad", "🇹🇩", "+235"],
        ["Chile", "🇨🇱", "+56"],
        ["China", "🇨🇳", "+86"],
        ["Colombia", "🇨🇴", "+57"],
        ["Comoros", "🇰🇲", "+269"],
        ["Congo", "🇨🇬", "+242"],
        ["Costa Rica", "🇨🇷", "+506"],
        ["Croatia", "🇭🇷", "+385"],
        ["Cuba", "🇨🇺", "+53"],
        ["Cyprus", "🇨🇾", "+357"],
        ["Czechia", "🇨🇿", "+420"],

        ["Democratic Republic of the Congo", "🇨🇩", "+243"],
        ["Denmark", "🇩🇰", "+45"],
        ["Djibouti", "🇩🇯", "+253"],
        ["Dominica", "🇩🇲", "+1"],
        ["Dominican Republic", "🇩🇴", "+1"],

        ["Ecuador", "🇪🇨", "+593"],
        ["Egypt", "🇪🇬", "+20"],
        ["El Salvador", "🇸🇻", "+503"],
        ["Equatorial Guinea", "🇬🇶", "+240"],
        ["Eritrea", "🇪🇷", "+291"],
        ["Estonia", "🇪🇪", "+372"],
        ["Eswatini", "🇸🇿", "+268"],
        ["Ethiopia", "🇪🇹", "+251"],

        ["Fiji", "🇫🇯", "+679"],
        ["Finland", "🇫🇮", "+358"],
        ["France", "🇫🇷", "+33"],

        ["Gabon", "🇬🇦", "+241"],
        ["Gambia", "🇬🇲", "+220"],
        ["Georgia", "🇬🇪", "+995"],
        ["Germany", "🇩🇪", "+49"],
        ["Ghana", "🇬🇭", "+233"],
        ["Greece", "🇬🇷", "+30"],
        ["Grenada", "🇬🇩", "+1"],
        ["Guatemala", "🇬🇹", "+502"],
        ["Guinea", "🇬🇳", "+224"],
        ["Guinea-Bissau", "🇬🇼", "+245"],
        ["Guyana", "🇬🇾", "+592"],

        ["Haiti", "🇭🇹", "+509"],
        ["Honduras", "🇭🇳", "+504"],
        ["Hungary", "🇭🇺", "+36"],

        ["Iceland", "🇮🇸", "+354"],
        ["India", "🇮🇳", "+91"],
        ["Indonesia", "🇮🇩", "+62"],
        ["Iran", "🇮🇷", "+98"],
        ["Iraq", "🇮🇶", "+964"],
        ["Ireland", "🇮🇪", "+353"],
        ["Israel", "🇮🇱", "+972"],
        ["Italy", "🇮🇹", "+39"],
        ["Ivory Coast", "🇨🇮", "+225"],

        ["Jamaica", "🇯🇲", "+1"],
        ["Japan", "🇯🇵", "+81"],
        ["Jordan", "🇯🇴", "+962"],

        ["Kazakhstan", "🇰🇿", "+7"],
        ["Kenya", "🇰🇪", "+254"],
        ["Kiribati", "🇰🇮", "+686"],
        ["Kuwait", "🇰🇼", "+965"],
        ["Kyrgyzstan", "🇰🇬", "+996"],

        ["Laos", "🇱🇦", "+856"],
        ["Latvia", "🇱🇻", "+371"],
        ["Lebanon", "🇱🇧", "+961"],
        ["Lesotho", "🇱🇸", "+266"],
        ["Liberia", "🇱🇷", "+231"],
        ["Libya", "🇱🇾", "+218"],
        ["Liechtenstein", "🇱🇮", "+423"],
        ["Lithuania", "🇱🇹", "+370"],
        ["Luxembourg", "🇱🇺", "+352"],

        ["Madagascar", "🇲🇬", "+261"],
        ["Malawi", "🇲🇼", "+265"],
        ["Malaysia", "🇲🇾", "+60"],
        ["Maldives", "🇲🇻", "+960"],
        ["Mali", "🇲🇱", "+223"],
        ["Malta", "🇲🇹", "+356"],
        ["Marshall Islands", "🇲🇭", "+692"],
        ["Mauritania", "🇲🇷", "+222"],
        ["Mauritius", "🇲🇺", "+230"],
        ["Mexico", "🇲🇽", "+52"],
        ["Micronesia", "🇫🇲", "+691"],
        ["Moldova", "🇲🇩", "+373"],
        ["Monaco", "🇲🇨", "+377"],
        ["Mongolia", "🇲🇳", "+976"],
        ["Montenegro", "🇲🇪", "+382"],
        ["Morocco", "🇲🇦", "+212"],
        ["Mozambique", "🇲🇿", "+258"],
        ["Myanmar", "🇲🇲", "+95"],

        ["Namibia", "🇳🇦", "+264"],
        ["Nauru", "🇳🇷", "+674"],
        ["Nepal", "🇳🇵", "+977"],
        ["Netherlands", "🇳🇱", "+31"],
        ["New Zealand", "🇳🇿", "+64"],
        ["Nicaragua", "🇳🇮", "+505"],
        ["Niger", "🇳🇪", "+227"],
        ["Nigeria", "🇳🇬", "+234"],
        ["North Korea", "🇰🇵", "+850"],
        ["North Macedonia", "🇲🇰", "+389"],
        ["Norway", "🇳🇴", "+47"],

        ["Oman", "🇴🇲", "+968"],

        ["Pakistan", "🇵🇰", "+92"],
        ["Palau", "🇵🇼", "+680"],
        ["Palestine", "🇵🇸", "+970"],
        ["Panama", "🇵🇦", "+507"],
        ["Papua New Guinea", "🇵🇬", "+675"],
        ["Paraguay", "🇵🇾", "+595"],
        ["Peru", "🇵🇪", "+51"],
        ["Philippines", "🇵🇭", "+63"],
        ["Poland", "🇵🇱", "+48"],
        ["Portugal", "🇵🇹", "+351"],

        ["Qatar", "🇶🇦", "+974"],

        ["Romania", "🇷🇴", "+40"],
        ["Russia", "🇷🇺", "+7"],
        ["Rwanda", "🇷🇼", "+250"],

        ["Saint Kitts and Nevis", "🇰🇳", "+1"],
        ["Saint Lucia", "🇱🇨", "+1"],
        ["Saint Vincent and the Grenadines", "🇻🇨", "+1"],
        ["Samoa", "🇼🇸", "+685"],
        ["San Marino", "🇸🇲", "+378"],
        ["Sao Tome and Principe", "🇸🇹", "+239"],
        ["Saudi Arabia", "🇸🇦", "+966"],
        ["Senegal", "🇸🇳", "+221"],
        ["Serbia", "🇷🇸", "+381"],
        ["Seychelles", "🇸🇨", "+248"],
        ["Sierra Leone", "🇸🇱", "+232"],
        ["Singapore", "🇸🇬", "+65"],
        ["Slovakia", "🇸🇰", "+421"],
        ["Slovenia", "🇸🇮", "+386"],
        ["Solomon Islands", "🇸🇧", "+677"],
        ["Somalia", "🇸🇴", "+252"],
        ["South Africa", "🇿🇦", "+27"],
        ["South Korea", "🇰🇷", "+82"],
        ["South Sudan", "🇸🇸", "+211"],
        ["Spain", "🇪🇸", "+34"],
        ["Sri Lanka", "🇱🇰", "+94"],
        ["Sudan", "🇸🇩", "+249"],
        ["Suriname", "🇸🇷", "+597"],
        ["Sweden", "🇸🇪", "+46"],
        ["Switzerland", "🇨🇭", "+41"],
        ["Syria", "🇸🇾", "+963"],

        ["Taiwan", "🇹🇼", "+886"],
        ["Tajikistan", "🇹🇯", "+992"],
        ["Tanzania", "🇹🇿", "+255"],
        ["Thailand", "🇹🇭", "+66"],
        ["Timor-Leste", "🇹🇱", "+670"],
        ["Togo", "🇹🇬", "+228"],
        ["Tonga", "🇹🇴", "+676"],
        ["Trinidad and Tobago", "🇹🇹", "+1"],
        ["Tunisia", "🇹🇳", "+216"],
        ["Turkey", "🇹🇷", "+90"],
        ["Turkmenistan", "🇹🇲", "+993"],
        ["Tuvalu", "🇹🇻", "+688"],

        ["Uganda", "🇺🇬", "+256"],
        ["Ukraine", "🇺🇦", "+380"],
        ["United Arab Emirates", "🇦🇪", "+971"],
        ["United Kingdom", "🇬🇧", "+44"],
        ["United States", "🇺🇸", "+1"],
        ["Uruguay", "🇺🇾", "+598"],
        ["Uzbekistan", "🇺🇿", "+998"],

        ["Vanuatu", "🇻🇺", "+678"],
        ["Vatican City", "🇻🇦", "+39"],
        ["Venezuela", "🇻🇪", "+58"],
        ["Vietnam", "🇻🇳", "+84"],

        ["Yemen", "🇾🇪", "+967"],

        ["Zambia", "🇿🇲", "+260"],
        ["Zimbabwe", "🇿🇼", "+263"]
    ];

    if (countrySelect) {
        countries.forEach(country => {
            const option = document.createElement("option");

            option.value = country[0];
            option.textContent = `${country[1]} ${country[0]}`;
            option.dataset.code = country[2];
            option.dataset.flag = country[1];

            countrySelect.appendChild(option);
        });

        const nigeria = countries.find(
            country => country[0] === "Nigeria"
        );

        if (nigeria) {
            countrySelect.value = nigeria[0];

            if (phoneCode) {
                phoneCode.textContent = nigeria[2];
            }

            if (selectedFlag) {
                selectedFlag.textContent = nigeria[1];
            }
        }

        countrySelect.addEventListener("change", () => {
            const option =
                countrySelect.options[countrySelect.selectedIndex];

            if (!option || !option.dataset.code) return;

            phoneCode.textContent = option.dataset.code;
            selectedFlag.textContent = option.dataset.flag;
        });
    }


    if (menuBtn && mobileNav) {

        menuBtn.addEventListener("click", () => {
            const isOpen =
                mobileNav.classList.toggle("show");

            menuBtn.classList.toggle("active", isOpen);

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuBtn.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );
        });

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

        document.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                mobileNav.classList.remove("show");
                menuBtn.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
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
            }
        });
    }


    let currentPage =
        window.location.pathname.split("/").pop();

    if (!currentPage) {
        currentPage = "index.html";
    }

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });


    const profilePicture =
        document.getElementById("profilePicture");

    const imagePreview =
        document.getElementById("imagePreview");

    if (profilePicture && imagePreview) {

        profilePicture.addEventListener("change", () => {

            const file = profilePicture.files[0];

            if (!file) return;

            if (!file.type.startsWith("image/")) {

                profilePicture.value = "";

                showMessage(
                    "Please select a valid image file.",
                    "error"
                );

                return;
            }

            const reader = new FileReader();

            reader.onload = event => {
                imagePreview.innerHTML = `
                    <img
                        src="${event.target.result}"
                        alt="Profile preview"
                    >
                `;
            };

            reader.readAsDataURL(file);
        });
    }


    const cvInput = document.getElementById("cv");
    const cvName = document.getElementById("cvName");

    if (cvInput && cvName) {

        cvInput.addEventListener("change", () => {

            const file = cvInput.files[0];

            cvName.textContent =
                file ? file.name : "CHOOSE YOUR CV";
        });
    }


    const joinForm =
        document.getElementById("joinForm");

    const password =
        document.getElementById("password");

    const confirmPassword =
        document.getElementById("confirmPassword");


    if (joinForm) {

        joinForm.addEventListener("submit", event => {

            event.preventDefault();

            clearMessage();

            if (
                countrySelect &&
                !countrySelect.value
            ) {
                showMessage(
                    "Please select your country.",
                    "error"
                );

                countrySelect.focus();

                return;
            }

            if (
                password &&
                password.value.length < 8
            ) {
                showMessage(
                    "Password must be at least 8 characters.",
                    "error"
                );

                password.focus();

                return;
            }

            if (
                password &&
                confirmPassword &&
                password.value !== confirmPassword.value
            ) {
                showMessage(
                    "Passwords do not match.",
                    "error"
                );

                confirmPassword.focus();

                return;
            }

            if (
                profilePicture &&
                profilePicture.files.length === 0
            ) {
                showMessage(
                    "Please upload your profile picture.",
                    "error"
                );

                return;
            }

            if (
                cvInput &&
                cvInput.files.length === 0
            ) {
                showMessage(
                    "Please upload your CV or resume.",
                    "error"
                );

                return;
            }

            const agreements = [
                document.getElementById("terms"),
                document.getElementById("privacy"),
                document.getElementById("guidelines"),
                document.getElementById("paymentAgreement")
            ];

            const allAgreed =
                agreements.every(
                    checkbox =>
                        checkbox &&
                        checkbox.checked
                );

            if (!allAgreed) {
                showMessage(
                    "Please agree to all required policies before submitting.",
                    "error"
                );

                return;
            }

            const selectedCountry =
                countries.find(
                    country =>
                        country[0] === countrySelect.value
                );

            let fullPhoneNumber =
                phone ? phone.value.trim() : "";

            fullPhoneNumber =
                fullPhoneNumber.replace(/\D/g, "");

            if (
                selectedCountry &&
                fullPhoneNumber
            ) {
                if (fullPhoneNumber.startsWith("0")) {
                    fullPhoneNumber =
                        fullPhoneNumber.substring(1);
                }

                fullPhoneNumber =
                    selectedCountry[2] +
                    fullPhoneNumber;
            }

            showMessage(
                "Application received successfully. Your application is ready to be connected to the VORVENA backend for review.",
                "success"
            );

            console.log(
                "Country:",
                countrySelect.value
            );

            console.log(
                "Phone:",
                fullPhoneNumber
            );
        });
    }


    function showMessage(message, type) {

        const formMessage =
            document.getElementById("formMessage");

        if (!formMessage) return;

        formMessage.textContent = message;

        formMessage.className =
            `form-message ${type}`;

        formMessage.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }


    function clearMessage() {

        const formMessage =
            document.getElementById("formMessage");

        if (!formMessage) return;

        formMessage.textContent = "";

        formMessage.className =
            "form-message";
    }

});
