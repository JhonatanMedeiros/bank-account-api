import * as connections from '../../config/connection/connection';
import { Document, Schema } from 'mongoose';

/**
 * @export
 * @interface ICompanyModel
 * @extends {Document}
 */
export interface ICompanyModel extends Document {
  state_registration: string;
  social_reason: string;
  fantasy_name: string;
  cnpj: string;
  zip_code: string;
  address: string;
  number: number;
  district: number;
  city: string;
  state: string;
  responsible: string;
}

/**
 * @swagger
 * components:
 *  schemas:
 *    CompanySchema:
 *      required:
 *        - state_registration
 *        - social_reason
 *        - fantasy_name
 *        - cnpj
 *        - responsible
 *      properties:
 *        state_registration:
 *          type: string
 *        social_reason:
 *          type: string
 *        fantasy_name:
 *          type: string
 *        cnpj:
 *          type: string
 *        zip_code:
 *          type: string
 *        address:
 *          type: string
 *        number:
 *          type: number
 *        district:
 *          type: string
 *        city:
 *          type: string
 *        state:
 *          type: string
 *        responsible:
 *          type: string
 *    Companies:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/CompanySchema'
 */
export const CompanySchema: Schema = new Schema({
  state_registration: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  social_reason: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  fantasy_name: {
    type: String,
    required: true
  },
  cnpj: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  zip_code: String,
  address: String,
  number: Number,
  district: String,
  city: String,
  state: String,
  responsible: { type: Schema.Types.ObjectId, ref: 'UserModel', required: true },
}, {
  collection: 'companymodel',
  versionKey: false
});

export default connections.db.model<ICompanyModel>('CompanyModel', CompanySchema);
