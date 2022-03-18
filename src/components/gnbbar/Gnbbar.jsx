import './gnbbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Gnbbar = () => {
  return (
    <div className='gnbbar'>
      <div className="logobox">
        <span className="logo">하드캐리</span>  
      </div>
    
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder='검색...' />
            <SearchIcon />
          </div>
          <div className="items">
            <div className="item">
              <NotificationsNoneOutlinedIcon className='icon'/>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className='icon'/>
            </div>
            <div className="item">
              <PersonOutlinedIcon className='icon'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Gnbbar