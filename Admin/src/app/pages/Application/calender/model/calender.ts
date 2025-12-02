export interface CalendarInfo {
    title: string,
    start: string,
    end: string,
    allDay?: boolean,
    description:string,
    venue: string,
    className?: string,
}

export enum OpenPopupType {
    NoPopupOpen,
    ConfirmationPopup,
    AddOrEditPopup,
    ShowEventPopup,
}

export enum EventProccess {
    EventDel,
    EventAdd,
    EventEdit,
    OpenEditModel,
}