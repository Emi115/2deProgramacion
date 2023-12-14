var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function searchPokemon() {
    return __awaiter(this, void 0, void 0, function () {
        var input, name, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = document.getElementById('pokemon-input');
                    name = input.value.toLowerCase();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("https://pokeapi.co/api/v2/pokemon/".concat(name))];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    displayPokemonInfo(data);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    displayError();
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function displayPokemonInfo(pokemon) {
    var image = document.getElementById('pokemon-image');
    image.src = pokemon.sprites.front_default;
    image.alt = "Imagen de ".concat(pokemon.name);
    var name = document.getElementById('pokemon-name');
    name.textContent = "Nombre: ".concat(pokemon.name);
    var type = document.getElementById('pokemon-type');
    type.textContent = "Tipo: ".concat(pokemon.types.map(function (t) { return t.type.name; }).join(', '));
    var statsList = document.getElementById('pokemon-stats-list');
    statsList.innerHTML = '';
    pokemon.stats.forEach(function (stat) {
        var statItem = document.createElement('li');
        statItem.textContent = "".concat(traducirStat(stat.stat.name), ": ").concat(stat.base_stat);
        statsList.appendChild(statItem);
    });
    var movesSelect = document.getElementById('pokemon-moves-select');
    movesSelect.innerHTML = '';
    pokemon.moves.slice(0, 5).forEach(function (move) {
        var moveOption = document.createElement('option');
        moveOption.value = move.move.name;
        moveOption.textContent = move.move.name;
        movesSelect.appendChild(moveOption);
    });
}
function displayError() {
    // Aquí puedes agregar la lógica para mostrar un mensaje de error en la interfaz de usuario
}
function traducirStat(statName) {
    switch (statName) {
        case 'hp':
            return 'PS';
        case 'attack':
            return 'Ataque';
        case 'defense':
            return 'Defensa';
        case 'special-attack':
            return 'Ataque Especial';
        case 'special-defense':
            return 'Defensa Especial';
        case 'speed':
            return 'Velocidad';
        default:
            return statName;
    }
}
