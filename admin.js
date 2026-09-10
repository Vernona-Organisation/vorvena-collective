const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const menuBtn = document.getElementById("menuBtn");
const sidebarClose = document.getElementById("sidebarClose");

const themeToggle = document.getElementById("themeToggle");
const notificationBtn = document.getElementById("notificationBtn");
const logoutBtn = document.getElementById("logoutBtn");

const pageTitle = document.getElementById("pageTitle");

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".dashboard-section");

const targetButtons = document.querySelectorAll("[data-target]");

const approveButtons = document.querySelectorAll(".approve-btn");
const rejectButtons = document.querySelectorAll(".reject-btn");

const projectButtons = document.querySelectorAll(".project-action-btn");


/* =========================================================
   SIDEBAR
========================================================= */

function openSidebar() {

    sidebar.classList.add("open");
    sidebarOverlay.classList.add("active");

}


function closeSidebar() {

    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("active");

}


if (menuBtn) {

    menuBtn.addEventListener("click", openSidebar);

}


if (sidebarClose) {

    sidebarClose.addEventListener("click", closeSidebar);

}


if (sidebarOverlay) {

    sidebarOverlay.addEventListener("click", closeSidebar);

}


/* Close sidebar with Escape */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeSidebar();
    }

});


/* Close sidebar when resizing back to desktop */

window.addEventListener("resize", function () {

    if (window.innerWidth > 768) {
        closeSidebar();
    }

});


/* =========================================================
   SECTION TITLES
========================================================= */

const sectionTitles = {

    dashboard: "Dashboard",
    projects: "Projects",
    professionals: "Professionals",
    clients: "Clients",
    payments: "Payments",
    feedback: "Feedback",
    settings: "Settings"

};


/* =========================================================
   SHOW SECTION
========================================================= */

function showSection(sectionId, updateHash = true) {

    const targetSection =
        document.getElementById(sectionId);

    if (!targetSection) {
        return;
    }


    /* Hide every section */

    sections.forEach(function (section) {

        section.classList.remove("active");

    });


    /* Show selected section */

    targetSection.classList.add("active");


    /* Update sidebar */

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.dataset.section === sectionId) {

            link.classList.add("active");

        }

    });


    /* Update page title */

    if (pageTitle) {

        pageTitle.textContent =
            sectionTitles[sectionId] || "Dashboard";

    }


    /* Update URL */

    if (updateHash) {

        history.replaceState(
            null,
            "",
            "#" + sectionId
        );

    }


    /* Close mobile sidebar */

    closeSidebar();


    /* Scroll to top */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   SIDEBAR NAVIGATION
========================================================= */

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const sectionId = link.dataset.section;

        showSection(sectionId);

    });

});


/* =========================================================
   BUTTONS THAT TARGET SECTIONS
========================================================= */

targetButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const target = button.dataset.target;

        if (target) {

            showSection(target);

        }

    });

});


/* =========================================================
   LOAD SECTION FROM URL
========================================================= */

function loadInitialSection() {

    const hash =
        window.location.hash.replace("#", "");

    if (hash && document.getElementById(hash)) {

        showSection(hash, false);

    } else {

        showSection("dashboard", false);

    }

}


loadInitialSection();


/* =========================================================
   BROWSER BACK / FORWARD
========================================================= */

window.addEventListener("hashchange", function () {

    const hash =
        window.location.hash.replace("#", "");

    if (hash && document.getElementById(hash)) {

        showSection(hash, false);

    }

});


/* =========================================================
   DARK / LIGHT THEME
========================================================= */

function updateThemeButton() {

    if (!themeToggle) {
        return;
    }


    const isDark =
        document.body.classList.contains("dark-mode");


    if (isDark) {

        themeToggle.textContent = "☀";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to light mode"
        );

    } else {

        themeToggle.textContent = "☾";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to dark mode"
        );

    }

}


/* Load saved theme */

const savedTheme =
    localStorage.getItem("vorvena-admin-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

} else {

    document.body.classList.remove("dark-mode");

}


/* Update icon */

updateThemeButton();


