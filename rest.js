let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
/*response*/
let responseStatusEl = document.getElementById("responseStatus");
let responseBodyEl = document.getElementById("responseBody");

let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");
/*formData*/
let formData = {
    requestUrl: "https://gorest.co.in/public-api/users",
    requestMethod: "POST",
    requestBody: "",
};
/*url*/
requestUrlEl.addEventListener("change", function(event) {
    formData.requestUrl = event.target.value;
});

/*method*/
requestMethodEl.addEventListener("change", function(event) {
    formData.requestMethod = event.target.value;
});

requestBodyEl.addEventListener("change", function(event) {
    formData.requestBody = event.target.value;
});

function validreq(formData) {
    let {
        requestUrl
    } = formData;
    if (requestUrl === "") {
        requestUrlErrMsgEl.textContent = "Required*";
    } else {
        requestUrlErrMsgEl.textContent = "";
    }
}

function sendRequest(formData) {
    let {
        requestUrl,
        requestMethod,
        requestBody
    } = formData;
    let options = {
        method: requestMethod,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
        },
        body: requestBody,
    };
    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            responseStatusEl.value = jsonData.code;
            responseBodyEl.value = JSON.stringify(jsonData);
        });

}



consoleFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validreq(formData);
    sendRequest(formData);
});
