const status = async () => {
    return new Promise(resolve => {
        resolve('it\'s complicated');
    });
}

module.exports = {
    status,
}