/* Toggle theme */

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");


        const isDark =
            document.body.classList.contains("dark-mode");


        localStorage.setItem(
            "vorvena-admin-theme",
            isDark ? "dark" : "light"
        );


        updateThemeButton();

    });

}


/* =========================================================
   NOTIFICATIONS
========================================================= */

if (notificationBtn) {

    notificationBtn.addEventListener("click", function () {

        alert(
            "You have 7 pending professional applications."
        );

    });

}


/* =========================================================
   PROFESSIONAL APPROVAL
========================================================= */

approveButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card =
            button.closest(".professional-card");

        const item =
            button.closest(".professional-item");


        let name = "Professional";


        if (card) {

            const nameElement =
                card.querySelector(
                    ".professional-card-info h3"
                );

            if (nameElement) {
                name = nameElement.textContent.trim();
            }

        }


        if (item) {

            const nameElement =
                item.querySelector(".professional-info h3");

            if (nameElement) {
                name = nameElement.textContent.trim();
            }

        }


        const confirmed =
            confirm(
                `Approve ${name} as a VORVENA professional?`
            );


        if (!confirmed) {
            return;
        }


        if (card) {

            const status =
                card.querySelector(".status");

            if (status) {

                status.textContent = "Approved";
                status.className = "status approved";

            }

            button.textContent = "Approved";
            button.disabled = true;

            const reject =
                card.querySelector(".reject-btn");

            if (reject) {
                reject.disabled = true;
            }

        }


        if (item) {

            const status =
                item.querySelector(".status");

            if (status) {

                status.textContent = "Approved";
                status.className = "status approved";

            }

            button.textContent = "Approved";
            button.disabled = true;

            const reject =
                item.querySelector(".reject-btn");

            if (reject) {
                reject.disabled = true;
            }

        }


        alert(
            `${name} has been approved.`
        );

    });

});


/* =========================================================
   PROFESSIONAL REJECTION
========================================================= */

rejectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card =
            button.closest(".professional-card");

        const item =
            button.closest(".professional-item");


        let name = "Professional";


        if (card) {

            const nameElement =
                card.querySelector(
                    ".professional-card-info h3"
                );

            if (nameElement) {
                name = nameElement.textContent.trim();
            }

        }


        if (item) {

            const nameElement =
                item.querySelector(".professional-info h3");

            if (nameElement) {
                name = nameElement.textContent.trim();
            }

        }


        const confirmed =
            confirm(
                `Reject ${name}'s application?`
            );


        if (!confirmed) {
            return;
        }


        if (card) {

            const status =
                card.querySelector(".status");

            if (status) {

                status.textContent = "Rejected";
                status.className = "status rejected";

            }

            button.textContent = "Rejected";
            button.disabled = true;

            const approve =
                card.querySelector(".approve-btn");

            if (approve) {
                approve.disabled = true;
            }

        }


        if (item) {

            const status =
                item.querySelector(".status");

            if (status) {

                status.textContent = "Rejected";
                status.className = "status rejected";

            }

            button.textContent = "Rejected";
            button.disabled = true;

            const approve =
                item.querySelector(".approve-btn");

            if (approve) {
                approve.disabled = true;
            }

        }


        alert(
            `${name}'s application has been rejected.`
        );

    });

});


/* =========================================================
   PROJECT BUTTONS
========================================================= */

projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert(
            "Project management will be connected to the VORVENA backend later."
        );

    });

});


/* =========================================================
   LOGOUT
========================================================= */

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        const confirmed =
            confirm(
                "Are you sure you want to logout?"
            );


        if (!confirmed) {
            return;
        }


        alert(
            "Admin authentication will be connected here later."
        );

    });

}


/* =========================================================
   FILTER BUTTONS
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        button.classList.add("active");

    });

});


/* =========================================================
   PROFESSIONAL SEARCH
========================================================= */

const searchBar =
    document.querySelector(".search-bar");


if (searchBar) {

    searchBar.addEventListener("input", function () {

        const searchValue =
            searchBar.value.toLowerCase().trim();


        const cards =
            document.querySelectorAll(
                ".professional-card"
            );


        cards.forEach(function (card) {

            const text =
                card.textContent.toLowerCase();


            if (text.includes(searchValue)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}
