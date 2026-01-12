// mindmap.js

function createMindMap() {
    const mindMapContainer = document.createElement("div");
    mindMapContainer.style.position = "fixed";
    mindMapContainer.style.top = "0";
    mindMapContainer.style.left = "0";
    mindMapContainer.style.width = "100%";
    mindMapContainer.style.height = "100%";
    mindMapContainer.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    mindMapContainer.style.zIndex = "1000";
    mindMapContainer.style.overflow = "auto";
    mindMapContainer.innerHTML = `
        <h2 style="text-align: center;">Mind Map</h2>
        <button onclick="closeMindMap()">Close</button>
        <div id="jsmind_container" style="width: 100%; height: 80vh;"></div>
    `;
    document.body.appendChild(mindMapContainer);

    // Initialize jsMind
    const mind = {
        "meta": {
            "name": "example",
            "version": "1.0"
        },
        "format": "node_tree",
        "data": {
            "id": "root",
            "topic": "Mind Map",
            "children": [
                {
                    "id": "sub1",
                    "topic": "Sub Topic 1",
                    "children": [
                        { "id": "sub1-1", "topic": "Sub Topic 1.1" },
                        { "id": "sub1-2", "topic": "Sub Topic 1.2" }
                    ]
                },
                {
                    "id": "sub2",
                    "topic": "Sub Topic 2"
                }
            ]
        }
    };

    const options = {
        container: 'jsmind_container',
        editable: true,
        theme: 'default'
    };

    const jm = new jsMind(options);
    jm.show(mind);
}

function closeMindMap() {
    const mindMapContainer = document.querySelector("div[style*='position: fixed']");
    if (mindMapContainer) {
        document.body.removeChild(mindMapContainer);
    }
}

// Event listener for the mind map button
document.getElementById("mindMapBtn").addEventListener("click", createMindMap);