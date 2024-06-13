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

    CAM.addElement(new NodeCAM(0, "central (change me!)", {
      x: 900,
      y: 700
    }, true, true, true));

    CAM.addElement(new NodeCAM(-1, "Löwen essen Äpfel", {
      x: 100,
      y: 300
    }, true, true, true));

    CAM.addElement(new NodeCAM(-2, "Pandabären Zentrum", {
      x: 300,
      y: 300
    }, true, true, true));

    CAM.addElement(new NodeCAM(-3, "Mentale Verwirrung", {
      x: 500,
      y: 300
    }, true, true, true));

    CAM.addElement(new NodeCAM(1, "Mentale Modelle Freiburgs", {
      x: 300,
      y: 400
    }, true, true, true));

    CAM.addElement(new NodeCAM(2, "doch!!!", {
      x: 500,
      y: 400
    }, true, true, true));

    CAM.addElement(new NodeCAM(3, "auf gehts SCF", {
      x: 700,
      y: 400
    }, true, true, true));


    var connector1 = new ConnectorCAM();
    connector1.establishConnection(CAM.nodes[1], CAM.nodes[2], IncreaseSliderIntensity, true);
    connector1.value = 1;
    connector1.intensity = connector1.value * IncreaseSliderIntensity;
    CAM.addElement(connector1);

    var connector1 = new ConnectorCAM();
    connector1.establishConnection(CAM.nodes[2], CAM.nodes[3], IncreaseSliderIntensity, true);
    connector1.value = 2;
    connector1.intensity = connector1.value * IncreaseSliderIntensity;
    CAM.addElement(connector1);

    var connector1 = new ConnectorCAM();
    connector1.establishConnection(CAM.nodes[4], CAM.nodes[5], IncreaseSliderIntensity, true);
    connector1.value = 3;
    connector1.intensity = connector1.value * IncreaseSliderIntensity;
    connector1.isDeletable = false;
    CAM.addElement(connector1);


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