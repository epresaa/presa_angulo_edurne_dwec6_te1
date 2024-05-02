// Clase Empleado: clase que se usará para instanciar objetos Empleado  
export class Empleado {
    // Atributos
    public idEmpleado: number;
    public email: string;
    public nombre: string;
    public apellido: string;
    public fotoperfil: string;

    // Constructor
    constructor(idEmpleado: number, email: string, nombre: string, apellido: string, fotoperfil: string) {
        this.idEmpleado = idEmpleado;
        this.email = email;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fotoperfil = fotoperfil;
    }

    // GETTERS
    public getIdEmpleado(): number {
        return this.idEmpleado;
    }
    public getEmail(): string {
        return this.email;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getApellido(): string {
        return this.apellido;
    }
    public getFotoPerfil(): string {
        return this.fotoperfil;
    }

    // SETTERS
    public setIdEmpleado(id: number): void {
        this.idEmpleado = id;
    }
    public setEmail(email: string): void {
        this.email = email;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }
    public setFotoPerfil(foto: string): void {
        this.fotoperfil = foto;
    }
}