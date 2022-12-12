//Variables for start date and end rate of education section
const startDateEducation = document.getElementById("date-start-education");
const endDateEducation = document.getElementById("date-end-education");

//Variables for start date and end rate of job section
const startDateJob = document.getElementById("date-start-job");
const endDateJob = document.getElementById("date-end-job");

//(For Job Dates) Event listener on change to activate function to set end date to be minimum of start date
startDateJob.addEventListener('change', function() {
    if (startDateJob.value){
        endDateJob.min = startDateJob.value};
}, false);
//(For Job Dates) Event listener on change to activate function to set start date to be maximum of end date in case someone puts in end date first
endDateJob.addEventListener('change', function() {
    if (endDateJob.value)
        startDateJob.max = endDateJob.value;
}, false);

//(For Education Dates) Event listener on change to activate function to set end date to be minimum of start date
startDateEducation.addEventListener('change', function() {
    if (startDateEducation.value){
        endDateEducation.min = startDateEducation.value};
}, false);
//(For Education Dates) Event listener on change to activate function to set start date to be maximum of end date in case someone puts in end date first
endDateEducation.addEventListener('change', function() {
    if (endDateEducation.value)
        startDateEducation.max = endDateEducation.value;
}, false);

