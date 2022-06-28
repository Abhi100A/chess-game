

class WhitePawn{
    constructor (position){
        this.position = position;
        this.image = "url('images/White-pawn.png')";
        this.alive = true;
        this.color = 'w'; 
        this.row = 'r2';
        this.moved = false;
        this.canPassant = false;
        
    }
    //methods display posible moves, make move, special moves 
    move(num, targetRow) {
       currentSpot = this.position; 
       if (whitePositions.includes(parseInt(num))){
        blocked = true; 
       } 
       if(parseInt(num)=== parseInt(currentSpot -7)){
           if (blackPositions.includes(parseInt(num))){
               this.position = parseInt(num);
               this.moved = true;
               this.row = targetRow;
               return true;
           }
       }
       if(parseInt(num)=== parseInt(currentSpot -9)){
            if (blackPositions.includes(parseInt(num))){
                this.position = parseInt(num);
                this.moved = true;
                this.row = targetRow;
                return true;
            }
       }

       //-----passant attack  
       if (parseInt(num)=== parseInt(currentSpot -9)){
        
            let target = passantArr.pop();
            if (target.position === parseInt(currentSpot-1)){
              //it works! but, make sure there is only one piece with.canPassant === true! or it won't work :D
              let  index = BOARD_OBJ.pieces.indexOf(target);
               BOARD_OBJ.pieces.splice(index, 1);
                this.position = parseInt(num);
                this.row = targetRow;
                return true;
            }
       }
       if (parseInt(num)=== parseInt(currentSpot -7)){
        
            let target = passantArr.pop();
            if (target.position === parseInt(currentSpot+1)){
              //it works! but, make sure there is only one piece with.canPassant === true! or it won't work :D
              let  index = BOARD_OBJ.pieces.indexOf(target);
               BOARD_OBJ.pieces.splice(index, 1);
                this.position = parseInt(num);
                this.row = targetRow;
                return true;
            }
       }
       //-----passant attack
        
        if (this.moved === false && parseInt(num) === parseInt(currentSpot - 8)){
            if (positions.includes(currentSpot-8)){
                blocked = true;
            }
            if (blocked === false){
                this.position = parseInt(num);
                this.moved = true; 
                this.row = targetRow;
                return true; 
            }
        } 
        if (this.moved === false && parseInt(num)=== parseInt(currentSpot - 16)){
            if (positions.includes(currentSpot-8) || positions.includes(currentSpot-16)){
                blocked = true;
            }
            if (blocked === false){
                this.position = parseInt(num);
                this.moved = true;
                this.canPassant = true; 
                this.row = targetRow;
                return true; 
            }
        }
        if(this.moved === true && parseInt(num)=== parseInt(currentSpot - 8)){
            if (positions.includes(currentSpot-8)){
                blocked = true;
            }
            if (blocked === false){
                this.position = parseInt(num);
                this.row = targetRow;
                return true; 
            }
        }
        return false; 
    }
}

