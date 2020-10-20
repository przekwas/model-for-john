import { Router } from 'express';
import db from '.././db';

const router = Router();

// GET /api/users/count
router.get('/count', async (req, res) => {
    try {
        const [count] = await db.users.count();
        res.json(count);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'my code sucks plz let me know '});
    }
});

// GET /api/users/
router.get('/', async (req, res) => {
    try {
        const users = await db.users.all();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'my code sucks plz let me know '});
    }
});

// POST /api/users/
// { email: string }
router.post('/', async (req, res) => {
    const newUserDTO = req.body;
    try {
        const cannedResp = await db.users.insert(newUserDTO.email);
        res.json(cannedResp);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'my code sucks plz let me know '});
    }
});

export default router;