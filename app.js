
$('#createTender').on('click', function(){
    $("#message").fadeIn(100)
    
});

$('#close').on('click',function(){
    $('#verify').fadeOut(100)
})


$('#first').on('click',function(){
    
    fetch("/kved.json")
.then(function(resp){
    return resp.json();
})
.then(function(data){
    

for(let h = 0; h < data.data.length; h++){
    $('<option/>', {
        text: `${data.data[h].section}. ${data.data[h].section_name}`
        }).appendTo('#first');
}
$('#first').on('change',function(){
    $('#second').empty()
    for(let i = 0; i < data.data.length; i++){
        if($('#first option:selected').text() === `${data.data[i].section}. ${data.data[i].section_name}`){
            let res = Object.values(data.data[i])[2];
            for(let j = 0; j < res.length; j++){
                $('<option/>', {
                    text: `${res[j].group}. ${res[j].name}`
                    }).appendTo('#second');
            }
            $('#second').on('click',function(){
                $('#third').empty();
                console.log($('#second option:selected').text())
                for(let k = 0; k < res.length; k++){
                if($('#second option:selected').text() === `${res[k].group}. ${res[k].name}`){
                    let res1 = Object.values(res[k])[2];
                    console.log(res1)
                    for(let r = 0; r < res1.length; r++){
                        $('<option/>', {
                            text: `${res1[r].kved}. ${res1[r].name}`
                            }).appendTo('#third');
                    }
                }
                }
            })
        }
        
        
    }
})
})
})

$('#add').on('click', function() {
    $('#adds').fadeIn(100)
})
$('#saveDataAdd').on('click', function(){
    $('#adds').fadeOut(100)
    $('#addCreate').removeClass('btn btn-outline-secondary');
    $('#addCreate').addClass('btn btn-primary');
})



$('#kved').on('click', function(){
    $('#sect').fadeIn(100);
    fetch("/kved.json")
.then(function(resp){
    return resp.json();
})
.then(function(data){
    
console.log(data.data)
for(let h = 0; h < data.data.length; h++){
    $('<button/>', {
        id: 'b',
        class: 'btn btn-outline-primary',
        text: `${data.data[h].section}. ${data.data[h].section_name}`
        }).appendTo('#mainSect');
}
$('#mainSect button').on('click', function(){
    $('#sect').fadeOut(50);
    $('#sect1').fadeIn(50);

    for(let i = 0; i < data.data.length; i++){
        if($(this).text() === `${data.data[i].section}. ${data.data[i].section_name}`){
            let res = Object.values(data.data[i])[2];
            console.log(res)
            for(let j = 0; j < res.length; j++){
                console.log(res[j].name)
                $('<button/>', {
                class: 'btn btn-outline-primary',
                text: `${res[j].group}.${res[j].name}`
                }).appendTo('#mainSect1');
            }
            $('#mainSect1 button').on('click', function(){
                $('#sect2').fadeIn(100);
                $('#sect1').fadeOut(50);
                console.log($(this).text())
                for(let k = 0; k < res.length; k++){
                    if($(this).text() === `${res[k].group}.${res[k].name}`){
                        let res1 = Object.values(res[k])[2];
                        //  console.log(res1)
                         for(let g = 0; g < res1.length; g++){
                            $('<button/>', {
                                id: 's',
                                class: 'btn btn-outline-primary',
                                text: `${res1[g].kved}.${res1[g].name}`
                                }).appendTo('#mainSect2');
                         }
                         $('#mainSect2 button').on('click', function(){
                            $('#sect2').fadeOut(10);
                            $('#tender').removeClass();
                            $('#tender').addClass('btn btn-primary');
                            
                        })
                    }
                }
                
            })

        }
    }
})
});
})


