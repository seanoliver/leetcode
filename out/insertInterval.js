"use strict";
function insert(intervals, newInterval) {
    const merged = [];
    let i = 0;
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        merged.push(intervals[i]);
        i++;
    }
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    merged.push(newInterval);
    // Merge remaining intervals in-place
    for (; i < intervals.length; i++) {
        merged.push(intervals[i]);
    }
    return merged;
}