class BlackPawn{
    constructor (position){
        this.position = position;
        this.image = "url('images/Black-pawn.png')";
        this.alive = true;
        this.color = 'b'; 
        this.row = 'r7';
        this.moved = false;
        this.canPassant = false;
    }
    //methods display posible moves, make move, special moves 
    move(num, targetRow) {
        currentSpot = this.position; 
        if (blackPositions.includes(parseInt(num))){
         blocked = true; 
        } 
        if(parseInt(num)=== parseInt(currentSpot +7)){
            if (whitePositions.includes(parseInt(num))){
                this.position = parseInt(num);
                this.moved = true;
                this.row = targetRow;
                return true;
            }
        }
        if(parseInt(num)=== parseInt(currentSpot +9)){
            if (whitePositions.includes(parseInt(num))){
                this.position = parseInt(num);
                this.moved = true;
                this.row = targetRow;
                return true;
            }
        }

        //-----passant attack  
       if (parseInt(num)=== parseInt(currentSpot +7)){
        
        let target = passantArr.pop();
        if (target.position === parseInt(currentSpot-1)){
          //it works! but, make sure there is only one piece with.canPassant === true! or it won't work :D
          let  index = BOARD_OBJ.pieces.indexOf(target);
           BOARD_OBJ.pieces.splice(index, 1);
            this.position = parseInt(num);
            this.row = targetRow;
            return true;
        }
   }
   if (parseInt(num)=== parseInt(currentSpot +9)){
    
        let target = passantArr.pop();
        if (target.position === parseInt(currentSpot+1)){
          //it works! but, make sure there is only one piece with.canPassant === true! or it won't work :D
          let  index = BOARD_OBJ.pieces.indexOf(target);
           BOARD_OBJ.pieces.splice(index, 1);
            this.position = parseInt(num);
            this.row = targetRow;
            return true;
        }
   }
   //-----passant attack
         
         if (this.moved === false && parseInt(num) === parseInt(currentSpot + 8)){
             if (positions.includes(currentSpot+8)){
                 blocked = true;
             }
             if (blocked === false){
                 this.position = parseInt(num);
                 this.moved = true; 
                 this.row = targetRow;
                 return true; 
             }
         } 
         if (this.moved === false && parseInt(num)=== parseInt(currentSpot +16)){
             if (positions.includes(currentSpot+8) || positions.includes(currentSpot+16)){
                 blocked = true;
             }
             if (blocked === false){
                 this.position = parseInt(num);
                 this.moved = true;
                 this.canPassant = true; 
                 this.row = targetRow;
                 return true; 
             }
         }
         if(this.moved === true && parseInt(num)=== parseInt(currentSpot + 8)){
             if (positions.includes(currentSpot+8)){
                 blocked = true;
             }
             if (blocked === false){
                 this.position = parseInt(num);
                 this.row = targetRow;
                 return true; 
             }
         }
         return false; 
     }
}

class BlackKnight{
    constructor (position){
        this.position = position;
        this.image = "url('images/Black-knight.png')";
        this.alive = true; 
        this.color = 'b';
    }
    move(num){
        currentSpot = this.position; 
          
        if (blackPositions.includes(parseInt(num))){
            blocked = true; 
        } 
        if (blocked === false){
            if (parseInt(num)===parseInt(currentSpot -17) || parseInt(num)===parseInt(currentSpot -15) || parseInt(num)===parseInt(currentSpot -10) || parseInt(num)===parseInt(currentSpot -6) || parseInt(num)===parseInt(currentSpot +6) || parseInt(num)===parseInt(currentSpot +10)|| parseInt(num)===parseInt(currentSpot +15) || parseInt(num)===parseInt(currentSpot +17)){
                this.position = parseInt(num);
                return true;
            }
        }
        return false; 
    }
}

class WhiteKnight{
    constructor (position){
        this.position = position;
        this.image = "url('images/White-knight.png')";
        this.alive = true; 
        this.color = 'w';
    }
    move(num){
        currentSpot = this.position; 
          
        if (whitePositions.includes(parseInt(num))){
            blocked = true; 
        } 
        if (blocked === false){
            if (parseInt(num)===parseInt(currentSpot -17) || parseInt(num)===parseInt(currentSpot -15) || parseInt(num)===parseInt(currentSpot -10) || parseInt(num)===parseInt(currentSpot -6) || parseInt(num)===parseInt(currentSpot +6) || parseInt(num)===parseInt(currentSpot +10)|| parseInt(num)===parseInt(currentSpot +15) || parseInt(num)===parseInt(currentSpot +17)){
                this.position = parseInt(num);
                return true;
            }
        }
        return false; 
    }
}

