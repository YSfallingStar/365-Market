import { useState, useCallback } from "react";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

function NicknameForm({ handleSubmitNickname, handleClose }) {
    const [nickname, setNickname] = useState("");

    const handleChangeNickname = useCallback(event => {
        setNickname(event.target.value);
    }, []);

    const handleSubmit = useCallback(() => {
        handleSubmitNickname(nickname);
        setNickname("");
    }, [handleSubmitNickname, nickname]);

    return (
        <form className="d-flex nickArea">
            <div className="card d-flex flex-row ">
                <label className="nickBox" htmlFor="user-name-input" style={{ width: 70 }}>
                    닉네임
                </label>
                <input
                    type="text"
                    className="form-control w300"
                    id="user-name-input"
                    maxLength={12}
                    value={nickname}
                    onChange={handleChangeNickname}
                />
                <button
                    type="button"
                    className="btn btn-primary nick-btn"
                    value="확인"
                    onClick={handleSubmit}
                >
                    확인
                </button>
            </div>
            <div className="closeBtn-Box">
                <IconButton
                    edge="end"
                    sx={{ margin: 0 }}
                    className='closeBtn'
                >
                    <CloseIcon onClick={() => handleClose()} sx={{ fontSize: 50 }} />
                </IconButton>
            </div>
        </form>
    );
}

export default NicknameForm;