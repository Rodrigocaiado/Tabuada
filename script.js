function gerar(){
    let n = document.getElementById('inum')
    let tab = document.getElementById('itab')

    if(n.value.length == 0){
        window.alert('[ERRO] Você tem que digitar um número.')
    } else {
        let n1 = Number(n.value)
        tab.innerHTML = ''
        for(let c = 0; c <=10; c++){
            let item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            tab.appendChild(item)
        }
    }
}