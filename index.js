
// this is for bind method
    // var pokemon = {
    //     firstname: 'Pika',
    //     lastname: 'Chu ',

    //     getPokeName: function() {
    //         var fullname = this.firstname + ' ' + this.lastname;
    //         return fullname;
    //     }
    // };

    // var pokemonName = function() {
    //     console.log(this.getPokeName() + 'I choose you!');
    // };

    // var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

    // logPokemon();

//this is for bind method


// it is use for console function call
    // function call(){
    //     var kal=22
    //     return kal;
        
    //     }
    //     console.log(call());
// end


// with out bind
    // var pokemon = {
    //     firstname: 'Pika',
    //     lastname: 'Chu ',
    // };
    // var getPokeName= function() {
    //         var fullname = pokemon.firstname + ' ' + pokemon.lastname;
    //         return fullname;
    //     }


    // var pokemonName = function() {
    //     console.log(getPokeName() + 'I choose you!');
    // };

    // var logPokemon = pokemonName.bind(); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

    // logPokemon();

// with out bind


//with the paira meter

// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var pokemonName = function(snack, hobby) {
//     console.log(this.getPokeName() + 'I choose you!');
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };

// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

// logPokemon('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms

////with the paira meter




// function change(){


//     var jas="this is hello data.ram is always good.john data find."
//     // var n = jas.indexOf("is");
//     // var k=jas.indexOf('.');
//     // var jal=jas.slice(n,k);
//     console.log(jas)
    
    
    
//     let array = [...jas.matchAll('is')];
//      console.log(array);
//      console.log(array[0].index);
//     var pos=array[0].index
//     var k=jas.indexOf('.');
//     var jam=jas.slice(pos,k);
//     console.log(jam)
//     // expected output: Array ["test1", "e", "st1", "1"]
    
//     // console.log(array[1]);
//     // console.log(array[1].index);
//     var pos=array[1].index
//     var k=jas.indexOf('.');
//     var jam=jas.slice(pos,k);
//     console.log(jam)
    
//     // console.log(array[2]);
//     var mal=array[2].index
//     var am=jas.indexOf(".", mal);
//     // console.log("kan",am)
//     var tol=jas.indexOf('.');
//     var gain=jas.slice(mal,am);
//     console.log(gain)
//     // expected output: Array ["test2", "e", "st2", "2"]
    
    
// }

// change();




// var str="this is hello data.ram is always good.john data find."
// function change(getStr){
//     // console.log(str)
//     let array = [...str.matchAll(getStr)];
//         array.forEach((d,i)=>{
//             var pos=array[i].index
//             var am=str.indexOf(".", pos);
//             var data=str.slice(pos,am);
//             console.log(data)
//         })
// }
// var findStr="data"
// change(findStr);





// var str="this is hello data.ram is always good.john data find."
// function change(getStr){
//     // console.log(str)
//     var t;
//     let array = [...str.matchAll(getStr)];
//         array.forEach((d,i)=>{
//             var pos=array[i].index
//             //  console.log(pos)
//             for(var h=pos;h>=0;h--){
//                 // console.log("hem",str[h])
//                     if(str[h]=='.'){
//                         // console.log("hame abi",pos)
//                         // console.log("justi",h)
//                         //  console.log("just feel",str[h])
//                           var jam=h+1
//                         //   console.log('postion',jam);
//                           t=jam;
//                         break;
//                     }else if(str.indexOf(str[h])==0){
//                         // console.log("helpus",str[h])
//                         //  console.log("kk",str.indexOf(str[h]))
//                          t=str.indexOf(str[h]);
//                         break;
//                     }
//             }
//             var am=str.indexOf(".", pos);
//             //  console.log("jamala",am)
//             var data=str.slice(t,am);
//               console.log(data)
//         })
// }
// var findStr="data"
// change(findStr);






