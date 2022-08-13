const data = ["B3","D2","F1","A9","D12","A2","C1","Z0","B1"]

const getCha = (e) => e[0]
const getIndex = (e) => parseInt(e.substring(1))
const filt = (a, b) => {
	
	const ai = getIndex(a)
	const bi = getIndex(b)
	
	if(ai != bi) return ai > bi ? 1 : -1
	return getCha(a) > getCha(b) ? 1 : -1
	
}

console.log(data.sort(filt))