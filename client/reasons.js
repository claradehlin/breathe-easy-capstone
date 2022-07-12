const reasonBtn = document.getElementById("reasonButton")
const reasonForm = document.getElementById("reasonForm")

const getReason = (event) => {
    event.preventDefault()
    axios.get("https://breathe-easy-capstone.herokuapp.com/api/reason")
    .then(res => {
        const data = res.data;
            console.log(res.data)
            alert(data[Math.floor(Math.random() * res.data.length + 1)].reason);
    });
};

const addReason = (event) => {
    event.preventDefault()

    const reasonInput = document.getElementById("reason-input")
    

    const bodyObject = {
        reason: reasonInput.value
    }

    axios.post("https://breathe-easy-capstone.herokuapp.com/api/reason", bodyObject)
    .then(function (response) {
        alert('added your reason! :)')
    })
}

reasonBtn.addEventListener('click', getReason)
reasonForm.addEventListener('submit', addReason)
