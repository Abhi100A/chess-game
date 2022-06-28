/*------ cached element references ------ */
const modelView = document.getElementById('pawn-promote-mod');
const bModelView = document.getElementById('b-pawn-promote-mod');
const selectQueen = document.getElementById('white-queen-btn');
const selectRook = document.getElementById('white-rook-btn');
const selectBishop = document.getElementById('white-bishop-btn');
const selectKnight = document.getElementById('white-knight-btn');
const selectBlackQueen = document.getElementById('black-queen-btn');
const selectBlackRook = document.getElementById('black-rook-btn');
const selectBlackBishop = document.getElementById('black-bishop-btn');
const selectBlackKnight = document.getElementById('black-knight-btn');

//-------event-listeners

selectQueen.onclick = function(){
    let promoted = new WhiteQueen(parseInt(promoteNum));
    promoted.row = 'r8';
    promoted.sqColor = promoteTileColor;
    BOARD_OBJ.pieces.push(promoted);
    modelView.style.display = "none";
    placePieces();
}

selectRook.onclick = function(){
    let promoted = new WhiteRook(parseInt(promoteNum));
    promoted.row = 'r8';
    BOARD_OBJ.pieces.push(promoted);
    modelView.style.display = "none";
    placePieces();
}

selectBishop.onclick = function (){
    let promoted = new WhiteBishop(parseInt(promoteNume));
    promoted.sqColor = promoteTileColor;
    BOARD_OBJ.pieces.push(promoted);
    modelView.style.display = "none";
    placePieces();
}

selectKnight.onclick = function(){
    BOARD_OBJ.pieces.push(new WhiteKnight(parseInt(promoteNum)));
    modelView.style.display = "none";
    placePieces();
}
selectBlackQueen.onclick = function(){
    let promoted = new BlackQueen(parseInt(promoteNum));
    promoted.row = 'r1';
    promoted.sqColor = promoteTileColor;
    BOARD_OBJ.pieces.push(promoted);
    bModelView.style.display = "none";
    placePieces();
}

selectBlackRook.onclick = function(){
    let promoted = new BlackRook(parseInt(promoteNum));
    promoted.row = 'r1';
    BOARD_OBJ.pieces.push(promoted);
    bModelView.style.display = "none";
    placePieces();
}

selectBlackBishop.onclick = function (){
    let promoted = new BlackBishop(parseInt(promoteNume));
    promoted.sqColor = promoteTileColor;
    BOARD_OBJ.pieces.push(promoted);
    bModelView.style.display = "none";
    placePieces();
}

selectBlackKnight.onclick = function(){
    BOARD_OBJ.pieces.push(new BlackKnight(parseInt(promoteNum)));
    bModelView.style.display = "none";
    placePieces();
}

 //---------functionality     
 
 function checkPromotion(num, tileColor){
     if (selectedPiece.row === 'r8' && selectedPiece.constructor.name === 'WhitePawn'){
         let  index = BOARD_OBJ.pieces.indexOf(selectedPiece);
         BOARD_OBJ.pieces.splice(index, 1);
         promoteNum = num;
         promoteTileColor = tileColor;
         modelView.style.display = "block";
     }
     if (selectedPiece.row === 'r1' && selectedPiece.constructor.name === 'BlackPawn'){
         let  index = BOARD_OBJ.pieces.indexOf(selectedPiece);
         BOARD_OBJ.pieces.splice(index, 1);
         promoteNum = num;
         bModelView.style.display = "block";
     }
     
    
 }


