import type { Request, Response } from "express";

class AuthController{
    public async login(request:Request, response:Response):Promise<Response>{
        const {email, password} = request.body || {};
        const role = email.includes("admin") ? "admin" : "user";
        
        return response.status(200).json({
            token: "fake-jwt-token",
            user: {
                name: role == "admin" ? "Administrador": "Padrão",
                email: email,
                role: role
            }
        });


    }
}

export default new AuthController();