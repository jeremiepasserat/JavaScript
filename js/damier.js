
let Damier;

(function(){
    "use strict";
    Damier = function (long, larg, dest){

        this.long = long;
        this.larg=larg;
        this.dest=dest;
        this.joueurencours = true;
        this.get_caractere = function () {
            console.log(this.joueurencours);
            if (this.joueurencours)
                return 'X';
            else
                return 'O';
        };
        this.td_click = function () {
            let i = $(this).data('i');
            let j = $(this).data('j');
            $(this).html(self.get_caractere());
            self.joueurencours = !self.joueurencours;
            console.log('test');

            //self.tab[i] = !self.joueurencours;

         //   console.log(self.tab[i]);
        };

        let t= [];
        let tab = [t];
        let damier = $(dest);
        let self = this;
        for (let i = 0; i < long; ++i) {

            let tr = $('<tr />');

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

            damier.append(tr);
        }

    }
}) ();
