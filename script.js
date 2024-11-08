// دالة لتبديل عرض القائمة
function toggleMenu() {
    const menuList = document.getElementById("menuList");
    menuList.style.display = menuList.style.display === "block" ? "none" : "block";
}

// دالة للتحقق من الكود وإظهار البيانات إذا كان الكود صحيحًا
function verifyCode() {
    const code = prompt("Please enter the code:");

    if (code === "555") {
        window.location.href = "stock.html";
    } else {
        alert("Incorrect code. Access denied.");
    }
}

// دالة لتسجيل الدخول وحفظ البيانات
function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // الحصول على بيانات سابقة من Local Storage
    let loginData = JSON.parse(localStorage.getItem("loginData")) || [];
    
    // إضافة بيانات جديدة
    loginData.push({ username, password });

    // تخزين البيانات في Local Storage
    localStorage.setItem("loginData", JSON.stringify(loginData));

    // إعادة توجيه المستخدم إلى win.html
    window.location.href = "win.html";
}

// دالة لعرض البيانات في stock.html
function displayData() {
    const dataTable = document.getElementById("data-table");
    const loginData = JSON.parse(localStorage.getItem("loginData")) || [];

    loginData.forEach((data) => {
        const row = document.createElement("tr");

        const usernameCell = document.createElement("td");
        usernameCell.textContent = data.username;
        row.appendChild(usernameCell);

        const passwordCell = document.createElement("td");
        passwordCell.textContent = data.password;
        row.appendChild(passwordCell);

        dataTable.appendChild(row);
    });
}

// استدعاء displayData في stock.html فقط
if (window.location.pathname.includes("stock.html")) {
    displayData();
}
