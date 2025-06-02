// Address data structure
const addressData = {
    "Metro Manila": {
        "Manila": {
            "Manila City": ["Barangay 1", "Barangay 2", "Barangay 3", "Barangay 4", "Barangay 5"]
        },
        "Quezon City": {
            "Quezon City": ["Barangay A", "Barangay B", "Barangay C", "Barangay D", "Barangay E"]
        },
        "Makati": {
            "Makati City": ["Poblacion", "San Lorenzo", "Bel-Air", "Urdaneta", "Magallanes"]
        },
        "Pasig": {
            "Pasig City": ["Bagong Ilog", "Kapitolyo", "Oranbo", "Pinagbuhatan", "Rosario"]
        },
        "Taguig": {
            "Taguig City": ["Bagumbayan", "Bambang", "Calzada", "Hagonoy", "Ibayo-Tipas"]
        }
    },
    "Calabarzon": {
        "Laguna": {
            "Santa Rosa": ["Aplaya", "Balibago", "Dila", "Dita", "Kanluran"],
            "Biñan": ["Biñan", "Canlalay", "Dela Paz", "Ganado", "Langkiwa"],
            "San Pedro": ["Alaminos", "Bagong Silang", "Chrysanthemum", "Fatima", "Landayan"],
            "Cabuyao": ["Barangay Uno", "Barangay Dos", "Barangay Tres", "Barangay Cuatro", "Barangay Cinco"],
            "Calamba": ["Bagong Kalsada", "Banadero", "Banlic", "Bañadero", "Batino"]
        },
        "Cavite": {
            "Bacoor": ["Alima", "Aniban I", "Aniban II", "Banalan", "Bayanan"],
            "Imus": ["Alapan I-A", "Alapan I-B", "Alapan II-A", "Alapan II-B", "Anabu I-A"],
            "Dasmariñas": ["Bagong Bayan", "Burol", "Cabuco", "Datu Esmael", "Fatima I"],
            "General Trias": ["Alingaro", "Arnaldo", "Bacao I", "Bacao II", "Bagumbayan"],
            "Kawit": ["Binakayan-Kanluran", "Binakayan-Silangan", "Gahak", "Kaingen", "Magdalo"]
        },
        "Rizal": {
            "Antipolo": ["Bagong Nayon", "Beverly Hills", "Cupang", "Dalig", "dela Paz"],
            "Cainta": ["Dayap", "Dela Paz", "San Andres", "San Isidro", "Santo Domingo"],
            "Taytay": ["Bagumbayan", "Dolores", "Muzon", "San Isidro", "Santa Ana"],
            "Marikina": ["Barangka", "Calumpang", "Concepcion Dos", "Fortune", "Industrial Valley"],
            "San Mateo": ["Ampid I", "Ampid II", "Banaba", "Burgos", "Dulongbayan"]
        },
        "Batangas": {
            "Batangas City": ["Alangilan", "Balagtas", "Balete", "Banaba Center", "Bolbok"],
            "Lipa": ["Adya", "Anilao", "Antipolo del Norte", "Antipolo del Sur", "Bagong Pook"],
            "Tanauan": ["Altura Bata", "Altura Matanda", "Ambulong", "Balele", "Banjo East"],
            "Santo Tomas": ["Barangay I", "Barangay II", "Barangay III", "Barangay IV", "San Antonio"],
            "Calaca": ["Baguio", "Balibago", "Banaba Kanluran", "Banaba Silangan", "Bucal"]
        },
        "Quezon": {
            "Lucena": ["Barangay 1", "Barangay 2", "Barangay 3", "Barangay 4", "Barangay 5"],
            "Candelaria": ["Bulagsong", "Kinatihan I", "Kinatihan II", "Masin", "Pahinga"],
            "Sariaya": ["Bignay I", "Bignay II", "Canda", "Gibanga", "Limbon"],
            "Tayabas": ["Angeles Zone I", "Angeles Zone II", "Angeles Zone III", "Angeles Zone IV", "Angustias Zone I"],
            "Tiaong": ["Anastacia", "Behia", "Bukal", "Bula", "Bulakin"]
        }
    },
    "Central Luzon": {
        "Pampanga": {
            "San Fernando": ["Baliti", "Bulaon", "Cabalantian", "Calulut", "Dela Paz Norte"],
            "Angeles": ["Agapito del Rosario", "Amsic", "Balibago", "Capaya", "Claro M. Recto"],
            "Mabalacat": ["Atlu-Bola", "Bundagul", "Cacutud", "Camachiles", "Dapdap"],
            "Meycauayan": ["Bagbaguin", "Bahay Pare", "Bancal", "Banga", "Calvario"],
            "Apalit": ["Balucuc", "Calantipe", "Capalangan", "Paligui", "San Juan"]
        },
        "Bulacan": {
            "Malolos": ["Atlag", "Babatnin", "Bagna", "Balayong", "Balite"],
            "Meycauayan": ["Bagbaguin", "Bahay Pare", "Bancal", "Banga", "Calvario"],
            "Marilao": ["Abangan Norte", "Abangan Sur", "Ibayo", "Lambakin", "Lias"],
            "San Jose del Monte": ["Assumption", "Bagong Buhay I", "Bagong Buhay II", "Bagong Buhay III", "Ciudad Real"],
            "Santa Maria": ["Bagbaguin", "Balasing", "Bulac", "Camangyanan", "Caysio"]
        },
        "Tarlac": {
            "Tarlac City": ["Aguso", "Alvindia", "Amucao", "Armenia", "Balingcanaway"],
            "Paniqui": ["Bantog", "Caramutan", "Casantaan", "Colisao", "Cutcut"],
            "Concepcion": ["Bediona", "Buenlag", "Calapan", "Camamang", "Dawis"],
            "Capas": ["Aranguren", "Atok", "Bueno", "Cristo Rey", "Cutcut I"],
            "Bamban": ["Anupul", "Bangbang", "Duat", "Lourdes", "Magsaysay"]
        },
        "Nueva Ecija": {
            "Cabanatuan": ["Aduas Norte", "Aduas Sur", "Bagong Sikat", "Bakero", "Balangkare Norte"],
            "Gapan": ["Bayanihan", "Bungo", "Kapalangan", "Ligaya", "Maligaya"],
            "San Jose": ["Kaliwanagan", "Malasin", "Manicla", "Villa Joson", "Villa Nati"],
            "Palayan": ["Atate", "Cabayu", "Singalat", "Tila", "Villa Flores"],
            "Muñoz": ["Bantug", "Bantug Norte", "Bantug Sur", "Catalanacan", "La Purisima"]
        },
        "Bataan": {
            "Balanga": ["Bagong Silang", "Barangay Central", "Ibayo", "Poblacion", "Tuyo"],
            "Mariveles": ["Alas-asin", "Balon-anito", "Bataan", "Biaan", "Cabcaben"],
            "Dinalupihan": ["Aquino", "Bangal", "Daang Bago", "Gen. Luna", "Happy Valley"],
            "Hermosa": ["A. Rivera", "Almacen", "Balsic", "Bamban", "Burgos-Soliman"],
            "Orani": ["Apollo", "Bagong Paraiso", "Balut", "Bayan", "Calero"]
        }
    },
    "Ilocos Region": {
        "Ilocos Norte": {
            "Laoag": ["Barangay No. 1", "Barangay No. 2", "Barangay No. 3", "Barangay No. 4", "Barangay No. 5"],
            "Batac": ["Acosta", "Baay", "Baligat", "Ben-agan", "Biningan"],
            "Vigan": ["Ayusan Norte", "Ayusan Sur", "Barangay I", "Barangay II", "Barangay III"],
            "Pagudpud": ["Baduang", "Balaoi", "Burayoc", "Caunayan", "Ligaya"],
            "Burgos": ["Agaga", "Arosip", "Buduan", "Cadaratan", "Delles"]
        },
        "Ilocos Sur": {
            "Vigan": ["Ayusan Norte", "Ayusan Sur", "Barangay I", "Barangay II", "Barangay III"],
            "Candon": ["Allangigan 1st", "Allangigan 2nd", "Ayudante", "Bagani Campo", "Bagani Gabay"],
            "Santa": ["Ampandula", "Anos", "Banaoang", "Cabaroan", "Cabiraan"],
            "Narvacan": ["Ambulogan", "Bangbangolan", "Cabaroan", "Cabugao", "Dalayap"],
            "Santiago": ["Aglipay", "Allangigan", "Amguid", "Bimmanga", "Burabod"]
        },
        "La Union": {
            "San Fernando": ["Bacsil", "Bidaray", "Birunget", "Cabaroan", "Cadaclan"],
            "Bauang": ["Acao", "Bagbag", "Ballay", "Bitalag", "Boy-utan"],
            "Bagulin": ["Alilem", "Baay", "Cardiz", "Cayus", "Dagup"],
            "Naguilian": ["Aguirre", "Balaoan", "Bancagan", "Cabaroan Norte", "Cabaroan Sur"],
            "Agoo": ["Ambitacay", "Capas", "Cayanguan", "Consolacion", "Santa Rita"]
        },
        "Pangasinan": {
            "Dagupan": ["Bacayao Norte", "Bacayao Sur", "Bolosan", "Bonuan Binloc", "Bonuan Boquig"],
            "San Carlos": ["Abanon", "Agdao", "Anando", "Ano", "Antiporda"],
            "Alaminos": ["Alos", "Amandiego", "Amangbangan", "Balangobong", "Baleyadaan"],
            "Urdaneta": ["Anonas", "Bactad East", "Bactad West", "Bayaoas", "Bolaney"],
            "Malasiqui": ["Anonang", "Ariston East", "Ariston West", "Bantay", "Baragbag"]
        }
    },
    "Bicol Region": {
        "Albay": {
            "Legazpi": ["Bagumbayan", "Banquerohan", "Bitano", "Bonot", "Buenavista"],
            "Tabaco": ["Agnas", "Albay", "Amtic", "Bangkilingan", "Bonga"],
            "Ligao": ["Amtic", "Anahawan", "Badao", "Balinad", "Banag"],
            "Guinobatan": ["Anog", "Banadero", "Banao", "Batang", "Binitayan"],
            "Tiwi": ["Abuyon", "Antipolo", "Bago", "Balete", "Buhi"]
        },
        "Camarines Sur": {
            "Naga": ["Abella", "Bagumbayan Norte", "Bagumbayan Sur", "Balatas", "Calauag"],
            "Iriga": ["Antipolo", "Bagumbayan", "Calvario", "Cristo Rey", "La Medalla"],
            "Pili": ["Anayan", "Bagacay", "Bagong Silang", "Bai", "Bato"],
            "Magarao": ["Amon", "Bagacay", "Baranghay", "Belen", "Bolo"],
            "Canaman": ["Fundado", "Marupit", "Paloyon", "Payatan", "San Roque"]
        },
        "Camarines Norte": {
            "Daet": ["Alawihao", "Bagasbas", "Borabod", "Lag-on", "Mantagbac"],
            "Jose Panganiban": ["Ambos", "Barangay I", "Barangay II", "Barangay III", "Barangay IV"],
            "Vinzons": ["Barangay I", "Barangay II", "Barangay III", "Barangay IV", "Barangay V"],
            "Labo": ["Bagacay", "Barangay I", "Barangay II", "Caayunan", "Macogon"],
            "Mercedes": ["Apuao", "Bagalay", "Barangay I", "Barangay II", "Barangay III"]
        },
        "Sorsogon": {
            "Sorsogon City": ["Abuyog", "Bacon", "Balogo", "Barayong", "Bibinuangan"],
            "Bulan": ["Amagna", "Bulan", "Caditaan", "Camalig", "Cogon"],
            "Casiguran": ["Ariman", "Buenavista", "Culasi", "Dancalan", "Ginangra"],
            "Pilar": ["Antipolo", "Bao", "Capuy", "Fabrica", "Guinobatan"],
            "Donsol": ["Banbanan", "Barangay I", "Barangay II", "Barangay III", "Barangay IV"]
        },
        "Masbate": {
            "Masbate City": ["Barangay 1", "Barangay 2", "Barangay 3", "Barangay 4", "Barangay 5"],
            "Mobo": ["Agsam", "Alibaro", "Bagacay", "Bagumbayan", "Baitan"],
            "Aroroy": ["Antipolo", "Balogo", "Binisitahan", "Bolong", "Cabangahan"],
            "Mandaon": ["Barangay I", "Barangay II", "Barangay III", "Barangay IV", "Barangay V"],
            "Cataingan": ["Bani", "Barangay I", "Barangay II", "Barangay III", "Barangay IV"]
        }
    }
};