class BlackBishop{
    constructor (position, squareColor){
        this.position = position;
        this.image = "url('images/Black-bishop.png')";
        this.alive = true; 
        this.color = 'b';
        this.sqColor = squareColor;
    }
    move(num, targetRow, targetSquareColor){

        currentSpot = this.position;
        if (blackPositions.includes(parseInt(num))){
            blocked = true; 
        } 

        if (targetSquareColor === this.sqColor){

            if ((parseInt(currentSpot) - parseInt(num)) % 9 === 0 || (parseInt(num) - parseInt(currentSpot)) % 9 === 0 ){

                if (parseInt(num) > parseInt(currentSpot)){
                    for (let i = currentSpot+9 ; i < num; i+=9){
                        if(positions.includes(i)){
                           blocked = true; 
                             
                        }  
                    }        
                }
                if (parseInt(num) < parseInt(currentSpot)){
                    for (let i = currentSpot-9; i > num; i-=9){
                        if(positions.includes(i)){
                            blocked = true;   
                        }  
                    } 
                }                  
                if (blocked === false){
                    this.position = parseInt(num);                  
                    return true;                    
                }     
            }
            if ((parseInt(currentSpot) - parseInt(num)) % 7 === 0 || (parseInt(num) - parseInt(currentSpot)) % 7 === 0 ){

                if (parseInt(num) > parseInt(currentSpot)){
                    for (let i = currentSpot+7 ; i < num; i+=7){
                        if(positions.includes(i)){
                           blocked = true;   
                        }  
                    }        
                }
                if (parseInt(num) < parseInt(currentSpot)){
                    for (let i = currentSpot-7; i > num; i-=7){
                        if(positions.includes(i)){
                            blocked = true;   
                        }  
                    } 
                }                  
                if (blocked === false){
                    this.position = parseInt(num);                   
                    return true;                    
                }     
            }    
            
        }
        return false; 
    }
}

class WhiteBishop{
    constructor (position, squareColor){
        this.position = position;
        this.image = "url('images/White-bishop.png')";
        this.alive = true; 
        this.color = 'w';
        this.sqColor = squareColor; 
    }
    move(num, targetRow, targetSquareColor){

        currentSpot = this.position;
        if (whitePositions.includes(parseInt(num))){
            blocked = true; 
        } 

        if (targetSquareColor === this.sqColor){

            if ((parseInt(currentSpot) - parseInt(num)) % 9 === 0 || (parseInt(num) - parseInt(currentSpot)) % 9 === 0 ){

                if (parseInt(num) > parseInt(currentSpot)){
                    for (let i = currentSpot+9 ; i < num; i+=9){
                        if(positions.includes(i)){
                           blocked = true; 
                             
                        }  
                    }        
                }
                if (parseInt(num) < parseInt(currentSpot)){
                    for (let i = currentSpot-9; i > num; i-=9){
                        if(positions.includes(i)){
                            blocked = true;   
                        }  
                    } 
                }                  
                if (blocked === false){
                    this.position = parseInt(num);                  
                    return true;                    
                }     
            }
            if ((parseInt(currentSpot) - parseInt(num)) % 7 === 0 || (parseInt(num) - parseInt(currentSpot)) % 7 === 0 ){

                if (parseInt(num) > parseInt(currentSpot)){
                    for (let i = currentSpot+7 ; i < num; i+=7){
                        if(positions.includes(i)){
                           blocked = true;   
                        }  
                    }        
                }
                if (parseInt(num) < parseInt(currentSpot)){
                    for (let i = currentSpot-7; i > num; i-=7){
                        if(positions.includes(i)){
                            blocked = true;   
                        }  
                    } 
                }                  
                if (blocked === false){
                    this.position = parseInt(num);                   
                    return true;                    
                }     
            }    
            
        }
        return false; 
    }
}

class BlackRook{
    constructor (position){
        this.position = position;
        this.image = "url('images/Black-rook.png')";
        this.alive = true; 
        this.color = 'b';
        this.row = 'r8';
        this.moved = false;
    }
    move(num, targetRow){
        currentSpot = this.position;

        if (blackPositions.includes(parseInt(num))){
            blocked = true; 
        } 
        
        if ((parseInt(currentSpot) - parseInt(num)) % 8 === 0 || (parseInt(num) - parseInt(currentSpot)) % 8 === 0 ){

            if (parseInt(num) > parseInt(currentSpot)){
                for (let i = currentSpot+8 ; i < num; i+=8){
                    if(positions.includes(i)){
                       blocked = true;   
                    }  
                }        
            }
            if (parseInt(num) < parseInt(currentSpot)){
                for (let i = currentSpot-8; i > num; i-=8){
                    if(positions.includes(i)){
                        blocked = true;   
                    }  
                } 
            }                  
            if (blocked === false){
                this.position = parseInt(num);
                this.row = targetRow; 
                this.moved = true;                  
                return true;                    
            }     
        }

        if (this.row === targetRow){

            if (parseInt(num)< parseInt(currentSpot)){      
                for (let i = currentSpot-1; i>num; i--){ 
                    if(positions.includes(i)){
                        blocked = true;
                    } 
                }
            }
            if (parseInt(num)> parseInt(currentSpot)){      
                for (let i = currentSpot+1; i<num; i++){ 
                    if(positions.includes(i)){
                        blocked = true;
                    } 
                }
            }
            if (blocked === false){
            this.position = parseInt(num); //no need to update target row here, it wont change
            this.moved = true;
            return true;
            }
        }  
        return false; 
    }
}

