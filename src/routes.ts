import { Router } from 'express';
import { getAccessToken, loginUser, registerUser } from './controllers/auth-controller';
import { tokenGuard } from './middlewares/token-guard';
import { getProduct, getProducts } from './controllers/product-controller';


const router = Router();

router.route('/token').get(getAccessToken);

router.route('/login').post(loginUser);

router.route('/register').post(registerUser)

router.route('/products').get(tokenGuard,getProducts);

router.route('/products/:id').get(tokenGuard, getProduct)



export default router;