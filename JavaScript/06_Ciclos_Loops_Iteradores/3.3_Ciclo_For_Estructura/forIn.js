// for IN

const auto = {
    modelo: 'Duster',
    year: 2019,
    motor: 1.6
}

// No es posible con la sitaxis de punto

for(let v in auto){
    console.log(auto[v])
}


// for() para obj
for(let [k, v] of Object.entries(auto)){
    console.log(k)

}


