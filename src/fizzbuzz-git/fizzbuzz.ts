// Defines a role for a class
// Applying Interface Segg
interface Command {
    execute():string;
}

class Fizz implements  Command{
    private input : number;

    constructor( input : number ) {
        this.input = input;
    }

    execute() : string {
        return this.input % 3 === 0 ? 'Fizz' : '';
    }
}

class Buzz  implements  Command{
    private input : number;
    constructor( input : number ) {
        this.input = input;
    }

    execute() : string {
        return this.input % 5 === 0 ? 'Buzz' : '';
    }
}

class Output {
    private readonly input : number;
    // Applying Dependency Inversion
    private readonly commands: Command[]

    constructor( input : number , ...commands: Command[]) {
        this.input = input;
        this.commands = commands;
    }
    toString(){
        let output='';
        this.commands.forEach(command=>
            output += command.execute());
        return output || String(this.input);
    }

}

export default ( input : number ) : string => {

    const fizz = new Fizz ( input );
    const buzz = new Buzz ( input );
    const output = new Output(input, fizz, buzz) ;

    return output.toString();
}

