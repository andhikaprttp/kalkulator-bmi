function hitungBMI() {
            let berat = parseFloat(document.getElementById("berat").value);
 
            let tinggi = parseFloat(document.getElementById("tinggi").value            // Konversi tinggi dari cm ke meter
            let tinggidiMeter = tinggi / 100;

            // Menghitung BMI
            let bmi = berat / (tinggidiMeter * tinggidiMeter););
            
                        // Menampilkan hasil BMI
            let resultElement = document.getElementById("result");
            resultElement.innerHTML = "BMI Anda: " + bmi.toFixed(2);

            // Menentukan kategori BMI
            if (bmi < 18.5) {
                resultElement.innerHTML += " (Kurus)";
            } else if (bmi >= 18.5 && bmi < 25) {
                resultElement.innerHTML += " (Normal)";
            } else if (bmi >= 25 && bmi < 30) {
                resultElement.innerHTML += " (Gemuk)";
            } else {
                resultElement.innerHTML += " (Obesitas)";
            }
        }
            