let currentStep = 0;

function next() {
    const conversionBox = document.getElementById('conversionBox');

    if (currentStep === 0) {
        // Step 1: File selection view
        conversionBox.innerHTML = `
            <h2>Selamat Datang di Halaman Konversi</h2>
            <input type="file" id="fileInput" multiple><br><br>
            <span>atau</span>
            <p>Drop File di sini</p> 
            <button class="btn next" onclick="next()">Next</button>
        `;
        currentStep++;
    } else if (currentStep === 1) {
        // Step 2: Review files before conversion
        conversionBox.innerHTML = `
            <h2>Harap Pastikan File yang ingin diconvert sudah benar</h2>
            <ul>
                <li>
                    <label>File Pertama</label>
                    <button class="btn-icon" onclick="removeFile(1)"><img src="icon_x.png" alt="Remove"></button>
                </li>
                <li>
                    <label>File Kedua</label>
                    <button class="btn-icon" onclick="removeFile(2)"><img src="icon_x.png" alt="Remove"></button>
                </li>
                <li>
                    <label>File Ketiga</label>
                    <button class="btn-icon" onclick="removeFile(3)"><img src="icon_x.png" alt="Remove"></button>
                </li>
            </ul>
            <div class="btn-group">
                <button class="btn prev" onclick="prev()">Kembali</button>
                <button class="btn submit" onclick="convert()">Submit</button>
            </div>
        `;
        currentStep++;
    }
}

function prev() {
    const conversionBox = document.getElementById('conversionBox');

    if (currentStep === 2) {
        // Go back to Step 1: File selection
        conversionBox.innerHTML = `
            <h2>Selamat Datang di Halaman Konversi</h2>
            <input type="file" id="fileInput" multiple><br><br>
            <span>atau</span>
            <p>Drop File di sini</p> 
            <button class="btn next" onclick="next()">Next</button>
        `;
        currentStep--;
    }
}

function convert() {
    const conversionBox = document.getElementById('conversionBox');

    // Step 3: Conversion completed
    conversionBox.innerHTML = `
        <h2>Terima kasih telah menggunakan aplikasi</h2> 
        <ul>
            <li>
                <label>File Pertama</label>
                <button class="btn-icon" onclick="downloadFile(1)"><img src="icon_download.png" alt="Download"></button>
            </li>
            <li>
                <label>File Kedua</label>
                <button class="btn-icon" onclick="downloadFile(2)"><img src="icon_download.png" alt="Download"></button>
            </li>
            <li>
                <label>File Ketiga</label>
                <button class="btn-icon" onclick="downloadFile(3)"><img src="icon_download.png" alt="Download"></button>
            </li>
        </ul>
        <div class="btn-group">
            <button class="btn prev" onclick="home()">Home</button>
            <button class="btn submit" onclick="downloadAll()">Download Semua</button>
        </div>
    `;
    currentStep++;
}

function removeFile(fileNumber) {
    alert('File ' + fileNumber + ' dihapus.');
}

function home() {
    const conversionBox = document.getElementById('conversionBox');
    
    // Back to the initial home view
    conversionBox.innerHTML = `
        <h2>Selamat Datang di Halaman Konversi</h2>
        <p>Klik tombol di bawah ini untuk mulai mengkonversi</p>
        <button class="btn next" onclick="next()">Mulai Konversi</button>
    `;
    currentStep = 0;
}

function downloadAll() {
    alert('Semua file akan di-download.');
}

function downloadFile(fileNumber) {
    alert('File ' + fileNumber + ' di-download.');
}
