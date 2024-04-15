import styles from '../../styles/productdetail.module.css';


export function TagItem({item}: {item: string}){
    return (
            <p className={styles.tagItem}>{item}</p>
    )
}

export default function Tags({tags} : {tags : string[]}){
    return (
        <>
            {
                tags.map(function(item){
                    return (<TagItem key={item} item={item}></TagItem>)
                })
            }
        </>
    )
}