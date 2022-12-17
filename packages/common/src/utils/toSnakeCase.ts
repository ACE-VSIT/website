import { ItoSnakeCase } from 'interfaces/IToSnakeCase';

const toSnakeCase: ItoSnakeCase = (text) => text.replace(/\s+/g, '-').toLowerCase();

export default toSnakeCase;
