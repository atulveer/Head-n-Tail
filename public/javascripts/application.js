function loadSnake(difficulty_level) {
  if(difficulty_level == 'easy'){
      no_of_rows_n_cols = 3;
      document.getElementById('show_status').innerHTML='Playing Easy Head n Tail Game!'
      document.getElementById('show_status').style.display=''
      document.getElementById('difficulty_level').style.display='none'
      snake_grid = generate_snake(no_of_rows_n_cols);
      generateGrid(no_of_rows_n_cols,snake_grid);
      document.getElementById('grid').style.display=''
      document.getElementById('snake_grid').value=snake_grid
   }  
  else{
   alert('d');
  }
     
//alert('Loading snake');

}

function generate_snake(no_of_rows_n_cols){
	no_of_cells = no_of_rows_n_cols * no_of_rows_n_cols;
	document.getElementById('no_of_cells').value = no_of_cells;
	document.getElementById('snake_body').value = "HXXT";
	document.getElementById('user_snake_body').value = "";
	snake_grid = new Array();
    snake_grid[0] = 'H';
    snake_grid[1] = '0';
    snake_grid[2] = '0';
    snake_grid[3] = 'X';
    snake_grid[4] = '0';
    snake_grid[5] = '0';
    snake_grid[6] = 'X';
    snake_grid[7] = 'T';
    snake_grid[8] = '0';
    return snake_grid

/*rand_index = Math.ceil(10*Math.random())
	snake_length = (no_of_cells - 1) / 2;
    while(snake_grid.lenght <= no_of_cells){
	 snake_grid[rand_index] = 2
    }*/
   
}



function generateGrid(no_of_rows_n_cols,snake_grid) {
	divs = ""
	for(i=0; i<no_of_rows_n_cols;i++ ) {
	   divs = divs + "<div id='row_" + i + "' style='clear:left;border-top: 1px solid #BBBBBB; width: 95px;'"	
	
		for(j=0; j<no_of_rows_n_cols;j++ ) {	
			divs = divs + "<div id ='" + i + j +"'"
			divs = divs +  "  style='float:left; width:30px; border-left: 1px solid #BBBBBB;"	
			if(i == 2){
		      divs = divs +  " border-bottom: 1px solid #BBBBBB;"
			}
			if(j == 2){
		      divs = divs +  " border-right: 1px solid #BBBBBB;"
			}
			divs = divs +  "'"
			snake_id = "snake_" + i + j
			divs = divs + " onclick= check_for_snake(document.getElementById('"+  snake_id + "'))"
			divs = divs + ">"
			divs = hide_snake_in_grid(divs,snake_grid)
		
			divs = divs +"</div>"
		}
			divs = divs +"</div>"
	}
	document.getElementById('grid').innerHTML=divs
}

function hide_snake_in_grid(divs,snake_grid){
	divs = divs + "&nbsp;<div id='snake_" + i+ j + "'" + "name = "+ i+j + " style='display:none;'>"
	
	divs = divs + get_snake_body(i,j,snake_grid);
	divs = divs + "</div>"
	return divs;
}

function get_snake_body(i,j,snake_grid) {
	

		      if(i== 0 && j==0)
		      {
				return snake_grid[0];
		      }
		
		      if(i==  0  &&  j== 1)
		    {
				return snake_grid[1];
		      }  
			 if(i==  0  &&  j== 2)
			  {
				return snake_grid[2];
		      }
		     if(i==  1  &&  j== 0){
				return snake_grid[3];
		      }
		 
		     if(i==  1  &&  j== 1){
				return snake_grid[4];
		      }
			if(i== 1  &&  j== 2){
				return snake_grid[5];
		      }
    
				if(i==  2  &&  j== 0){
					return snake_grid[6];
			      }
		    	if(i==  2  &&  j== 1){
				return snake_grid[7];
		      }
		
				if(i==  2  &&  j== 2){
					return snake_grid[8];
			      }
	
}


function check_for_snake(div_id) {
	snake_body = div_id.innerHTML.strip
    no_of_attempts = 	document.getElementById('no_of_attempts').value 
    no_of_cells = parseInt(document.getElementById('no_of_cells').value); 
    allowded_no_of_attempts = ( no_of_cells - 1) / 2;

    if(no_of_attempts <= allowded_no_of_attempts  ) {
   	 div_id.style.display = ''
     document.getElementById('no_of_attempts').value  = parseInt(no_of_attempts) + 1; 
     document.getElementById('user_snake_body').value = document.getElementById('user_snake_body').value + snake_body;
    
      if(snake_body == 'H' || snake_body == 'X' || snake_body == 'T') {
	    alert(document.getElementById('user_snake_body').value == document.getElementById('snake_body').value);
	     if(document.getElementById('user_snake_body').value == document.getElementById('snake_body').value) {
		    document.getElementById('snake_found').value;
	     }
	   
      }
    }
	else {
	      
		
		   if(document.getElementById('snake_found').value == 'found') {
		    alert("Great! You have found a snake.")	
		}else {
			alert("You dont have any more attempts!.")
		}
	      document.getElementById('no_of_attempts').value  = 0;
	      document.getElementById('user_snake_body').value = '';
	      document.getElementById('no_of_cells').value = 0;
	}

}

