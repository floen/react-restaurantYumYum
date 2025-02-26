import Product from "../components/Product/product"
import { useGetMenuQuery } from "../api/apiSlice";
import './Menu.css'
import Header from '../components/Header/Header'
function Menu() {

    const { data, isError, isLoading } = useGetMenuQuery();

    console.log(data);
    const menus = data?.items.map((product, index, arr) => {
        const prevType = arr[index - 1]?.type;
        console.log(prevType);
        return (
            <div>
                {prevType != product.type ? (<div className="type"><h2>{product.type}</h2></div>) : (null)}
                <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    description={product.description}>
                </Product>
            </div>
        );
    });


    return (
        <>
            <Header hideCart="false"></Header>
            <div className="winter-solstice-container">
                <h1>MENY</h1>
                {isLoading ?
                    (
                        <p>Menu loading</p>
                    )
                    : (isError ?
                        (<p>Something got wrong</p>)
                        : (<div> {menus} </div>)
                    )
                }

            </div>
        </>
    );
}
export default Menu;