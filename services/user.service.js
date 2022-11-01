// SDK upload images imagekit initialization
var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : "public_B0VLs1BRGZdeVcJoOakyshfxvaM=",
    privateKey : "private_7Dtbe0QeWObXL8gXfYJEe6SL8+A=",
    urlEndpoint : "https://ik.imagekit.io/fabianloaeza"
});

let users = [];

class UserService {
constructor (){}
create(user) {
    return new Promise((resolve, reject) => {

        const nameRandomImage = new Date().getTime().toString();
        imagekit.upload({
            file : user.sign, // base64
            fileName : nameRandomImage + ".jpg", //nombre + extension
          }, function(error, result) {
            if(error){
                reject(error);
            }
            //se crea el usuario luego de subir la imagen al proveedor
            users.push(user);
            user.sign = result.url; // cambiamos el valor por la url devuelta por el servicio que apunta la imagen publica
            user.id = users.length-1;

            resolve(user);
          });
    })
}
all() {
 return users;
}

}

module.exports = UserService;
