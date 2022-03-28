import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import park from '../../asset/images/park.png';
import gang from '../../asset/images/gang.png';
import kim from '../../asset/images/kim.png';
import seo from '../../asset/images/seo.png';
import jungM from '../../asset/images/jungM.png';
import jungY from '../../asset/images/jungY.png';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IconButton from '@mui/material/IconButton';
import { ModalContent } from '../layout/Modal';
import { Modal } from '@mui/material';
import Chat from './Chat';
import YourProfile from './myPage/YourProfile';

export default function AlignItemsList() {
    const [condition, setCondition] = useState("");
    const [open, setOpen] = useState(false);
    const handleClickOpen = (prop) => {
        setOpen(true);
        setCondition(prop);
    }
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ p: 3, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <List sx={{ m: 'auto', minwidth: '100%', maxWidth: 800, bgcolor: 'background.paper', justifyContent: "center", alignItems: "center" }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={park} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="박하영"
                        secondary={
                            <React.Fragment>
                                {"안녕하세요. 물물교환 되나요?"}
                            </React.Fragment>
                        }
                    />
                    <IconButton
                        edge="end"
                        sx={{ position: "relative" }}
                        className='closeBtn'
                    >
                        <ChatBubbleOutlineIcon
                            color='primary'
                            sx={{ fontSize: 50, position: 'relative' }}
                            onClick={() => { handleClickOpen("chat") }}
                        />
                    </IconButton>
                </ListItem>

                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={gang} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="강성우"
                        secondary={
                            <React.Fragment>
                                {"저는 가방이랑 교환할게요!"}
                            </React.Fragment>
                        }
                    />
                    <IconButton
                        edge="end"
                        sx={{ position: "relative" }}
                        className='closeBtn'
                    >
                        <ChatBubbleOutlineIcon
                            color='primary'
                            sx={{ fontSize: 50, position: 'relative' }}
                            onClick={() => { handleClickOpen("chat") }}
                        />
                    </IconButton>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={kim} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="김현"
                        secondary={
                            <React.Fragment>
                                {"어디로 갈까요?"}
                            </React.Fragment>
                        }
                    />
                    <IconButton
                        edge="end"
                        sx={{ position: "relative" }}
                        className='closeBtn'
                    >
                        <ChatBubbleOutlineIcon
                            color='primary'
                            sx={{ fontSize: 50, position: 'relative' }}
                            onClick={() => { handleClickOpen("chat") }}
                        />
                    </IconButton>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={seo} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="서정원"
                        secondary={
                            <React.Fragment>
                                {"몇 일이나 사용하셨나요?"}
                            </React.Fragment>
                        }
                    />
                    <IconButton
                        edge="end"
                        sx={{ position: "relative" }}
                        className='closeBtn'
                    >
                        <ChatBubbleOutlineIcon
                            color='primary'
                            sx={{ fontSize: 50, position: 'relative' }}
                            onClick={() => { handleClickOpen("chat") }}
                        />
                    </IconButton>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={jungM} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="정민영"
                        secondary={
                            <React.Fragment>
                                {"가격 제시 가능할까요?"}
                            </React.Fragment>
                        }
                    />
                    <IconButton
                        edge="end"
                        sx={{ position: "relative" }}
                        className='closeBtn'
                    >
                        <ChatBubbleOutlineIcon
                            color='primary'
                            sx={{ fontSize: 50, position: 'relative' }}
                            onClick={() => { handleClickOpen("chat") }}
                        />
                    </IconButton>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={jungY} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="정유성"
                        secondary={
                            <React.Fragment>
                                {"안녕하세요. 물물교환 되나요?"}
                            </React.Fragment>
                        }
                    />
                    <IconButton
                        edge="end"
                        sx={{ position: "relative" }}
                        className="chatBtn"
                    >
                        <ChatBubbleOutlineIcon
                            color='primary'
                            sx={{ fontSize: 50, position: 'relative' }}
                            onClick={() => { handleClickOpen("chat") }}
                        />
                    </IconButton>
                </ListItem>
            </List>
            <Modal
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                open={open}
                maxWidth=''
                fullWidth={true}
            >
                <ModalContent>
                    {
                        (function () {
                            if (condition === 'yourprofile') return <YourProfile handleClickOpen={handleClickOpen} handleClose={handleClose} />
                            if (condition === 'chat') return <Chat handleClose={handleClose} />
                        })()
                    }
                </ModalContent>
            </Modal>
        </Box>
    );
}