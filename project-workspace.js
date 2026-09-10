/* =========================================
   TEMPORARY PROJECT DATA
   Later this will come from Supabase
========================================= */

const project = {

    id: "VOR-001",

    title: "Business Website Design",

    professional: "David Williams",

    price: 150000,

    deadline: "September 20, 2026",

    status: "In Progress",

    revisionsUsed: 0,

    revisionLimit: 2

};


/* =========================================
   SIDEBAR
========================================= */

const sidebar =
    document.getElementById("sidebar");

const menuBtn =
    document.getElementById("menuBtn");

const closeSidebar =
    document.getElementById("closeSidebar");

const sidebarOverlay =
    document.getElementById("sidebarOverlay");


function openSidebar() {

    sidebar.classList.add("open");

}


function closeSidebarMenu() {

    sidebar.classList.remove("open");

}


if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        openSidebar
    );

}


if (closeSidebar) {

    closeSidebar.addEventListener(
        "click",
        closeSidebarMenu
    );

}


if (sidebarOverlay) {

    sidebarOverlay.addEventListener(
        "click",
        closeSidebarMenu
    );

}


/* =========================================
   CLOSE SIDEBAR AFTER NAVIGATION
========================================= */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(link => {

    link.addEventListener("click", function () {

        if (window.innerWidth <= 1100) {

            closeSidebarMenu();

        }

    });

});


/* =========================================
   SUPPORT
========================================= */

const supportBtn =
    document.getElementById("supportBtn");


if (supportBtn) {

    supportBtn.addEventListener(
        "click",
        function () {

            alert(
                "VORVENA Support will be connected here."
            );

        }
    );

}


/* =========================================
   NOTIFICATIONS
========================================= */

const notificationBtn =
    document.getElementById(
        "notificationBtn"
    );


if (notificationBtn) {

    notificationBtn.addEventListener(
        "click",
        function () {

            alert(
                "You have 3 new notifications."
            );

        }
    );

}


/* =========================================
   APPROVE PROJECT
========================================= */

const approveBtn =
    document.getElementById("approveBtn");


if (approveBtn) {

    approveBtn.addEventListener(
        "click",
        function () {

            const confirmation = confirm(
                "Are you sure you want to approve this work?\n\n" +
                "Once approved, this project will move toward completion."
            );


            if (!confirmation) {

                return;

            }


            project.status = "Approved";


            const statusElement =
                document.getElementById(
                    "projectStatus"
                );


            if (statusElement) {

                statusElement.textContent =
                    "Approved";

            }


            approveBtn.textContent =
                "✓ Work Approved";

            approveBtn.disabled = true;

            approveBtn.style.opacity = "0.6";


            const revisionBtn =
                document.getElementById(
                    "revisionBtn"
                );


            if (revisionBtn) {

                revisionBtn.disabled = true;

                revisionBtn.style.opacity = "0.5";

            }


            alert(
                "Work approved successfully."
            );

        }
    );

}


/* =========================================
   REVISION MODAL
========================================= */

const revisionBtn =
    document.getElementById("revisionBtn");

const revisionModal =
    document.getElementById("revisionModal");

const closeRevisionModal =
    document.getElementById(
        "closeRevisionModal"
    );

const cancelRevision =
    document.getElementById(
        "cancelRevision"
    );


function openRevisionModal() {

    revisionModal.classList.add("show");

}


function hideRevisionModal() {

    revisionModal.classList.remove("show");

}


if (revisionBtn) {

    revisionBtn.addEventListener(
        "click",
        function () {

            if (
                project.revisionsUsed >=
                project.revisionLimit
            ) {

                alert(
                    "You have used all included revisions."
                );

                return;

            }


            openRevisionModal();

        }
    );

}


if (closeRevisionModal) {

    closeRevisionModal.addEventListener(
        "click",
        hideRevisionModal
    );

}


if (cancelRevision) {

    cancelRevision.addEventListener(
        "click",
        hideRevisionModal
    );

}


/* =========================================
   CLOSE MODAL BY CLICKING OUTSIDE
========================================= */

if (revisionModal) {

    revisionModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                revisionModal
            ) {

                hideRevisionModal();

            }

        }
    );

}


/* =========================================
   REVISION FORM
========================================= */

const revisionForm =
    document.getElementById(
        "revisionForm"
    );


