import Fetcher, { FETCHER_MODE } from "../Fetcher";
import { randomInteger } from '../number';

// professional blog
// POPULAR
export enum ArticlesCategory {
    POPULAR, ESSENTIALS, FREELANCE, RANDOM
}
export async function get_articles_proffessional_blog(category: ArticlesCategory) {
    let out_category: string = "";
    let all_categories: string[] = ['popular', 'essentials', 'freelance'];
    switch (category) {
        case ArticlesCategory.POPULAR:
            out_category = "popular";
            break;
        case ArticlesCategory.ESSENTIALS:
            out_category = "essentials";
            break;
        case ArticlesCategory.FREELANCE:
            out_category = "freelance";
            break;
        case ArticlesCategory.RANDOM:
            out_category = all_categories[randomInteger(0, all_categories.length)];
            break;
        default:
            out_category = "popular";
            break;
    }
    const response: any = await new Fetcher().get(`posts/?category=${out_category}&page=1&limit=10&fields=title,category,author,description,tags,likesCount,viewsCount,featuredImage`, FETCHER_MODE.NO_TOKEN)
        .then(response => { return response });
    return response.status > 199 && response.status < 400 ?
        response : null
}
