const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
        const isOpen = mobileNav.classList.toggle("show");

        menuBtn.classList.toggle("active", isOpen);
        menuBtn.setAttribute("aria-expanded", isOpen);
    });
}

document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("show");
        menuBtn.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});


const countries = [
    { name: "Afghanistan", code: "+93", flag: "🇦🇫" },
    { name: "Albania", code: "+355", flag: "🇦🇱" },
    { name: "Algeria", code: "+213", flag: "🇩🇿" },
    { name: "Andorra", code: "+376", flag: "🇦🇩" },
    { name: "Angola", code: "+244", flag: "🇦🇴" },
    { name: "Antigua and Barbuda", code: "+1", flag: "🇦🇬" },
    { name: "Argentina", code: "+54", flag: "🇦🇷" },
    { name: "Armenia", code: "+374", flag: "🇦🇲" },
    { name: "Australia", code: "+61", flag: "🇦🇺" },
    { name: "Austria", code: "+43", flag: "🇦🇹" },
    { name: "Azerbaijan", code: "+994", flag: "🇦🇿" },
    { name: "Bahamas", code: "+1", flag: "🇧🇸" },
    { name: "Bahrain", code: "+973", flag: "🇧🇭" },
    { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
    { name: "Barbados", code: "+1", flag: "🇧🇧" },
    { name: "Belarus", code: "+375", flag: "🇧🇾" },
    { name: "Belgium", code: "+32", flag: "🇧🇪" },
    { name: "Belize", code: "+501", flag: "🇧🇿" },
    { name: "Benin", code: "+229", flag: "🇧🇯" },
    { name: "Bhutan", code: "+975", flag: "🇧🇹" },
    { name: "Bolivia", code: "+591", flag: "🇧🇴" },
    { name: "Bosnia and Herzegovina", code: "+387", flag: "🇧🇦" },
    { name: "Botswana", code: "+267", flag: "🇧🇼" },
    { name: "Brazil", code: "+55", flag: "🇧🇷" },
    { name: "Brunei", code: "+673", flag: "🇧🇳" },
    { name: "Bulgaria", code: "+359", flag: "🇧🇬" },
    { name: "Burkina Faso", code: "+226", flag: "🇧🇫" },
    { name: "Burundi", code: "+257", flag: "🇧🇮" },
    { name: "Cambodia", code: "+855", flag: "🇰🇭" },
    { name: "Cameroon", code: "+237", flag: "🇨🇲" },
    { name: "Canada", code: "+1", flag: "🇨🇦" },
    { name: "Cape Verde", code: "+238", flag: "🇨🇻" },
    { name: "Central African Republic", code: "+236", flag: "🇨🇫" },
    { name: "Chad", code: "+235", flag: "🇹🇩" },
    { name: "Chile", code: "+56", flag: "🇨🇱" },
    { name: "China", code: "+86", flag: "🇨🇳" },
    { name: "Colombia", code: "+57", flag: "🇨🇴" },
    { name: "Comoros", code: "+269", flag: "🇰🇲" },
    { name: "Congo", code: "+242", flag: "🇨🇬" },
    { name: "Costa Rica", code: "+506", flag: "🇨🇷" },
    { name: "Croatia", code: "+385", flag: "🇭🇷" },
    { name: "Cuba", code: "+53", flag: "🇨🇺" },
    { name: "Cyprus", code: "+357", flag: "🇨🇾" },
    { name: "Czech Republic", code: "+420", flag: "🇨🇿" },
    { name: "Denmark", code: "+45", flag: "🇩🇰" },
    { name: "Djibouti", code: "+253", flag: "🇩🇯" },
    { name: "Dominica", code: "+1", flag: "🇩🇲" },
    { name: "Dominican Republic", code: "+1", flag: "🇩🇴" },
    { name: "Ecuador", code: "+593", flag: "🇪🇨" },
    { name: "Egypt", code: "+20", flag: "🇪🇬" },
    { name: "El Salvador", code: "+503", flag: "🇸🇻" },
    { name: "Equatorial Guinea", code: "+240", flag: "🇬🇶" },
    { name: "Eritrea", code: "+291", flag: "🇪🇷" },
    { name: "Estonia", code: "+372", flag: "🇪🇪" },
    { name: "Eswatini", code: "+268", flag: "🇸🇿" },
    { name: "Ethiopia", code: "+251", flag: "🇪🇹" },
    { name: "Fiji", code: "+679", flag: "🇫🇯" },
    { name: "Finland", code: "+358", flag: "🇫🇮" },
    { name: "France", code: "+33", flag: "🇫🇷" },
    { name: "Gabon", code: "+241", flag: "🇬🇦" },
    { name: "Gambia", code: "+220", flag: "🇬🇲" },
    { name: "Georgia", code: "+995", flag: "🇬🇪" },
    { name: "Germany", code: "+49", flag: "🇩🇪" },
    { name: "Ghana", code: "+233", flag: "🇬🇭" },
    { name: "Greece", code: "+30", flag: "🇬🇷" },
    { name: "Grenada", code: "+1", flag: "🇬🇩" },
    { name: "Guatemala", code: "+502", flag: "🇬🇹" },
    { name: "Guinea", code: "+224", flag: "🇬🇳" },
    { name: "Guinea-Bissau", code: "+245", flag: "🇬🇼" },
    { name: "Guyana", code: "+592", flag: "🇬🇾" },
    { name: "Haiti", code: "+509", flag: "🇭🇹" },
    { name: "Honduras", code: "+504", flag: "🇭🇳" },
    { name: "Hungary", code: "+36", flag: "🇭🇺" },
    { name: "Iceland", code: "+354", flag: "🇮🇸" },
    { name: "India", code: "+91", flag: "🇮🇳" },
    { name: "Indonesia", code: "+62", flag: "🇮🇩" },
    { name: "Iran", code: "+98", flag: "🇮🇷" },
    { name: "Iraq", code: "+964", flag: "🇮🇶" },
    { name: "Ireland", code: "+353", flag: "🇮🇪" },
    { name: "Israel", code: "+972", flag: "🇮🇱" },
    { name: "Italy", code: "+39", flag: "🇮🇹" },
    { name: "Jamaica", code: "+1", flag: "🇯🇲" },
    { name: "Japan", code: "+81", flag: "🇯🇵" },
    { name: "Jordan", code: "+962", flag: "🇯🇴" },
    { name: "Kazakhstan", code: "+7", flag: "🇰🇿" },
    { name: "Kenya", code: "+254", flag: "🇰🇪" },
    { name: "Kiribati", code: "+686", flag: "🇰🇮" },
    { name: "Kuwait", code: "+965", flag: "🇰🇼" },
    { name: "Kyrgyzstan", code: "+996", flag: "🇰🇬" },
    { name: "Laos", code: "+856", flag: "🇱🇦" },
    { name: "Latvia", code: "+371", flag: "🇱🇻" },
    { name: "Lebanon", code: "+961", flag: "🇱🇧" },
    { name: "Lesotho", code: "+266", flag: "🇱🇸" },
    { name: "Liberia", code: "+231", flag: "🇱🇷" },
    { name: "Libya", code: "+218", flag: "🇱🇾" },
    { name: "Liechtenstein", code: "+423", flag: "🇱🇮" },
    { name: "Lithuania", code: "+370", flag: "🇱🇹" },
    { name: "Luxembourg", code: "+352", flag: "🇱🇺" },
    { name: "Madagascar", code: "+261", flag: "🇲🇬" },
    { name: "Malawi", code: "+265", flag: "🇲🇼" },
    { name: "Malaysia", code: "+60", flag: "🇲🇾" },
    { name: "Maldives", code: "+960", flag: "🇲🇻" },
    { name: "Mali", code: "+223", flag: "🇲🇱" },
    { name: "Malta", code: "+356", flag: "🇲🇹" },
    { name: "Marshall Islands", code: "+692", flag: "🇲🇭" },
    { name: "Mauritania", code: "+222", flag: "🇲🇷" },
    { name: "Mauritius", code: "+230", flag: "🇲🇺" },
    { name: "Mexico", code: "+52", flag: "🇲🇽" },
    { name: "Micronesia", code: "+691", flag: "🇫🇲" },
    { name: "Moldova", code: "+373", flag: "🇲🇩" },
    { name: "Monaco", code: "+377", flag: "🇲🇨" },
    { name: "Mongolia", code: "+976", flag: "🇲🇳" },
    { name: "Montenegro", code: "+382", flag: "🇲🇪" },
    { name: "Morocco", code: "+212", flag: "🇲🇦" },
    { name: "Mozambique", code: "+258", flag: "🇲🇿" },
    { name: "Myanmar", code: "+95", flag: "🇲🇲" },
    { name: "Namibia", code: "+264", flag: "🇳🇦" },
    { name: "Nauru", code: "+674", flag: "🇳🇷" },
    { name: "Nepal", code: "+977", flag: "🇳🇵" },
    { name: "Netherlands", code: "+31", flag: "🇳🇱" },
    { name: "New Zealand", code: "+64", flag: "🇳🇿" },
    { name: "Nicaragua", code: "+505", flag: "🇳🇮" },
    { name: "Niger", code: "+227", flag: "🇳🇪" },
    { name: "Nigeria", code: "+234", flag: "🇳🇬" },
    { name: "North Korea", code: "+850", flag: "🇰🇵" },
    { name: "North Macedonia", code: "+389", flag: "🇲🇰" },
    { name: "Norway", code: "+47", flag: "🇳🇴" },
    { name: "Oman", code: "+968", flag: "🇴🇲" },
    { name: "Pakistan", code: "+92", flag: "🇵🇰" },
    { name: "Palau", code: "+680", flag: "🇵🇼" },
    { name: "Palestine", code: "+970", flag: "🇵🇸" },
    { name: "Panama", code: "+507", flag: "🇵🇦" },
    { name: "Papua New Guinea", code: "+675", flag: "🇵🇬" },
    { name: "Paraguay", code: "+595", flag: "🇵🇾" },
    { name: "Peru", code: "+51", flag: "🇵🇪" },
    { name: "Philippines", code: "+63", flag: "🇵🇭" },
    { name: "Poland", code: "+48", flag: "🇵🇱" },
    { name: "Portugal", code: "+351", flag: "🇵🇹" },
    { name: "Qatar", code: "+974", flag: "🇶🇦" },
    { name: "Romania", code: "+40", flag: "🇷🇴" },
    { name: "Russia", code: "+7", flag: "🇷🇺" },
    { name: "Rwanda", code: "+250", flag: "🇷🇼" },
    { name: "Saint Kitts and Nevis", code: "+1", flag: "🇰🇳" },
    { name: "Saint Lucia", code: "+1", flag: "🇱🇨" },
    { name: "Saint Vincent and the Grenadines", code: "+1", flag: "🇻🇨" },
    { name: "Samoa", code: "+685", flag: "🇼🇸" },
    { name: "San Marino", code: "+378", flag: "🇸🇲" },
    { name: "Sao Tome and Principe", code: "+239", flag: "🇸🇹" },
    { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
    { name: "Senegal", code: "+221", flag: "🇸🇳" },
    { name: "Serbia", code: "+381", flag: "🇷🇸" },
    { name: "Seychelles", code: "+248", flag: "🇸🇨" },
    { name: "Sierra Leone", code: "+232", flag: "🇸🇱" },
    { name: "Singapore", code: "+65", flag: "🇸🇬" },
    { name: "Slovakia", code: "+421", flag: "🇸🇰" },
    { name: "Slovenia", code: "+386", flag: "🇸🇮" },
    { name: "Solomon Islands", code: "+677", flag: "🇸🇧" },
    { name: "Somalia", code: "+252", flag: "🇸🇴" },
    { name: "South Africa", code: "+27", flag: "🇿🇦" },
    { name: "South Korea", code: "+82", flag: "🇰🇷" },
    { name: "South Sudan", code: "+211", flag: "🇸🇸" },
    { name: "Spain", code: "+34", flag: "🇪🇸" },
    { name: "Sri Lanka", code: "+94", flag: "🇱🇰" },
    { name: "Sudan", code: "+249", flag: "🇸🇩" },
    { name: "Suriname", code: "+597", flag: "🇸🇷" },
    { name: "Sweden", code: "+46", flag: "🇸🇪" },
    { name: "Switzerland", code: "+41", flag: "🇨🇭" },
    { name: "Syria", code: "+963", flag: "🇸🇾" },
    { name: "Taiwan", code: "+886", flag: "🇹🇼" },
    { name: "Tajikistan", code: "+992", flag: "🇹🇯" },
    { name: "Tanzania", code: "+255", flag: "🇹🇿" },
    { name: "Thailand", code: "+66", flag: "🇹🇭" },
    { name: "Togo", code: "+228", flag: "🇹🇬" },
    { name: "Tonga", code: "+676", flag: "🇹🇴" },
    { name: "Trinidad and Tobago", code: "+1", flag: "🇹🇹" },
    { name: "Tunisia", code: "+216", flag: "🇹🇳" },
    { name: "Turkey", code: "+90", flag: "🇹🇷" },
    { name: "Turkmenistan", code: "+993", flag: "🇹🇲" },
    { name: "Tuvalu", code: "+688", flag: "🇹🇻" },
    { name: "Uganda", code: "+256", flag: "🇺🇬" },
    { name: "Ukraine", code: "+380", flag: "🇺🇦" },
    { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
    { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
    { name: "United States", code: "+1", flag: "🇺🇸" },
    { name: "Uruguay", code: "+598", flag: "🇺🇾" },
    { name: "Uzbekistan", code: "+998", flag: "🇺🇿" },
    { name: "Vanuatu", code: "+678", flag: "🇻🇺" },
    { name: "Vatican City", code: "+39", flag: "🇻🇦" },
    { name: "Venezuela", code: "+58", flag: "🇻🇪" },
    { name: "Vietnam", code: "+84", flag: "🇻🇳" },
    { name: "Yemen", code: "+967", flag: "🇾🇪" },
    { name: "Zambia", code: "+260", flag: "🇿🇲" },
    { name: "Zimbabwe", code: "+263", flag: "🇿🇼" }
];


const countrySelect = document.getElementById("country");
const phoneCode = document.getElementById("phoneCode");
const selectedFlag = document.getElementById("selectedFlag");
const phoneInput = document.getElementById("phone");

countries.forEach(country => {
    const option = document.createElement("option");

    option.value = country.name;
    option.textContent = `${country.flag} ${country.name}`;
    option.dataset.code = country.code;
    option.dataset.flag = country.flag;

    countrySelect.appendChild(option);
});


countrySelect.value = "Nigeria";


function updatePhoneCode() {
    const selectedOption = countrySelect.options[countrySelect.selectedIndex];

    if (!selectedOption || !selectedOption.dataset.code) {
        phoneCode.textContent = "+234";
        selectedFlag.textContent = "🇳🇬";
        return;
    }

    phoneCode.textContent = selectedOption.dataset.code;
    selectedFlag.textContent = selectedOption.dataset.flag;
}


countrySelect.addEventListener("change", updatePhoneCode);

updatePhoneCode();


phoneInput.addEventListener("input", () => {
    phoneInput.value = phoneInput.value.replace(/\D/g, "");
});


const profilePicture = document.getElementById("profilePicture");
const imagePreview = document.getElementById("imagePreview");

profilePicture.addEventListener("change", () => {

    const file = profilePicture.files[0];

    if (!file) {
        imagePreview.innerHTML = "<span>+</span>";
        return;
    }

    const allowedTypes = [
        "image/png",
        "image/jpeg",
        "image/webp"
    ];

    if (!allowedTypes.includes(file.type)) {
        imagePreview.innerHTML = "<span>+</span>";
        profilePicture.value = "";
        showMessage(
            "Please select a PNG, JPG or WEBP image.",
            "error"
        );
        return;
    }

    const reader = new FileReader();

    reader.onload = event => {
        imagePreview.innerHTML = `
            <img src="${event.target.result}" alt="Profile preview">
        `;
    };

    reader.readAsDataURL(file);
});


const cvInput = document.getElementById("cv");
const cvName = document.getElementById("cvName");

cvInput.addEventListener("change", () => {

    const file = cvInput.files[0];

    if (!file) {
        cvName.textContent = "CHOOSE YOUR CV";
        return;
    }

    cvName.textContent = file.name;
});


const joinForm = document.getElementById("joinForm");
const formMessage = document.getElementById("formMessage");


function showMessage(message, type) {

    formMessage.textContent = message;

    formMessage.className = "form-message show";

    if (type) {
        formMessage.classList.add(type);
    }

    formMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


function clearMessage() {
    formMessage.textContent = "";
    formMessage.className = "form-message";
}


function getFullPhoneNumber() {

    const selectedOption =
        countrySelect.options[countrySelect.selectedIndex];

    const code =
        selectedOption?.dataset.code || "+234";

    const number =
        phoneInput.value.replace(/\D/g, "");

    return `${code}${number}`;
}


joinForm.addEventListener("submit", event => {

    event.preventDefault();

    clearMessage();


    if (!joinForm.checkValidity()) {

        joinForm.reportValidity();

        showMessage(
            "Please complete all required fields before submitting your application.",
            "error"
        );

        return;
    }


    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    if (password.length < 8) {

        showMessage(
            "Your password must contain at least 8 characters.",
            "error"
        );

        return;
    }


    if (password !== confirmPassword) {

        showMessage(
            "Your passwords do not match.",
            "error"
        );

        return;
    }


    const phoneNumber = getFullPhoneNumber();

    if (phoneNumber.length < 8) {

        showMessage(
            "Please enter a valid phone number.",
            "error"
        );

        return;
    }


    const profileFile =
        profilePicture.files[0];

    const cvFile =
        cvInput.files[0];


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


    const portfolio =
        document.getElementById("portfolio").value.trim();


    try {

        new URL(portfolio);

    } catch {

        showMessage(
            "Please enter a valid portfolio URL.",
            "error"
        );

        return;
    }


    const additionalLink =
        document.getElementById("additionalLink").value.trim();


    if (additionalLink) {

        try {

            new URL(additionalLink);

        } catch {

            showMessage(
                "Please enter a valid additional link or leave it empty.",
                "error"
            );

            return;
        }
    }


    const submitButton =
        joinForm.querySelector(".submit-btn");


    submitButton.disabled = true;

    submitButton.style.opacity = "0.65";

    submitButton.style.cursor = "wait";


    /*
        BACKEND CONNECTION POINT

        The real VORVENA backend will receive:

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

        Password must be securely hashed on the backend.
        Do not store the password in localStorage.
    */


    const applicationData = {

        firstName:
            document.getElementById("firstName").value.trim(),

        lastName:
            document.getElementById("lastName").value.trim(),

        email:
            document.getElementById("email").value.trim(),

        phone:
            phoneNumber,

        country:
            countrySelect.value,

        city:
            document.getElementById("city").value.trim(),

        profession:
            document.getElementById("profession").value,

        experience:
            document.getElementById("experience").value,

        skills:
            document.getElementById("skills").value.trim(),

        bio:
            document.getElementById("bio").value.trim(),

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


    setTimeout(() => {

        showMessage(
            "Your professional account application has been received. After your account is created, sign in to complete your profession-specific verification assessment.",
            "success"
        );


        submitButton.disabled = false;

        submitButton.style.opacity = "1";

        submitButton.style.cursor = "pointer";


    }, 700);

});