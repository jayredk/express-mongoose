const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const postsSchema = Schema(
  {
    content: {
      type: String,
      required: [true, 'Content 未填寫']
    },
    type: {
      type: String,
      enum:['group','person'],
      required: [true, '貼文類型 type 未填寫']
    },
    image: {
      type:String,
      default:""
    },
    name: {
        type: String,
        required: [true, '貼文姓名未填寫']
    },
    likes: {
        type:Number,
        default:0
      },
    
    comments: {
      type: Number,
      default:0
    },
    tags:[
      {
        type: String,
        required: [true, '貼文標籤 tags 未填寫']
      }
    ]
  }, { timestamps: { createdAt: true, updatedAt: false }, versionKey: false }
)

const Post = model('Post', postsSchema);

module.exports = Post