class WhiteRook{
    constructor (position){
        this.position = position;
        this.image = "url('images/White-rook.png')";
        this.alive = true; 
        this.color = 'w';
        this.row = 'r1';
        this.moved = false;
    }
    move(num, targetRow){
        currentSpot = this.position;
        if (whitePositions.includes(parseInt(num))){
            blocked = true; 
        } 
        
        if ((parseInt(currentSpot) - parseInt(num)) % 8 === 0 || (parseInt(num) - parseInt(currentSpot)) % 8 === 0 ){

            if (parseInt(num) > parseInt(currentSpot)){
                for (let i = currentSpot+8 ; i < num; i+=8){
                    if(positions.includes(i)){
                       blocked = true;   
                    }  
                }        
            }
            if (parseInt(num) < parseInt(currentSpot)){
                for (let i = currentSpot-8; i > num; i-=8){
                    if(positions.includes(i)){
                        blocked = true;   
                    }  
                } 
            }                  
            if (blocked === false){
                this.position = parseInt(num);
                this.row = targetRow; 
                this.moved = true;                  
                return true;                    
            }     
        }

        if (this.row === targetRow){

            if (parseInt(num)< parseInt(currentSpot)){      
                for (let i = currentSpot-1; i>num; i--){ 
                    if(positions.includes(i)){
                        blocked = true;
                    } 
                }
            }
            if (parseInt(num)> parseInt(currentSpot)){      
                for (let i = currentSpot+1; i<num; i++){ 
                    if(positions.includes(i)){
                        blocked = true;
                    } 
                }
            }
            if (blocked === false){
            this.position = parseInt(num); //no need to update target row here, it wont change
            this.moved = true;
            return true;
            }
        }  
        return false; 
    }
}

class WhiteKing{
    constructor (position){
        this.position = position;
        this.image = "url('images/White-king.png')";
        this.alive = true; 
        this.color = 'w';
        this.moved = false;
    }
    move(num){
        currentSpot = this.position; 
         if (whitePositions.includes(parseInt(num))){
            blocked = true; 
        } 
        
       
        if (blocked === false){
            let kingMoves = [-8, 8, -1, 1, -9, 9, -7, 7];
            for(let i = 0; i < 8; i++){
                if (parseInt(currentSpot) + kingMoves[i] === parseInt(num)){
                    this.position = parseInt(num);
                    this.moved = true;
                    return true;
                }
            } 
            // castle -------------
        if (parseInt(num)=== parseInt(currentSpot +2)){
            
            
            if (positions.includes(parseInt(currentSpot +1))) blocked = true;
            if (this.moved === false && blocked === false && whiteKingRook.moved === false){
                this.position = 62;
                this.moved = true;
                whiteKingRook.position = 61;
                whiteKingRook.moved = true;
                
                console.log(BOARD_OBJ.pieces)
                
                return true; 
            }
        }
        if (parseInt(num)=== parseInt(currentSpot - 2)){
            
            if (positions.includes(parseInt(currentSpot -1))) blocked = true;
            if (positions.includes(parseInt(currentSpot -3))) blocked = true;
            if (this.moved === false && blocked === false && whiteQueenRook.moved === false){
                this.position = parseInt(num);
                this.moved = true;
                whiteQueenRook.position = 59;
                whiteQueenRook.moved = true;
                return true; 
            }
        }
        // castle -------------
        }      
        return false; 
    }
}

