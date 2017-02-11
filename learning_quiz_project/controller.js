/**
 * Created by mazouzi on 04/02/2017.
 */

var app = angular.module('mainApp',[]);
app.controller("listCtrl",function listController(){

    var vm = this ;
    vm.data = [{
        name :"Lawrence Library",
        type : "LUGip",
        image_url : "http://www.bestprintingonline.com/help_resources/Image/Ducky_Head_Web_Low-Res.jpg"

    },
        {
            name :"Hamilton Library",
            type : "LUGip HW SIG ",
            image_url : "http://www.bestprintingonline.com/help_resources/Image/Ducky_Head_Web_Low-Res.jpg"


        }
,
        {
            name :"Applebees",
            type : "After LUPip Mtg Spot",
            image_url : "http://www.bestprintingonline.com/help_resources/Image/Ducky_Head_Web_Low-Res.jpg"
        }

    ]
});


