import { push } from './functions.js';
import { length } from './functions.js';
import { pop } from './functions.js';
import { shitf } from './functions.js';
import { unshitf } from './functions.js';

describe('Given the function lengt', () => {
    const aData = [4];
    let result;
    result = length(aData);
    describe('When it receives the parameters aData,', () => {
        test('Then it should return 1', () => {
            expect(result).toBe(1);
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
        let item = 2;
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
        let item = undefined;
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
        test('Then it should return 1', () => {
            expect(aData.length).toBe(3);
        });
    });
});

describe('Given the function unshift', () => {
    describe('When it receives the parameters aData,', () => {
        const aData = [9, 4, 9];
        let date = 3;
        let result;
        result = unshitf(aData, date);
        test('Then it should return 4', () => {
            expect(result).toBe(4);
        });
    });
});
