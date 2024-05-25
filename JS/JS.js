// add hovered class to selected List item
let list = document.querySelectorAll(".navightion li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));
////

// Meny=u Toggle

let toggle = document.querySelector(".toggle");

let navightion = document.querySelector(".navightion");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navightion.classList.toggle("active");
  main.classList.toggle("active");
};
/*
function nextStudentInfo() {
  //   if (document.getElementsByClassName("schoolBox").Style.display == "flex") {
  //     document.getElementById("schoolBoxLast").style.display = "block";
  //     document.getElementById("schoolBox").Style.display = "none";
  //   } else {
  //     document.getElementById("schoolBoxLast").style.display = "none";
  //     document.getElementById("schoolBox").style.display = "block";
  //   }
  // احصل على جميع العناصر التي لها الفئة "schoolBox"
  //   var schoolBoxes = document.getElementsByClassName("schoolBox");

  //   // تكرار على كل عنصر في القائمة وتغيير خاصية 'display'
  //   for (var i = 0; i < schoolBoxes.length; i++) {
  //     schoolBoxes[i].style.display = "none";
  //   }

  // احصل على جميع العناصر ذات الفئة "schoolBox"
  var schoolBoxes = document.getElementsByClassName("schoolBox");

  // متغير لتتبع حالة العرض
  var isHidden = false;

  // وظيفة لعرض أو إخفاء العناصر بناءً على الحالة
  function toggleDisplay() {
    if (isHidden) {
      // إذا كانت العناصر مخفية، أظهر الجميع ما عدا الأخير
      for (var i = 0; i < schoolBoxes.length - 1; i++) {
        schoolBoxes[i].style.display = "block"; // إظهار العناصر
      }
      schoolBoxes[schoolBoxes.length - 1].style.display = "none"; // إخفاء الأخير
    } else {
      // إذا كانت العناصر ظاهرة، أخفِ الجميع ما عدا الأخير
      for (var i = 0; i < schoolBoxes.length - 1; i++) {
        schoolBoxes[i].style.display = "none"; // إخفاء العناصر
      }
      schoolBoxes[schoolBoxes.length - 1].style.display = "block"; // إظهار الأخير
    }

    // قلب الحالة
    isHidden = !isHidden;
  }

  // اضبط وظيفة النقر على زر أو عنصر
  document.getElementById("btn_next").addEventListener("click", toggleDisplay);
}
*/

// احصل على جميع العناصر ذات الفئة "schoolBox"
var schoolBoxes = document.getElementsByClassName("schoolBox");

// في الوضع الافتراضي، إخفاء الفئة الأخيرة
schoolBoxes[schoolBoxes.length - 1].style.display = "none";

// متغير لتتبع الحالة (هل نعرض الفئة الأخيرة فقط؟)
var showOnlyLast = false;

// وظيفة لتبديل العرض والإخفاء
function toggleDisplay() {
  if (showOnlyLast) {
    // إذا كان الفئة الأخيرة فقط ظاهرة، أظهر الجميع باستثناء الأخير
    for (var i = 0; i < schoolBoxes.length - 1; i++) {
      schoolBoxes[i].style.display = "grid"; // إظهار الفئات الأخرى
      document.getElementById("schoolBox_input").style.display = "block";

      document.getElementById("btn_next").innerHTML = "التالي";
      document.getElementById("btn_next").style.background = "#2a2185";
    }
    schoolBoxes[schoolBoxes.length - 1].style.display = "none"; // إخفاء الفئة الأخيرة
  } else {
    // إذا كان الجميع ظاهراً باستثناء الأخير، أخفِ الجميع وأظهر الفئة الأخيرة
    for (var i = 0; i < schoolBoxes.length - 1; i++) {
      schoolBoxes[i].style.display = "none"; // إخفاء الفئات الأخرى
      document.getElementById("schoolBox_input").style.display = "none";
      document.getElementById("btn_next").innerHTML = "السابق";
      document.getElementById("btn_next").style.background = "#F00";
    }
    schoolBoxes[schoolBoxes.length - 1].style.display = "grid"; // إظهار الفئة الأخيرة
  }

  // تبديل الحالة
  showOnlyLast = !showOnlyLast;
}

// إضافة مستمع للنقر على زر أو عنصر للتحكم في العرض والإخفاء
document.getElementById("btn_next").addEventListener("click", toggleDisplay);

// ============================= تعبئة العنصر من الحقول

// الحصول على الحقل والـ span
// استدعاء القيمه من الحقول والقوائم المنسدله في متغيرات
const inputFieldStuId = document.getElementById("schoolBox_input");
const inputFieldAvg = document.getElementById("input_Avg");
const selectFieldGove = document.getElementById("schoolGovernorate");
const selectFieldType = document.getElementById("schoolType");
const selectFieldDate = document.getElementById("schoolDate");
const selectFieldColl = document.getElementById("newCollegeId");
const selectFieldSec = document.getElementById("newSecId");

