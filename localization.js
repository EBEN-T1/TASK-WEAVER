// localization.js

const translations = {
    en: {
        title: "TaskWeaver",
        addTask: "Add Task",
        completion: "Completion",
        points: "Points",
        mindMap: "Mind Map",
        toggleAccessibility: "Toggle Accessibility"
    },
    es: {
        title: "Tejedor de Tareas",
        addTask: "Agregar Tarea",
        completion: "Finalización",
        points: "Puntos",
        mindMap: "Mapa Mental",
        toggleAccessibility: "Alternar Accesibilidad"
    },
    fr: {
        title: "Tisseur de Tâches",
        addTask: "Ajouter une Tâche",
        completion: "Achèvement",
        points: "Points",
        mindMap: "Carte Mentale",
        toggleAccessibility: "Basculer l'Accessibilité"
    },
    de: {
        title: "Aufgabenweber",
        addTask: "Aufgabe Hinzufügen",
        completion: "Abschluss",
        points: "Punkte",
        mindMap: "Mind Map",
        toggleAccessibility: "Barrierefreiheit Umstellen"
    },
    nl: {
        title: "Taakwever",
        addTask: "Taak Toevoegen",
        completion: "Voltooiing",
        points: "Punten",
        mindMap: "Mindmap",
        toggleAccessibility: "Toegankelijkheid Wisselen"
    },
    ig: {
        title: "Ndị Na-arụ Ọrụ",
        addTask: "Tinye Ọrụ",
        completion: "Nkwụsịrị",
        points: "Punkte",
        mindMap: "Ebe E Si Nweta",
        toggleAccessibility: "Gbanwee Nchekwa"
    },
    pj: {
        title: "TaskWeaver",
        addTask: "Add Am",
        completion: "Completion",
        points: "Points",
        mindMap: "Mind Map",
        toggleAccessibility: "Toggle Accessibility"
    }
};

let currentLanguage = 'en';

function setLanguage(language) {
    currentLanguage = language;
    document.getElementById("appTitle").innerText = translations[language].title;
    document.getElementById("addTaskBtn").innerText = translations[language].addTask;
    document.getElementById("completionPercentage").innerText = translations[language].completion;
    document.getElementById("rewards").innerText = translations[language].points;
    document.getElementById("mindMapBtn").innerText = translations[language].mindMap;
    document.getElementById("toggleAccessibility").innerText = translations[language].toggleAccessibility;
}

// Example of changing language
document.getElementById("languageSelector").addEventListener("change", (event) => {
    setLanguage(event.target.value);
});

// Initial language setup
setLanguage(currentLanguage);