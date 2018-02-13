
let Damier;

(function(){
    "use strict";
    Damier = function (long, larg, dest){

        this.long = long;
        this.larg=larg;
        this.dest=dest;
        this.joueurencours = true;
        this.get_caractere = function () {
         //   console.log(this.joueurencours);
            if (this.joueurencours)
                return 'X';
            else
                return 'O';
        };

        this.t= [];
        this.tab = [this.t];
        this.ligne_faite = function () {

            for (let i = 0; i < 3; ++i) {
                var j = 0;
                    if (self.tab[i][j] === self.tab[i][j + 1] && self.tab[i][j + 1]
                        === self.tab[i][j + 2] && self.tab[i][j + 2] !== undefined) {
                        console.log('a' + self.tab[i][j]);
                        console.log('a' + self.tab[i][j + 1]);
                        console.log('a' + self.tab[i][j + 2]);
                    }
                   else if (self.tab[0][i] === self.tab[1][i]){//} && self.tab[j + 1][i]
                  //      === self.tab[j + 2][i] && self.tab[j + 2][i] !== undefined) {
                    console.log('b' + self.tab[0][i]);
                    console.log('b' + self.tab[1][i]);
                    console.log('b' + self.tab[2][i]);
                    return true
                }
                console.log('b' + self.tab[j+1][i]);
            }
            return false;
        };




        this.td_click = function () {
            let i = $(this).data('i');
            let j = $(this).data('j');
            $(this).html(self.get_caractere());
            console.log (i, j);
            self.tab[i][j] = self.joueurencours;
          //  if (self.ligne_faite())
            //    alert("Vous avez gagné");
            //else
                self.joueurencours = !self.joueurencours;
        };


        let damier = $(dest);
        let self = this;
        for (let i = 0; i < long; ++i) {

            let tr = $('<tr />');
            self.t.push();

            for (let j = 0; j < larg; ++j) {

                if ((j + i) % 2 == 0)
                    tr.append(
                        $('<td />')
                            .addClass('case-blanche')
                            .data('i', i)
                            .data('j', j)
                            .click(self.td_click)
                    );
                else
                    tr.append(
                        $('<td />')
                            .addClass('case-noire')
                            .data('i', i)
                            .data('j', j)
                            .click(self.td_click)
                    );
            }

            self.tab.push(self.t);

            damier.append(tr);
        }

    }
}) ();
