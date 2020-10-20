import { Query } from '../';
import { UserModel } from '../models'

const all = () => Query<UserModel[]>('SELECT * FROM users');
const count = () => Query('SELECT COUNT(*) as subscribed FROM users');
const insert = (newEmail: string) => Query<{ insertId: number }>('INSERT INTO users (email) VALUE (?)', [newEmail]);

export default {
    all,
    count,
    insert
}