class BlackKing{
    constructor (position){
        this.position = position;
        this.image = "url('images/Black-king.png')";
        this.alive = true; 
        this.color = 'b';
        this.moved = false;
    }
    move(num){
        currentSpot = this.position; 
         if (blackPositions.includes(parseInt(num))){
            blocked = true; 
        } 
        
       
        if (blocked === false){
            let kingMoves = [-8, 8, -1, 1, -9, 9, -7, 7];
            for(let i = 0; i < 8; i++){
                if (parseInt(currentSpot) + kingMoves[i] === parseInt(num)){
                    this.position = parseInt(num);
                    this.moved = true;
                    return true;
                }
            } 
            // castle -------------
        if (parseInt(num)=== parseInt(currentSpot +2)){
            
            
            if (positions.includes(parseInt(currentSpot +1))) blocked = true;
            if (this.moved === false && blocked === false && blackKingRook.moved === false){
                this.position = parseInt(num);
                this.moved = true;
                blackKingRook.position = 5;
                blackKingRook.moved = true;
                
                return true; 
            }
        }
        if (parseInt(num)=== parseInt(currentSpot - 2)){
            
            if (positions.includes(parseInt(currentSpot -1))) blocked = true;
            if (positions.includes(parseInt(currentSpot -3))) blocked = true;
            if (this.moved === false && blocked === false && blackQueenRook.moved === false){
                this.position = parseInt(num);
                this.moved = true;
                blackQueenRook.position = 3;
                blackQueenRook.moved = true;
                return true; 
            }
        }
        // castle -------------
        }     
        return false; 
    }
}

class BlackQueen{
    constructor (position){
        this.position = position;
        this.image = "url('images/Black-queen.png')";
        this.alive = true; 
        this.color = 'b';
        this.row = 'r8';
        this.sqColor = 'black-square';
    }
    move(num, targetRow, targetSquareColor){
        currentSpot = this.position;
 
         if (blackPositions.includes(parseInt(num))){
             blocked = true; 
         } 
         if (targetSquareColor === this.sqColor && this.row !== targetRow){
 
             if ((parseInt(currentSpot) - parseInt(num)) % 9 === 0 || (parseInt(num) - parseInt(currentSpot)) % 9 === 0 ){
 
                 if (parseInt(num) > parseInt(currentSpot)){
                     for (let i = currentSpot+9 ; i < num; i+=9){
                         if(positions.includes(i)){
                            blocked = true; 
                              
                         }  
                     }        
                 }
                 if (parseInt(num) < parseInt(currentSpot)){
                     for (let i = currentSpot-9; i > num; i-=9){
                         if(positions.includes(i)){
                             blocked = true;   
                         }  
                     } 
                 }                  
                 if (blocked === false){
                     this.position = parseInt(num); 
                     this.row = targetRow;                 
                     return true;                    
                 }     
             }
             if ((parseInt(currentSpot) - parseInt(num)) % 7 === 0 || (parseInt(num) - parseInt(currentSpot)) % 7 === 0 ){
 
                 if (parseInt(num) > parseInt(currentSpot)){
                     for (let i = currentSpot+7 ; i < num; i+=7){
                         if(positions.includes(i)){
                            blocked = true;   
                         }  
                     }        
                 }
                 if (parseInt(num) < parseInt(currentSpot)){
                     for (let i = currentSpot-7; i > num; i-=7){
                         if(positions.includes(i)){
                             blocked = true;   
                         }  
                     } 
                 }                  
                 if (blocked === false){
                     this.position = parseInt(num); 
                     this.row = targetRow;                  
                     return true;                    
                 }     
             }         
         }
         if ((parseInt(currentSpot) - parseInt(num)) % 8 === 0 || (parseInt(num) - parseInt(currentSpot)) % 8 === 0 ){
 
             if (parseInt(num) > parseInt(currentSpot)){
                 for (let i = currentSpot+8 ; i < num; i+=8){
                     if(positions.includes(i)){
                        blocked = true;   
                     }  
                 }        
             }
             if (parseInt(num) < parseInt(currentSpot)){
                 for (let i = currentSpot-8; i > num; i-=8){
                     if(positions.includes(i)){
                         blocked = true;   
                     }  
                 } 
             }                  
             if (blocked === false){
                 this.position = parseInt(num);
                 this.row = targetRow;    
                 this.sqColor = targetSquareColor;               
                 return true;                    
             }     
         }
 
                  
         if (this.row === targetRow){
 
             if (parseInt(num)< parseInt(currentSpot)){      
                 for (let i = currentSpot-1; i>num; i--){ 
                     if(positions.includes(i)){
                         blocked = true;
                     } 
                 }
             }
             if (parseInt(num)> parseInt(currentSpot)){      
                 for (let i = currentSpot+1; i<num; i++){ 
                     if(positions.includes(i)){
                         blocked = true;
                     } 
                 }
             }
             if (blocked === false){
             this.position = parseInt(num); //no need to update target row here, it wont change
             this.sqColor= targetSquareColor;
             return true;
             }
         }  
         return false; 
            
     }
}

