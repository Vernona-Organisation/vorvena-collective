/* =========================================
   VORVENA CLIENT DASHBOARD
   Connected to frontend authentication
========================================= */


/* =========================================
   AUTHENTICATION CHECK
========================================= */

const loggedIn = sessionStorage.getItem("vorvenaUserLoggedIn");
const storedUser = sessionStorage.getItem("vorvenaLoggedInUser");


// If client is not logged in, send them to login
if (loggedIn !== "true" || !storedUser) {

    window.location.href = "login.html";

}


// Get logged-in user
let client = null;

try {

    client = JSON.parse(storedUser);

} catch (error) {

    console.error("Unable to read logged-in client.");

    sessionStorage.clear();

    window.location.href = "login.html";

}


/* =========================================
   MAKE SURE USER IS A CLIENT
========================================= */

if (
    client &&
    client.accountType &&
    client.accountType !== "client"
) {

    sessionStorage.clear();

    window.location.href = "login.html";

}


/* =========================================
   CLIENT INFORMATION
========================================= */

if (client) {

    const fullName =
        client.fullName ||
        client.name ||
        "Client";

    const nameParts =
        fullName.trim().split(/\s+/);

    const firstName =
        nameParts[0] || "Client";


    // Generate initials automatically
    const initials =
        nameParts
            .slice(0, 2)
            .map(name => name.charAt(0).toUpperCase())
            .join("");


    /* =========================================
       UPDATE CLIENT NAME
    ========================================= */

    const clientName =
        document.getElementById("clientName");

    const topClientName =
        document.getElementById("topClientName");

    const welcomeName =
        document.getElementById("welcomeName");


    if (clientName) {
        clientName.textContent = fullName;
    }

    if (topClientName) {
        topClientName.textContent = fullName;
    }

    if (welcomeName) {
        welcomeName.textContent = firstName;
    }


    /* =========================================
       UPDATE AVATARS
    ========================================= */

    const avatars =
        document.querySelectorAll(
            ".profile-avatar, .small-avatar"
        );


    avatars.forEach(avatar => {

        avatar.textContent =
            initials || "C";

    });

}


/* =========================================
   TEMPORARY PROJECT DATA
   Will later come from Supabase
========================================= */

const projects = [

    {
        id: "project001",
        title: "Business Website Design",
        professional: "David Williams",
        price: 150000,
        deadline: "Sept 20",
        status: "In Progress"
    },

    {
        id: "project002",
        title: "Brand Logo Design",
        professional: "Sarah Creative",
        price: 80000,
        deadline: "Sept 15",
        status: "Review"
    },

    {
        id: "project003",
        title: "Social Media Management",
        professional: "Michael Adams",
        price: 120000,
        deadline: "Sept 30",
        status: "In Progress"
    }

];


/* =========================================
   MOBILE SIDEBAR
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

    if (!sidebar) return;

    sidebar.classList.add("open");

}


function closeSidebarMenu() {

    if (!sidebar) return;

    sidebar.classList.remove("open");

}


/* =========================================
   OPEN SIDEBAR
========================================= */

if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        openSidebar
    );

}


/* =========================================
   CLOSE SIDEBAR
========================================= */

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

    link.addEventListener(
        "click",
        function () {

            if (window.innerWidth <= 1100) {

                closeSidebarMenu();

            }

        }
    );

});


/* =========================================
   NOTIFICATION BUTTON
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
                "You have 3 recent notifications."
            );

        }
    );

}


/* =========================================
   SUPPORT BUTTON
========================================= */

const supportBtn =
    document.getElementById(
        "supportBtn"
    );


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

            const confirmLogout =
                confirm(
                    "Are you sure you want to log out?"
                );


            if (!confirmLogout) {
                return;
            }


            /*
                FRONTEND AUTH VERSION

                Remove only the active session.

                We DO NOT remove
                vorvenaClientAccount because
                the client may want to log in again.
            */


            sessionStorage.removeItem(
                "vorvenaLoggedInUser"
            );

            sessionStorage.removeItem(
                "vorvenaUserLoggedIn"
            );

            sessionStorage.removeItem(
                "vorvenaClientName"
            );

            sessionStorage.removeItem(
                "vorvenaClientEmail"
            );

            sessionStorage.removeItem(
                "vorvenaAccountType"
            );


            // Remove unfinished hiring session
            sessionStorage.removeItem(
                "vorvenaHiringIntent"
            );

            sessionStorage.removeItem(
                "vorvenaSelectedProfessional"
            );


            // Return to login
            window.location.href =
                "login.html";

        }
    );

}


