var mynunrep = /^[a-zA-Z0-9]{6}$/; 
function numrep(num){
    return mynunrep.test(num);
}

module.exports = {
  numrep: numrep
}