const BOARD_OBJ = {
    pieces: [],
    passantPiece: undefined,

    initPieces(){
        //place white pawns
        for (let i = 48; i <= 55; i++){
            this.pieces.push(new WhitePawn(i));
        }
        //place black pawns
        for (let i = 8; i <= 15; i++){
            this.pieces.push(new BlackPawn(i));
        }
        // place black knights
        this.pieces.push(new BlackKnight(1), new BlackKnight(6));
        // place white knights
        this.pieces.push(new WhiteKnight(57), new WhiteKnight(62));
        //place black bishops
        this.pieces.push(new BlackBishop(2, 'white-square'), new BlackBishop(5, 'black-square'));
        //place white bishops
        this.pieces.push(new WhiteBishop(58, 'black-square'), new WhiteBishop(61, 'white-square'));
        //place black rooks
        this.pieces.push(new BlackRook(0), new BlackRook(7));
        //place white rooks
        this.pieces.push(new WhiteRook(56), new WhiteRook(63));
        //place kings
        this.pieces.push(new WhiteKing(60));
        this.pieces.push(new BlackKing(4));
        //place queens
        this.pieces.push(new WhiteQueen(59));
        this.pieces.push(new BlackQueen(3));
    }
}