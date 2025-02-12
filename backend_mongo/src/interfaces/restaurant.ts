import { Document } from 'mongoose';
import IArticle from './article';

type IRestaurant = {
  name: string;
  idRestaurateur: string;
  articles: [IArticle['_id']];
  address: string;
} & Document;
export default IRestaurant;
