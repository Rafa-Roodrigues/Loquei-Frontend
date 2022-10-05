import { createContext, useContext, useState } from "react";

const AnnouncementContext = createContext();

export function AnnouncementProvider({ children }) {
    const[announcements, setAnnouncements] = useState([]);

    return (
        <AnnouncementContext.Provider value={{announcements, setAnnouncements}}>
            { children }
        </AnnouncementContext.Provider>
    )
}

export function useAnnouncement() {
    return useContext(AnnouncementContext);
}