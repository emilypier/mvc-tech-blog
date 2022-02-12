const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//create a post
router.post('/', withAuth, (req, res)=>{
  Post.create({...req.body, user_id: req.session.user_id}).then((newpost)=>{
    res.json(newpost)
  }).catch((err)=>{
    res.status(500).json(err)
  })
});

//update a post
router.put('/edit/:id', withAuth, (req, res)=>{
  Post.create({...req.body, user_id: req.session.user_id}).then((editedpost)=>{
    res.json(editedpost)
  }).catch((err)=>{
    res.status(500).json(err)
  })
});

//delete a post
router.delete('/:id', withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router;
