const submitButton = document.getElementById("submit");
const inputField = document.getElementById("input");
const clearListButton = document.getElementById("clear")
const cancelButton = document.querySelector("#cancel")
const applist = document.getElementById("list")


cancelButton.addEventListener('click',()=>
{
  inputField.value= " "
})
let listOfItems =[]
submitButton.addEventListener("click", addTask);
 


   

        // deleteButton.addEventListener('click', )
   


      
        const items = [];
        let textNode;
function addTask()
{
    
   let unOrderedList =  document.createElement('ul')
   let listElement =  document.createElement('li');
   
   let textNode = document.createTextNode(inputField.value)

   listElement.append(textNode)
let deleteButton = document.createElement('button');
deleteButton.innerHTML ='x';




listElement.append(deleteButton)

   unOrderedList.append(listElement)
    applist.append(unOrderedList)


    deleteButton.addEventListener('click',()=>
      {
    unOrderedList.remove(listElement)
      })
      


   clearListButton.addEventListener('click', ()=>
  {
    unOrderedList.remove(unOrderedList)
  })
    }


// deleteButton.addEventListener('click', deleteTask)