// In-memory user storage (simulating a database)
let registeredUsers = {};
let currentUser = null;

// DOM Elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const dashboard = document.getElementById('dashboard');
const showRegisterLink = document.getElementById('showRegister');
const showLoginLink = document.getElementById('showLogin');
const logoutBtn = document.getElementById('logoutBtn');
const messageDiv = document.getElementById('message');

// Registration steps
const basicInfoStep = document.getElementById('basicInfo');
const addressInfoStep = document.getElementById('addressInfo');
const accountDetailsStep = document.getElementById('accountDetails');

// Step navigation buttons
const nextStep1Btn = document.getElementById('nextStep1');
const nextStep2Btn = document.getElementById('nextStep2');
const prevStep2Btn = document.getElementById('prevStep2');
const prevStep3Btn = document.getElementById('prevStep3');

// Step indicators
const step1Indicator = document.getElementById('step1');
const step2Indicator = document.getElementById('step2');
const step3Indicator = document.getElementById('step3');

// Form elements
const regionSelect = document.getElementById('region');
const provinceSelect = document.getElementById('province');
const municipalitySelect = document.getElementById('municipality');
const barangaySelect = document.getElementById('barangay');

let currentStep = 1;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    populateRegions();
    setupEventListeners();
    checkLoginStatus();
});

