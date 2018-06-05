    var myId = ""
    var UserList = []
    
    // Login User's time selection
    var mySelection = []
    
    // Other People's selection
    var otherSelection = []
    
    var weekdays = ['', 'Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

    function addCol(rowid, iter, text){
        $(`#tr${rowid}`).append(`<td id=td${rowid}_${iter} onclick='cellclick(this)' align='center'>${text}</td>`)
    }

    function addRow(iter){
        $("#main_table").append(`<tr id='tr${iter}'></tr>`)
        for(let i = 0; i < 8; i++){
            let text = ''
            if(i == 0){
                text = iter+":00"
            }
            addCol(iter, i, text)
        }
    }

    function addWeekday(){
        $("#main_table").append(`<tr id='tr_weekdays'></tr>`)
        for(let i = 0; i < 8; i++){
            addCol('_weekdays', i, weekdays[i])
        }
    }

    function cellclick(obj){
        console.log(obj)
    }

    
        addWeekday()
        // TODO 늦은 시간 안보이기 기능 추가. row번호는 시간에 따름.
        for(let i = 0; i < 24; i++){
            addRow(i)
        }