class WhiteQueen{ 
    constructor (position){
        this.position = position;
        this.image = "url('images/White-queen.png')";
        this.alive = true; 
        this.color = 'w';
        this.row = 'r1';
        this.sqColor = 'white-square'; 
    }

    move(num, targetRow, targetSquareColor){
       currentSpot = this.position;

        if (whitePositions.includes(parseInt(num))){
            blocked = true; 
        } 
        if (targetSquareColor === this.sqColor && this.row !== targetRow){

            if ((parseInt(currentSpot) - parseInt(num)) % 9 === 0 || (parseInt(num) - parseInt(currentSpot)) % 9 === 0 ){

                if (parseInt(num) > parseInt(currentSpot)){
                    for (let i = currentSpot+9 ; i < num; i+=9){
                        if(positions.includes(i)){
                           blocked = true; 
                             
                        }  
                    }        
                }
                if (parseInt(num) < parseInt(currentSpot)){
                    for (let i = currentSpot-9; i > num; i-=9){
                        if(positions.includes(i)){
                            blocked = true;   
                        }  
                    } 
                }                  
                if (blocked === false){
                    this.position = parseInt(num); 
                    this.row = targetRow;                 
                    return true;                    
                }     
            }
            if ((parseInt(currentSpot) - parseInt(num)) % 7 === 0 || (parseInt(num) - parseInt(currentSpot)) % 7 === 0 ){

                if (parseInt(num) > parseInt(currentSpot)){
                    for (let i = currentSpot+7 ; i < num; i+=7){
                        if(positions.includes(i)){
                           blocked = true;   
                        }  
                    }        
                }
                if (parseInt(num) < parseInt(currentSpot)){
                    for (let i = currentSpot-7; i > num; i-=7){
                        if(positions.includes(i)){
                            blocked = true;   
                        }  
                    } 
                }                  
                if (blocked === false){
                    this.position = parseInt(num); 
                    this.row = targetRow;                  
                    return true;                    
                }     
            }         
        }
        if ((parseInt(currentSpot) - parseInt(num)) % 8 === 0 || (parseInt(num) - parseInt(currentSpot)) % 8 === 0 ){

            if (parseInt(num) > parseInt(currentSpot)){
                for (let i = currentSpot+8 ; i < num; i+=8){
                    if(positions.includes(i)){
                       blocked = true;   
                    }  
                }        
            }
            if (parseInt(num) < parseInt(currentSpot)){
                for (let i = currentSpot-8; i > num; i-=8){
                    if(positions.includes(i)){
                        blocked = true;   
                    }  
                } 
            }                  
            if (blocked === false){
                this.position = parseInt(num);
                this.row = targetRow;        
                this.sqColor = targetSquareColor;         
                return true;                    
            }     
        }

                 
        if (this.row === targetRow){

            if (parseInt(num)< parseInt(currentSpot)){      
                for (let i = currentSpot-1; i>num; i--){ 
                    if(positions.includes(i)){
                        blocked = true;
                    } 
                }
            }
            if (parseInt(num)> parseInt(currentSpot)){      
                for (let i = currentSpot+1; i<num; i++){ 
                    if(positions.includes(i)){
                        blocked = true;
                    } 
                }
            }
            if (blocked === false){
            this.position = parseInt(num); //no need to update target row here, it wont change
            this.sqColor = targetSquareColor;
            return true;
            }
        }  
        return false; 
           
    }
}





