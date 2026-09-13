/* =========================================================
   VORVENA PROJECT WORKSPACE
   JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ====================================================== */

    const sidebar = document.getElementById("sidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");

    const menuBtn = document.getElementById("menuBtn");
    const closeSidebar = document.getElementById("closeSidebar");

    const logoutBtn = document.getElementById("logoutBtn");

    const notificationBtn = document.getElementById("notificationBtn");
    const notificationDot = document.getElementById("notificationDot");

    const revisionBtn = document.getElementById("revisionBtn");
    const approveBtn = document.getElementById("approveBtn");

    const revisionModal = document.getElementById("revisionModal");
    const modalClose = document.getElementById("modalClose");
    const cancelRevision = document.getElementById("cancelRevision");
    const submitRevision = document.getElementById("submitRevision");

    const revisionMessage = document.getElementById("revisionMessage");
    const revisionHistory = document.getElementById("revisionHistory");

    const messageForm = document.getElementById("messageForm");
    const messageInput = document.getElementById("messageInput");
    const messagesArea = document.getElementById("messagesArea");

    const contactBtn = document.getElementById("contactBtn");

    const fileButtons = document.querySelectorAll(".file-btn");

    const actionTitle = document.getElementById("actionTitle");
    const actionDescription = document.getElementById("actionDescription");



    /* =====================================================
       SIDEBAR
    ====================================================== */

    function openSidebar() {

        if (!sidebar) return;

        sidebar.classList.add("open");

        sidebarOverlay.classList.add("show");

        document.body.classList.add("sidebar-open");

        if (menuBtn) {
            menuBtn.setAttribute("aria-expanded", "true");
        }
    }


    function closeSidebarMenu() {

        if (!sidebar) return;

        sidebar.classList.remove("open");

        sidebarOverlay.classList.remove("show");

        document.body.classList.remove("sidebar-open");

        if (menuBtn) {
            menuBtn.setAttribute("aria-expanded", "false");
        }
    }


    if (menuBtn) {
        menuBtn.addEventListener("click", openSidebar);
    }


    if (closeSidebar) {
        closeSidebar.addEventListener("click", closeSidebarMenu);
    }


    if (sidebarOverlay) {
        sidebarOverlay.addEventListener("click", closeSidebarMenu);
    }


    /* Close mobile sidebar after clicking a link */

    document.querySelectorAll(".nav-link").forEach((link) => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 768) {
                closeSidebarMenu();
            }

        });

    });


    /* Automatically close drawer when resizing above tablet */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {
            closeSidebarMenu();
        }

    });



    /* =====================================================
       REVISION MODAL
    ====================================================== */

    function openRevisionModal() {

        if (!revisionModal) return;

        revisionModal.classList.add("show");

        document.body.classList.add("sidebar-open");

        setTimeout(() => {

            if (revisionMessage) {
                revisionMessage.focus();
            }

        }, 150);

    }


    function closeRevisionModal() {

        if (!revisionModal) return;

        revisionModal.classList.remove("show");

        document.body.classList.remove("sidebar-open");

    }


    if (revisionBtn) {

        revisionBtn.addEventListener("click", () => {

            openRevisionModal();

        });

    }


    if (modalClose) {
        modalClose.addEventListener("click", closeRevisionModal);
    }


    if (cancelRevision) {
        cancelRevision.addEventListener("click", closeRevisionModal);
    }


    /* Close modal when clicking outside */

    if (revisionModal) {

        revisionModal.addEventListener("click", (event) => {

            if (event.target === revisionModal) {

                closeRevisionModal();

            }

        });

    }


    /* ESC key */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            if (
                revisionModal &&
                revisionModal.classList.contains("show")
            ) {

                closeRevisionModal();

            }

            if (
                sidebar &&
                sidebar.classList.contains("open")
            ) {

                closeSidebarMenu();

            }

        }

    });



    /* =====================================================
       SUBMIT REVISION
    ====================================================== */

    if (submitRevision) {

        submitRevision.addEventListener("click", () => {

            if (!revisionMessage) return;

            const text = revisionMessage.value.trim();

            if (!text) {

                revisionMessage.focus();

                alert("Please describe the changes you want.");

                return;
            }


            const currentRevision =
                revisionHistory.querySelector(".revision-number");


            let revisionNumber = 1;


            if (currentRevision) {

                const existingNumber =
                    parseInt(currentRevision.textContent, 10);

                if (!Number.isNaN(existingNumber)) {
                    revisionNumber = existingNumber + 1;
                }

            }


            const formattedNumber =
                String(revisionNumber).padStart(2, "0");


            revisionHistory.innerHTML = `

                <span class="revision-number">
                    ${formattedNumber}
                </span>

                <p>
                    ${escapeHTML(text)}
                </p>

            `;


            /* Update project action */

            if (actionTitle) {

                actionTitle.textContent =
                    "Revision requested";

            }


            if (actionDescription) {

                actionDescription.textContent =
                    "Your revision request has been recorded. The professional can now review your requested changes.";

            }


            /* Keep approval disabled */

            if (approveBtn) {
                approveBtn.disabled = true;
            }


            revisionMessage.value = "";

            closeRevisionModal();


            showNotification(
                "Revision request submitted successfully."
            );

        });

    }



    /* =====================================================
       APPROVE PROJECT
    ====================================================== */

    if (approveBtn) {

        approveBtn.addEventListener("click", () => {

            if (approveBtn.disabled) {
                return;
            }


            const confirmApproval = confirm(
                "Are you sure you want to approve this work?"
            );


            if (!confirmApproval) {
                return;
            }


            approveBtn.disabled = true;

            if (revisionBtn) {
                revisionBtn.disabled = true;
            }


            if (actionTitle) {

                actionTitle.textContent =
                    "Project approved";

            }


            if (actionDescription) {

                actionDescription.textContent =
                    "The project has been approved successfully. VORVENA can now process the professional's payment.";

            }


            showNotification(
                "Project approved successfully."
            );

        });

    }



    /* =====================================================
       MESSAGES
    ====================================================== */

    if (messageForm) {

        messageForm.addEventListener("submit", (event) => {

            event.preventDefault();

            if (!messageInput || !messagesArea) {
                return;
            }


            const text = messageInput.value.trim();


            if (!text) {
                messageInput.focus();
                return;
            }


            const messageElement =
                document.createElement("div");


            messageElement.className =
                "message sent";


            const currentTime =
                new Date().toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit"
                });


            messageElement.innerHTML = `

                <div class="message-avatar">
                    JS
                </div>

                <div class="message-content">

                    <div class="message-top">

                        <strong>
                            You
                        </strong>

                        <span>
                            ${currentTime}
                        </span>

                    </div>

                    <p>
                        ${escapeHTML(text)}
                    </p>

                </div>

            `;


            messagesArea.appendChild(messageElement);


            messageInput.value = "";

            messagesArea.scrollTop =
                messagesArea.scrollHeight;


            /*
             * Demo response.
             *
             * Later, this section will be replaced
             * by the real backend messaging system.
             */

            setTimeout(() => {

                addProfessionalReply();

            }, 900);

        });

    }



    /* =====================================================
       PROFESSIONAL DEMO RESPONSE
    ====================================================== */

    function addProfessionalReply() {

        if (!messagesArea) return;


        const messageElement =
            document.createElement("div");


        messageElement.className =
            "message";


        const currentTime =
            new Date().toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit"
            });


        messageElement.innerHTML = `

            <div class="message-avatar">
                AC
            </div>

            <div class="message-content">

                <div class="message-top">

                    <strong>
                        Alex Carter
                    </strong>

                    <span>
                        ${currentTime}
                    </span>

                </div>

                <p>
                    Thanks for the update. I'll review your message and continue with the project.
                </p>

            </div>

        `;


        messagesArea.appendChild(messageElement);


        messagesArea.scrollTop =
            messagesArea.scrollHeight;

    }



    /* =====================================================
       CONTACT PROFESSIONAL
    ====================================================== */

    if (contactBtn) {

        contactBtn.addEventListener("click", () => {

            if (messageInput) {

                messageInput.focus();

                messageInput.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        });

    }



    /* =====================================================
       FILE BUTTONS
    ====================================================== */

    fileButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const fileName =
                button.dataset.file || "Project file";


            /*
             * Demo behavior.
             *
             * Later the backend will connect this button
             * to the actual secure project file.
             */

            showNotification(
                `${fileName} is ready to be connected to the project file system.`
            );

        });

    });



    /* =====================================================
       NOTIFICATIONS
    ====================================================== */

    if (notificationBtn) {

        notificationBtn.addEventListener("click", () => {

            showNotification(
                "You have 2 project notifications."
            );


            if (notificationDot) {
                notificationDot.style.display = "none";
            }

        });

    }



    /* =====================================================
       LOGOUT
    ====================================================== */

    if (logoutBtn) {

        logoutBtn.addEventListener("click", () => {

            const confirmLogout =
                confirm("Are you sure you want to log out?");


            if (!confirmLogout) {
                return;
            }


            /*
             * Demo logout.
             *
             * When the backend is connected,
             * this will clear the authenticated session.
             */

            localStorage.removeItem("vorvenaUser");

            window.location.href =
                "login.html";

        });

    }



    /* =====================================================
       NOTIFICATION HELPER
    ====================================================== */

    function showNotification(message) {

        const existing =
            document.querySelector(".workspace-toast");


        if (existing) {
            existing.remove();
        }


        const toast =
            document.createElement("div");


        toast.className =
            "workspace-toast";


        toast.textContent =
            message;


        toast.style.position = "fixed";

        toast.style.right = "20px";

        toast.style.bottom = "20px";

        toast.style.maxWidth = "360px";

        toast.style.padding = "13px 16px";

        toast.style.background = "#0B1F3A";

        toast.style.color = "#FFFFFF";

        toast.style.border =
            "1px solid #0B1F3A";

        toast.style.borderRadius = "8px";

        toast.style.boxShadow =
            "0 8px 24px rgba(5, 5, 5, 0.15)";

        toast.style.fontSize = "12px";

        toast.style.fontWeight = "700";

        toast.style.zIndex = "3000";

        toast.style.opacity = "0";

        toast.style.transform =
            "translateY(10px)";

        toast.style.transition =
            "0.2s ease";


        document.body.appendChild(toast);


        requestAnimationFrame(() => {

            toast.style.opacity = "1";

            toast.style.transform =
                "translateY(0)";

        });


        setTimeout(() => {

            toast.style.opacity = "0";

            toast.style.transform =
                "translateY(10px)";


            setTimeout(() => {

                toast.remove();

            }, 250);

        }, 3000);

    }



    /* =====================================================
       HTML ESCAPE
       Prevents user-entered messages from becoming HTML.
    ====================================================== */

    function escapeHTML(value) {

        const div =
            document.createElement("div");


        div.textContent =
            value;


        return div.innerHTML;

    }



    /* =====================================================
       INITIAL STATE
    ====================================================== */

    /*
     * Keep approval unavailable until the professional
     * submits completed work.
     *
     * Backend will eventually change this dynamically.
     */

    if (approveBtn) {
        approveBtn.disabled = true;
    }


    /*
     * Scroll existing messages to the latest message.
     */

    if (messagesArea) {

        messagesArea.scrollTop =
            messagesArea.scrollHeight;

    }

});