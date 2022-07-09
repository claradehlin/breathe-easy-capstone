const reasonBtn = document.getElementById("reasonButton")
const reasonForm = document.getElementById("reasonForm")

const getReason = (event) => {
    event.preventDefault()
    axios.get("http://localhost:4005/api/reason")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const addReason = (event) => {
    event.preventDefault()

    const reasonInput = document.getElementById("reason-input")
    

    const bodyObject = {
        reason: reasonInput.value
    }

    axios.post("http://localhost:4005/api/reason", bodyObject)
    .then(function (response) {
        alert('added your reason! :)')
    })
}

reasonBtn.addEventListener('click', getReason)
reasonForm.addEventListener('submit', addReason)
