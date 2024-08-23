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
  if (!usingSupabase) {
    /* MAKE CHANGES: start*/


    CAM.addElement(new NodeCAM(0, "Einkauf  Wochenmarkt", {
      x: 950,
      y: 400
    }, true, true, true));


    CAM.addElement(new NodeCAM(1, "frische Lebensmittel", {
      x: 950,
      y: 200
    }, true, true, true));

    
    CAM.addElement(new NodeCAM(-2, "teuer", {
      x: 850,
      y: 550
    }, true, true, true));


    var connector1 = new ConnectorCAM();
    connector1.establishConnection(CAM.nodes[1], CAM.nodes[0], IncreaseSliderIntensity, false);
    connector1.intensity = 3;
    connector1.value = 4;
    connector1.isDeletable = true;
    connector1.agreement = true;

    CAM.addElement(connector1);

    var connector1 = new ConnectorCAM();
    connector1.establishConnection(CAM.nodes[2], CAM.nodes[0], IncreaseSliderIntensity, false);
    connector1.intensity = 9;
    connector1.value = 1;
    connector1.isDeletable = true;
    connector1.agreement = false;

    CAM.addElement(connector1);


    /* MAKE Changes: end*/
/*

    CAM.addElement(new NodeCAM(0, "Central Concept", {
      x: 650,
      y: 400
    }, false, false, false));


    CAM.addElement(new NodeCAM(0, "concept2", {
      x: 800,
      y: 400
    }, false, false, false));

    var connector1 = new ConnectorCAM();
    connector1.establishConnection(CAM.nodes[0], CAM.nodes[1], IncreaseSliderIntensity, false);
    connector1.value = 1;
    connector1.isDeletable = false;
    CAM.addElement(connector1);
*/
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