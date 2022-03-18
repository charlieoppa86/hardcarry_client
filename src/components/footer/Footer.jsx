import './footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
        <ul className='policy'>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>정기구독서비스 이용약관</li>
            <li>환불정책</li>
            <li>제휴/협력문의</li>
            <li>크루홀더 신청</li>
            <li>지식재산권침해 신고센터</li>
        </ul>
        <ul className='corpinfo'>
            <li>(주)윌러스코퍼레이션</li>
            <li>대표자: 이해찬</li>
            <li>주소: 서울시 성동구</li>
            <li>대표번호: 010-</li>
            <li>고객센터: 070-</li>
        </ul>
    </div>
  )
}

export default Footer