const spinner = document.querySelector(".spinner");

setTimeout(() => {
    spinner.style.opacity= '0';
    spinner.style.position= 'static';
    spinner.style.loader= 'none';
}, 1000);