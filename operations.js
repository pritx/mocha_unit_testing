// Create Opertaions for the Date Time Calculator
/**
 * @author Pritesh Kumar [pritesh@edtyro.com]
 * @version 0.0.1
 */


 // here only date comes as 2019/12/12
 // This function will split and return {y: 2019, m: 12, d: 12}
const parseDate = (date) => {

    // Initialization
    var parsedDate = {
        y : '',
        m : '',
        d : '',
    }

    var arr = date.split("/");

    parsedDate.y = arr[0];
    parsedDate.m = arr[1];
    parsedDate.d = arr[2];

    return(parsedDate);

}

 // here only date comes as 12:25:23
 // This function will split and return {12, 25, 23}
const parseTime = (time) => {

    // Initialization
    var parsedTime = {
        h:'',
        m:'',
        s:''
    }

    var arr= time.split(":");
   

        parsedTime.h = arr[0];
        parsedTime.m = arr[1];
        parsedTime.s = arr[2];

    return(parsedTime);
}

// Here full date time comes and splits into date and time as {date, time}
const dateTimeParser = (date) => {

    // initialization
    var datetime = {
        date: '',
        time: ''
    }

    var arr = date.split(" ");

    datetime.date = parseDate(arr[0]);
    datetime.time = parseTime(arr[1]);
    
    return(datetime);
};


// This part belongs to calculation of Date
const mnthDays = (mnth, eYear) => {                     // eYear is for End Year and eMonth is for End month
    eMonth=mnth-1
if ((eMonth == 0)||(eMonth == 2)||(eMonth == 4)|| (eMonth == 6) || (eMonth == 7) ||(eMonth == 9)||(eMonth == 11))   // For 31Days Months

{
var eDays =  31;
}

if ((eMonth == 3)||(eMonth == 5)||(eMonth == 8)|| (eMonth == 10))           // For 30 Days Months

{
var eDays = 30;
}

if (eMonth == 1&&((eYear % 4 == 0) && (eYear % 100 != 0)) || (eYear % 400 == 0))    // Leap Year Feb
{
var eDays = 29;
}

if (eMonth == 1&&((eYear % 4 != 0) || (eYear % 100 == 0)))                  // Non-Leap Year Feb
{
var eDays = 28;
}
    return eDays
}

// This part belongs to time section calculation // TODO
const diffHour = (h1,h2) => {
    
    return Math.abs(h1-h2);
}

const diffMint = (Mi1,Mi2) => {
    
    return Math.abs(Mi1-Mi2);
}

const diffSec = (s1,s2) => {
    
    return Math.abs(s1-s2);
}

const diff_Date2 =  (y1, y2, m1, m2, d1, d2) => {           // Here we pass the whole date 
    if (d1<=d2){
        day_diff= d2-d1;
    }
    else{
        m2=m2-1                                            // For calculation of day difference b/w months
        temp= mnthDays(m2,y2)
        day_diff= d2 -d1 + temp
    }
    if (m1<=m2){                                           // Comparing months difference               
        mnth_diff= m2-m1;
    }
    else{
        temp=m2-m1                                         // store the month difference in temp and add it with 12 months(as Carry)
        y2=y2-1
        mnth_diff= 12 + temp                                    
    }
    year_diff= y2-y1

        return year_diff + " Years, " + mnth_diff + " Months & "  + day_diff + " Days ";
}

// Difference Computation
const diffComputer = (c1,c2) => {
    diff_date = diff_Date2(c1.date.y, c2.date.y, c1.date.m, c2.date.m, c1.date.d, c2.date.d)

    diff_hour = diffHour(c1.time.h, c2.time.h)
    diff_mint = diffMint(c1.time.m, c2.time.m)
    diff_sec  = diffSec(c1.time.s, c2.time.s)

    return diff_date + diff_hour + " Hours," +diff_mint+ " Minutes &" + diff_sec + " Seconds ";

}

// Main Funtion to call
// Here two dates are passed i.e. start_date and end_date
const diffDate = (dt1, dt2) => { // 2019/28/26 22:34:15
    // start date
    s_dt = dateTimeParser(dt1); // {date: { y: 2019 m: 28 d:26 }, time: {h:22 m:34 s:15}}
    // end date
    e_dt = dateTimeParser(dt2);

    return diffComputer(s_dt, e_dt);
}

module.exports = {
    diffSec,
    diffMint,
    diffHour,
    diffComputer,
    diffDate,
    dateTimeParser,
    parseTime,
    parseDate,
    mnthDays,
    diff_Date2
};