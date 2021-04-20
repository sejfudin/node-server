const root = (req, res) => {
    console.log(req.url);
    res.end('Home Page is comming!');
}
const text = (req, res) => {
    console.log(req.url);
    const param = req.params.param || 'Text';
    res.end(`Hello ${param} Server!`);
}
const html = (req, res) => {
    console.log(req.url);
    const param = req.params.param || 'Html';
    res.end(`<h1>Hello ${param} Server!</h1>`);
}

module.exports = { root, text, html };