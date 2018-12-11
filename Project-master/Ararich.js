var LivingCreature = require("./LivingCreature")
module.exports = class Ararich extends LivingCreature{
    constructor(x,y){
        super(x, y);
            this.directions = [
                [this.x - 1, this.y - 1],
                [this.x    , this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x - 1, this.y    ],
                [this.x + 1, this.y    ],
                [this.x - 1, this.y + 1],
                [this.x    , this.y + 1],
                [this.x + 1, this.y + 1]
            ];

    }

        chooseCell() {
           var found = [];
           for (var i in this.directions) {
             var x = this.directions[i][0];
             var y = this.directions[i][1];
                 if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                        found.push(this.directions[i]);
             }
           }
           return random(found);
        }

    create() {
      var norVandak = this.chooseCell();
      var x = norVandak[0];
      var y = norVandak[1];
      if (matrix[y][x] == 0) {
        matrix[y][x] = 2;
        var kt = new Xotaker(y, x);
        xotakerArr.push(kt);
      }
      else if (matrix[y][x] == 1) {
        var kt = new Xotaker(x, y);
        xotakerArr.push(kt);
        matrix[x][y] = 2;
        for (var i in grassArr) {
          if (grassArr[i].x == x && grassArr[i].y == y) {
            grassArr.splice(i, 1);
            break;
          }
        }
      }
    
}

}