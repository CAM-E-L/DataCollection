/* default CAM which will be redrawn if CAM is deleted
function shuffle(queslist) {
    let array_emp = [];
    for (var i = 0; i < queslist.length; i++) {
      array_emp.push(i);
    }
  
    let j, x;
    for (i = array_emp.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = array_emp[i];
      array_emp[i] = array_emp[j];
      array_emp[j] = x;
    }
    return array_emp;
  }

const ConceptsCAM = ["A1", "A2"];
const index_ConceptsCAM = shuffle(ConceptsCAM);
console.log("index_ConceptsCAM:", index_ConceptsCAM);
 */

function defaultCAM() {
  if (!usingMangoDB) {
    /* MAKE CHANGES: start*/


    CAM.addElement(new NodeCAM(0, "aaa", {
      x: 800,
      y: 400
    }, true, true, true));

    CAM.addElement(new NodeCAM(-1, "leckere Lebensmittel  ", {
      x: 1000,
      y: 300
    }, true, true, true));

    CAM.addElement(new NodeCAM(-1, "wenig Auswahl", {
      x: 1000,
      y: 600
    }, true, true, true));

    var connector1 = new ConnectorCAM();
    connector1.establishConnection(CAM.nodes[0], CAM.nodes[1], IncreaseSliderIntensity, true);
    connector1.value = 1;
    connector1.isDeletable = false;
    CAM.addElement(connector1);

    var connector2 = new ConnectorCAM();
    connector2.establishConnection(CAM.nodes[0], CAM.nodes[2], IncreaseSliderIntensity, true);
    connector2.value = 3;
    connector2.isDeletable = false;
    CAM.addElement(connector2);


/*
    var connector1 = new ConnectorCAM();
    connector1.establishConnection(CAM.nodes[0], CAM.nodes[1], IncreaseSliderIntensity, true);
    connector1.value = 3;
    connector1.intensity = connector1.value * IncreaseSliderIntensity;
    connector1.isDeletable = false;
    CAM.addElement(connector1);
*/

    /* MAKE Changes: end*/
  } else {
    // add nodes from fetched data
    camMother.nodes.forEach((element) => {
      element.kind = "Node";
      element.comment = "";
      element.eventLog = [];
      element.isActive = true;
      element.isConnectorSelected = false;
      element.isSelected = false;
      CAM.importElement(element);
    });
    // add connectors from fetched data
    camMother.connectors.forEach((element) => {
      element.kind = "Connector";
      element.eventLog = "";
      CAM.importElement(element);
    });
  }

  CAM.draw();
}