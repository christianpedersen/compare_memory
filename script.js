// Get references to the HTML elements
let custom_speed_1 = document.getElementById('custom_speed_1');
let custom_cl_1 = document.getElementById('custom_cl_1');
let custom_speed_2 = document.getElementById('custom_speed_2');
let custom_cl_2 = document.getElementById('custom_cl_2');


let memory_type_1 = document.getElementById('memory_type_1');
let memory_type_2 = document.getElementById('memory_type_2');

let compare_button = document.getElementById('compare_button');

let result_1 = document.getElementById('result_1');
let result_2 = document.getElementById('result_2');
let equal_result = document.getElementById('equal_result');



let ddr4_array = ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
let ddr4_speed_array = ['2133', '2400', '2666', '2933', '3000', '3200', '3333', '3466', '3600', '3733', '4000', '4266', '4400', '4600', '4800', '5133']

let ddr5_array = ['30', '32', '34', '36', '38', '40']
let ddr5_speed_array = ['4800', '5200', '5600', '6000', '6200', '6400', '6600', '6800', '7000', '7200', '7600', '7800', '8000']

$('#memory_type_1').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
    custom_cl_1.innerHTML = '';
    custom_speed_1.innerHTML = '';

  if (this.value == 'DDR4') {
    $('#custom_cl_1').selectpicker('destroy');
    ddr4_array.forEach(element => {
        let option = `<option value='${element}'>${element}</option>`
        custom_cl_1.insertAdjacentHTML('afterbegin', option);
    });
    $('#custom_cl_1').selectpicker('render');

    $('#custom_speed_1').selectpicker('destroy');
    ddr4_speed_array.forEach(element => {
        let option = `<option value='${element}'>${element} MHz</option>`
        custom_speed_1.insertAdjacentHTML('afterbegin', option);
    });
    $('#custom_speed_1').selectpicker('render');

  }
  if (this.value == 'DDR5') {
    $('#custom_cl_1').selectpicker('destroy');
    ddr5_array.forEach(element => {
        let html = `<option value='${element}'>${element}</option>`
        custom_cl_1.insertAdjacentHTML('afterbegin', html);;
    })
    $('#custom_cl_1').selectpicker('render');

    $('#custom_speed_1').selectpicker('destroy');
    ddr5_speed_array.forEach(element => {
        let option = `<option value='${element}'>${element} MHz</option>`
        custom_speed_1.insertAdjacentHTML('afterbegin', option);
    });
    $('#custom_speed_1').selectpicker('render');    
  }  
});

$('#memory_type_2').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
    custom_cl_2.innerHTML = '';
    custom_speed_2.innerHTML = '';

  if (this.value == 'DDR4') {
    $('#custom_cl_2').selectpicker('destroy');
    ddr4_array.forEach(element => {
        let option = `<option value='${element}'>${element}</option>`
        custom_cl_2.insertAdjacentHTML('afterbegin', option);
    });
    $('#custom_cl_2').selectpicker('render');

    $('#custom_speed_2').selectpicker('destroy');
    ddr4_speed_array.forEach(element => {
        let option = `<option value='${element}'>${element} MHz</option>`
        custom_speed_2.insertAdjacentHTML('afterbegin', option);
    });
    $('#custom_speed_2').selectpicker('render');

  }
  if (this.value == 'DDR5') {
    $('#custom_cl_2').selectpicker('destroy');
    ddr5_array.forEach(element => {
        let html = `<option value='${element}'>${element}</option>`
        custom_cl_2.insertAdjacentHTML('afterbegin', html);;
    })
    $('#custom_cl_2').selectpicker('render');

    $('#custom_speed_2').selectpicker('destroy');
    ddr5_speed_array.forEach(element => {
        let option = `<option value='${element}'>${element} MHz</option>`
        custom_speed_2.insertAdjacentHTML('afterbegin', option);
    });
    $('#custom_speed_2').selectpicker('render');    
  }  
});
function generateResult() {
    let custom_speed_value_1 = custom_speed_1.value;
    let custom_cl_value_1 = custom_cl_1.value;
    let custom_speed_value_2 = custom_speed_2.value;
    let custom_cl_value_2 = custom_cl_2.value;

    let result = custom_cl_value_1 * 2000 / custom_speed_value_1
    let result2 = custom_cl_value_2 * 2000 / custom_speed_value_2

    return {1: result, 2: result2}
}


function formatNumber(num) {
    if (num % 1 === 0) {
        return num.toFixed(0);
    } else {
        return num.toFixed(2);
    }
}

compare_button.addEventListener('click', function() { 
    let results = generateResult();

    result_1.innerHTML = '';
    result_2.innerHTML = '';
    equal_result.innerHTML = '';

    console.log(results[1]);
    console.log(results[2]);

    if (!isNaN(results[1]) && !isNaN(results[2])) {
        if (results[1] < results[2]) {
            result_1.innerHTML = `<div class="alert alert-success" role="alert">Result: <b>${formatNumber(results[1])} nanoseconds.</b><br>This option is better than the other.</div>`;
            result_2.innerHTML = `<div class="alert alert-warning" role="alert">Result: <b>${formatNumber(results[2])} nanoseconds.</b><br>This option is worse than the other.</div>`;
        } else if (results[1] > results[2]) {
            result_1.innerHTML = `<div class="alert alert-warning" role="alert">Result: <b>${formatNumber(results[1])} nanoseconds.</b><br>This option is worse than the other.</div>`;
            result_2.innerHTML = `<div class="alert alert-success" role="alert">Result: <b>${formatNumber(results[2])} nanoseconds.</b><br>This option is better than the other.</div>`;
        } else {
            equal_result.innerHTML = `<div class="alert alert-primary" role="alert">Both options are equal.<br>Result 1: <b>${formatNumber(results[1])} nanoseconds.</b><br>Result 2: <b>${formatNumber(results[2])} nanoseconds.</b></div>`;
        }
    }
});
