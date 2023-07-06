/*
 * @Author: LinRenJie
 * @Date: 2023-07-06 15:44:41
 * @LastEditTime: 2023-07-06 16:17:33
 * @Description: 
 * @FilePath: \react-test\src\components\content-header\ImageWrapper.tsx
 * @Email: xoxosos666@gmail.com
 */
import SearchBox from './search-box/SearchBox'
import styles from './styles.module.less'
const Notice = () => (
    <p>test</p>
)
const ImageWrapper = () => {
    return (
        <div className={styles.imageWrapper}>
            <div style={{ border: '1px solid yellow', margin: 'auto' }}> <SearchBox />
                <Notice />
            </div>
        </div>
    )
}
export default ImageWrapper