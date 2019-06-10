let chartTitle = "A internet em 60 segundos";
let labels = new Array("Scrolls no Instagram", "Downloads Play Store e App Store", "Horas assistidas na Netflix", "Compras realizadas ($)", "Visualizações no Twitch", "Logins no Facebook", "Swipes no Tinder", "Pesquisas no Google", "Views no Youtube", "E-mails enviados");
let data2018 = new Array(174000, 375000, 266000, 862823, 936073, 973000, 1100000, 3700000, 4300000, 187000000);
let data2019 = new Array(347222, 390030, 694444, 996956, 1000000, 1000000, 1400000, 3800000, 4500000, 188000000);
let difference = data2019.map((d19, index) => {
	let diff = ((d19/data2018[index])*100)-100;
	let rounded = diff.toFixed(2);
	if (rounded > 0) {
		return "+" + rounded + "%";
	} else {
		return rounded + "%";
	}
});

document.addEventListener("DOMContentLoaded", createChart0 = () => {
	console.log(difference);
	let trace2018 = {
		x: data2018,
		y: labels,
		name: "2018",
		orientation: "h",
		marker: {
			color: "#324b6e"
		},
		type: "bar",
		hoverinfo: "x"
	};
	let trace2019 = {
		x: data2019,
		y: labels,
		name: "2019",
		orientation: "h",
		marker: {
			color: "#b23232",
			hoverinfo: "x"
		},
		type: "bar",
		hoverinfo: "x",
		text: difference,
		textposition: "auto"
	};

	let data = [trace2018, trace2019];

	let layout = {
		title: {
			text: chartTitle,
			font: {
				size: 20,
			}
		},
		barmode: "relative",
		bargap: 0.1,
		plot_bgcolor: "transparent",
		paper_bgcolor: "transparent",
		font: {
			family: "Montserrat Alternates",
			size: 16,
			color: "#666"
		},
		legend: {
			x: 1,
			y: 0
		},
		annotations: [{
			xref: 'paper',
			yref: 'paper',
			x: 1,
			y: -0.23,
			text: "Fonte: <a href='https://twitter.com/lorilewis'>LoriLewis</a> e <a href='https://twitter.com/OfficiallyChadd'>OfficiallyChadd</a><br>Gráfico: <a href='https://wgrocha.github.io'>Willian Rocha</a>",
			showarrow: false,
			font:{
				family: "Arial",
				size: 11,
				color: "#999"
			}
		}],
		xaxis: {
			type: "log",

		},
		yaxis: {
		},
		margin: {
			l: 320,
			r: 100,
			pad: 10
		},
	};

	Plotly.newPlot("chart0-div", data, layout);
});
