import { Router } from 'express'
import { createUser, deleteUser, getUser, searchUsers, updateUser } from '../controllers/users/usersControllers';

const router: Router = Router()

router.get('/users/:id', getUser)
router.post('/users/search', searchUsers)
router.post('/users', createUser)
router.delete('/users/:id', deleteUser)
router.put('/users/:id', updateUser)

export default router;