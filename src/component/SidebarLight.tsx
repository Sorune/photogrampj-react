import React from "react";
import {
    List,
    Card,
    Avatar,
    ListItem,
    Accordion,
    Typography,
    AccordionBody,
    ListItemPrefix, Button,
} from "@material-tailwind/react";
import {
    TicketIcon,
    UserGroupIcon,
    Square2StackIcon,
    RectangleGroupIcon,
    ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/solid';
import {
    ChevronDownIcon,
    ArrowLeftStartOnRectangleIcon, Cog6ToothIcon, UserIcon,
} from '@heroicons/react/24/outline';
import {useSelector} from "react-redux";
import {RootState} from "../store/store.tsx";
import useAuth from "../hooks/useAuth.tsx";

export function SidebarLight() {
    const [open, setOpen] = React.useState(0);

    const {role} = useSelector((state: RootState) => state.member);
    const {accessToken} = useSelector((state:RootState)=> state.token);

    const {goToLogin,goToLogout,goToRegister} = useAuth();

    const handleOpen = (value: any) => {
        setOpen(open === value ? 0 : value);
    };

    const LIST_ITEM_STYLES =
        "select-none hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 data-[selected=true]:text-gray-900";

    return (
        <Card className="h-screen w-full max-w-[20rem] mx-auto p-6 shadow-md sticky top-0">
            <div className="mb-2 grid grid-rows-2 justify-content-center items-center">
                <img
                    src="src/assets/Photogram_extracted_logo.svg"
                    alt="brand"
                    className="h-9 w-9"
                />
                <Typography color="blue-gray" className="text-lg font-bold">
                    Photogram
                </Typography>
            </div>
            <hr className="my-2 border-gray-200" />
            <List>
                <Accordion open={open === 2}>
                    <ListItem
                        selected={open === 2}
                        data-selected={open === 2}
                        onClick={() => handleOpen(2)}
                        className="px-3 py-[9px] select-none hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 data-[selected=true]:text-gray-900"
                    >
                        <ListItemPrefix>
                            <RectangleGroupIcon className="h-5 w-5"/>
                        </ListItemPrefix>
                        <Typography className="mr-auto font-normal text-inherit">
                            Dashboard
                        </Typography>
                        <ChevronDownIcon
                            strokeWidth={3}
                            className={`ml-auto h-4 w-4 text-gray-500 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                        />
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem className={`px-12 ${LIST_ITEM_STYLES}`}>
                                Analytics
                            </ListItem>
                            <ListItem className={`px-12 ${LIST_ITEM_STYLES}`}>
                                Sales
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <ListItem className={LIST_ITEM_STYLES}>
                    <ListItemPrefix>
                        <Square2StackIcon className="h-5 w-5"/>
                    </ListItemPrefix>
                    Products
                </ListItem>
                <ListItem className={LIST_ITEM_STYLES}>
                    <ListItemPrefix>
                        <TicketIcon className="h-5 w-5"/>
                    </ListItemPrefix>
                    Orders
                </ListItem>
                <ListItem className={LIST_ITEM_STYLES}>
                    <ListItemPrefix>
                        <UserGroupIcon className="h-5 w-5"/>
                    </ListItemPrefix>
                    Customers
                </ListItem>
                <hr className="my-2 border-gray-200"/>
                {/*User Menu*/}
                {!accessToken||role ==='Anonymous'?(
                    <div className="w-full gap-2 flex justify-between">
                        <Button onClick={goToLogin}> Login</Button>
                        <Button onClick={goToRegister}> Register</Button>
                    </div>
                )  : (
                    <Accordion open={open === 1}>
                        <ListItem
                            selected={open === 1}
                            data-selected={open === 1}
                            onClick={() => handleOpen(1)}
                            className="p-3 select-none hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 data-[selected=true]:text-gray-900"
                        >
                            <ListItemPrefix>
                                <Avatar
                                    size="sm"
                                    src="https://www.material-tailwind.com/img/avatar1.jpg"
                                />
                            </ListItemPrefix>
                            <Typography className="mr-auto font-normal text-inherit">
                                Brooklyn Alice
                            </Typography>
                            <ChevronDownIcon
                                strokeWidth={3}
                                className={`ml-auto h-4 w-4 text-gray-500 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                            />
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                                    <ListItemPrefix>
                                        <UserIcon
                                            strokeWidth={2.5}
                                            className="h-5 w-5"
                                        />
                                    </ListItemPrefix>
                                    My Profile
                                </ListItem>
                                <ListItem className={`px-16 ${LIST_ITEM_STYLES}`}>
                                    <ListItemPrefix>
                                        <Cog6ToothIcon
                                            strokeWidth={2.5}
                                            className="h-5 w-5"
                                        />
                                    </ListItemPrefix>
                                    Settings
                                </ListItem>
                                <ListItem className={`px-16 ${LIST_ITEM_STYLES}`} onClick={goToLogout}>
                                    <ListItemPrefix>
                                        <ArrowLeftStartOnRectangleIcon
                                            strokeWidth={2.5}
                                            className="h-5 w-5"
                                        />
                                    </ListItemPrefix>
                                    Sign Out
                                </ListItem>
                            </List>
                        </AccordionBody>
                    </Accordion>

                    )}
            </List>
            <hr className="my-2 border-gray-200"/>
            <List>
                <ListItem className={LIST_ITEM_STYLES}>
                    <ListItemPrefix>
                        <ChatBubbleLeftEllipsisIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Help & Support
                </ListItem>
            </List>
        </Card>
    );
}
