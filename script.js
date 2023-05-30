function hitungBMI() {
            let berat = parseFloat(document.getElementById("berat").value);
 
            let tinggi = parseFloat(document.getElementById("tinggi").value            
            // Konversi tinggi dari cm ke meter
            let tinggidiMeter = tinggi / 100;

            // Menghitung BMI
            let bmi = berat / (tinggidiMeter * tinggidiMeter););
            
            // Menampilkan hasil BMI
            let hasil = document.getElementById("hasil");
            hasil.innerHTML = "BMI Anda: " + bmi.toFixed(2);

            // Menentukan kategori BMI
            if (bmi < 18.5) {
                hasil.innerHTML += " (Kurus)";
            } else if (bmi >= 18.5 && bmi < 25) {
                hasil.innerHTML += " (Normal)";
            } else if (bmi >= 25 && bmi < 30) {
                hasil.innerHTML += " (Gemuk)";
            } else {
                hasil.innerHTML += " (Obesitas)";
            }
        }
            