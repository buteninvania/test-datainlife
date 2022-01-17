import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './brms/store';
import {Navbar} from './ui/components/Navbar';
import {TableCC} from './ui/components/TableCC';
import {useLocation} from 'react-router-dom';
import {Footer} from './ui/components/Footer';
import {getProductsAC} from './brms/table-data/table-data-actions';
import {
    getProductSectionsSelector,
    getProductsSelector,
    getSelectedProducts
} from './brms/table-data/table-data-selectors';

function App() {

    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        dispatch(getProductsAC())
    }, [])



    const productSections = useSelector(getProductSectionsSelector)
    const products = useSelector(getProductsSelector)
    const chapterId = location.pathname.replace(/[^0-9]/g,"")
    const currentProducts = products[chapterId]
    const selectedProducts = useSelector(getSelectedProducts)

    return (
            <div className="app-wrapper">
                <div className='content'>
                    <Navbar productSections={productSections}/>
                    {currentProducts !== undefined && <TableCC chapterId={chapterId} products={currentProducts}/>}
                </div>
                <Footer products={selectedProducts}/>
            </div>
    );
}

export default App;
