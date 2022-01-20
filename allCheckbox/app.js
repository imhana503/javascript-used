const checkInput = document.querySelectorAll('.check-item');
const allCheckInput = document.querySelector('.all-check');

checkInput.forEach(function(item){
    item.addEventListener('change', function(){
        let checked = document.querySelectorAll('.check-item:checked')
        
        if( checked.length == checkInput.length ){
            allCheckInput.checked = true;
        } else {
            allCheckInput.checked = false;
        }
    });    
});ss

allCheckInput.addEventListener('change', function(){
    console.log( this.checked )
    if( this.checked == true ){
        checkInput.forEach(function(item){
            item.checked = true;
        });
    } else {
        checkInput.forEach(function(item){
            item.checked = false;
        });
    }
});