// Setup event listeners
function setupEventListeners() {
    // Form switching
    showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        showForm('register');
        resetRegistrationForm();
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        showForm('login');
    });

    // Step navigation
    if (nextStep1Btn) {
        nextStep1Btn.addEventListener('click', () => {
            if (validateStep1()) {
                goToStep(2);
            }
        });
    }

    if (nextStep2Btn) {
        nextStep2Btn.addEventListener('click', () => {
            if (validateStep2()) {
                goToStep(3);
            }
        });
    }

    if (prevStep2Btn) {
        prevStep2Btn.addEventListener('click', () => goToStep(1));
    }

    if (prevStep3Btn) {
        prevStep3Btn.addEventListener('click', () => goToStep(2));
    }

    // Address cascading dropdowns
    regionSelect.addEventListener('change', handleRegionChange);
    provinceSelect.addEventListener('change', handleProvinceChange);
    municipalitySelect.addEventListener('change', handleMunicipalityChange);

    // Form submissions
    const registrationForm = document.getElementById('registration-form');
    const loginFormElement = document.getElementById('login-form');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistration);
    }
    
    if (loginFormElement) {
        loginFormElement.addEventListener('submit', handleLogin);
    }
    
    // Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
}

// Show specific form
function showForm(formType) {
    loginForm.classList.add('hidden');
    registerForm.classList.add('hidden');
    dashboard.classList.add('hidden');
    
    if (formType === 'login') {
        loginForm.classList.remove('hidden');
    } else if (formType === 'register') {
        registerForm.classList.remove('hidden');
    } else if (formType === 'dashboard') {
        dashboard.classList.remove('hidden');
    }
}

