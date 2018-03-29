
var w1Problems = {
		sectionName: "warmup-1",
		problems: [
			{
				title: "sleepIn", 
				
				description: "The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.",

				functionSignature: "function sleepIn(vacation, weekday)",

				parameters: [ "vacation", "weekday" ],

				testData: [
					// each object here represents a row of a data instance for same test case
							{
								parameters: [ true, true ], 
								expectedResult: true
							},
							{
								parameters: [ true, false ], 
								expectedResult: true
							},
							{
								parameters: [ false, false ], 
								expectedResult: true
							},
							{
								parameters: [ false, true ], 
								expectedResult: false
							}
						]

			},
			{
				title: "monkeyTrouble", 
				
				description: "We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.",

				functionSignature: "function monkeyTrouble(aSmile, bSmile)",

				parameters: [ "aSmile", "bSmile" ],

				testData: [
							{
								parameters: [ true, true ], 
								expectedResult: true
							},
							{
								parameters: [ true, false ], 
								expectedResult: false
							},
							{
								parameters: [ false, false ], 
								expectedResult: true
							},
							{
								parameters: [ false, true ], 
								expectedResult: false
							}
						]
			}
		]
	};
