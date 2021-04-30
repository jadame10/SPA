import $ from 'jquery';

export const cart = () => {
    const fragment = $(document.createDocumentFragment());
    const h2 = $('<h2>Your Cart</h2>');
 
           const table = $(`
           <div class = 'panel panel-default a0'>
           <div class = 'panel-body'>
                <table class = 't1'>
                <tr>
                <td class = 'price'>Nazwa (i cena) pokoju:</td>  
                <td class = 'price2'>Liczba dni:</td>      
                <td class = 'price3'>Cena:</td>                
                </tr>
              
                <tr class = 'results'>
                </tr>
                <tr class = 's'>
                    <td class = 'sum1'>
                    </td>
                </tr>
                </table>
                </div>
                </div>
                `) ;
              
           const table2 = $(`
           <div class = 'panel panel-default a1'>
           <div class = 'panel-body'>
                <table class = 't2'>
                <tr>
                <td class = 'price3'>Nazwa (i cena) zabiegu:</td>
                </tr>
                <tr class = 'resultss'>
               
                </tr>
                <tr class = 's2'>
                <td class = 'sum2'>
                </td>
                  </tr>
                  <tr>
                  </tr>
                </table>
                </div>
                </div>
                `) ; 
                const summary = $(`
                <div class = 's1'><div class= 'summary'><div class = 'log'></div></div>
                <div class = 'log2'><a href ='#'>ZAMAWIAM >> </a></div></div>
                `);

                var arrayOfCookies = [];
                    function parseCookieToArray()
                    {
                        var cookies   = document.cookie;
                        var arrayCookies = cookies.split('; ');
                        arrayCookies.map(function(originalValue){
                            var name  = originalValue.split('=')[0];
                            var value = originalValue.split('=')[1];
                            arrayOfCookies[name] = value;
                        });
                    }
                    parseCookieToArray();

              function Elements(){
                if(document.cookie){
                let keyName = Object.keys(arrayOfCookies);
                let values = Object.values(arrayOfCookies);
                for(let i= 0; i < keyName.length; i++){
                if(keyName[i].includes('b')){
                        var cl2 = document.createElement('td');
                        cl2.classList.add('result2');
                        $(table2).find('.resultss').append(cl2);
                       
                        var cz2 = document.createElement('td');
                        cz2.classList.add('delete');
                        $(table2).find('.resultss').append(cz2);

                        cl2.textContent = values[i];

                        var btn = document.createElement('button');
                        btn.innerText = 'x' + " " + " " + 'Usuń';
                        btn.classList.add('btn0');
                        let y =[]; 
                        y = $(table2).find('.delete');
                        cz2.append(btn);


            }
                    else if(!keyName[i].includes('b')){
                        var cl = document.createElement('td');
                            cl.classList.add('result');
                            $(table).find('.results').append(cl);

                            var cz = document.createElement('td');
                            cz.classList.add('delete');
                            $(table).find('.results').append(cz);

                            cl.textContent = values[i];
                            
                            var sump = [];
                            sump.push($('<td class = "sub">'));
                            $(table).find('.results').append(sump);

                            let inpt = [];
                            inpt.push($('<td class = "inpt">'));
                            $(table).find('.results').append(inpt);
                           
                            inpt.map((ind)=>{
                            let add = [];
                            add.push($('<input class="ticketNum" type="number" min = "0" max ="365" name="ticketNum" value="0" />'));
                            ind.append(add);
                            })

                            var btn = document.createElement('button');
                            btn.innerText = 'x' + " " + " " + 'Usuń';
                            btn.classList.add('btn0');
                            let y =[]; 
                            y = $(table).find('.delete');
                            cz.append(btn);
                    }
                 }                     
             }  
        }
        Elements();

                     let setEvent1 = () =>{
                     let a = $(table).find('button');
                    
                     for(let i = 0; i < a.length; i++){   
                        a[i].addEventListener('click', function(ev){
                                ev.preventDefault();
                                let k =$(this).parent().prev().text();
                                document.cookie = `NumerID${k[0]}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
                               $(this).parent().prev().empty();
                                $(this).parent().next().empty();
                                $(this).parent().next().next().empty();
                                $(this).remove();
                                 return false;
                    })
                    }
                }
                        setEvent1();

                        let setEvent2 = () =>{
                            let a = $(table2).find('button');
                        
                            for(let i = 0; i < a.length; i++){   
                            a[i].addEventListener('click', function(ev){
                                    ev.preventDefault();
                                    let k =$(this).parent().prev().text();
                                    document.cookie = `NumerID${k[0]+'b'}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
                                    $(this).parent().prev().empty();
                                    $(this).remove();
                                    return false;
                            
                                  })
                             }
                        }
                        setEvent2();

                    
                     var sum = 0;
                      let countSum = () =>{
                        var ev = $(table).find('.inpt > .ticketNum'); 
                        let evt = $(table).find(`.results > .result`);
                         let g =  $("<span>     </span>");
                         evt.append(g);
                        var even = evt.text().split('   ');
                        for(let i = 0; i < even.length-1; i++){  
                         even.join().split(', ');
                         var strr= even[i], mat=[];
                         if (typeof strr !== 'undefined') {
                          strr.match(/\d+/g).forEach(function(i,j){mat[j]=parseInt(i);});
                        }
                           ev[i].setAttribute("value", mat[2]);
                       
                        }

                        var matz= [];
                            evt = $(table).find(`.results > .result`);
                            even = evt.text().split('   ');

                           for(let i = 0; i < ev.length; i++){ 
                            var str= even.join();
                            if (typeof str !== 'undefined') {
                              str.match(/\d+/g).forEach(function(i,j){matz[j] = parseInt(i);});
                            }
                          }
                            var array = [];
                            var $this;
                            for(let i = 0; i < ev.length; i++){ 
                           
                            ev[i].addEventListener('change', function(event){
                            
                              $this = $(this);
                              let n = $this.parent().prev();  
                              for(let i = 1; i < matz.length-1; i+=3){ 
                                
                                array.push(matz[i]);
                          
                              }
                               n.text(array[i]*$this.val()+ " ");

                          let rekt = [];
                          rekt = rekt.concat($(table).find(`.results > .sub`).text().split(' '));
                         
                          for(let j = 0; j< rekt.length-1; j++){
                           rekt[j] = parseFloat(rekt[j]);
                          }
                              sum =rekt.reduce((a,b)=>{
                                  return a + b;
                                }, 0);
                             
                            $(table).find('.sum1').html('Suma cen pokojów wynosi: ' + sum + ' zł');

                      var sum2 = 0;
                      let  countSum2 = () =>{
                        let a = $(table2).find('.result2').text();
                       
                        
                        for(let i =0; i < a.length; i++){
                            let str= a, mats=[];
                            str.match(/\d+/g).forEach(function(i,j){mats[j]=parseInt(i);});
                            function isBigEnough(value) {
                                return value >= 15;
                              }
                            mats = mats.filter(isBigEnough);
                             sum2 = mats.reduce(function(a,b){
                                return a+b;
                            })
                        }
                        $(table2).find('.sum2').html('Suma cen zabiegów wynosi: ' + sum2 + ' zł');
                   
                         }
                      countSum2();


                         let countSummary = () =>{
                              var summ =0;
                                var string = [];
                                string.push(sum, sum2);

                                for(let j = 0; j< string.length; j++){
                                  string[j] = parseFloat(string[j]);
                                 }

                                 summ =string.reduce((a,b)=>{
                                  return a + b;
                                }, 0);
                                 
                                 $(summary).find('.log').html('Suma ogólna wynosi: ' + summ + ' zł');
                                 
                              }
                              countSummary();
                          })     
                        }
                        
                        let countSumm = () =>{
                          let values = Object.values(arrayOfCookies);
                          var ev = $(table).find('.inpt > .ticketNum'); 
                          let evt = $(table).find(`.results > .result`);
                           
                          var even = evt.text().split('   ');
                          console.log(even);
                          for(let i = 0; i < even.length-1; i++){  
                           even.join().split(', ');
                           var strr= even[i], mat=[];
                           if (typeof strr !== 'undefined') {
                            strr.match(/\d+/g).forEach(function(i,j){mat[j]=parseInt(i);});
                          }
                             ev[i].setAttribute("value", mat[2]);
                          
                            
                          }
                          for(let i = 0; i < ev.length; i++){ 
                            var str= even.join();
                            if (typeof str !== 'undefined') {
                              str.match(/\d+/g).forEach(function(i,j){matz[j] = parseInt(i);});
                            }
                          }
                          let n = ev.parent().prev(); 
                          for(let i = 1; i < matz.length-1; i+=3){ 
                                
                            array.push(matz[i]);
                            
                          }
                            for(let i =0; i < array.length; i++){
                              console.log(array[i] + " " + ev[i].value);
                           n[i].textContent = array[i]* ev[i].value+ " ";
                            }

                           values.map((val)=>{
                              let str= val, mats=[];
                              if (typeof str !== 'undefined') {
                              str.match(/\d+/g).forEach(function(i,j){mats[j]=parseInt(i);});
                              }
                             
                                for(let i =1; i < mats.length-1; i+=3){
                                sum += mats[i]*mats[i+1];
                              }
                            })

                               $(table).find('.sum1').html('Suma cen pokojów wynosi: ' + sum + ' zł');
                              
                          }
                        countSumm();

                      var sum2 = 0;
                      let  countSum22 = () =>{
                        let a = $(table2).find('.result2').text();
                       
                        for(let i =0; i < a.length; i++){
                            let str= a, mats=[];
                            str.match(/\d+/g).forEach(function(i,j){mats[j]=parseInt(i);});
                            function isBigEnough(value) {
                                return value >= 15;
                              }
                            mats = mats.filter(isBigEnough);
                             sum2 = mats.reduce(function(a,b){
                                return a+b;
                            })
                        }
                        $(table2).find('.sum2').html('Suma cen zabiegów wynosi: ' + sum2 + ' zł');
                   
                         }
                      countSum22(); 
                          
                        let countSummaryy = () =>{
                          var summ =0;
                            var string = [];
                            string.push(sum, sum2);

                            for(let j = 0; j< string.length; j++){
                              string[j] = parseFloat(string[j]);
                             }

                             summ =string.reduce((a,b)=>{
                              return a + b;
                            }, 0);
                             
                             $(summary).find('.log').html('Suma ogólna wynosi: ' + summ + ' zł');
                             
                          }
                          countSummaryy();
                         }
                      countSum();
                   

    fragment.append(h2);
    fragment.append(table);
    fragment.append(table2);
    fragment.append(summary);
    return fragment;
};