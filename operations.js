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


// This part belongs to year section calculation
// input 1990 and 1980
// output 45
const diffYear = (y1,y2) => {
    
    return Math.abs(y2 -y1);
}

// TODO
const leapYear =(y) =>
{
  return ((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0);        // those years which are directly divisible by 4
}

const diffMonth = (m1,m2) => {
    if (m1<=12 && m2<=12)
    return Math.abs(m1-m2);             // what if..!! when someone enter one month value more than 12 
}

const diffDay = (dy1,dy2) => {
    if(dy1<=31 && dy2<=31)
    return Math.abs(dy1-dy2);
}

// Difference Computation
const diffComputer = (c1,c2) => {

    diff_year = diffYear(c1.date.y, c2.date.y)
    diff_month = diffMonth (c1.date.m, c2.date.m)
    diff_day = diffDay(c1.date.d, c2.date.d)

    diff_hour = diffHour(c1.time.h, c2.time.h)
    diff_mint = diffMint(c1.time.m, c2.time.m)
    diff_sec  = diffSec(c1.time.s, c2.time.s)

    return diff_year + " Years, " + diff_month + " Months & "  + diff_day + " Days " + " Hours," + " Minutes &" + " Seconds ";

}


// This part belongs to time section calculation
const diffHour = (h1,h2) => {
    
    return Math.abs(h1-h2);
}

const diffMint = (Mi1,Mi2) => {
    
    return Math.abs(Mi1-Mi2);
}

const diffSec = (s1,s2) => {
    
    return Math.abs(s1-s2);
}

// Main Funtion to call
// here two dates are passed i.e. start_date and end_date
const diffDate = (dt1, dt2) => { // 2019/28/26 22:34:15
    // start date
    s_dt = dateTimeParser(dt1); // {date: { y: 2019.... }, time: {...}}
    // end date
    e_dt = dateTimeParser(dt2);

    return diffComputer(s_dt, e_dt);
}

module.exports = {
    diffSec,
    diffMint,
    diffHour,
    leapYear,
    diffComputer,
    diffDay,
    diffMonth,
    diffYear,
    diffDate,
    dateTimeParser,
    parseTime,
    parseDate
};