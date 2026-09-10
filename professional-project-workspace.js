/* =====================================================
   PROJECT DATA
   ===================================================== */

let project = {

    id: "VOR-001",

    title: "Business Website Design",

    client: "Bright Solutions",

    price: 150000,

    professionalShare: 127500,

    vorvenaFee: 22500,

    deadline: "September 20, 2026",

    status: "in_progress",

    revisionsUsed: 0,

    revisionsAllowed: 2,

    files: []

};


/* =====================================================
   ELEMENTS
   ===================================================== */

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");

const projectStatus = document.getElementById("projectStatus");

const startWorkBtn = document.getElementById("startWorkBtn");
const acceptJobBtn = document.getElementById("acceptJobBtn");
const declineJobBtn = document.getElementById("declineJobBtn");

const fileInput = document.getElementById("fileInput");
const selectedFiles = document.getElementById("selectedFiles");

const submitWorkBtn = document.getElementById("submitWorkBtn");
const saveWorkBtn = document.getElementById("saveWorkBtn");

const revisionCounter = document.getElementById("revisionCounter");

const messages = document.getElementById("messages");
const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("messageInput");

const revisionModal = document.getElementById("revisionModal");
const declineModal = document.getElementById("declineModal");

const revisionDoneBtn = document.getElementById("revisionDoneBtn");

const revisionEmpty = document.getElementById("revisionEmpty");
const revisionRequest = document.getElementById("revisionRequest");

const timeline = document.getElementById("timeline");


/* =====================================================
   MOBILE SIDEBAR
   ===================================================== */

menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("open");

    menuBtn.textContent =
        sidebar.classList.contains("open")
            ? "✕"
            : "☰";

});


/* Close sidebar when navigation is clicked */

document.querySelectorAll(".sidebar-nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 768) {

            sidebar.classList.remove("open");

            menuBtn.textContent = "☰";

        }

    });

});


/* =====================================================
   STATUS FUNCTIONS
   ===================================================== */

function updateProjectStatus(status) {

    project.status = status;


    if (status === "in_progress") {

        projectStatus.textContent = "In Progress";

        projectStatus.className =
            "project-status in-progress";

        startWorkBtn.classList.add("hidden");

        acceptJobBtn.classList.add("hidden");

    }


    if (status === "submitted") {

        projectStatus.textContent = "Submitted for Review";

        projectStatus.className =
            "project-status in-progress";

        startWorkBtn.classList.add("hidden");

        acceptJobBtn.classList.add("hidden");

        submitWorkBtn.disabled = true;

        submitWorkBtn.style.opacity = "0.5";

    }


    if (status === "revision_requested") {

        projectStatus.textContent = "Revision Requested";

        projectStatus.className =
            "project-status in-progress";

    }


    if (status === "awaiting_payout") {

        projectStatus.textContent = "Awaiting Admin Payout";

        projectStatus.className =
            "project-status in-progress";

        submitWorkBtn.disabled = true;

    }


    if (status === "paid") {

        projectStatus.textContent = "Paid / Completed";

        projectStatus.className =
            "project-status in-progress";

    }

}


/* =====================================================
   START WORK
   ===================================================== */

startWorkBtn.addEventListener("click", () => {

    updateProjectStatus("in_progress");

    addTimelineItem(
        "Work started",
        "You started working on the project.",
        "Today"
    );

    alert(
        "Project started successfully.\n\nYou can now work on the project and submit it when ready."
    );

});


/* =====================================================
   ACCEPT JOB
   ===================================================== */

acceptJobBtn.addEventListener("click", () => {

    project.status = "accepted";

    startWorkBtn.classList.remove("hidden");

    acceptJobBtn.classList.add("hidden");

    addTimelineItem(
        "Job accepted",
        "You accepted the project.",
        "Just now"
    );

    alert("Job accepted successfully.");

});


/* =====================================================
   DECLINE JOB
   ===================================================== */

declineJobBtn.addEventListener("click", () => {

    declineModal.classList.add("show");

});


document.getElementById("closeDecline")
    .addEventListener("click", closeDeclineModal);


document.getElementById("cancelDecline")
    .addEventListener("click", closeDeclineModal);


function closeDeclineModal() {

    declineModal.classList.remove("show");

}


document.getElementById("confirmDecline")
    .addEventListener("click", () => {

        project.status = "declined";

        closeDeclineModal();

        projectStatus.textContent = "Job Declined";

        projectStatus.className =
            "project-status in-progress";

        startWorkBtn.classList.add("hidden");

        declineJobBtn.classList.add("hidden");

        alert(
            "You have declined this project.\n\nIn the real VORVENA system, the client and admin would be notified."
        );

    });


/* =====================================================
   FILE UPLOAD
   ===================================================== */

fileInput.addEventListener("change", () => {

    selectedFiles.innerHTML = "";

    project.files = Array.from(fileInput.files);


    project.files.forEach((file, index) => {

        const item = document.createElement("div");

        item.className = "selected-file";

        item.innerHTML = `
            <span>${escapeHTML(file.name)}</span>
            <small>${formatFileSize(file.size)}</small>
        `;

        selectedFiles.appendChild(item);

    });

});


