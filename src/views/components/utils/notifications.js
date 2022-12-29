// import { notification } from "antd";

export const createNotification =
  (type, backgroundColor) => (title, description) => () => {
    // notification[type]({
    //   message: title || type,
    //   description: description,
    //   style: {
    //     backgroundColor: backgroundColor,
    //   },
    // });

    //TODO: change with proper notification from UI Design
    console.log("error ", title, description);
  };

export const createSuccessNotification = createNotification(
  "success",
  "#F6FFF3"
);
export const createErrorNotification = createNotification("error", "#FFF3F3");
export const createWarningNotification = createNotification(
  "warning",
  "#FFFFEF"
);
export const createInfoNotification = createNotification("info", "#F3F9FF");
