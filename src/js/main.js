import $ from 'jquery'
import "../scss/style.scss"
import "bootstrap"
import "datatables.net"
import "datatables.net-dt"

var clientsArray = [
    {
        "id":"1",
        "name":"Panthera Nestah",
        "email":"pantheranestah@gmail.com",
        "phone":"+254798765432"
    },
    {
        "id":"2",
        "name":"Niesta Charlotte",
        "email":"niestacharlotte@gmail.com",
        "phone":"+254798765432"
    },
    {
        "id":"3",
        "name":"Gift Nestah",
        "email":"giftnestah@gmail.com",
        "phone":"+254798765432"
    },
    {
        "id":"4",
        "name":"Ubuntu Nestah",
        "email":"ubuntunestah@gmail.com",
        "phone":"+254798765432"
    },
    {
        "id":"5",
        "name":"Dave Gray",
        "email":"dgray@gmail.com",
        "phone":"+254798765432"
    },
    {
        "id":"6",
        "name":"Mosh Hermedani",
        "email":"moshhermedani@gmail.com",
        "phone":"+254798765432"
    },
    {
        "id":"7",
        "name":"Marlyne Williams",
        "email":"marlynewilliams@gmail.com",
        "phone":"+254798765432"
    },
    {
        "id":"8",
        "name":"Clare Linton",
        "email":"clarelinton@gmail.com",
        "phone":"+254798765432"
    },
    {
        "id":"9",
        "name":"Syokau Mbith",
        "email":"syokau01@gmail.com",
        "phone":"+254798765432"
    },
    {
        "id":"10",
        "name":"Candy Synclare",
        "email":"candy02@gmail.com",
        "phone":"+254798765432"
    }
]
var projsArray = [
    {
        "id": "1",
        "name": "Urban Oasis Realty",
        "value": "30.1M",
        "clients": "15"
    },
    {
        "id": "2",
        "name": "Haven Homes",
        "value": "22.1M",
        "clients": "23"
    },
    {
        "id": "3",
        "name": "Villagreen Homes",
        "value": "24M",
        "clients": "11"
    },
    {
        "id": "4",
        "name": "Downtown Eden",
        "value": "18M",
        "clients": "27"
    },
    {
        "id": "5",
        "name": "Cityscape Properties",
        "value": "44M",
        "clients": "19"
    },
    {
        "id": "6",
        "name": "Oakwood Real Estate",
        "value": "47M",
        "clients": "13"
    },
    {
        "id": "7",
        "name": "Maplewood Realty",
        "value": "22M",
        "clients": "14"
    },
    {
        "id": "8",
        "name": "Harmony Homes",
        "value": "19M",
        "clients": "27"
    },
    {
        "id": "9",
        "name": "Mountain View Realty",
        "value": "27M",
        "clients": "17"
    },
    {
        "id": "10",
        "name": "Parkside Properties",
        "value": "17M",
        "clients": "21"
    }
]
$(document).ready(() => {
    $("#clientsTable").DataTable(
        {
            data: clientsArray,
            columns: [
                {data: "id"},
                {data: "name"},
                {data: "email"},
                {data: "phone"}
            ]
        }
    )
    $("#projTable").DataTable(
        {
            data: projsArray,
            columns: [
                {data: "id"},
                {data: "name"},
                {data: "value"},
                {data: "clients"}
            ]
        }
    )
})
