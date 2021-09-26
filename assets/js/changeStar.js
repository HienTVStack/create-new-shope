

var likeElement = $(".home-product-item__action-like");
likeElement.onclick = function(){
    if(this.classList.contains("home-product-item__action-like--liked"))
        this.classList.remove("home-product-item__action-like--liked");
    else this.classList.add("home-product-item__action-like--liked")
}

