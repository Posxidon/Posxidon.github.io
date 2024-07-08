import Pneumonia from "../../assets/Pneumonia.jpeg";
import WeatherApp from "../../assets/WeatherApp.jpeg";
import StockMarket from "../../assets/StockMarket.png";
import VoiceAssistant from "../../assets/project3.jpeg";
import Socket from "../../assets/socket.jpeg";
import GroupWatch from "../../assets/groupwatch.jpeg";

export const projectsData = [
    
    {
        id: 1,
        image: GroupWatch,
        title: "GroupWatch",
        techStack: ["TypeScript", "Tailwind CSS", "PostCSS", "Node.js"],
        url: "https://github.com/anupamraj0900/Groupwatch"
    },


    {
        id: 2,
        image: Socket,
        title: "Client-Server File Transfer with Socket API",
        techStack: ["Python", "Socket", "sys", "os"],
        url: "https://github.com/Posxidon/clientserver-socketapi"
    },
    
    {
        id: 3,
        image: WeatherApp,
        title: "WeatherApp",
        techStack: ["Python", "Django", "OpenWeatherMap API"],
        url: "https://github.com/Posxidon/weatherapp"
    },
    
    {
        id: 4,
        image: Pneumonia,
        title: "Pneumonia Detection using ML",
        techStack: ["Python", "TensorFlow", "NumPy", "Matplotlib","pathlib"],
        url: "https://github.com/Posxidon/Pneumonia-Detection-using-ML"
    },
    {
        id: 5,
        image: StockMarket,
        title: "Stock Market Predictor",
        techStack: ["Python", "yfinance", "pandas","scikit-learn","precision_score","sklearn.metrics","matplotlib","plot"],
        url: "https://github.com/Posxidon/stockmarketpredictor"
    },
    {
        id: 6,
        image: VoiceAssistant,
        title: "Voice Assistant",
        techStack: ["Python", "Speech Recognition", "Speech Synthesis", "pywhatkit","pyjokes"],
        url: "https://github.com/Posxidon/Voice-Assistant"
    },
];

export const projectsNav = [
    {
        name: "All",
    },
];