// استدعاء المتغيرات التي سوف يتم الكتابه فيها
const infoSpanStuId = document.getElementById("Id_number");
const infoSpanAvg = document.getElementById("Id_Avg");
const infoSpanGove = document.getElementById("Id_Governorate");
const infoSpanType = document.getElementById("Id_type_Duality");
const infoSpanDate = document.getElementById("Id_Date");
const infoSpanColl = document.getElementById("Id_Coll");
const infoSpanSec = document.getElementById("Id_Sec");

/*
// حدث عند إدخال قيمة في الحقل
inputFieldStuId.addEventListener("input", function () {
  // نقل قيمة الحقل إلى span
  infoSpanStuId.textContent = inputFieldStuId.value;
});

inputFieldAvg.addEventListener("input", function () {
  infoSpanAvg.textContent = inputFieldAvg.value;
});
*/

// الحدث الذي يحدث عند الخروج من الحقل
inputFieldStuId.addEventListener("blur", function () {
  // فقط إذا كان هناك قيمة في الحقل
  if (inputFieldStuId.value.trim() !== "") {
    infoSpanStuId.textContent = inputFieldStuId.value;
  }
});

inputFieldAvg.addEventListener("blur", function () {
  if (inputFieldAvg.value.trim() !== "") {
    infoSpanAvg.textContent = inputFieldAvg.value;
  }
});

// عند تغيير الاختيار في القائمة
selectFieldGove.addEventListener("change", function () {
  // الحصول على الخيار المختار
  const selectedOption = selectFieldGove.options[selectFieldGove.selectedIndex];
  // وضع النص الخاص بالخيار المختار في الـ span
  infoSpanGove.textContent = selectedOption.text;
});

selectFieldType.addEventListener("change", function () {
  const selectedOption = selectFieldType.options[selectFieldType.selectedIndex];
  infoSpanType.textContent = selectedOption.text;
});

// عند تغيير الاختيار في القائمة
selectFieldDate.addEventListener("change", function () {
  const selectedOption = selectFieldDate.options[selectFieldDate.selectedIndex];
  infoSpanDate.textContent = selectedOption.text;
});

selectFieldColl.addEventListener("change", function () {
  const selectedOption = selectFieldColl.options[selectFieldColl.selectedIndex];
  infoSpanColl.textContent = selectedOption.text;
});

selectFieldSec.addEventListener("change", function () {
  const selectedOption = selectFieldSec.options[selectFieldSec.selectedIndex];
  infoSpanSec.textContent = selectedOption.text;
});

// ==============================

const collegeDepartments = {
  1: ["طب بشري"],
  2: ["نظم معلومات حاسوبية", "تكنولوجيا المعلومات", "علوم حاسوب"],
  3: ["محاسبة", "إدارة اعمال", "إدارة عامة", "مصارف وتمويل", "تسويق"],
  4: ["شريعة وقانون"],
  5: [
    "علوم قران",
    "لغة انجليزية تربية",
    "لغة عربية تربية",
    "علوم حياه تربية",
    "رياضيات تربية",
    "فيزياء تربية",
    "كيمياء تربية",
    "جيولوجيا",
    "معلم صف",
  ],
  6: [
    "الدراسات الاسلامية",
    "اللغة الانجليزية",
    "أثار وسياحة",
    "الاعلام - إذاعة وتلفزيون",
    "الاعلام - علاقات عامة",
    "علوم سياسية",
  ],
  7: [
    "نظم معلومات",
    "معلم صف",
    "علوم حياة",
    "رياضيات",
    "لغة انجليزية",
    "إدارة عامة",
    "علوم قران",
    "لغة عربية",
  ],
};

const selectColl = document.getElementById("newCollegeId");
const selectSec = document.getElementById("newSecId");

selectColl.addEventListener("change", function () {
  // تفريغ القائمة الثانية
  selectSec.innerHTML = "";

  // إعادة إضافة الخيار الافتراضي
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "اختر القسم";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  selectSec.appendChild(defaultOption);

  // إضافة الأقسام بناءً على الاختيار في القائمة الأولى
  const selectedValue = selectColl.value;
  const departments = collegeDepartments[selectedValue];

  departments.forEach(function (department) {
    const option = document.createElement("option");
    option.textContent = department;
    selectSec.appendChild(option);
  });
});

// =========================================

