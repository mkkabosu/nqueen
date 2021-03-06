var target = [];

function main(){
    var ans = [];
    target = init(4);
    console.log("start");
    while(nextBoard(target,0)){
	if(check(target))
	    ans.push(clone(target));
    }
    for(var i = 0;i<ans.length;i++){
	show(ans[i]);
    }
    console.log(ans.length);
}
function clone(board){
    var res = [];
    for(var y = 0;y<board.length;y++){
	res.push(cloneY(board,y));
    }
    return res;
}
function cloneY(board,y){
    var a = [];
    for(var x = 0;x<board[y].length;x++){
	a.push(board[y][x]);
    }
    return a;
}
function init(n){
    var res = [];
    for(var i = 0;i<n;i++){
	var a = [1];
	for(var j= 0;j<n-1;j++){
	    a.push(0);
	}
	res.push(a);
    }
    return res;
}
function show(board){
    for(var y =0;y<board.length;y++){
	var str = "";
	for(var x=0;x<board[y].length;x++){
	    str += board[y][x] + " ";
	}
	for(var i=0;i<y;i++)str+=" ";
	console.log(str);
    }
    console.log("--------");
}

function nextBoard(board){
    return replaceQueen(board,0);
}

function replaceQueen(board,y){
    for(var x=0;x<board[y].length;x++){
	if(board[y][x] == 1){
	    board[y][x] = 0;
	    if(x == board[y].length-1){
		if(y == board.length -1) return false;
		board[y][0] = 1;
		return replaceQueen(board,y+1);
	    }
	    else{
		board[y][x+1] = 1;
	    }
	    return true;
	}
    }
    return false;
}
/*
  function genNextBoard(board,y){
  show(board);
  for(var x =0;x<board.length;x++){
  if(board[y][x] == 1){
  board[y][x] = 0;
  if(x == board[y].length-1){
  board[y][0] = 1;
  if(y == board.length-1){
  return false;
  }else{
  return genNextBoard(board,y+1);
  }
  }else {
  board[y][x+1] = 1;
  return true;
  }
  return true;
  }	
  }

  }
*/
function check(board){
    for(var y =0;y<board.length;y++){
	if(sumX(board,y) >1){
	    return false;
	}
    }
    for(var x =0;x<board.length;x++){
	if(sumY(board,x) >1){
	    return false;
	}
    }
    for(var y =0;y<board.length;y++){
	if(getDR(board,y,0) >1){
	    return false;
	}
    }
    for(var x =1;x<board.length;x++){
	if(getDR(board,0,x) >1){
	    return false;
	}
    }
    for(var y =0;y<board.length;y++){
	if(getDL(board,y,board.length-1) >1){
	    return false;
	}
    }
    for(var x =0;x<board.length;x++){
	if(getDL(board,0,x) >1){
	    return false;
	}
    }
    return true;
}

function sumX(board,y){
    var sum =0;
    for(var x=0;x<board.length;x++){
	sum += board[y][x];
    }
    return sum;
}
function sumY(board,x){
    var sum =0;
    for(var y =0;y<board.length;y++){
	sum += board[y][x];
    }
    return sum;
}
function getDL(board,y,x){
    if(y == board.length || x == -1 || x == board.length){
	return 0;
    }else if(board[x][y] == 1){
	return 1 + getDL(board,y+1,x-1);
    }else{
	return getDL(board,y+1,x-1);
    }
}
function getDR(board,y,x){
    if (y == board.length || x == -1 || x == board.length){
	return 0;
    }else if(board[y][x] == 1){
	return 1 + getDR(board,y+1,x+1);
    }else{
	return getDR(board,y+1,x+1);
    }
}
window.onload = main;
