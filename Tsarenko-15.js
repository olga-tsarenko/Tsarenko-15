//first-step//
function first_level() {
    var step = '';
    while (step != 'next') {
        step = north();
        console.log(step);
    }

}

first_level()


//second-step//
function second_level() {
    var step = '';
    while (step != 'next') {
        step = east();
        console.log(step);
    }
}
second_level()

//third(fourth)-step//

function third_level() {
    var step = '';
    while (step != 'next') {
        if (isFree('south')) {
            step = south();
        }
        else {
            step = east();
            console.log(step);

        }
        if (!step) {

            break;
        }

    }

}

third_level()

//4-step//

function third_level() {
    var step = '';
    while (step != 'next') {
        if (isFree('south')) {
            step = south();
        }
        else {
            step = east();
            console.log(step);

        }
        if (!step) {
            break;
        }

    }

}

third_level()

//fifth-step//
function fifth_level() {
    for (var step = ''; step !='next'; ) {
        if (isFree('east') && isFree('north') == false && isFree('south') == false) {
            step=east();
        }
        else {
            step=south();
        }
        if (!isFree('east') && !isFree('south')) {
            break;
        }

    }

    for (; step !='next'; ) {
        if (isFree('west')) {
            step=west();
        }
        else if (isFree('west') == false) {
            step=south();
        }
        else  {
            step=west();
        }
        if (!isFree('west') && !isFree('south')) {
            break;
        }

    }

    for (; step !='next'; ) {
        if (isFree('north')) {
            step=north();
        }
        else  {
            step=east();
        }
        if (!isFree('north') && !isFree('east')) {
            break;
        }
    }

    for (; step !='next'; ){
        if (isFree('west')){
            step=west();
        }
        else{
            step=south();
        }
        if (!isFree('west') && isFree('south')) {
            break;
        }
    }

    for (; step!='next'; ) {

        if (isFree('south')) {
            step=south();
        }
        else if (isFree('east')) {
            step= east();
            console.log(step);
        }
        if (!step) {

            break;
        }
    }

}

fifth_level()

