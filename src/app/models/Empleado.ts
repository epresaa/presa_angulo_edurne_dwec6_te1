export class Empleado {
    public idEmpleado: number;
    public email: string;
    public nombre: string;
    public apellido: string;
    public fotoperfil: string;

    constructor(idEmpleado: number, email: string, nombre: string, apellido: string, fotoperfil: string) {
        this.idEmpleado = idEmpleado;
        this.email = email;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fotoperfil = fotoperfil;
    }

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
}