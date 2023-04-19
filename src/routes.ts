import { Router } from 'express';
import { getAccessToken, loginUser, registerUser } from './controllers/auth-controller';
import { tokenGuard } from './middlewares/token-guard';
import { getProducts } from './controllers/product-controller';


const router = Router();

router.route('/token').get(getAccessToken);

router.route('/login').post(loginUser);

router.route('/register').post(registerUser)

router.route('/products').get(tokenGuard,getProducts);



export default router;