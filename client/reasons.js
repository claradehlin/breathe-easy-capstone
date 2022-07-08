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
reasonBtn.addEventListener('click', getReason)
