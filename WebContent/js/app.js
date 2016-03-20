function $ (id) {
	return document.getElementById(id);
}

var xhr = new XMLHttpRequest();

function upload () {
	var formData = new FormData();
	formData.append("file", $("file").files[0]);	
	
	xhr.onreadystatechange = function () {
		if (xhr.status === 200 && xhr.readyState === 4) {
			$("uploadStatus").textContent = xhr.responseText + "\nFile uploaded";
		}
	}
	
	xhr.open("post", "./file", true);	
	xhr.send(formData);
	
}

function download () {
	var url = "./get-file";
	var downloadWindow = window.open(url);
}