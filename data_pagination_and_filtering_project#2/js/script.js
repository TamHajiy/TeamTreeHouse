
//Function ShowPage will show list of students.
//pass 2 params - list - reps students data and page - reps page
function showPage (list, page) {
   // set start index of the list
   const startIndex = (page * 9) - 9;
   // set end index of the list 
   const endIndex = page * 9
   const ul = document.querySelector('.student-list');
   //remove any previous data that was displayed
   ul.innerHTML = '';
   for(let i = 0; i < list.length; i++){
      if(i >= startIndex && i < endIndex ){
         const li = document.createElement('li');
         li.className = 'student-item cf';

         const firstDiv = document.createElement('div');
         firstDiv.className = 'student-details'
         
         const img = document.createElement('img');
         img.className = 'avatar';
         img.setAttribute('src', list[i].picture.large);
         img.setAttribute('alt', 'Profile Picture')
         firstDiv.appendChild(img);
         
         
         const h3 = document.createElement('h3');
         h3.innerHTML = `${list[i].name.first} ${list[i].name.last}`;
         firstDiv.appendChild(h3);

         const firstSpan = document.createElement('span');
         firstSpan.className = 'email'
         firstSpan.innerHTML = list[i].email
         firstDiv.appendChild(firstSpan);

         const secondDiv = document.createElement('div')
         secondDiv.className = 'joined-details'

         const secondSpan = document.createElement('span');
         secondSpan.className = 'date'
         secondSpan.innerHTML = `Joined ${list[i].registered.date}`
         secondDiv.appendChild(secondSpan);

         li.appendChild(firstDiv);
         li.appendChild(secondDiv)
         ul.insertAdjacentElement('beforeend', li);

      //endIF   
      }
   //endLoop
   }
//endFunction
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination (list) {

   let numOfPages = list.length/ 9; 
   const ulLinkList = document.querySelector('.link-list');
  
   
   ulLinkList.innerHTML = '';

   for(let i = 0; i < numOfPages; i++){
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.innerHTML = i+1;
      
      if(i === 1){
         button.className = 'active'
         //endIf   
         }

      li.appendChild(button);
      ulLinkList.insertAdjacentElement('beforeend', li);
   //endLoop   
      }

   ulLinkList.addEventListener('click', (e) => {
      if(e.target.tagName === 'BUTTON'){
         // remove active button
         let activeButton = document.querySelector('.active');
         activeButton.removeAttribute('class');

         //add active to the clicked button (e.target)
         e.target.setAttribute('class', 'active');

         // call showpage to display the respective button-page;
         showPage(list, e.target.innerHTML);
         //endIF
          }
      //endEvent
      })
//endFunction   
}



// Call functions
showPage(data, 1);
addPagination(data);
