import moment from "moment";

class TimeFormatter {
  static unixToHumanReadable(timestamp, format = "YYYY-MM-DD HH:mm:ss") {
    return moment.unix(timestamp).format(format);
  }
}

export default TimeFormatter;
