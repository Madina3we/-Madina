document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    // الحصول على قيمة كود الطالب
    const studentCode = document.getElementById("student-code").value;

    // التأكد من الكود
    if (studentCode === "200075") {
        // إذا كان الكود صحيحًا، الانتقال إلى صفحة أخرى
        window.location.href = "d.html"; // قم بتحديث الرابط للصفحة التي تريد الانتقال إليها
    } else {
        // إذا كان الكود خاطئًا، عرض رسالة خطأ
        document.getElementById("error-message").textContent = "الكود الذي أدخلته غير صحيح. يرجى المحاولة مرة أخرى.";
    }
});