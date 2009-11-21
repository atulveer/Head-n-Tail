function loadSnake(difficulty_level) {
	if(difficulty_level == 'easy'){
		no_of_rows_n_cols = 3;
		document.getElementById('show_status').innerHTML='You are Playing Head n Tail Game! <br /> You have ' + (no_of_rows_n_cols + 1) + ' attempts <br />'
		document.getElementById('show_status').style.display=''
		document.getElementById('difficulty_level').style.display='none'
		snake_grid = generate_snake(no_of_rows_n_cols);
		generateGrid(no_of_rows_n_cols,snake_grid);
		document.getElementById('grid').style.display=''
		document.getElementById('snake_grid').value=snake_grid
	}  
	else{
		alert("This level has not been implemented yet! Choose 'Easy'");
	}

}

function generate_snake(no_of_rows_n_cols){
	no_of_cells = no_of_rows_n_cols * no_of_rows_n_cols;
	document.getElementById('no_of_cells').value = no_of_cells;
	document.getElementById('snake_body').value = "HXXT";
	document.getElementById('user_snake_body').value = "";
	snake_body = generate_snake_body(no_of_rows_n_cols,no_of_cells);
	return snake_body;

}


function generate_snake_body(no_of_rows_n_cols,no_of_cells) {

	rand_index = Math.ceil(10*Math.random());
	possible_positions = possible_snake_positions();
	snake_grid = new Array();

	valid_position = possible_positions[rand_index];
	head = valid_position[0];
	first_x = valid_position[1];
	second_x = valid_position[2];
	tail = valid_position[3];
	for(i = 0; i< 9; i++) {

		switch(i) {
			case head:
			snake_grid[i] = 'H';
			break;
			case first_x: 
			snake_grid[i] = 'X';
			break;
			case second_x: 
			snake_grid[i] = 'X';	
			break;

			case tail: 
			snake_grid[i] = 'T';
			break;
			default:		
			snake_grid[i] = '0';
			break;

		}
	}

	return snake_grid;
}

function possible_snake_positions(){
	possible_positions = new Array();
	possible_positions[0] = new Array(0,1,2,5);
	possible_positions[1] =new Array(1,2,5,8);
	possible_positions[2] =new Array(5,8,7,6);
	possible_positions[3] = new Array(8,7,6,3);
	possible_positions[4] =new Array(0,3,6,7);
	possible_positions[5] =new Array(4,5,8,7);
	possible_positions[6] = new Array(1,2,5,4);
	possible_positions[7] = new Array(0,1,4,3);
	possible_positions[8] =  new Array(8,5,4,7);
	possible_positions[9] =  new Array(6,3,4,7);
	possible_positions[10] =  new Array(6,3,4,7);

	return possible_positions
}

function generateGrid(no_of_rows_n_cols,snake_grid) {
	divs = ""
	for(i=0; i<no_of_rows_n_cols;i++ ) {
		divs = divs + "<div id='row_" + i + "' style='clear:left;border-top: 1px solid #BBBBBB; width: 95px; '"	

		for(j=0; j<no_of_rows_n_cols;j++ ) {	
			divs = divs + "<div id ='" + i + j +"'"
			divs = divs +  "  style='float:left; width:30px; height:50px; border-left: 1px solid #BBBBBB;"	
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
	snake_body = div_id.innerHTML;
	no_of_attempts = 	document.getElementById('no_of_attempts').value;
	no_of_cells = parseInt(document.getElementById('no_of_cells').value); 
	allowded_no_of_attempts = ( no_of_cells - 1) / 2;

	if(no_of_attempts < allowded_no_of_attempts  ) {
		div_id.style.display = ''
		document.getElementById('no_of_attempts').value  = parseInt(no_of_attempts) + 1; 
		document.getElementById('user_snake_body').value = document.getElementById('user_snake_body').value + snake_body;

		if(snake_body == 'H' || snake_body == 'X' || snake_body == 'T') {

			user_snake = document.getElementById('user_snake_body').value;
			if(user_snake.search('0') == -1 && user_snake.length == 4) {
				document.getElementById('snake_found').value = 'found';
				alert("Great! You have found the snake. Restarting the Game!")	
				document.getElementById('no_of_attempts').value  = 0;
				document.getElementById('user_snake_body').value = '';
				document.getElementById('no_of_cells').value = 0;
				window.location = "/";
			}

		}
	}
	else {
		alert("You dont have any more attempts!. Restarting the Game!");
		document.getElementById('no_of_attempts').value  = 0;
		document.getElementById('user_snake_body').value = '';
		document.getElementById('no_of_cells').value = 0;
		window.location = "/";
	}

}

