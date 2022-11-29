const startDateEducation = document.getAnimations("");
//Variables for start date and end rate of job section
const startDateJob = document.getElementById("date-start-job");
const endDateJob = document.getElementById("date-end-job");
//Event listener on change to activate function to set end date to be minimum of start date
startDateJob.addEventListener('change', function() {
    if (startDateJob.value){
        endDateJob.min = startDateJob.value};
}, false);
//Event listener on change to activate function to set start date to be maximum of end date in case someone puts in end date first
endDateJob.addEventListener('change', function() {
    if (endDateJob.value)
        startDateJob.max = endDateJob.value;
}, false);

