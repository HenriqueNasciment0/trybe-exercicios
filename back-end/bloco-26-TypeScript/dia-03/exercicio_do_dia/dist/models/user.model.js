"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class UsersModel {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection
                .execute('SELECT * FROM TypeScriptExpress.Users');
            const [rows] = result;
            return rows;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection
                .execute('SELECT * FROM TypeScriptExpress.Users WHERE id=?', [id]);
            const [rows] = result;
            const [user] = rows;
            return user;
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = user;
            const result = yield this.connection.execute('INSERT INTO books (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
            const [dataInserted] = result;
            const { insertId } = dataInserted;
            return Object.assign({ id: insertId }, user);
        });
    }
}
exports.default = UsersModel;
