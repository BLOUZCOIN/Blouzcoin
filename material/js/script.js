// الحصول على كل الأزرار التي تحتوي على class "task-button"
document.querySelectorAll(".task-button").forEach(button => {
    let taskId = button.getAttribute("data-id"); // رقم المهمة الفريد
    let taskPoints = parseInt(button.getAttribute("data-points")); // تحويل النقاط إلى رقم
    let taskUrl = button.getAttribute("data-url"); // الرابط المستهدف

    // التحقق مما إذا كان الزر قد تم الضغط عليه مسبقًا
    if (localStorage.getItem("taskButton" + taskId)) {
        button.style.display = "none"; // إخفاء الزر إذا كان قد تم الضغط عليه من قبل
    }

    // عند الضغط على الزر
    button.addEventListener("click", function () {
        // استدعاء دالة إضافة النقاط (تحويل النقاط إلى عدد صحيح)
        completeTask(taskPoints, taskUrl); 

        // إخفاء الزر
        this.style.display = "none";

        // تخزين حالة الضغط على الزر
        localStorage.setItem("taskButton" + taskId, "true");

        // توجيه المستخدم إلى الصفحة المطلوبة
        window.location.href = taskUrl;
    });
});


