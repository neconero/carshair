import { Request, Response, NextFunction } from 'express'
export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    console.log(err)

    res.status(400).send({
        errors: [{ message: 'Endpoint not found!' }]
    })

    next()
}