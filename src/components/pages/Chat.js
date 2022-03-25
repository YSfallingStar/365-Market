import { useState, useEffect, useRef, useCallback } from "react";
import NicknameForm from "./chat/NicknameForm";
import ChatRoom from "./chat/chatRoom";
import { socket, SocketContext, SOCKET_EVENT } from "../../service/socket";
import { Box } from "@mui/material";

function Chat({ handleClose }) {
    const prevNickname = useRef(null); // prevNickname 변경은 컴포넌트를 리렌더링 하지않습니다.
    const [nickname, setNickname] = useState("OOO");

    useEffect(() => {
        return () => { // App 컴포넌트 unmount시 실행
            socket.disconnect();
        }
    }, []);

    useEffect(() => {
        socket.emit(SOCKET_EVENT.JOIN_ROOM, { nickname }); // JOIN_ROOM event type과 nickname data를 서버에 전송한다.
    }, [nickname]);

    useEffect(() => {
        if (prevNickname.current) {
            socket.emit(SOCKET_EVENT.UPDATE_NICKNAME, { // 서버에는 이전 닉네임과 바뀐 닉네임을 전송해줍니다.
                prevNickname: prevNickname.current,
                nickname,
            });
        } else {
            socket.emit(SOCKET_EVENT.JOIN_ROOM, { nickname });
        }
    }, [nickname]);

    const handleSubmitNickname = useCallback(newNickname => {
        prevNickname.current = nickname;
        setNickname(newNickname);
    },
        [nickname]
    );

    return (
        <Box>
            <SocketContext.Provider value={socket} >
                <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                    <NicknameForm handleSubmitNickname={handleSubmitNickname} handleClose={handleClose} />
                    <ChatRoom nickname={nickname} />
                </div>
            </SocketContext.Provider>
        </Box>
    );
}

export default Chat;