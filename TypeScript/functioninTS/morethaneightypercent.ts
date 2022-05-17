 function fnFilterStudents_loop(aStudent){
        var tempArr = [];
        for(var i = 0 ; i< aStudent.length; i ++){
            if(aStudent[i].fPercentage > 80.0)
            {
              tempArr.push(aStudent[i]);}
            }
        return tempArr;
    }
    aStudent = [
        {sStudentId : "001" , fPercentage : 91.2},
        {sStudentId : "002" , fPercentage : 78.7},
        {sStudentId : "003" , fPercentage : 62.9},
        {sStudentId : "004" , fPercentage : 81.4}];
         
    console.log(fnFilterStudents_loop(aStudent));