// Reset registration form to step 1
function resetRegistrationForm() {
    if (basicInfoStep && addressInfoStep && accountDetailsStep) {
        currentStep = 1;
        updateStepDisplay();
        const registrationForm = document.getElementById('registration-form');
        if (registrationForm) {
            registrationForm.reset();
        }
        handleRegionChange(); // Reset address dropdowns
    }
}

// Go to specific step
function goToStep(step) {
    currentStep = step;
    updateStepDisplay();
}

// Update step display
function updateStepDisplay() {
    if (!basicInfoStep || !addressInfoStep || !accountDetailsStep) return;
    
    // Hide all steps
    basicInfoStep.classList.add('hidden');
    addressInfoStep.classList.add('hidden');
    accountDetailsStep.classList.add('hidden');

    // Reset step indicators
    if (step1Indicator) step1Indicator.classList.remove('active', 'completed');
    if (step2Indicator) step2Indicator.classList.remove('active', 'completed');
    if (step3Indicator) step3Indicator.classList.remove('active', 'completed');

    // Show current step and update indicators
    if (currentStep === 1) {
        basicInfoStep.classList.remove('hidden');
        if (step1Indicator) step1Indicator.classList.add('active');
    } else if (currentStep === 2) {
        addressInfoStep.classList.remove('hidden');
        if (step1Indicator) step1Indicator.classList.add('completed');
        if (step2Indicator) step2Indicator.classList.add('active');
    } else if (currentStep === 3) {
        accountDetailsStep.classList.remove('hidden');
        if (step1Indicator) step1Indicator.classList.add('completed');
        if (step2Indicator) step2Indicator.classList.add('completed');
        if (step3Indicator) step3Indicator.classList.add('active');
    }
}

