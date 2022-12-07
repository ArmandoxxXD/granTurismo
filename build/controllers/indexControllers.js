"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, resp) {
        resp.send('H3llo');
    }
}
exports.indexController = new IndexController; //Instaciar a la clase IndexController
