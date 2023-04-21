import { Col, FormControl, InputGroup } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { useState } from "react";
import SingleUser from "./SingleUser";
import { useAppSelector } from "../../redux/hooks";
import { IUser } from "../../redux/interfaces/IUser";

interface IProps {
  showUsersMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const UsersMenu = (props: IProps) => {
  const [animation, setAnimation] = useState(false);
  const [query, setQuery] = useState("");
  let userList = useAppSelector((state: any) => state.users.userInfo);

  return (
    <>
      <Col className="col-12 col-md-3 mt-3 p-0">
        <div className="d-flex new-chat-section align-items-end">
          <div className="d-flex">
            <svg
              onClick={() => props.showUsersMenu(false)}
              className="pointer-cursor"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              version="1.1"
              x="0px"
              y="0px"
              enableBackground="new 0 0 24 24"
              xmlSpace="preserve"
            >
              <path
                fill="#d9dee0"
                d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"
              ></path>
            </svg>
            <h5 className="ml-3" style={{ color: "#d9dee0" }}>
              New Chat
            </h5>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <InputGroup className="my-2 ml-3 top-input-main">
              <InputGroup.Prepend>
                <InputGroup.Text className="top-input">
                  {animation && (
                    <AiOutlineSearch
                      onClick={() => setAnimation(false)}
                      className="top-search pointer-cursor"
                    />
                  )}
                  {!animation && (
                    <svg
                      className="green-svg pointer-cursor"
                      onClick={(e) => setAnimation(true)}
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      preserveAspectRatio="xMidYMid meet"
                      version="1.1"
                      x="0px"
                      y="0px"
                      enableBackground="new 0 0 24 24"
                      xmlSpace="preserve"
                    >
                      <path d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                    </svg>
                  )}
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder={animation ? "Search contacts" : ""}
                className="top-input top-search"
                onClick={() => setAnimation(false)}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </InputGroup>
            <BsFilter className="top-icons top-filter m-1 mx-3" />
          </div>
        </div>
        <div className="overflow-auto-section">
          <div className="my-2 single-user">
            <div className="d-flex align-items-center ml-3 py-2">
              <div className="svg-container">
                <svg
                  viewBox="0 0 212 212"
                  height="30"
                  width="30"
                  preserveAspectRatio="xMidYMid meet"
                  style={{ width: "50px", height: "50px" }}
                  className=""
                  fill="#fff"
                >
                  <path
                    className="green-svg"
                    d="M105.946 0.25C164.318 0.25 211.64 47.596 211.64 106C211.64 164.404 164.318 211.75 105.945 211.75C47.571 211.75 0.25 164.404 0.25 106C0.25 47.596 47.571 0.25 105.946 0.25Z"
                    fill="#DFE5E7"
                  ></path>
                  <path
                    className="primary"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M102.282 77.2856C102.282 87.957 93.8569 96.5713 83.3419 96.5713C72.827 96.5713 64.339 87.957 64.339 77.2856C64.339 66.6143 72.827 58 83.3419 58C93.8569 58 102.282 66.6143 102.282 77.2856ZM150.35 80.1427C150.35 89.9446 142.612 97.857 132.954 97.857C123.296 97.857 115.5 89.9446 115.5 80.1427C115.5 70.3409 123.296 62.4285 132.954 62.4285C142.612 62.4285 150.35 70.3409 150.35 80.1427ZM83.3402 109.428C68.5812 109.428 39 116.95 39 131.928V143.714C39 147.25 41.8504 148 45.3343 148H121.346C124.83 148 127.68 147.25 127.68 143.714V131.928C127.68 116.95 98.0991 109.428 83.3402 109.428ZM126.804 110.853C127.707 110.871 128.485 110.886 129 110.886C143.759 110.886 174 116.95 174 131.929V141.571C174 145.107 171.15 148 167.666 148H134.854C135.551 146.007 135.995 143.821 135.995 141.571L135.75 131.071C135.75 121.51 130.136 117.858 124.162 113.971C122.772 113.067 121.363 112.15 120 111.143C119.981 111.123 119.962 111.098 119.941 111.07C119.893 111.007 119.835 110.931 119.747 110.886C121.343 110.747 124.485 110.808 126.804 110.853Z"
                  ></path>
                </svg>
              </div>
              <div className="d-flex flex-grow-1 mx-3 single-user-data align-items-center">
                <div className="my-3">
                  <p className="mb-0">New Group</p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-2 single-user">
            <div className="d-flex align-items-center ml-3 py-2">
              <div className="d-flex align-items-center justify-content-center svg-container">
                <svg
                  viewBox="0 0 28 19"
                  height="19"
                  width="28"
                  preserveAspectRatio="xMidYMid meet"
                  className=""
                  fill="#fff"
                >
                  <path
                    className=""
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.0836 6.83416C20.0967 6.92827 20.1139 7.01977 20.1351 7.10996C20.1457 7.1557 20.1573 7.20014 20.1699 7.24328C20.1948 7.33103 20.2238 7.41741 20.257 7.50208C20.3057 7.62659 20.3631 7.74717 20.4287 7.86283C20.4722 7.93865 20.5191 8.01315 20.5692 8.08373C20.7191 8.29755 20.8986 8.48655 21.1018 8.64447C21.2385 8.74999 21.3846 8.84147 21.538 8.91765C21.6555 8.97548 21.7769 9.0244 21.9011 9.06404C21.9848 9.09019 22.0705 9.11241 22.1581 9.13071C22.3376 9.16709 22.52 9.18547 22.7028 9.1856C24.1656 9.1856 25.3514 7.93912 25.3514 6.40152C25.3514 4.86391 24.1656 3.61742 22.7028 3.61742C22.52 3.61691 22.3375 3.6353 22.1581 3.67233C22.0713 3.68975 21.9855 3.712 21.9011 3.73899C21.7769 3.77819 21.6556 3.82668 21.538 3.88408C21.1547 4.07401 20.8219 4.36045 20.5692 4.71799C20.5195 4.78988 20.4722 4.86308 20.4287 4.9402C20.3629 5.05573 20.3055 5.17632 20.257 5.30095C20.2243 5.38461 20.1948 5.47087 20.1699 5.55845C20.1573 5.60289 20.1457 5.64733 20.1351 5.69177C20.1139 5.78196 20.0967 5.87346 20.0836 5.96757C20.0442 6.25494 20.0442 6.54678 20.0836 6.83416ZM7.91635 6.83416C7.90392 6.92827 7.88614 7.01977 7.865 7.10996C7.85439 7.1557 7.84278 7.20014 7.83018 7.24328C7.80534 7.33103 7.77629 7.41741 7.74314 7.50208C7.69429 7.62657 7.63685 7.74714 7.57129 7.86283C7.52789 7.93865 7.48101 8.01315 7.4309 8.08373C7.28093 8.29748 7.10143 8.48648 6.89832 8.64447C6.76157 8.74999 6.6155 8.84147 6.46212 8.91765C6.34456 8.97548 6.22322 9.0244 6.09902 9.06404C6.01521 9.09019 5.92954 9.11241 5.842 9.13071C5.66247 9.16708 5.48007 9.18546 5.29723 9.1856C3.83446 9.1856 2.64865 7.93912 2.64865 6.40152C2.64865 4.86391 3.83446 3.61742 5.29723 3.61742C5.4801 3.61692 5.66256 3.63531 5.842 3.67233C5.92873 3.68976 6.01453 3.71202 6.09902 3.73899C6.22319 3.77819 6.34453 3.82668 6.46212 3.88407C6.84541 4.07401 7.17818 4.36045 7.4309 4.71799C7.48064 4.78988 7.52789 4.86308 7.57129 4.9402C7.63709 5.05575 7.69454 5.17634 7.74314 5.30095C7.77584 5.38461 7.80531 5.47087 7.83018 5.55845C7.8427 5.60289 7.8543 5.64733 7.865 5.69177C7.88614 5.78196 7.90342 5.87345 7.91635 5.96756C7.95581 6.25494 7.95581 6.54678 7.91635 6.83416ZM27.8468 13.6264C27.8143 13.5695 27.7783 13.5074 27.7345 13.4386C27.6874 13.3645 27.6342 13.2852 27.5732 13.2006C27.5122 13.1159 27.4447 13.026 27.3688 12.9334C27.2929 12.8409 27.21 12.7456 27.1189 12.6478C26.7459 12.251 26.3196 11.9112 25.8531 11.6388C25.7058 11.5515 25.5492 11.4695 25.3839 11.3915C25.3789 11.3888 25.3745 11.3875 25.3698 11.3848C23.4911 10.5737 21.3746 10.5737 19.4959 11.3848C19.4694 11.3967 19.4445 11.41 19.4188 11.4232C19.3767 11.443 19.3381 11.4655 19.2973 11.4867C19.3202 11.4999 19.3434 11.5118 19.3661 11.525C19.8316 11.7975 20.2733 12.1107 20.6865 12.4613C20.9563 12.6896 21.213 12.9338 21.4555 13.1926C21.6054 13.3513 21.7424 13.5087 21.8677 13.6621C21.9961 13.8195 22.1086 13.9663 22.2091 14.1064C22.3125 14.2506 22.4017 14.3842 22.4814 14.5071C22.5568 14.6262 22.6206 14.732 22.6757 14.8298C22.7802 15.0091 22.8581 15.2035 22.9069 15.4064L22.9274 15.5492H28V13.9319C27.9558 13.8266 27.9046 13.7245 27.8468 13.6264ZM18.1157 4.52771C18.0952 4.37973 18.0682 4.23574 18.0348 4.09441C18.0182 4.02375 17.9999 3.95309 17.9801 3.88376C17.9407 3.74511 17.895 3.61045 17.8436 3.47846C17.767 3.28285 17.6768 3.09346 17.5736 2.91184C17.5053 2.79185 17.4318 2.67585 17.3529 2.56386C16.957 2.00113 16.4338 1.55112 15.8306 1.25463C15.646 1.16345 15.4552 1.0868 15.2598 1.02531C15.1281 0.983983 14.9934 0.947986 14.8559 0.919988C14.5739 0.86243 14.2872 0.833328 13.9999 0.833328C11.6415 0.833328 9.83784 2.72918 9.83784 5.209C9.83784 7.68881 11.6415 9.58333 13.9999 9.58333C14.2872 9.58333 14.5739 9.55423 14.8559 9.49667C14.9934 9.46867 15.1281 9.43267 15.2598 9.39134C15.4552 9.32986 15.646 9.25321 15.8306 9.16203C16.4338 8.86554 16.957 8.41553 17.3529 7.85279C17.4317 7.7408 17.5052 7.62481 17.5736 7.50482C17.6768 7.3232 17.767 7.13381 17.8436 6.9382C17.8944 6.80621 17.9407 6.67022 17.9801 6.5329C17.9999 6.46357 18.0182 6.39291 18.0348 6.32224C18.0682 6.18092 18.0952 6.03693 18.1157 5.88894C18.1776 5.43753 18.1776 4.97913 18.1157 4.52771ZM21.7225 15.3648C21.6762 15.281 21.6229 15.1891 21.5605 15.0877C21.4934 14.9795 21.4164 14.8619 21.3294 14.7376C21.2424 14.6132 21.1454 14.4807 21.0376 14.3455C20.9298 14.2104 20.8111 14.0684 20.6809 13.9265C20.4718 13.6967 20.2507 13.4796 20.0186 13.2763C19.661 12.9642 19.2789 12.6852 18.8765 12.4422C18.6664 12.3152 18.4434 12.1935 18.2074 12.0799C18.2009 12.0758 18.1942 12.0722 18.1872 12.0691C17.0911 11.5419 15.713 11.1742 13.9997 11.1742C12.2865 11.1742 10.9082 11.5419 9.81226 12.0691C9.77405 12.0867 9.73928 12.107 9.70208 12.1259C9.54196 12.2057 9.38809 12.2895 9.2402 12.3746C9.16004 12.4219 9.08166 12.4693 9.00506 12.5166C8.64626 12.7423 8.30392 12.9962 7.98093 13.2763C7.74876 13.4796 7.52762 13.6967 7.31855 13.9265C7.18863 14.0684 7.07003 14.209 6.96189 14.3455C6.85374 14.4821 6.75694 14.6118 6.66994 14.7376C6.58293 14.8633 6.50612 14.9795 6.439 15.0877C6.37658 15.1891 6.32333 15.281 6.2771 15.3648C6.27277 15.3713 6.26882 15.3781 6.26525 15.3851C6.21659 15.4729 6.17698 15.55 6.14564 15.6135C6.08297 15.7406 6.05405 15.8122 6.05405 15.8122V18.3333H21.9459V15.8122C21.8797 15.6586 21.8051 15.5092 21.7225 15.3648ZM5.08137 15.4078C5.09313 15.3077 5.1252 15.2113 5.17549 15.1248C5.2147 15.0481 5.24415 14.9556 5.30522 14.8485C5.37299 14.7308 5.42635 14.6263 5.50041 14.5087C5.57974 14.3844 5.66499 14.2508 5.76708 14.1094C5.86918 13.9679 5.98079 13.8185 6.10628 13.6651C6.23177 13.5117 6.36961 13.3531 6.52044 13.1918C7.09885 12.5757 7.75594 12.0433 8.4737 11.6091C8.54828 11.5641 8.62517 11.5192 8.7027 11.4756C8.66914 11.4584 8.63841 11.4399 8.60357 11.424C8.57785 11.4108 8.55213 11.3975 8.52642 11.3856C7.60024 10.9683 6.59752 10.7608 5.58643 10.7774C4.57538 10.7608 3.57271 10.9683 2.64657 11.3856C2.64168 11.3883 2.63731 11.3896 2.63243 11.3923C2.46681 11.4703 2.31007 11.5522 2.16259 11.6395C1.88006 11.8047 1.6118 11.9945 1.36077 12.2067C1.19789 12.345 1.04254 12.4925 0.895433 12.6483C0.804141 12.7462 0.720736 12.8414 0.645216 12.9339C0.569482 13.0265 0.501335 13.1164 0.440259 13.201C0.379183 13.2856 0.32518 13.365 0.277991 13.439C0.234273 13.5078 0.192871 13.5699 0.16034 13.6268C0.0524608 13.8145 0 13.9322 0 13.9322V15.5492H5.07198L5.08137 15.4078Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div className="d-flex flex-grow-1 mx-3 single-user-data align-items-center">
                <div className="my-3">
                  <p className="mb-0">New Community</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 mb-4 mx-4 contacts-text">
            CONTACTS ON WHATSAPP
          </div>
          <div className="all-users-section">
            {userList === undefined ? (
              <div className="m-3"> You don't have friends :( </div>
            ) : (
              userList
                .filter((user: any) =>
                  user.username.toLowerCase().includes(query.toLowerCase())
                )
                .map((e: IUser, i: number) => {
                  return (
                    <SingleUser
                      data={e}
                      key={i}
                      hideUsers={props.showUsersMenu}
                    />
                  );
                })
            )}
          </div>
        </div>
      </Col>
    </>
  );
};

export default UsersMenu;
