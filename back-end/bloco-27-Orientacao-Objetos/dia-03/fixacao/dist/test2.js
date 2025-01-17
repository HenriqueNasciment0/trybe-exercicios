"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const db = [];
class LocalDbModel {
    constructor() {
        this.create = (character) => __awaiter(this, void 0, void 0, function* () {
            const lastId = db.length > 0 ? db[db.length - 1].id : 0;
            const newCharacter = Object.assign({ id: lastId + 1 }, character);
            db.push(newCharacter);
            return newCharacter;
        });
        this.findIndexById = (id) => {
            const index = db.findIndex((character) => character.id === id);
            if (index < 0)
                throw new Error('Character not found');
            return index;
        };
        this.update = (id, character) => __awaiter(this, void 0, void 0, function* () {
            const indexToUpdate = this.findIndexById(id);
            db[indexToUpdate] = Object.assign({}, db[indexToUpdate], character);
            return db[indexToUpdate];
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const indexToDelete = this.findIndexById(id);
            const deletedItem = db.splice(indexToDelete, 1);
            if (deletedItem.length > 0)
                return true;
            return false;
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () { return db; });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const indexToGet = this.findIndexById(id);
            return db[indexToGet];
        });
    }
}
class CharacterService {
    constructor(model) {
        this.model = model;
    }
    create(character) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCharacter = yield this.model.create(character);
            return ({ status: 201, data: newCharacter });
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const allCharacter = yield this.model.getAll();
            return ({ status: 200, data: allCharacter });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteCharacter = yield this.model.delete(id);
            return ({ status: 200, data: deleteCharacter });
        });
    }
    update(id, character) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateCharacters = yield this.model.update(id, character);
            return ({ status: 200, data: updateCharacters });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const getCharacterById = yield this.model.getById(id);
            return ({ status: 200, data: getCharacterById });
        });
    }
}
class MockDbModel {
    create(character) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('character created');
            return { id: 1, name: 'Peach', specialMove: 'Toad' };
        });
    }
    update(id, character) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('character updated');
            return { id: 1, name: 'Yoshi', specialMove: 'Egg Lay' };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('character deleted');
            return true;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return [
                { id: 1, name: 'Samus', specialMove: 'Charge Shot' },
                { id: 2, name: 'Kirby', specialMove: 'Inhale' },
            ];
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return { id: 1, name: 'Mario', specialMove: 'Fireball' };
        });
    }
}
const character1 = new CharacterService(new LocalDbModel);
const character2 = new CharacterService(new MockDbModel);
character1.getAll().then(console.log);
character2.getAll().then(console.log);