/* =========================================
   ACTIVE PROJECT COUNT
========================================= */

const activeProjects =
    document.getElementById(
        "activeProjects"
    );


if (activeProjects) {

    const activeCount =
        projects.filter(
            project =>
                project.status === "In Progress"
        ).length;


    activeProjects.textContent =
        activeCount;

}


/* =========================================
   COMPLETED PROJECT COUNT
========================================= */

const completedProjects =
    document.getElementById(
        "completedProjects"
    );


if (completedProjects) {

    const completedCount =
        projects.filter(
            project =>
                project.status === "Completed"
        ).length;


    /*
        Temporary fallback.

        This will be connected to
        real project data later.
    */

    if (completedCount > 0) {

        completedProjects.textContent =
            completedCount;

    }

}


/* =========================================
   PENDING PROJECT COUNT
========================================= */

const pendingProjects =
    document.getElementById(
        "pendingProjects"
    );


if (pendingProjects) {

    const pendingCount =
        projects.filter(
            project =>
                project.status === "Pending"
        ).length;


    if (pendingCount > 0) {

        pendingProjects.textContent =
            pendingCount;

    }

}


/* =========================================
   PROJECT CLICK
========================================= */

const projectItems =
    document.querySelectorAll(
        ".project-item"
    );


projectItems.forEach(
    (projectElement, index) => {

        projectElement.style.cursor =
            "pointer";


        projectElement.addEventListener(
            "click",
            function () {

                const selectedProject =
                    projects[index];


                if (!selectedProject) {
                    return;
                }


                /*
                    FUTURE PROJECT WORKSPACE:

                    window.location.href =
                    `project-workspace.html?id=${selectedProject.id}`;
                */


                console.log(
                    "Selected project:",
                    selectedProject
                );

            }
        );

    }
);


/* =========================================
   FIND PROFESSIONAL BUTTONS
========================================= */

const findProfessionalLinks =
    document.querySelectorAll(
        'a[href="community.html"]'
    );


findProfessionalLinks.forEach(link => {

    const text =
        link.textContent
            .trim()
            .toLowerCase();


    if (
        text.includes("find a professional") ||
        text.includes("find professionals")
    ) {

        link.setAttribute(
            "href",
            "profiles.html"
        );

    }

});


/* =========================================
   RESPONSIVE SIDEBAR RESET
========================================= */

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 1100 &&
            sidebar
        ) {

            sidebar.classList.remove(
                "open"
            );

        }

    }
);


/* =========================================
   PROTECT DASHBOARD WHEN TAB IS RESTORED
========================================= */

window.addEventListener(
    "pageshow",
    function () {

        const currentLogin =
            sessionStorage.getItem(
                "vorvenaUserLoggedIn"
            );

        const currentUser =
            sessionStorage.getItem(
                "vorvenaLoggedInUser"
            );


        if (
            currentLogin !== "true" ||
            !currentUser
        ) {

            window.location.href =
                "login.html";

        }

    }
);


/* =========================================
   FUTURE SUPABASE FUNCTIONS
========================================= */


/*
async function loadClientDashboard() {

    // Get logged-in client

    const {
        data: { user }
    } = await supabase.auth.getUser();


    if (!user) {

        window.location.href =
            "login.html";

        return;
    }


    // Get client profile

    const { data: profile } =
        await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single();


    // Get client's projects

    const { data: projects } =
        await supabase
            .from("projects")
            .select("*")
            .eq("client_id", user.id);


    console.log(profile);
    console.log(projects);

}
*/


/* =========================================
   DASHBOARD READY
========================================= */

console.log(
    "VORVENA Client Dashboard loaded successfully."
);