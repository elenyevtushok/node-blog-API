import { Router } from 'express'
import { createPost, deletePost, getPost, searchPosts, updatePost } from '../controllers/posts/postsControllers'

const router: Router = Router()

router.get('/posts/:id', getPost)
router.post('/posts/search', searchPosts)
router.post('/posts', createPost)
router.delete('/posts/:id', deletePost)
router.put('/posts/:id', updatePost)

export default router;