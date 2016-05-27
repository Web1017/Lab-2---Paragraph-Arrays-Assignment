
//IIFE - Immediately invoked Expression 

(function(){
    "use strict";  //doesnt allow variables to be redeclared
    // Define Array of HTML elements
    var paragraphElements = [];
    
        paragraphElements[0] = document.getElementById("ParagraphOne");	
        paragraphElements[1] = document.getElementById("ParagraphTwo");	
        paragraphElements[2] = document.getElementById("ParagraphThree");	   
    
    var paragraphs = [];
    
    //Page Data
    paragraphs[0] = "First step of the sentence. You can view what will be added to this page, and see the new features";
    paragraphs[1] = "Second step of the sentence. You can view what will be added to this page, and see the new features";
    paragraphs[2] = "Third step of the sentence. You can view what will be added to this page, and see the new features";
       
   //check if paragraph exists    
    for (var index = 0; index < paragraphElements.length; index++) {      
        if (paragraphElements[index]) {
            paragraphElements[index].textContent = paragraphs[index];
        }
    }    
        
        
        
})();