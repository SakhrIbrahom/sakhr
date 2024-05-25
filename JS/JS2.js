// submit75 start add new dept
$("#submit75").click(function () {
  $("#addnewdeptform").show();
  //collgId Collegetype
  $("#newCollegeId").empty();
  var SecondaryType = $("#SecondaryType").val();
  var jasonData = { Collegetype: SecondaryType };
  $("#newCollegeId").append("<option value=0> اختار الكلية </option>");
  $.ajax({
    type: "POST",
    url: "/Students/GetCollges",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(jasonData),
    dataType: "json",
    success: function (data) {
      $.each(data, function (key, value) {
        $("#newCollegeId").append(
          "<option value=" + value.Id + ">" + value.CollgName + "</option>"
        );
      });
    },
  });

  //
});
/////////// end get colleges
//on change newCollegeId  newDepartmentId
$("#newCollegeId").change(function () {
  //ssecrate
  if ($("#CollegeId").val() == 1 || $("#CollegeId").val() == 2) {
    if (
      $("#GraduationYear").val() == "2011/2010" ||
      $("#GraduationYear").val() == "2010/2009" ||
      $("#GraduationYear").val() == "2009/2008" ||
      $("#GraduationYear").val() == "2012/2011" ||
      $("#GraduationYear").val() == "2013/2012" ||
      $("#GraduationYear").val() == "2014/2013" ||
      $("#GraduationYear").val() == "2015/2014" ||
      $("#GraduationYear").val() == "2017/2016"
    ) {
      alert("عام التخرج لشهادتك الثانوية لا يسمح لك بالتقديم في هذه الكلية");
      return 0;
    }
  }
  $("#newDepartmentId").empty();
  var CollegeId = $("#newCollegeId").val();
  var SecondaryRate = parseFloat($("#SecondaryRate").val());

  var SecondaryType = $("#SecondaryType").val();
  var SchoolGovernorate = $("#SchoolGovernorate").val();

  if (SchoolGovernorate == "مارب" && $("#NewCollegeId").val() != 1) {
    SecondaryRate = SecondaryRate + 5.0;
  }
  if (SchoolGovernorate == "الجوف" && $("#NewCollegeId").val() == 7) {
    SecondaryRate = SecondaryRate + 5.0;
  }
  if (SecondaryRate < 60) {
    alert("معدلك لا يسمح لك بالتقديم في هذه الكلية ");
    return 0;
  }
  var jasonData = { CollegeId: CollegeId };
  $("#newDepartmentId").append("<option value=0> اختار قسم </option>");
  $.ajax({
    type: "POST",
    url: "/Students/GetDepartments",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(jasonData),
    dataType: "json",
    success: function (data) {
      $.each(data, function (key, value) {
        if (SecondaryRate >= value.AcceptRate && SecondaryType == 1)
          $("#newDepartmentId").append(
            "<option value=" + value.Id + ">" + value.DeptName + "</option>"
          );
        //$("#DepartmentId").append('<option value=' + + '>' + + '</option>');
        else if (SecondaryRate >= value.AcceptRate && SecondaryType == 2) {
          if (value.DeptType == 2)
            $("#newDepartmentId").append(
              "<option value=" + value.Id + ">" + value.DeptName + "</option>"
            );
        }
      });
    },
  });
});

/// on change DepartmentId get DepartmentId folder
$("#newDepartmentId").change(function () {
  //collgId Collegetype

  var DepartmentId = $("#newDepartmentId").val();

  var jasonData = { DepartmentId: DepartmentId };

  $.ajax({
    type: "POST",
    url: "/Students/DepartmentFolder",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(jasonData),
    dataType: "json",
    success: function (data) {
      $.each(data, function (key, value) {
        // $("#PathStuFolder").val(value.PathDeptFolder);
        $("#newfeed").val(value.DeptFeed);
      });
    },
  });

  //
});
/////////// end get DepartmentId folder
/// on newsend add new dept
$("#newsend").click(function () {
  //newCollegeId newDepartmentId ssectype  ssecrate newfeed
  var colegeid = $("#newCollegeId").val();
  var deptid = $("#newDepartmentId").val();
  var feed = $("#newfeed").val();
  var secmark = $("#SEC_SCHOOL_MARK").val();
  var stuid = $("#stuid").val();
  var jasonData = {
    ColegeId: colegeid,
    DepartmentId: deptid,
    StudentId: stuid,
    SEC_SCHOOL_MARK: secmark,
    Feed: feed,
  };
  //alert(jasonData);
  $.ajax({
    type: "POST",
    url: "/Students/AddNewDepartment",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(jasonData),
    dataType: "json",
    success: function (data) {
      if (data == true) {
        alert(" تم اضافة قسم جديد يرجى طباعة الحافظة وتسديد الرسوم ");
        var url = "Apply";
        window.location = url;
      } else {
        alert("انت مقدم مسبقا في هذا القسم ");
        $("#view-err").empty();
        $("#view-err").text(
          "انت مقدم مسبقا في هذا القسم لتقديم يرجى اختيار قسم اخر   "
        );
        $("#error-div").show();
      }
    },
  });
});
// end add new dept
