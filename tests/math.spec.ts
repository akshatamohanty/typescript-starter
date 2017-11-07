import { SimpleMath } from '../src/Math';

describe('simple-test', () => {

	it("simple-test", ()=>{
		expect(1+1).toBe(2);
	})

	it("simple-test2", ()=>{
		expect(1+4).toBe(5);
	})

	it("square", ()=>{
		expect( SimpleMath.square(25) ).toBe(625);
	})


})