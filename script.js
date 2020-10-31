/**
 * TODO: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
updateText=()=>{
      let text=document.getElementById("text-input").value;
      document.getElementById('text-output').innerText=text;
  }
  
  /**
   * Toggle the bold class for the output text
   * HINT: Use the onclick function insite HTML
   * HINT: Look into using this keyword
   * HINT: Use the classList property
   * HINT: Toggle .active class for the button
   */
  makeBold=(elem)=>{
    //CODE GOES HERE
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold')
  }
  
  /**
   * Toggle the italic class for the output text
   */
  makeItalic=(elem)=>{
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic')
  }
  
  /**
   * Toggle the underline class for the output text
   * HINT: Toggle the .active class for the button
   * HINT: Use the classList property
   * HINT: Use contains, remove, and add functions
   */
  makeUnderline=(elem)=>{
      
    elem.classList.toggle('active');
    let formatted=document.getElementById('text-output');
    if(formatted.classList.contains('underline'))
    {
      formatted.classList.remove('underline')
    }
    else
    {
      formatted.classList.add('underline')
    }
  }
  
  /**
   * Toggle the style textAlign attribute
   * Toggle the active state for the align butttons
   * HINT: Use the style property of the element
   * HINT: Make sure to untoggle the active state for all other align buttons
   */
  alignText=(elem, alignType)=>{
     document.getElementById('text-output').style.textAlign=alignType;
     let buttonslist=document.getElementsByClassName('align');
     for(let i of buttonslist)
     {
       buttonslist[i].classList.remove('active');

     }
     elem.classList.add('active');
    }


let promise=new Promise((responce,reject)=>{
      setTimeout(()=>{
              // responce({
              //   firstname:'Ganesh',
              //   lastname:'kollati'
              // });
              reject("hello im rejected")
              
      },5000)
})
promise.then((responce)=>{
  console.log("1 sec late here");
  console.log(responce)
}).catch((error)=>{
  console.log(error)
})
console.log('you are here 1st')




