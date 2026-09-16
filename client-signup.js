document.addEventListener("DOMContentLoaded", () => {
const form =
    document.getElementById("clientSignupForm");

const fullName =
    document.getElementById("fullName");

const email =
    document.getElementById("email");

const country =
    document.getElementById("country");

const countryCode =
    document.getElementById("countryCode");

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
// COUNTRY CODES
// ==========================================

const countryCodes = {

    AF: "+93",
    AL: "+355",
    DZ: "+213",
    AD: "+376",
    AO: "+244",
    AG: "+1",
    AR: "+54",
    AM: "+374",
    AU: "+61",
    AT: "+43",
    AZ: "+994",

    BS: "+1",
    BH: "+973",
    BD: "+880",
    BB: "+1",
    BY: "+375",
    BE: "+32",
    BZ: "+501",
    BJ: "+229",
    BT: "+975",
    BO: "+591",
    BA: "+387",
    BW: "+267",
    BR: "+55",
    BN: "+673",
    BG: "+359",
    BF: "+226",
    BI: "+257",

    CV: "+238",
    KH: "+855",
    CM: "+237",
    CA: "+1",
    CF: "+236",
    TD: "+235",
    CL: "+56",
    CN: "+86",
    CO: "+57",
    KM: "+269",
    CG: "+242",
    CD: "+243",
    CR: "+506",
    CI: "+225",
    HR: "+385",
    CU: "+53",
    CY: "+357",
    CZ: "+420",

    DK: "+45",
    DJ: "+253",
    DM: "+1",
    DO: "+1",

    EC: "+593",
    EG: "+20",
    SV: "+503",
    GQ: "+240",
    ER: "+291",
    EE: "+372",
    SZ: "+268",
    ET: "+251",

    FJ: "+679",
    FI: "+358",
    FR: "+33",

    GA: "+241",
    GM: "+220",
    GE: "+995",
    DE: "+49",
    GH: "+233",
    GR: "+30",
    GD: "+1",
    GT: "+502",
    GN: "+224",
    GW: "+245",
    GY: "+592",

    HT: "+509",
    HN: "+504",
    HU: "+36",

    IS: "+354",
    IN: "+91",
    ID: "+62",
    IR: "+98",
    IQ: "+964",
    IE: "+353",
    IL: "+972",
    IT: "+39",

    JM: "+1",
    JP: "+81",
    JO: "+962",

    KZ: "+7",
    KE: "+254",
    KI: "+686",
    KW: "+965",
    KG: "+996",

    LA: "+856",
    LV: "+371",
    LB: "+961",
    LS: "+266",
    LR: "+231",
    LY: "+218",
    LI: "+423",
    LT: "+370",
    LU: "+352",

    MG: "+261",
    MW: "+265",
    MY: "+60",
    MV: "+960",
    ML: "+223",
    MT: "+356",
    MH: "+692",
    MR: "+222",
    MU: "+230",
    MX: "+52",
    FM: "+691",
    MD: "+373",
    MC: "+377",
    MN: "+976",
    ME: "+382",
    MA: "+212",
    MZ: "+258",
    MM: "+95",

    NA: "+264",
    NR: "+674",
    NP: "+977",
    NL: "+31",
    NZ: "+64",
    NI: "+505",
    NE: "+227",
    NG: "+234",
    KP: "+850",
    MK: "+389",
    NO: "+47",

    OM: "+968",

    PK: "+92",
    PW: "+680",
    PA: "+507",
    PG: "+675",
    PY: "+595",
    PE: "+51",
    PH: "+63",
    PL: "+48",
    PT: "+351",

    QA: "+974",

    RO: "+40",
    RU: "+7",
    RW: "+250",

    KN: "+1",
    LC: "+1",
    VC: "+1",
    WS: "+685",
    SM: "+378",
    ST: "+239",
    SA: "+966",
    SN: "+221",
    RS: "+381",
    SC: "+248",
    SL: "+232",
    SG: "+65",
    SK: "+421",
    SI: "+386",
    SB: "+677",
    SO: "+252",
    ZA: "+27",
    KR: "+82",
    SS: "+211",
    ES: "+34",
    LK: "+94",
    SD: "+249",
    SR: "+597",
    SE: "+46",
    CH: "+41",
    SY: "+963",

    TW: "+886",
    TJ: "+992",
    TZ: "+255",
    TH: "+66",
    TL: "+670",
    TG: "+228",
    TO: "+676",
    TT: "+1",
    TN: "+216",
    TR: "+90",
    TM: "+993",
    TV: "+688",

    UG: "+256",
    UA: "+380",
    AE: "+971",
    GB: "+44",
    US: "+1",
    UY: "+598",
    UZ: "+998",

    VU: "+678",
    VA: "+39",
    VE: "+58",
    VN: "+84",

    YE: "+967",

    ZM: "+260",
    ZW: "+263"
};


// ==========================================
// AUTOMATIC COUNTRY CODE
// ==========================================

if (country && countryCode) {

    country.addEventListener("change", () => {

        const selectedCountry =
            country.value;

        const code =
            countryCodes[selectedCountry];

        countryCode.textContent =
            code || "+234";

        phone.placeholder =
            code
                ? "Enter phone number"
                : "8012345678";
    });

}


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

        const countryValue =
            country.value;

        const countryName =
            country.options[
                country.selectedIndex
            ]?.text || "";

        const phoneValue =
            phone.value.trim();

        const selectedCode =
            countryCodes[countryValue] || "";

        const fullPhone =
            phoneValue
                ? selectedCode + phoneValue.replace(/^0+/, "")
                : "";

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
            !countryValue ||
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
        // PHONE VALIDATION
        // ==========================================

        if (phoneValue) {

            const phonePattern =
                /^[0-9\s\-()]+$/;

            if (!phonePattern.test(phoneValue)) {

                showMessage(
                    "Please enter a valid phone number.",
                    "error"
                );

                return;
            }

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

                // Allow new account if old data is corrupted.

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

                country:
                    countryValue,

                countryName:
                    countryName,

                countryCode:
                    selectedCode,

                phone:
                    phoneValue,

                fullPhone:
                    fullPhone,

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

                country:
                    clientAccount.country,

                countryName:
                    clientAccount.countryName,

                countryCode:
                    clientAccount.countryCode,

                phone:
                    clientAccount.phone,

                fullPhone:
                    clientAccount.fullPhone,

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
                "vorvenaClientCountry",
                countryName
            );

            sessionStorage.setItem(
                "vorvenaClientPhone",
                fullPhone
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
                submitButton.style.cursor = "default";

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

                if (
                    hiringIntent === "true" &&
                    selectedProfessional
                ) {

                    window.location.href =
                        "clients.html#project-request";

                    return;
                }


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
