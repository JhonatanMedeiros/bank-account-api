import { ICompanyModel } from './model';

/**
 * @export
 * @interface ICompanyService
 */
export interface ICompanyService {

  /**
   * @returns {Promise<IUserModel[]>}
   * @memberof IUserService
   */
  findAll(): Promise<ICompanyModel[]>;

  /**
   * @param {string} code
   * @returns {Promise<IUserModel>}
   * @memberof IUserService
   */
  findOne(code: string): Promise<ICompanyModel>;

  /**
   * @param {IUserModel} IUserModel
   * @returns {Promise<IUserModel>}
   * @memberof IUserService
   */
  insert(IUserModel: ICompanyModel): Promise<ICompanyModel>;

  /**
   * @param {string} id
   * @returns {Promise<IUserModel>}
   * @memberof IUserService
   */
  remove(id: string): Promise<ICompanyModel>;
}
