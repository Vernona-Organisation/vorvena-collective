/* =========================================================
   VORVENA PAYMENT PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const professionalName = document.getElementById("professionalName");
    const professionalProfession = document.getElementById("professionalProfession");

    const projectTitle = document.getElementById("projectTitle");
    const projectDeadline = document.getElementById("projectDeadline");
    const projectId = document.getElementById("projectId");

    const summaryProjectTitle = document.getElementById("summaryProjectTitle");

    const summaryTotal = document.getElementById("summaryTotal");
    const vorvenaFee = document.getElementById("vorvenaFee");
    const professionalShare = document.getElementById("professionalShare");
    const clientPays = document.getElementById("clientPays");

    const transferAmount = document.getElementById("transferAmount");

    const payNowBtn = document.getElementById("payNowBtn");

    const processingOverlay =
        document.getElementById("processingOverlay");

    const successOverlay =
        document.getElementById("successOverlay");

    const openWorkspaceBtn =
        document.getElementById("openWorkspaceBtn");

    const copyAccountBtn =
        document.getElementById("copyAccountBtn");

    const accountNumber =
        document.getElementById("accountNumber");

    const ussdBank =
        document.getElementById("ussdBank");

    const ussdCodeBox =
        document.getElementById("ussdCodeBox");


    /* =====================================================
       LOCAL STORAGE
    ===================================================== */

    let professional = null;
    let project = null;

    try {

        professional =
            JSON.parse(
                localStorage.getItem("vorvenaProfessional")
            );

        project =
            JSON.parse(
                localStorage.getItem("vorvenaProject")
            );

    } catch (error) {

        console.error(
            "Unable to read VORVENA payment data:",
            error
        );

    }


    /* =====================================================
       CHECK PROJECT
    ===================================================== */

    if (!project) {

        alert(
            "No active project was found. Please return to the project request page."
        );

        window.location.href =
            "project-request.html";

        return;
    }


    /* =====================================================
       PROFESSIONAL
    ===================================================== */

    if (professional) {

        professionalName.textContent =
            professional.name || "Professional";

        professionalProfession.textContent =
            professional.profession ||
            "Professional Service";

    } else if (project.professional) {

        professionalName.textContent =
            project.professional.name ||
            "Professional";

        professionalProfession.textContent =
            project.professional.profession ||
            "Professional Service";
    }


    /* =====================================================
       PROJECT
    ===================================================== */

    projectTitle.textContent =
        project.title || "Project";

    summaryProjectTitle.textContent =
        project.title || "Project";

    projectDeadline.textContent =
        project.deadline || "Not specified";

    projectId.textContent =
        project.projectId || "Pending";


    /* =====================================================
       MONEY
    ===================================================== */

    const total =
        Number(
            project.amount ||
            project.budget ||
            0
        );

    const vorvenaAmount =
        total * 0.15;

    const professionalAmount =
        total * 0.85;


    function formatMoney(amount) {

        return new Intl.NumberFormat(
            "en-NG",
            {
                style: "currency",
                currency: "NGN",
                minimumFractionDigits: 0
            }
        ).format(amount);
    }


    summaryTotal.textContent =
        formatMoney(total);

    vorvenaFee.textContent =
        formatMoney(vorvenaAmount);

    professionalShare.textContent =
        formatMoney(professionalAmount);

    clientPays.textContent =
        formatMoney(total);

    transferAmount.textContent =
        formatMoney(total);

    payNowBtn.textContent =
        `Pay ${formatMoney(total)}`;


    /* =====================================================
       PAYMENT METHODS
    ===================================================== */

    const paymentMethods =
        document.querySelectorAll(
            ".payment-method"
        );

    const paymentPanels =
        document.querySelectorAll(
            ".payment-panel"
        );


    let selectedMethod = "card";


    paymentMethods.forEach(method => {

        method.addEventListener(
            "click",
            () => {

                selectedMethod =
                    method.dataset.method;


                paymentMethods.forEach(item => {
                    item.classList.remove("active");
                });


                paymentPanels.forEach(panel => {
                    panel.classList.remove("active");
                });


                method.classList.add("active");


                const panel =
                    document.getElementById(
                        `${selectedMethod}Panel`
                    );


                if (panel) {
                    panel.classList.add("active");
                }

            }
        );

    });


    /* =====================================================
       CARD NUMBER FORMAT
    ===================================================== */

    const cardNumber =
        document.getElementById("cardNumber");


    cardNumber.addEventListener(
        "input",
        () => {

            let value =
                cardNumber.value
                    .replace(/\D/g, "")
                    .slice(0, 16);

            value =
                value.replace(
                    /(.{4})/g,
                    "$1 "
                )
                .trim();

            cardNumber.value =
                value;

        }
    );


    /* =====================================================
       EXPIRY FORMAT
    ===================================================== */

    const expiry =
        document.getElementById("expiry");


    expiry.addEventListener(
        "input",
        () => {

            let value =
                expiry.value
                    .replace(/\D/g, "")
                    .slice(0, 4);


            if (value.length >= 3) {

                value =
                    value.slice(0, 2)
                    + " / "
                    + value.slice(2);

            }


            expiry.value =
                value;

        }
    );


    /* =====================================================
       CVV
    ===================================================== */

    const cvv =
        document.getElementById("cvv");


    cvv.addEventListener(
        "input",
        () => {

            cvv.value =
                cvv.value
                    .replace(/\D/g, "")
                    .slice(0, 4);

        }
    );


    /* =====================================================
       COPY ACCOUNT
       DEMO PLACEHOLDER
       BACKEND WILL SUPPLY REAL ACCOUNT
    ===================================================== */

    copyAccountBtn.addEventListener(
        "click",
        async () => {

            const number =
                accountNumber.textContent.trim();


            if (
                !number ||
                number === "0000000000"
            ) {

                alert(
                    "The real transfer account number will be supplied by the payment provider."
                );

                return;
            }


            try {

                await navigator.clipboard.writeText(
                    number
                );

                copyAccountBtn.textContent =
                    "Copied";

                setTimeout(() => {

                    copyAccountBtn.textContent =
                        "Copy";

                }, 1500);

            } catch (error) {

                console.error(error);

            }

        }
    );


    /* =====================================================
       USSD
       DEMO DISPLAY
       REAL CODE COMES FROM PAYMENT PROVIDER
    ===================================================== */

    ussdBank.addEventListener(
        "change",
        () => {

            if (!ussdBank.value) {

                ussdCodeBox.classList.remove(
                    "generated"
                );

                ussdCodeBox.textContent =
                    "Your USSD code will appear here";

                return;
            }


            /*
             * IMPORTANT:
             *
             * This is only a frontend placeholder.
             *
             * In the live VORVENA system,
             * Paystack/backend will generate
             * the actual USSD instruction.
             */

            ussdCodeBox.classList.add(
                "generated"
            );

            ussdCodeBox.textContent =
                "USSD instructions will appear after payment initialization";

        }
    );


    /* =====================================================
       PAY NOW
    ===================================================== */

    payNowBtn.addEventListener(
        "click",
        () => {

            /*
             * FRONTEND DEMO ONLY
             *
             * Real version:
             *
             * Frontend
             *      ↓
             * Backend
             *      ↓
             * Paystack
             *      ↓
             * Payment verification
             *      ↓
             * Workspace unlock
             */

            if (total <= 0) {

                alert(
                    "A valid project amount is required before payment."
                );

                return;
            }


            if (selectedMethod === "card") {

                const cardName =
                    document.getElementById(
                        "cardName"
                    ).value.trim();

                const number =
                    cardNumber.value
                        .replace(/\s/g, "");

                const expiryValue =
                    expiry.value.trim();

                const cvvValue =
                    cvv.value.trim();


                if (
                    !cardName ||
                    number.length < 16 ||
                    expiryValue.length < 4 ||
                    cvvValue.length < 3
                ) {

                    alert(
                        "Please complete the card payment details."
                    );

                    return;
                }

            }


            if (selectedMethod === "transfer") {

                alert(
                    "In the live version, the payment provider will display the real transfer account and automatically verify the transfer."
                );

            }


            if (
                selectedMethod === "ussd" &&
                !ussdBank.value
            ) {

                alert(
                    "Please select your bank first."
                );

                return;
            }


            processingOverlay.classList.add(
                "active"
            );


            /*
             * DEMO DELAY
             *
             * Remove this when backend
             * + Paystack is connected.
             */

            setTimeout(() => {

                const paymentReference =
                    `VORVENA-DEMO-${Date.now()}`;


                const paymentRecord = {

                    status: "paid",

                    reference:
                        paymentReference,

                    amount: total,

                    method:
                        selectedMethod,

                    vorvenaFee:
                        vorvenaAmount,

                    professionalShare:
                        professionalAmount,

                    projectId:
                        project.projectId,

                    paidAt:
                        new Date().toISOString()

                };


                localStorage.setItem(
                    "vorvenaPayment",
                    JSON.stringify(
                        paymentRecord
                    )
                );


                /*
                 * Workspace is unlocked
                 * only after the payment record
                 * becomes successful.
                 */

                localStorage.setItem(
                    "vorvenaWorkspaceUnlocked",
                    "true"
                );


                processingOverlay.classList.remove(
                    "active"
                );


                successOverlay.classList.add(
                    "active"
                );


            }, 1800);

        }
    );


    /* =====================================================
       OPEN WORKSPACE
    ===================================================== */

    openWorkspaceBtn.addEventListener(
        "click",
        () => {

            let payment = null;

            try {

                payment =
                    JSON.parse(
                        localStorage.getItem(
                            "vorvenaPayment"
                        )
                    );

            } catch (error) {

                console.error(error);

            }


            if (
                payment &&
                payment.status === "paid"
            ) {

                window.location.href =
                    "project-workspace.html";

                return;
            }


            alert(
                "Payment has not been verified yet."
            );

        }
    );

});