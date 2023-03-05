export type Answer = {
	id: number
	text: string
}

export type Quiz = {
	id: number
	rightAnswerId: number
	question: string
	answers: Answer[]
}

