import {
    push,
    length,
    pop,
    shitf,
    unshitf,
    some,
    every,
    find,
} from './functions.js';

describe('Given the function lengt', () => {
    describe('When it receives the parameters aData,', () => {
        const aData = [4];
        let result;
        result = length(aData);
        test('Then it should return 1', () => {
            expect(result).toBe(1);
        });
    });
    describe('When it receives the parameters aData,', () => {
        const aData = undefined;
        test('Then it should return Error', () => {
            expect(() => some(length(aData))).toThrow();
        });
    });
});

describe('Given the function push', () => {
    describe('When it receives the parameters aData,', () => {
        const aData = [4];
        let result;
        let item = 2;
        let resultexpectec = aData.length + 1;
        result = push(aData, item);
        test('Then it should return resultexpectec', () => {
            expect(result).toBe(resultexpectec);
        });
    });
    describe('When it receives the parameters aData,', () => {
        const aData = [4];
        let result;
        let item = 3;
        let resultexpectec = aData.length + 1;
        result = push(aData, item);
        test('Then it should return resultexpectec', () => {
            expect(result).toBe(resultexpectec);
        });
    });
    describe('When it receives the parameters aData,', () => {
        const aData = [4, 5, 'juan'];
        let result;
        let item = 7;
        let resultexpectec = aData.length + 1;
        result = push(aData, item);
        test('Then it should return resultexpectec', () => {
            expect(result).toBe(resultexpectec);
        });
    });
    describe('When it receives the parameters aData,', () => {
        const aData = [4, 5, 'juan'];
        let result;
        let item = 3;
        let resultexpectec = aData.length + 1;
        result = push(aData, item);
        test('Then it should return resultexpectec', () => {
            expect(result).toBe(resultexpectec);
        });
    });
});

describe('Given the function pop', () => {
    describe('When it receives the parameters aData,', () => {
        const aData = [4, 3];
        let result;
        result = pop(aData);
        test('Then it should return 3', () => {
            expect(result).toBe(3);
        });
    });
    describe('When it receives the parameters aData,', () => {
        const aData = [4, 3];
        pop(aData);
        test('Then it should return 1', () => {
            expect(aData.length).toBe(1);
        });
    });
});

describe('Given the function shift', () => {
    describe('When it receives the parameters aData', () => {
        const aData = [4, 'Pedro', 34];
        let result;
        result = shitf(aData);
        test('Then it should return 4', () => {
            expect(result).toBe(4);
        });
    });
    describe('When it receives the parameters aData,', () => {
        const aData = [3, 'Jorge', null, 23];
        shitf(aData);
        test('Then it should return 3', () => {
            expect(aData.length).toBe(3);
        });
    });
});

describe('Given the function unshift', () => {
    describe('When it receives the parameters aData,', () => {
        const aData = [9, 4, 9];
        let item = 3;
        let result;
        result = unshitf(aData, item);
        test('Then it should return 4', () => {
            expect(result).toBe(4);
        });
    });
    describe('When it receives the parameters aData,', () => {
        const aData = [8, 9];
        let item = 6;
        let result;
        result = unshitf(aData, item);
        test('Then it should return 3', () => {
            expect(result).toBe(3);
        });
    });
    describe('When it receives the parameters aData,', () => {
        const aData = [8, 9];
        let item = undefined;
        test('Then it should return Error', () => {
            expect(() => unshitf(aData, item)).toThrow();
        });
    });
    describe('When it receives the parameters aData,', () => {
        const aData = undefined;
        let item = 2;
        test('Then it should return Error', () => {
            expect(() => unshitf(aData, item)).toThrow();
        });
    });
    describe('When it receives the parameters aData,', () => {
        const aData = 'Hola';
        let item = 2;
        test('Then it should return Error', () => {
            expect(() => unshitf(aData, item)).toThrow();
        });
    });
});

describe('Given the function some', () => {
    describe('When it receives the parameters aData,', () => {
        const aData = [4, 6];
        function condition(item) {
            return item > 5;
        }
        const result = some(aData, condition);
        test('Then it should return true', () => {
            expect(result).toBe(true);
        });
    });

    describe('When it receives the parameters aData,', () => {
        const aData = [4, 6];
        function condition(item) {
            return item < 2;
        }
        const result = some(aData, condition);
        test('Then it should return false', () => {
            expect(result).toBe(false);
        });
    });
    describe('When it receives the parameters aData,', () => {
        const aData = 'Ana';
        function condition(item) {
            return item < 2;
        }
        test('Then it should return Error', () => {
            expect(() => some(aData, condition)).toThrow();
        });
    });
});

describe('Given the function every', () => {
    describe('When it receives the parameters aData,', () => {
        const aData = [4, 4, 4];
        function condition(item) {
            return item < 5;
        }
        let result = every(aData, condition);
        test('Then it should return true', () => {
            expect(result).toBe(true);
        });
    });
    describe('When it receives the parameters aData,', () => {
        const aData = [4, 4, 4];
        function condition(item) {
            return item < 2;
        }
        let result = every(aData, condition);
        test('Then it should return false', () => {
            expect(result).toBe(false);
        });
    });
    describe('When it receives the parameters aData,', () => {
        const aData = 3;
        function condition(item) {
            return item < 2;
        }
        test('Then it should return Error', () => {
            expect(() => every(aData, condition)).toThrow();
        });
    });
    describe('When it receives the parameters aData,', () => {
        const aData = 'Atleti';
        function condition(item) {
            return item < 2;
        }
        test('Then it should return Error', () => {
            expect(() => every(aData, condition)).toThrow();
        });
    });
});

describe('Given the function find', () => {
    describe('When it receives the parameters aData,', () => {
        const aData = [23, 8, 5, 2];
        function condition(item) {
            return item < 9;
        }
        let result = find(aData, condition);
        test('Then it should return 8', () => {
            expect(result).toBe(8);
        });
    });
    describe('When it receives the parameters aData,', () => {
        const aData = [9, 2, 6, 1];
        function condition(item) {
            return item < 3;
        }
        let result = find(aData, condition);
        test('Then it should return 2', () => {
            expect(result).toBe(2);
        });
    });
    describe('When it receives the parameters aData,', () => {
        const aData = 'Hello';
        function condition(item) {
            return item < 2;
        }
        test('Then it should return Error', () => {
            expect(() => find(aData, condition)).toThrow();
        });
    });
});

// FUNCIÓN FILTER EN PRUEBAS
// describe('Given the function filter', () => {
//     describe('When it receives the parameters aData,', () => {
//         const aData = [3, 8, 5, 2];
//         function condition(item) {
//             return item < 6;
//         }
//         let result = find(aData, condition);
//         test('Then it should return 8', () => {
//             expect(result).toBe([3, 5, 2]);
//         });
//     });
// });
