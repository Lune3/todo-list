function createP(text,className = ""){
    const p = document.createElement("p");
    p.textContent = `${text}`;
    p.className = `${className}`;
    return p;
}

function createHeading(number,text,className = ""){
    switch(number){
        case 1:
            const h1 = document.createElement("h1");
            h1.textContent = `${text}`;
            h1.className = `${className}`;
            return h1;
        case 2:
            const h2 = document.createElement("h2");
            h2.textContent = `${text}`;
            h2.className = `${className}`;
            return h2;
        case 3:
            const h3 = document.createElement("h3");
            h3.textContent = `${text}`;
            h3.className = `${className}`;
            return h3;
    }
}

function createImg(src){
    const img = new Image();
    img.src = src;
    return img;
}

export {createP,createHeading,createImg};