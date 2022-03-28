const express = require('express');
const router = express.Router();

const { getPosts, newPost, updatePost, deletePost, deleteAllPost } = require('../controllers/posts')

router.get('/', getPosts)

router.post('/', newPost)

router.patch('/:id', updatePost)

router.delete('/:id', deletePost)

router.delete('/', deleteAllPost)

module.exports = router