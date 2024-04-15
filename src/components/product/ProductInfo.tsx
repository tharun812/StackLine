import styles from '../../styles/productdetail.module.css'
import Tags from '../common/Tags'
import { useSelector } from 'react-redux';

export default function ProductInfo(){
    const product = useSelector((state:any) => state.product.product[0]);
    return (
        <>
            {
                product ?
                    <>
                        <div className={styles.productDetail}>
                            <div className={styles.productImage}>
                                <img src={product.image} alt='Product'/>
                            </div>
                            <div className={styles.productTitle}>
                                <p>{product ? product.title : ''}</p>
                            </div>
                            <div className={styles.productDesc}>
                                <p>{product ? product.subtitle : ''}</p>
                            </div>
                        </div>
                        <hr className={styles.horizontalLine}/>
                        <div className={styles.tagContainer}>
                            {
                               <Tags tags={product.tags}></Tags>
                            }
                        </div>
                        <hr className={styles.horizontalLine}/>
                
                    </>  
                : <> </>
            }
            
        </>
    )
}