if (revisionForm) {

    revisionForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const revisionMessage =
                document.getElementById(
                    "revisionMessage"
                ).value.trim();


            if (!revisionMessage) {

                alert(
                    "Please describe the changes you need."
                );

                return;

            }


            project.revisionsUsed++;


            project.status =
                "Revision Requested";


            const statusElement =
                document.getElementById(
                    "projectStatus"
                );


            if (statusElement) {

                statusElement.textContent =
                    "Revision Requested";

            }


            hideRevisionModal();


            revisionForm.reset();


            alert(
                "Your revision request has been sent to the professional."
            );


            console.log(
                "Revision request:",
                revisionMessage
            );


            updateRevisionDisplay();

        }
    );

}


/* =========================================
   UPDATE REVISION COUNT
========================================= */

function updateRevisionDisplay() {

    const revisionNumber =
        document.querySelector(
            ".revision-number"
        );


    if (!revisionNumber) {

        return;

    }


    revisionNumber.innerHTML =
        `${project.revisionsUsed}
        <span>
            of ${project.revisionLimit} used
        </span>`;

}


/* =========================================
   MESSAGE SYSTEM
========================================= */

const messageInput =
    document.getElementById(
        "messageInput"
    );

const sendMessageBtn =
    document.getElementById(
        "sendMessageBtn"
    );

const messagesArea =
    document.getElementById(
        "messagesArea"
    );


function sendMessage() {

    if (!messageInput) {

        return;

    }


    const message =
        messageInput.value.trim();


    if (!message) {

        return;

    }


    const messageElement =
        document.createElement("div");


    messageElement.className =
        "message sent";


    messageElement.innerHTML = `

        <div class="message-content">

            <div class="message-top">

                <strong>
                    You
                </strong>

                <span>
                    Just now
                </span>

            </div>

            <p>
                ${escapeHTML(message)}
            </p>

        </div>

    `;


    messagesArea.appendChild(
        messageElement
    );


    messageInput.value = "";


    messagesArea.scrollTop =
        messagesArea.scrollHeight;


    console.log(
        "Message sent:",
        message
    );

}


if (sendMessageBtn) {

    sendMessageBtn.addEventListener(
        "click",
        sendMessage
    );

}


if (messageInput) {

    messageInput.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" &&
                !event.shiftKey
            ) {

                event.preventDefault();

                sendMessage();

            }

        }
    );

}


/* =========================================
   SECURITY HELPER
========================================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* =========================================
   MESSAGE PROFESSIONAL
========================================= */

const messageBtn =
    document.getElementById(
        "messageBtn"
    );


if (messageBtn) {

    messageBtn.addEventListener(
        "click",
        function () {

            if (messageInput) {

                messageInput.focus();

                messageInput.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        }
    );

}


/* =========================================
   FILE BUTTONS
========================================= */

const fileButtons =
    document.querySelectorAll(
        ".file-btn"
    );


fileButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            alert(
                "File preview/download will be connected to Supabase Storage later."
            );

        }
    );

});


/* =========================================
   LOGOUT
========================================= */

const logoutBtn =
    document.getElementById(
        "logoutBtn"
    );


if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function () {

            const confirmation =
                confirm(
                    "Are you sure you want to log out?"
                );


            if (!confirmation) {

                return;

            }


            /*
                FUTURE SUPABASE:

                await supabase.auth.signOut();
            */


            localStorage.removeItem(
                "vorvenaClient"
            );


            window.location.href =
                "login.html";

        }
    );

}


/* =========================================
   RESPONSIVE SIDEBAR RESET
========================================= */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 1100) {

            sidebar.classList.remove(
                "open"
            );

        }

    }
);


/* =========================================
   FUTURE SUPABASE STRUCTURE
========================================= */


/*
    LATER:

    loadProject();

    supabase
        .from("projects")
        .select("*")
        .eq("id", projectId);


    Messages:

    supabase
        .from("project_messages")
        .select("*")
        .eq("project_id", projectId);


    Files:

    supabase
        .from("project_files")
        .select("*")
        .eq("project_id", projectId);


    Revisions:

    supabase
        .from("revision_requests")
        .select("*")
        .eq("project_id", projectId);


    Approve:

    supabase
        .from("projects")
        .update({
            status: "Approved"
        })
        .eq("id", projectId);


    Request Revision:

    supabase
        .from("revision_requests")
        .insert({
            project_id: projectId,
            requested_by: user.id,
            message: revisionMessage
        });

*/


console.log(
    "VORVENA Project Workspace loaded successfully."
);