// Validate Step 1
function validateStep1() {
    const firstName = document.getElementById('firstName')?.value.trim();
    const lastName = document.getElementById('lastName')?.value.trim();
    const phoneNumber = document.getElementById('phoneNumber')?.value.trim();

    if (!firstName || !lastName || !phoneNumber) {
        showMessage('Please fill in all required basic information fields!', 'error');
        return false;
    }
    return true;
}

// Validate Step 2
function validateStep2() {
    const region = regionSelect?.value;
    const province = provinceSelect?.value;
    const municipality = municipalitySelect?.value;
    const barangay = barangaySelect?.value;

    if (!region || !province || !municipality || !barangay) {
        showMessage('Please fill in all address information fields!', 'error');
        return false;
    }
    return true;
}

// Populate regions dropdown
function populateRegions() {
    if (!regionSelect || typeof addressData === 'undefined') return;
    
    regionSelect.innerHTML = '<option value="">Select Region</option>';
    for (const region in addressData) {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
    }
}

// Handle region change
function handleRegionChange() {
    if (!regionSelect || typeof addressData === 'undefined') return;
    
    const selectedRegion = regionSelect.value;
    
    provinceSelect.innerHTML = '<option value="">Select Province</option>';
    municipalitySelect.innerHTML = '<option value="">Select Municipality</option>';
    barangaySelect.innerHTML = '<option value="">Select Barangay</option>';
    
    provinceSelect.disabled = !selectedRegion;
    municipalitySelect.disabled = true;
    barangaySelect.disabled = true;
    
    if (selectedRegion && addressData[selectedRegion]) {
        for (const province in addressData[selectedRegion]) {
            const option = document.createElement('option');
            option.value = province;
            option.textContent = province;
            provinceSelect.appendChild(option);
        }
    }
}

// Handle province change
function handleProvinceChange() {
    if (!regionSelect || !provinceSelect || typeof addressData === 'undefined') return;
    
    const selectedRegion = regionSelect.value;
    const selectedProvince = provinceSelect.value;
    
    municipalitySelect.innerHTML = '<option value="">Select Municipality</option>';
    barangaySelect.innerHTML = '<option value="">Select Barangay</option>';
    
    municipalitySelect.disabled = !selectedProvince;
    barangaySelect.disabled = true;
    
    if (selectedRegion && selectedProvince && addressData[selectedRegion][selectedProvince]) {
        for (const municipality in addressData[selectedRegion][selectedProvince]) {
            const option = document.createElement('option');
            option.value = municipality;
            option.textContent = municipality;
            municipalitySelect.appendChild(option);
        }
    }
}