// var str=`A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea.
//         A paragraph consists of one or more sentences.
//         Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.
//         Following the Vivian Bose Commission report indicating serious wrongdoings of the Dalmia–Jain group, on 28 August 1969, the Bombay High Court, under Justice J. L. Nain, passed an interim order to disband the existing board of Bennett Coleman and to constitute a new board under the Government.
//         The bench ruled that "Under these circumstances, the best thing would be to pass such orders on the assumption that the allegations made by the petitioners that the affairs of the company were being conducted in a manner prejudicial to public interest and to the interests of the Company are correct".
//         [22] Following that order, Shanti Prasad Jain ceased to be a director and the company ran with new directors on board, appointed by the Government of India, with the exception of a lone stenographer of the Jains.
//         Curiously, the court appointed D K Kunte as Chairman of the Board. 
//         Kunte had no prior business experience and was also an opposition member of the Lok Sabha.
//         The Times of India has been criticized for being the first to institutionalize the practice of paid news in India, where politicians, businessmen, corporations and celebrities can pay the newspaper and its journalists would carry the desired news for the payer.
//         [5][40][41] The newspaper offers prominence with which the paid news is placed and the page on which it is displayed based on the amount of the payment. 
//         According to this practice, a payment plan assures a news feature and ensures positive coverage to the payer.
//         [5] In 2005, The Times of India began the practice of "private treaties", also called as "brand capital", where new companies, individuals or movies seeking mass coverage and public relations, major brands and organizations were offered sustained positive coverage and plugs in its news columns in exchange for shares or other forms of financial obligations to Bennett, Coleman & Company, Ltd. 
//         (B.C.C.L.) – the owners of The Times of India. 
//         The B.C.C.L., with its "private treaties" program, acquired stakes in 350 companies and generated 15% of its revenues by 2012, according to a critical article in The New Yorker. 
//         The "paid news" and "private treaties" practice started by The Times of India has since been adopted by The Hindustan Times group, the India Today group, the Outlook group, and other major media groups in India including Indian television channels.`
// function change(str,searchKey){
//     // console.log(str)
//     var startPostion;
//     var searchString=[];
//     let array = [...str.matchAll(searchKey)];
//      console.log(array);
//         array.forEach((d,i)=>{
//             var pos=array[i].index
//             for(var h=pos;h>=0;h--){  
//                     if(str[h]=='.'){       
//                           var dotPostion=h+1  
//                           startPostion=dotPostion;
//                         break;
//                     }else if(str.indexOf(str[h])==0){ 
//                         startPostion=str.indexOf(str[h]);
//                         break;
//                     }
//             }
//             var EndPostion=str.indexOf(".", pos);
//             var getString=str.slice(startPostion,EndPostion);
//             //   console.log(data)
//               searchString.push(getString);
//         })
//         console.log("paragraph",searchString.length);
//         // console.log("hello",searchString)
//         searchString.forEach((data,ind)=>{
//           console.log(data)  
//         })
// }
// var searchKey="Times"
// change(str,searchKey);


// function kal(){
// var jamu = "Hello World!";
//                 var result = jamu.fontcolor("green");
// console.log("gdfgdgdgdfg",result)
// }
// kal();


// var str=`A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea.
//         A paragraph consists of one or more sentences.
//         Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.
//         Following the Vivian Bose Commission report indicating serious wrongdoings of the Dalmia–Jain group, on 28 August 1969, the Bombay High Court, under Justice J. L. Nain, passed an interim order to disband the existing board of Bennett Coleman and to constitute a new board under the Government.
//         The bench ruled that "Under these circumstances, the best thing would be to pass such orders on the assumption that the allegations made by the petitioners that the affairs of the company were being conducted in a manner prejudicial to public interest and to the interests of the Company are correct".
//         [22] Following that order, Shanti Prasad Jain ceased to be a director and the company ran with new directors on board, appointed by the Government of India, with the exception of a lone stenographer of the Jains.
//         Curiously, the court appointed D K Kunte as Chairman of the Board. 
//         Kunte had no prior business experience and was also an opposition member of the Lok Sabha.
//         The Times of India has been criticized for being the first to institutionalize the practice of paid news in India, where politicians, businessmen, corporations and celebrities can pay the newspaper and its journalists would carry the desired news for the payer.
//         [5][40][41] The newspaper offers prominence with which the paid news is placed and the page on which it is displayed based on the amount of the payment. 
//         According to this practice, a payment plan assures a news feature and ensures positive coverage to the payer.
//         [5] In 2005, The Times of India began the practice of "private treaties", also called as "brand capital", where new companies, individuals or movies seeking mass coverage and public relations, major brands and organizations were offered sustained positive coverage and plugs in its news columns in exchange for shares or other forms of financial obligations to Bennett, Coleman & Company, Ltd. 
//         (B.C.C.L.) – the owners of The Times of India. 
//         The B.C.C.L., with its "private treaties" program, acquired stakes in 350 companies and generated 15% of its revenues by 2012, according to a critical article in The New Yorker. 
//         The "paid news" and "private treaties" practice started by The Times of India has since been adopted by The Hindustan Times group, the India Today group, the Outlook group, and other major media groups in India including Indian television channels.`



