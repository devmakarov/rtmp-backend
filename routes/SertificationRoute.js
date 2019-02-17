const Router = require('koa-router')
const router = new Router({
    prefix: '/sertification'
})

const SertificationController = require('../controllers/SertificationController');

router
    .get('/', SertificationController.all )
    .post('/create', SertificationController.create )
    .get('/:id', SertificationController.checkId, SertificationController.fetchOne )
    .post('/remove/:id', SertificationController.checkId, SertificationController.remove )
    .post('/update/:id', SertificationController.checkId, SertificationController.update )

module.exports = router