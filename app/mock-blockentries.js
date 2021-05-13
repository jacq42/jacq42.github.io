"use strict";
exports.BLOCKENTRIES = [
    { "id": 1, tags: ['xpath'], title: "Ignore first element in xPath", text: "Wenn man in einem xPath Ausdruck das erste Element ignorieren m&ouml;chte: <code>(xpath)[position()>1]</code>" },
    { "id": 2, tags: ['java', 'junit'], title: "JUnit Rules", text: "Rules" },
    { "id": 3, tags: ['java', 'xml'], title: "Java to XML", text: "JAXB" },
    { "id": 4, tags: ['java', 'json'], title: "Java to json", text: "Jackson" },
    { "id": 5, tags: ['spring', 'junit'], title: "Spring Test", text: "Konfiguration f&uuml;r Springtests" },
    { "id": 6, tags: ['javascript', 'angularjs'], title: "AngularJS HTML Binding", text: "Manchmal m&ouml;chte man einen String als HTML ausgeben (so wie diesen Text). <br/><br/> Ausgabe als String: <pre>&lt;p&gt;{{value}}&lt;/p&gt;</pre> Ausgabe als HTML: <pre>&lt;p [innerHtml]='value'&gt;&lt;/p&gt;</pre>" },
    { "id": 7, tags: ['javascript', 'googlecode'], title: "Encrypt String with Javascript", text: "Einbinden der Google API: <pre>&lt;script src='http://crypto-js.googlecode.com/files/2.5.3-crypto-sha1-hmac-pbkdf2-blockmodes-aes.js'&gt;&lt;/script&gt;</pre> Encrypten: <pre>Crypto.AES.encrypt('Message', 'My Secret Passphrase');</pre> Decrypten: <pre>Crypto.AES.decrypt(msg, secret);</pre> Beispiel f&uuml;r Mail:<pre>&lt;a href='javascript:decryptString('mit_encrypt_erstellter_string', 'secret')'&gt;Mail&lt;/a&gt;\n..\nfunction decryptString(msg,secret) {\n\tlocation.href=Crypto.AES.decrypt(msg, secret);\n}</pre> Link zur <a href='https://code.google.com/archive/p/crypto-js/'>Google API</a>" }
];
//# sourceMappingURL=mock-blockentries.js.map