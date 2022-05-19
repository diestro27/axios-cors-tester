import { del, get, post, put } from "./api.js";

const urlInput = document.querySelector("#url-input");
const dataArea = document.querySelector("#data-area");
const submit = document.querySelector("#submit");
const response = document.querySelector("#response");

submit.addEventListener("click", async function() {
    const method = document.querySelector("input[name='method']:checked")?.value;
    let output = "";
    try {
        let data = null;
        switch(method) {
            case "get":
                data = await get(urlInput.value);
                break;
            case "delete":
                data = await del(urlInput.value);
                break;
            case "post":
                data = await post(urlInput.value, JSON.parse(dataArea.value));
                break;
            case "put":
                data = await put(urlInput.value, JSON.parse(dataArea.value));
                break;
            default: 
                return;
        }
        output = JSON.stringify(data, null, 2);
    } catch (error) {
        output = error
        console.log(error);
    }
    response.innerHTML = `<pre>${output}</pre>`;
});