(function () {
    let $ = {
        nom: function () {
            console.log("je suis appelé !");
        }
    };

    $.nom();
}) ();


function Damier(long, larg, dest) {
    let damier = $(dest);

    for (let i = 0; i < long; ++i) {

        let tr = $('<tr />');

        for (let j = 0; j < larg; ++j) {

            if ((j + i) % 2 == 0)
                tr.append($('<td />').addClass('case-blanche').html('B'));
            else
                tr.append($('<td />').addClass('case-noire').html('N'));
        }

        damier.append(tr);

    }
}

let test;
(function(){
    "use strict";
    let css_blanc = {
        'background-color': 'blue',
        'font-size': 'x-large',
        'font-weight': 'bold',
        'color': 'orange',
        'border': 'dotted 10px DarkSlateGrey',
        'text-align': 'center'
    };

    let css_noir = {
        'background-color': 'brown',
        'font-size': 'x-large',
        'font-weight': 'bold',
        'color': 'purple',
        'border': 'solid 10px DarkSlateGrey',
        'text-align': 'right'
    };

    let css_noir_rouge= {
        'background-color': 'red',
        'font-size': 'x-large',
        'font-weight': 'bold',
        'color': 'purple',
        'border': 'solid 10px DarkSlateGrey',
        'text-align': 'right',
        'outline': 'thick solid #0000FF'
    };

    let test={
        'background-image': 'url(img/1483178934-papy1.png)'
    };

    let mafonction2 = function () {
        document.location.href="http://jeparleunptitpeu2francay.alwaysdata.net"
    };

        $(document).ready(function() {
           // let case_blanche = $('.case-blanche');
            //let case_noire = $('.case-noire');

    /*        let damier = $('#damier');

            for (let i = 0; i < 8; ++i) {

                let tr = $('<tr />');

                for (let j = 0; j < 8; ++j) {

                    if ((j+i) % 2 == 0)
                        tr.append($('<td />').addClass('case-blanche').html('B'));
                    else
                        tr.append($('<td />').addClass('case-noire').html('N'));
                }

                damier.append(tr);

               $('#damier').append(
                    // tr généré dynamiquement

                    $('<tr />').append($('<td />').addClass('case-blanche').html('B')),
                    $('<tr />').append($('<td />').addClass('case-noire').html('N'))
                );
            }*/

            new Damier(50, 50, '#damier');

            /* on peut travailler sur le dom */
            $('.case-blanche').css(css_blanc).hover(function () {
                //alert ("TU VEUX DU FROMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGE ?");
                $(this).css(test);
            }, function () {
                $(this).css(css_noir);
            });
            $('.case-noire').css(css_noir).hover(function () {
                //$(this).css({'background-color': 'red'});
                $(this).css(test);
            }, function () {
                $(this).css(css_noir);
            });
        })


}) ();
