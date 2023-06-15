export const addPrevValue = (log, prevLog = null) => {
	return log.times.map((item, index) => ({
		...item,
		prevWeight: prevLog ? prevLog.times[index].weight : 0,
		prevRepeated: prevLog ? prevLog.times[index].repeat : 0
	}))
}
