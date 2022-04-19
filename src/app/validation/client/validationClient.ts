import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

export class CreateClientValidation {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const schema = Joi.object({
        fullname: Joi
          .string()
          .min(5)
          .trim()
          .required(),
        gender: Joi
          .string()
          .trim()
          .required(),
        birthdate: Joi
          .string()
          .trim()
          .required(),
        age: Joi
          .number()
          .min(15)
          .max(100)
          .required(),
        city: Joi
          .string()
          .min(3)
          .trim()
          .required(),
      });

      const { error } = await schema.validate(req.body, { abortEarly: false });
      if (error) throw error;
      return next();
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async find(req: Request, res: Response, next: NextFunction) {
    try {
      const schema = Joi.object({
        fullname: Joi
          .string()
          .min(5)
          .trim(),
        gender: Joi
          .string()
          .trim(),
        birthdate: Joi
          .string()
          .trim(),
        age: Joi
          .number()
          .min(15)
          .max(100),
        city: Joi
          .string()
          .min(3)
          .trim(),
      });

      const { error } = await schema.validate(req.body, { abortEarly: false });
      if (error) throw error;
      return next();
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}
