
//BUDGET CONTROLLER
var budgetController = (function(){
    
    //SOME CODE
    
})();


//UI CONTROLLER
var UIController = (function(){
    
    //SOME CODE
    
})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl,UICtrl){
    // . is a class selector. This is how we select in css, and in query. Same syntax.
    
    var ctrlAddItem = function() {
        //1. Get the field input data
    
    //2. Add the item to the budget controller
        
    //3. Add the item to the UI
    
    //4. Calculate the budget
    
    //5. Display the budget on the UI
    console.log('it works');
    }
    
    
    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);
    
    document.addEventListener('keypress',function(event){
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });
    
    
})(budgetController,UIController);
























