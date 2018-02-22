const btn = document.querySelector('button');
const inputs = document.querySelectorAll('input');

const data = {};

console.log(inputs);

btn.addEventListener('click', handleClick);
inputs.forEach((input => input.addEventListener('change', handleChange)));

function handleClick(e) {
    //to prevent default action
    e.preventDefault();
    alert(`
        Hello! ${data.name} ${data.lastName}
        email: ${data.email}
    `);
}

function handleChange() {
    if(this.name == "name") data.name = this.value;
    if(this.name == "lastName") data.lastName = this.value;
    if(this.name == "email") data.email = this.value;
}