// Handle municipality change
function handleMunicipalityChange() {
    if (!regionSelect || !provinceSelect || !municipalitySelect || typeof addressData === 'undefined') return;
    
    const selectedRegion = regionSelect.value;
    const selectedProvince = provinceSelect.value;
    const selectedMunicipality = municipalitySelect.value;
    
    barangaySelect.innerHTML = '<option value="">Select Barangay</option>';
    barangaySelect.disabled = !selectedMunicipality;
    
    if (selectedRegion && selectedProvince && selectedMunicipality && 
        addressData[selectedRegion][selectedProvince][selectedMunicipality]) {
        const barangays = addressData[selectedRegion][selectedProvince][selectedMunicipality];
        barangays.forEach(barangay => {
            const option = document.createElement('option');
            option.value = barangay;
            option.textContent = barangay;
            barangaySelect.appendChild(option);
        });
    }
}

// Handle registration form submission
function handleRegistration(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    
    if (password !== confirmPassword) {
        showMessage('Passwords do not match!', 'error');
        return;
    }
    
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    delete data.confirmPassword;
    
    // Check if username or email already exists
    const username = data.username;
    const email = data.email;
    
    for (let existingUser in registeredUsers) {
        if (registeredUsers[existingUser].username === username) {
            showMessage('Username already exists!', 'error');
            return;
        }
        if (registeredUsers[existingUser].email === email) {
            showMessage('Email already registered!', 'error');
            return;
        }
    }
    
    const submitBtn = document.getElementById('registerBtn') || e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Registering...';
    submitBtn.disabled = true;
    
    // Add timestamp and store user
    data.created_at = new Date().toISOString();
    const userId = Date.now().toString(); // Simple ID generation
    registeredUsers[userId] = data;
    
    // Simulate API call
    setTimeout(() => {
        showMessage('Registration successful! Please login.', 'success');
        showForm('login');
        resetRegistrationForm();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
}

// Handle login form submission
function handleLogin(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const loginUsername = formData.get('username');
    const loginPassword = formData.get('password');
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Logging in...';
    submitBtn.disabled = true;
    
    // Find user by username or email
    let foundUser = null;
    for (let userId in registeredUsers) {
        const user = registeredUsers[userId];
        if ((user.username === loginUsername || user.email === loginUsername) && 
            user.password === loginPassword) {
            foundUser = user;
            break;
        }
    }
    
    // Simulate login delay
    setTimeout(() => {
        if (foundUser) {
            currentUser = foundUser;
            showMessage('Login successful!', 'success');
            displayUserInfo(foundUser);
            showForm('dashboard');
            e.target.reset();
        } else {
            showMessage('Invalid username/email or password!', 'error');
        }
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1000);
}

// Handle logout
function handleLogout() {
    currentUser = null;
    showMessage('Logged out successfully!', 'success');
    showForm('login');
}

// Check login status
function checkLoginStatus() {
    if (currentUser) {
        displayUserInfo(currentUser);
        showForm('dashboard');
    } else {
        showForm('login');
    }
}

// Display user information
function displayUserInfo(user) {
    const userInfoDiv = document.getElementById('userInfo');
    if (!userInfoDiv) return;
    
    const fullName = [
        user.firstName,
        user.middleName,
        user.lastName,
        user.suffix
    ].filter(name => name && name.trim()).join(' ');
    
    userInfoDiv.innerHTML = `
        <h3>User Information</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phoneNumber}</p>
        <p><strong>Address:</strong> ${user.barangay}, ${user.municipality}, ${user.province}, ${user.region}</p>
        <p><strong>Registered:</strong> ${new Date(user.created_at).toLocaleDateString()}</p>
    `;
}

// Show message function
function showMessage(message, type) {
    if (!messageDiv) return;
    
    messageDiv.textContent = message;
    messageDiv.className = `message ${type}`;
    messageDiv.classList.add('show');
    
    setTimeout(() => {
        messageDiv.classList.remove('show');
    }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    
    // Detect mobile or desktop
    const isMobile = window.innerWidth <= 767;
    const imageUrl = isMobile ? './mobile-bg-img.jpg' : './bg-img.jpg';
    
    // Preload background image
    const backgroundImage = new Image();
    
    backgroundImage.onload = function() {
        // Image loaded - add it to background
        body.classList.add('bg-loaded');
    };
    
    backgroundImage.onerror = function() {
        console.log('Background image failed to load');
    };
    
    // Start loading
    backgroundImage.src = imageUrl;
});