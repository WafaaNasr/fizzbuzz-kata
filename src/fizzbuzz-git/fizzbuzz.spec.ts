import {expect} from 'chai';
import {describe} from 'mocha';
import fizzbuzz from "./fizzbuzz";

describe('test fizzbuzz with new requirements', () => {
    it('should return 1 for 1', function () {
        expect(fizzbuzz(1)).to.equal('1');
    });
    it('should return 2 for 2', function () {
        expect(fizzbuzz(2)).to.equal('2');
    });
    it('should return Fizz for 3', function () {
        expect(fizzbuzz(3)).to.equal('Fizz');
    });
    it('should return Buzz for 5', function () {
        expect(fizzbuzz(5)).to.equal('Buzz');
    });
});