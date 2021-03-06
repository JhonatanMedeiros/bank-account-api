import * as bcrypt from 'bcrypt';
import * as connections from '../../config/connection/connection';
import * as crypto from 'crypto';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';

/**
 * @export
 * @interface IUserModel
 * @extends {Document}
 */
export interface IUserModel extends Document {
  email: string;
  name: string;
  picture?: string;

  password: string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;

  comparePassword?: (password: string) => Promise < boolean > ;
  gravatar?: (size: number) => string;
}

/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
 *        - email
 *        - name
 *      properties:
 *        id:
 *          type: string
 *        name:
 *          type: string
 *        email:
 *          type: string
 *        picture:
 *          type: string
 *        password:
 *          type: string
 *        passwordResetToken:
 *          type: string
 *        passwordResetExpires:
 *          type: string
 *          format: date
 *    Users:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/UserSchema'
 */
export const UserSchema: Schema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: true
  },
  picture: String,
  password: String,
  passwordResetToken: String,
  passwordResetExpires: Date
}, {
  collection: 'usermodel',
  versionKey: false
}).pre('save', async function (next: NextFunction): Promise < void > {
  const user: any = this;

  if (!user.isModified('password')) {
    return next();
  }

  try {
    const salt: string = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error) {
    return next(error);
  }
});

/**
 * Method for comparing passwords
 */
UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise < boolean > {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    return error;
  }
};

/**
 * Helper method for getting user's gravatar.
 */
UserSchema.methods.gravatar = function (size: number): string {
  if (!size) {
    size = 200;
  }
  if (!this.email) {
    return `https://gravatar.com/avatar/?s=${size}&d=retro`;
  }
  const md5: string = crypto.createHash('md5').update(this.email).digest('hex');

  return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};

export default connections.db.model<IUserModel>('UserModel', UserSchema);
