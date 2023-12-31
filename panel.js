const thisPanelYear = new Date().getFullYear();
const panelCost = '$80';
const panelClassStartTime = 10;

const JAN=0;
const FEB=1;
const MAR=2;
const APR=3;
const MAY=4;
const JUN=5;
const JUL=6;
const AUG=7;
const SEP=8;
const OCT=9;
const NOV=10;
const DEC=11;

const allPanelDates=[
    new Date(2024, JAN, 13, panelClassStartTime),
    new Date(2024, JAN, 27, panelClassStartTime),
    new Date(2024, FEB, 10, panelClassStartTime),
    new Date(2024, FEB, 24, panelClassStartTime),
    new Date(2024, MAR, 9, panelClassStartTime),
    new Date(2024, MAR, 23, panelClassStartTime),
    new Date(2024, APR, 6, panelClassStartTime),
    new Date(2024, APR, 20, panelClassStartTime),
    new Date(2024, MAY, 4, panelClassStartTime),
    new Date(2024, MAY, 18, panelClassStartTime),
    new Date(2024, JUN, 1, panelClassStartTime),
    new Date(2024, JUN, 15, panelClassStartTime),
    new Date(2024, JUN, 29, panelClassStartTime),
    new Date(2024, JUL, 13, panelClassStartTime),
    new Date(2024, JUL, 27, panelClassStartTime),
    new Date(2024, AUG, 10, panelClassStartTime),
    new Date(2024, AUG, 24, panelClassStartTime),
    new Date(2024, SEP, 7, panelClassStartTime),
    new Date(2024, SEP, 21, panelClassStartTime),
    new Date(2024, OCT, 5, panelClassStartTime),
    new Date(2024, OCT, 19, panelClassStartTime),
    new Date(2024, NOV, 2, panelClassStartTime),
    new Date(2024, NOV, 16, panelClassStartTime),
    new Date(2024, NOV, 30, panelClassStartTime),
    new Date(2024, DEC, 14, panelClassStartTime),
    new Date(2024, DEC, 28, panelClassStartTime),
];

const asideText = `
    <h3>About The Victims Panel</h3>
    <p>
        The Seattle King County DUI Victims Panel helps you take responsibility for your actions in a
        non-judgmental forum. We give you the opportunity to hear the stories of real victims of drunk driving,
        giving you a new perspective on your DUI case that you may not get elsewhere in the legal system.
    </p>
    <p>
        Our program is non-judgmental and strictly confidential. We understand that everyone makes mistakes.
        Rest assured that we are not here to judge. We are here to help you understand the potential
        consequences of DUI before you are involved in a serious accident.
    <p>
        You may have thought that getting a DUI was the worst thing that could have happened,
        but when you hear the stories of real victims of drunk driving crashes, we hope that you will
        see your DUI as a life-changing experience that will inspire you to change your life for the better.
    </p>
    <p>
        It is our hope that listening to the stories of real DUI victims will change your life,
        and you will never again drink and drive. We are here to help you reconsider the
        direction that your life is headed, so that you never drink and drive again.
    </p>`;

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ['Jan','Feb', 'Mar', 'Apr', 'May', 'June','July','Aug','Sept','Oct', 'Nov', 'Dec'];

function nextPanelDates(numDates) {
    const today = new Date();
    // Subtract 1 from today's date so that the panel time will fall of the schedule
    // on the day following the class.
    today.setDate(today.getDate()-1);

    let result = [];
    for (let ii=0; ii < allPanelDates.length; ++ii) {
        if (today > allPanelDates[ii])
            continue; // skip over days gone by

        for (let dateIndex=0; dateIndex < numDates; ++dateIndex) {
            if (ii+dateIndex >= allPanelDates.length)
                break; // Don't index out of bounds

            const thisDate = allPanelDates[ii+dateIndex];
            const dateString = daysOfWeek[thisDate.getDay()] + ', ' + monthNames[thisDate.getMonth()] +
                ' ' + thisDate.getDate() + ', ' + thisDate.getFullYear() + ', ' + thisDate.getHours() +
                (thisDate.getHours() < 12 ? 'am' : 'pm');

            result.push(dateString);
        }
        break;
    }
    return result;
}

function fillClassNameWithValue(className, value) {
    const elements = document.getElementsByClassName(className);
    for (let ii=0; ii < elements.length; ++ii)
        elements[ii].innerHTML = value;
}

function initPage() {
    fillClassNameWithValue('panelYear', thisPanelYear.toString());
    fillClassNameWithValue('aside', asideText);
    fillClassNameWithValue('emailUs','<a href="mailto:mail@duivp.org">e-mail us</a>');
    fillClassNameWithValue('emailLink', '<a href="mailto:mail@duivp.org">mail@duivp.org</a>');
    fillClassNameWithValue('phoneLink', '<a href="tel:+12535208583">253.520.8583</a>');
    fillClassNameWithValue('callUs', '<a href="tel:+12535208583">call us</a>');
    fillClassNameWithValue('classCost', '<b>'+ panelCost + '</b>');
}

function onClickedHome() {
    initPage();
    const numDates = 6;
    const nextSixPanelDates = nextPanelDates(numDates);

    for (let ii=0; ii < numDates; ++ii)
        if (ii < nextSixPanelDates.length)
            document.getElementById('date'+ii).innerHTML = nextSixPanelDates[ii];
        else
            document.getElementById('date'+ii).innerHTML = '';
}

function onClickedTreatment() {
    initPage();
}
function onClickedFAQ() {
    initPage();
}
function onClickedContactUs() {
    initPage();
}