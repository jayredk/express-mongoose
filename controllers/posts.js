const Post = require('../models/posts')

class PostController {
  async getPosts(req, res) {
    const posts = await Post.find({})
    res.json({
      status: 'success',
      message: '取得貼文成功',
      data: posts
    });
  }
  async newPost(req, res) {
    try {
      const post = req.body;
      const result = await Post.create(post);
      res.json({
        status: 'success',
        message: '新增貼文成功',
        data: result
      });
    } catch (error) {
      res.status(400, error);
    }
  }
  async updatePost(req, res) {
    try {
      const id = req.params.id;
      const content = req.body;
      const result = await Post.findByIdAndUpdate(id, content)
      if (!result) {
        res.status(400).json({
          status: 'failed',
          message: 'id 錯誤，找不到此貼文',
        })
      } else {
        res.json({
          status: 'success',
          message: '編輯貼文成功',
          data: result
        });
      }
    } catch (error) {
      res.status(400).json({
        status: 'failed',
        message: 'id 錯誤或找不到此貼文',
      })
    }
  }
  async deletePost(req, res) {
    try {
      const id = req.params.id;
      const result = await Post.findByIdAndDelete(id)
      if (!result) {
        res.status(400).json({
          status: 'failed',
          message: 'id 錯誤，找不到此貼文',
        })
      } else {
        res.json({
          status: 'success',
          message: '刪除貼文成功',
          data: result
        });
      }
    } catch (error) {
      res.status(400).json({
        status: 'failed',
        message: 'id 錯誤或找不到此貼文',
      })
    }
  }
  async deleteAllPost(req, res) {
    const data = await Post.deleteMany({});
    res.json({
      status: 'success',
      message: '刪除貼文成功',
      data
    });
  }
}

module.exports = new PostController()