let qr = document.querySelector(".imgbox");
let qrimage = document.querySelector("#qrimage")
let text = document.querySelector("#qrtext")

function generate(){
    if(text.value.length > 0){
        qrimage.src =  " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;
    qr.classList.add("show-img")
    }else{
        text.classList.add('error');
        setTimeout(() => {
        text.classList.remove("error")
        }, 1000);
    }
    
}