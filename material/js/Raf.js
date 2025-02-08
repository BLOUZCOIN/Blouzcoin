
        // استخراج معرف الإحالة (ref) من عنوان الموقع
        function getQueryParam(param) {
            var urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }

        // جلب معرف المستخدم من الرابط (إذا كان موجودًا)
        var userId = getQueryParam("ref") || "default";

        // إنشاء رابط الإحالة
        var referralLink = "http://t.me/Blouzairdropbot" + userId;

        // تحديث قيمة حقل الإدخال
        var linkElement = document.getElementById("link");
        linkElement.value = referralLink;

        // وظيفة زر النسخ
        document.getElementById("copyButton").addEventListener("click", function() {
            linkElement.select();
            linkElement.setSelectionRange(0, 99999); // دعم للهواتف
            document.execCommand("copy");
            alert("تم نسخ الرابط: " + referralLink);
        });
