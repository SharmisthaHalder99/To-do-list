let input = document.getElementById("searchinput")
let b1 = document.getElementById("searchicon")
b1.addEventListener("click", () => {

    item()
    document.getElementById("searchinput")
        .value = ""
})
const item = () => {
    let value = document.getElementById("searchinput")
        .value
    if (input.value.trim() != "") {
        let data = document.createElement("div")
        data.id = "showitem"
        data.className = "show"
        document.getElementById("list")
            .appendChild(data)
        let del_b2 = document.createElement("button")
        del_b2.id = "delete"
        del_b2.innerText = "Delete"

        del_b2.addEventListener('click', () => {
            document.getElementById("list")
                .removeChild(del_b2.parentNode)
        })

        let spann = document.createElement('span')
        spann.id = 'span-data'
        spann.innerText = value
        data.appendChild(spann)

        let editbtn = document.createElement('button')
        editbtn.id = 'edit-btn'
        editbtn.innerText = 'Edit'

        data.appendChild(editbtn)
        data.appendChild(del_b2)

        input.value = ""
        let inputed = document.createElement('input')
        inputed.id = 'input-edit'

        editbtn.addEventListener('click', (e) => {
            if (editbtn.innerText == 'Edit') {
                let v = spann.innerText
                inputed.value = v
                editbtn.innerText = 'Save'
                console.log(v);
                data.replaceChild(inputed, spann)

            } else {
                if (inputed.value.trim() != "") {
                    spann.innerText = inputed.value
                    editbtn.innerText = 'Edit'
                    data.replaceChild(spann, inputed)
                } else {
                    alert('cant be empty')
                }
            }

        })


    }

}

input.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        item()
    }
})