import { Router } from 'express'
import { searchComments, createComment, getComment, deleteComment, updateComment, createCommentsForRandomPosts } from '../controllers/comments/commentsControllers'

const router: Router = Router()

router.get('/comments/:id', getComment)
router.post('/comments/search', searchComments)
router.post('/comments', createComment)
router.post('/comments/batch', createCommentsForRandomPosts)
router.delete('/comments/:id', deleteComment)
router.put('/comments/:id', updateComment)

export default router;