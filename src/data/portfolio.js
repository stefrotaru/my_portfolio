export default [
    {
        title: 'Front End Developer Portfolio',
        imgUrl: './front-end-dev-portfolio-preview.png',
        stack: ['HTML', 'CSS','React.js','Vite' ,'Tailwind', 'Firebase'],
        link: 'https://stefanrotaru.eu/',
        shortDescription: 'My very first personal Portfolio Website.',
        longDescription: '',
        repo: 'https://github.com/stefrotaru/my_portfolio'
    },
    {
        title: 'Mqtt chat client',
        imgUrl: './mqtt-chat-app-preview.jpg',
        stack: ['GO', 'Mqtt','Bubbletea'],
        link: 'https://github.com/stefrotaru/mqtt-chat',
        shortDescription: 'Simple MQTT chat client that is used to demonstrate the use of the MQTT protocol together with the Go programming language.',     
        longDescription: `
        <h1 class="text-xl font-bold pb-4">Mqtt chat client</h1>
        <p>This is a simple MQTT chat client that is used to demonstrate the use of the
        MQTT protocol together with the Go programming language.</p>
        
        <p>The client connects to the MQTT broker running on the same machine on port
        1883 and subscribes to a default topic (you can change the topic name in the
        code below). It also publishes to the same topic.</p>
        
        <p>The client uses the bubbletea library to create a terminal UI. The UI
        consists of a header, a footer and a text input field. The header shows the
        topic name and the footer shows the text input field. The messages are
        displayed in the middle of the screen. The client allows to send text
        messages and action messages (e.g. user joined/left the chat) by typing them
        in the text input field and pressing "Enter". It also allows to send
        commands by typing them in the text input field and pressing "Enter". For now,
        the following commands are supported:</p>
        <ul class="pl-6">
            <li>/quit - The client disconnects from the MQTT broker and exits.</li>
            <li>/hello - The client sends an action message to the chat room saying that the user has joined the chat.</li>
        </ul>
        <p>The client also allows to use the "Tab" key to auto-complete commands. For example, if you type "/h" and press "Tab", the client will auto-complete the command to "/hello".</p>
        <p>The project also includes a docker compose file which deploys a compatible eclipse MQTT broker for the project.</p>
        `,
        repo: 'https://github.com/stefrotaru/mqtt-chat'
    },
    {
        title: 'Splitter',
        imgUrl: './splitter-preview.jpg',
        stack: ['HTML', 'SCSS','JS'],
        link: 'https://stefrotaru.github.io/tip-calculator-app-main/',
        shortDescription: 'Tip calculator app built with HTML, SCSS and JS. This is a challenge from Frontend Mentor.',
        longDescription: '',
        repo: 'https://github.com/stefrotaru/tip-calculator-app-main'
    },
    {
        title: 'Expenses React App',
        imgUrl: './expenses-app-preview.jpg',
        stack: ['HTML', 'CSS', 'JS', 'React.js'],
        link: 'https://stefrotaru.github.io/Expenses-react-app/',
        shortDescription: 'React app that keeps track of your expenses. The main objective of this app was to get used with the useState react hook.',
        longDescription: '',
        repo: 'https://github.com/stefrotaru/Expenses-react-app'
    },
    {
        title: 'More projects coming soon',
        imgUrl: '',
        stack: [],
        link: 'https://github.com/stefrotaru/',
        shortDescription: '',
        longDescription: '',
        repo: ''
    },
]