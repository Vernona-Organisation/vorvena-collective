document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
       ===================================================== */

    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.getElementById("menuBtn");
    const overlay = document.getElementById("overlay");

    const changeProfessionalBtn =
        document.getElementById("changeProfessional");

    const projectRequestForm =
        document.getElementById("projectRequestForm");

    const projectTitle =
        document.getElementById("projectTitle");

    const projectDescription =
        document.getElementById("projectDescription");

    const deadline =
        document.getElementById("deadline");

    const budget =
        document.getElementById("budget");

    const requirements =
        document.getElementById("requirements");

    const referenceFiles =
        document.getElementById("referenceFiles");

    const fileList =
        document.getElementById("fileList");

    const agreement =
        document.getElementById("agreement");

    const submitRequestBtn =
        document.getElementById("submitRequestBtn");

    const successModal =
        document.getElementById("successModal");

    const viewProjectsBtn =
        document.getElementById("viewProjectsBtn");

    const notificationBtn =
        document.getElementById("notificationBtn");

    const supportBtn =
        document.getElementById("supportBtn");

    const logoutBtn =
        document.getElementById("logoutBtn");


    /* =====================================================
       RESPONSIVE SIDEBAR NAVIGATION
       MATCHES CSS:
       .sidebar.open
       .overlay.show
       ===================================================== */

    function openSidebar() {

        if (!sidebar) return;

        sidebar.classList.add("open");

        if (overlay) {
            overlay.classList.add("show");
        }

        document.body.classList.add("menu-open");

        if (menuBtn) {

            menuBtn.classList.add("active");

            menuBtn.innerHTML = "✕";

            menuBtn.setAttribute(
                "aria-expanded",
                "true"
            );

            menuBtn.setAttribute(
                "aria-label",
                "Close navigation menu"
            );
        }
    }


    function closeSidebar() {

        if (!sidebar) return;

        sidebar.classList.remove("open");

        if (overlay) {
            overlay.classList.remove("show");
        }

        document.body.classList.remove("menu-open");

        if (menuBtn) {

            menuBtn.classList.remove("active");

            menuBtn.innerHTML = "☰";

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            menuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        }
    }


    function toggleSidebar() {

        if (!sidebar) return;

        if (
            sidebar.classList.contains("open")
        ) {

            closeSidebar();

        } else {

            openSidebar();

        }
    }


    /* =====================================================
       MENU BUTTON
       ===================================================== */

    if (menuBtn) {

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

        menuBtn.setAttribute(
            "aria-label",
            "Open navigation menu"
        );


        menuBtn.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                toggleSidebar();

            }
        );

    }


    /* =====================================================
       OVERLAY
       ===================================================== */

    if (overlay) {

        overlay.addEventListener(
            "click",
            function () {

                closeSidebar();

            }
        );

    }


    /* =====================================================
       SIDEBAR NAV LINKS
       ===================================================== */

    const sidebarLinks =
        document.querySelectorAll(
            ".sidebar-nav a"
        );


    sidebarLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    closeSidebar();

                }
            );

        }
    );


    /* =====================================================
       SUPPORT BUTTON
       ===================================================== */

    if (supportBtn) {

        supportBtn.addEventListener(
            "click",
            function () {

                closeSidebar();

                window.location.href =
                    "feedback.html";

            }
        );

    }


    /* =====================================================
       ESCAPE KEY
       ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeSidebar();

            }

        }
    );


    /* =====================================================
       WINDOW RESIZE
       ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            /*
             The mobile menu only applies at
             768px and below.
            */

            if (window.innerWidth > 768) {

                closeSidebar();

            }

        }
    );


    /* =====================================================
       SELECTED PROFESSIONAL
       ===================================================== */

    const professionalNameElement =
        document.querySelector(
            ".professional-info h2"
        );

    const professionalRoleElement =
        document.querySelector(
            ".professional-info p"
        );

    const professionalAvatar =
        document.querySelector(
            ".professional-avatar"
        );


    let selectedProfessional = {

        id:
            "professional-david-williams",

        name:
            "David Williams",

        role:
            "Web Developer",

        initials:
            "DW"

    };


    /* =====================================================
       GET PROFESSIONAL INITIALS
       ===================================================== */

    function getInitials(name) {

        if (!name) {

            return "VP";

        }


        const words =
            name
                .trim()
                .split(/\s+/);


        if (words.length === 1) {

            return words[0]
                .substring(0, 2)
                .toUpperCase();

        }


        return (
            words[0].charAt(0) +
            words[words.length - 1].charAt(0)
        ).toUpperCase();

    }


    /* =====================================================
       LOAD SELECTED PROFESSIONAL
       ===================================================== */

    function loadSelectedProfessional() {

        const savedProfessional =
            localStorage.getItem(
                "vorvenaSelectedProfessional"
            );


        if (!savedProfessional) {

            updateProfessionalDisplay();

            return;

        }


        try {

            const professional =
                JSON.parse(
                    savedProfessional
                );


            if (
                professional &&
                professional.name
            ) {

                selectedProfessional = {

                    id:
                        professional.id ||
                        professional.email ||
                        professional.name,

                    name:
                        professional.name,

                    role:
                        professional.role ||
                        professional.profession ||
                        "Professional",

                    initials:
                        professional.initials ||
                        getInitials(
                            professional.name
                        )

                };

            }

        } catch (error) {

            console.error(
                "Unable to load selected professional:",
                error
            );

        }


        updateProfessionalDisplay();

    }


    /* =====================================================
       UPDATE PROFESSIONAL DISPLAY
       ===================================================== */

    function updateProfessionalDisplay() {

        if (professionalNameElement) {

            professionalNameElement.textContent =
                selectedProfessional.name;

        }


        if (professionalRoleElement) {

            professionalRoleElement.textContent =
                selectedProfessional.role;

        }


        if (professionalAvatar) {

            professionalAvatar.textContent =
                selectedProfessional.initials;

        }


        /*
         Update professional name inside
         success modal.
        */

        if (successModal) {

            const modalProfessional =
                successModal.querySelector(
                    "p strong"
                );


            if (modalProfessional) {

                modalProfessional.textContent =
                    selectedProfessional.name;

            }

        }

    }


    loadSelectedProfessional();


    /* =====================================================
       CHANGE PROFESSIONAL
       ===================================================== */

    if (changeProfessionalBtn) {

        changeProfessionalBtn.addEventListener(
            "click",
            function () {

                /*
                 Remember that the client is coming
                 from the project request page.
                */

                localStorage.setItem(
                    "vorvenaProfessionalReturnPage",
                    "project-request.html"
                );


                /*
                 IMPORTANT:
                 Your professional page is profiles.html
                */

                window.location.href =
                    "profiles.html";

            }
        );

    }


    /* =====================================================
       FILE UPLOAD
       ===================================================== */

    const MAX_FILE_SIZE =
        10 * 1024 * 1024;

    let selectedFiles = [];


    if (referenceFiles) {

        referenceFiles.addEventListener(
            "change",
            function (event) {

                const files =
                    Array.from(
                        event.target.files
                    );


                files.forEach(
                    function (file) {

                        /*
                         Prevent files above 10MB.
                        */

                        if (
                            file.size >
                            MAX_FILE_SIZE
                        ) {

                            alert(
                                `"${file.name}" is larger than 10MB and was not added.`
                            );

                            return;

                        }


                        /*
                         Prevent duplicate files.
                        */

                        const alreadyAdded =
                            selectedFiles.some(
                                function (existingFile) {

                                    return (
                                        existingFile.name ===
                                        file.name &&
                                        existingFile.size ===
                                        file.size
                                    );

                                }
                            );


                        if (!alreadyAdded) {

                            selectedFiles.push(
                                file
                            );

                        }

                    }
                );


                renderFileList();


                /*
                 Reset input so the same file
                 can be selected again later.
                */

                event.target.value = "";

            }
        );

    }


    /* =====================================================
       DISPLAY FILE LIST
       ===================================================== */

    function renderFileList() {

        if (!fileList) return;


        fileList.innerHTML = "";


        if (
            selectedFiles.length === 0
        ) {

            return;

        }


        selectedFiles.forEach(
            function (file, index) {

                const fileItem =
                    document.createElement(
                        "div"
                    );

                fileItem.className =
                    "file-item";


                const fileInfo =
                    document.createElement(
                        "div"
                    );

                fileInfo.className =
                    "file-info";


                const fileName =
                    document.createElement(
                        "span"
                    );

                fileName.className =
                    "file-name";

                fileName.textContent =
                    file.name;


                const fileSize =
                    document.createElement(
                        "span"
                    );

                fileSize.className =
                    "file-size";

                fileSize.textContent =
                    formatFileSize(
                        file.size
                    );


                fileInfo.appendChild(
                    fileName
                );

                fileInfo.appendChild(
                    fileSize
                );


                const removeBtn =
                    document.createElement(
                        "button"
                    );

                removeBtn.type =
                    "button";

                removeBtn.className =
                    "remove-file";

                removeBtn.textContent =
                    "Remove";


                removeBtn.addEventListener(
                    "click",
                    function () {

                        selectedFiles.splice(
                            index,
                            1
                        );

                        renderFileList();

                    }
                );


                fileItem.appendChild(
                    fileInfo
                );

                fileItem.appendChild(
                    removeBtn
                );


                fileList.appendChild(
                    fileItem
                );

            }
        );

    }


    /* =====================================================
       FORMAT FILE SIZE
       ===================================================== */

    function formatFileSize(bytes) {

        if (bytes === 0) {

            return "0 Bytes";

        }


        const units = [
            "Bytes",
            "KB",
            "MB",
            "GB"
        ];


        const index =
            Math.floor(
                Math.log(bytes) /
                Math.log(1024)
            );


        return (
            parseFloat(
                (
                    bytes /
                    Math.pow(
                        1024,
                        index
                    )
                ).toFixed(2)
            ) +
            " " +
            units[index]
        );

    }


    /* =====================================================
       SET MINIMUM DEADLINE
       ===================================================== */

    function setMinimumDeadline() {

        if (!deadline) return;


        const today =
            new Date();


        const year =
            today.getFullYear();


        const month =
            String(
                today.getMonth() + 1
            ).padStart(2, "0");


        const day =
            String(
                today.getDate()
            ).padStart(2, "0");


        deadline.min =
            `${year}-${month}-${day}`;

    }


    setMinimumDeadline();


    /* =====================================================
       VALIDATE DEADLINE
       ===================================================== */

    function validateDeadline() {

        if (!deadline.value) {

            alert(
                "Please select a preferred deadline."
            );

            deadline.focus();

            return false;

        }


        const selectedDate =
            new Date(
                deadline.value +
                "T00:00:00"
            );


        const today =
            new Date();


        today.setHours(
            0,
            0,
            0,
            0
        );


        if (
            selectedDate < today
        ) {

            alert(
                "Please select a future deadline."
            );

            deadline.focus();

            return false;

        }


        return true;

    }


    /* =====================================================
       FORM VALIDATION
       ===================================================== */

    function validateForm() {

        if (
            !projectTitle.value.trim()
        ) {

            alert(
                "Please enter a project title."
            );

            projectTitle.focus();

            return false;

        }


        if (
            projectDescription.value
                .trim()
                .length < 20
        ) {

            alert(
                "Please provide a clearer project description. Try to give at least 20 characters."
            );

            projectDescription.focus();

            return false;

        }


        if (!validateDeadline()) {

            return false;

        }


        /*
         Budget is optional, so it is not required.
        */

        if (
            budget.value &&
            Number(budget.value) < 0
        ) {

            alert(
                "Budget cannot be negative."
            );

            budget.focus();

            return false;

        }


        if (!agreement.checked) {

            alert(
                "Please confirm the agreement before submitting your request."
            );

            agreement.focus();

            return false;

        }


        return true;

    }


    /* =====================================================
       FORM SUBMISSION
       ===================================================== */

    if (projectRequestForm) {

        projectRequestForm.addEventListener(
            "submit",
            async function (event) {

                event.preventDefault();


                if (!validateForm()) {

                    return;

                }


                /*
                 Disable button to prevent
                 multiple submissions.
                */

                submitRequestBtn.disabled =
                    true;


                const originalButton =
                    submitRequestBtn.innerHTML;


                submitRequestBtn.innerHTML =
                    `
                    Submitting...
                    `;


                /*
                 Small loading delay.
                */

                await delay(700);


                /* =========================================
                   CREATE PROJECT REQUEST
                   ========================================= */

                const projectRequest = {

                    id:
                        "VR-" +
                        Date.now(),

                    projectTitle:
                        projectTitle.value.trim(),

                    description:
                        projectDescription.value.trim(),

                    deadline:
                        deadline.value,

                    budget:
                        budget.value
                            ? Number(
                                budget.value
                            )
                            : null,

                    requirements:
                        requirements.value.trim(),

                    professional: {

                        id:
                            selectedProfessional.id,

                        name:
                            selectedProfessional.name,

                        role:
                            selectedProfessional.role,

                        initials:
                            selectedProfessional.initials

                    },

                    files:
                        selectedFiles.map(
                            function (file) {

                                return {

                                    name:
                                        file.name,

                                    size:
                                        file.size,

                                    type:
                                        file.type

                                };

                            }
                        ),

                    status:
                        "Pending Professional Response",

                    paymentStatus:
                        "Not Paid",

                    createdAt:
                        new Date().toISOString()

                };


                /* =========================================
                   SAVE REQUEST
                   ========================================= */

                saveProjectRequest(
                    projectRequest
                );


                /* =========================================
                   ADD NOTIFICATION
                   ========================================= */

                addNotification(
                    projectRequest
                );


                /* =========================================
                   RESTORE BUTTON
                   ========================================= */

                submitRequestBtn.disabled =
                    false;

                submitRequestBtn.innerHTML =
                    originalButton;


                /* =========================================
                   UPDATE MODAL NAME
                   ========================================= */

                if (successModal) {

                    const modalProfessional =
                        successModal.querySelector(
                            "p strong"
                        );


                    if (modalProfessional) {

                        modalProfessional.textContent =
                            selectedProfessional.name;

                    }

                }


                /* =========================================
                   SHOW SUCCESS MODAL
                   ========================================= */

                openSuccessModal();

            }
        );

    }


    /* =====================================================
       SAVE PROJECT REQUEST
       ===================================================== */

    function saveProjectRequest(request) {

        let requests = [];


        try {

            requests =
                JSON.parse(
                    localStorage.getItem(
                        "vorvenaProjectRequests"
                    )
                ) || [];

        } catch (error) {

            requests = [];

        }


        requests.push(
            request
        );


        localStorage.setItem(
            "vorvenaProjectRequests",
            JSON.stringify(
                requests
            )
        );


        /*
         Save latest request separately.
        */

        localStorage.setItem(
            "vorvenaLatestProjectRequest",
            JSON.stringify(
                request
            )
        );

    }


    /* =====================================================
       ADD NOTIFICATION
       ===================================================== */

    function addNotification(request) {

        let notifications = [];


        try {

            notifications =
                JSON.parse(
                    localStorage.getItem(
                        "vorvenaNotifications"
                    )
                ) || [];

        } catch (error) {

            notifications = [];

        }


        notifications.unshift({

            id:
                "notification-" +
                Date.now(),

            title:
                "Project Request Submitted",

            message:
                `Your project request for ${request.professional.name} has been submitted.`,

            type:
                "project",

            read:
                false,

            createdAt:
                new Date().toISOString()

        });


        localStorage.setItem(
            "vorvenaNotifications",
            JSON.stringify(
                notifications
            )
        );

    }


    /* =====================================================
       SUCCESS MODAL
       ===================================================== */

    function openSuccessModal() {

        if (!successModal) return;


        /*
         Your CSS uses .show for modal visibility.
        */

        successModal.classList.add(
            "show"
        );


        document.body.classList.add(
            "modal-open"
        );

    }


    function closeSuccessModal() {

        if (!successModal) return;


        successModal.classList.remove(
            "show"
        );


        document.body.classList.remove(
            "modal-open"
        );

    }


    /* =====================================================
       GO TO MY PROJECTS
       ===================================================== */

    if (viewProjectsBtn) {

        viewProjectsBtn.addEventListener(
            "click",
            function () {

                closeSuccessModal();

                window.location.href =
                    "clients-dashboard.html#projects";

            }
        );

    }


    /* =====================================================
       NOTIFICATION BUTTON
       ===================================================== */

    if (notificationBtn) {

        notificationBtn.addEventListener(
            "click",
            function () {

                window.location.href =
                    "clients-dashboard.html#notifications";

            }
        );

    }


    /* =====================================================
       LOGOUT
       ===================================================== */

    if (logoutBtn) {

        logoutBtn.addEventListener(
            "click",
            function () {

                const confirmLogout =
                    window.confirm(
                        "Are you sure you want to logout?"
                    );


                if (!confirmLogout) {

                    return;

                }


                localStorage.removeItem(
                    "vorvenaClientLoggedIn"
                );


                localStorage.removeItem(
                    "vorvenaLoggedInUser"
                );


                window.location.href =
                    "login.html";

            }
        );

    }


    /* =====================================================
       HELPER DELAY
       ===================================================== */

    function delay(milliseconds) {

        return new Promise(
            function (resolve) {

                setTimeout(
                    resolve,
                    milliseconds
                );

            }
        );

    }


    /* =====================================================
       FINAL
       ===================================================== */

    console.log(
        "VORVENA Project Request loaded successfully."
    );

});
