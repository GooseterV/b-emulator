const fs = require('fs');
const init = fs.readFileSync('./view/init.js', 'utf8');

let e = setInterval(() => {
	if (document.body) {
		if (Array.from(document.body.children).filter(e=>e.localName==="script").length < 35 
			&& document.location.toString().includes("dashboard")) return;
		clearInterval(e);
		let scriptBase = document.location.toString().includes("https://dashboard.blooket.com") ? 
			`http://localhost:5500/scripts/` : (document.location.toString().includes("https://play.blooket.com") ?
			`http://localhost:5500/play-scripts/`: `http://localhost:5500/id-scripts/`);
		const locScript = document.createElement("script");
		locScript.id = "locScript";
		
		window.open = function () {
			console.log(arguments[0])
			location.href = arguments[0];
			return;
		};
		locScript.innerHTML = init;
		for (let script of Array.from(document.body.children).filter(e=>e.localName==="script")) {
			if (script.outerHTML.includes("main~")) {
				let src = `${scriptBase}${script.src.replace('https://dashboard.blooket.com/', '').replace('https://id.blooket.com/', '').replace('https://play.blooket.com/', '').split('?')[0]}`;
				console.log(`Loaded script: ${script.src}`);
				script.src = src;
				script.remove();
				fetch(src, {method:"GET"}).then(r=>r.text()).then(t=>eval(t));
			};
		};
		document.body.appendChild(locScript);
	};
}, 0);