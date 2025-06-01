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

// DOM Elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const dashboard = document.getElementById('dashboard');
const showRegisterLink = document.getElementById('showRegister');
const showLoginLink = document.getElementById('showLogin');
const logoutBtn = document.getElementById('logoutBtn');
const messageDiv = document.getElementById('message');

// Form elements
const regionSelect = document.getElementById('region');
const provinceSelect = document.getElementById('province');
const municipalitySelect = document.getElementById('municipality');
const barangaySelect = document.getElementById('barangay');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    populateRegions();
    setupEventListeners();
    checkLoginStatus();
});

// Populate regions dropdown
function populateRegions() {
    regionSelect.innerHTML = '<option value="">Select Region</option>';
    for (const region in addressData) {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Form switching
    showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        showForm('register');
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        showForm('login');
    });

    // Address cascading dropdowns
    regionSelect.addEventListener('change', handleRegionChange);
    provinceSelect.addEventListener('change', handleProvinceChange);
    municipalitySelect.addEventListener('change', handleMunicipalityChange);

    // Form submissions
    document.getElementById('registration-form').addEventListener('submit', handleRegistration);
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    
    // Logout
    logoutBtn.addEventListener('click', handleLogout);
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

// Handle region change
function handleRegionChange() {
    const selectedRegion = regionSelect.value;
    
    // Reset dependent dropdowns
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
    const selectedRegion = regionSelect.value;
    const selectedProvince = provinceSelect.value;
    
    // Reset dependent dropdowns
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
    const selectedRegion = regionSelect.value;
    const selectedProvince = provinceSelect.value;
    const selectedMunicipality = municipalitySelect.value;
    
    // Reset barangay dropdown
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
    
    // Validate password match
    if (password !== confirmPassword) {
        showMessage('Passwords do not match!', 'error');
        return;
    }
    
    // Convert FormData to JSON
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Remove confirm password from data
    delete data.confirmPassword;
    
    // Add loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Registering...';
    submitBtn.disabled = true;
    
    // Send AJAX request
    fetch('register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            showMessage('Registration successful! Please login.', 'success');
            showForm('login');
            e.target.reset();
            // Reset address dropdowns
            handleRegionChange();
        } else {
            showMessage(result.message || 'Registration failed!', 'error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showMessage('An error occurred during registration!', 'error');
    })
    .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

// Handle login form submission
function handleLogin(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Add loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Logging in...';
    submitBtn.disabled = true;
    
    // Send AJAX request
    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            showMessage('Login successful!', 'success');
            displayUserInfo(result.user);
            showForm('dashboard');
            e.target.reset();
        } else {
            showMessage(result.message || 'Login failed!', 'error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showMessage('An error occurred during login!', 'error');
    })
    .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

// Handle logout
function handleLogout() {
    fetch('logout.php', {
        method: 'POST'
    })
    .then(response => response.json())
    .then(result => {
        showMessage('Logged out successfully!', 'success');
        showForm('login');
    })
    .catch(error => {
        console.error('Error:', error);
        showMessage('Logout successful!', 'success');
        showForm('login');
    });
}

// Check login status on page load
function checkLoginStatus() {
    fetch('check_session.php')
    .then(response => response.json())
    .then(result => {
        if (result.logged_in) {
            displayUserInfo(result.user);
            showForm('dashboard');
        } else {
            showForm('login');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showForm('login');
    });
}

// Display user information in dashboard
function displayUserInfo(user) {
    const userInfoDiv = document.getElementById('userInfo');
    userInfoDiv.innerHTML = `
        <h3>User Information</h3>
        <p><strong>Name:</strong> ${user.firstName} ${user.middleName || ''} ${user.lastName} ${user.suffix || ''}</p>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phoneNumber}</p>
        <p><strong>Address:</strong> ${user.barangay}, ${user.municipality}, ${user.province}, ${user.region}</p>
        <p><strong>Registered:</strong> ${new Date(user.created_at).toLocaleDateString()}</p>
    `;
}

// Show message function
function showMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.className = `message ${type}`;
    messageDiv.classList.add('show');
    
    setTimeout(() => {
        messageDiv.classList.remove('show');
    }, 5000);
}