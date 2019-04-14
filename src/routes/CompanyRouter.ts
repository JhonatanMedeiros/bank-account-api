import { Router } from 'express';
import { CompanyController } from '../controllers';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/companies
 *
 * @swagger
 * /v1/companies:
 *   get:
 *     description: Get all stored companies in Database
 *     tags: ["companies"]
 *     security:
 *      - cookieAuth: []
 *     responses:
 *       200:
 *         description: An array of companies
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Companies'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', CompanyController.findAll);

/**
 * POST method route
 * @example http://localhost:PORT/v1/companies
 *
 * @swagger
 * /v1/companies:
 *   post:
 *      description: Create new Company
 *      tags: ["companies"]
 *      security:
 *       - cookieAuth: []
 *      requestBody:
 *        description: company creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CompanySchema'
 *            example:
 *              social_reason: text here
 *              fantasy_name: text here
 *              cnpj: 00.000.000/0000-00
 *      responses:
 *        201:
 *          description: return created company
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/CompanySchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', CompanyController.create);

/**
 * GET method route
 * @example http://localhost:PORT/v1/companies/:id
 *
 * @swagger
 * /v1/companies/{id}:
 *  get:
 *    description: Get company by companyId
 *    tags: ["companies"]
 *    security:
 *      - cookieAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique companyId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return company by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/CompanySchema'
 */
router.get('/:id', CompanyController.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/companies/:id
 *
 * @swagger
 * /v1/companies/{id}:
 *  delete:
 *    description: Delete company by companyId
 *    tags: ["companies"]
 *    security:
 *      - cookieAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique companyId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return deleted company
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/CompanySchema'
 */
router.delete('/:id', CompanyController.remove);

/**
 * @export {express.Router}
 */
export default router;