const error = document.getElementById("error");
// التحقق من الحقل الأول
inputFieldStuId.addEventListener("blur", function () {
  if (inputFieldStuId.value.trim() === "") {
    error.textContent = "الرجاء تعبئة هذا الحقل.";
    schoolBoxes[0].style.display = "block";
    inputFieldStuId.focus(); // إعادة التركيز إلى الحقل إذا كان فارغًا
  } else {
    schoolBoxes[0].style.display = "none";
    error.textContent = "";
    inputFieldStuId.disabled = false; // إلغاء تعطيل الحقل التالي إذا تم تعبئة الحقل الأول
  }
});

// التحقق من الحقل الثاني
inputFieldAvg.addEventListener("blur", function () {
  if (inputFieldAvg.value.trim() === "") {
    error.textContent = "الرجاء تعبئة هذا الحقل.";
    schoolBoxes[0].style.display = "block";
    inputFieldAvg.focus(); // إعادة التركيز إلى الحقل إذا كان فارغًا
  } else {
    schoolBoxes[0].style.display = "none";
    error.textContent = "";
    inputFieldAvg.disabled = false; // إلغاء تعطيل الحقل التالي إذا تم تعبئة الحقل الأول
  }
});

// ========================= التحقق عند النقر على زر التالي
function BtnClickNext() {
  if (
    infoSpanStuI.textContent === "" &&
    infoSpanAvg.textContent === "" &&
    infoSpanGov.textContent === "" &&
    infoSpanType.textContent === "" &&
    infoSpanDate.textContent === ""
  ) {
    error.textContent = "قم بتعبئة جميع الحقول قبل الانتقال للخطوه التالية.";
    schoolBoxes[0].style.display = "block";
  } else {
    document
      .getElementById("btn_next")
      .addEventListener("click", toggleDisplay);
    schoolBoxes[0].style.display = "ىخىث";
  }
}

//================================ Show and Hidde Table ===========================

function ShowTable(TableId) {
  var tables = document.getElementsByClassName("CollTables");
  for (var i = 0; i < tables.length; i++) {
    tables[i].style.display = "none";
  }

  document.getElementById(TableId).style.display = "table";
  // نسخ العنوان الى H2
  const linkText = event.target.textContent;
  const targetElement = document.getElementById("SecName");
  targetElement.textContent = linkText;
}

const Sec_Name = document.getElementById("SecName");

///
/*
function updateTable() {
   var table = document.getElementById("ViewTable6").getElementsByTagName("tbody")[0];

   var newRows = [
       ["الفصل الأول", "المستوى الأول", "فقه إسلامي 1"],
       ["الفصل الثاني", "المستوى الأول", "أصول الفقه 1"],
       ["الفصل الأول", "المستوى الثاني", "علوم الحديث"],
       ["الفصل الثاني", "المستوى الثاني", "تفسير القرآن"],
       ["الفصل الأول", "المستوى الثالث", "قانون مدني"],
       ["الفصل الثاني", "المستوى الثالث", "قانون جنائي"],
       ["الفصل الأول", "المستوى الرابع", "قانون تجاري"],
       ["الفصل الثاني", "المستوى الرابع", "قانون دولي"]
   ];

   for (var i = 0; i < table.rows.length; i++) {
       for (var j = 0; j < table.rows[i].cells.length; j++) {
           table.rows[i].cells[j].textContent = newRows[i][j];
       }
   }
}*/

// ================================== Check input Full ==============

/*function validateForm(event) {
   // منع العملية الافتراضية عند النقر على الزر
   event.preventDefault();

   // الحصول على جميع الحقول المطلوبة
   const seatNumber = document.getElementById("schoolBox_input").value;
   const avgScore = document.getElementById("input_Avg").value;
   const governorate = document.getElementById("schoolGovernorate").value;
   const schoolType = document.getElementById("schoolType").value;
   const graduationYear = document.getElementById("schoolDate").value;
   const college = document.getElementById("newCollegeId").value;
   const department = document.getElementById("newSecId").value;

   // التحقق من الحقول المطلوبة
   if (!seatNumber || !avgScore || governorate == "0" || schoolType == "0" || graduationYear == "0" || college == "0" || department == "0") {
       alert("يرجى ملء جميع الحقول المطلوبة قبل الحفظ.");
       return;
   }

   // إذا كانت جميع الحقول مكتملة، يمكنك تنفيذ الوظيفة المطلوبة هنا
   alert("جميع الحقول مكتملة، سيتم الحفظ الآن.");
   // تابع العملية
   document.querySelector("form").submit(); // إذا كنت ترغب في إرسال النموذج
}*/

// function validateAndProcess(event) {
//   // منع الإجراء الافتراضي للزر
//   event.preventDefault();

//   // التحقق من الحقول المطلوبة
//   const seatNumber = document.getElementById("schoolBox_input").value;
//   const avgScore = document.getElementById("input_Avg").value;
//   const governorate = document.getElementById("schoolGovernorate").value;
//   const schoolType = document.getElementById("schoolType").value;
//   const graduationYear = document.getElementById("schoolDate").value;
//   const college = document.getElementById("newCollegeId").value;
//   const department = document.getElementById("newSecId").value;

