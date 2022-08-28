 function insert(num){
    let nmr = document.getElementById('res').innerHTML; 
    document.getElementById('res').innerHTML = nmr + num;
    if(nmr ==='Error...'){
        document.getElementById('res').innerHTML = '';
    }
}

function clean(){
    document.getElementById('res').innerHTML = '';
}

function back(){
    let resultado = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resultado.substring(0, resultado.length -1);
}

function calc(){
    let res = document.getElementById('res').innerHTML;
    if(res){
        document.getElementById('res').innerHTML= eval(res);
    }else{
        document.getElementById('res').innerHTML =  'Error...';
    }
}