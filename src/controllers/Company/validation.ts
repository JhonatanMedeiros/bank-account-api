import * as Joi from 'joi';
import Validation from '../validation';
import { ICompanyModel } from './model';

/**
 * @export
 * @class CompanyValidation
 * @extends Validation
 */
class CompanyValidation extends Validation {

  /**
   * Creates an instance of CompanyValidation.
   * @memberof CompanyValidation
   */
  constructor() {
    super();
  }

  /**
   * @param {ICompanyModel} params
   * @returns {Joi.ValidationResult<ICompanyModel >}
   * @memberof CompanyValidation
   */
  createCompany(params: ICompanyModel): Joi.ValidationResult < ICompanyModel > {
    const schema: Joi.Schema = Joi.object().keys({
      state_registration: Joi.string().required(),
      social_reason: Joi.string().required(),
      fantasy_name: Joi.string().required(),
      cnpj: Joi.string().required(),
      zip_code: Joi.string(),
      address: Joi.string(),
      number: Joi.number(),
      district: Joi.string(),
      city: Joi.string(),
      responsible: Joi.string().required(),
    });

    return Joi.validate(params, schema);
  }

  /**
   * @param {{ id: string }} body
   * @returns {Joi.ValidationResult<{ id: string }>}
   * @memberof CompanyValidation
   */
  getCompany(body: { id: string }): Joi.ValidationResult < {id: string} > {
    const schema: Joi.Schema = Joi.object().keys({
      id: this.customJoi.objectId().required()
    });

    return Joi.validate(body, schema);
  }

  /**
   * @param {{ id: string }} body
   * @returns {Joi.ValidationResult<{ id: string }>}
   * @memberof CompanyValidation
   */
  removeCompany(body: { id: string }): Joi.ValidationResult < {id: string} > {
    const schema: Joi.Schema = Joi.object().keys({
      id: this.customJoi.objectId().required()
    });

    return Joi.validate(body, schema);
  }
}

export default new CompanyValidation();
