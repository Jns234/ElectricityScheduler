var monday = {
    start: 'time',
    end: 'time',
    lowmode: 1
}
var tuesday = {
    start: 'time',
    end: 'time',
    lowmode: 1}
var wednesday = {
        start: 'time',
        end: 'time',
        lowmode: 1
    }
var thursday = {
        start: 'time',
        end: 'time',
        lowmode: 1
    }
var friday = {
        start: 'time',
        end: 'time',
        lowmode: 1
    }
var saturday = {
        start: 'time',
        end: 'time',
        lowmode: 1
    }
var sunday = {
        start: 'time',
        end: 'time',
        lowmode: 1
    }

var lowmodesetting = {
        setpointlow: 50,
        setpointhigh: 100
    }



function setday(weekday, startval, endval, lowmodeval){
        weekday.start = startval
    weekday.end = endval
    if (!lowmodeval)
return monday

}
setday(monday, '18:00', '04:00', false)
console.log(monday)