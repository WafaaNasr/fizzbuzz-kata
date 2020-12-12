
export default (input: number): string => {
    let output = '';

    if ( input % 3 === 0 ) {
        output += 'Fizz';
    }
    if ( input % 5 === 0 ) {
        output += 'Buzz';
    }
    if ( input % 7 === 0 ) {
        output += 'Bing';
    }
    const inputAsString = String ( input );

    const contains3 = inputAsString.includes ( '3' );
    if ( contains3 ) {
        output += 'Bang'
    }

    const startWith2 = inputAsString.startsWith ( '2' );
    if ( startWith2 ) {
        output += 'Boom'
    }
    return output || String ( input );
}


////////---- StartWith & ContainsNumber Method? ---////////

// ===>>> Functional Programming?  Currying

const startWith2 =( input : number) => startWith ( input , 2 )

// Main Method
const startWith = ( input :number , startWithNum ) :boolean => {
    // I think it would be better to remove the String casting?
    return String(input).startsWith(startWithNum);
}


////////---- DivisbleBy ----//////


// 1. Currying?

const divisbleByThree=(input: number)=>{
    return divisbleByNum(input, 3);
}

const divisbleByNum= (input: number, divisbleBy:number):boolean=>{
    return  input%divisbleBy ===0;
}


