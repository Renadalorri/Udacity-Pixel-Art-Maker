// Select color input
// Select size input


// When size is submitted by the user, call makeGrid()


//intialize each ID to it's event
    document.getElementById('sizePicker').addEventListener('submit',function(e){
    let height=document.getElementById('inputHeight').value;
    let width=document.getElementById('inputWidth').value;
//chick the console is going good
    console.log(`height = ${height} , width = ${width}`);
    //call the make grid function with its parameters
     makeGrid(height,width);


    e.preventDefault();

});

function makeGrid(height,width) {
  const table= document.getElementById('pixelCanvas');
  table.innerHTML=' ';
  let row ,cell;
  //for loop and nested loop for printing the table
  for(let i =0;i<height;i++){
    row=document.createElement('tr');
    for (let j=0;j<width;j++){
        cell =document.createElement('td');
        row.appendChild(cell);
        cell.addEventListener('click',function(e){
          //coloring each cell using the css
            let color = document.getElementById('colorPicker').value;
            e.target.style.backgroundColor = color ;
        });

    }
    table.appendChild(row);

  }


  

  
  


}
