import './navbar.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="allbox">
        <span className='allcate'>
          전체 카테고리
          <KeyboardArrowDownIcon />
        </span>
      </div>
      <div className="mainbox">
        <span className='maincate'>인기절정</span>
        <span className='maincate'>프리오더</span>
        <span className='maincate'>마감임박</span>
        <span className='maincate'>원포인트</span>
        <span className='maincate'>3월혜택</span>
        <span className='maincate'>이벤트</span>            
      </div>
    </div>
  )
}

export default Navbar