import Product from "../components/Product/product"
import { useGetMenuQuery } from "../api/apiSlice";

function Menu() {

    const { data, isError, isLoading } = useGetMenuQuery();

    console.log(data);
    const menus = data?.menu.map((product) => {
        return (
            <Product>
                name={product.name}
                price={product.price}
                ingredients={product.ingredients}
            </Product>
        )
    });



    return
    (
        <>
            <h2>Winter Solstice</h2>
            {menus}
        </>
    );
}
export default Menu;