function formatFileSize(bytes) {

    if (bytes < 1024) {

        return bytes + " B";

    }

    if (bytes < 1024 * 1024) {

        return (bytes / 1024).toFixed(1) + " KB";

    }

    return (bytes / (1024 * 1024)).toFixed(1) + " MB";

}


/* =====================================================
   SAVE PROGRESS
   ===================================================== */

saveWorkBtn.addEventListener("click", () => {

    localStorage.setItem(
        "vorvenaProjectDraft",
        JSON.stringify({
            projectId: project.id,
            files: project.files.map(file => file.name)
        })
    );

    alert(
        "Progress saved locally for this demo."
    );

});


/* =====================================================
   SUBMIT WORK
   ===================================================== */

submitWorkBtn.addEventListener("click", () => {

    if (project.files.length === 0) {

        alert(
            "Please upload at least one project file before submitting."
        );

        return;

    }


    updateProjectStatus("submitted");

    addTimelineItem(
        "Work submitted",
        "Your completed work has been submitted to the client for review.",
        "Just now"
    );


    alert(
        "Work submitted successfully.\n\nStatus: Submitted for Review"
    );

});


/* =====================================================
   REVISION SYSTEM
   ===================================================== */

function showRevisionRequest() {

    if (project.revisionsUsed >= project.revisionsAllowed) {

        alert(
            "The included revision limit has been reached."
        );

        return;

    }


    project.revisionsUsed++;

    revisionCounter.textContent =
        `${project.revisionsUsed} / ${project.revisionsAllowed}`;


    revisionEmpty.classList.add("hidden");

    revisionRequest.classList.remove("hidden");

    updateProjectStatus("revision_requested");

}


/* Demo button:
   You can remove this later when Supabase is connected.
*/

revisionDoneBtn.addEventListener("click", () => {

    revisionModal.classList.add("show");

});


document.getElementById("closeRevision")
    .addEventListener("click", () => {

        revisionModal.classList.remove("show");

    });


document.getElementById("submitRevisionResponse")
    .addEventListener("click", () => {

        const response =
            document.getElementById("revisionResponse").value.trim();


        if (!response) {

            alert(
                "Please describe the updates you made."
            );

            return;

        }


        revisionModal.classList.remove("show");

        document.getElementById("revisionResponse").value = "";


        updateProjectStatus("submitted");


        addTimelineItem(
            "Updated work submitted",
            response,
            "Just now"
        );


        revisionRequest.classList.add("hidden");

        revisionEmpty.classList.remove("hidden");


        alert(
            "Updated work submitted successfully."
        );

    });


/* =====================================================
   MESSAGES
   ===================================================== */

messageForm.addEventListener("submit", event => {

    event.preventDefault();


    const text = messageInput.value.trim();


    if (!text) {

        return;

    }


    const message = document.createElement("div");

    message.className =
        "message professional-message";


    message.innerHTML = `

        <div class="message-avatar">
            DW
        </div>

        <div>

            <strong>You</strong>

            <p>${escapeHTML(text)}</p>

            <small>Just now</small>

        </div>

    `;


    messages.appendChild(message);


    messageInput.value = "";


    messages.scrollTop =
        messages.scrollHeight;


});


/* =====================================================
   MESSAGE CLIENT BUTTON
   ===================================================== */

document.getElementById("messageClientBtn")
    .addEventListener("click", () => {

        messageInput.focus();

        messageInput.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });


/* =====================================================
   FILE VIEW BUTTONS
   ===================================================== */

document.querySelectorAll(".file-btn").forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "File preview/download will be connected to Supabase Storage later."
        );

    });

});


/* =====================================================
   TIMELINE
   ===================================================== */

function addTimelineItem(title, description, time) {

    const item = document.createElement("div");

    item.className =
        "timeline-item active";


    item.innerHTML = `

        <div class="timeline-dot"></div>

        <div>

            <strong>${escapeHTML(title)}</strong>

            <p>${escapeHTML(description)}</p>

            <small>${escapeHTML(time)}</small>

        </div>

    `;


    timeline.insertBefore(
        item,
        timeline.firstChild
    );

}


/* =====================================================
   NOTIFICATION
   ===================================================== */

document.getElementById("notificationBtn")
    .addEventListener("click", () => {

        alert(
            "You have 2 new notifications."
        );

    });


/* =====================================================
   SUPPORT
   ===================================================== */

document.getElementById("supportBtn")
    .addEventListener("click", () => {

        alert(
            "VORVENA Support\n\nSupport messaging will be connected to the admin system later."
        );

    });


/* =====================================================
   LOGOUT
   ===================================================== */

document.getElementById("logoutBtn")
    .addEventListener("click", () => {

        const confirmLogout =
            confirm("Are you sure you want to logout?");


        if (confirmLogout) {

            localStorage.removeItem("vorvenaProfessional");

            window.location.href =
                "login.html";

        }

    });


/* =====================================================
   SECURITY HELPER
   ===================================================== */

function escapeHTML(value) {

    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =====================================================
   INITIALIZE
   ===================================================== */

function initializeWorkspace() {

    updateProjectStatus(project.status);

    revisionCounter.textContent =
        `${project.revisionsUsed} / ${project.revisionsAllowed}`;

}


/* Start */

initializeWorkspace();