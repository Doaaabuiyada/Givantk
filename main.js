var jobs=[]; 
function each(coll, func) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                func(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                func(coll[key], key); 
          } 
    } 
}


$(document).ready(function(){
    $('#addJobb').on("click", function(){
        event.preventDefault();
        var jobBody= document.getElementById('jobBody')
        addJob(jobBody.value); 
        $('<img src="logo.png">').appendTo('#addJobb')
       

    })

})










function createJob(jobBody){
    return {
        jobBody: jobBody,
        jobTime: new Date,
    }
}

function addJob(jobBody){
    jobs.push(createJob(jobBody));
}


function showjobs(){
    $('jobs').append("hi")
    console.log("Hi")
}


