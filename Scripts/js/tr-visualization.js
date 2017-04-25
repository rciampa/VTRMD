/* 
 * @author rciampa
 */



/*
 * Creates the container for each location which contians one or
 * more tests with different MasterTest_ID test numbers
 */
function createLocationContainer(locationID){
    
    var locationContainer = document.createElement("div");
    
    locationContainer.setAttribute("id", locationID);
    locationContainer.setAttribute("class", "vis-location-container")
    
    return locationContainer;
}

/*
 * Creates the container for each indavidual test. Each test container will
 * have the MasterTest_ID number from the CalSpeed database as its html element
 * id attribute. 
 */
function createTestContainer(masterTestID){
    
    var testContainer = document.createElement("div");
    
    testContainer.setAttribute("id", masterTestID);
    testContainer.setAttribute("class", "-test-container");
    
    return testContainer;
}

function makeHopCircle(isp, rtt){
    
    var circle = document.createElement("div");
    circle.setAttribute("class", "std-circle");
    circle.setAttribute("title", isp + " : " + rtt);
    
    return circle;
}
