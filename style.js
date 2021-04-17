'use strict';

function back(){

    const value = calc.display.value;
    calc.display.value= value.substr(0, value.length -1);
}