//         function change(str,searchKey,highlite,style){
//     // console.log(highlite)
//     var startPostion;
//     var searchString=[];
//     let array = [...str.matchAll(searchKey)];
//     //  console.log(array);
//         array.forEach((d,i)=>{
//             var pos=array[i].index
//             for(var h=pos;h>=0;h--){  
//                     if(str[h]=='.'){       
//                           var dotPostion=h+1  
//                           startPostion=dotPostion;
//                         break;
//                     }else if(str.indexOf(str[h])==0){ 
//                         startPostion=str.indexOf(str[h]);
//                         break;
//                     }
//             }
//             var EndPostion=str.indexOf(".", pos);
//             var getString=str.slice(startPostion,EndPostion);
//             //   console.log(data)
//               searchString.push(getString);
//         })
//         console.log("in",searchString.length,`postion "${searchKey}" word found`);
//         // console.log("hello",searchString)
//         searchString.forEach((data,ind)=>{
//             // console.log("hello",ind,data)
//             if(highlite==''){
//             var res = searchString[ind].replace(searchKey,`"${searchKey}"` );
//             }
//             else if(highlite=="<h1>")
//             {
//                 var delight="</h1>"
//                 var res = searchString[ind].replace(searchKey,`${highlite}${searchKey}${delight}` );
//             }
//             else if(highlite=="<p>"){        
//                 var para="</p>"
//                 var res = searchString[ind].replace(searchKey,`${highlite}${searchKey}${para}` );
//             }
//             else if(highlite=="colour"){     
//                 var res = searchString[ind].replace(searchKey,`<span style='color: " ${style.colour} "; font-waight:"${style.weight}"'>${searchKey}</span>` );
//             }
          
//          console.log(res)  
//         })
// }
// var searchKey="Times"
// var highlite="colour"
// var style={
//     colour:"#ff0000",
//     weight: "bold",
// }
// change(str,searchKey,highlite,style);


    // const express=require('express');
    // const app=express();
    // const route=express.Router();
    // const port=1212;
    // app.use("/", route);
    // app.set("views", __dirname + "/Views");
    // app.set("view engine", "ejs");
    // var ejs = require('ejs');
    // route.get('/',(req,res)=>{
    //      var result=change.change(str,searchKey,highlite,style);
    //         result.newArray.forEach((d,i)=>{
    //             console.log(d);
    //             res.end(ejs.render(d));
    //         })
    // })

    // app.listen(port ,()=>{
    //     console.log(`server run on port ${port}`)
    // })




const change = require('./searchKeyword');

var str=`A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea.
        A paragraph consists of one or more sentences.
        Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.
        Following the Vivian Bose Commission report indicating serious wrongdoings of the Dalmia–Jain group, on 28 August 1969, the Bombay High Court, under Justice J. L. Nain, passed an interim order to disband the existing board of Bennett Coleman and to constitute a new board under the Government.
        The bench ruled that "Under these circumstances, the best thing would be to pass such orders on the assumption that the allegations made by the petitioners that the affairs of the company were being conducted in a manner prejudicial to public interest and to the interests of the Company are correct".
        [22] Following that order, Shanti Prasad Jain ceased to be a director and the company ran with new directors on board, appointed by the Government of India, with the exception of a lone stenographer of the Jains.
        Curiously, the court appointed D K Kunte as Chairman of the Board. 
        Kunte had no prior business experience and was also an opposition member of the Lok Sabha.
        The Times of India has been criticized for being the first to institutionalize the practice of paid news in India, where politicians, businessmen, corporations and celebrities can pay the newspaper and its journalists would carry the desired news for the payer.
        [5][40][41] The newspaper offers prominence with which the paid news is placed and the page on which it is displayed based on the amount of the payment. 
        According to this practice, a payment plan assures a news feature and ensures positive coverage to the payer.
        [5] In 2005, The Times of India began the practice of "private treaties", also called as "brand capital", where new companies, individuals or movies seeking mass coverage and public relations, major brands and organizations were offered sustained positive coverage and plugs in its news columns in exchange for shares or other forms of financial obligations to Bennett, Coleman & Company, Ltd. 
        (B.C.C.L.) – the owners of The Times of India. 
        The B.C.C.L., with its "private treaties" program, acquired stakes in 350 companies and generated 15% of its revenues by 2012, according to a critical article in The New Yorker. 
        The "paid news" and "private treaties" practice started by The Times of India has since been adopted by The Hindustan Times group, the India Today group, the Outlook group, and other major media groups in India including Indian television channels.
        Database Information APPENDIX E Credentials APPENDIX F Description of Terms and Acronyms Phase I Environmental Site Assessment Track West - Airway Heights ■ Airway Heights, Washington July 31, 2018 ■ Terracon Project No. 8118P101 Responsive ■ Resourceful ■ Reliable i EXECUTIVE SUMMARY This Phase I Environmental Site Assessment (ESA) was performed in accordance with our Proposal No. 
        PT6187003 dated June 21, 2018, and was conducted consistent with the procedures included in ASTM E1527-13, Standard Practice for Environmental Site Assessments: Phase I Environmental Site Assessment Process. The ESA was conducted under the supervision or responsible charge of Matt Wheaton, Environmental Professional. 
        Madeleine Hummer performed the site reconnaissance on July 26, 2018.`


var searchKey="paragraph"
var highlite="colour" //you can use tag ex{<h1>},or paragraph ex{<p>},or colour ex{colour},which you want to apply
var style={
    colour:"#ff0000",
    weight: "bold",
}

var result=change.change(str,searchKey,highlite,style);
// console.log("array Length",result.arraylength);
result.newArray.forEach((d,i)=>{
     console.log(d);
    
})