//   if (
//     !seatNumber ||
//     !avgScore ||
//     governorate == "0" ||
//     schoolType == "0" ||
//     graduationYear == "0" ||
//     college == "0" ||
//     department == "0"
//   ) {
//     alert("يرجى ملء جميع الحقول المطلوبة قبل الحفظ.");
//     return;
//   }

//   // إذا كانت جميع الحقول مكتملة، توليد رقم عشوائي بين 6 و10
//   const randomNumber = Math.floor(Math.random() * (10 - 6 + 1)) + 6;

//   // إرسال الرسائل إلى العناصر المحددة
//   const h3Element = document.querySelector(".schoolBox1 h3");
//   const h2Element = document.querySelector(".schoolBox1 h2");
//   const porElement = document.querySelector("schoolBox1 .progress-bar");
//   porElement.style.display = "block";
//   startProgressBar();
//   // متابعة العملية (إذا كنت ترغب في إرسال النموذج)
//   //   document.querySelector("form").submit(); // إرسال النموذج بعد التحقق
// }

// /*
//  */
// function startProgressBar() {
//   const progressBar = document.querySelector(".progress-bar-inner");

//   // مدة عملية الحفظ
//   const duration = 3000; // 3 ثواني

//   // التحديث التدريجي للشريط
//   let progress = 0;
//   const interval = setInterval(function () {
//     progress += 10; // زيادة 10% كل فترة
//     progressBar.style.width = progress + "%"; // تحديث العرض
//     progressBar.textContent = progress + "%"; // عرض النسبة المئوية

//     if (progress >= 100) {
//       // عندما يصل إلى 100%
//       clearInterval(interval); // أوقف التحديث
//       alert("تمت عملية الحفظ بنجاح!"); // تنبيه المستخدم
//       h3Element.textContent = "لقد تمت عملية التسجيل بنجاح";
//       h2Element.textContent = `رقم الحافظة هو ${randomNumber}. يرجى التسديد عبر أي بنك`;
//     }
//   }, duration / 10); // التقسيم حسب الوقت
// }

function validateAndProcess(event) {
  // منع الإجراء الافتراضي
  event.preventDefault();

  // التحقق من الحقول المطلوبة
  const seatNumber = document.getElementById("schoolBox_input").value;
  const avgScore = document.getElementById("input_Avg").value;
  const governorate = document.getElementById("schoolGovernorate").value;
  const schoolType = document.getElementById("schoolType").value;
  const graduationYear = document.getElementById("schoolDate").value;
  const college = document.getElementById("newCollegeId").value;
  const department = document.getElementById("newSecId").value;

  if (
    !seatNumber ||
    !avgScore ||
    governorate == "0" ||
    schoolType == "0" ||
    graduationYear == "0" ||
    college == "0" ||
    department == "0"
  ) {
    alert("يرجى ملء جميع الحقول المطلوبة قبل الحفظ.");
    return;
  }

  // توليد رقم عشوائي مكون من 6 إلى 10 أرقام
  const randomLength = Math.floor(Math.random() * 5) + 6; // طول يتراوح بين 6 و10
  let randomNumber = "";
  for (let i = 0; i < randomLength; i++) {
    randomNumber += Math.floor(Math.random() * 10); // أرقام عشوائية من 0 إلى 9
  }

  // إظهار شريط التقدم
  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.display = "block"; // إظهار الشريط

  // بدء شريط التقدم
  startProgressBar(randomNumber);
}

function startProgressBar(randomNumber) {
  const progressBarInner = document.querySelector(".progress-bar-inner");
  const h3Element = document.querySelector(".schoolBox1 h3");
  const h2Element = document.querySelector(".schoolBox1 h4");

  // مدة العملية (3 ثوانٍ)
  const duration = 3000;

  let progress = 0;
  const interval = setInterval(function () {
    progress += 10; // زيادة 10% كل فترة
    progressBarInner.style.width = progress + "%";
    progressBarInner.textContent = progress + "%";

    if (progress >= 100) {
      clearInterval(interval); // توقف التحديث
      h3Element.textContent = "لقد تمت عملية التسجيل بنجاح";
      h2Element.textContent = `رقم الحافظة هو [ ${randomNumber} ] . يرجى التسديد عبر أي بنك`;

      // إخفاء شريط التقدم بعد 1 ثانية
      setTimeout(function () {
        progressBar.style.display = "none"; // إخفاء الشريط
        progressBarInner.style.width = "0%"; // إعادة التهيئة
      }, 1000); // 1 ثانية بعد الاكتمال
    }
  }, duration / 10);
}
