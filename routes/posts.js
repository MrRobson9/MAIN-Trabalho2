const { resolveSoa } = require('dns');
var express = require('express');
var router = express.Router();
var Post = require("../assets/app/models/post")

router.get('/', function (req, res, next) {
    Post.find()
    .exec(function(err, result){
        if(err){
            return res.status(500).json({
                myErroTitle: 'Um erro Aconteceu na hora de buscar o post',
                myError: err
            });
        }
        res.status(200).json({
            myMsgSucess: "Post recuperado com sucesso",
            objSPostsRecuperadoS : result
            });
        });
    });


router.post('/', function (req, res, next) {
    var post = new Post({
        content: req.body.content,
        user: req.body.user,
        likes: 0

    });
    post.save(function(err, result){
        if(err){
            return res.status(500).json({
                myErroTitle: 'Um erro Aconteceu na hora de enviar o post',
                myError: err
            });
        }
        res.status(201).json({
            myPostSucess: "Post salvo com sucesso",
            objPostSave : result
            });
        });
    });



    router.delete('/:id', function (req, res, next) {
        Post.deleteOne({ _id: req.params.id })
            .exec(function (err, result) {
                if (err) {
                    return res.status(500).json({
                        myErroTitle: 'Um erro Aconteceu na hora de deletar o Post',
                        myError: err
                    });
                }
                res.status(200).json({
                    myMsgSucess: "Post deletado com sucesso"
                }); 
            });
    });

    router.patch('/:id', function(req, res, next){
        //const post = Post.findOne({_id: req.params.id})
        
        Post.updateOne({_id: req.params.id}, {$inc:{likes: 1}})
        .exec(function (err, result) {
            if (err) {
                return res.status(500).json({
                    myErroTitle: 'Um erro Aconteceu na hora de atualizar o Post',
                    myError: err
                });
            }
            res.status(200).json({
                myMsgSucess: "Post atualizado com sucesso"
            }); 
        });
});
   
module.exports = router;