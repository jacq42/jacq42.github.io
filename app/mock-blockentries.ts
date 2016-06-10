/**
 * Mockdaten für Blockeinträge
 */
import { Blockentry } from './blockentry';

export var BLOCKENTRIES: Blockentry[] = [
  { "id": 1, tags: [ 'xpath' ]; title: "Ignore first element in xPath", text: "Wenn man in einem xPath Ausdruck das erste Element ignorieren m&ouml;chte: <code>(xpath)[position()>1]</code>" },                                  
  { "id": 2, tags: [ 'java', 'junit' ]; title: "JUnit Rules", text: "Rules" },
  { "id": 3, tags: [ 'java', 'xml' ]; title: "Java to XML", text: "JAXB" },
  { "id": 4, tags: [ 'java', 'json' ]; title: "Java to json", text: "Jackson" },
  { "id": 5, tags: [ 'spring','junit' ]; title: "Spring Test", text: "Konfiguration f&uuml;r Springtests" },
  { "id": 6, tags: [ 'javascript','angularjs' ]; title: "AngularJS HTML Binding", text: "Manchmal m&ouml;chte man einen String als HTML ausgeben (so wie diesen Text). <br/><br/> Ausgabe als String: <pre>&lt;p&gt;{{value}}&lt;/p&gt;</pre> Ausgabe als HTML: <pre>&lt;p [innerHtml]='value'&gt;&lt;/p&gt;</pre>" }
];
