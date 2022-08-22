"use strict"

const hours = document.querySelectorAll(".hours")
const previous = document.querySelectorAll(".previous")

const daily = document.getElementById("daily")
const weekly = document.getElementById("weekly")
const monthly = document.getElementById("monthly")

class GetData {
    getDaily = () => {
        fetch("data.json")
            .then((response) => {
                if(!response.ok) {
                    throw new Error("Information not found!")
                } 
                return response.json()
            })
            .then((data) => {
                for(let i = 0; i < data.length; i++){
                    hours[i].innerText = `${data[i].timeframes.daily.current}hrs`
                    previous[i].innerText = `Last Day - ${data[i].timeframes.daily.previous}hrs`
                }
            })
            .catch((err) => errorMessage(err))
    }
    getWeekly = () => {
        fetch("data.json")
            .then((response) => {
                if(!response.ok) {
                    throw new Error("Information not found!")
                }
                return response.json()
            })
            .then((data) => {
                for(let i = 0; i < data.length; i++){
                    hours[i].innerText = `${data[i].timeframes.weekly.current}hrs`
                    previous[i].innerText = `Last Week - ${data[i].timeframes.weekly.previous}hrs`
                }
            })
            .catch((err) => errorMessage(err))
    }
    getMonthly = () => {
        fetch("data.json")
            .then((response) => {
                if(!response.ok){
                    throw new Error("Information not found!")
                } 
                return response.json()
            }) 
            .then((data) => {
                for(let i = 0; i < data.length; i++){
                    hours[i].innerText = `${data[i].timeframes.monthly.current}hrs`
                    previous[i].innerText = `Last Month - ${data[i].timeframes.monthly.previous}hrs`
                }
            })
            .catch((err) => errorMessage(err))
    }
}

const errorMessage = (err) => {
    console.log(err.message)
}

const request = new GetData();
request.getDaily()

daily.addEventListener("click", request.getDaily)
weekly.addEventListener("click", request.getWeekly)
monthly.addEventListener("click", request.getMonthly)


