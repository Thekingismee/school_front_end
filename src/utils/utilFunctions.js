import axios from "axios";
import { BACKEND_URL } from "../redux/actions/api";

export const download = id => docType => {
    const cnxAccessToken = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
    axios.defaults.headers.common["Authorization"] = `Bearer ${cnxAccessToken}`;
    axios({
        url: BACKEND_URL + "/api/v1/" + docType + "/download?idAlfresco=" + id, // url
        method: "GET",
        responseType: "blob" // important
    }).then(response => {
        // create file link in browser's memory
        const href = URL.createObjectURL(response.data);

        // create "a" HTML element with href to file & click
        const link = document.createElement("a");
        link.href = href;
        link.setAttribute("download", "Document.pdf");
        document.body.appendChild(link);
        link.click();

        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    });
};

export function replaceWord(switchFrom, switchTo, str) {
    return str.replace(switchFrom, switchTo);
}

export function formatControlString(str) {
    return str
        .replace(/ctrl_/gi, "Control ") // Replace "ctrl_" with "control "
        .replace(/_/g, " ") // Replace remaining underscores with spaces
        .trim(); // Remove any extra spaces
}
