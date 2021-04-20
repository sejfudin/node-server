const { root, text, html } = require('./controller');
const router = app => {
    app.get('/', root)
    app.get('/text', text)
    app.get('/text/:param', text)


    app.get('/html', html)
    app.get('/html/:param', text)

}
module.exports = router;
