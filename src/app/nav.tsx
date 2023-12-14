import Navbar from './navbar';
import Ecommerce from "@/api/Ecommerce";

export default async function Nav() {
  let categories: string[] = [];
  try {
    categories = await Ecommerce.Category.list();
  } catch (e) {
    console.log(e)
  }
  return <Navbar categories={categories} />;
}
