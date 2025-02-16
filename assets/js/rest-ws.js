(() => {
  // src/client/samples/rest-ws.ts
  var sendRequestButton = document.getElementById("send-request");
  var sendRequestWithContentButton = document.getElementById("send-request-with-content");
  sendRequestWithContentButton.addEventListener("click", () => {
    let msg = `${self.crypto.randomUUID().substring(0, 5)}`;
    let responseDiv = document.getElementById("response");
    if (!responseDiv) {
      throw new Error("No element with ID `response`");
    }
    getMessageWithContent(msg).then((rspMsg) => {
      responseDiv.innerHTML = `${rspMsg.message}, ${rspMsg.timestamp}`.toString();
    });
  });
  sendRequestButton.addEventListener("click", () => {
    let response = document.getElementById("response");
    if (!response) {
      throw new Error("No element with ID `response`");
    }
    getMessage().then((msg) => {
      response.innerHTML = `${msg.message}, ${msg.timestamp}`.toString();
    });
  });
  function getMessageWithContent(msg) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    const request = new Request(`http://localhost:5000/open/${msg}`, {
      method: "GET",
      headers
    });
    return fetch(request).then((res) => res.json()).then((res) => {
      return res;
    });
  }
  function getMessage() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    const request = new Request("http://localhost:5000/hello", {
      method: "GET",
      headers
    });
    return fetch(request).then((res) => res.json()).then((res) => {
      return res;
    });
  }
})();
