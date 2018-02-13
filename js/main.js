(function () {
    let $ = {
        nom: function () {
            console.log("je suis appelé !");
        }
    };

    $.nom();
}) ();




let test;
(function(){
    "use strict";
    let css_blanc = {
        'background-color': 'white',
        'font-size': 'x-large',
        'font-weight': 'bold',
        'color': 'orange',
        'text-align': 'center',
        'width': '100px',
        'height': '100px'
    };

    let css_noir = {
        'background-color': 'black',
        'font-size': 'x-large',
        'font-weight': 'bold',
        'color': 'purple',
        'text-align': 'center',
        'width': '100px',
        'height': '100px'
    };

    let css_noir_rouge= {
        'background-color': 'red',
        'font-size': 'x-large',
        'font-weight': 'bold',
        'color': 'purple',
        'text-align': 'center',
        'width': '100px',
        'height': '100px'
        //'outline': 'thick solid #0000FF'
    };

    let test={
        'background-image': 'url(img/1483178934-papy1.png)'
    };

    let mafonction2 = function () {
        document.location.href="http://jeparleunptitpeu2francay.alwaysdata.net"
    };

        $(document).ready(function() {
            /* on peut travailler sur le dom */

            new Damier(3, 3, '#damier');

            $('.case-blanche').css(css_blanc).hover(function () {
                $(this).css(css_noir_rouge);
            }, function () {
                $(this).css(css_blanc);
            });
            $('.case-noire').css(css_noir).hover(function () {
                $(this).css(css_noir_rouge);
            }, function () {
                $(this).css(css_noir);
            });


        })


}) ();


