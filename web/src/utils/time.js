export function getTimeOfNow(timeStr) {
    if (!timeStr) { return ''; }
    const time = new Date(timeStr);
    if ('' + time === 'Invalid Date') { return ''; }
    const currentTime = new Date();
    const timeInterval = Math.abs(currentTime.getTime() - time.getTime());
    if (timeInterval < 1000) {
        return '刚刚';
    }
    if (timeInterval < 60000) {
        return `${Math.floor(timeInterval / 1000)}秒前`;
    }
    if (timeInterval < 3600000) {
        return `${Math.floor(timeInterval / 60000)}分钟前`;
    }
    if (timeInterval < 86400000) {
        return `${Math.floor(timeInterval / 3600000)}小时前`;
    }
    return `${Math.floor(timeInterval / 86400000)}天前`;
}
