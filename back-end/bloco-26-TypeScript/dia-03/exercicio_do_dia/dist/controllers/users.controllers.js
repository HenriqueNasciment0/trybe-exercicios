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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const users_services_1 = __importDefault(require("../services/users.services"));
class UsersController {
    constructor(usersService = new users_services_1.default()) {
        this.usersService = usersService;
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.usersService.getAll();
            res.status(http_status_codes_1.StatusCodes.OK).json(users);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const user = yield this.usersService.getById(id);
            if (!user) {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND)
                    .json({ message: 'User not found!' });
            }
            res.status(http_status_codes_1.StatusCodes.OK).json(user);
        });
    }
}
exports.default = UsersController;
