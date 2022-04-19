import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

export class CreateCityValidation {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const schema = Joi.object({
        name: Joi
          .string()
          .min(3)
          .trim()
          .required(),
        state: Joi
          .string()
          .trim()
          .required()
          .trim(),
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
        name: Joi
          .string()
          .min(3)
          .trim(),
        state: Joi
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
