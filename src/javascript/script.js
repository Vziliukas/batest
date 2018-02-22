const btn = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const data = {};

btn.addEventListener('click', handleClick);
inputs.forEach((input => input.addEventListener('change', handleChange)));
inputs.forEach((input => input.addEventListener('keyup', handleChange)));

function handleClick(e) {
    //to prevent default action
    e.preventDefault();
     {
        alert(`
        Hello! ${data.name} ${data.lastName}
        email: ${data.email}
    `);
    }
}

function handleChange() {
    const regexp = new RegExp('@', '\gi');
    if(this.name == "name") data.name = this.value;
    if(this.name == "lastName") data.lastName = this.value;
    if(this.name == "email") data.email = this.value;
    if (data.name && data.lastName && regexp.test(data.email)){
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

