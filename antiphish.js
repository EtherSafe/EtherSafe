/* Check if the URL has been in a blacklist */

let url = 'https://raw.githubusercontent.com/MetaMask/eth-phishing-detect/master/src/config.json';

fetch(url)
.then(res => res.json())
.then((out) => {
	for(var x = 0;x<out.blacklist.length;x++)
	{
		if(document.location.host == out.blacklist[x])
		{
			document.outerHTML = "";
			document.body.parentNode.innerHTML = `<head>
    <title>Phishing Warning</title>

    <style>
body {
	background: #c50000;
	padding: 50px;
}
.container {
  background: #c50000;
  padding: 50px;
  display: flex;
  justify-content: center;
  font-family: sans-serif;
}

.centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  max-width: 600px;
}

a {
  color: white;
}

    </style>

    

  </head>

  <body>
  <center>
  <img src="`+chrome.runtime.getURL("icon256.png")+`">
  </center>	
  <div class="container">
    <div class="centered">


      <h3>ATTENTION</h3>
      <p>EtherSafe believes this domain to have malicious intent and has prevented you from interacting with it.</p>
      <p>This is because the site tested positive on the <a href="https://github.com/metamask/eth-phishing-detect">Ethereum Phishing Detector</a>.</p>
      <p>You can turn EtherSafe off to interact with this site, but it's advised not to.</p>
      <p>If you think this domain is incorrectly flagged, <a href="https://github.com/metamask/eth-phishing-detect/issues/new">please file an issue</a>.</p>

    </div>
  </div>


</body>`;
			break;	
		}
	}
})
.catch(err => { throw err });

