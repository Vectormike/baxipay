"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../../index"));
require('ts-mocha');
const baxipay = new index_1.default("5adea9-044a85-708016-7ae662-646d59");
describe('Epins', () => {
    describe('Epins processing', () => {
        it('Should fetch all epin providers', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield baxipay.epin.fetchEpinProviders();
        }));
        it('Should fetch Available Epin Bundles for Bundle Providers', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield baxipay.epin.fetchEpinBundle("glo");
        }));
        it('Should Request data from the provider.', () => __awaiter(this, void 0, void 0, function* () {
            const result = yield baxipay.epin.requestEpinBundle("glo", 1, 100, 100, 207, "AX14s68P2Z");
        }));
    });
});
//# sourceMappingURL=epins.test.js.map