var staffsArray = [
    {
        "":"",
        "name":"William Tony",
        "department":"HR",
        "phone":"+254798765432",
        "email":"tonywilliam@gmail.com"
    },
    {
        "":"",
        "name":"Alfred Juma",
        "department":"Sales",
        "phone":"+254798765432",
        "email":"alfredjuma@gmail.com"
    },
    {
        "":"",
        "name":"Gabriel Wekesa",
        "department":"Support",
        "phone":"+254798765432",
        "email":"gabrielwekesa@gmail.com"
    },
    {
        "":"",
        "name":"Lyne Wanjiku",
        "department":"Accounts",
        "phone":"+254798765432",
        "email":"lynewanjiku@gmail.com"
    },
    {
        "":"",
        "name":"Candy Synclare",
        "department":"HR",
        "phone":"+254798765432",
        "email":"candysynclare@gmail.com"
    }
]

var table = $('#staff-table').DataTable({
    "data": staffsArray,
    pagingType: "simple",
    pageLength: 5,
    "columns": [
        {"data": ""},
        {"data": "name"},
        {"data": "department"},
        {"data": "phone"},
        {"data": "email"}
    ],
    'columnDefs': [
       {
            'targets': 0,
            'checkboxes': {
                'selectRow': true
            }
       },
    ],
    'select': {
       'style': 'multi',
       "selector": 'td:first-child'
    },
    'order': [[1, 'asc']],
 })

 var handleBulkSelect = {
    checkboxes: document.querySelectorAll(".dt-checkboxes"),
    selectedData: table.columns().checkboxes.selected().data().toArray(),
    listenStateChange: function(){
        this.checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("click", async() => {
                console.log(this.selectedData)
                document.querySelector(".staff-plus").classList.add("d-none")
                if (this.selectedData.length === 0) {
                    document.querySelector(".staff-plus").classList.remove("d-none")
                }
            })
        })
    }
 }
 handleBulkSelect.listenStateChange()
