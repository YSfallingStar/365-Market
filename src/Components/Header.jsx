export default function Header() {
    return (
      <header>
        <div className="header__container">
          <div className="title">365일장</div>
          <div className="subtitle">쇼핑몰 전체화면 입니다.</div>
          <div className="btn__area">
            <a href="/" target="_BLANK" rel="noreferrer">
              <button>오늘의 추천</button>
            </a>
          </div>
        </div>
      </header>
    );
  }