
const Math = {
    add: (x, y) => x + y,
}

const Base = {
    greeting: (name) => console.log(`Welcome ${name}`),
}

function successRes(mess = '', result = {}, status = 200) {
    console.log(`{
            message : ${mess},
            result:${result},
            status:${status}
        }`);
}


module.exports = {
    Base, Math, successRes
}