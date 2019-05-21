import * as Joi from 'joi';
import { Types } from 'mongoose';
import CompanyModel, { ICompanyModel } from './model';
import CompanyValidation from './validation';
import { ICompanyService } from './interface';

/**
 * @export
 * @implements {IUserService}
 */
const CompanyService: ICompanyService = {
  /**
   * @returns {Promise < ICompanyModel[] >}
   * @memberof CompanyService
   */
  async findAll(): Promise < ICompanyModel[] > {
    try {
      return await CompanyModel.find({})
        .populate({ path: 'responsible', select: 'picture' })
        .populate({ path: 'responsible', select: 'name' })
        .populate({ path: 'responsible', select: 'email' });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < ICompanyModel >}
   * @memberof CompanyService
   */
  async findOne(id: string): Promise < ICompanyModel > {
    try {
      const validate: Joi.ValidationResult < {id: string} > = CompanyValidation.getCompany({ id });

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      return await CompanyModel.findOne({ _id: Types.ObjectId(id) })
        .populate({ path: 'responsible', select: 'picture' })
        .populate({ path: 'responsible', select: 'name' })
        .populate({ path: 'responsible', select: 'email' });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {ICompanyModel} body
   * @returns {Promise < ICompanyModel >}
   * @memberof CompanyService
   */
  async insert(body: ICompanyModel): Promise < ICompanyModel > {
    try {
      const validate: Joi.ValidationResult < ICompanyModel > = CompanyValidation.createCompany(body);

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      const company: ICompanyModel = await CompanyModel.create(body);

      return company;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < ICompanyModel >}
   * @memberof CompanyService
   */
  async remove(id: string): Promise < ICompanyModel > {
    try {
      const validate: Joi.ValidationResult < { id: string } > = CompanyValidation.removeCompany({ id });

      if (validate.error) {
        throw new Error(validate.error.message);
      }

      return await CompanyModel.findOneAndRemove({ _id: Types.ObjectId(id) });
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

export default CompanyService;
