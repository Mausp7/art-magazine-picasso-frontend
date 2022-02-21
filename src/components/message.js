const message = (text, duration=5000) => {

    const id = text.split(" ").join("-");
    
    document.getElementById("root").insertAdjacentHTML("beforeend", `<div id="${id}" onclick="document.getElementById('${id}').classList.add('message-hidden')" class="message message-hidden" >${text}</div>`);
    const message = document.getElementById(id);
    
    setTimeout(() => {
        message.classList.remove("message-hidden")
    }, 100);

    setTimeout(() => {
        message.classList.add("message-hidden")
    }, duration - 500);

    setTimeout(() => {
        message.remove();
    }, duration);
    return;
};

export default message;