document.addEventListener ("DOMContentLoaded", () => {
	//SMOOTH SCROLLING
	liList = document.querySelectorAll ("li");
	if (liList == undefined) {
		return;
	}
	liList.forEach (liElem => {
    	liElem.addEventListener ("click", function (e) {
    		var aTag = liElem.childNodes[0];
        	if (liElem.parentNode.parentNode.tagName.toLowerCase () == "nav") {
        		if (/^#/.test (aTag.getAttribute ("href"))) {
        			e.preventDefault ();
        			document.querySelector (aTag.getAttribute ("href")).scrollIntoView ({
	            		behavior: "smooth"
        			});
        		} else {
        			location.href = aTag.getAttribute ("href");
        		}
        	}
    	});
    });
	//COLLAPSABLE-NAV
	document.addEventListener ("click", (event) => {
		var ev = event.target;
		var nav = document.getElementsByClassName ("collapsable-nav")[0];
		if (nav == undefined) {
			return;
		}
		if (ev.classList.contains ("collapsable-nav")) {
			ev.classList.toggle ("showing-content");
		} else if (nav.classList.contains ("showing-content")) {
			nav.classList.toggle ("showing-content");
		}
	});
});


