import React from 'react';
import { Link } from 'react-router-dom';

const MyPage = () => {
    return (
        <div className='MyPage'>
            <h1>마이페이지</h1>
            <div className='ProfileContainer'>
                <Link to='/mypage/account' className='ProfileSettingPage'>
                    <div className='ProfileImage'>
                        <img src="" alt="" />
                    </div>
                    <div className='ProfileInfo'>
                        <div>ooo 고객님</div>
                        <div><img src="" alt="" /></div>
                        <div>moeego@moeego.com</div>
                    </div>
                    <div className='ProfileButton'>
                        <input type="button" value="계정설정" />
                    </div>
                </Link>
            </div>
            <hr />

            <div className='SearchProContainer'>
                <h1>달인찾기</h1>
                <div>
                    <Link to='/searchpro' className='SearchProLink'>
                        <div>찜한 달인</div>
                        <div><img src="./src/image/next_icon.png" alt="nextIcon" /></div>
                    </Link>
                </div>
            </div>
            <hr />

            <div className='ActivityDetailsContainer'>
                <h1>모이고 활동내역</h1>
                <div>
                    <Link to='/mypage/reservation' className='ActivityDetailsLink'>
                        <div>모이고 예약 내역</div>
                        <div><img src="./src/image/next_icon.png" alt="nextIcon" /></div>
                    </Link>
                    <Link to='' className='MyReviewsLink'>
                        <div>모이고 리뷰 내역</div>
                        <div><img src="./src/image/next_icon.png" alt="nextIcon" /></div>
                    </Link>
                </div>
            </div>
            <hr />

            <div className='ArticleHistoryContainer'>
                <h1>커뮤니티</h1>
                <div>
                    <Link to='' className='ArticleHistoryLink'>
                        <div>커뮤니티 작성 글/댓글</div>
                        <div><img src="./src/image/next_icon.png" alt="nextIcon" /></div>
                    </Link>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default MyPage;