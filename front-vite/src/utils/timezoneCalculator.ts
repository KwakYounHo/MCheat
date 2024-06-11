export default {
  toMy: (time: string) => {
    const timeCode = new Date(time).toString().split(" ");
    const _timeCode = {
      day: timeCode[2],
      month: timeCode[1],
      year: timeCode[3],
    };
    return `${_timeCode.day}. ${_timeCode.month}. ${_timeCode.year}`;
  },
};
