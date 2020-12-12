import {expect} from 'chai';
import {describe} from 'mocha';
import fizzbuzz from "./fizzbuzz";

describe('test fizzbuzz with new requirements', () => {
    it('should return 1 for 1', function () {
        expect(fizzbuzz(1)).to.equal('1');
    });
    it('should return Boom for 2', ()=>{
        expect(fizzbuzz(2)).to.equal('Boom');
    });
    it('should return FizzBang for 3', function () {
        expect(fizzbuzz(3)).to.equal('FizzBang');
    });
    it('should return Buzz for 5', function () {
        expect(fizzbuzz(5)).to.equal('Buzz');
    });
    it('should return Bing for 7', function () {
        expect(fizzbuzz(7)).to.equal('Bing');
    });
    it('should return Fizz for 12', ()=>{
        expect(fizzbuzz(12)).to.equal('Fizz');
    });
    it('should return Bang for 13', ()=>{
        expect(fizzbuzz(13)).to.equal('Bang');
    });
    it('should return FizzBuzz for 15', function () {
        expect(fizzbuzz(15)).to.equal('FizzBuzz');
    });
    it('should return BuzzBoom for 20', function () {
        expect(fizzbuzz(20)).to.equal('BuzzBoom');
    });
    it('should return FizzBingBoom for 21', function () {
        expect(fizzbuzz(21)).to.equal('FizzBingBoom');
    });
    it('should return BangBoom for 23', function () {
        expect(fizzbuzz(23)).to.equal('BangBoom');
    });
    it('should return FizzBang for 33', function () {
        expect(fizzbuzz(33)).to.equal('FizzBang');
    });
    it('should return BuzzBingBang for 35', function () {
        expect(fizzbuzz(35)).to.equal('BuzzBingBang');
    });
    it('should return FizzBing for 42', function () {
        expect(fizzbuzz(42)).to.equal('FizzBing');
    });
    it('should return FizzBingBang for 63', function () {
        expect(fizzbuzz(63)).to.equal('FizzBingBang');
    });
    it('should return BuzzBing for 70', function () {
        expect(fizzbuzz(70)).to.equal('BuzzBing');
    });
    it('should return FizzBuzzBing for 105', function () {
        expect(fizzbuzz(105)).to.equal('FizzBuzzBing');
    });
    it('should return BuzzBang for 130', function () {
        expect(fizzbuzz(130)).to.equal('BuzzBang');
    });
    it('should return FizzBuzzBingBoom for 210', function () {
        expect(fizzbuzz(210)).to.equal('FizzBuzzBingBoom');
    });
    it('should return FizzBuzzBingBang for 315', function () {
        expect(fizzbuzz(315)).to.equal('FizzBuzzBingBang');
    });
    it('should return FizzBuzzBingBangBoom for 2310', function () {
        expect(fizzbuzz(2310)).to.equal('FizzBuzzBingBangBoom');
    });
});