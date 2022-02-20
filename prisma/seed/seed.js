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
const database_1 = __importDefault(require("../../src/core/database"));
const minifaker_1 = __importDefault(require("minifaker"));
require("minifaker/locales/en");
const item = minifaker_1.default.domainName();
console.log(item);
function seedPublisher() {
    return __awaiter(this, void 0, void 0, function* () {
        const items = Array(10).fill(0).map(_ => ({ name: minifaker_1.default.domainName() }));
        console.log("Seeding publisher...");
        const promises = items.map(item => database_1.default.publisher.create({
            data: item
        }));
        yield Promise.all(promises);
        console.log("Publisher seeded");
    });
}
const seed = () => __awaiter(void 0, void 0, void 0, function* () {
    yield seedPublisher();
});
seed();
