import { Col } from "react-bootstrap"

interface IProps {
    showProfileMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const ProfileMenu = (props: IProps) => {
    return (
        <Col className="col-12 col-md-3 mt-3 p-0">
            <div className="d-flex new-chat-section align-items-end">
                <div className="d-flex">
                    <svg onClick={() => props.showProfileMenu(false)} className="pointer-cursor" viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24" xmlSpace="preserve"><path fill="#d9dee0" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg>
                    <h5 className="ml-3" style={{ color: "#d9dee0" }}>Profile</h5>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center my-4">
                <div className="big-image-container">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png"
                        alt="trollface"
                    />
                </div>
            </div>
            <div className="profile-info">
                <div className="my-2">
                    <p className="contacts-text profile-title">Your name</p>
                    <div className="d-flex justify-content-between">
                        <div>Username</div>
                        <div>
                            <svg className="pointer-cursor" viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xmlSpace="preserve"><path fill="currentColor" d="M3.95,16.7v3.4h3.4l9.8-9.9l-3.4-3.4L3.95,16.7z M19.75,7.6c0.4-0.4,0.4-0.9,0-1.3 l-2.1-2.1c-0.4-0.4-0.9-0.4-1.3,0l-1.6,1.6l3.4,3.4L19.75,7.6z"></path></svg>
                        </div>
                    </div>
                </div>
                <div className="my-4 profile-title">
                    This is not your username or pin. This name will be visible to your WhatsApp contacts.
                </div>
                <div className="my-2">
                    <p className="contacts-text profile-title">Info</p>
                    <div className="d-flex justify-content-between">
                        <div>Info/Bio</div>
                        <div>
                            <svg className="pointer-cursor" viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xmlSpace="preserve"><path fill="currentColor" d="M3.95,16.7v3.4h3.4l9.8-9.9l-3.4-3.4L3.95,16.7z M19.75,7.6c0.4-0.4,0.4-0.9,0-1.3 l-2.1-2.1c-0.4-0.4-0.9-0.4-1.3,0l-1.6,1.6l3.4,3.4L19.75,7.6z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default ProfileMenu