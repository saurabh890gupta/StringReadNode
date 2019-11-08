
module.exports.change=(str,searchKey,highlite,style)=>{
            // console.log(highlite)
            var startPostion;
            var searchString=[];
            var allData=[];
            var res;
            var arraylength
            let array = [...str.matchAll(searchKey)];
            //  console.log(array);
            array.forEach((d,i)=>{
                var pos=array[i].index
                for(var h=pos;h>=0;h--){  
                        if(str[h]=='.'){       
                            var dotPostion=h+1;  
                            startPostion=dotPostion;
                            break;
                        }else if(str.indexOf(str[h])==-1){ 
                            console.log("fdfdfdfd",str[h])
                            startPostion=str.indexOf(str[h]);
                            break;
                        }
                }
                var EndPostion=str.indexOf(".", pos);
                var getString=str.slice(startPostion,EndPostion+1);
                //   console.log(data)
                searchString.push(getString);
            })
            //  console.log("paragraph",searchString.length);
             arraylength=searchString.length
            // console.log("hello",searchString)
            searchString.forEach((data,ind)=>{
                // console.log("hello",ind,data)
                if(highlite==''){
                res = searchString[ind].replace(searchKey,`"${searchKey}"` );
                }
                else if(highlite=="<h1>")
                {
                    var delight="</h1>"
                    res = searchString[ind].replace(searchKey,`${highlite}${searchKey}${delight}` );
                }
                else if(highlite=="<p>"){        
                    var para="</p>"
                    res = searchString[ind].replace(searchKey,`${highlite}${searchKey}${para}` );
                }
                else if(highlite=="colour"){     
                    res = searchString[ind].replace(searchKey,`<span style='color: " ${style.colour} "; font-waight:"${style.weight}"'>${searchKey}</span>` );
                }
                //  console.log(res)
                 allData.push(res)
            })

            var newArray=[];
            let unique = [...new Set(allData)];
            unique.forEach((j)=>{
                //  console.log(j);
                newArray.push(j)
                
            })
             return {newArray,arraylength}
}

