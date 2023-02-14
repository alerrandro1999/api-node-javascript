const { PARTIALS_DIR, LAYOUTS_DIR, VIEWS_DIR } = require('./constants');
const exphbs = require("express-handlebars");

exports.init = function (app) {
    app.engine("html", exphbs.engine({
        extname: 'html',
        partialsDir: PARTIALS_DIR,
        layoutsDir: LAYOUTS_DIR,
        helpers: {
            section: function (name, options) {
                if (!this._sections) this._sections = {}
                this._sections[name] = options.fn(this);
                return null;
            }
        }
    })
    );
    app.set('view engine', 'html');
    app.set('views', VIEWS_DIR);
}